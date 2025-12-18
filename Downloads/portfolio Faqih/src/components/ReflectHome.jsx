import React from 'react';
import { Atom, Zap, BarChart2, Settings, Users, MessageSquare } from 'lucide-react';

// Simple feature data
const features = [
    { icon: <Atom className="w-12 h-12 text-[var(--primary)]" />, title: "Smart Notes", desc: "Capture ideas instantly with AI assistance" },
    { icon: <Zap className="w-12 h-12 text-[var(--secondary)]" />, title: "Instant Search", desc: "Find any note in seconds" },
    { icon: <BarChart2 className="w-12 h-12 text-[var(--accent)]" />, title: "Analytics", desc: "Track your knowledge growth" },
    { icon: <Settings className="w-12 h-12 text-[var(--primary)]" />, title: "Custom Workspaces", desc: "Organize projects your way" },
    { icon: <Users className="w-12 h-12 text-[var(--secondary)]" />, title: "Collaboration", desc: "Share and edit with teammates" },
    { icon: <MessageSquare className="w-12 h-12 text-[var(--accent)]" />, title: "Chat AI", desc: "Ask questions, get answers" },
];

export default function ReflectHome() {
    return (
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_var(--primary)_0%,_var(--bg-dark)_80%)] text-[var(--text-main)]">
            {/* Header – reuse existing Navbar styling */}
            <header className="sticky top-0 z-10 bg-[rgba(10,11,16,0.85)] backdrop-blur-md border-b border-[var(--glass-border)]">
                <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                    <a href="#" className="flex items-center gap-2 text-2xl font-bold text-[var(--primary)]">
                        <Atom className="w-6 h-6 animate-spin-slow" />
                        <span>Reflect</span>
                    </a>
                    <ul className="hidden md:flex gap-8">
                        <li><a href="#features" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Features</a></li>
                        <li><a href="#about" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">About</a></li>
                        <li><a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="flex-1 flex flex-col items-center justify-center text-center py-24 px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mb-6">
                    Think Better with Reflect
                </h1>
                <p className="max-w-2xl text-lg text-[var(--text-muted)] mb-8">
                    Your AI‑powered note‑taking companion. Capture, organize, and retrieve knowledge instantly.
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

            {/* Feature Grid */}
            <section id="features" className="container mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-main)]">What You Can Do</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 bg-[var(--bg-card)] rounded-xl border border-[var(--glass-border)] hover:shadow-lg transition-shadow">
                            <div className="mb-4">{f.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-[var(--text-main)]">{f.title}</h3>
                            <p className="text-[var(--text-muted)]">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-[rgba(10,11,16,0.9)] backdrop-blur-md border-t border-[var(--glass-border)] py-8">
                <div className="container mx-auto text-center">
                    <p className="text-sm text-[var(--text-muted)] mb-2">© {new Date().getFullYear()} Reflect – All rights reserved.</p>
                    <p className="text-sm text-[var(--text-muted)]">
                        <a href="https://reflect.app/impressum" className="hover:text-[var(--primary)] transition-colors">Impressum</a> |
                        <a href="https://reflect.app/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
