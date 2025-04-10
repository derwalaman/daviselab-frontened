"use client";

import { useState } from "react";
import Link from "next/link";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5001/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error("Submission failed");
            }

            alert("Form sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            alert("Failed to submit form.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-gradient-to-br from-orange-50 via-white to-sky-100 text-gray-800 min-h-screen">
            {/* 🎯 Hero */}
            <section className="text-center py-20 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100">
                <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800">💬 Contact DAVISE Lab</h1>
                <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
                    We'd love to hear from you — whether you're a student, researcher, or collaborator.
                </p>
            </section>

            {/* 📞 Contact Info + Form */}
            <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-32 py-20">
                {/* Left: Contact Info */}
                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-blue-900">Get in Touch</h2>
                    <div className="space-y-5 text-lg">
                        <div className="flex items-center gap-3">
                            <Image src="/icons/email.png" alt="email" width={24} height={24} />
                            <span>davise@nitdelhi.ac.in</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/icons/phone.png" alt="phone" width={24} height={24} />
                            <span>+91 9876543210</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src="/icons/location.png" alt="location" width={24} height={24} />
                            <span>NIT Delhi, GT Karnal Road, Delhi-110036</span>
                        </div>
                    </div>

                    {/* 🌐 Social Links */}
                    <div className="pt-4">
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">Follow Us</h3>
                        <div className="flex items-center gap-5">
                            <Link href="https://instagram.com/nitd_davise" target="_blank">
                                <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} className="hover:scale-110 transition" />
                            </Link>
                            <Link href="https://wa.me/919876543210" target="_blank">
                                <Image src="/icons/whatsapp.png" alt="WhatsApp" width={32} height={32} className="hover:scale-110 transition" />
                            </Link>
                            <Link href="https://linkedin.com/in/nitdelhi-davise" target="_blank">
                                <Image src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} className="hover:scale-110 transition" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <form onSubmit={handleSubmit} className="bg-white border-2 border-blue-100 shadow-xl rounded-2xl p-10 space-y-6">
                    <h2 className="text-2xl font-bold text-blue-700">Send us a message</h2>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 outline-none bg-transparent"
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 outline-none bg-transparent"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Your Message"
                        required
                        className="w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 outline-none bg-transparent resize-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        ) : (
                            <>
                                <SendHorizonal className="w-4 h-4" />
                                Send
                            </>
                        )}
                    </button>
                </form>
            </section>

            {/* 📍 How to Reach */}
            <section className="px-6 md:px-12 lg:px-32 py-20 text-center bg-gradient-to-br from-sky-50 to-orange-50">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">📍 How to Reach NIT Delhi</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-10">
                    Located near GT Karnal Road, NIT Delhi is easily accessible via Metro (Jahangirpuri/Samaypur Badli) and roadways. Take a cab or auto from the nearest station.
                </p>
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7495055428058!2d77.13039097631508!3d28.816537775564804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1744286633237!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-0 w-full h-full"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </main>
    );
}
