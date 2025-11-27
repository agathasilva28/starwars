## Note for the Evaluator

While building the interface, I noticed some unusual sizing values in the Zeplin specs.  
For example:

- Base font sizes around **9px** for titles  
- Values like **0.5px** for spacing or components  

These numbers made the UI appear much smaller than the Zeplin preview itself.  
To keep the layout visually aligned with the actual mockup, I made the decision to double all sizes.  
This produced a much closer match to the intended design.

However, in case the original Zeplin values *were* correct and intentionally small. I kept a full alternative theme with those exact sizes.

### Switching Between Themes

If you want to swap to the Zeplin-original sizing:

1. Go to:  
   **`frontend/main.tsx`**
2. On **line 14**, replace: **theme** with **themeByZeplin**

This will apply the exact specs directly from Zeplin.

Now to the actual readme.

# Docker Compose setup

This workspace includes a simple `docker-compose.yml` that defines the following services:

- `db` — PostgreSQL (image `postgres:15-alpine`)
- `redis` — Redis (image `redis:7-alpine`)
- `backend` — Node.js backend (built from `./backend`)
- `frontend` — React app (built from `./frontend`)
- `bull-worker` — BullMQ app

Quick start

1. Build and start all services (from project root):

```powershell
docker compose up --build
```

2. Services will be available at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- Postgres: `localhost:5432` (use values from `.env`)

Notes

- The `backend` and `frontend` services use simple Dockerfiles suitable for development. They run `npm install` on container start in this compose file so you can iterate locally. For production, consider using multi-stage builds and not mounting source with volumes.
- If you already have services running on port `3000` or `3001`, change the host ports in `docker-compose.yml`.
