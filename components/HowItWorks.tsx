export default function HowItWorks() {
  const steps = [
    "Register in under 2 minutes",
    "Find a doctor by specialty",
    "Book & pay securely",
    "Consult via video call",
  ]

  return (
    <section className="py-20 bg-gray-50 text-gray-700">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 px-6">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
              {i + 1}
            </span>
            <p className="text-lg">{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
