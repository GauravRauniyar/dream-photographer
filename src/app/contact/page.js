export default function Contact() {
    return (
        <>
            <section className="hero animate-fade-in" style={{ height: '60vh', background: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat' }}>
                <div className="hero-content">
                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>Contact Us</h1>
                    <p className="hero-subtitle">Let's Create Magic Together</p>
                </div>
            </section>

            <section className="section container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div className="card" style={{ textAlign: 'left', backgroundColor: 'var(--bg-light)' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Our Information</h3>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📞</span>
                            <a href="tel:+919125507911">+91 9125507911</a>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📧</span>
                            <a href="mailto:dreamphotographyy01@gmail.com">dreamphotographyy01@gmail.com</a>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📸</span>
                            <a href="https://instagram.com/dream_photography_01" target="_blank" rel="noopener noreferrer">dream_photography_01</a>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📍</span>
                            Maharajganj, Uttar Pradesh, India
                        </p>
                        <a href="https://wa.me/919125507911" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            WhatsApp Us
                        </a>
                    </div>
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-light)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Connect With Us</h3>
                        <div style={{ width: '200px', height: '200px', backgroundColor: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '1rem' }}>
                            <div style={{ width: '100%', height: '100%', background: 'url("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://instagram.com/dream_photography_01") center/cover no-repeat' }}></div>
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>Scan to visit our Instagram</p>
                    </div>
                </div>
            </section>
        </>
    );
}
