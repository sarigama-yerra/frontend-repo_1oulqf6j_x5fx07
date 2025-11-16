import React from 'react'

export default function HowHelps() {
  const items = [
    'Late-night travel',
    'Unsafe areas',
    'Harassment situations',
    'Emergency moments',
    'Solo trips'
  ]
  return (
    <section id="how" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Built for real-life moments</h2>
          <p className="mt-4 text-gray-700 max-w-xl">Sakhii steps in when you need it most. Whether you’re walking home at night or dealing with an uncomfortable situation, your safety companion is one tap away.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl bg-white border border-black/5 px-4 py-3 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                <span className="text-gray-800 font-medium">{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-80 md:h-full">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 opacity-60 blur-2xl" />
          <div className="relative rounded-3xl bg-white p-6 border border-black/5 shadow-xl">
            <div className="aspect-[9/16] rounded-2xl border-8 border-black/90 overflow-hidden mx-auto w-64 bg-gray-900">
              <div className="h-24 bg-gradient-to-b from-pink-500 to-purple-600" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-24 bg-gray-800 rounded" />
                <div className="h-6 w-40 bg-gray-800 rounded" />
                <div className="h-6 w-48 bg-gray-800 rounded" />
                <div className="h-24 rounded bg-gray-800" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">Preview mock of Sakhii UI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
