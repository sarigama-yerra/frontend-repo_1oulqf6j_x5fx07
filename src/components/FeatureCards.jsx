import React from 'react'
import { AlarmCheck, MapPin, PhoneIncoming, Video, Route, LifeBuoy, BookOpenText, Users2 } from 'lucide-react'

const features = [
  {
    icon: AlarmCheck,
    title: 'SOS Emergency Button',
    desc: 'Sends instant alert + live location to trusted contacts.'
  },
  {
    icon: MapPin,
    title: 'Live Location Sharing',
    desc: 'Share real-time location for 15 min / 1 hr / until safe.'
  },
  {
    icon: PhoneIncoming,
    title: 'Fake Call Feature',
    desc: 'Trigger a realistic incoming call to escape unsafe situations.'
  },
  {
    icon: Video,
    title: 'Danger Recording Mode',
    desc: 'Auto-start audio/video recording and auto-save to cloud.'
  },
  {
    icon: Route,
    title: 'Safe Route Navigation',
    desc: 'Choose well-lit and safer travel routes.'
  },
  {
    icon: LifeBuoy,
    title: 'Helpline Support',
    desc: 'One-click access to women helplines, police, NGOs.'
  },
  {
    icon: BookOpenText,
    title: 'Safety Tips Library',
    desc: 'Self-defense, travel safety, emergency guidance.'
  },
  {
    icon: Users2,
    title: 'Trusted Contacts System',
    desc: 'Add 3–5 people who get alerts instantly.'
  }
]

export default function FeatureCards() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Powerful, simple safety tools</h2>
          <p className="mt-3 text-gray-700">Everything you need to feel safer in everyday moments.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-black/5 bg-gradient-to-br from-white to-purple-50/40 p-5 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-pink-200/40 blur-2xl group-hover:scale-125 transition" />
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-white grid place-items-center shadow-lg shadow-purple-500/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
