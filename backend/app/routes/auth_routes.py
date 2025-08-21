from fastapi import APIRouter, Depends, HTTPException, Form
from sqlalchemy.orm import Session
from app import schemas, crud, auth, utils

router = APIRouter(prefix="/api/auth", tags=["Auth"])

@router.post("/register", response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(utils.get_db)):
    if crud.users.get_user_by_email(db, user.user_email):
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.users.create_user(db, user)

@router.post("/login", response_model=schemas.Token)
def login(
    email: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(utils.get_db),
):
    user = crud.users.get_user_by_email(db, email)
    if not user or not auth.verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = auth.create_access_token({"sub": user.user_id})
    return {"access_token": token, "token_type": "bearer"}
