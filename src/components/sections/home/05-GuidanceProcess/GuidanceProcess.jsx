import React from 'react';
import { HOME_PAGE_DATA } from '../../../../data/homeData';

export default function GuidanceProcess() {
  const { badge, heading, subtext, image, steps, ctaButton } = HOME_PAGE_DATA.guidanceProcess;

  return (
    <section id="guidance-section" className="guidance-process-section" style={styles.section}>
      <div style={styles.container}>
        {/* Left Column: Heading, Subtext, Photo with Floating Tags */}
        <div style={styles.leftCol} className="reveal-on-scroll is-visible">
          <div style={styles.pillBadge}>
            <span style={styles.pillIcon}>👥</span>
            <span style={styles.pillText}>{badge}</span>
          </div>

          <h2 style={styles.heading}>
            {heading.prefix}
            <br />
            <span style={styles.highlight}>{heading.highlight}</span>
          </h2>

          <p style={styles.subtext}>{subtext}</p>

          {/* Photo Card with Floating Tags */}
          <div style={styles.photoCard}>
            <img src={image.src} alt={image.alt} style={styles.counselingImg} />
            {/* Overlaid Badges */}
            <div style={styles.photoTagsGroup}>
              <div style={styles.photoTag}>
                <span>🎓</span>
                <span>{image.tags[0]}</span>
              </div>
              <div style={styles.photoTag}>
                <span>👥</span>
                <span>{image.tags[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4-Step Process Timeline with Connected Track */}
        <div style={styles.rightCol} className="reveal-on-scroll is-visible delay-1">
          <div style={styles.timelineList}>
            {steps.map((st) => (
              <div key={st.number} style={styles.timelineRow} className="timeline-row">
                {/* Step Number Circle */}
                <div style={styles.stepNumCircle}>
                  <span>{st.number}</span>
                </div>

                {/* Step Card Box */}
                <div style={styles.stepCard} className="hover-lift">
                  <div style={styles.stepCardHeader}>
                    <div style={styles.stepCardIconBox}>
                      {st.icon === 'document' && '📋'}
                      {st.icon === 'cap' && '🎓'}
                      {st.icon === 'compare' && '📊'}
                      {st.icon === 'support' && '🤝'}
                    </div>
                    <h3 style={styles.stepTitle}>{st.title}</h3>
                  </div>
                  <p style={styles.stepDesc}>{st.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action CTA */}
          <div style={styles.bottomCtaWrapper}>
            <a href={ctaButton.href} style={styles.counsellorBtn} className="hover-lift">
              <span>{ctaButton.label}</span>
              <span>➔</span>
            </a>
            <span style={styles.counsellorSubtext}>{ctaButton.subtext}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '90px 24px',
    backgroundColor: '#FFFFFF',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 0.95fr) minmax(320px, 1.15fr)',
    gap: '56px',
    alignItems: 'flex-start',
  },
  leftCol: {
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
    fontSize: '15px',
    color: '#4B5563',
    lineHeight: '1.65',
    maxWidth: '460px',
  },
  photoCard: {
    position: 'relative',
    width: '100%',
    borderRadius: '22px',
    overflow: 'hidden',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
    marginTop: '12px',
    border: '1px solid #EAECF0',
  },
  counselingImg: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  photoTagsGroup: {
    position: 'absolute',
    bottom: '14px',
    left: '14px',
    right: '14px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  photoTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    backdropFilter: 'blur(8px)',
    padding: '7px 16px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '700',
    color: '#044439',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  timelineList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    position: 'relative',
  },
  timelineRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    position: 'relative',
    zIndex: 2,
  },
  stepNumCircle: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    border: '2.5px solid #044439',
    color: '#044439',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '14px',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(4, 68, 57, 0.15)',
    transition: 'all 0.3s ease',
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: '16px',
    padding: '18px 22px',
    flex: 1,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
  },
  stepCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '4px',
  },
  stepCardIconBox: {
    fontSize: '16px',
  },
  stepTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#111827',
  },
  stepDesc: {
    fontSize: '13px',
    color: '#6B7280',
    lineHeight: '1.5',
  },
  bottomCtaWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    paddingLeft: '6px',
  },
  counsellorBtn: {
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
  counsellorSubtext: {
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '600',
  },
};
