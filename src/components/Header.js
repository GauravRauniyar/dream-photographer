"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Packages', path: '/packages' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="header" style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(15, 10, 8, 0.95)', borderBottom: '1px solid var(--border-color)', backdropFilter: 'blur(10px)' }}>
            <div className="logo">
                <Link href="/">DREAM <span>PHOTOGRAPHY</span></Link>
            </div>
            <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                ☰
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                color: pathname === link.path ? 'var(--primary-gold)' : 'inherit',
                                fontWeight: pathname === link.path ? '600' : '400'
                            }}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}
