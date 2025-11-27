## Docker Compose setup

This workspace includes a simple `docker-compose.yml` that defines the following services:

- `db` — PostgreSQL (image `postgres:15-alpine`)
- `redis` — Redis (image `redis:7-alpine`)
- `backend` — Node.js backend (built from `./backend`)
- `frontend` — React app (built from `./frontend`)
- `bull-worker` — BullMQ app

### Quick start

1. Build and start all services (from project root):

```powershell
docker compose up --build
```

2. Services will be available at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- Postgres: `localhost:5432` (use values from `.env`)

### Notes

- The `backend` and `frontend` services use simple Dockerfiles suitable for development. They run `npm install` on container start in this compose file so you can iterate locally. For production, consider using multi-stage builds and not mounting source with volumes.
- If you already have services running on port `3000` or `3001`, change the host ports in `docker-compose.yml`.

## Backend routes

### Stats

Returns analytics about the search system, based on all logged requests.

What the response includes:

| Field           | Description                                             |
|-----------------|---------------------------------------------------------|
| total           | Total number of /search requests logged                 |
| topQueries      | Top 5 most-searched keywords with percentages           |
| avgResponseTime | Average response time (ms) for /search requests         |
| peakHour        | The hour of the day (0–23) with the most search traffic |
| updatedAt       | When this snapshot was last recomputed                  |

Endpoint

```powershell
GET /stats
```

### Search

The search endpoint allows the frontend to request data for either people or movies using query parameters.
The format looks like this:

Parameters

- type: tells the API what category to search.
    - Allowed values: people or movie

- q: the search term used to filter results
    - Example: "luke" will look for “Luke Skywalker”

Example

```powershell
GET /search?type=people&q=luke
```

### People

return Star Wars character details

Endpoint

```powershell
GET /people/:id
```

Exemple

```powershell
GET /people/1
```

### Movie

return Star Wars films details

Endpoint

```powershell
GET /movies/:id
```

Exemple

```powershell
GET /movies/1
```
