# Docker Compose setup

This workspace includes a simple `docker-compose.yml` that defines the following services:

- `db` — PostgreSQL (image `postgres:15-alpine`)
- `redis` — Redis (image `redis:7-alpine`)
- `backend` — Node.js backend (built from `./backend`)
- `frontend` — React app (built from `./frontend`)

Quick start

1. Copy `.env.example` to `.env` and edit any values you want:

```powershell
cp .env.example .env
```

2. Build and start all services (from project root):

```powershell
docker compose up --build
```

3. Services will be available at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- Postgres: `localhost:5432` (use values from `.env`)

Notes

- The `backend` and `frontend` services use simple Dockerfiles suitable for development. They run `npm install` on container start in this compose file so you can iterate locally. For production, consider using multi-stage builds and not mounting source with volumes.
- If you already have services running on port `3000` or `3001`, change the host ports in `docker-compose.yml`.

Want me to also scaffold minimal `package.json` and example apps for frontend/backend? Reply and I will add them.
