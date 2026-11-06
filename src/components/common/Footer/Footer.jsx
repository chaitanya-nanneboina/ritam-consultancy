import React from 'react';
import { HOME_PAGE_DATA } from '../../../data/homeData';

export default function Footer() {
  const { logo, description, contactInfo, bottomLinks, copyright } = HOME_PAGE_DATA.footer;

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Top Row: Logo & Tagline on Left, Contact Details on Right */}
        <div style={styles.topRow}>
          <div style={styles.brandCol}>
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
                <span style={styles.fallbackTitle}>Ritam Consultancy</span>
              </div>
            </a>
            <p style={styles.description}>{description}</p>
          </div>

          <div style={styles.contactGroup}>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              style={styles.contactItem}
              className="hover-lift"
            >
              <div style={styles.contactIconCircle}>📞</div>
              <span style={styles.contactText}>{contactInfo.phone}</span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              style={styles.contactItem}
              className="hover-lift"
            >
              <div style={styles.contactIconCircle}>✉️</div>
              <span style={styles.contactText}>{contactInfo.email}</span>
            </a>

            <div style={styles.contactItem}>
              <div style={styles.contactIconCircle}>📍</div>
              <span style={styles.contactText}>{contactInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div style={styles.divider} />

        {/* Bottom Row: Copyright & Legal Policy Links */}
        <div style={styles.bottomRow}>
          <p style={styles.copyrightText}>{copyright}</p>
          <div style={styles.linksGroup}>
            {bottomLinks.map((item) => (
              <a key={item.label} href={item.href} style={styles.legalLink}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #EAECF0',
    padding: '55px 24px 30px',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    paddingBottom: '32px',
  },
  brandCol: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  logoLink: {
    display: 'inline-block',
  },
  logoImage: {
    height: '52px', /* Prominent logo in footer */
    width: 'auto',
    objectFit: 'contain',
  },
  logoFallback: {
    display: 'none',
  },
  fallbackTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#044439',
  },
  description: {
    fontSize: '14px',
    color: '#4B5563',
    maxWidth: '340px',
    lineHeight: '1.5',
    borderLeft: '1.5px solid #E5E7EB',
    paddingLeft: '16px',
  },
  contactGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
  },
  contactIconCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#E8F5F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
  },
  contactText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#374151',
  },
  divider: {
    height: '1px',
    backgroundColor: '#EAECF0',
    marginBottom: '24px',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  copyrightText: {
    fontSize: '13px',
    color: '#6B7280',
  },
  linksGroup: {
    display: 'flex',
    gap: '24px',
  },
  legalLink: {
    fontSize: '13px',
    color: '#6B7280',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
};
