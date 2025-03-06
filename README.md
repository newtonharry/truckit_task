# Truckit Task

This project uses **FastAPI** for the backend and **React** for the frontend, with **Bun** managing JavaScript dependencies.

## Prerequisites

- **Bun** ([Installation instructions here](https://bun.sh))
- **uv** ([Installation instructions here](https://github.com/astral-sh/uv))

# Setup

1. Create the python virtual environment and install the dependencies:

```bash
uv 


2. Synchronise the JavaScript dependencies and compile the jsx file:

```bash
bun install
bun build static/client.jsx --outfile=static/client.js
```

3. Start the backend server:

```bash
uv run fastapi dev api.py
```

