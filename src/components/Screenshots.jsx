import React from 'react'
import { ShieldAlert, MapPinned, BellRing, Contact } from 'lucide-react'

const items = [
  { title: 'SOS Button', icon: ShieldAlert, color: 'from-pink-500 to-purple-600' },
  { title: 'Live Map', icon: MapPinned, color: 'from-teal-500 to-blue-600' },
  { title: 'Instant Alerts', icon: BellRing, color: 'from-purple-500 to-indigo-600' },
  { title: 'Trusted Contacts', icon: Contact, color: 'from-rose-500 to-pink-600' }
]

export default function Screenshots() {
  return (
    <section id="screens" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">See Sakhii in action</h2>
          <p className="mt-3 text-gray-700">A glimpse of the experience you’ll have in the app.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon, color }) => (
            <div key={title} className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-purple-50/40 p-5 shadow-sm">
              <div className={`aspect-[9/16] w-full rounded-2xl overflow-hidden bg-gradient-to-br ${color} grid place-items-center text-white shadow-lg`}>
                <Icon size={48} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-700">Clean, focused interface built to act fast.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
