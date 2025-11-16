import React from 'react'
import { Apple, Play } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Get Sakhii</h2>
        <p className="mt-3 text-gray-700">Coming soon on your favorite app stores.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white bg-gray-900 hover:bg-black transition">
            <Play size={20} />
            Google Play — Coming Soon
          </button>
          <button className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white bg-gray-900 hover:bg-black transition">
            <Apple size={20} />
            App Store — Coming Soon
          </button>
        </div>
      </div>
    </section>
  )
}
