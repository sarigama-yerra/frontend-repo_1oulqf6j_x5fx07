import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-extrabold text-gray-900">Sakhii</h3>
          <p className="mt-2 text-sm text-gray-600">A safety companion built to protect, support, and empower women.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">About</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-purple-600">About Sakhii</a></li>
            <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="mailto:hello@sakhii.app" className="hover:text-purple-600">hello@sakhii.app</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Follow</h4>
          <div className="mt-3 flex items-center gap-3 text-gray-700">
            <a href="#" className="p-2 rounded-lg bg-white border border-black/5 hover:text-purple-600"><Facebook size={18} /></a>
            <a href="#" className="p-2 rounded-lg bg-white border border-black/5 hover:text-purple-600"><Instagram size={18} /></a>
            <a href="#" className="p-2 rounded-lg bg-white border border-black/5 hover:text-purple-600"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-5 text-center text-xs text-gray-500">© {new Date().getFullYear()} Sakhii. All rights reserved.</div>
    </footer>
  )
}
