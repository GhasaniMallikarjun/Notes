'use client'
import { useState } from 'react'
import NoteEditor from './NoteEditor'

type Props = {
  initial?: { note_id?: string; note_title?: string; note_content?: string };
  onClose: ()=>void;
  onSave: (payload: { note_title: string; note_content: string; id?: string }) => void;
  onDelete?: (id: string) => void;
};

export default function AddEditModal({ initial, onClose, onSave, onDelete }: Props){
  const [title, setTitle] = useState(initial?.note_title || '')
  const [content, setContent] = useState(initial?.note_content || '')

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="bg-[#f6ebd6] rounded-lg shadow-xl w-[640px] p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">{initial?.note_id ? initial.note_title || 'Edit' : 'Add Notes'}</h3>
          <button onClick={onClose} className="text-red-500">✕</button>
        </div>

        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" className="input mb-3" />
        <NoteEditor value={content} onChange={setContent} />

        <div className="flex justify-end gap-3 mt-4">
          {initial?.note_id && <button onClick={()=>{ if(onDelete && initial.note_id) onDelete(initial.note_id); }} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>}
          <button onClick={()=>onClose()} className="btn">Cancel</button>
          <button onClick={()=>onSave({ note_title: title, note_content: content, id: initial?.note_id })} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  )
}
