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
        type: "Office & Warehouse",
      },
      {
        city: "Johannesburg",
        phone: "",
        phoneHref: "",
        type: "Warehouse facility",
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
  "Video Production",
  "Animation",
  "Scene Design",
  "Content Creation",
];

export const hero = {
  eyebrow: "Operating nationwide · South Africa",
  title: "South Africa's full-spectrum production partner.",
  subline: "Every cue, every cut. Delivered to the same standard.",
  body: "Core Productions designs and operates world-class live events, and creates everything from brand films and animation to scene design and digital content. Two disciplines. One team. One standard.",
  ctaPrimary: "Start a project",
  ctaSecondary: "Explore our services",
};

export const about = {
  eyebrow: "Who we are",
  title: "Live events and content — under one roof.",
  paragraphs: [
    "Core Productions was built on a single conviction: that a production company should be the last thing a client worries about. We take full technical and operational responsibility for every production we run — audio visual, sound, lighting, set design, compliance documentation, crew management and logistics — so your team can focus on the event, not the machinery behind it.",
    "Our work spans annual general meetings, investor days and roadshows, industry congresses, product launches and national conferences across every key sector. We are the crew that walks in calm when everyone else is under pressure — because we have solved the problem before.",
    "Our content studio extends the same discipline to every screen. From the first storyboard to the final grade, we produce video, animation, scene design and the digital content that carries a brand between its big moments — all to broadcast standard. One briefing covers both the event and the content it generates: no agency hand-off, no gap in the production chain.",
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
      sub: "Live events & content",
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
    subtitle: "Conferences · AGMs · Congresses · Launches · Concerts · Roadshows",
    description:
      "End-to-end technical production for events that cannot afford to fail. We design, supply, install, operate and close out every technical element — covering AV, audio, lighting, staging, compliance and specialist systems under a single brief.",
    services: [
      {
        id: "audio-visual",
        number: "01",
        title: "Audio Visual",
        summary:
          "Complete AV design and delivery engineered to perform under pressure. Screens, projection, LED walls, vision mixing and stage technology — integrated into the experience from the first survey to the final frame.",
        points: [
          "LED walls, projection mapping & display design",
          "Vision mixing, video switching & content playback",
          "Conference, congress & AGM AV systems",
          "Confidence monitors, stage feeds & IMAG screens",
        ],
      },
      {
        id: "lighting",
        number: "02",
        title: "Lighting Design",
        summary:
          "Intelligent lighting that shapes atmosphere, directs attention and elevates every moment.",
        points: [
          "Full lighting concept and technical design",
          "Intelligent fixtures, moving heads & LED systems",
          "Stage, set and architectural lighting",
          "grandMA3 show programming and live operation",
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
          "Live FOH mixing, system calibration & acoustic tuning",
          "Wireless microphone & in-ear monitor systems",
          "RF coordination for complex multi-channel environments",
        ],
      },
      {
        id: "set-design",
        number: "04",
        title: "Set & Stage Design",
        summary:
          "Bespoke staging and scenic elements that give your production a signature look and the structural confidence to execute without compromise.",
        points: [
          "Custom stage builds, scenic construction & branding integration",
          "Rigging and structural engineering compliance",
          "Event IT, networking and data infrastructure",
          "Modular, touring and roadshow solutions",
        ],
      },
      {
        id: "production-management",
        number: "05",
        title: "Production Management",
        summary:
          "The discipline behind a flawless show. We plan the technical schedule, run the production office and call the show live — so every department hits its mark and your event runs exactly to time.",
        points: [
          "Technical production scheduling and run sheets",
          "Show calling and live show control",
          "Crew, supplier and venue coordination",
          "On-site technical direction and floor management",
        ],
      },
      {
        id: "broadcast-imag",
        number: "06",
        title: "Live Broadcast & IMAG",
        summary:
          "Real-time image magnification and hybrid event broadcast so every delegate sees exactly what they need to see — and your event reaches audiences beyond the venue, live or on demand.",
        points: [
          "Multi-camera IMAG production and live direction",
          "ISO recording, board recording and archive masters",
          "Hybrid and fully virtual event broadcast infrastructure",
          "Live streaming and enterprise CDN delivery",
        ],
      },
    ],
  },
  {
    id: "content-creation",
    index: "02",
    title: "Content Creation",
    subtitle: "Video · Animation · Scene Design · Brand Content",
    description:
      "A full creative studio under one roof. From video production and animation to scene design and the content systems that carry your brand across every channel — we develop, produce and finish content from first concept to final delivery.",
    services: [
      {
        id: "video-production",
        number: "01",
        title: "Video Production",
        summary:
          "Full-service video and film from brief to broadcast. We manage creative development, crew, direction and on-set logistics so you receive a finished asset — not a project to manage.",
        points: [
          "Brand films, commercials, case studies and event recaps",
          "Multi-camera live event coverage and capture",
          "Executive interviews and testimonial filming",
          "Aerial and drone cinematography",
        ],
      },
      {
        id: "animation",
        number: "02",
        title: "Animation & Motion Graphics",
        summary:
          "Where a camera can't go, animation can. We design 2D and 3D animation, motion graphics and explainer content that turns complex ideas — products, data, processes — into clear, branded visual stories.",
        points: [
          "2D and 3D animation and explainer content",
          "Motion graphics, titles and lower-thirds",
          "Data visualisation and process animation",
          "Animated logos, idents and brand elements",
        ],
      },
      {
        id: "scene-design",
        number: "03",
        title: "Scene Design",
        summary:
          "The world your content lives in. We design and build physical and virtual scenes, sets and environments — from studio backdrops and product staging to LED-volume and green-screen virtual production.",
        points: [
          "Studio set and backdrop design and build",
          "Virtual production and LED-volume environments",
          "Green-screen and compositing environments",
          "Product staging and scene styling",
        ],
      },
      {
        id: "content-design",
        number: "04",
        title: "Content Design & Creation",
        summary:
          "The content that keeps your brand present between the big moments. We design and produce social, digital and campaign content as a consistent system — built to scale across every platform.",
        points: [
          "Social, digital and campaign content systems",
          "Graphic design, key visuals and brand templates",
          "Executive, investor and corporate communications",
          "Photography, stills and digital asset libraries",
        ],
      },
      {
        id: "storyboarding",
        number: "05",
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
        number: "06",
        title: "Editing & Post-Production",
        summary:
          "Where footage becomes finished content. We assemble, grade, mix and finish to broadcast standard — then deliver in every format required, from boardroom to social.",
        points: [
          "Offline and online editing and story assembly",
          "Professional colour grading and digital intermediate",
          "Sound design, dialogue editing and music mix",
          "Multi-format delivery from cinema to social",
        ],
      },
    ],
  },
];

