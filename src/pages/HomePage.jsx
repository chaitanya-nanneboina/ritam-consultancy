import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HeroSection from '../components/sections/home/01-Hero/HeroSection';
import WhyChooseUs from '../components/sections/home/02-WhyChooseUs/WhyChooseUs';
import ExploreColleges from '../components/sections/home/03-ExploreColleges/ExploreColleges';
import ZeroCommission from '../components/sections/home/04-ZeroCommission/ZeroCommission';
import GuidanceProcess from '../components/sections/home/05-GuidanceProcess/GuidanceProcess';
import HomeEnquiry from '../components/sections/home/06-HomeEnquiry/HomeEnquiry';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ritam-page-wrapper">
      {/* Floating WhatsApp Button (Bottom-Left) */}
      <a
        href="https://wa.me/919811543210?text=Hi%20Ritam%20Consultancy,%20I%20would%20like%20guidance%20for%20B.Tech%20Admissions."
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappFloat}
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn"
      >
        <div style={styles.whatsappIconCircle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
        <div style={styles.whatsappTextCol}>
          <div style={styles.whatsappTopRow}>
            <span style={styles.onlineDot} />
            <span style={styles.whatsappTitle}>Counselors Active</span>
          </div>
          <span style={styles.whatsappSub}>Chat on WhatsApp</span>
        </div>
      </a>

      {/* 1. Global Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Why Choose Ritam Consultancy? */}
        <WhyChooseUs />

        {/* 4. Explore B.Tech Colleges Across India */}
        <ExploreColleges />

        {/* 5. Zero Commission Commitment */}
        <ZeroCommission />

        {/* 6. Guidance for Parents & Students */}
        <GuidanceProcess />

        {/* 7. The Single Enquiry Form Section */}
        <HomeEnquiry />
      </main>

      {/* 8. Global Footer */}
      <Footer />
    </div>
  );
}

const styles = {
  whatsappFloat: {
    position: 'fixed',
    bottom: '28px',
    right: '28px', /* Moved to bottom right */
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#FFFFFF',
    padding: '8px 20px 8px 8px', /* Enlarged */
    borderRadius: '9999px',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.16)',
    border: '1.5px solid rgba(37, 211, 102, 0.4)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  whatsappIconCircle: {
    width: '52px', /* Enlarged icon circle */
    height: '52px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    animation: 'pulseGlowBig 2.5s infinite',
    flexShrink: 0,
  },
  whatsappTextCol: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.2,
  },
  whatsappTopRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  onlineDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10B981',
    display: 'inline-block',
  },
  whatsappTitle: {
    fontSize: '14px',
    fontWeight: '800',
    color: '#111827',
  },
  whatsappSub: {
    fontSize: '12px',
    color: '#059669',
    fontWeight: '700',
  },
};
