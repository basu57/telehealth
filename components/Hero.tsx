"use client"

import { useState } from "react"
import ConsultModal from "./ConsultModal"

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <>
     <section className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white animate-fadeIn">

        <div className="text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6">
            Quality Healthcare at Your Fingertips
          </h1>

          <p className="text-lg opacity-90 mb-8">
            Video consultations, AI-powered care, and instant prescriptions.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            CONSULT NOW
          </button>
        </div>
      </section>

      <ConsultModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
