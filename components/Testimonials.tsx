export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Patient",
      text: "Fast service and great video quality.",
      image: "https://i.pravatar.cc/100?img=47",
      rating: 5,
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Doctor",
      text: "Very efficient workflow.",
      image: "https://i.pravatar.cc/100?img=12",
      rating: 5,
    },
    {
      name: "Amit P.",
      role: "Patient",
      text: "Symptom checker gave me peace of mind.",
      image: "https://i.pravatar.cc/100?img=32",
      rating: 4,
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 text-gray-900"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        What Users Say
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < t.rating
                      ? "text-yellow-400 text-lg"
                      : "text-gray-300 text-lg"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p className="italic text-gray-700">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
