import profilePic from '../assets/pict.jpg';

// Import Enervisio Web Snaps sequentially
import en1 from '../assets/Enervisio/web/EN1.png';
import en2 from '../assets/Enervisio/web/EN2.png';
import en3 from '../assets/Enervisio/web/EN3.png';
import en4 from '../assets/Enervisio/web/EN4.png';
import en5 from '../assets/Enervisio/web/EN5.png';
import en6 from '../assets/Enervisio/web/EN6.png';
import en7 from '../assets/Enervisio/web/EN7.png';
import en8 from '../assets/Enervisio/web/EN8.png';
import en9 from '../assets/Enervisio/web/EN9.png';
import en10 from '../assets/Enervisio/web/EN10.png';
import en11 from '../assets/Enervisio/web/EN11.png';

// Import Enervisio Mobile Manual Snaps
import mob1 from '../assets/Enervisio/mobile/1.png';
import mob2 from '../assets/Enervisio/mobile/2.png';
import mob3 from '../assets/Enervisio/mobile/3.png';
import mob4 from '../assets/Enervisio/mobile/4.png';
import mob5 from '../assets/Enervisio/mobile/5.png';

// Import AMY 2025 snaps
import amyLit from '../assets/AMY2025/AMYLit.jpg';
import amyNu from '../assets/AMY2025/AMYNU.jpg';

// Import IRCITE snaps
import ircite1 from '../assets/IRCITE/IRCITE1.jpg';
import ircite2 from '../assets/IRCITE/IRCITE2.jpg';
import ircite3 from '../assets/IRCITE/IRCITE3.jpg';
import ircite4 from '../assets/IRCITE/IRCITE4.jpg';

// Import AWS Workshop snaps
import aws1 from '../assets/AWSWorkshop/AWS1.jpg';
import aws2 from '../assets/AWSWorkshop/AWS2.jpg';
import aws3 from '../assets/AWSWorkshop/AWS3.jpg';
import aws4 from '../assets/AWSWorkshop/AWS4.jpg';
import aws5 from '../assets/AWSWorkshop/AWS5.jpg';
import aws6 from '../assets/AWSWorkshop/AWS6.jpg';
import aws7 from '../assets/AWSWorkshop/AWS7.jpg';

// Import LIT Workshop snaps
import litCover from '../assets/LITWorkshop/LITcover.jpg';
import lit1 from '../assets/LITWorkshop/LIT1.jpg';
import lit2 from '../assets/LITWorkshop/LIT2.jpg';
import lit3 from '../assets/LITWorkshop/LIT3.jpg';
import lit4 from '../assets/LITWorkshop/LIT4.jpg';

