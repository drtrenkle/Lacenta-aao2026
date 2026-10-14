/* =====================================================================
   LACENTA conference landing page — EDIT THIS FILE to update content.
   - links: add a full URL (https://...) and the button turns on.
   - showFlags: true = preview mode (amber "Add link" / "Verify" chips and a
     review panel). Set to false before publishing.
   - Leave a value as "" to keep it as a placeholder.
   ===================================================================== */
window.SITE_CONFIG = {
  showFlags: false,          // false = clean view (no amber chips). true = review mode.
  keepEmptyButtons: true,    // DRAFT: keep buttons visible even if their link isn't set yet. Set to false when publishing live.

  links: {
    investorForm:     "https://forms.gle/h3mAjvk526f5Ueik9",  // PLACEHOLDER: Google Form / Typeform for investors & strategic partners
    practiceForm:     "https://forms.gle/2TkFJ7acPE3rpArb8",  // PLACEHOLDER: Google Form / Typeform for practice owners
    careers:          "https://www.laent.com/about/our-practice/careers/",  // PLACEHOLDER: existing recruitment / careers page
    clashmoreWebsite: "https://www.clashmore.vc/",
    investorOverview: ""   // OPTIONAL: investor overview PDF/page (flyer promises "our investor overview")
  },

  contact: {
    name:  "Dr. Geoffrey Trenkle, DO",
    title: "Founder & CEO",
    phone: "",             // PLACEHOLDER: Geoff's preferred contact number
    email: ""              // PLACEHOLDER: Geoff's preferred contact email
  },

  clashmore: {
    name: "Clashmore",
    description: "Clashmore is our venture capital partner.",
    contactName: "",       // PLACEHOLDER
    contactEmail: "",      // PLACEHOLDER
    contactPhone: ""       // PLACEHOLDER
  },

  conference: {
    name:  "AAO-HNSF 2026",
    booth: "#1815",
    venue: "Los Angeles Convention Center",
    dates: "",             // PLACEHOLDER: conference dates (not in flyers or transcript)
    website: "www.socalent.com"
  },

  // Confirmed by Geoff: 20+ locations, 150,000+ patient visits, 12+ years.
  stats: {
    locations: "20+",
    providers: "50+",
    payerContracts: "145+",
    patientVisits: "150,000+",
    yearsInPractice: "12+"
  },

  // Items to confirm before publishing. Shown as amber chips + in the review panel. Delete a line once confirmed.
  flags: {
    capitalBacked:  "Flyer wording kept. Geoff asked for \"currently/already institutionally or financially backed\" plus a short description of the best practices in place (financial books, etc.).",
    msoOperator:    "\"Proven MSO Operator\" — confirm Geoff is comfortable with this claim for investors.",
    investorOverview:"Flyer promises an \"investor overview\". Is there a PDF/page to link?",
    conferenceDates:"Conference dates are not in the flyers or transcript.",
    boothVenue:     "Booth #1815 and venue come from the flyers only (not mentioned in the meeting). Confirm."
  }
};
