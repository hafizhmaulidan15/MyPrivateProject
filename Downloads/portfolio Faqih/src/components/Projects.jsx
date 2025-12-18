
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FileText, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-xl overflow-hidden hover:border-[var(--primary)] transition-all flex flex-col h-full"
    >
        {/* Header / Top Bar like a file folder */}
        <div className="bg-[rgba(255,255,255,0.03)] p-4 border-b border-[var(--glass-border)] flex justify-between items-center group-hover:bg-[rgba(0,255,204,0.05)] transition-colors">
            <div className="flex items-center gap-2">
                <FileText size={18} className="text-[var(--primary)]" />
                <span className="text-xs font-mono text-[var(--text-muted)]">LAB_REPORT_0{index + 1}</span>
            </div>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                {project.title || project.role}
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-4 flex-1">
                {project.desc || project.description}
            </p>

            {/* Tech Stack / Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {(project.tags || ["Analysis", "Report"]).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] border border-[var(--glass-border)]">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links Placeholder */}
            <div className="mt-6 flex gap-4 pt-4 border-t border-[var(--glass-border)]">
                <a href="#" className="flex items-center gap-2 text-sm text-[var(--text-main)] hover:text-[var(--primary)] transition-colors">
                    <ExternalLink size={16} /> View Details
                </a>
            </div>
        </div>
    </motion.div>
);

export const Projects = () => {
    const { courses, organization } = portfolioData;
    // Treating courses and orgs as "Projects" for now as there are no specific detailed projects in CV
    // User requested "Chemistry layout" so we frame these as "Field Studies" or "Experiments"

    return (
        <section id="research" className="py-20 px-6 bg-[var(--bg-dark)]">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Research & Field Work</h2>
                    <p className="text-[var(--text-muted)]">Selected academic projects, courses, and organizational leadership.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, i) => (
                        <ProjectCard key={i} project={{ ...course, tags: ["Certification", "Marketing"] }} index={i} />
                    ))}
                    {organization.map((org, i) => (
                        <ProjectCard key={i + courses.length} project={{ ...org, title: org.role, role: org.org, tags: ["Leadership", "Organization"] }} index={i + courses.length} />
                    ))}
                </div>
            </div>
        </section>
    );
};
