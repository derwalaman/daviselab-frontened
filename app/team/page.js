"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const teamData = [
    {
        name: "Aman Derwal",
        role: "Developer & Techkiest",
        department: "Web Development",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/male.png",
        socials: {
            linkedin: "https://linkedin.com/amanderwal",
            github: "https://github.com/derwalaman",
            twitter: "https://instagram.com/amanderwal02",
        },
    },
    {
        name: "Riya Mehta",
        role: "AI Researcher",
        department: "Research",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/female.png",
        socials: {
            linkedin: "https://linkedin.com/in/riya",
            github: "https://github.com/riya",
            twitter: "https://twitter.com/riya",
        },
    },
    {
        name: "Dr. Sahil",
        role: "Lab Director",
        department: "Research",
        position: "Assistant Professor",
        image: "/images/team/male.png",
        socials: {
            linkedin: "https://linkedin.com/in/kunal",
            github: "https://github.com/kunal",
            twitter: "https://twitter.com/kunal",
        },
    },
    {
        name: "Dr. Neha Sharma",
        role: "Senior Scientist",
        department: "Research",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/female.png",
        socials: {
            linkedin: "https://linkedin.com/in/neha",
            github: "https://github.com/neha",
            twitter: "https://twitter.com/neha",
        },
    },
    {
        name: "Aryan Pawar",
        role: "Frontend Developer",
        department: "Web Development",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/male.png",
        socials: {
            linkedin: "https://linkedin.com/in/aryan",
            github: "https://github.com/aryan",
            twitter: "https://twitter.com/aryan",
        },
    },
    {
        name: "Riya Mehta",
        role: "AI Researcher",
        department: "Research",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/female.png",
        socials: {
            linkedin: "https://linkedin.com/in/riya",
            github: "https://github.com/riya",
            twitter: "https://twitter.com/riya",
        },
    },
    {
        name: "Kunal Sinha",
        role: "Backend Developer",
        department: "Web Development",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/male.png",
        socials: {
            linkedin: "https://linkedin.com/in/kunal",
            github: "https://github.com/kunal",
            twitter: "https://twitter.com/kunal",
        },
    },
    {
        name: "Dr. Neha Sharma",
        role: "Senior Scientist",
        department: "Research",
        position: "Btech 2nd Year CSE Student",
        image: "/images/team/female.png",
        socials: {
            linkedin: "https://linkedin.com/in/neha",
            github: "https://github.com/neha",
            twitter: "https://twitter.com/neha",
        },
    },
];

const departments = ["All", "Web Development", "Research", "Designer"];

export default function TeamPage() {
    const [selectedDept, setSelectedDept] = useState("All");

    const filteredTeam =
        selectedDept === "All"
            ? teamData
            : teamData.filter((member) => member.department === selectedDept);

    return (
        <section className="py-20 px-6 md:px-20 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
                <p className="mt-2 text-gray-500 text-lg">Passionate people building something amazing.</p>
            </div>

            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {departments.map((dept) => (
                    <button
                        key={dept}
                        onClick={() => setSelectedDept(dept)}
                        className={`px-5 py-2 rounded-full border text-sm font-medium transition duration-200 ${selectedDept === dept
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-gray-300 text-gray-700 hover:bg-blue-50"
                            }`}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            {/* Centered & Responsive Grid */}
            <div className="flex justify-center">
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredTeam.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-gray-50 p-6 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 ease-in-out"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-blue-600">{member.role}</p>
                            {/* <p className="text-sm text-green-600">{member.position}</p> */}
                            <div className="mt-4 flex justify-center gap-4 text-gray-500 text-lg">
                                <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                                    <FaLinkedin className="hover:text-blue-700 transition-colors duration-200" />
                                </a>
                                <a href={member.socials.github} target="_blank" rel="noreferrer">
                                    <FaGithub className="hover:text-gray-900 transition-colors duration-200" />
                                </a>
                                <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                                    <FaInstagram className="hover:text-blue-500 transition-colors duration-200" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
