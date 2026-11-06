import React, { useState, useEffect } from 'react';
import { HOME_PAGE_DATA } from '../../../data/homeData';

export default function Navbar() {
  const { links, ctaButton, logo } = HOME_PAGE_DATA.navigation;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        ...styles.header,
        boxShadow: scrolled ? '0 6px 24px rgba(0, 0, 0, 0.06)' : 'none',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid #F1F3F5',
        padding: scrolled ? '12px 24px' : '16px 24px',
      }}
    >
      <div style={styles.container}>
        {/* Brand Logo - Sized Prominently */}
        <a href="#" style={styles.logoLink} aria-label="Ritam Consultancy Home">
          <img
            src={logo}
            alt="Ritam Consultancy"
            style={styles.logoImage}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div style={styles.logoFallback}>
            <span style={styles.logoFallbackMark}>R</span>
            <div style={styles.logoFallbackText}>
              <span style={styles.fallbackTitle}>Ritam</span>
              <span style={styles.fallbackSub}>CONSULTANCY</span>
            </div>
          </div>
        </a>

        {/* Center Pill Capsule Navigation */}
        <nav style={styles.capsuleNav} aria-label="Main Navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                ...styles.navPill,
                ...(link.active ? styles.navPillActive : {}),
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div style={styles.ctaWrapper}>
          <a
            href={`#${ctaButton.targetSectionId}`}
            style={styles.ctaButton}
            className="hover-lift"
          >
            <span>{ctaButton.label}</span>
            <span style={styles.ctaArrow}>›</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            style={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <div style={styles.mobileLinks}>
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  ...styles.mobileLink,
                  ...(link.active ? styles.mobileLinkActive : {}),
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={`#${ctaButton.targetSectionId}`}
            onClick={() => setMobileMenuOpen(false)}
            style={styles.mobileCtaBtn}
          >
            <span>{ctaButton.label}</span>
            <span>›</span>
          </a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImage: {
    height: '64px', /* Prominent, bold brand logo */
    width: 'auto',
    objectFit: 'contain',
    transition: 'transform 0.2s ease',
  },
  logoFallback: {
    display: 'none',
    alignItems: 'center',
    gap: '10px',
  },
  logoFallbackMark: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    backgroundColor: '#044439',
    color: '#FFFFFF',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  logoFallbackText: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.1',
  },
  fallbackTitle: {
    fontWeight: '800',
    fontSize: '20px',
    color: '#044439',
  },
  fallbackSub: {
    fontSize: '9px',
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: '1px',
  },
  capsuleNav: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F3F5F7',
    padding: '5px',
    borderRadius: '9999px',
    gap: '4px',
    border: '1px solid #EAECF0',
  },
  navPill: {
    padding: '8px 18px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#4B5563',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  navPillActive: {
    backgroundColor: '#FFFFFF',
    color: '#044439',
    fontWeight: '700',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
  ctaWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#044439',
    color: '#FFFFFF',
    padding: '11px 24px',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    boxShadow: '0 6px 16px rgba(4, 68, 57, 0.22)',
  },
  ctaArrow: {
    fontSize: '16px',
    fontWeight: '800',
    lineHeight: 1,
  },
  hamburgerBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '26px',
    color: '#044439',
    cursor: 'pointer',
    padding: '4px',
  },
  mobileDrawer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px 0 10px',
    borderTop: '1px solid #F3F4F6',
  },
  mobileLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  mobileLink: {
    padding: '10px 14px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#374151',
    textDecoration: 'none',
  },
  mobileLinkActive: {
    backgroundColor: '#E8F5F1',
    color: '#044439',
  },
  mobileCtaBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#044439',
    color: '#FFFFFF',
    padding: '12px',
    borderRadius: '9999px',
    fontWeight: '700',
    textDecoration: 'none',
  },
};
