import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class User(Base):
    __tablename__ = "users"
    user_id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_name = Column(String(100), nullable=False)
    user_email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    last_update = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_on = Column(DateTime, default=datetime.utcnow)

    notes = relationship("Note", back_populates="owner")

class Note(Base):
    __tablename__ = "notes"
    note_id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    note_title = Column(String(200), nullable=False)
    note_content = Column(Text, nullable=False)
    last_update = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_on = Column(DateTime, default=datetime.utcnow)

    user_id = Column(String(36), ForeignKey("users.user_id"))
    owner = relationship("User", back_populates="notes")
