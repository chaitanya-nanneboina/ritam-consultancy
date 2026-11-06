# Ritam Consultancy - Project Architecture & Folder Structure Guide

This guide details the complete folder structure designed for the **Ritam Consultancy** website, mapping every visual element from the approved Figma design (`home.jpg`) and PRD to its exact code file, component, and asset location.

---

## 1. Directory Tree Overview

```text
Ritam Consultancy/
├── docs/                                 # Documentation & architecture specifications
│   └── PROJECT_STRUCTURE_GUIDE.md
├── public/                               # Static assets served directly
│   └── assets/
│       ├── icons/                        # Favicon, SVGs, UI icons
│       └── images/                       # High-resolution raster images
│           ├── hero/                     # Hero section student photos & backgrounds
│           │   └── hero-students.png
│           ├── regions/                  # Regional college destination thumbnails
│           │   ├── andhra-pradesh-telangana.jpg
│           │   ├── karnataka-bengaluru.jpg
│           │   ├── tamil-nadu.jpg
│           │   ├── kerala.jpg
│           │   └── north-india.jpg
│           ├── trust/                    # 3D Badges & trust graphics
│           │   └── zero-commission-shield.png
│           ├── guidance/                 # Counseling photos
│           │   └── counseling-session.jpg
│           ├── logo/                     # Brand logo marks & wordmarks
│           │   ├── ritam-logo.svg
│           │   └── ritam-logo-icon.svg
│           └── illustrations/            # Line art & campus sketches
│               └── college-building-sketch.svg
├── src/
│   ├── assets/
│   │   ├── icons/                        # Inline SVG React icons / icons sprite
│   │   └── styles/
│   │       └── brand.css                 # Brand design tokens: #044439, #F96815, Plus Jakarta Sans
│   ├── components/
│   │   ├── common/                       # Global reusable layouts across all routes
│   │   │   ├── Navbar/                   # Header navbar with pill menu & CTA
│   │   │   │   └── Navbar.jsx
│   │   │   └── Footer/                   # Global footer with contact & legal links
│   │   │       └── Footer.jsx
│   │   ├── ui/                           # Atomic, design-system UI components
│   │   │   ├── Badge/                    # Rounded pill badges (e.g. "Why Choose Ritam Consultancy?")
│   │   │   │   └── Badge.jsx
│   │   │   ├── Button/                   # Primary (#044439), Accent (#F96815), and Outline buttons
│   │   │   │   └── Button.jsx
│   │   │   ├── Card/                     # Base card wrapper with hover elevations
│   │   │   ├── Input/                    # Text input with icon prefix
│   │   │   └── Select/                   # Custom select dropdown
│   │   ├── forms/
│   │   │   └── EnquiryForm/              # The SINGLE enquiry form (PRD Section 7)
│   │   │       └── EnquiryForm.jsx
│   │   └── sections/                     # Section-level components grouped by page
│   │       ├── home/                     # All 6 Home Page Sections (in visual order)
│   │       │   ├── 01-Hero/
│   │       │   │   └── HeroSection.jsx
│   │       │   ├── 02-WhyChooseUs/
│   │       │   │   └── WhyChooseUs.jsx
│   │       │   ├── 03-ExploreColleges/
│   │       │   │   └── ExploreColleges.jsx
│   │       │   ├── 04-ZeroCommission/
│   │       │   │   └── ZeroCommission.jsx
│   │       │   ├── 05-GuidanceProcess/
│   │       │   │   └── GuidanceProcess.jsx
│   │       │   └── 06-HomeEnquiry/
│   │       │       └── HomeEnquiry.jsx
│   │       ├── colleges/                 # Sections for "/explore-colleges"
│   │       ├── blogs/                    # Sections for "/blogs"
│   │       ├── resources/                # Sections for "/resources"
│   │       └── about/                    # Sections for "/about-us"
│   ├── config/
│   │   ├── brandConfig.js                # Brand colors (#044439, #F96815), contact info, metadata
│   │   └── spreadsheetConfig.js          # Google Sheet / Webhook endpoint & column mapping (PRD Sec 8)
│   ├── data/
│   │   └── homeData.js                   # All copy, features, regions, steps, and options for Home
│   ├── hooks/
│   │   └── useEnquiryForm.js             # Form handling & state logic
│   ├── pages/
│   │   └── HomePage.jsx                  # Main home page composing all sections
│   ├── services/
│   │   └── spreadsheetService.js         # API integration service sending data to spreadsheet
│   └── utils/
│       └── validation.js                 # Validation functions (Indian mobile numbers, required checks)
├── home.jpg                              # Figma Approved Design export (reference)
├── home.pdf                              # Vector PDF design export
└── ritam_consultancy_prd.md              # Project Requirements Document
```

