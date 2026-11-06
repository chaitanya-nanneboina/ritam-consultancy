import React from 'react';
import { HOME_PAGE_DATA } from '../../../../data/homeData';

export default function WhyChooseUs() {
  const { badge, heading, subtext, features } = HOME_PAGE_DATA.whyChooseUs;

  return (
    <section id="why-choose-us" className="why-choose-us" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header} className="reveal-on-scroll is-visible">
          <div style={styles.pillBadge}>
            <span style={styles.pillIcon}>🌿</span>
            <span style={styles.pillText}>{badge}</span>
          </div>

          <h2 style={styles.heading}>
            {heading.prefix}
            <span style={styles.highlight}>{heading.highlight}</span>
          </h2>

          <p style={styles.subtext}>{subtext}</p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div style={styles.cardsGrid}>
          {features.map((feat, idx) => (
            <div
              key={feat.id}
              style={styles.card}
              className={`hover-lift reveal-on-scroll is-visible delay-${idx + 1}`}
            >
              {/* Icon Container with specific pastel badge color */}
              <div
                style={{
                  ...styles.iconContainer,
                  backgroundColor:
                    feat.badgeColor === 'peach'
                      ? '#FEF0E6'
                      : feat.badgeColor === 'orange'
                      ? '#FFF4ED'
                      : feat.badgeColor === 'mint'
                      ? '#E6F8F3'
                      : '#E8F5F1',
                  color:
                    feat.badgeColor === 'peach' || feat.badgeColor === 'orange'
                      ? '#F96815'
                      : '#044439',
                }}
              >
                {feat.icon === 'cap' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                )}
                {feat.icon === 'rupee' && (
                  <span style={{ fontSize: '20px', fontWeight: '800' }}>₹</span>
                )}
                {feat.icon === 'headset' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                )}
                {feat.icon === 'users' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
              </div>

              {/* Title & Description */}
              <h3 style={styles.cardTitle}>{feat.title}</h3>
              <p style={styles.cardDescription}>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '85px 24px 95px',
    backgroundColor: '#F4F8F7', /* Distinct section separation */
    borderTop: '1px solid #E6ECE9',
    borderBottom: '1px solid #E6ECE9',
    position: 'relative',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '14px',
    maxWidth: '680px',
  },
  pillBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#E8F5F1',
    border: '1px solid #A3D8CD',
    padding: '6px 16px',
    borderRadius: '9999px',
  },
  pillIcon: {
    fontSize: '13px',
  },
  pillText: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#044439',
  },
  heading: {
    fontSize: 'clamp(28px, 3.8vw, 42px)',
    fontWeight: '800',
    color: '#111827',
    lineHeight: '1.2',
    letterSpacing: '-0.9px',
  },
  highlight: {
    color: '#F96815',
  },
  subtext: {
    fontSize: '15px',
    color: '#6B7280',
    lineHeight: '1.65',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '18px',
    padding: '32px 26px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '14px',
    boxShadow: '0 4px 14px rgba(4, 68, 57, 0.03)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  },
  cardTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: '1.35',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6',
  },
};
