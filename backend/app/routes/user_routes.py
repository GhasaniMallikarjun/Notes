from fastapi import APIRouter, Depends
from app import schemas, utils, models
from sqlalchemy.orm import Session

router = APIRouter(prefix="/api/users", tags=["Users"])

@router.get("/me", response_model=schemas.UserOut)
def get_me(current_user: models.User = Depends(utils.get_current_user)):
    return current_user
