import React from 'react';
import { Atom, FlaskConical, Microscope, BarChart2, Settings, Users } from 'lucide-react';

// Simple navigation links – adjust as needed
const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
];

export default function WebChemHome() {
    return (
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_var(--primary)_0%,_var(--bg-dark)_80%)] text-[var(--text-main)]">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-[rgba(10,11,16,0.85)] backdrop-blur-md border-b border-[var(--glass-border)]">
                <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                    <a href="#" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary)]">
                        <Atom className="w-8 h-8 animate-spin-slow" />
                        <span>WebChem</span>
                    </a>
                    <ul className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile toggle (placeholder) */}
                    <button className="md:hidden text-[var(--text-main)]">
                        {/* Simple hamburger */}
                        <svg viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="10" fill="currentColor" />
                            <rect y="30" width="100" height="10" fill="currentColor" />
                            <rect y="60" width="100" height="10" fill="currentColor" />
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Hero */}
            <section id="home" className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mb-6">
                    Digital Chemistry Made Simple
                </h1>
                <p className="max-w-2xl text-lg text-[var(--text-muted)] mb-8">
                    Create, edit, simulate and share molecules instantly. Perfect for schools, universities and research labs.
                </p>
                <div className="flex gap-4">
                    <a href="#features" className="px-6 py-3 bg-[var(--primary)] text-[var(--bg-dark)] rounded-lg font-medium hover:shadow-[0_0_15px_var(--primary-glow)] transition-shadow">
                        Explore Features
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-[var(--glass-border)] rounded-lg text-[var(--text-main)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                        Get in Touch
                    </a>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-main)]">
                    What You Can Do
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard icon={<FlaskConical size={48} className="text-[var(--primary)]" />} title="Draw Molecules" description="Create beautiful 2D/3D structures with an intuitive editor." />
                    <FeatureCard icon={<Microscope size={48} className="text-[var(--secondary)]" />} title="Run Simulations" description="Perform quantum‑mechanical calculations directly in the browser." />
                    <FeatureCard icon={<BarChart2 size={48} className="text-[var(--accent)]" />} title="Analyse Data" description="Generate plots, export data and share results instantly." />
                    <FeatureCard icon={<Settings size={48} className="text-[var(--primary)]" />} title="Collaborate" description="Work together in real‑time, comment and version‑control your projects." />
                    <FeatureCard icon={<Users size={48} className="text-[var(--secondary)]" />} title="Teach & Learn" description="Build interactive lessons, quizzes and labs for students." />
                    <FeatureCard icon={<Atom size={48} className="text-[var(--accent)]" />} title="Export" description="Download structures in many formats (CML, SMILES, PNG, etc.)." />
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-[rgba(10,11,16,0.9)] backdrop-blur-md border-t border-[var(--glass-border)] py-8">
                <div className="container mx-auto text-center">
                    <p className="text-sm text-[var(--text-muted)] mb-2">© {new Date().getFullYear()} WebChem – All rights reserved.</p>
                    <p className="text-sm text-[var(--text-muted)]">
                        <a href="https://webchem.org/de/impressum.html" className="hover:text-[var(--primary)] transition-colors">Impressum</a> |
                        <a href="https://webchem.org/de/datenschutz.html" className="hover:text-[var(--primary)] transition-colors">Datenschutz</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

// Small reusable card component for the feature grid
function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--glass-border)] hover:shadow-lg transition-shadow">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-main)]">{title}</h3>
            <p className="text-[var(--text-muted)]">{description}</p>
        </div>
    );
}
