import React from 'react'
import { Menu, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-teal-400 grid place-items-center text-white shadow-lg shadow-purple-500/20">
            <ShieldCheck size={20} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tight text-gray-900">Sakhii</span>
            <span className="text-[10px] font-medium text-pink-600">Your Personal Safety Companion</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-purple-600 transition">Features</a>
          <a href="#how" className="hover:text-purple-600 transition">How it helps</a>
          <a href="#screens" className="hover:text-purple-600 transition">Screens</a>
          <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
          <a href="#download" className="hover:text-purple-600 transition">Download</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 shadow-lg shadow-purple-500/20 hover:opacity-95 transition">Get the App</a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-gray-700">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}
