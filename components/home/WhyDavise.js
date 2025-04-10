export default function WhyDavise() {
    const reasons = [
      { title: "Expert Faculty", desc: "Led by top researchers in AI & Vision." },
      { title: "State-of-art Lab", desc: "Equipped with modern computing and sensors." },
      { title: "Student Driven", desc: "Hands-on projects, internships, and research opps." },
    ];
  
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose DAVISE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
                <p className="text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  