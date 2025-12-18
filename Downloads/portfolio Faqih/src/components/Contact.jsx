
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    const { personal } = portfolioData;

    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-t from-[var(--bg-card)] to-[var(--bg-dark)] relative">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[rgba(20,22,31,0.8)] backdrop-blur-lg border border-[var(--glass-border)] rounded-2xl p-8 md:p-12 text-center shadow-2xl"
                >
                    <h2 className="text-4xl font-bold mb-6">Let's Collaborate</h2>
                    <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
                        Interested in discussing electrochemical sensors, corrosion analysis, or potential research opportunities? Reach out directly.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                        <a href={`mailto:${personal.email}`} className="flex items-center justify-center gap-3 text-[var(--text-main)] hover:text-[var(--primary)] transition-colors">
                            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--primary)]">
                                <Mail size={20} />
                            </div>
                            {personal.email}
                        </a>
                        <div className="flex items-center justify-center gap-3 text-[var(--text-main)]">
                            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--secondary)]">
                                <Phone size={20} />
                            </div>
                            {personal.phone}
                        </div>
                    </div>

                    <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-main)] focus:border-[var(--primary)] outline-none transition-colors" />
                            <input type="email" placeholder="Email" className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-main)] focus:border-[var(--primary)] outline-none transition-colors" />
                        </div>
                        <textarea placeholder="Message" rows="4" className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-main)] focus:border-[var(--primary)] outline-none transition-colors"></textarea>
                        <button className="w-full py-3 bg-[var(--primary)] text-[var(--bg-dark)] font-bold rounded-lg hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2">
                            Send Reaction <Send size={18} />
                        </button>
                    </form>

                </motion.div>

                <footer className="mt-20 text-center text-sm text-[var(--text-muted)]">
                    <p>© 2025 Muhammad Al Faqih. Synthesized with React + Vite.</p>
                </footer>
            </div>
        </section>
    );
};
