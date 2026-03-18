"use client";

import { useState } from 'react';

export default function Portfolio() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Bridal Portrait' },
        { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Couple Portrait' },
        { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Ceremony Shot' },
        { src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Emotional Moment' },
        { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Wedding Couple' },
        { src: 'https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Bridal Entry' },
        { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Ring Ceremony' },
        { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Pre-Wedding' }
    ];

    return (
        <>
            <section className="hero animate-fade-in" style={{ height: '60vh', background: 'url("https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat' }}>
                <div className="hero-content">
                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>Our Portfolio</h1>
                    <p className="hero-subtitle">Moments Frozen In Time</p>
                </div>
            </section>

            <section className="section container" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <h2 className="section-title">Gallery</h2>
                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="gallery-item" onClick={() => setLightboxImage(img.src)}>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-playfair)' }}>{img.alt}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox for Gallery */}
            {lightboxImage && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={() => setLightboxImage(null)}>
                    <span style={{ position: 'absolute', top: '20px', right: '40px', color: '#fff', fontSize: '3rem', cursor: 'pointer' }}>&times;</span>
                    <img src={lightboxImage} alt="Fullscreen View" style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }} />
                </div>
            )}
        </>
    );
}
