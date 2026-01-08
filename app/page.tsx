import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import HowItWorks from "@/components/HowItWorks"
import AIFeatures from "@/components/AIFeatures"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <AIFeatures />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  )
}
