from sqlalchemy.orm import Session
from app import models, schemas

def create_note(db: Session, note: schemas.NoteCreate, user_id: str):
    new_note = models.Note(note_title=note.note_title, note_content=note.note_content, user_id=user_id)
    db.add(new_note)
    db.commit()
    db.refresh(new_note)
    return new_note

def get_notes(db: Session, user_id: str):
    return db.query(models.Note).filter(models.Note.user_id == user_id).all()

def update_note(db: Session, note_id: str, note: schemas.NoteCreate, user_id: str):
    db_note = db.query(models.Note).filter(models.Note.note_id == note_id, models.Note.user_id == user_id).first()
    if db_note:
        db_note.note_title = note.note_title
        db_note.note_content = note.note_content
        db.commit()
        db.refresh(db_note)
    return db_note

def delete_note(db: Session, note_id: str, user_id: str):
    db_note = db.query(models.Note).filter(models.Note.note_id == note_id, models.Note.user_id == user_id).first()
    if db_note:
        db.delete(db_note)
        db.commit()
    return db_note
