import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import HowHelps from './components/HowHelps'
import Screenshots from './components/Screenshots'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  const featureRef = useRef(null)

  const scrollToFeatures = () => {
    featureRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero onExplore={scrollToFeatures} />
      <div ref={featureRef}>
        <FeatureCards />
      </div>
      <HowHelps />
      <Screenshots />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}

export default App
