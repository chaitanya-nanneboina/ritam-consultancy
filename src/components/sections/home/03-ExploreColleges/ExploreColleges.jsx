import React from 'react';
import { HOME_PAGE_DATA } from '../../../../data/homeData';

export default function ExploreColleges() {
  const { badge, heading, subtext, ctaButton, regions } = HOME_PAGE_DATA.exploreColleges;

  const wideCard = regions.find((r) => r.featured);
  const gridCards = regions.filter((r) => !r.featured);

  return (
    <section id="explore-colleges-section" className="explore-colleges" style={styles.section}>
      <div style={styles.container}>
        {/* Left Column: Heading, Subtitle, CTA, Campus Sketch */}
        <div style={styles.leftCol} className="reveal-on-scroll is-visible">
          <div style={styles.pillBadge}>
            <span style={styles.pillIcon}>📍</span>
            <span style={styles.pillText}>{badge}</span>
          </div>

          <h2 style={styles.heading}>
            {heading.prefix}
            <br />
            <span style={styles.highlight}>{heading.highlight}</span>
          </h2>

          <p style={styles.subtext}>{subtext}</p>

          <a href={ctaButton.href} style={styles.ctaBtn} className="hover-lift">
            <span>{ctaButton.label}</span>
            <span>➔</span>
          </a>

          {/* Architectural College Sketch */}
          <div style={styles.sketchContainer}>
            <svg
              width="240"
              height="80"
              viewBox="0 0 240 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.sketchSvg}
            >
              <path d="M120 10L135 25H105L120 10Z" stroke="#94A3B8" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M100 25C100 20 140 20 140 25V35H100V25Z" stroke="#94A3B8" strokeWidth="1.6" />
              <path d="M60 35H180V42H60V35Z" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="75" y1="42" x2="75" y2="70" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="95" y1="42" x2="95" y2="70" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="115" y1="42" x2="115" y2="70" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="125" y1="42" x2="125" y2="70" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="145" y1="42" x2="145" y2="70" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="165" y1="42" x2="165" y2="70" stroke="#94A3B8" strokeWidth="1.6" />
              <rect x="40" y="70" width="160" height="6" stroke="#94A3B8" strokeWidth="1.6" />
              <line x1="30" y1="76" x2="210" y2="76" stroke="#94A3B8" strokeWidth="1.6" />
            </svg>
          </div>
        </div>

        {/* Right Column: Grand, High-Impact Region Cards */}
        <div style={styles.rightGrid} className="reveal-on-scroll is-visible delay-1">
          {/* Top Wide Card: Andhra Pradesh & Telangana */}
          {wideCard && (
            <a href={wideCard.href} style={styles.regionCardWide} className="region-card-hover">
              <div style={styles.wideImgWrapper}>
                <img src={wideCard.image} alt={wideCard.name} style={styles.cardImg} />
              </div>
              <div style={styles.cardInfo}>
                <div style={styles.textGroup}>
                  <span style={styles.regionTitle}>{wideCard.name}</span>
                  <span style={styles.regionSubtag}>Hyderabad • Vijayawada • Visakhapatnam • 45+ Colleges</span>
                </div>
                <div style={styles.arrowCircle}>➔</div>
              </div>
            </a>
          )}

          {/* 2x2 Grid for Remaining Regions */}
          <div style={styles.gridCardsLayout}>
            {gridCards.map((region) => (
              <a
                key={region.id}
                href={region.href}
                style={styles.regionCard}
                className="region-card-hover"
              >
                <div style={styles.thumbWrapper}>
                  <img src={region.image} alt={region.name} style={styles.cardImg} />
                </div>
                <div style={styles.cardInfo}>
                  <div style={styles.textGroup}>
                    <span style={styles.regionTitle}>{region.name}</span>
                    <span style={styles.regionSubtag}>Top Engineering Colleges</span>
                  </div>
                  <div style={styles.arrowCircle}>➔</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '90px 24px 100px',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 0.85fr) minmax(340px, 1.25fr)',
    gap: '56px',
    alignItems: 'center',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '22px',
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
    fontSize: '15px',
    color: '#4B5563',
    lineHeight: '1.65',
    maxWidth: '440px',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#044439',
    color: '#FFFFFF',
    padding: '13px 26px',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    boxShadow: '0 6px 16px rgba(4, 68, 57, 0.2)',
  },
  sketchContainer: {
    marginTop: '26px',
    opacity: 0.8,
    borderTop: '1px dashed #E5E7EB',
    paddingTop: '24px',
    width: '100%',
  },
  sketchSvg: {
    width: '240px',
    height: 'auto',
  },
  rightGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  regionCardWide: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #EAECF0',
    borderRadius: '20px',
    overflow: 'hidden',
    minHeight: '120px',
    textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
  },
  wideImgWrapper: {
    width: '190px',
    height: '100%',
    minHeight: '120px',
    flexShrink: 0,
    overflow: 'hidden',
  },
  gridCardsLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  regionCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #EAECF0',
    borderRadius: '18px',
    overflow: 'hidden',
    minHeight: '104px',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
  },
  thumbWrapper: {
    width: '120px',
    height: '100%',
    minHeight: '104px',
    flexShrink: 0,
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  cardInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    flex: 1,
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  regionTitle: {
    fontSize: '16px',
    fontWeight: '800',
    color: '#111827',
    letterSpacing: '-0.3px',
  },
  regionSubtag: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6B7280',
  },
  arrowCircle: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: '#E8F5F1',
    color: '#044439',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '800',
    flexShrink: 0,
    border: '1px solid #A3D8CD',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
