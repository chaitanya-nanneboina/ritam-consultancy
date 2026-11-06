/**
 * Validation utilities for Ritam Consultancy
 */

export function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  // Valid Indian 10-digit mobile starting with 6, 7, 8, or 9
  return /^[6-9]\d{9}$/.test(cleaned);
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateRequired(value) {
  return value !== null && value !== undefined && value.toString().trim().length > 0;
}

