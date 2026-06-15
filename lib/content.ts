export const site = {
  name: "Core Productions",
  tagline: "Two disciplines. One standard.",
  contact: {
    email: "bernard@coreproductions.co.za",
    phoneAfterHours: "083 737 5131",
    phoneAfterHoursHref: "tel:+27837375131",
    hours: "Mon–Fri · 08:00–17:00",
    coverage: "Operating nationwide across South Africa",
    coverageShort: "Nationwide, South Africa",
    offices: [
      {
        city: "Cape Town",
        phone: "021 551 6690",
        phoneHref: "tel:+27215516690",
      },
      {
        // Johannesburg number to be confirmed by the client.
        city: "Johannesburg",
        phone: "",
        phoneHref: "",
      },
    ],
  },
  bbbee: "QSE B-BBEE Level 2 Contributor",
} as const;

export const heroWords = [
  "Audio Visual",
  "Lighting",
  "Sound Engineering",
  "Set Design",
  "Videography",
  "Video Production",
  "Storyboarding",
  "Post-Production",
];

export const hero = {
  eyebrow: "Operating nationwide · South Africa",
  title: "South Africa's full-spectrum production partner.",
  subline: "Every cue, every cut. Delivered to the same standard.",
  body:
    "Core Productions designs and operates world-class live events, and produces brand and corporate films from concept to final delivery. Two disciplines. One team. One standard.",
  ctaPrimary: "Start a project",
  ctaSecondary: "Explore our services",
};

export const about = {
  eyebrow: "Who we are",
  title:
    "South Africa's full-spectrum production partner — live events and video, under one roof.",
  paragraphs: [
    "Core Productions was built on a simple conviction: that technical excellence and creative integrity should never be in tension. We deliver bespoke solutions for corporate and blue-chip clients across the full scope of live production — audio visual systems, professional sound, intelligent lighting, IT infrastructure and custom set design.",
    "Our portfolio spans AGMs for JSE-listed companies, investor days and roadshows for major financial services groups, product launches for multinational pharmaceutical brands and national conferences across every key industry sector. We are the crew that walks in calm when everyone else is under pressure — because we have solved the problem before.",
    "Our video division extends that same discipline to the screen. From the first storyboard to the final colour grade, we produce brand films, executive communications, investor-facing content, corporate video and event highlights to broadcast standard — so your story carries the same weight on screen as it did in the room.",
  ],
  credentials: [
    {
      label: "B-BBEE Status",
      value: "Level 2",
      sub: "QSE contributor",
    },
    {
      label: "Established",
      value: "2014",
      sub: "12 years in operation",
    },
    {
      label: "Capability",
      value: "Full-service",
      sub: "Live events & video film",
    },
    {
      label: "Coverage",
      value: "Nationwide",
      sub: "Cape Town & Johannesburg",
    },
  ],
};

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  points: string[];
};

