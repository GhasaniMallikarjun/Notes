from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, crud, utils, models

router = APIRouter(prefix="/api/notes", tags=["Notes"])

@router.post("/", response_model=schemas.NoteOut)
def create_note(note: schemas.NoteCreate, db: Session = Depends(utils.get_db), current_user: models.User = Depends(utils.get_current_user)):
    return crud.notes.create_note(db, note, current_user.user_id)

@router.get("/", response_model=list[schemas.NoteOut])
def get_notes(db: Session = Depends(utils.get_db), current_user: models.User = Depends(utils.get_current_user)):
    return crud.notes.get_notes(db, current_user.user_id)

@router.put("/{note_id}", response_model=schemas.NoteOut)
def update_note(note_id: str, note: schemas.NoteCreate, db: Session = Depends(utils.get_db), current_user: models.User = Depends(utils.get_current_user)):
    db_note = crud.notes.update_note(db, note_id, note, current_user.user_id)
    if not db_note:
        raise HTTPException(status_code=404, detail="Note not found")
    return db_note

@router.delete("/{note_id}")
def delete_note(note_id: str, db: Session = Depends(utils.get_db), current_user: models.User = Depends(utils.get_current_user)):
    db_note = crud.notes.delete_note(db, note_id, current_user.user_id)
    if not db_note:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"message": "Note deleted"}
