export default function Services() {
    return (
        <>
            <section className="hero animate-fade-in" style={{ height: '60vh', background: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat' }}>
                <div className="hero-content">
                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>Our Services</h1>
                    <p className="hero-subtitle">Creating Stories That Last Forever</p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>
                    <div className="grid grid-3">
                        <div className="card">
                            <div className="feature-icon">📷</div>
                            <h3 className="feature-title">Wedding Photography</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Timeless photos that tell your love story.</p>
                        </div>
                        <div className="card">
                            <div className="feature-icon">🎥</div>
                            <h3 className="feature-title">Cinematic Videography</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Cinematic wedding films with emotions and storytelling.</p>
                        </div>
                        <div className="card">
                            <div className="feature-icon">✨</div>
                            <h3 className="feature-title">Pre-Wedding Shoots</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Creative and stylish shoots before your big day.</p>
                        </div>
                        <div className="card">
                            <div className="feature-icon">🚁</div>
                            <h3 className="feature-title">Drone Shots</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Breathtaking aerial perspectives capturing wedding venues and celebrations.</p>
                        </div>
                        <div className="card">
                            <div className="feature-icon">📖</div>
                            <h3 className="feature-title">Premium Albums</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Handcrafted albums designed to preserve memories for a lifetime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Wrapper for standalone pages */}
            <section className="cta" style={{ background: 'linear-gradient(to right, rgba(15, 10, 8, 0.9), rgba(15, 10, 8, 0.8)), url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover fixed' }}>
                <div className="container">
                    <h2>Capture your best moments with us.</h2>
                    <a href="/contact" className="btn btn-filled">Book Your Wedding Shoot</a>
                </div>
            </section>
        </>
    );
}
