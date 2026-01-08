"use client"

import { useEffect, useState } from "react"
import ConsultModal from "./ConsultModal"

const links = [
  { id: "services", label: "Services" },
  { id: "how", label: "How It Works" },
  { id: "ai", label: "AI" },
  { id: "testimonials", label: "Testimonials" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("")
  const [consultOpen, setConsultOpen] = useState(false)

  // 🔹 Active link detection
  useEffect(() => {
    const handleScroll = () => {
      links.forEach(link => {
        const section = document.getElementById(link.id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-bold text-purple-600">
            TeleHealth
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition ${
                  active === link.id
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => setConsultOpen(true)}
            className="hidden md:block bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
          >
            CONSULT NOW
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t animate-slideDown">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 border-b ${
                  active === link.id
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setConsultOpen(true)
                setMenuOpen(false)
              }}
              className="w-full text-left px-6 py-4 bg-purple-600 text-white font-semibold"
            >
              CONSULT NOW
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      <ConsultModal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
      />
    </>
  )
}
