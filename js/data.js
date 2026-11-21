/*
  ALL CONTENT LIVES HERE.
  Edit this file to change text, add projects, or add links. No HTML changes needed.

  Project fields:
    title, type ("Dashboard" | "Web System" | "Data Analysis"), summary, role, org, period
    tools   : ["Tableau", ...]
    cover   : image shown on the card
    links   : [{ label: "Open dashboard", url: "https://..." }]
    sections: [{ h: "Heading", p: ["paragraph"], list: ["bullet"], items: [{ t: "Title", d: "Description" }] }]
    gallery : [{ src: "assets/img/xxx.webp", caption: "..." }]
*/

window.SITE = {
  name: "Chelee",
  fullName: "Novita Chelsea Lodar",

  links: {
    resume: "resume.html",
    resumePdf: "assets/Chelee_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/novitachelsea",
    github: "https://github.com/chelseawzz",
    instagram: "https://www.instagram.com/_chelseazz",
    email: "chelsealodar11@gmail.com",
    // Canva design with all infographics. Sharing must be set to "Anyone with the link can view".
    canva: "https://www.canva.com/design/DAG7FaNw3yY/3uxODs2YcjQJPj2lSIWjDg/view"
  },

  skills: [
    { group: "Programming and data", items: ["Python (Pandas, Scikit-learn)", "SQL", "Data cleaning", "Exploratory data analysis", "Machine learning", "Time series forecasting"] },
    { group: "Data visualization", items: ["Tableau", "Power BI", "Looker Studio", "Plotly Dash"] },
    { group: "Web and database", items: ["React", "PHP", "Database management", "Microsoft Office"] },
    { group: "Soft skills", items: ["Public speaking (MC for 10+ events)", "Communication", "Teamwork", "Leadership", "Project coordination", "Critical thinking", "Problem solving", "Time management"] }
  ],

  /* Content of the CV. The resume page and the Experience section are generated from this. */
  cv: {
    headline: "Data Science Undergraduate",
    summary: "Data Science undergraduate at Telkom University Surabaya with a GPA of 3.86/4.00 and hands-on experience in data analysis, data visualization, and digitalization initiatives. Experienced in data processing, validation, and visualization through internship programs at PT ASABRI (Persero) and the Department of Marine and Fisheries of East Java Province. Skilled in using Python, SQL, Tableau, Power BI, and Looker Studio to transform data into meaningful insights and support data-driven decision-making. Also experienced in web development, database integration, and developing interactive data visualization projects.",
    education: {
      school: "Telkom University Surabaya",
      period: "2023 - Present",
      degree: "Bachelor of Data Science",
      gpa: "3.86/4.00",
      coursework: "Algorithms and Programming, Object-Oriented Programming, Database Systems, Data Analysis, Data Visualization, Machine Learning, and Web Development."
    },
    work: [
      {
        title: "Data & Digitalization Intern",
        org: "PT Asabri (Persero) Malang",
        date: "August - Present",
        bullets: [
          "Performed data validation, processing, and quality assurance to maintain data accuracy and consistency.",
          "Conducted data analysis and visualization to support operational reporting and decision-making.",
          "Developed an internal web-based application for generating administrative documents, including billing letters, SPPL collection letters (SKR Bahl and SK WAP).",
          "Contributed to backend and frontend development, including application architecture and database integration.",
          "Supported digital transformation initiatives through internal system development and process improvement.",
          "Managed digital data and documentation using internal information systems."
        ]
      },
      {
        title: "Data Analyst & Web Development Intern",
        org: "DKP Jawa Timur (Dinas Kelautan dan Perikanan Provinsi Jawa Timur)",
        date: "January - February 2026",
        bullets: [
          "Contributed to the development of the \"Samudera\" data portal using React and PHP by developing interactive menus for exploring marine and fisheries commodity data across East Java.",
          "Built interactive line and bar charts to visualize annual production volume and sales value trends across commodities and regions, supported by year-over-year performance summaries."
        ],
        project: "marine-fisheries-system"
      }
    ],
    org: [
      {
        title: "Statistics Agent",
        org: "Statistics Center (BPS x Telkom University Surabaya)",
        date: "November 2025 - October 2026",
        bullets: [
          "Researched and analyzed official statistical data from Statistics Indonesia (BPS) to develop informative and data-driven content.",
          "Created 30+ statistical infographics for publication on Statistics Corner's social media platforms.",
          "Transformed statistical findings into accessible visual content to improve public understanding of official statistics."
        ]
      },
      {
        title: "Staff of Student Welfare Advocacy Ministry",
        org: "Student Executive Board",
        date: "March - December 2025",
        bullets: [
          "Served as Secretary of the Student Welfare Advocacy Ministry, managing meeting documentation, correspondence, and administrative records.",
          "Led the organizing committee of a scholarship webinar attended by 100+ participants, introducing scholarship opportunities from Bank Indonesia, Yayasan Khouw Kalbe, and Beasiswa Daerah untuk Negeri.",
          "Coordinated event preparation and execution to support the successful delivery of the webinar."
        ],
        photos: [{ src: "assets/img/o-scholarship.webp", caption: "Scholarship webinar organizing committee" }]
      },
      {
        title: "Treasurer",
        org: "Student General Election Committee",
        date: "August - December 2024",
        bullets: [
          "Planned and managed the budget for all student election activities, including operational costs, logistics, and other event requirements.",
          "Prepared financial reports after the implementation of the student election, including documentation of income and expenditures."
        ]
      },
      {
        title: "Administrative Assistant",
        org: "Community Service Program",
        date: "April - August 2024",
        bullets: [
          "Managed administrative tasks and coordinated community service activities in Sempuh District, Banyuwangi Regency.",
          "Developed and maintained documentation related to community service programs and activities.",
          "Assisted in preparing publications and documenting community service activities."
        ]
      }
    ],
    projects: [
      {
        title: "Data Visualization Project for High School Students",
        date: "June - July 2025",
        bullets: [
          "Developed interactive learning modules on Data Preparation and Data Visualization for high school students.",
          "Used Google Sheets for data cleaning and Tableau to build interactive data visualization dashboards, including bar charts, scatter plots, maps, and storytelling dashboards."
        ]
      },
      {
        title: "Project-Based Virtual Internship | Home Credit x Rakamin Academy",
        date: "May - June 2025",
        bullets: [
          "Completed a project-based virtual internship program with a real business case from Home Credit Indonesia.",
          "Analyzed real business problems related to marketing strategies and customer retention.",
          "Developed data-driven solutions and recommendations to support strategic decision-making."
        ]
      },
      {
        title: "Indonesia's Micro and Small Industries (IMK) Analytics Dashboard",
        date: "October 2026",
        sub: "Team Project | Data Visualization Competition",
        bullets: [
          "Conducted exploratory data analysis (EDA) on Indonesia's Micro and Small Industries (IMK), examining business distribution, workforce, digital adoption, and business performance across provinces.",
          "Designed and developed an interactive dashboard featuring KPI cards, charts, treemaps, and heatmaps to present key insights into the IMK sector."
        ]
      }
    ],
    achievements: [
      "DJITU Scholarship Awardee 2024 | Yayasan Khouw Kalbe",
      "Top 5 Best Business Product | AIESEC Future Leader",
      "2nd Place Essay Fest 2024 | Universitas Muhammadiyah Malang",
      "Best Project Web Scraping | Digistar Club Telkom Indonesia",
      "3rd Runner-Up Scientific Writing Competition (LKTI) 2025 | Politeknik Negeri Semarang",
      "Finalist, Statistic Dashboard Competition | Universitas Sebelas Maret",
      "Best Presentation Award, National Infographic Competition 2026 | Universitas Sriwijaya",
      "Bronze Medal (2nd Place), MaHa Future Path Business Competition 2026 | Universitas Brawijaya",
      "Finalist, Smart Data Competition 2026 | Universitas Syiah Kuala"
    ],
    skillsText: {
      technical: "Python (Pandas, Scikit-learn), SQL, Data Analysis, Data Cleaning, Exploratory Data Analysis (EDA), Machine Learning, Time Series Forecasting, Data Visualization (Tableau, Power BI, Looker Studio, Plotly Dash), Web Development (React, PHP), Database Management, Microsoft Office.",
      soft: "Public Speaking (MC for 10+ events, including national-level events), Communication, Teamwork, Leadership, Project Coordination, Critical Thinking, Problem Solving, Time Management."
    }
  },

  projects: [
    {
      id: "marine-fisheries-system",
      featured: true,
      title: "Marine & Fisheries Data Monitoring System",
      type: "Web System",
      summary: "A web system that brings marine and fisheries statistics from 38 regencies and cities in East Java into one database, with an interactive dashboard to monitor production.",
      role: "Data Analyst & Web Development Intern",
      org: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
      period: "12 Jan - 20 Feb 2026",
      tools: ["React", "PHP", "MySQL", "REST API"],
      cover: "assets/img/dkp-portal.webp",
      links: [],
      sections: [
        {
          h: "Context",
          p: [
            "Digital transformation in government is a national priority under SPBE, the Electronic-Based Government System. The UN E-Government Survey 2022 names data integration as a foundation for modern, sustainable governance.",
            "Marine and fisheries data is complex and changes often. It covers capture fisheries, aquaculture, processing and marketing, salt production and commodity exports."
          ]
        },
        {
          h: "The problem",
          p: ["The office collects and processes statistics from 38 regencies and cities in East Java. During the internship, the data turned out to be managed manually in Excel files, separated by year and by sector."],
          list: [
            "Statistical data was spread across separate files by year and sector.",
            "There was no dashboard to support monitoring and analysis.",
            "Searching and compiling data was slow because it was done by hand."
          ]
        },
        {
          h: "Objectives",
          list: [
            "Build a web-based system that integrates marine and fisheries statistics.",
            "Apply automated data validation to improve consistency and accuracy.",
            "Create an interactive dashboard to monitor and analyze production trends."
          ]
        },
        {
          h: "My contribution",
          list: [
            "Developed interactive menus in the React and PHP portal for exploring marine and fisheries commodity data across East Java.",
            "Built interactive line and bar charts showing annual production volume and sales value trends across commodities and regions.",
            "Added year-over-year performance summaries to support quick comparison."
          ]
        },
        {
          h: "Project scope",
          list: [
            "Client-server architecture design, with the client separated from the server.",
            "Backend development in PHP.",
            "Frontend development in React.",
            "MySQL database design.",
            "REST API implementation.",
            "Upload and dashboard features."
          ]
        },
        {
          h: "Database design",
          p: ["The database has more than 50 tables in six areas: user management and security, file management and import, aquaculture, capture fisheries, processing and marketing, and fisheries exports. It uses primary keys, foreign keys and one-to-many relationships."]
        },
        {
          h: "Key features",
          items: [
            { t: "Landing page", d: "Introduces the system, gives navigation to the other menus and presents its identity." },
            { t: "Interactive dashboard", d: "An East Java map covering all 38 regencies and cities, production volume by region, regions highlighted by production level, and filters by year and sector (capture fisheries and aquaculture)." },
            { t: "Statistics data menu", d: "Data for capture fisheries, aquaculture, processing and marketing, exports and KPP (salt), shown as statistics tables with detail views." },
            { t: "Admin login", d: "Admins can upload files, import data, use the file manager, download templates and manage their account. General users have read-only access." },
            { t: "File manager", d: "Lists uploaded files with data year, sector category, import status and upload time, with upload and Excel template screens." },
            { t: "Account settings", d: "Admins can update account information, change passwords and edit their profile." }
          ]
        },
        {
          h: "Outcome",
          list: [
            "A client-server monitoring system using React, PHP and MySQL was developed.",
            "Multi-sector data now lives in one central database.",
            "Automated upload and import are more efficient than the previous manual process.",
            "The interactive dashboard supports spatial and temporal monitoring.",
            "Development is complete and the system is ready for hosting and operational deployment."
          ]
        },
        {
          h: "Recommended next steps",
          list: [
            "Add machine learning forecasting for future production volume or value.",
            "Add MySQL indexing to speed up queries without major architectural changes.",
            "Extend data granularity from yearly and monthly to daily, if the data becomes available."
          ]
        }
      ],
      gallery: [
        { src: "assets/img/dkp-portal.webp", caption: "Landing page of SAMUDERA, the marine and fisheries data portal" },
        { src: "assets/img/dkp-presentation.webp", caption: "Internship presentation at Dinas Kelautan dan Perikanan Provinsi Jawa Timur" }
      ]
    },

    {
      id: "pacific-water-accessibility",
      title: "Pacific Water Accessibility Dashboard",
      type: "Dashboard",
      summary: "An interactive storytelling dashboard on clean water access in Samoa, Papua New Guinea and Kiribati.",
      role: "Project Lead & Data Storyteller",
      org: "",
      period: "",
      tools: ["Tableau"],
      cover: "assets/img/pac-cover.webp",
      links: [{ label: "Open interactive dashboard", url: "https://public.tableau.com/app/profile/novita.chelsea/viz/visdat1_17490046022970/Story1?publish=yes" }],
      sections: [
        {
          h: "Overview",
          p: ["Designed an interactive storytelling dashboard titled Waves of Inequality: A Multidimensional View of Water Access in the Pacific. It explores clean water accessibility across Pacific regions through data visualization and regional analysis."]
        }
      ],
      gallery: [
        { src: "assets/img/pac-2.webp", caption: "Introduction" },
        { src: "assets/img/pac-3.webp", caption: "Water, sanitation and hygiene" },
        { src: "assets/img/pac-4.webp", caption: "Infant mortality" },
        { src: "assets/img/pac-6.webp", caption: "Economy and access to health facilities" },
        { src: "assets/img/pac-7.webp", caption: "Three realities, one region" }
      ]
    },

    {
      id: "data-storytelling-dashboard",
      title: "Data Storytelling Analytics Dashboard",
      type: "Dashboard",
      summary: "A storytelling dashboard for a statistical dashboard competition that turns complex data into a guided visual narrative.",
      role: "",
      org: "",
      period: "",
      tools: ["Tableau"],
      cover: "assets/img/ds-002.webp",
      coverPos: "top",
      links: [{ label: "Open interactive dashboard", url: "https://public.tableau.com/app/profile/jonathan.panggabean/viz/SSDCWorkbook_17530292297530/Story1" }],
      sections: [
        {
          h: "Overview",
          p: [
            "Developed an interactive storytelling dashboard for a statistical dashboard competition, combining analytical visualization and narrative flow to communicate insights in a more engaging and accessible way.",
            "The project focused on transforming complex data into an interactive visual story through dashboard storytelling and exploratory analysis."
          ]
        }
      ],
      gallery: [
        { src: "assets/img/ds-002.webp", caption: "Introduction" },
        { src: "assets/img/ds-003.webp", caption: "Best selling product and top product category" },
        { src: "assets/img/ds-004.webp", caption: "Category and payment type" },
        { src: "assets/img/ds-005.webp", caption: "Delivery performance" },
        { src: "assets/img/ds-007.webp", caption: "Geographic distribution of orders" },
        { src: "assets/img/ds-008.webp", caption: "Customer reviews" }
      ]
    },

    {
      id: "hospital-performance-dashboard",
      title: "Hospital Performance Analytics Dashboard",
      type: "Dashboard",
      summary: "A healthcare dashboard that monitors hospital performance indicators across East Java Province.",
      role: "",
      org: "",
      period: "",
      tools: [],
      cover: "assets/img/hosp-1.webp",
      coverPos: "top",
      links: [],
      sections: [
        {
          h: "Overview",
          p: [
            "Developed an interactive healthcare analytics dashboard to monitor hospital performance indicators across East Java Province through data visualization and dashboard analytics.",
            "The dashboard provides insights on patient admissions, bed occupancy rates, hospital capacity and regional healthcare trends to support data-driven decision-making."
          ]
        }
      ],
      gallery: [{ src: "assets/img/hosp-1.webp", caption: "Dashboard overview" }]
    },

    {
      id: "data-visualization-high-school",
      title: "Data Visualization Project for High School Students",
      type: "Dashboard",
      summary: "Interactive learning modules that teach high school students data preparation and data visualization with Google Sheets and Tableau.",
      role: "Lead",
      org: "",
      period: "June - July 2025",
      tools: ["Google Sheets", "Tableau"],
      cover: "assets/img/sales-1.webp",
      links: [{ label: "Open example dashboard", url: "https://public.tableau.com/app/profile/novita.chelsea/viz/SalesExampleVisualization/Dashboard2?publish=yes" }],
      sections: [
        {
          h: "Overview",
          p: ["Developed interactive learning modules on Data Preparation and Data Visualization for high school students. The modules cover how to identify missing values and outliers, and the steps to build data visualizations."],
          list: [
            "Google Sheets for data cleaning",
            "Tableau for interactive dashboards, including bar charts, scatter plots, maps and storytelling dashboards"
          ]
        }
      ],
      gallery: [{ src: "assets/img/sales-1.webp", caption: "Example dashboard used in the module: sales performance visualization" }]
    },

    {
      id: "home-credit-rakamin",
      title: "Project-Based Virtual Internship: Home Credit x Rakamin Academy",
      type: "Data Analysis",
      summary: "A virtual internship built around a real business case from Home Credit Indonesia, focused on marketing strategy and customer retention.",
      role: "Data Analyst (Project Based Intern)",
      org: "Home Credit x Rakamin Academy",
      period: "May - June 2025",
      tools: [],
      cover: "",
      coverText: "Home Credit x Rakamin",
      links: [],
      sections: [
        {
          h: "Overview",
          p: ["Completed a project-based virtual internship program with a real business case from Home Credit Indonesia."],
          list: [
            "Analyzed real business problems related to marketing strategies and customer retention.",
            "Developed data-driven solutions and recommendations to support strategic decision-making."
          ]
        }
      ],
      gallery: []
    },

    {
      id: "imk-analytics-dashboard",
      title: "Indonesia's Micro and Small Industries (IMK) Analytics Dashboard",
      type: "Dashboard",
      summary: "A team dashboard for a data visualization competition on Indonesia's micro and small industries, built from exploratory analysis across provinces.",
      role: "Team member",
      org: "Data Visualization Competition (team project)",
      period: "October 2026",
      tools: [],
      cover: "",
      coverText: "IMK Analytics Dashboard",
      links: [],
      sections: [
        {
          h: "Overview",
          p: ["Conducted exploratory data analysis (EDA) on Indonesia's Micro and Small Industries (IMK), examining business distribution, workforce, digital adoption and business performance across provinces."],
          list: [
            "Designed and developed an interactive dashboard featuring KPI cards, charts, treemaps and heatmaps.",
            "Presented the key insights into the IMK sector in one place."
          ]
        }
      ],
      gallery: []
    },

    {
      id: "logistic-center",
      title: "Logistic Center: Campus Asset Management System",
      type: "Web System",
      summary: "A web platform for borrowing campus rooms and assets, with request, scheduling, verification and return workflows.",
      role: "",
      org: "",
      period: "May 2026",
      tools: ["React", "Java Servlet", "MySQL", "OOP"],
      cover: "assets/img/logi-004.webp",
      links: [{ label: "Open prototype", url: "https://www.figma.com/make/fXSW2y45jkaOlEhCnduQ7R/LogistikCenter-Web-App?p=f&t=0ElxB7TRFANtzEZX-0&fullscreen=1" }],
      sections: [
        {
          h: "Overview",
          p: [
            "Developed a web-based campus logistics management system designed to manage room and asset borrowing through an integrated digital platform.",
            "The system supports borrowing requests, asset availability tracking, scheduling, verification workflows and return management for students, staff and administrators. It was built with Object-Oriented Programming principles and a client-server architecture."
          ]
        },
        {
          h: "Highlights",
          list: [
            "Borrowing requests for rooms and equipment",
            "Live availability of rooms and assets",
            "Borrowing calendar for scheduling",
            "Verifier workflow to approve or reject requests",
            "Return management"
          ]
        }
      ],
      gallery: [
        { src: "assets/img/logi-004.webp", caption: "Student dashboard with borrowing summary" },
        { src: "assets/img/logi-005.webp", caption: "Borrowing table with status" },
        { src: "assets/img/logi-008.webp", caption: "Available rooms and equipment" },
        { src: "assets/img/logi-010.webp", caption: "Borrowing request form" },
        { src: "assets/img/logi-012.webp", caption: "Return requests" },
        { src: "assets/img/logi-013.webp", caption: "Borrowing calendar" },
        { src: "assets/img/logi-017.webp", caption: "Verifier: request verification" },
        { src: "assets/img/logi-019.webp", caption: "Verifier: asset management" }
      ]
    }
  ],

  infographics: [
    { title: "Alam Rusak, Bencana Parah", tag: "Environment", img: "assets/img/g-alam-rusak.webp" },
    { title: "Seberapa Terjamin Hidup di Indonesia?", tag: "Social", img: "assets/img/g-hidup-terjamin.webp" },
    { title: "Potret Pendidikan Wilayah 3T", tag: "Education", img: "assets/img/g-pendidikan-3t.webp" },
    { title: "Produksi Tanaman Perkebunan Indonesia 2014-2024", tag: "Agriculture", img: "assets/img/g-perkebunan.webp" },
    { title: "Seberapa Besar Ekonomi Kota Surabaya?", tag: "Economy", img: "assets/img/g-ekonomi-surabaya.webp" },
    { title: "Elastisitas Permintaan dan Pergeseran Pola Konsumsi Pasca Pandemi", tag: "Economy", img: "assets/img/g-elastisitas.webp" },
    { title: "Dari Emisi Menuju Solusi, Microgrid berbasis IoT", tag: "Energy", img: "assets/img/g-microgrid.webp" },
    { title: "Dari Buang ke Pilah (2013-2021)", tag: "Environment", img: "assets/img/g-buang-ke-pilah.webp" }
  ],

  competitions: [
    {
      badge: "Best Presentation",
      title: "National Infographic Competition 2026",
      org: "Universitas Sriwijaya",
      date: "2026",
      desc: "Best Presentation Award.",
      img: ""
    },
    {
      badge: "Bronze Medal",
      title: "MaHa Future Path Business Competition 2026",
      org: "Universitas Brawijaya",
      date: "2026",
      desc: "Bronze Medal (2nd Place).",
      img: ""
    },
    {
      badge: "Finalist",
      title: "Smart Data Competition 2026",
      org: "Universitas Syiah Kuala",
      date: "2026",
      desc: "Finalist.",
      img: ""
    },
    {
      badge: "Finalist",
      title: "Statistics Dashboard Competition (SSDC)",
      org: "Universitas Sebelas Maret",
      date: "6 September 2025",
      desc: "Finalist at Sebelas Maret Statistics Fair (SSF) 2025. Theme: Harmony in Diversity, Power in Analysis.",
      img: "assets/img/a-ssdc.webp"
    },
    {
      badge: "3rd Runner-Up",
      title: "Scientific Writing Competition (LKTI) 2025",
      org: "Politeknik Negeri Semarang",
      date: "25 January 2025",
      desc: "Juara Harapan III. Theme: the role of students as agents of change in facing global transformation toward a Smart Society 5.0.",
      img: "assets/img/a-polines.webp"
    },
    {
      badge: "2nd Place",
      title: "Essay Fest 2024",
      org: "Universitas Muhammadiyah Malang",
      date: "2024",
      desc: "Second place with an essay on the theme Digital Transformation in the Economy.",
      img: "assets/img/a-essay-fest.webp"
    },
    {
      badge: "Best Project",
      title: "Mastering Web Scraping with Python",
      org: "Digistar Club Telkom Indonesia",
      date: "",
      desc: "Best Project in the Data Science Bootcamp, completed as a team.",
      img: "assets/img/a-best-project.webp"
    },
    {
      badge: "Top 5",
      title: "Best Business Product",
      org: "AIESEC Future Leader",
      date: "",
      desc: "Top 5 Best Business Product.",
      img: ""
    }
  ],

  community: [
    {
      badge: "Scholarship",
      title: "DJITU Scholarship Awardee 2024",
      org: "Yayasan Khouw Kalbe",
      date: "2024",
      desc: "Awardee of the DJITU 2024 scholarship.",
      img: "",
      links: [{ label: "Announcement", url: "https://www.yayasankhouwkalbe.org/djitu-reguler/djitu-2024" }]
    },
    {
      badge: "Mentor",
      title: "Dolanan Data Batch 5",
      org: "Dolanan Data 2025",
      date: "3 - 24 May 2025",
      desc: "Mentor for the event themed Machine Learning for Social Good: Forecasting for a Better World.",
      img: "assets/img/a-dolanan.webp"
    },
    {
      badge: "Speaker",
      title: "DJITU Scholarship Socialization 2025",
      org: "Yayasan Khouw Kalbe",
      date: "8 March 2025",
      desc: "Speaker (narasumber) at the DJITU 2025 scholarship socialization, batch 2.",
      img: "assets/img/a-djitu-speaker.webp"
    },
    {
      badge: "Master of Ceremony",
      title: "Jelajah Kuliah 2024",
      org: "Yayasan Khouw Kalbe",
      date: "9 November 2024",
      desc: "MC for Topic 2: Academic Achievement vs Practical Experience.",
      img: "assets/img/a-jelajah-2024.webp"
    },
    {
      badge: "Master of Ceremony",
      title: "Jelajah Kuliah 2026",
      org: "Yayasan Khouw Kalbe",
      date: "18 April 2026",
      desc: "MC for Session #4: AI Learning Class, More Than Copy-Paste.",
      img: "assets/img/a-jelajah-2026.webp"
    }
  ],

  events: {
    name: "Public speaking and event roles",
    note: "MC for 10+ events, including national-level events",
    roles: [
      { title: "Master of Ceremony, Mental Health Webinar", photos: [{ src: "assets/img/o-mc-mental.webp", caption: "Mental Health Webinar" }] },
      { title: "Treasurer, Mental Health Seminar 2025", photos: [{ src: "assets/img/o-treasurer.webp", caption: "Mental Health Seminar 2025" }] },
      {
        title: "Master of Ceremony, PKKMB Committee Training 2025",
        photos: [
          { src: "assets/img/o-pkkmb-1.webp", caption: "PKKMB Committee Training 2025, Day 1" },
          { src: "assets/img/o-pkkmb-2.webp", caption: "PKKMB Committee Training 2025, Day 2" }
        ]
      },
      { title: "Moderator, Young Staff Training Program", photos: [{ src: "assets/img/o-moderator.webp", caption: "Young Staff Training Program" }] },
      { title: "Master of Ceremony, Pekan Ilmiah Mahasiswa TUS 2025", photos: [] },
      { title: "Master of Ceremony, Data Science Guest Lecture (Pojok Statistik)", photos: [{ src: "assets/img/o-guest-lecture.webp", caption: "Data Science Guest Lecture" }] },
      { title: "Master of Ceremony, Sharing Session with the former Chancellor of Telkom University", photos: [] }
    ]
  }
};
