# Development

Everything needed to run and work on the project locally.

## Running everything with Docker

One command starts the backend, the database and the frontend.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with Docker Compose v2 (`docker compose`).

### Start

1. Copy the example environment file:

   ```sh
   cp .env.example .env
   ```

   The defaults work as they are for local development. `.env` is not committed.

2. Build and start the three services:

   ```sh
   docker compose up --build
   ```

3. Open the app:

   | Service  | URL                           |
   | -------- | ----------------------------- |
   | Frontend | http://localhost:5173         |
   | Backend  | http://localhost:8000/health  |

   The frontend page shows a confirmation when the backend can reach the database.

### Stop

```sh
docker compose down
```

The database data is kept in the `postgres_data` volume, so it is still there the next time you run `docker compose up`.

To also delete the database data, add `-v`:

```sh
docker compose down -v
```

### Live reload

The source code is mounted into the containers: edit a file under `backend/` or `frontend/` and the change is applied without rebuilding or restarting.

### Changing frontend dependencies

`node_modules` lives in its own volume. After changing `frontend/package.json`, recreate it:

```sh
docker compose up --build -V
```

### Running the tests

With the stack running:

```sh
docker compose exec backend pytest
docker compose exec frontend npm test
```
