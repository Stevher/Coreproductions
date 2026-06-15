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
  "Videography",
  "Video Production",
  "Storyboarding",
  "Post-Production",
];

export const hero = {
  eyebrow: "Operating nationwide · South Africa",
  title: "South Africa's full-spectrum production partner.",
  subline: "Every cue, every cut. Delivered to the same standard.",
  body: "Core Productions designs and operates world-class live events, and produces brand and corporate films from concept to final delivery. Two disciplines. One team. One standard.",
  ctaPrimary: "Start a project",
  ctaSecondary: "Explore our services",
};

export const about = {
  eyebrow: "Who we are",
  title: "South Africa's full-spectrum production partner — live events and video, under one roof.",
  paragraphs: [
    "Core Productions was built on a single conviction: that a production company should be the last thing a client worries about. We take full technical and operational responsibility for every production we run — audio visual, sound, lighting, set design, compliance documentation, crew management and logistics — so your team can focus on the event, not the machinery behind it.",
    "Our portfolio spans AGMs for JSE-listed companies, investor days and roadshows for major financial services groups, product launches for multinational pharmaceutical brands and national conferences across every key industry sector. We are the crew that walks in calm when everyone else is under pressure — because we have solved the problem before.",
    "Our video division extends the same discipline to the screen. From the first storyboard to the final colour grade, we produce executive communications, investor-facing content, brand films and corporate video to broadcast standard. One briefing covers both the event and the content — no agency hand-off, no gap in the production chain.",
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
          "Intelligent lighting that shapes atmosphere, directs attention and elevates every moment — from the opening address of a boardroom summit to the headline set of a live concert.",
        points: [
          "Full lighting concept and technical design",
          "Intelligent fixtures, moving heads & LED systems",
          "Stage, set and architectural lighting",
          "GrandMA / MA2 show programming and live operation",
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
          "Bespoke staging and scenic elements that give your production a signature look and the structural confidence to execute without compromise — from boardroom launches to concert-scale builds.",
        points: [
          "Custom stage builds, scenic construction & branding integration",
          "Rigging and structural engineering compliance",
          "Event IT, networking and data infrastructure",
          "Modular, touring and roadshow solutions",
        ],
      },
      {
        id: "simultaneous-interpretation",
        number: "05",
        title: "Simultaneous Interpretation",
        summary:
          "Multi-language interpretation systems for international congresses, pharmaceutical events and multinational gatherings. Delegates receive broadcast-quality audio in their preferred language without any disruption to proceedings.",
        points: [
          "ISO-compliant interpreter booths and equipment",
          "Multi-channel headset receiver systems",
          "Integration with conference PA and delegate microphone systems",
          "Available for 2 to 30+ simultaneous language channels",
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
    id: "video-film",
    index: "02",
    title: "Video & Film Production",
    subtitle: "Brand Films · Corporate Video · Executive Content · Event Capture",
    description:
      "Full-service video and film production from first concept to final delivery. We bring the creative direction, the crew, the technical rigour and the post-production discipline to produce content that represents your brand at its best — and holds up on any screen.",
    services: [
      {
        id: "videography",
        number: "01",
        title: "Videography",
        summary:
          "Cinematic, purposeful camera work for live events, brands and people. Whether it is a single-camera executive interview or a twelve-camera live event, every shot is composed with intent.",
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
          "Where footage becomes a film. We assemble, grade, mix and finish to broadcast standard — then deliver in every format required, from boardroom to social.",
        points: [
          "Offline and online editing and story assembly",
          "Professional colour grading and digital intermediate",
          "Sound design, dialogue editing and music mix",
          "Motion graphics, titles and animated elements",
        ],
      },
      {
        id: "executive-content",
        number: "05",
        title: "Executive & Corporate Content",
        summary:
          "Authoritative video for investor communications, CEO messaging and regulatory documentation. Produced to broadcast standard and delivered in formats suitable for board use, annual reports and external stakeholder channels.",
        points: [
          "CEO, CFO and executive interview production",
          "Investor day and AGM highlight content",
          "Annual report video and digital investor packs",
          "Compliance-ready video documentation and archive",
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
      body: "Written risk assessments, method statements and site-specific safety plans for every production, compliant with the Occupational Health and Safety Act 85 of 1993 and the Entertainment and Diving Regulations published thereunder.",
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
  body: "Whether we are producing a flagship conference or a brand film, the approach is the same: define the objective clearly, plan every detail precisely, execute without shortcuts and deliver a finished product that needs no explanation.",
  steps: [
    {
      number: "01",
      title: "Brief & Discovery",
      body: "We start with your objective, your audience and your brand — not a specification sheet. Understanding the why behind a project is what allows us to make the right technical and creative decisions throughout.",
    },
    {
      number: "02",
      title: "Design & Pre-Production",
      body: "Every element is designed and approved before production begins. Technical drawings, AV schematics and compliance plans for live events; scripts, storyboards and shot lists for video. You sign off on the vision before we commit to it.",
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
  body: "Whether you are planning a national conference, a product launch, a brand film or an ongoing video content programme — contact us and we will respond with a clear proposal and a realistic timeline.",
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
      q: "Are you OHS compliant and do you carry public liability insurance?",
      a: "Yes. OHS Act 85 of 1993 compliance is built into every production we run. We provide written risk assessments, method statements and site-specific safety plans as standard. All rigging operations are signed off by qualified riggers with the relevant load calculations. Electrical installations carry a Certificate of Compliance. Public liability insurance certificates are available on request and provided automatically to venue operators and principal contractors.",
    },
    {
      q: "How far in advance should we book?",
      a: "For large-scale events — multi-day congresses, AGMs, roadshows with complex AV — we recommend 8 to 12 weeks lead time. This allows for venue surveys, technical design, compliance planning, custom fabrication and crew scheduling. Smaller corporate events can often be accommodated in 3 to 4 weeks. Contact us early — a provisional hold costs nothing.",
    },
    {
      q: "Do you operate outside Cape Town and Johannesburg?",
      a: "Yes. Core Productions operates nationwide across South Africa from offices and warehouses in Cape Town and Johannesburg. We have produced events in Durban, Sun City, Stellenbosch, George, East London and Port Elizabeth, as well as at international venues. Our full crew and equipment travel with every production — you are not billed for sub-standard local alternatives.",
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
