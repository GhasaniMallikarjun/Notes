"use client";

type NoteCardProps = {
  title: string;
  content: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function NoteCard({ title, content, onEdit, onDelete }: NoteCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{content}</p>
      <div className="flex gap-2 mt-4">
        {onEdit && (
          <button
            onClick={onEdit}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
