import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const latestWorks = [
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Bridal Portrait' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Couple Portrait' },
    { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Ceremony Shot' },
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero animate-fade-in">
          <div className="hero-content">
            <h1 className="hero-title">Dream Photography</h1>
            <p className="hero-subtitle">Turning Moments Into Memories</p>
          </div>
        </section>

        {/* Brand Message Section */}
        <section className="section" style={{ backgroundColor: 'var(--bg-light)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url("https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover', opacity: 0.05 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4', color: '#fff' }}>
              "We don’t just capture photos. We capture emotions. Every frame tells a story, every click preserves a feeling."
            </h2>
          </div>
        </section>

        {/* Quick Intro snippet */}
        <section className="section container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Welcome to Dream Photography</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            We bring every frame to life through creative editing, storytelling, and cinematic techniques.
            Discover our dreamy pre-wedding films, emotional wedding highlights, and artistic photography.
          </p>
          <Link href="/about" className="btn">Learn More About Us</Link>
        </section>

        {/* Latest Works (Snippet of Portfolio) */}
        <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Works</h2>
              <Link href="/portfolio" style={{ color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', borderBottom: '1px solid var(--primary-gold)' }}>View Full Portfolio</Link>
            </div>

            <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {latestWorks.map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-playfair)' }}>{img.alt}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Snippet */}
        <section className="section container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Premium Packages</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              We offer exclusive, customized coverage perfectly tailored to your elegant wedding needs.
              Find the perfect investment to preserve your precious memories forever.
            </p>
            <Link href="/packages" className="btn">View Our Packages</Link>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
          <div className="container">
            <h2 className="section-title">Client Review</h2>
            <div className="grid grid-3">
              <div className="card testimonial-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <p>“Dream Photography made our wedding unforgettable. The photos are timeless.”</p>
                <div className="testimonial-author">— Vikky Srivastava</div>
              </div>
              <div className="card testimonial-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <p>“Cinematic video was like a movie of our love story. Highly recommend.”</p>
                <div className="testimonial-author">— Jignasa Singh</div>
              </div>
              <div className="card testimonial-card" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <p>“Every emotion was captured beautifully. We will cherish these forever.”</p>
                <div className="testimonial-author">— Nikhil Puri</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="container">
            <h2>Capture your best moments with us.</h2>
            <Link href="/contact" className="btn btn-filled">Book Your Wedding Shoot</Link>
          </div>
        </section>

      </main>
    </>
  );
}
