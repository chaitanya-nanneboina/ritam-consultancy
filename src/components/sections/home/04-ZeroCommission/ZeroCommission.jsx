import React from 'react';
import { HOME_PAGE_DATA } from '../../../../data/homeData';

export default function ZeroCommission() {
  const { badge, heading, subtext, trustBadges, shieldImage } = HOME_PAGE_DATA.zeroCommission;

  return (
    <section className="zero-commission-section" style={styles.section}>
      <div style={styles.container}>
        {/* Left Side: 3D Shield Graphic from user folder */}
        <div style={styles.leftCol} className="reveal-on-scroll is-visible">
          <div style={styles.shieldWrapper}>
            <img
              src={shieldImage}
              alt="0% Commission Guarantee"
              style={styles.shieldImg}
              className="hover-scale"
            />
          </div>
        </div>

        {/* Right Side: Copy & Trust Pills */}
        <div style={styles.rightCol} className="reveal-on-scroll is-visible delay-1">
          <div style={styles.pillBadge}>
            <span style={styles.pillIcon}>🌿</span>
            <span style={styles.pillText}>{badge}</span>
          </div>

          <h2 style={styles.heading}>
            {heading.prefix}
            <span style={styles.highlight}>{heading.highlight}</span>
          </h2>

          <p style={styles.subtext}>{subtext}</p>

          {/* 3 Trust Badges Row */}
          <div style={styles.trustBadgesRow}>
            {trustBadges.map((item) => (
              <div key={item.id} style={styles.trustPill} className="hover-lift">
                <span style={styles.trustIcon}>
                  {item.icon === 'gift' && '🎁'}
                  {item.icon === 'shield-check' && '🛡️'}
                  {item.icon === 'heart-handshake' && '🤝'}
                </span>
                <span style={styles.trustLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '85px 24px',
    backgroundColor: '#FAF8F5', /* Distinct warm cream separation */
    borderTop: '1px solid #EFEAE3',
    borderBottom: '1px solid #EFEAE3',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(280px, 0.9fr) minmax(320px, 1.2fr)',
    gap: '50px',
    alignItems: 'center',
  },
  leftCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldImg: {
    width: '100%',
    maxWidth: '310px',
    height: 'auto',
    filter: 'drop-shadow(0 16px 32px rgba(4, 68, 57, 0.22))',
    animation: 'floatGentle 5s ease-in-out infinite',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
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
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: '800',
    color: '#111827',
    lineHeight: '1.2',
    letterSpacing: '-0.8px',
  },
  highlight: {
    color: '#F96815',
  },
  subtext: {
    fontSize: '16px',
    color: '#4B5563',
    lineHeight: '1.65',
    maxWidth: '520px',
  },
  trustBadgesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '12px',
  },
  trustPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    padding: '11px 20px',
    borderRadius: '9999px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    cursor: 'default',
  },
  trustIcon: {
    fontSize: '15px',
  },
  trustLabel: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#374151',
  },
};
