# 📝 Keep Notes – Full Stack Notes App

## 📌 Overview
**Keep Notes** is a full-stack notes management application.  
It provides user authentication and CRUD operations for notes.  

- **Frontend** → Next.js + TailwindCSS  
- **Backend** → FastAPI (Python) + SQLAlchemy  
- **Database** → MySQL  
- **Authentication** → JWT-based  

---

## ⚙️ 1. Installation & Running

### 🖥️ Prerequisites
- Python 3.9+
- Node.js 18+
- MySQL 8+
- (Optional) Docker & docker-compose

---

### 🔹 Backend Setup
1. Clone the repository & go into backend folder:
   ```bash
   cd notes-backend-fastapi
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # (Linux/Mac)
   venv\Scripts\activate      # (Windows)
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create MySQL database:
   ```sql
   CREATE DATABASE notesdb;
   ```

5. Copy `.env.example` → `.env` and configure:
   ```
   DATABASE_URL=mysql+pymysql://root:yourpassword@localhost:3306/notesdb
   SECRET_KEY=your_secret_key
   ```

6. Run backend:
   ```bash
   uvicorn app.main:app --reload
   ```

7. API available at → [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 🔹 Frontend Setup
1. Go into frontend folder:
   ```bash
   cd notes-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open app in → [http://localhost:3000](http://localhost:3000)

---

## 🌍 API Endpoints

### 🔑 Auth
- `POST /api/auth/register` → Register user
- `POST /api/auth/login` → Login & get JWT
- `GET /api/users/me` → Get current user (requires token)

### 📝 Notes
- `POST /api/notes/` → Create note
- `GET /api/notes/` → Get all notes
- `PUT /api/notes/{id}` → Update note
- `DELETE /api/notes/{id}` → Delete note

---

## 🏗️ Design Decisions & Trade-offs

1. **FastAPI over Django/Flask**  
   - Chosen for performance & built-in docs (Swagger UI).
   - Django was heavier; Flask would need more manual setup.

2. **MySQL vs MongoDB**  
   - MySQL chosen since data is relational (users + notes).
   - Ensures ACID transactions & structured queries.

3. **JWT Auth**  
   - Lightweight & stateless → suitable for scaling.
   - Trade-off: Token revocation is harder vs session-based.

4. **Folder Structure**  
   - Separated by concerns (`routers/`, `models/`, `schemas/`, `core/`).
   - Improves maintainability & readability.

---

## 📚 External Resources Used
- **FastAPI Docs** → [https://fastapi.tiangolo.com/](https://fastapi.tiangolo.com/)  
- **SQLAlchemy Docs** → [https://docs.sqlalchemy.org/](https://docs.sqlalchemy.org/)  
- **JWT in FastAPI (tutorial snippets)** → [https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/)  
- **Passlib** (for password hashing) → [https://passlib.readthedocs.io/](https://passlib.readthedocs.io/)  

---

## 🚀 Performance
- SQLAlchemy ORM optimized with indexes on `user_email` & `note_id`.  
- Passwords hashed with **bcrypt** (secure, tested).  
- JWT ensures quick validation without DB lookups.  
- For testing performance: `ab` (ApacheBench) or `locust` can be used.  
