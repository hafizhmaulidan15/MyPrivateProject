
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Menu, X, FlaskConical } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Research', href: '#research' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--glass)] shadow-lg backdrop-blur-md' : 'bg-transparent'
                }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(10, 11, 16, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem'
            }}
        >
            <div className="container mx-auto flex justify-between items-center w-full">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Atom className="text-[var(--primary)] w-8 h-8 animate-spin-slow" />
                        <div className="absolute inset-0 bg-[var(--primary)] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                    </div>
                    <span className="text-xl font-bold tracking-wider text-[var(--text-main)]">
                        AL <span className="text-[var(--primary)]">FAQIH</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        className="px-4 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-dark)] transition-all font-medium text-sm flex items-center gap-2"
                    >
                        <FlaskConical size={16} />
                        My Lab
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[var(--text-main)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-[80px] left-0 w-full bg-[var(--bg-card)] border-b border-[var(--glass-border)] md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--text-muted)] hover:text-[var(--primary)] text-lg"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