export const assurance = {
  eyebrow: "Technical standards",
  title: "Every production, fully covered.",
  body: "When you engage Core Productions, compliance is already built in. Every production carries the certifications, risk documentation and insurance that enterprise organisations require — not as extras, but as our baseline standard of operation.",
  items: [
    {
      title: "OHS Act Compliance",
      body: "Written risk assessments, method statements and site-specific safety plans for every production, compliant with the Occupational Health and Safety Act 85 of 1993 and SANS 10366, the South African National Standard for health and safety at events.",
    },
    {
      title: "Structural & Rigging Certification",
      body: "All rigging operations are designed and signed off by qualified riggers with load calculation documentation. No chain motor is lifted without the relevant engineering approval and paperwork in place.",
    },
    {
      title: "Power & Electrical",
      body: "Temporary electrical installations are designed and certified by registered electrical contractors. Generator provision, power distribution and PDU design are produced to Certificate of Compliance standard under the Electrical Installation Regulations.",
    },
    {
      title: "Fire Safety Coordination",
      body: "Fire safety requirements are incorporated from the first site survey. We coordinate with venue fire marshals, manage pyrotechnic licensing where applicable and provide the required compliance documentation to venue operators.",
    },
    {
      title: "Public Liability Insurance",
      body: "Full public liability coverage is maintained on every production. Certificates of insurance are provided on request and supplied as standard to venue operators and principal contractors.",
    },
    {
      title: "Professional Crew Standards",
      body: "Our technical crew hold the qualifications their roles require — certified riggers, licensed electricians, qualified sound engineers, experienced LX programmers and accredited camera operators throughout.",
    },
  ],
};

