export default function Services() {
  const services = [
    "Video Consultations",
    "Digital Prescriptions",
    "Medical Records",
    "Easy Booking",
    "Drug Interaction Checker",
    "HIPAA-Grade Security",
  ]

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Core Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((s) => (
          <div key={s} className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-semibold text-xl">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
