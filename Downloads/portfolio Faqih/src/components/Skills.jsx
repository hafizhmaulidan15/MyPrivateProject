
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

// Skill Card Component (Element)
const SkillElement = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                boxShadow: `0 0 20px var(--primary-glow)`
            }}
            className="relative w-28 h-28 md:w-32 md:h-32 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-lg flex flex-col p-2 cursor-pointer group overflow-hidden transition-colors hover:border-[var(--primary)]"
        >
            {/* Atomic Number */}
            <span className="text-xs text-[var(--text-muted)] font-mono">{skill.number}</span>

            {/* Symbol */}
            <div className="flex-1 flex items-center justify-center">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] group-hover:from-[var(--accent)] group-hover:to-[var(--primary)] transition-all">
                    {skill.symbol}
                </h3>
            </div>

            {/* Name */}
            <span className="text-[10px] md:text-xs text-center font-medium truncate w-full text-[var(--text-main)] group-hover:text-[var(--primary)]">
                {skill.name}
            </span>

            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,255,204,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

export const Skills = () => {
    const { skills } = portfolioData;

    // Filter skills by category for "Periodic Table" groups? 
    // For now just a grid gallery as requested.

    return (
        <section id="skills" className="py-20 px-6 relative bg-[var(--bg-dark)]">
            <div className="container mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)] mb-4">
                        <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                        <span className="text-sm text-[var(--secondary)] font-medium">LABORATORY EXPERTISE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Elemental Skills</h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                        A comprehensive breakdown of my technical capabilities in chemical synthesis, analysis, and research methodologies.
                    </p>
                </motion.div>

                {/* Periodic Table Grid */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <SkillElement key={index} skill={skill} index={index} />
                    ))}

                    {/* Decorative placeholders to fill grid if needed or just leave as dynamic */}
                </div>

                {/* Categories Legend */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg bg-[var(--primary)]" /> Core Synthesis
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg bg-[var(--secondary)]" /> Analysis
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg bg-[var(--accent)]" /> Industry
                    </div>
                </div>

            </div>
        </section>
    );
};
