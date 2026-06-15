// Single source of truth for all site copy.
// Rewritten and expanded from the original Core Productions site, with the new
// video / storyboarding / editing services added. No team members listed.

export const site = {
  name: "Core Productions",
  tagline: "Built around your story.",
  // Contact details reconstructed from the existing site. Update the email
  // placeholder below with the real inbox before launch.
  contact: {
    email: "bernard@coreproductions.co.za",
    phoneOffice: "021 551 6690",
    phoneOfficeHref: "tel:+27215516690",
    phoneAfterHours: "083 737 5131",
    phoneAfterHoursHref: "tel:+27837375131",
    hours: "Mon–Fri · 08:00–17:00",
    location: "Cape Town, South Africa",
  },
  bbbee: "QSE B-BBEE Level 2 Contributor",
} as const;

export const heroWords = ["Audio Visual", "Lighting", "Sound", "Video"];

export const hero = {
  eyebrow: "Audio Visual · Lighting · Sound · Video",
  title: "We turn ideas into moments people remember.",
  body:
    "Core Productions is a South African production company built for brands that refuse to be forgettable. From a single keynote to a national roadshow — and now from first storyboard to final cut — we design the technical and creative backbone behind your most important moments.",
  ctaPrimary: "Start a project",
  ctaSecondary: "See what we do",
};

export const about = {
  eyebrow: "Who we are",
  title:
    "A leading-edge audio visual and production house for brands that play to win.",
  paragraphs: [
    "For years Core Productions has delivered bespoke, tailored solutions for corporate and blue-chip clients across every corner of live production — audio visual installations, professional sound systems, intelligent lighting, IT and set design.",
    "Our solution-based approach powers product launches, year-end functions, roadshows, live concerts and international congresses and conferences. We obsess over the details most people never notice, because that is exactly what separates a good event from an unforgettable one.",
    "Today we bring that same craft to the screen. Our video division captures, shapes and finishes the films your brand deserves — so the story doesn't end when the lights come up. One team, one standard, end to end.",
  ],
  stats: [
    { value: "Level 2", label: "QSE B-BBEE contributor" },
    { value: "Blue-chip", label: "Corporate clients trusted us" },
    { value: "End-to-end", label: "Concept to final delivery" },
    { value: "1 team", label: "Live & video under one roof" },
  ],
};

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  points: string[];
  tag: "Live Production" | "Video";
};

export const services: Service[] = [
  {
    id: "audio-visual",
    number: "01",
    title: "Audio Visual",
    tag: "Live Production",
    summary:
      "Complete AV design and installation that disappears into the experience — screens, projection, switching and stage technology engineered to perform flawlessly under pressure.",
    points: [
      "LED walls, projection & screen design",
      "Vision mixing, switching & playback",
      "Conference & congress AV systems",
      "Permanent & temporary installations",
    ],
  },
  {
    id: "lighting",
    number: "02",
    title: "Lighting",
    tag: "Live Production",
    summary:
      "Intelligent lighting design that sets the tone, directs the eye and turns a room into an atmosphere. From subtle corporate elegance to full concert spectacle.",
    points: [
      "Concept & lighting design",
      "Intelligent & moving-head rigs",
      "Stage, set & architectural lighting",
      "Programming & live operation",
    ],
  },
  {
    id: "sound",
    number: "03",
    title: "Sound",
    tag: "Live Production",
    summary:
      "Professional sound systems tuned for clarity in any space — so every word of the keynote and every beat of the show lands exactly as intended.",
    points: [
      "Line-array & distributed PA design",
      "Live mixing & system tuning",
      "Wireless mics & in-ear monitoring",
      "Conference & multi-language audio",
    ],
  },
  {
    id: "set-design",
    number: "04",
    title: "Set & Stage Design",
    tag: "Live Production",
    summary:
      "Bespoke staging, scenic and IT infrastructure that gives your event a signature look and the technical backbone to run without a hitch.",
    points: [
      "Custom stage & scenic builds",
      "Set design & branding integration",
      "Event IT & networking",
      "Roadshow & touring solutions",
    ],
  },
  {
    id: "videography",
    number: "05",
    title: "Videography",
    tag: "Video",
    summary:
      "Cinematic capture for live events, brands and people. Multi-camera coverage and crafted single-camera shoots that look as considered as they feel.",
    points: [
      "Multi-camera event coverage",
      "Brand, corporate & promotional shoots",
      "Interviews & testimonial filming",
      "Aerial / drone & live-stream capture",
    ],
  },
  {
    id: "video-production",
    number: "06",
    title: "Video Production",
    tag: "Video",
    summary:
      "Full-service production managed end to end. We handle the concept, crew, logistics and direction so you get a finished film, not a list of problems.",
    points: [
      "Creative concept & treatment",
      "Pre-production & scheduling",
      "Direction, crew & on-set management",
      "Brand films, commercials & event recaps",
    ],
  },
  {
    id: "storyboarding",
    number: "07",
    title: "Storyboarding",
    tag: "Video",
    summary:
      "Every great film is solved on paper first. We map the narrative, shots and pacing before a single camera rolls — so the vision is locked and the budget is respected.",
    points: [
      "Scripting & narrative structure",
      "Shot lists & visual storyboards",
      "Animatics & pre-visualisation",
      "Creative direction & moodboards",
    ],
  },
  {
    id: "editing",
    number: "08",
    title: "Editing & Post",
    tag: "Video",
    summary:
      "Where the story comes together. Editing, colour, sound and motion graphics finished to broadcast standard and delivered in every format you need.",
    points: [
      "Editing & story assembly",
      "Colour grading & sound mix",
      "Motion graphics & titles",
      "Multi-format & social delivery",
    ],
  },
];

export const process = {
  eyebrow: "How we work",
  title: "From a blank page to a finished moment.",
  body:
    "Whether it's a live event or a brand film, the path is the same: understand the story, plan it obsessively, execute it precisely, and finish it properly.",
  steps: [
    {
      number: "01",
      title: "Discover",
      body:
        "We start with your objective, your audience and your story — not a kit list. Everything that follows is built to serve that.",
    },
    {
      number: "02",
      title: "Design & Storyboard",
      body:
        "We plan the experience in detail: technical design for live, storyboards and treatments for video. You approve the vision before we build it.",
    },
    {
      number: "03",
      title: "Produce",
      body:
        "Our crew delivers on the day with the calm of people who have done it a thousand times. Live or on camera, the standard never drops.",
    },
    {
      number: "04",
      title: "Finish & Deliver",
      body:
        "We strike the show or cut the edit, then hand over polished, ready-to-use deliverables — and we're already thinking about the next one.",
    },
  ],
};

export const cta = {
  eyebrow: "Let's make something",
  title: "Got a moment worth getting right?",
  body:
    "Tell us what you're planning — a launch, a conference, a roadshow, a brand film, or all of the above. We'll bring the technical craft and the creative eye to match.",
  button: "Start a project",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
