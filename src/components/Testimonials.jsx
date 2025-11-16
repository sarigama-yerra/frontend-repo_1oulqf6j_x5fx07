import React from 'react'

const testimonials = [
  {
    quote: 'On my late-night commute, Sakhii gave me peace of mind. The live location kept my sister in the loop.',
    name: 'Aisha, Delhi'
  },
  {
    quote: 'The fake call helped me get out of an uncomfortable situation without drawing attention.',
    name: 'Maya, Bengaluru'
  },
  {
    quote: 'I love how quick the SOS is. My friends got my location instantly.',
    name: 'Riya, Mumbai'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Loved by women across India</h2>
          <p className="mt-3 text-gray-700">Real stories of safety and confidence with Sakhii.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm">
              <p className="text-gray-800 leading-relaxed">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-pink-700">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
