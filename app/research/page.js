import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

const researchProjects = [
    {
        title: "AI-Based Smart Farming",
        slug: "ai-based-smart-farming",
        category: "Agritech",
        image: "/images/research/2.png",
        shortDesc: "Using AI and IoT to optimize agricultural yield in real-time.",
    },
    {
        title: "Autonomous Drone Swarms",
        slug: "autonomous-drone-swarms",
        category: "Robotics",
        image: "/images/research/1.png",
        shortDesc: "Designing decentralized drone systems for smart surveillance.",
    },
    {
        title: "Healthcare Predictive Modeling",
        slug: "healthcare-predictive-modeling",
        category: "HealthTech",
        image: "/images/research/3.png",
        shortDesc: "Predicting health trends with ML & wearable sensor data.",
    },
    {
        title: "AI in Climate Monitoring",
        slug: "ai-in-climate-monitoring",
        category: "Climate Science",
        image: "/images/research/4.png",
        shortDesc: "Satellite-based climate prediction using deep learning.",
    },
];

export default function ResearchPage() {
    return (
        <main className="bg-gradient-to-b from-white via-sky-50 to-blue-50 min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 text-center bg-gradient-to-br from-orange-50 via-white to-sky-50 rounded-xl">
                <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Explore Our Research</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    From AI-driven agriculture to autonomous systems and predictive health — DAVISE Lab is building the future.
                </p>
            </section>

            {/* Tags Section */}
            <section className="w-full py-6 flex flex-wrap justify-center gap-4">
                {["AI", "IoT", "Climate", "Robotics", "HealthTech", "Autonomous Systems"].map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 px-4 py-1 text-sm font-medium rounded-full shadow-sm hover:bg-blue-200 transition"
                    >
                        {tag}
                    </span>
                ))}
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Highlighted Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {researchProjects.map((project, i) => (
                        <Link
                            href={`/research/${project.slug}`}
                            key={i}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-blue-700 mb-1">
                                    <BookOpen className="w-5 h-5" />
                                    <span className="text-sm font-medium uppercase">Research Project</span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-3">{project.shortDesc}</p>

                                <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition">
                                    <span className="text-sm">Read More</span>
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Impact Section */}
            <section className="w-full bg-white py-20 text-center mt-12">
                <h3 className="text-3xl font-bold text-blue-800 mb-4">Why Our Research Matters</h3>
                <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
                    At DAVISE Lab, our innovations directly impact agriculture, healthcare, and the environment through real-world applications.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-blue-700 font-semibold text-lg">
                    <div>🌾 25+ Smart Farming Prototypes</div>
                    <div>🚁 10+ Drone Autonomy Models</div>
                    <div>🧠 5+ AI Health Models</div>
                    <div>🌍 8+ Climate Monitoring Projects</div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-16">
                <h3 className="text-3xl font-bold mb-4">Collaborate With DAVISE Lab</h3>
                <p className="text-lg mb-6">
                    Are you a researcher, student, or industry partner? Reach out to explore internship, research, or innovation opportunities.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
                >
                    Contact Us
                </Link>
            </section>
        </main>
    );
}
