from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routes import auth_routes, user_routes, note_routes

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Keep Notes API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)
app.include_router(user_routes.router)
app.include_router(note_routes.router)

@app.get("/")
def root():
    return {"message": "Keep Notes API is running!"}
