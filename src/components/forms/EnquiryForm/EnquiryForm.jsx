import React, { useState } from 'react';
import { HOME_PAGE_DATA } from '../../../data/homeData';
import { submitEnquiryToSpreadsheet } from '../../../services/spreadsheetService';

export default function EnquiryForm() {
  const { form } = HOME_PAGE_DATA.enquirySection;

  const [formData, setFormData] = useState({
    studentName: '',
    parentPhone: '',
    studentPhone: '',
    preferredState: '',
    budget: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (errorMessage) setErrorMessage('');
  };

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) {
      errs.studentName = "Please enter student's full name";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const parentClean = formData.parentPhone.replace(/\D/g, '');
    if (!parentClean) {
      errs.parentPhone = "Parent's phone number is required";
    } else if (!phoneRegex.test(parentClean)) {
      errs.parentPhone = 'Enter a valid 10-digit number (e.g. 9811543210)';
    }

    const studentClean = formData.studentPhone.replace(/\D/g, '');
    if (!studentClean) {
      errs.studentPhone = "Student's phone number is required";
    } else if (!phoneRegex.test(studentClean)) {
      errs.studentPhone = 'Enter a valid 10-digit number (e.g. 9811543210)';
    }

    if (!formData.preferredState) {
      errs.preferredState = 'Please select a preferred state';
    }

    if (!formData.budget) {
      errs.budget = 'Please select your annual tuition fee budget';
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await submitEnquiryToSpreadsheet(formData);
      setIsSubmitting(false);

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          studentName: '',
          parentPhone: '',
          studentPhone: '',
          preferredState: '',
          budget: '',
        });
      } else {
        setErrorMessage(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('A network error occurred. Please try again or call us directly.');
    }
  };

  return (
    <div id="enquiry-form-section" style={styles.cardContainer} className="hover-lift">
      {/* Form Header */}
      <div style={styles.formHeader}>
        <div style={styles.formIconBadge}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#044439" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <div>
          <h3 style={styles.cardTitle}>{form.cardTitle}</h3>
          <p style={styles.cardSubtitle}>{form.cardSubtitle}</p>
        </div>
      </div>

      {/* Success Notification Banner */}
      {submitSuccess && (
        <div style={styles.successBanner}>
          <div style={styles.successIcon}>✓</div>
          <div>
            <strong style={styles.successTitle}>Request Submitted Successfully!</strong>
            <p style={styles.successText}>Our expert counseling team will review your preferences and get in touch with you shortly.</p>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {errorMessage && (
        <div style={styles.errorBanner}>
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        {/* Student Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>{form.fields.studentName.label} *</label>
          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>👤</span>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder={form.fields.studentName.placeholder}
              style={{
                ...styles.input,
                borderColor: errors.studentName ? '#EF4444' : '#D1D5DB',
              }}
            />
          </div>
          {errors.studentName && <span style={styles.errorText}>{errors.studentName}</span>}
        </div>

        {/* Parent & Student Phone (Side-by-side row) */}
        <div style={styles.twoColRow}>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>{form.fields.parentPhone.label} *</label>
            <div style={styles.inputWrapper}>
              <span style={styles.inputIcon}>📞</span>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                placeholder={form.fields.parentPhone.placeholder}
                style={{
                  ...styles.input,
                  borderColor: errors.parentPhone ? '#EF4444' : '#D1D5DB',
                }}
              />
            </div>
            {errors.parentPhone && <span style={styles.errorText}>{errors.parentPhone}</span>}
          </div>

          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>{form.fields.studentPhone.label} *</label>
            <div style={styles.inputWrapper}>
              <span style={styles.inputIcon}>📱</span>
              <input
                type="tel"
                name="studentPhone"
                value={formData.studentPhone}
                onChange={handleChange}
                placeholder={form.fields.studentPhone.placeholder}
                style={{
                  ...styles.input,
                  borderColor: errors.studentPhone ? '#EF4444' : '#D1D5DB',
                }}
              />
            </div>
            {errors.studentPhone && <span style={styles.errorText}>{errors.studentPhone}</span>}
          </div>
        </div>

        {/* Preferred State */}
        <div style={styles.formGroup}>
          <label style={styles.label}>{form.fields.preferredState.label} *</label>
          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>📍</span>
            <select
              name="preferredState"
              value={formData.preferredState}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...styles.select,
                borderColor: errors.preferredState ? '#EF4444' : '#D1D5DB',
              }}
            >
              <option value="">{form.fields.preferredState.placeholder}</option>
              {form.fields.preferredState.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {errors.preferredState && <span style={styles.errorText}>{errors.preferredState}</span>}
        </div>

        {/* Budget */}
        <div style={styles.formGroup}>
          <label style={styles.label}>{form.fields.budget.label} *</label>
          <div style={styles.inputWrapper}>
            <span style={styles.inputIcon}>₹</span>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...styles.select,
                borderColor: errors.budget ? '#EF4444' : '#D1D5DB',
              }}
            >
              <option value="">{form.fields.budget.placeholder}</option>
              {form.fields.budget.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          {errors.budget && <span style={styles.errorText}>{errors.budget}</span>}
        </div>

        {/* Full-width Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            ...styles.submitBtn,
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
          className="hover-lift"
        >
          {isSubmitting ? (
            <span style={styles.btnContent}>
              <span style={styles.spinner} />
              <span>Submitting Details...</span>
            </span>
          ) : (
            <span style={styles.btnContent}>
              <span>{form.submitButton}</span>
              <span style={styles.btnArrow}>➔</span>
            </span>
          )}
        </button>

        {/* Security Privacy Note */}
        <div style={styles.privacyNote}>
          <span style={{ fontSize: '13px' }}>🔒</span>
          <span>{form.privacyNotice}</span>
        </div>
      </form>
    </div>
  );
}

const styles = {
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '36px',
    boxShadow: '0 20px 40px -15px rgba(4, 68, 57, 0.12)',
    border: '1px solid #EAECF0',
    maxWidth: '520px',
    width: '100%',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    marginBottom: '24px',
  },
  formIconBadge: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    backgroundColor: '#E8F5F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '4px',
  },
  cardSubtitle: {
    fontSize: '13px',
    color: '#6B7280',
    lineHeight: '1.4',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  twoColRow: {
    display: 'flex',
    gap: '14px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#374151',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '14px',
    color: '#6B7280',
    fontSize: '14px',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '11px 14px 11px 40px',
    borderRadius: '12px',
    border: '1.5px solid #D1D5DB',
    fontSize: '14px',
    color: '#111827',
    backgroundColor: '#FCFCFD',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  select: {
    appearance: 'none',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
  },
  errorText: {
    fontSize: '12px',
    color: '#EF4444',
    marginTop: '2px',
    fontWeight: '500',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#044439',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '9999px',
    padding: '14px 20px',
    fontSize: '15px',
    fontWeight: '700',
    boxShadow: '0 8px 20px rgba(4, 68, 57, 0.22)',
    transition: 'all 0.25s ease',
    marginTop: '4px',
  },
  btnContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  btnArrow: {
    fontSize: '14px',
  },
  spinner: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTopColor: '#FFFFFF',
    animation: 'spin 0.8s linear infinite',
  },
  privacyNote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#6B7280',
    textAlign: 'center',
    marginTop: '4px',
  },
  successBanner: {
    backgroundColor: '#ECFDF5',
    border: '1px solid #A7F3D0',
    borderRadius: '12px',
    padding: '14px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '16px',
    color: '#065F46',
  },
  successIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#10B981',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '13px',
    flexShrink: 0,
  },
  successTitle: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '700',
    marginBottom: '2px',
  },
  successText: {
    fontSize: '12px',
    lineHeight: '1.4',
  },
  errorBanner: {
    backgroundColor: '#FEF2F2',
    border: '1px solid #FECACA',
    borderRadius: '12px',
    padding: '12px 14px',
    color: '#991B1B',
    fontSize: '13px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};
