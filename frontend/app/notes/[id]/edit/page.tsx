"use client";

import { useState } from "react";

export default function EditNotePage() {
  const [title, setTitle] = useState("Sample Note");
  const [content, setContent] = useState("This is pre-filled note content");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Edit note:", title, content);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-xl max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
          rows={5}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
