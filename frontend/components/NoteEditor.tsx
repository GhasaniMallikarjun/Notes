'use client'
import { useEffect, useRef } from 'react'
type Props = { value: string; onChange: (v: string) => void }
export default function NoteEditor({ value, onChange }: Props){
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{ if(ref.current && ref.current.innerHTML !== value) ref.current.innerHTML = value }, [value])
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <button type="button" className="btn" onClick={()=>document.execCommand('bold')}>B</button>
        <button type="button" className="btn" onClick={()=>document.execCommand('italic')}>I</button>
        <button type="button" className="btn" onClick={()=>document.execCommand('underline')}>U</button>
      </div>
      <div ref={ref} contentEditable onInput={(e)=>onChange((e.target as HTMLDivElement).innerHTML)} className="min-h-[160px] rounded-xl border border-[#b8937e] p-3 bg-white" />
    </div>
  )
}
