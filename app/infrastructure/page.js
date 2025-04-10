import { Building, CircuitBoard, Microscope, Rocket, Server, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const facilities = [
    {
        title: "Autonomous Systems Lab",
        icon: <Rocket className="w-6 h-6" />,
        desc: "A high-tech lab focused on AI-powered robotics and drones with motion capture, simulation, and real-time control systems.",
    },
    {
        title: "Embedded Systems Studio",
        icon: <CircuitBoard className="w-6 h-6" />,
        desc: "Equipped with microcontroller kits, sensors, and real-time processing tools for IoT and hardware prototyping.",
    },
    {
        title: "AI & ML Compute Cluster",
        icon: <Server className="w-6 h-6" />,
        desc: "High-performance GPUs and a private compute server optimized for deep learning research and model training.",
    },
    {
        title: "Precision Agriculture Zone",
        icon: <Microscope className="w-6 h-6" />,
        desc: "Experimental setup for smart farming, integrated with real-time sensing, drone imaging, and data analytics.",
    },
];

export default function InfrastructurePage() {
    return (
        <main className="bg-gradient-to-b from-white via-blue-50 to-sky-50 min-h-screen">

            {/* Hero Section */}
            <section className="w-full text-center py-20 bg-gradient-to-br from-sky-50 via-white to-orange-50">
                <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Our Research Infrastructure</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Cutting-edge labs, equipment, and collaborative spaces that power our innovation.
                </p>
            </section>

            {/* Facilities Grid */}
            <section className="py-16 px-6 md:px-12 lg:px-24 xl:px-32">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Featured Labs & Facilities</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-6 text-center"
                        >
                            <div className="flex items-center justify-center text-blue-700 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Facility Image Showcase */}
            <section className="w-full py-20 bg-white text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Take a Closer Look</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
                    A glimpse into our physical space that sparks innovation and collaboration.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24 xl:px-32">
                    {["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"].map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                            <Image
                                src={`/images/infrastructure/${img}`}
                                alt={`Infrastructure ${i + 1}`}
                                width={500}
                                height={300}
                                className="object-cover w-full h-56"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-blue-100 py-20 text-center text-blue-900">
                <h3 className="text-3xl font-bold mb-6">Infrastructure Highlights</h3>
                <div className="flex flex-wrap justify-center gap-10 font-semibold text-lg">
                    <div>🔬 4 Dedicated Labs</div>
                    <div>💻 12+ GPU Compute Nodes</div>
                    <div>📡 40+ Sensors & Devices</div>
                    <div>🏗️ 2000+ sq.ft Research Space</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-16">
                <h3 className="text-3xl font-bold mb-4">Visit or Collaborate with Us</h3>
                <p className="text-lg mb-6 max-w-xl mx-auto">
                    Industry partners, researchers, and students are welcome to explore our labs or propose joint ventures.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
                >
                    Get in Touch
                </Link>
            </section>
        </main>
    );
}