---

## 2. Element Mapping: Where to Put Everything

### Section 0: Header & Navigation
- **File:** `src/components/common/Navbar/Navbar.jsx`
- **Data:** `src/data/homeData.js` -> `navigation`
- **Elements:**
  1. **Brand Logo:** `public/assets/images/logo/ritam-logo.svg`
  2. **Navigation Links:** `Home`, `Explore Colleges`, `Blogs`, `Resources`, `About Us`
  3. **Call-to-Action Button:** "Enquire Now >" (scrolls to `#enquiry-form-section`)

---

### Section 1: Hero Section
- **Folder:** `src/components/sections/home/01-Hero/`
- **Component File:** `HeroSection.jsx`
- **Data:** `src/data/homeData.js` -> `hero`
- **Elements:**
  1. **Top Badge:** "🎓 B.Tech Admissions | All Over India" -> rendered via `src/components/ui/Badge/Badge.jsx`
  2. **Headline:** "Your Future Deserves **the Right College.**" (orange accent `#F96815`)
  3. **Subheadline:** "Get expert guidance, compare top engineering colleges..."
  4. **4 Value Check Badges:**
     - Verified Colleges
     - Personalized Counseling
     - Placement Insights
     - End-to-End Admission Support
  5. **CTA Buttons:**
     - Primary: "Get College Recommendations →" (`#044439`)
     - Secondary: "Talk to an Expert" (white with outline)
  6. **Hero Student Cutout Image:** `public/assets/images/hero/hero-students.png`
  7. **Floating Tag on Image:** "🎓 B.Tech Admissions 2026/2027"

---

### Section 2: Why Choose Ritam Consultancy?
- **Folder:** `src/components/sections/home/02-WhyChooseUs/`
- **Component File:** `WhyChooseUs.jsx`
- **Data:** `src/data/homeData.js` -> `whyChooseUs`
- **Elements:**
  1. **Section Badge:** "🌿 Why Choose Ritam Consultancy?"
  2. **Section Title:** "Trusted Guidance for Your **B.Tech Admission**"
  3. **4 Feature Cards Grid:**
     - Card 1: *Personalized College Recommendations* (Graduation icon in teal badge)
     - Card 2: *Clear & Transparent Information* (Rupee ₹ icon in peach badge)
     - Card 3: *End-to-End Admission Support* (Headset icon in mint badge)
     - Card 4: *Support for Students & Parents* (Users icon in orange badge)

---

### Section 3: Explore B.Tech Colleges Across India
- **Folder:** `src/components/sections/home/03-ExploreColleges/`
- **Component File:** `ExploreColleges.jsx`
- **Data:** `src/data/homeData.js` -> `exploreColleges`
- **Elements:**
  1. **Section Badge:** "📍 Explore by Location"
  2. **Section Title:** "Explore B. Tech Colleges **Across India**"
  3. **Button:** "Explore All Locations →"
  4. **Architectural Campus Sketch:** `public/assets/images/illustrations/college-building-sketch.svg`
  5. **5 Regional Destination Cards (Images):**
     - Andhra Pradesh & Telangana -> `public/assets/images/regions/andhra-pradesh-telangana.jpg`
     - Karnataka / Bengaluru -> `public/assets/images/regions/karnataka-bengaluru.jpg`
     - Tamil Nadu -> `public/assets/images/regions/tamil-nadu.jpg`
     - Kerala -> `public/assets/images/regions/kerala.jpg`
     - North India -> `public/assets/images/regions/north-india.jpg`

---

