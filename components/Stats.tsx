export default function Stats() {
  const stats = [
    { label: "Verified Doctors", value: "10K+" },
    { label: "Platform Uptime", value: "99.9%" },
    { label: "Consultations", value: "50K+" },
    { label: "Support", value: "24/7" },
  ]

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <h3 className="text-3xl font-bold text-purple-600">{s.value}</h3>
            <p className="text-gray-700">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
