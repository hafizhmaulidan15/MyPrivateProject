
import { FlaskConical, Atom, Microscope, Zap, FileText } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Muhammad Al Faqih",
    role: "Chemistry Graduate & Researcher",
    location: "Cimahi, West Java, Indonesia",
    address: "11th, Kotamas XII Street, Padasuka, Cimahi Tengah, Cimahi, West Java, Indonesia",
    email: "m.alfaqih822@gmail.com",
    phone: "+62 813-9573-9440",
    summary: "Recent Chemistry graduate with specialized research experience in porous nickel oxide synthesis for electrochemical sensors. Skilled in advanced spectroscopic analysis (FTIR, UV-Vis, DRS), SEM imaging, and electrochemical techniques (CV & DPV). Proven ability to integrate laboratory expertise with industrial applications, demonstrated through internship in corrosion monitoring at Medco E&P Grissik.",
    researchInterests: ["Electrochemistry", "Nanoporous structure", "Materials characterization"],
    languages: [
      { name: "Bahasa Indonesia", level: "Native" },
      { name: "English", level: "Good working knowledge" },
      { name: "Arabic", level: "Working knowledge" }
    ],
    socials: {
      linkedin: "#", // Placeholder
      github: "#",   // Placeholder
    }
  },
  skills: [
    { name: "Electrochemistry", symbol: "Ec", number: 1, category: "Core", desc: "CV, DPV, LSV" },
    { name: "Nanomaterials", symbol: "Nm", number: 2, category: "Core", desc: "NiO Synthesis" },
    { name: "Spectroscopy", symbol: "Sp", number: 3, category: "Analysis", desc: "FTIR, UV-Vis" },
    { name: "Microscopy", symbol: "Mc", number: 4, category: "Analysis", desc: "SEM Imaging" },
    { name: "Corrosion", symbol: "Co", number: 5, category: "Industrial", desc: "Inhibitor Eval" },
    { name: "Safety", symbol: "Sf", number: 6, category: "Lab", desc: "HSE Procedures" },
    { name: "Data Analysis", symbol: "Da", number: 7, category: "Tech", desc: "Origin, Excel" },
    { name: "Tech Writing", symbol: "Tw", number: 8, category: "General", desc: "Lab Reports" },
  ],
  education: [
    {
      degree: "Bachelor of Science in Chemistry",
      institution: "Universitas Indonesia",
      location: "Depok, Indonesia",
      period: "Aug 2021 — Jul 2025",
      gpa: "3.19 / 4.00",
      thesis: "Synthesis of Porous Nickel Oxide as an Electrochemical Sensor for Theophylline Detection",
      details: [
        "Synthesized porous NiO materials for electrochemical sensing.",
        "Operated FTIR, UV-Vis spectroscopy, and UV-Vis DRS instruments.",
        "Performed SEM imaging and analysis.",
        "Hands-on experience with CV and DPV setups."
      ]
    }
  ],
  experience: [
    {
      role: "Asset Integrity – Surface Engineering Corridor Intern",
      company: "Medco E&P Grissik, Ltd.",
      location: "South Jakarta, Indonesia",
      period: "Jan 2024 — Feb 2024",
      description: "Assisted in corrosion inhibitor evaluation and material degradation analysis.",
      achievements: [
        "Evaluated corrosion inhibitor performance at Suban Field.",
        "Analyzed corrosion coupon and probe data.",
        "Studied CO₂/H₂S-induced corrosion mechanisms.",
        "Supported cost optimization for inhibitor injection."
      ]
    }
  ],
  courses: [
    {
      title: "Cloud-based Digital Marketing Program",
      provider: "PT. Nurul Fikri Cipta Inovasi",
      period: "Feb 2024 — Jun 2024",
      score: "96 / 100",
      desc: "Mastered SEO/SEM, CRM, and digital campaign strategies."
    }
  ],
  organization: [
    {
      role: "Head of Arts and Culture Division",
      org: "HMDK FMIPA UI",
      period: "Feb 2023 — Dec 2023",
      desc: "Planned and executed arts and cultural initiatives."
    },
    {
      role: "Head of Sounders Division",
      org: "PDK UI",
      period: "Aug 2023 — Sep 2023",
      desc: "Led Oration and coordinated chants."
    },
    {
      role: "Deputy Head of Logistics Division",
      org: "Chemistry Fair UI",
      period: "Oct 2022 — Nov 2022",
      desc: "Handled equipment logistics and operational support for national competition."
    },
    {
      role: "Editor-in-Chief",
      org: "Akyas Magazine",
      period: "Aug 2020 — May 2021",
      desc: "Led editorial team for school activity publication."
    }
  ]
};
