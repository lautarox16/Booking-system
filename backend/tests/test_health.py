from http import HTTPStatus

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine

from app.main import app, get_engine

UNREACHABLE_DATABASE_URL = "postgresql+psycopg://user:password@localhost:1/booking"


@pytest.fixture(autouse=True)
def clear_dependency_overrides():
    yield
    app.dependency_overrides.clear()


def test_health_returns_ok_when_database_is_reachable():
    client = TestClient(app)

    response = client.get("/health")

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {"status": "ok", "database": "ok"}


def test_health_reports_error_when_database_is_unreachable():
    app.dependency_overrides[get_engine] = lambda: create_engine(UNREACHABLE_DATABASE_URL)
    client = TestClient(app)

    response = client.get("/health")

    assert response.status_code == HTTPStatus.SERVICE_UNAVAILABLE
    assert response.json()["database"] == "error"
