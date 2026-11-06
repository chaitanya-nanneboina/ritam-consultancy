import React from 'react';
import { HOME_PAGE_DATA } from '../../../../data/homeData';

export default function HeroSection() {
  const { badge, headline, subheadline, bulletBadges, ctaButtons, image } = HOME_PAGE_DATA.hero;

  return (
    <section className="hero-section" style={styles.section}>
      <div style={styles.container}>
        {/* Left Column: Heading, Copy, Badges, CTAs */}
        <div style={styles.leftCol} className="reveal-on-scroll is-visible">
          {/* Top Pill Badge */}
          <div style={styles.topBadge}>
            <span style={styles.badgeIcon}>🎓</span>
            <span style={styles.badgeText}>{badge}</span>
          </div>

          {/* Main Headline with Dribbble Underline */}
          <h1 style={styles.headline}>
            {headline.prefix}
            <br />
            <span style={styles.curlWrapper}>
              <span style={styles.highlight}>{headline.highlight}</span>
              {/* Dribbble Style Hand-drawn Underline Curve SVG */}
              <svg style={styles.curlSvg} viewBox="0 0 260 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C60 3 180 3 257 9" stroke="#F96815" strokeWidth="3.2" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p style={styles.subheadline}>{subheadline}</p>

          {/* 4 Feature Badges Grid */}
          <div style={styles.badgesGrid}>
            {bulletBadges.map((b) => (
              <div key={b.id} style={styles.bulletItem} className="hover-lift">
                <div style={styles.bulletCheckIcon}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                      stroke="#044439"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span style={styles.bulletText}>{b.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div style={styles.ctaGroup}>
            <a
              href={ctaButtons.primary.href}
              style={styles.primaryBtn}
              className="hover-lift"
            >
              <span>{ctaButtons.primary.label}</span>
              <span style={styles.btnArrow}>➔</span>
            </a>
            <a
              href={ctaButtons.secondary.href}
              style={styles.secondaryBtn}
              className="hover-lift"
            >
              {ctaButtons.secondary.label}
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual with Exact Backdrop Shapes & Trophy Card */}
        <div style={styles.rightCol} className="reveal-on-scroll is-visible delay-1">
          <div style={styles.visualContainer}>
            {/* SVG Reproducing the exact layered shapes from the design */}
            <svg style={styles.shapesBackdropSvg} viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 1. Dark Forest Green Arch behind Boy's head (#135B4E) */}
              <path d="M125 75C125 30 195 20 255 35C315 50 325 145 315 215C305 275 215 305 165 275C125 245 125 125 125 75Z" fill="#135B4E"/>
              
              {/* 2. Vibrant Orange Angled Wedge extending left (#F96815) */}
              <path d="M35 165C15 195 40 235 85 225L265 155C300 140 315 180 295 215L195 320C160 355 100 340 70 300L35 165Z" fill="#F96815"/>
              
              {/* 3. Muted Sage Green Shape on the Right (#CBD5C9) */}
              <path d="M295 80C365 45 455 65 480 125C505 185 485 265 425 275C365 285 305 225 285 165C270 120 265 90 295 80Z" fill="#CBD5C9"/>
              
              {/* 4. Soft Warm Sand/Peach Shape on Far Right (#F7E6D7) */}
              <path d="M435 135C490 115 525 160 530 235C535 310 490 385 445 395C405 405 395 345 400 275C405 205 395 150 435 135Z" fill="#F7E6D7"/>
            </svg>

            {/* Top Floating Trophy Card Matching Image Exactly */}
            <div style={styles.floatingBadge}>
              <div style={styles.trophyIconBox}>🏆</div>
              <div style={styles.badgeTextGroup}>
                <span style={styles.badgeHeading}>B.Tech Admissions</span>
                <span style={styles.badgeSubtext}>Across India</span>
              </div>
            </div>

            {/* Floating Stat Rating Badge Bottom */}
            <div style={styles.floatingStatTag}>
              <span style={{ color: '#F59E0B', fontSize: '16px' }}>⭐</span>
              <div>
                <span style={styles.statTitle}>4.9/5 Rating</span>
                <span style={styles.statSub}>1,200+ Students Guided</span>
              </div>
            </div>

            {/* Student Cutout Image from user folder */}
            <img
              src={image.src}
              alt={image.alt}
              style={styles.studentsImg}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '65px 24px 95px', /* Generous top breathing room */
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 0.95fr)',
    gap: '48px',
    alignItems: 'center',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
  },
  topBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#E8F5F1',
    border: '1px solid #A3D8CD',
    padding: '7px 16px',
    borderRadius: '9999px',
    boxShadow: '0 2px 6px rgba(4, 68, 57, 0.06)',
  },
  badgeIcon: {
    fontSize: '13px',
  },
  badgeText: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#044439',
    letterSpacing: '0.2px',
  },
  headline: {
    fontSize: 'clamp(36px, 4.8vw, 58px)',
    fontWeight: '800',
    lineHeight: '1.15',
    color: '#111827',
    letterSpacing: '-1.6px',
  },
  curlWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  curlSvg: {
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '100%',
    height: '12px',
    pointerEvents: 'none',
  },
  highlight: {
    color: '#F96815',
  },
  subheadline: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#4B5563',
    maxWidth: '530px',
  },
  badgesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
    gap: '14px 20px',
    margin: '6px 0 10px',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#F9FAFB',
    padding: '8px 14px',
    borderRadius: '12px',
    border: '1px solid #EAECF0',
  },
  bulletCheckIcon: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    backgroundColor: '#E8F5F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  bulletText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
  },
  ctaGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '12px',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#044439',
    color: '#FFFFFF',
    padding: '15px 32px',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'none',
    boxShadow: '0 10px 24px rgba(4, 68, 57, 0.25)',
    transition: 'all 0.25s ease',
  },
  btnArrow: {
    fontSize: '14px',
    transition: 'transform 0.2s ease',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    color: '#1F2937',
    border: '1.5px solid #D1D5DB',
    padding: '14px 28px',
    borderRadius: '9999px',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
  },
  rightCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  visualContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  shapesBackdropSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  },
  floatingBadge: {
    position: 'absolute',
    top: '15px',
    right: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(234, 236, 240, 0.9)',
    borderRadius: '18px',
    padding: '10px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.12)',
    zIndex: 5,
    animation: 'floatGentle 4.5s ease-in-out infinite',
  },
  trophyIconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: '#FEF3C7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    flexShrink: 0,
  },
  badgeTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.25,
  },
  badgeHeading: {
    fontSize: '13px',
    fontWeight: '800',
    color: '#111827',
    letterSpacing: '-0.2px',
  },
  badgeSubtext: {
    fontSize: '11px',
    color: '#6B7280',
    fontWeight: '500',
  },
  floatingStatTag: {
    position: 'absolute',
    bottom: '30px',
    left: '-15px',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    border: '1px solid #EAECF0',
    borderRadius: '14px',
    padding: '8px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 12px 26px rgba(0, 0, 0, 0.1)',
    zIndex: 5,
  },
  statTitle: {
    display: 'block',
    fontSize: '11px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: 1.2,
  },
  statSub: {
    display: 'block',
    fontSize: '10px',
    fontWeight: '700',
    color: '#059669',
  },
  studentsImg: {
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 3,
  },
};
