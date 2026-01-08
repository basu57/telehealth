export default function AIFeatures() {
  const features = [
    "AI Symptom Checker",
    "Doctor AI Assistant",
    "Smart Drug Alerts",
  ]

  return (
    <section className="py-20 ">
      <h2 className="text-4xl font-bold text-center mb-12">
        AI-Powered Features
      </h2>

      <div className="max-w-4xl text-gray-700 mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((f) => (
          <div
            key={f}
            className="p-6 bg-purple-50 rounded-xl text-center font-semibold"
          >
            {f}
          </div>
        ))}
      </div>
    </section>
  )
}
