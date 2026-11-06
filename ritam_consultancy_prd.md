# Ritam Consultancy --- Website PRD

## 1. Project Overview

Build a clean, modern, responsive website for **Ritam Consultancy**,
following the approved Figma designs.

The website must provide a consistent experience across desktop, tablet,
and mobile devices, with mobile usability as the highest design
priority.

## 2. Brand Guidelines

-   **Primary colour:** `#044439`
-   **Accent colour:** `#F96815`
-   **Font family:** Plus Jakarta Sans
-   Follow the approved Ritam Consultancy logo and visual identity.
-   Use consistent typography, spacing, padding, margins, borders, and
    corner radii throughout the website.
-   Keep the interface clean, professional, minimal, and easy to
    understand.

## 3. Responsive Design

-   Design mobile-first, then adapt for tablet and desktop.
-   Ensure every page and section works correctly at common screen
    sizes.
-   Prevent overlapping text, images, cards, navigation, buttons, and
    form fields.
-   Avoid unwanted horizontal scrolling.
-   Use responsive layouts, flexible widths, and appropriate spacing at
    every breakpoint.
-   Make all buttons, links, inputs, and navigation controls comfortable
    to use on touchscreens.
-   Check portrait and landscape layouts where relevant.

## 4. UI Implementation

-   Match the supplied Figma designs as closely as possible.
-   Maintain consistent alignment, spacing, padding, margins, and
    component sizing.
-   Reuse common components and styles to keep the interface consistent.
-   Do not add unnecessary content or visual elements that are not
    present in the approved designs.
-   Ensure text remains readable and layouts remain uncluttered on
    smaller screens.

## 5. Navigation and Page Behaviour

-   Every visible navigation item, button, and link must perform its
    intended action.
-   Do not leave placeholder or non-functional buttons.
-   When navigation opens a new page or route, the new page must start
    at the top.
-   Preserve normal browser back and forward behaviour.
-   Use in-page scrolling only for links that intentionally target a
    section on the same page.

## 6. Animations and Interactions

-   Use subtle, smooth, and professional animations.
-   Include restrained hover and focus effects for interactive elements.
-   Add clean scroll-triggered reveal animations where appropriate.
-   Keep transitions quick and unobtrusive.
-   Avoid excessive motion, distracting effects, or animations that
    reduce usability.
-   Respect the user's reduced-motion accessibility preference.

## 7. Enquiry Form

-   The website must have **one enquiry form only**.
-   Keep the form consistent with the approved Figma design.
-   Ensure the form is fully responsive and easy to complete on mobile.
-   Include appropriate field validation and clear error messages.
-   Show a clear loading state while submitting.
-   Show a success message only after the submission is confirmed.
-   Show a helpful error message if submission fails.
-   Prevent accidental duplicate submissions.

## 8. Spreadsheet Integration

-   Form submissions must be connected to a spreadsheet that will be
    provided later.
-   Keep the spreadsheet integration configurable so the supplied
    spreadsheet can be connected without redesigning the form.
-   Submit the form data securely and map each form field to the correct
    spreadsheet column.
-   Handle submission failures gracefully and do not show a success
    state unless the spreadsheet confirms that the data was received.
-   Do not use a public spreadsheet write key or expose private
    credentials in frontend code.
-   Complete the integration after the spreadsheet and required access
    details are supplied.

## 9. Quality Assurance

Before release, test:

-   All pages and sections on mobile, tablet, and desktop.
-   Navigation and route changes, including scroll-to-top behaviour.
-   All buttons, links, and interactive elements.
-   Hover, focus, and scroll animations.
-   Form validation and successful submission.
-   Spreadsheet data mapping and submission failure handling.
-   Layout spacing, readability, and alignment.
-   Accessibility basics, including keyboard navigation and visible
    focus states.
-   Performance and loading behaviour on mobile networks.

## 10. Completion Criteria

The website is ready when it:

-   Uses `#044439`, `#F96815`, and Plus Jakarta Sans consistently.
-   Matches the approved Figma designs.
-   Is responsive and polished on mobile, tablet, and desktop.
-   Has no overlapping elements or unintended horizontal scrolling.
-   Has working navigation, links, and buttons.
-   Opens new pages at the top.
-   Uses subtle, clean hover and scroll animations.
-   Contains only one working enquiry form.
-   Is ready to connect to the spreadsheet once it is provided.
