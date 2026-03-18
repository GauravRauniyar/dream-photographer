"use client";

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-col" style={{ gridColumn: 'span 2' }}>
                    <div className="logo" style={{ marginBottom: '1rem' }}>
                        <Link href="/">DREAM <span>PHOTOGRAPHY</span></Link>
                    </div>
                    <p style={{ color: 'var(--primary-gold)', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                        Capture Your Moment
                    </p>
                    <p style={{ maxWidth: '300px' }}>Creating cinematic stories and preserving emotions for a lifetime.</p>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/packages">Packages</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <p>+91 9125507911</p>
                    <p>dreamphotographyy01@gmail.com</p>
                    <p>Maharajganj, UP, India</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Dream Photography. All rights reserved.</p>
            </div>
        </footer>
    );
}
