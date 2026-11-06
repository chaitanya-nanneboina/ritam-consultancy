/**
 * Ritam Consultancy - Spreadsheet Integration Configuration
 * Adheres to Section 8 of the PRD
 * 
 * Keep this configurable so that once the Google Sheet / Excel webhook is provided,
 * you only need to update the endpoint or mapping below without changing the UI form.
 */

export const SPREADSHEET_CONFIG = {
  // Replace with your Google Apps Script Webhook URL or Backend API proxy endpoint
  ENDPOINT_URL: process.env.VITE_SPREADSHEET_API_URL || process.env.NEXT_PUBLIC_SPREADSHEET_API_URL || "",
  
  // Field mappings to spreadsheet columns
  COLUMN_MAPPING: {
    studentName: "Student Name",
    parentPhone: "Parent Phone Number",
    studentPhone: "Student Phone Number",
    preferredState: "Preferred State",
    budget: "Budget Range",
    submittedAt: "Submission Timestamp",
    sourcePage: "Source Page",
  },

  // Configuration options
  SUBMISSION_TIMEOUT_MS: 10000,
  RETRY_ATTEMPTS: 2,
};

