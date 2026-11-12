import os
from functools import lru_cache
from http import HTTPStatus

from fastapi import Depends, FastAPI, Response
from sqlalchemy import Engine, create_engine, text
from sqlalchemy.exc import SQLAlchemyError

app = FastAPI()


@lru_cache
def get_engine() -> Engine:
    return create_engine(os.environ["DATABASE_URL"])


@app.get("/health")
def health(response: Response, engine: Engine = Depends(get_engine)):
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
    except SQLAlchemyError:
        response.status_code = HTTPStatus.SERVICE_UNAVAILABLE
        return {"status": "error", "database": "error"}
    return {"status": "ok", "database": "ok"}