export const process = {
  eyebrow: "How we work",
  title: "Rigorous process. Reliable results.",
  body: "Whether we are producing a flagship conference or a content campaign, the approach is the same: define the objective clearly, plan every detail precisely, execute without shortcuts and deliver a finished product that needs no explanation.",
  steps: [
    {
      number: "01",
      title: "Brief & Discovery",
      body: "We start with your objective, your audience and your brand — not a specification sheet. Understanding the why behind a project is what allows us to make the right technical and creative decisions throughout.",
    },
    {
      number: "02",
      title: "Design & Pre-Production",
      body: "Every element is designed and approved before production begins. Technical drawings, AV schematics and compliance plans for live events; scripts, storyboards and design frames for content. You sign off on the vision before we commit to it.",
    },
    {
      number: "03",
      title: "Production & Execution",
      body: "Our crew is on site and on time. Live or on camera, we operate with the composure and precision of a team that has delivered under pressure many times before. No surprises. No shortcuts.",
    },
    {
      number: "04",
      title: "Delivery & Handover",
      body: "We close out the production properly — strike, archive and hand over every deliverable in the agreed format. Your finished event or film is ready to use, and we are ready to debrief and plan the next one.",
    },
  ],
};

export const cta = {
  eyebrow: "Work with us",
  title: "Tell us what you need to produce.",
  body: "Whether you are planning a national conference, a product launch, a brand film or an ongoing content programme — contact us and we will respond with a clear proposal and a realistic timeline.",
  button: "Send an enquiry",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "2014", label: "Founded", sub: "Over a decade in operation" },
  { value: "3000+", label: "Live events", sub: "Nationally produced" },
  { value: "200+", label: "Content productions", sub: "Brand to broadcast" },
  { value: "9", label: "Provinces", sub: "Full national coverage" },
];

export const midCTA = {
  eyebrow: "Why Core Productions",
  title: "The production partner that enterprise trusts.",
  body: "Corporate conferences, AGMs, congresses, product launches and the content that surrounds them — we bring the same rigour, the same crew and the same standard to every production, at every scale.",
  ctaPrimary: "Start a project",
  ctaAlt: "021 551 6690",
  ctaAltHref: "tel:+27215516690",
};

export const faq = {
  eyebrow: "Common questions",
  title: "What you need to know.",
  items: [
    {
      q: "How is a live event production budgeted?",
      a: "Every production is scoped individually — budget depends entirely on the venue, scale, technical complexity and the specialist systems required. We provide detailed, itemised proposals at no charge. Send us your brief and we will respond with a clear, realistic cost breakdown so there are no surprises.",
    },
    {
      q: "Are you OHS compliant and do you carry public liability insurance?",
      a: "Yes. OHS Act 85 of 1993 compliance is built into every production we run. We provide written risk assessments, method statements and site-specific safety plans as standard. All rigging operations are signed off by qualified riggers with the relevant load calculations. Electrical installations carry a Certificate of Compliance. Public liability insurance certificates are available on request and provided automatically to venue operators and principal contractors.",
    },
    {
      q: "How far in advance should we book?",
      a: "Lead time depends on the scale and complexity of your production. Large multi-day congresses, AGMs and roadshows with complex technical requirements benefit from the most runway — it allows for venue surveys, technical design, compliance planning and custom fabrication. Smaller events can be turned around far more quickly. Contact us early and we will tell you exactly what your project needs — a provisional hold costs nothing.",
    },
    {
      q: "Do you operate outside Cape Town and Johannesburg?",
      a: "Yes. Core Productions operates nationwide across South Africa from an office and warehouse in Cape Town and a warehouse in Johannesburg. We produce events in every province, as well as at international venues. Our full crew and equipment travel with every production — you are not billed for sub-standard local alternatives.",
    },
    {
      q: "Can you handle both the live event and the content for the same project?",
      a: "This is one of our core capabilities. Because both disciplines sit inside one team, your event capture, highlights, animation and executive messaging can be planned and delivered as a single integrated brief — no agency hand-offs, no version-control issues, no inconsistency in brand execution. We recommend briefing both requirements together for the best and most cost-effective outcome.",
    },
    {
      q: "What types of events do you specialise in?",
      a: "Our work spans national corporate conferences, AGMs, investor days and roadshows, industry congresses, product launches, awards ceremonies and live concerts. Whatever the format, every production is treated as if it cannot fail — because for our clients, it cannot.",
    },
    {
      q: "What does a content production quote include?",
      a: "A full content quote covers pre-production (concept, scripting, storyboarding, scene design, scheduling), production (crew, equipment, direction, animation and on-set management) and post-production (editing, colour grading, sound mix, motion graphics and delivery in every required format). We quote end-to-end — there are no surprises mid-production.",
    },
  ],
};