export const portfolioData = {
  personal: {
    name: "Joaquin Lorenzo Catubag",
    titles: ["Full-Stack Software Engineer", "Researcher", "AI Trainer & Annotator"],
    subtitles: ["Magna Cum Laude", "Student Leader"],
    headline: "Designing scalable software architectures, managing technical projects, and pioneering full-stack, AI, and systems research.",
    location: "Matangtubig, Baliwag, Bulacan",
    email: "jolocatubag323@gmail.com",
    linkedin: "[https://www.linkedin.com/in/joaquin-catubag/](https://www.linkedin.com/in/joaquin-catubag/)",
    github: "[https://github.com/kwak-kin](https://github.com/kwak-kin)",
    profileImage: profilePic,
    education: {
      school: "National University - Baliwag",
      degree: "Bachelor of Science in Information Technology",
      specialization: "Mobile and Web Application Development",
      graduation: "Graduated July 2026",
      honors: ["Magna Cum Laude (Latin Honors)", "Doña Miguela M. Jhocson Blue Scholar"]
    }
  },

  // Showcase Projects with distinct, flexible media formats
  projects: [
    {
      id: "enervisio-ai",
      title: "Enervisio AI",
      tagline: "Smart Socket with AI-Driven Energy Monitoring",
      roles: ["Full-Stack Software Engineer", "System Architect", "Project Manager", "Researcher"],
      description: "Built a comprehensive web, mobile, and IoT energy monitoring system integrating ESP32 smart socket hardware. Developed real-time monitoring, energy cost estimation, AI-driven insights, RBAC, and export/reporting workflows.",
      videoUrl: "https://www.youtube.com/watch?v=dfMcYboG-4s",
      webDescription: "A central administration web dashboard strictly for Electroline Corporation (ELCOR) usage. It handles manual Meralco rate updates, user dissemination control (RBAC), and monitors employee audit logs and faulty socket logs. (Note: The data displayed in these screenshots are dummy data and do not represent the official data encoded on the web dashboard; they are just representations of what the web admin can do.)",
      mobileDescription: "A consumer companion mobile app that pairs with IoT smart sockets, enabling end-users to toggle device power, track active energy consumption (in kWh and PHP), and interact with an AI conservation coach.",
      amyDescription: "Showcasing Enervisio AI's presentation at the AMY Innovation Awards 2025. This project was honored as a National Innovation Finalist before panels of tech developers, system engineers, and venture capital judges.",
      achievements: ["Recognized as an AMY Innovation Awards 2025 Finalist."],
      stack: ["React.js", "Tailwind CSS", "Firebase", "Flutter", "IoT Integration"],
      mediaType: "images",
      webMedia: [
        {
          url: en1,
          caption: "Secure Admin Login Portal",
          description: "Strictly for ELCOR (Electroline Corporation) employee usage only. Access control is limited to verified credentials to manage system rates."
        },
        {
          url: en2,
          caption: "Account Creation Workflow (Admin)",
          description: "The developers seed the initial credentials and can therefore give admin accounts to employees who are given the task. Afterwards, these admins can administer staff accounts that have lesser role accessibility but are necessary to keep operations"
        },
        {
          url: en3,
          caption: "Role-Based Access Control Grid",
          description: "Enforces strict data hierarchy: Developers have system access, Admins manage accounts & CRUD rates, and Staff handle rate updates and reports only."
        },
        {
          url: en4,
          caption: "Dashboard & User Audit Monitor",
          description: "Displays live system metrics and logged actions. Logs include active employee names, who have consented to audit tracking for operational security."
        },
        {
          url: en5,
          caption: "Current Active Rates Widget",
          description: "Shows Meralco electricity prices. Note that other providers are out of scope; ELCOR adheres strictly to Meralco-announced rates."
        },
        {
          url: en6,
          caption: "Archived Rate Listings",
          description: "Maintains a record of old billing cycles. Since Meralco does not expose an API, all data must be inputted manually by authorized ELCOR workers."
        },
        {
          url: en7,
          caption: "Rate Revision History",
          description: "Provides an audit logs log showing who made specific rate corrections and when they were activated."
        },
        {
          url: en8,
          caption: "Manual Rate CRUD Form",
          description: "Allows admins and staff to enter current electricity price parts (generation, transmission, subsidies) based on recent bill briefs."
        },
        {
          url: en9,
          caption: "Electricity Rate Analytics",
          description: "Performs volatility calculations, computes ranges, average costs, and charts trend forecasts over historical logs."
        },
        {
          url: en10,
          caption: "Rate Analytics & Charting Logs",
          description: "Draws visual line charts plotting historical electricity rates, helping ELCOR admins evaluate pricing volatility."
        },
        {
          url: en11,
          caption: "IoT Defective Socket Reports",
          description: "Aggregates socket reports sent by active IoT consumers. Enables ELCOR workers to see which socket is faulty and coordinate repair visits."
        }
      ],
      manualMedia: [
        { url: mob1, caption: "User Manual - Page 1" },
        { url: mob2, caption: "User Manual - Page 2" },
        { url: mob3, caption: "User Manual - Page 3" },
        { url: mob4, caption: "User Manual - Page 4" },
        { url: mob5, caption: "User Manual - Page 5" }
      ],
      amyMedia: [
        {
          url: amyLit,
          caption: "NU Literates Congratulatory post",
          description: "The official finalist delegation representing National University - Baliwag during the AMY Innovation Awards 2025 ceremony."
        },
        {
          url: amyNu,
          caption: "NU Baliwag Congratulatory post",
          description: "The official finalist delegation representing National University - Baliwag during the AMY Innovation Awards 2025 ceremony."
        }
      ]
    },
    {
      id: "tatak-pancho",
      title: "Serbisyong Tatak Pancho Scholarship System",
      tagline: "Online Scholarship Management Platform",
      roles: ["Full-Stack Software Engineer", "Researcher"],
      description: "Developed an end-to-end online scholarship application system featuring document screening, automated email/SMS notifications, admin analytics reporting, and disbursement scheduling. Presented at IRCITE 2025.",
      stack: ["PHP", "MariaDB", "MySQL", "Bootstrap"],
      mediaType: "video",
      videoUrl: "[https://www.youtube.com/watch?v=QRbE560AfDI](https://www.youtube.com/watch?v=QRbE560AfDI)", // Replace with your video link
      links: [
        { label: "Presentation", url: "[https://www.youtube.com/watch?v=QRbE560AfDI](https://www.youtube.com/watch?v=QRbE560AfDI)" }
      ],
      irciteDescription: "Research dissemination slides from IRCITE 2025, where the Serbisyong Tatak Pancho Scholarship Management Platform's core systems, algorithms, and deployment findings were formally presented.",
      irciteMedia: [
        {
          url: ircite1,
          caption: "IRCITE 2025 Research Presentation",
          description: "Presenting the automated document screening algorithms and deployment workflows at the research forum."
        },
        {
          url: ircite2,
          caption: "Evaluation Results Presentation",
          description: "Presenting the results of user evaluations using ISO/IEC standards."
        },
        {
          url: ircite3,
          caption: "Evaluation Results Presentation",
          description: "Presenting the results of user evaluations using ISO/IEC standards."
        },
        {
          url: ircite4,
          caption: "The representatives of IRCITE 2025 from NU Baliwag",
          description: "Representing BSIT-MWA"
        }
      ]
    },
    {
      id: "angels-and-lemons",
      title: "Angels and Lemons' E-Ordering Website",
      tagline: "Web-Based Pickup Ordering System",
      roles: ["Software Engineer", "Researcher"],
      description: "Developed a secure web-based pickup ordering system containing standard carting flows, simulated mock e-wallet transactions, and dynamic daily business reports.",
      stack: ["PHP", "MySQL", "Bootstrap"],
      mediaType: "publication",
      doi: "10.13140/RG.2.2.18681.48488",
      links: [
        { label: "Published Paper (IJAMR)", url: "[https://doi.org/10.13140/RG.2.2.18681.48488](https://doi.org/10.13140/RG.2.2.18681.48488)" }
      ]
    }
  ],

  experience: [
    {
      company: "Outlier AI",
      role: "AI Trainer / Freelance AI Annotator",
      period: "January 2025 – May 2026",
      location: "Remote",
      bullets: [
        "Conduct comprehensive evaluations of AI-generated outputs across various modalities, ensuring prompt adherence and factual correctness.",
        "Analyze model responses to determine their effectiveness in meeting user intent and providing meaningful results.",
        "Complete English, Tagalog, and bilingual Tagalog-English annotation tasks, applying language-specific and cultural judgment for localized AI evaluation.",
        "Review code across multiple programming languages, ensuring technical accuracy and practical utility for end-users."
      ]
    },
    {
      company: "Argon Software Development Services",
      role: "Software Engineer Intern (400 Hours)",
      period: "March 2026 - May 2026",
      location: "Remote",
      bullets: [
        "Contributed to multiple e-commerce platforms using React, Laravel 11, PostgreSQL, GitHub, Docker, and SMTP email verification.",
        "Guided AI coding agents through high-level architectural prompting to implement robust role-based access control and seamless transaction processes.",
        "Designed and optimized critical components like the homepage, shopping cart, and admin management workflows.",
        "Provided manual QA testing for features while simultaneously also contributing as a developer",
        "Documented development processes to facilitate team understanding and future enhancements."
      ]
    },
    {
      company: "Philippine Batteries Incorporated / Motolite",
      role: "IT Developer Intern – Plant Engineering & Plant Maintenance Department (500 Hours)",
      period: "Nov 2025 - Feb 2026",
      location: "Sta. Maria, Bulacan",
      bullets: [
        "Developed a standalone Condition-Based Maintenance System designed to digitize maintenance planning, equipment tracking, attendance logs, and reporting workflows.",
        "Built core modules using PHP, MariaDB/MySQL, and Bootstrap, including personnel management, equipment records, preventive maintenance scheduling, and condition-based maintenance monitoring.",
        "Automated data reporting and attendance calculations, significantly improving operational efficiency.",
        "Provided manual QA testing for features while simultaneously also being the sole system developer",
        "Created detailed documentation to support ongoing development and team comprehension of the system."
      ]
    }
  ],

  certifications: [
    {
      name: "EF SET English Certificate - C2 Proficient",
      score: "EF SET Score: 85/100 (C2 Proficient in Reading, Listening, Writing, and Speaking)",
      date: "Awarded: June 2026",
      verifyUrl: "[https://cert.efset.org/xGVV1u](https://cert.efset.org/xGVV1u)",
      issuer: "EF Standard English Test"
    }
  ],

  leadership: [
    {
      organization: "AWS Cloud Clubs - NU Baliwag",
      roles: [
        { title: "Co-Captain", period: "July 2025 - June 2026" },
        { title: "Cloud Computing Department Co-Head", period: "July 2024 - June 2025" }
      ],
      description: "Co-led campus cloud initiatives, workshops, technical mentoring, and hands-on sessions on AWS, Git/GitHub, and software development practices."
    },
    {
      organization: "Scholars' Society - NU Baliwag",
      roles: [
        { title: "Vice President - External", period: "July 2025 - June 2026" },
        { title: "Treasurer", period: "July 2024 - June 2025" }
      ],
      description: "Managed external representation, partnerships, sponsorship support, and society-led programs. Previously handled budgets, liquidations, financial reports, and event disbursement support."
    },
    {
      organization: "Lit Entertainment",
      roles: [
        { title: "Vice-Chairman", period: "July 2024 - June 2025" }
      ],
      description: "Supported organizational direction, event operations, documentation, and creative initiatives as the organization expanded beyond esports."
    }
  ],

  speaking: [
    {
      event: "Workshop Speaker - AWS Cloud Club NU Baliwag",
      topic: "\"Introduction to IDEs and GitHub: Building the Foundation\"",
      date: "February 2025",
      description: "Conducted a hands-on session on Visual Studio and GitHub fundamentals, guiding students through repository controls.",
      media: [
        { url: aws1, caption: "AWS Cloud Club NU Baliwag Group Shot" },
        { url: aws2, caption: "Unlocking VS Code and GitHub" },
        { url: aws3, caption: "Why does learning these matter?" },
        { url: aws4, caption: "Introduction to IDEs Lecture" },
        { url: aws5, caption: "Setting up GitHub accounts" },
        { url: aws6, caption: "Personally guiding participants" },
        { url: aws7, caption: "Introduction to IDEs Lecture" }
      ]
    },
    {
      event: "Workshop Speaker - NU Literates Community",
      topic: "\"Your First Step into Full Stack Web Development\"",
      date: "August 2025",
      description: "Led a beginner-friendly HTML, CSS, JavaScript, and PHP workshop for 40+ students.",
      media: [
        { url: litCover, caption: "Full Stack Workshop Banner Poster" },
        { url: lit1, caption: "Explaining Client-Server Architecture" },
        { url: lit2, caption: "CSS Layouts Live Coding Demo" },
        { url: lit3, caption: "Connecting PHP Frontend to DB" },
        { url: lit4, caption: "Q&A & Certificate Distribution Ceremony" }
      ]
    }
  ],

  skills: {
    qa_testing: ["Manual Testing", "Test Case Design", "Regression Testing", "Bug Reporting", "Defect Tracking", "UAT", "Sprint-Based QA", "Bug Lifecycle Management"],
    ai_assisted_dev: ["Agentic Workflows", "Advanced Prompt Engineering", "Google Antigravity", "Claude Code", "OpenAI Codex"],
    ai_training: ["LLM evaluation", "prompt writing", "response ranking", "instruction-following assessment", "SFT/RLHF task familiarity", "bilingual Tagalog-English annotation", "multimodal annotation", "AI coding evaluation", "data labeling", "quality validation"],
    languages: ["Filipino/Tagalog (Native)", "English (C2 Proficient)"],
    programming: ["Software Architecture", "PHP", "JavaScript", "HTML", "CSS", "Laravel", "Livewire", "React.js", "Flutter", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
    databases_cloud: ["MySQL", "MariaDB", "Firebase Firestore", "PostgreSQL", "AWS", "Docker"],
    tools: ["Technical Project Management", "Git", "GitHub", "VS Code", "Cursor", "GitHub Copilot", "XAMPP", "Figma", "Trello", "Notion", "Zoho Sprints", "Jira"]
  }
};
