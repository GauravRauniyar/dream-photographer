export default function About() {
    return (
        <>
            <section className="hero animate-fade-in" style={{ height: '60vh', background: 'url("https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat' }}>
                <div className="hero-content">
                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>About Us</h1>
                    <p className="hero-subtitle">Our Philosophy & Creative Process</p>
                </div>
            </section>

            <section className="section container">
                <h2 className="section-title">About Dream Photography</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Dream Photography brings every frame to life through creative editing, storytelling, and cinematic techniques. Their work includes dreamy pre-wedding films, emotional wedding highlights, and artistic photography.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        The company has covered more than fifteen weddings with a unique cinematic style combining creativity, modern trends, and heartfelt storytelling.
                    </p>
                    <p style={{ fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--primary-gold)' }}>
                        "For us, photography is not just a profession. It is our dream, our passion, and our way to make your special moments unforgettable."
                    </p>
                </div>
            </section>

            {/* Behind the Lens Section - Reused from original home page requirement */}
            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Behind the Lens – Where Magic Happens</h2>
                    <div className="btl-grid">
                        <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Camera Setup" className="btl-img" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf6d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Editing Screen" className="btl-img" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1524146128017-ba4548ae4566?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Videography" className="btl-img" loading="lazy" />
                        <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Drone Equipment" className="btl-img" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    );
}
