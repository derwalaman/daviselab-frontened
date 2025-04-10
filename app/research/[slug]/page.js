"use client";

import { useEffect, useState } from "react";

export default function ResearchDetail({ params }) {
    const { slug } = params;

    // Random mock data for now
    const [researchData, setResearchData] = useState(null);

    useEffect(() => {
        // Simulated fetch
        const fakeData = {
            title: slug.replace(/-/g, " ").toUpperCase(),
            intro: "This research focuses on leveraging cutting-edge techniques in the field of artificial intelligence to solve real-world problems.",
            objectives: [
                "Understand core challenges in the domain",
                "Develop efficient algorithms and models",
                "Publish research papers in reputed journals",
            ],
            methodology: "We followed a multi-stage approach starting with data collection, followed by preprocessing, model training using deep learning, and finally testing with real-world benchmarks.",
            findings: "The model achieved 94% accuracy in real-world test cases and outperformed traditional methods by 30%.",
            applications: "This research can be applied in fields such as medical imaging, autonomous navigation, and smart surveillance.",
            team: [
                { name: "Dr. Aryan Pawar", role: "Lead Researcher" },
                { name: "Ananya Sharma", role: "Ph.D. Scholar" },
                { name: "Ritik Mehta", role: "Research Intern" },
            ],
        };

        setResearchData(fakeData);
    }, [slug]);

    if (!researchData) return <div className="p-10 text-center">Loading research details...</div>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">{researchData.title}</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h2>
                <p className="text-gray-700">{researchData.intro}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Objectives</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {researchData.objectives.map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Methodology</h2>
                <p className="text-gray-700">{researchData.methodology}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Findings / Results</h2>
                <p className="text-gray-700">{researchData.findings}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Applications</h2>
                <p className="text-gray-700">{researchData.applications}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Team Members</h2>
                <ul className="space-y-2">
                    {researchData.team.map((member, idx) => (
                        <li key={idx} className="bg-blue-100 p-3 rounded-md shadow">
                            <span className="font-medium">{member.name}</span> — {member.role}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
