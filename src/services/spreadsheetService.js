/**
 * Ritam Consultancy - Spreadsheet Integration Service
 * Adheres to Section 7 & 8 of the PRD
 */

import { SPREADSHEET_CONFIG } from '../config/spreadsheetConfig.js';

export async function submitEnquiryToSpreadsheet(formData) {
  const { ENDPOINT_URL, COLUMN_MAPPING } = SPREADSHEET_CONFIG;

  if (!ENDPOINT_URL) {
    console.warn(
      "[Ritam Consultancy] Spreadsheet endpoint URL is not configured yet. Simulating successful submission.",
      formData
    );
    // Simulate network delay for realistic UI loading states
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: "Form submitted successfully (Development / Mock mode).",
    };
  }

  // Map form payload to spreadsheet columns
  const payload = {
    [COLUMN_MAPPING.studentName]: formData.studentName?.trim(),
    [COLUMN_MAPPING.parentPhone]: formData.parentPhone?.trim(),
    [COLUMN_MAPPING.studentPhone]: formData.studentPhone?.trim(),
    [COLUMN_MAPPING.preferredState]: formData.preferredState,
    [COLUMN_MAPPING.budget]: formData.budget,
    [COLUMN_MAPPING.submittedAt]: new Date().toISOString(),
    [COLUMN_MAPPING.sourcePage]: typeof window !== "undefined" ? window.location.pathname : "Home",
  };

  try {
    const response = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const result = await response.json().catch(() => ({}));
    return {
      success: true,
      data: result,
      message: "Thank you! Our admission expert will get in touch with you shortly.",
    };
  } catch (error) {
    console.error("[Spreadsheet Submission Error]:", error);
    return {
      success: false,
      error: error.message || "Failed to submit enquiry. Please try again or call our support line.",
    };
  }
}

