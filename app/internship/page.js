"use client";

import { useState } from "react";
import {
    MapPin,
    DollarSign,
    Users,
    CalendarDays,
    Clock,
    X,
} from "lucide-react";
import { motion } from "framer-motion";

const internships = [
    {
        title: "AI Research Intern",
        company: "DAVISE Lab",
        type: "Paid",
        salary: "₹10,000/month",
        location: "Remote",
        deadline: "2025-05-10",
        applicants: 56,
        duration: "3 months",
        start: "May 2025",
    },
    {
        title: "Web Development Intern",
        company: "DAVISE Lab",
        type: "Unpaid",
        salary: "",
        location: "On-site (NIT Delhi)",
        deadline: "2025-04-30",
        applicants: 103,
        duration: "2 months",
        start: "June 2025",
    },
    {
        title: "Computer Vision Intern",
        company: "DAVISE Lab",
        type: "Paid",
        salary: "₹8,000/month",
        location: "Remote",
        deadline: "2025-05-15",
        applicants: 72,
        duration: "4 months",
        start: "May 2025",
    },
    {
        title: "Robotics Intern",
        company: "DAVISE Lab",
        type: "Unpaid",
        salary: "",
        location: "On-site (NIT Delhi)",
        deadline: "2025-05-05",
        applicants: 39,
        duration: "3 months",
        start: "June 2025",
    },
];

const types = ["All", "Paid", "Unpaid"];
const locations = ["All", "Remote", "On-site (NIT Delhi)"];

export default function InternshipPage() {
    const [selectedType, setSelectedType] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [selectedIntern, setSelectedIntern] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null,
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const payload = new FormData();
            Object.entries(formData).forEach(([key, val]) =>
                payload.append(key, val)
            );
            payload.append("internshipTitle", selectedIntern.title);

            const res = await fetch("http://localhost:5001/api/apply", {
                method: "POST",
                body: payload,
            });

            if (!res.ok) throw new Error("Submission failed");

            alert("Application submitted successfully!");
            setShowModal(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                resume: null,
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit application.");
        } finally {
            setLoading(false);
        }
    };

    const filteredInternships = internships.filter(
        (item) =>
            (selectedType === "All" || item.type === selectedType) &&
            (selectedLocation === "All" || item.location === selectedLocation)
    );

    const openModal = (intern) => {
        setSelectedIntern(intern);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedIntern(null);
    };

    return (
        <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-800"
                >
                    Explore Internships
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-600 mt-3 text-lg"
                >
                    Apply now to exciting research and dev opportunities at DAVISE Lab.
                </motion.p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
                <div className="flex gap-2 items-center flex-wrap">
                    <span className="font-medium text-gray-700">Type:</span>
                    {types.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-1 rounded-full border text-sm transition font-medium ${selectedType === type
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-gray-300 text-gray-700 hover:bg-blue-100"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 items-center flex-wrap">
                    <span className="font-medium text-gray-700">Location:</span>
                    {locations.map((loc) => (
                        <button
                            key={loc}
                            onClick={() => setSelectedLocation(loc)}
                            className={`px-4 py-1 rounded-full border text-sm transition font-medium ${selectedLocation === loc
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-gray-300 text-gray-700 hover:bg-blue-100"
                                }`}
                        >
                            {loc}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {filteredInternships.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white shadow-md rounded-3xl p-6 border border-gray-100 transition-all duration-300 ease-in-out"
                    >
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${item.type === "Paid"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {item.type}
                            </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${item.location.includes("Remote")
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-yellow-100 text-yellow-700"
                                    }`}
                            >
                                {item.location}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                            {item.title}
                        </h3>
                        <p className="text-sm text-blue-500 font-semibold">{item.company}</p>

                        <div className="mt-5 space-y-3 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} />
                                <span>{item.type === "Paid" ? item.salary : "Unpaid"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays size={16} />
                                <span>Apply by {item.deadline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{item.duration} | Starts {item.start}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} />
                                <span>{item.applicants} applicants</span>
                            </div>
                        </div>

                        <button
                            onClick={() => openModal(item)}
                            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition-all duration-300"
                        >
                            Apply Now
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {showModal && selectedIntern && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl relative p-8"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                        >
                            <X />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Apply for {selectedIntern.title}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Cover Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleFileChange}
                                    required
                                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition disabled:bg-gray-400"
                            >
                                {loading ? "Submitting..." : "Submit Application"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </section>
    );
}