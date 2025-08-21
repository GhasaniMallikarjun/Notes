"use client";

import NoteCard from "../../components/NoteCard";

export default function NotesPage() {
  const notes = [
    { id: 1, title: "First Note", content: "This is my first note" },
    { id: 2, title: "Second Note", content: "Another note example" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
          onEdit={() => console.log("edit", note.id)}
          onDelete={() => console.log("delete", note.id)}
        />
      ))}
    </div>
  );
}
