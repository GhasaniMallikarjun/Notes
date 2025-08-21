'use client'
import { create } from 'zustand'
type User = { user_id: string; user_name: string; user_email: string } | null
type State = { user: User; setUser: (u: User) => void }
export const useAuthStore = create<State>((set) => ({ user: null, setUser: (u)=> set({ user: u }) }))
