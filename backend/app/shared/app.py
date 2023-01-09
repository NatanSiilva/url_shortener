from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from .routes import api

app = FastAPI(
    openapi_url="/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc",
)

origins = [
    "http://localhost:8000",
    "http://urlshortener.natandev.com.br"
    "https://urlshortener.natandev.com.br"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin for origin in origins],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="app/shared/static"), name="static")

app.include_router(api, prefix="")