### Section 4: Zero Commission Commitment
- **Folder:** `src/components/sections/home/04-ZeroCommission/`
- **Component File:** `ZeroCommission.jsx`
- **Data:** `src/data/homeData.js` -> `zeroCommission`
- **Elements:**
  1. **3D Badge Graphic:** `public/assets/images/trust/zero-commission-shield.png` (Green 3D shield with orange "Commission" ribbon)
  2. **Badge:** "🌿 Our Commitment"
  3. **Title:** "Zero Commission, **Always**"
  4. **3 Trust Pill Badges:**
     - 🎓 Completely Free Guidance
     - 🔍 Transparent Process
     - 🛡️ Student & Parent First

---

### Section 5: Guidance for Parents & Students (Process Roadmap)
- **Folder:** `src/components/sections/home/05-GuidanceProcess/`
- **Component File:** `GuidanceProcess.jsx`
- **Data:** `src/data/homeData.js` -> `guidanceProcess`
- **Elements:**
  1. **Section Badge:** "👨‍👩‍👧 Guidance for Parents & Students"
  2. **Section Title:** "Because Your Future **Matters to Us**"
  3. **Counseling Meeting Photo:** `public/assets/images/guidance/counseling-session.jpg`
  4. **Photo Tags:** "🎓 Trusted Guidance for Students" & "👥 Support for Parents"
  5. **4-Step Process Timeline:**
     - **01:** Share Your Details
     - **02:** Get College Suggestions
     - **03:** Compare & Shortlist
     - **04:** Get Admission Support
  6. **Action CTA:** "Talk to Our Counsellor →" ("Get personalized guidance for a better tomorrow.")

---

### Section 6: Enquiry Form Section (Single Enquiry Form - PRD Sec 7 & 8)
- **Folder:** `src/components/sections/home/06-HomeEnquiry/`
- **Component File:** `HomeEnquiry.jsx`
- **Form Component:** `src/components/forms/EnquiryForm/EnquiryForm.jsx`
- **Service Integration:** `src/services/spreadsheetService.js`
- **Configuration:** `src/config/spreadsheetConfig.js`
- **Elements:**
  1. **Left Card (The Single Enquiry Form):**
     - Student Name (Full Name)*
     - Parent's Phone Number*
     - Student's Phone Number*
     - Preferred State for B.Tech*
     - Your Budget (Annual Tuition Fee)*
     - Button: "Get College Suggestions"
     - Security Note: "🔒 Your information is safe and will only be used for college guidance."
  2. **Right Column:**
     - Badge: "🌿 Get Expert Guidance"
     - Heading: "Find the Right B.Tech College"
     - Subtext: "Tell us your preferences, and our counselling team will suggest..."

---

### Section 7: Global Footer
- **File:** `src/components/common/Footer/Footer.jsx`
- **Data:** `src/data/homeData.js` -> `footer`
- **Elements:**
  1. **Brand Identity:** Logo + "Trusted guidance for B.Tech admissions across India."
  2. **Contact Info:**
     - Phone: `+91 98115 43210`
     - Email: `support@ritamconsultancy.com`
     - Location: `Hyderabad, India`
  3. **Bottom Legal Bar:**
     - Copyright: `© 2026 Ritam Consultancy. All rights reserved.`
     - Links: `Privacy Policy` | `Terms & Conditions` | `Contact Us`

---

## 3. Organizing Other Sections & Pages

| Page / Route | Component Folder | Primary Role |
| :--- | :--- | :--- |
| **Explore Colleges** (`/explore-colleges`) | `src/components/sections/colleges/` | College filters, search, cutoff details, regional university directories |
| **Blogs & Articles** (`/blogs`) | `src/components/sections/blogs/` | Admission tips, entrance exam guides (JEE, KCET, EAMCET), branch comparisons |
| **Resources** (`/resources`) | `src/components/sections/resources/` | Downloadable brochures, fee structure guides, counseling checklist PDFs |
| **About Us** (`/about-us`) | `src/components/sections/about/` | Mission, senior counselors, zero-commission pledge, Hyderabad office location |
| **Privacy Policy** (`/privacy-policy`) | `src/pages/PrivacyPolicy.jsx` | Student data privacy & compliance |
| **Terms & Conditions** (`/terms`) | `src/pages/Terms.jsx` | Terms of service |

