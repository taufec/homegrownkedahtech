'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4 pt-4">
      <div className="flex items-center justify-between bg-black text-white rounded-full px-6 py-3 shadow-lg border-b-4 border-[#00ff66]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#00ff66] rounded-sm" />
          <span className="text-white font-black text-lg leading-tight">kedah<br/>tech</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#discover" className="hover:text-[#00ff66] transition-colors">discover</Link>
          <Link href="#submit" className="hover:text-[#00ff66] transition-colors">submit</Link>
          <Link href="#engage" className="hover:text-[#00ff66] transition-colors">engage</Link>
          <Link href="#grow" className="hover:text-[#00ff66] transition-colors">grow</Link>
        </div>
        <button className="md:hidden flex flex-col gap-1 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-5 h-0.5 bg-white block" />
          <span className="w-5 h-0.5 bg-white block" />
          <span className="w-5 h-0.5 bg-white block" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black rounded-2xl mt-2 px-6 py-4 flex flex-col gap-4 text-white text-sm">
          <Link href="#discover" onClick={() => setMenuOpen(false)}>discover</Link>
          <Link href="#submit" onClick={() => setMenuOpen(false)}>submit</Link>
          <Link href="#engage" onClick={() => setMenuOpen(false)}>engage</Link>
          <Link href="#grow" onClick={() => setMenuOpen(false)}>grow</Link>
        </div>
      )}
    </nav>
  )
}
