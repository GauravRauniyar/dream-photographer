export default function Packages() {
    return (
        <>
            <section className="hero animate-fade-in" style={{ height: '60vh', background: 'url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover no-repeat' }}>
                <div className="hero-content">
                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>Investment & Packages</h1>
                    <p className="hero-subtitle">Premium Coverage For Your Big Day</p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">Wedding Packages</h2>
                    <div className="grid grid-3">
                        {/* Silver */}
                        <div className="card package-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
                            <h3>Silver Package</h3>
                            <p style={{ color: 'var(--text-muted)', minHeight: '40px' }}>Haldi and Wedding coverage.</p>
                            <div className="package-price">₹40,000</div>
                            <h4 className="deliverables-title">Services included:</h4>
                            <ul className="package-features">
                                <li>Drone Shot</li>
                                <li>Traditional Videography</li>
                                <li>Traditional Photography</li>
                            </ul>
                            <h4 className="deliverables-title">Deliverables:</h4>
                            <ul className="package-features">
                                <li>30 Sheet Album</li>
                                <li>Traditional Video</li>
                                <li>Full function video</li>
                                <li>1 Pendrive containing all photos</li>
                                <li>1 Photo Frame (12x18)</li>
                                <li>Wedding Highlights and Teaser</li>
                                <li>E-Invitation</li>
                            </ul>
                        </div>

                        {/* Gold */}
                        <div className="card package-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
                            <h3>Gold Package</h3>
                            <p style={{ color: 'var(--text-muted)', minHeight: '40px' }}>Haldi, Mehendi, and Wedding coverage.</p>
                            <div className="package-price">₹80,000</div>
                            <h4 className="deliverables-title">Services included:</h4>
                            <ul className="package-features">
                                <li>Candid Photography</li>
                                <li>Cinematography</li>
                                <li>Drone Shot</li>
                                <li>Traditional Videography</li>
                                <li>Traditional Photography</li>
                            </ul>
                            <h4 className="deliverables-title">Deliverables:</h4>
                            <ul className="package-features">
                                <li>50 Sheet Album</li>
                                <li>Cinematic Video</li>
                                <li>Full function video</li>
                                <li>1 Pendrive containing all photos</li>
                                <li>1 Photo Frame (12x18)</li>
                                <li>Wedding Highlights and Teaser</li>
                                <li>E-Invitation</li>
                                <li>Reels</li>
                            </ul>
                        </div>

                        {/* Diamond */}
                        <div className="card package-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
                            <h3>Diamond Package</h3>
                            <p style={{ color: 'var(--text-muted)', minHeight: '40px' }}>Haldi, Mehendi, and Wedding coverage.</p>
                            <div className="package-price">₹1,00,000</div>
                            <h4 className="deliverables-title">Services included:</h4>
                            <ul className="package-features">
                                <li>Candid Photography</li>
                                <li>Cinematography</li>
                                <li>Drone Shot</li>
                                <li>Traditional Videography</li>
                                <li>Traditional Photography</li>
                            </ul>
                            <h4 className="deliverables-title">Deliverables:</h4>
                            <ul className="package-features">
                                <li>50 Sheet Album</li>
                                <li>Cinematic Video</li>
                                <li>Live Streaming</li>
                                <li>Full function video</li>
                                <li>1 Pendrive containing all photos</li>
                                <li>1 Photo Frame (12x18)</li>
                                <li>Wedding Highlights and Teaser</li>
                                <li>E-Invitation</li>
                                <li>Reels</li>
                            </ul>
                        </div>
                    </div>

                    {/* Premium Featured Package */}
                    <div className="card package-card premium" style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
                        <h3 style={{ fontSize: '2rem' }}>Wedding Premium Package</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Engagement • Mehendi • Haldi • Wedding</p>
                        <div className="package-price" style={{ fontSize: '2.5rem' }}>₹1,20,000</div>

                        <div className="grid grid-2" style={{ gap: '1rem', marginTop: '2rem' }}>
                            <div>
                                <h4 className="deliverables-title" style={{ marginTop: 0 }}>Services include:</h4>
                                <ul className="package-features">
                                    <li>Traditional Videography</li>
                                    <li>Traditional Photography</li>
                                    <li>Candid Photography</li>
                                    <li>Cinematography</li>
                                    <li>Drone Shots</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="deliverables-title" style={{ marginTop: 0 }}>Deliverables include:</h4>
                                <ul className="package-features">
                                    <li>30 + 50 Sheet Album</li>
                                    <li>First Sheet Emboss Crystal Glass</li>
                                    <li>Premium cover with case</li>
                                    <li>Edited portraits included</li>
                                    <li>Full video of all functions</li>
                                    <li>Wedding teaser highlights (3–4 minutes)</li>
                                    <li>Cinematic video</li>
                                    <li>Pendrive including all photos</li>
                                    <li>E-Invitation</li>
                                    <li>One Photo Frame</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
