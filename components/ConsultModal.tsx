"use client"

import { useState } from "react"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultModal({ isOpen, onClose }: Props) {
  const [symptoms, setSymptoms] = useState("")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-gray-700 bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Describe Your Symptoms
        </h2>

        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="e.g. Fever, headache, sore throat..."
          className="w-full h-32 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          onClick={() => alert("Analyzing symptoms...")}
          className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Analyze
        </button>
      </div>
    </div>
  )
}
