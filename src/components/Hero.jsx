import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/3 h-[600px] w-[600px] rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/3 h-[600px] w-[600px] rounded-full bg-purple-200/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/60 bg-white/70 px-3 py-1 text-pink-700 text-xs font-semibold shadow-sm">
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
            Sakhii — A Friend Who Protects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Sakhii — Your Safety, Your Power
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            A smart safety app for every woman, designed to protect you anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#download" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 shadow-lg shadow-purple-500/20 hover:opacity-95 transition">
              Download App
            </a>
            <button onClick={onExplore} className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-purple-700 bg-white border border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition">
              Explore Features
            </button>
          </div>
          <p className="text-sm text-gray-600">Stay Safe. Stay Strong.</p>
        </div>
        <div className="relative h-[380px] sm:h-[460px] md:h-[560px] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
