/**
 * Ritam Consultancy - Home Page Data & Content
 * Directly linked to the user's uploaded assets in /public/assets/images/
 */

export const HOME_PAGE_DATA = {
  // Navigation
  navigation: {
    logo: "/assets/images/logo/ritam-logo.png",
    links: [
      { id: "home", label: "Home", href: "#", active: true },
      { id: "colleges", label: "Explore Colleges", href: "#explore-colleges-section" },
      { id: "blogs", label: "Blogs", href: "#" },
      { id: "resources", label: "Resources", href: "#" },
      { id: "about", label: "About Us", href: "#why-choose-us" },
    ],
    ctaButton: {
      label: "Enquire Now",
      targetSectionId: "enquiry-form-section",
    },
  },

  // 01. Hero Section
  hero: {
    badge: "B.Tech Admissions | All Over India",
    headline: {
      prefix: "Your Future Deserves ",
      highlight: "the Right College.",
    },
    subheadline:
      "Get expert guidance, compare top engineering colleges, and choose the right B.Tech college across India — based on your budget, preferences, and career goals.",
    bulletBadges: [
      { id: "verified", label: "Verified Colleges", icon: "shield-check" },
      { id: "counseling", label: "Personalized Counseling", icon: "user-heart" },
      { id: "placement", label: "Placement Insights", icon: "chart-bar" },
      { id: "admission", label: "End-to-End Admission Support", icon: "academic-cap" },
    ],
    ctaButtons: {
      primary: {
        label: "Get College Recommendations",
        href: "#enquiry-form-section",
      },
      secondary: {
        label: "Talk to an Expert",
        href: "#guidance-section",
      },
    },
    image: {
      src: "/assets/images/hero/hero-students.png",
      alt: "Ritam Consultancy Happy Engineering Students",
      floatingBadge: "B.Tech Admissions 2026/2027",
    },
  },

  // 02. Why Choose Us Section
  whyChooseUs: {
    badge: "Why Choose Ritam Consultancy?",
    heading: {
      prefix: "Trusted Guidance for Your ",
      highlight: "B.Tech Admission",
    },
    subtext:
      "We simplify your college selection with the right information, personalized support, and a transparent process.",
    features: [
      {
        id: "feat-1",
        title: "Personalized College Recommendations",
        description: "Colleges that match your budget, rank, and career goals.",
        icon: "cap",
        badgeColor: "teal",
      },
      {
        id: "feat-2",
        title: "Clear & Transparent Information",
        description: "Get accurate details on fees, admissions, placements, and more.",
        icon: "rupee",
        badgeColor: "peach",
      },
      {
        id: "feat-3",
        title: "End-to-End Admission Support",
        description: "Guidance from college selection to admission completion.",
        icon: "headset",
        badgeColor: "mint",
      },
      {
        id: "feat-4",
        title: "Support for Students & Parents",
        description: "Reliable guidance with a student-first approach.",
        icon: "users",
        badgeColor: "orange",
      },
    ],
  },

  // 03. Explore Colleges by Region Section
  exploreColleges: {
    badge: "Explore by Location",
    heading: {
      prefix: "Explore B. Tech Colleges ",
      highlight: "Across India",
    },
    subtext:
      "Discover top engineering colleges by region with curated information on courses, fees, placements, and admission process.",
    ctaButton: {
      label: "Explore All Locations",
      href: "#explore-colleges-section",
    },
    regions: [
      {
        id: "ap-ts",
        name: "Andhra Pradesh & Telangana",
        image: "/assets/images/regions/AP.png",
        href: "#",
        featured: true, // wide card
      },
      {
        id: "ka",
        name: "Karnataka / Bengaluru",
        image: "/assets/images/regions/Karnataka.png",
        href: "#",
      },
      {
        id: "tn",
        name: "Tamil Nadu",
        image: "/assets/images/regions/Tamil Nadu.png",
        href: "#",
      },
      {
        id: "kl",
        name: "Kerala",
        image: "/assets/images/regions/Kerala.png",
        href: "#",
      },
      {
        id: "north",
        name: "North India",
        image: "/assets/images/regions/Golden Sunset at India Gate.png",
        href: "#",
      },
    ],
  },

  // 04. Zero Commission Section
  zeroCommission: {
    badge: "Our Commitment",
    heading: {
      prefix: "Zero Commission, ",
      highlight: "Always",
    },
    subtext:
      "We do not charge any commission or hidden fees from students or parents for our guidance and admission support.",
    trustBadges: [
      { id: "free", label: "Completely Free Guidance", icon: "gift" },
      { id: "transparent", label: "Transparent Process", icon: "shield-check" },
      { id: "student-first", label: "Student & Parent First", icon: "heart-handshake" },
    ],
    shieldImage: "/assets/images/trust/zero-commission-shield.png",
  },

  // 05. Guidance for Parents & Students Section
  guidanceProcess: {
    badge: "Guidance for Parents & Students",
    heading: {
      prefix: "Because Your Future ",
      highlight: "Matters to Us",
    },
    subtext:
      "We understand that choosing the right college is a big decision. Ritam provides trusted guidance and support for both students and parents at every step.",
    image: {
      src: "/assets/images/guidance/counseling-session.png",
      alt: "Counselor guiding student and parent",
      tags: ["Trusted Guidance for Students", "Support for Parents"],
    },
    steps: [
      {
        number: "01",
        title: "Share Your Details",
        description: "Tell us about your academic background, preferred courses, location and budget.",
        icon: "document",
      },
      {
        number: "02",
        title: "Get College Suggestions",
        description: "We analyze your profile and suggest the best colleges that match your preferences.",
        icon: "cap",
      },
      {
        number: "03",
        title: "Compare & Shortlist",
        description: "Review fees, courses, placements, facilities, and other important factors side by side.",
        icon: "compare",
      },
      {
        number: "04",
        title: "Get Admission Support",
        description: "We help you with the application process, documentation, and next steps.",
        icon: "support",
      },
    ],
    ctaButton: {
      label: "Talk to Our Counsellor",
      subtext: "Get personalized guidance for a better tomorrow.",
      href: "#enquiry-form-section",
    },
  },

  // 06. Enquiry Form Section (PRD Section 7 & 8)
  enquirySection: {
    rightContent: {
      badge: "Get Expert Guidance",
      heading: "Find the Right B.Tech College",
      subtext:
        "Tell us your preferences, and our counselling team will suggest the best engineering colleges for you and your family based on your budget and preferred location.",
    },
    form: {
      cardTitle: "Request College Recommendations",
      cardSubtitle: "Fill in your details and our team will get in touch with the best B.Tech college options.",
      fields: {
        studentName: {
          label: "Student Name (Full Name)",
          placeholder: "Enter student's full name",
          required: true,
        },
        parentPhone: {
          label: "Parent's Phone Number",
          placeholder: "Enter parent's phone number",
          required: true,
        },
        studentPhone: {
          label: "Student's Phone Number",
          placeholder: "Enter student's phone number",
          required: true,
        },
        preferredState: {
          label: "Preferred State for B.Tech",
          placeholder: "Select a state",
          options: [
            "Andhra Pradesh",
            "Telangana",
            "Karnataka",
            "Tamil Nadu",
            "Kerala",
            "Maharashtra",
            "Delhi NCR",
            "Other States",
          ],
          required: true,
        },
        budget: {
          label: "Your Budget (Annual Tuition Fee)",
          placeholder: "Select your budget range",
          options: [
            "Below ₹1.5 Lakhs / year",
            "₹1.5 Lakhs - ₹3 Lakhs / year",
            "₹3 Lakhs - ₹5 Lakhs / year",
            "Above ₹5 Lakhs / year",
          ],
          required: true,
        },
      },
      submitButton: "Get College Suggestions",
      privacyNotice: "Your information is safe and will only be used for college guidance.",
    },
  },

  // 07. Footer Section
  footer: {
    logo: "/assets/images/logo/ritam-logo.png",
    description: "Trusted guidance for B.Tech admissions across India.",
    contactInfo: {
      phone: "+91 98115 43210",
      email: "support@ritamconsultancy.com",
      location: "Hyderabad, India",
    },
    bottomLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Contact Us", href: "#enquiry-form-section" },
    ],
    copyright: "© 2026 Ritam Consultancy. All rights reserved.",
  },
};
