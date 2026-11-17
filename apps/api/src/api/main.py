from os import getenv

import uvicorn
from fastapi import FastAPI

DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8000

app = FastAPI(
    title="SportGere API",
    version="0.1.0",
)


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


def main() -> None:
    host = getenv("API_HOST", DEFAULT_HOST)
    port = int(getenv("API_PORT", str(DEFAULT_PORT)))

    uvicorn.run(app, host=host, port=port)


if __name__ == "__main__":
    main()