export type ServiceCategory = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "live-events",
    index: "01",
    title: "Live Event Production",
    subtitle: "Conferences · Launches · Concerts · Roadshows",
    description:
      "End-to-end technical production for events that cannot afford to fail. We design, supply, install and operate every technical element — so your team can focus on the moment, not the machinery behind it.",
    services: [
      {
        id: "audio-visual",
        number: "01",
        title: "Audio Visual",
        summary:
          "Complete AV design and delivery that integrates seamlessly into the experience. Screens, projection, vision mixing and stage technology engineered to perform under pressure, on schedule and on brief.",
        points: [
          "LED walls, projection mapping & display design",
          "Vision mixing, video switching & content playback",
          "Conference, congress & AGM AV systems",
          "Temporary and permanent AV installations",
        ],
      },
      {
        id: "lighting",
        number: "02",
        title: "Lighting Design",
        summary:
          "Intelligent lighting that shapes atmosphere, directs attention and elevates every moment — from the opening address of a boardroom summit to the headline set of a live concert.",
        points: [
          "Full lighting concept and technical design",
          "Intelligent fixtures, moving heads & LED systems",
          "Stage, set and architectural lighting",
          "Show programming and live operation",
        ],
      },
      {
        id: "sound",
        number: "03",
        title: "Sound Engineering",
        summary:
          "Professional sound systems designed for clarity in any venue. Every word of the keynote and every note of the performance arrives exactly as intended — intelligible, balanced and powerful.",
        points: [
          "Line-array, point-source & distributed PA design",
          "Live mixing, system calibration & acoustic tuning",
          "Wireless microphone & in-ear monitor systems",
          "Multi-language conference audio and interpretation",
        ],
      },
      {
        id: "set-design",
        number: "04",
        title: "Set & Stage Design",
        summary:
          "Bespoke staging, scenic elements and event IT infrastructure that give your production a signature look and the structural confidence to execute without compromise.",
        points: [
          "Custom stage builds and scenic construction",
          "Set design and corporate branding integration",
          "Event IT, networking and data infrastructure",
          "Modular, touring and roadshow solutions",
        ],
      },
    ],
  },
  {
    id: "video-film",
    index: "02",
    title: "Video & Film Production",
    subtitle: "Brand Films · Corporate Video · Documentaries · Event Content",
    description:
      "Full-service video and film production managed from first concept to final delivery. We bring the creative direction, the crew, the technical rigour and the post-production discipline to produce content that represents your brand at its best.",
    services: [
      {
        id: "videography",
        number: "01",
        title: "Videography",
        summary:
          "Cinematic, purposeful camera work for live events, brands and people. Whether it is a single-camera interview or a multi-camera live event, every shot is composed with intent.",
        points: [
          "Multi-camera live event coverage and capture",
          "Brand, corporate and promotional shoots",
          "Executive interviews and testimonial filming",
          "Aerial and drone cinematography",
        ],
      },
      {
        id: "video-production",
        number: "02",
        title: "Video Production",
        summary:
          "Full-service production from brief to broadcast. We manage creative development, logistics, crew and direction so you receive a finished asset — not a project to manage.",
        points: [
          "Creative brief, concept development and treatment",
          "Pre-production planning and production scheduling",
          "Direction, crew management and on-set supervision",
          "Brand films, commercials, case studies and event recaps",
        ],
      },
      {
        id: "storyboarding",
        number: "03",
        title: "Storyboarding & Pre-Production",
        summary:
          "A production is only as good as its preparation. We resolve the narrative, the shot design and the pacing before a camera rolls — protecting your vision and your budget simultaneously.",
        points: [
          "Script development and narrative structure",
          "Shot lists, storyboards and scene breakdowns",
          "Animatics and visual pre-visualisation",
          "Creative direction, moodboards and style references",
        ],
      },
      {
        id: "editing",
        number: "04",
        title: "Editing & Post-Production",
        summary:
          "Where footage becomes a film. We assemble, grade, mix and finish to broadcast standard — then deliver in every format required, from cinema to social.",
        points: [
          "Offline and online editing and story assembly",
          "Professional colour grading and digital intermediate",
          "Sound design, dialogue editing and music mix",
          "Motion graphics, titles and animated elements",
        ],
      },
    ],
  },
];

export const process = {
  eyebrow: "How we work",
  title: "Rigorous process. Reliable results.",
  body:
    "Whether we are producing a flagship conference or a brand film, the approach is the same: define the objective clearly, plan every detail precisely, execute without shortcuts and deliver a finished product that needs no explanation.",
  steps: [
    {
      number: "01",
      title: "Brief & Discovery",
      body:
        "We start with your objective, your audience and your brand — not a specification sheet. Understanding the why behind a project is what allows us to make the right technical and creative decisions throughout.",
    },
    {
      number: "02",
      title: "Design & Pre-Production",
      body:
        "Every element is designed and approved before production begins. Technical drawings and AV schematics for live events; scripts, storyboards and shot lists for video. You sign off on the vision before we commit to it.",
    },
    {
      number: "03",
      title: "Production & Execution",
      body:
        "Our crew is on site and on time. Live or on camera, we operate with the composure and precision of a team that has delivered under pressure many times before. No surprises. No shortcuts.",
    },
    {
      number: "04",
      title: "Delivery & Handover",
      body:
        "We close out the production properly — strike, archive and hand over every deliverable in the agreed format. Your finished event or film is ready to use, and we are ready to debrief and plan the next one.",
    },
  ],
};

