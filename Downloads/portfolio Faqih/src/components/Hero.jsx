
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Download, ArrowRight, Atom, Microscope } from 'lucide-react';

// Molecular Background Component (Internal)
const MoleculeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
        {/* Hexagon Grid Pattern */}
        <div className="absolute inset-0"
            style={{
                backgroundImage: `radial-gradient(var(--text-muted) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
            }}
        />

        {/* Floating Atoms */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full border border-[var(--primary)] flex items-center justify-center"
                initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: 0.2
                }}
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    width: 30 + Math.random() * 50,
                    height: 30 + Math.random() * 50,
                    borderColor: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
                }}
            >
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
            </motion.div>
        ))}
    </div>
);

export const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
            <MoleculeBackground />

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[rgba(0,255,204,0.1)] text-[var(--primary)] text-sm font-code tracking-wider border border-[var(--primary-glow)]">
                            BS. CHEMISTRY RESEARCHER
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                            {personal.name.split(' ')[2]}
                        </span>
                        <span className="text-[var(--text-main)] text-4xl block mt-2">
                            {personal.name.split(' ').slice(0, 2).join(' ')}
                        </span>
                    </h1>

                    <p className="text-[var(--text-muted)] text-lg mb-8 max-w-lg leading-relaxed">
                        Specializing in
                        <span className="text-[var(--text-main)] font-semibold"> porous nickel oxide synthesis</span>,
                        electrochemical sensors, and corrosion monitoring.
                        Bridging the gap between molecular science and industrial application.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="group px-6 py-3 bg-[var(--primary)] text-[var(--bg-dark)] font-bold rounded-lg flex items-center gap-2 hover:shadow-[0_0_20px_var(--primary-glow)] transition-all">
                            Download CV <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                        <button className="px-6 py-3 border border-[var(--glass-border)] text-[var(--text-main)] rounded-lg hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center gap-2">
                            Explore Research <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Stats / Badges */}
                    <div className="mt-12 flex gap-8 border-t border-[var(--glass-border)] pt-8">
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--secondary)]">3.19</h3>
                            <p className="text-sm text-[var(--text-muted)]">GPA / 4.00</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--accent)]">3+</h3>
                            <p className="text-sm text-[var(--text-muted)]">Instruments Mastered</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--primary)]">1</h3>
                            <p className="text-sm text-[var(--text-muted)]">Patent (Pending)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Hexagon Profile Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 flex items-center justify-center animate-spin-slow" style={{ animationDuration: '20s' }}>
                        <div className="w-[400px] h-[400px] border border-[var(--glass-border)] rounded-full border-dashed opacity-30" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center animate-spin-slow-reverse" style={{ animationDuration: '15s' }}>
                        <div className="w-[300px] h-[300px] border border-[var(--primary)] rounded-full opacity-10" />
                    </div>

                    {/* Hexagon Container */}
                    <div className="relative w-[300px] h-[340px] md:w-[350px] md:h-[400px]">
                        {/* Hexagon svg clip path would be better, but css clip-path works for simple hex */}
                        <div
                            className="w-full h-full bg-[var(--bg-card)] flex items-center justify-center overflow-hidden relative z-10"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                background: 'linear-gradient(135deg, var(--bg-card), var(--glass))',
                                border: '2px solid var(--primary)' // Border doesn't work well with clip-path, use pseudoelement if needed
                            }}
                        >
                            {/* Profile Image PlaceHolder */}
                            <div className="absolute inset-[4px] bg-[var(--bg-dark)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                {/* Replace with actual image later */}
                                <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)] p-4 text-center">
                                    <Microscope size={64} className="mb-4 text-[var(--primary)]" />
                                    <span>User Photo Here</span>
                                </div>
                            </div>

                            {/* Floating Orbiting elements */}
                            <motion.div
                                className="absolute top-10 right-10 bg-[var(--bg-card)] p-2 rounded-lg border border-[var(--glass-border)] shadow-xl z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Atom className="text-[var(--accent)]" size={24} />
                            </motion.div>
                        </div>

                        {/* Chemical Bond connectors (Decorative Lines) */}
                        <div className="absolute -top-10 -right-10 w-20 h-[2px] bg-[var(--primary)] opacity-50 rotate-45" />
                        <div className="absolute -bottom-10 -left-10 w-20 h-[2px] bg-[var(--secondary)] opacity-50 rotate-45" />

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
