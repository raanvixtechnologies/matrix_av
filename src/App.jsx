import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="logo">MATRIX AV WORKS</a>
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#our-work" onClick={() => setMenuOpen(false)}>Our Work</a>
          <a href="#rentals" onClick={() => setMenuOpen(false)}>Rentals</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#quote" className="btn-primary" onClick={() => setMenuOpen(false)}>Get Quote</a>
        </nav>
      </header>

      <section id="about" className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
        </video>
        <div className="container hero-content">
          <div className="hero-tag">EVENTS MADE EASY</div>
          <div className="hero-tag" style={{ marginTop: '-15px', color: '#ccc' }}>EXCELLENCE & INTEGRITY</div>
          <h1>Full-Service Event Production & AV Solutions</h1>
          <p>
            For over a decade, Matrix AV Works has delivered excellence and precision across the event industry.
            We partner with organizations of all sizes to bring their event vision to life.
            From intimate gatherings to multi-day conferences with 20,000+ attendees, our team approaches every project with unmatched care and technical precision.
          </p>
          <a href="#quote" className="btn-solid-white" style={{ display: 'inline-block' }}>Request a Custom Quote</a>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="services-heading">
            <h2>HOW WE CAN SUPPORT YOUR NEXT EVENT?</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Event Production</h3>
              <ul>
                <li>Corporate Events</li>
                <li>Conferences</li>
                <li>Church Productions</li>
                <li>Trainings & Workshops</li>
                <li>Multi-Day Events</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Audio, Video & Lighting</h3>
              <ul>
                <li>Full AV Packages</li>
                <li>Stage Lighting</li>
                <li>Sound Systems & Mixing</li>
                <li>Microphones & Monitors</li>
                <li>Technical Direction</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>LED Video Walls & Visuals</h3>
              <ul>
                <li>LED Wall Rentals</li>
                <li>Stage & Set Design</li>
                <li>Screen Integration</li>
                <li>Visual Layouts</li>
                <li>Custom Event Displays</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Video Production & Live streaming</h3>
              <ul>
                <li>Event Recording</li>
                <li>Livestream Broadcast</li>
                <li>Promo Videos</li>
                <li>Post-Event Editing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>READY TO GET STARTED?</h2>
          <p>Tell us about your event and we’ll build a custom quote tailored to your needs.</p>
          <a href="#quote" className="btn-solid-white" style={{ display: 'inline-block' }}>Request a Custom Quote</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div className="feature-image">
              <img src="ledscreen.jpg" alt="LED Wall Setup" loading="lazy" />
            </div>
            <div className="feature-content">
              <h2>Considering an LED wall for your next event?</h2>
              <p>Transform your stage with ultra-bright, high-resolution LED walls built for conferences, churches, and large-scale events.</p>
              <ul className="feature-list">
                <li>Ultra-bright, high-resolution panels for crystal-clear visuals</li>
                <li>High contrast technology for bold colors and sharp image depth</li>
                <li>Fast, flexible setup ideal for general sessions, breakouts, or multi-day events</li>
              </ul>
              <a href="#quote" className="btn-outline">Request a Custom Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section id="rentals" className="section" style={{ background: 'var(--gray-bg)' }}>
        <div className="container">
          <div className="feature-split reverse">
            <div className="feature-image">
             <img src=""alt="rental epquipment" loading="lazy"/>
            </div>
            <div className="feature-content">
              <h2>Equipment Rentals Made Easy</h2>
              <p>Audio, lighting, and LED wall rentals for small events, breakouts, and simple setups.</p>
              <p style={{ marginTop: '16px' }}>
                Need a few speakers, microphones, or basic AV gear? We make rentals simple, fast, and stress-free. Whether you’re hosting a meeting, training, or small event, our team will help you get the right equipment for the job.
              </p>
              <br />
              <a href="#quote" className="btn-outline">Request Rental Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery Section */}
      <section id="our-work" className="section">
        <div className="container">
          <div className="services-heading">
            <h2>OUR WORK</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="Event Work 1" loading="lazy" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" alt="Event Work 2" loading="lazy" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" alt="Event Work 3" loading="lazy" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" alt="Event Work 4" loading="lazy" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80" alt="Event Work 5" loading="lazy" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" alt="Event Work 6" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="quote" className="section" style={{ background: 'var(--gray-bg)' }}>
        <div className="container">
          <div className="services-heading">
            <h2>GET IN TOUCH</h2>
            <p style={{ marginTop: '16px', color: 'var(--text-light)' }}>Ready to plan your next event? Fill out the form below.</p>
          </div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll get back to you soon."); }}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Event Type / Venue" required />
            <textarea placeholder="Tell us about your event details, gear needed, dates, etc." rows="5" required></textarea>
            <button type="submit" className="btn-solid-white" style={{ display: 'inline-block', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Send Message</button>
          </form>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Contact us.</h3>
            <p>We’d love to hear about your event. Tell us what you’re planning, and our team will get back to you within 24 hours.</p>
          </div>
          <div className="footer-col">
            <h3>Matrix AV Works</h3>
            <p><a href="#quote">CONTACT US</a></p>
            <p><a href="#rentals">RENTALS</a></p>
          </div>
          <div className="footer-col">
            <h3>#matrixavworks</h3>
            <p>Excellence in Event Technical Production.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>ALL RIGHTS RESERVED BY MATRIX AV WORKS LLC</p>
        </div>
      </footer>
    </div>
  );
}