export const cta = {
  eyebrow: "Work with us",
  title: "Tell us what you need to produce.",
  body:
    "Whether you are planning a national conference, a product launch, a brand film or an ongoing video content programme — contact us and we will respond with a clear proposal and a realistic timeline.",
  button: "Send an enquiry",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const clients = {
  label: "Selected clients",
  names: [
    "Momentum",
    "PSG",
    "Standard Bank",
    "Novo Nordisk",
    "Pharma Dynamics",
  ],
};

export const stats = [
  { value: "2014", label: "Founded", sub: "12 years in operation" },
  { value: "500+", label: "Live events", sub: "Nationally produced" },
  { value: "200+", label: "Video productions", sub: "Brand to broadcast" },
  { value: "80+", label: "Clients served", sub: "Active relationships" },
];

export const midCTA = {
  eyebrow: "Proven at scale",
  title: "The production partner that enterprise trusts.",
  body: "From the AGM of a JSE-listed company to the product launch of a global pharmaceutical brand — we bring the same rigour, the same crew and the same standard to every production.",
  ctaPrimary: "Start a project",
  ctaAlt: "021 551 6690",
  ctaAltHref: "tel:+27215516690",
};

export const faq = {
  eyebrow: "Common questions",
  title: "What you need to know.",
  items: [
    {
      q: "What is the typical budget for a live event production?",
      a: "Live event budgets vary with scale, venue and technical complexity. A mid-size corporate conference typically starts from R150 000 for full AV, sound and lighting. Large-scale congresses, AGMs and product launches are scoped individually. We provide itemised proposals at no charge — contact us with your brief and we respond with a realistic budget range within 48 hours.",
    },
    {
      q: "How far in advance should we book?",
      a: "For large-scale events — multi-day congresses, AGMs, roadshows with complex AV — we recommend 8 to 12 weeks lead time. This allows for venue surveys, technical design, custom fabrication and crew scheduling. Smaller corporate events can often be accommodated in 3 to 4 weeks. Video productions typically require 4 to 6 weeks from brief to first shoot day. Contact us early — a provisional hold costs nothing.",
    },
    {
      q: "Do you operate outside Cape Town and Johannesburg?",
      a: "Yes. Core Productions operates nationwide across South Africa. We have produced events in Durban, Sun City, Stellenbosch, George, East London and Port Elizabeth, as well as at international venues. Our full crew and equipment travel with every production — you are not billed for sub-standard local alternatives wherever the event is held.",
    },
    {
      q: "Can you handle both the live event and the video production for the same project?",
      a: "This is one of our core capabilities. Because both disciplines sit inside one team, your event capture, highlights reel and executive messaging can be planned and delivered as a single integrated brief — no agency hand-offs, no version control issues, no inconsistency in brand execution. We recommend briefing both requirements together for the best and most cost-effective outcome.",
    },
    {
      q: "What types of events do you specialise in?",
      a: "Our portfolio includes national corporate conferences, AGMs, investor days and roadshows, pharmaceutical congresses, product launches, awards ceremonies and live concerts. We have produced for JSE-listed companies, major financial services groups and multinational pharmaceutical brands. Every production is treated as if it cannot fail — because for our clients, it cannot.",
    },
    {
      q: "What does a video production quote include?",
      a: "A full production quote covers pre-production (scripting, storyboarding, location scouting, scheduling), production (crew, equipment, direction, on-set management) and post-production (editing, colour grading, sound mix, motion graphics and delivery in all required formats). We quote end-to-end — there are no surprises mid-production.",
    },
  ],
};
