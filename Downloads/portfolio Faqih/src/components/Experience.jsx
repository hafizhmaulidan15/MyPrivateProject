
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FlaskConical, Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ item, index, isLeft }) => {
    return (
        <div className={`flex items-center justify-between w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}>

            {/* Empty space for alignment */}
            <div className="w-5/12 hidden md:block" />

            {/* Center Line Marker (Reaction Node) */}
            <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-card)] border-4 border-[var(--primary)] shadow-[0_0_15px_var(--primary-glow)]">
                <FlaskConical size={20} className="text-[var(--text-main)]" />
            </div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-5/12 bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--glass-border)] hover:border-[var(--secondary)] transition-colors relative"
            >
                {/* Connector Line (Mobile/Desktop) */}

                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[var(--primary)]">{item.role || item.degree}</h3>
                    <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--glass-border)] px-2 py-1 rounded">
                        {item.period}
                    </span>
                </div>

                <h4 className="text-lg text-[var(--text-main)] mb-1 flex items-center gap-2">
                    <Briefcase size={16} className="text-[var(--secondary)]" />
                    {item.company || item.institution}
                </h4>

                <p className="text-sm text-[var(--text-muted)] mb-4 flex items-center gap-2">
                    <MapPin size={14} /> {item.location}
                </p>

                {item.details && (
                    <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                                <span className="text-[var(--primary)] mt-1">▹</span>
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}

                {item.achievements && (
                    <ul className="space-y-2">
                        {item.achievements.map((ach, idx) => (
                            <li key={idx} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
                                <span className="text-[var(--accent)] mt-1">▹</span>
                                {ach}
                            </li>
                        ))}
                    </ul>
                )}

            </motion.div>
        </div>
    );
};

export const Experience = () => {
    const { experience, education } = portfolioData;
    // Combine and sort if needed, or separate sections. Let's combine for a single timeline.
    const timelineData = [...experience, ...education].sort((a, b) => {
        // Simple sort isn't easy with string dates, let's just assume order or rely on array order.
        // Assuming array order is relevant.
        return 0;
    });

    return (
        <section id="experience" className="py-20 px-6 bg-[var(--bg-dark)] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-10 top-20 w-64 h-64 rounded-full bg-[var(--secondary)] blur-[100px]" />
                <div className="absolute left-10 bottom-20 w-64 h-64 rounded-full bg-[var(--primary)] blur-[100px]" />
            </div>

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Reaction Pathway</h2>
                    <p className="text-[var(--text-muted)]">My academic and professional journey.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />

                    {/* Timeline Items */}
                    <div className="flex flex-col">
                        {education.map((item, index) => (
                            <ExperienceCard key={`edu-${index}`} item={item} index={index} isLeft={index % 2 === 0} />
                        ))}
                        {experience.map((item, index) => (
                            <ExperienceCard key={`exp-${index}`} item={item} index={index + education.length} isLeft={(index + education.length) % 2 === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
