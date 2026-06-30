const PORTFOLIO_DATA = {
  "profile": {
    "name": "Amina Javed",
    "headline": "Full Stack Software Engineer",
    "bio": "Full Stack Software Engineer specializing in the .NET ecosystem. I build scalable architectures, modernize legacy platforms, and engineer cloud-native solutions that withstand the vacuum of enterprise demands.",
    "location": "Faisalabad, Pakistan",
    "email": "aminajaved1999@gmail.com",
    "linkedin": "https://linkedin.com/in/aminajaved1999",
    "github": "https://github.com/aminajaved1999",
    "phone": "+92 323 7382323",
    "resume": "",
    "stats": {
      "expStartYear": 2022,
      "expStartMonth": 7
    },
    "topSkills": [
      "C#",
      ".NET 8",
      "ASP.NET",
      "Docker",
      "SQL Server"
    ],
    "photo": "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/profile.png.png",
    "openToWork": true
  },
  "experience": [
    {
      "role": "Software Engineer",
      "company": "Beacon Impex Pvt. Ltd.",
      "location": "Faisalabad",
      "period": "07/2022 – Present",
      "featured": true,
      "points": [
        "Developed and maintained a robust .NET Web Framework to enhance backend functionality and construct WinForms Applications in C#, ensuring system reliability and optimized performance.",
        "Engineered RESTful API solutions, integrating WhatsApp and other third-party APIs for seamless communication and advanced functionality.",
        "Updated and maintained comprehensive API documentation, facilitating effective team collaboration."
      ]
    },
    {
      "role": "Teacher Assistant",
      "company": "FAST NUCES",
      "location": "Faisalabad",
      "period": "02/2020 – 06/2022",
      "featured": false,
      "description": "Supported teachers with document coordination and evaluated assessments and quizzes to ensure academic standards."
    },
    {
      "role": "Web Development Intern",
      "company": "Career Institute",
      "location": "Faisalabad",
      "period": "06/2018 – 08/2018",
      "featured": false,
      "points": [
        "Developed responsive front-end interfaces using HTML5, CSS3, Bootstrap, JavaScript, and jQuery, improving user experience and site responsiveness.",
        "Developed backend features with PHP and MySQL and contributed to an e-commerce platform using the CodeIgniter framework."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Computer Science",
      "institution": "National University of Computer and Emerging Sciences (FAST NUCES)",
      "location": "Faisalabad, Pakistan",
      "period": "2018 – 2022"
    }
  ],
  "projects": [
    {
      "title": "Zephyr — IoT Platform",
      "icon": "fas fa-server",
      "categories": [
        "enterprise",
        "web"
      ],
      "featured": true,
      "description": "Enterprise IoT platform managing smart AC systems. Multi-layered ASP.NET Web API with RESTful APIs, JWT RBAC, and MQTT integration for real-time remote control and automated scheduling.",
      "tags": [
        "C#",
        "ASP.NET Web API",
        "MQTT",
        "EF Core",
        "JWT"
      ],
      "github": "",
      "demo": "",
      "period": "11/2024 – 06/2025",
      "role": "Backend Engineer",
      "images": [],
      "features": [
        "Multi-layered ASP.NET Web API architecture for scalability and maintainability",
        "JWT authentication with role-based access control (RBAC)",
        "Real-time MQTT integration for device monitoring and remote control",
        "Automated scheduling system for smart AC unit management",
        "Entity Framework with optimized data layer for high-throughput operations"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "DevPort — Cloud Portfolio App",
      "icon": "fab fa-microsoft",
      "categories": [
        "web"
      ],
      "featured": true,
      "description": "Cloud web app showcasing user portfolios. ASP.NET Core, Blazor, EF Core, ASP.NET Identity, RESTful APIs, caching, and CI/CD pipeline deploying to Azure via GitHub Actions.",
      "tags": [
        "ASP.NET Core",
        "Blazor",
        "EF Core",
        "Azure",
        "CI/CD"
      ],
      "github": "",
      "demo": "",
      "period": "06/2025",
      "role": "Full Stack Developer",
      "images": [],
      "features": [
        "Secure user authentication via ASP.NET Identity",
        "RESTful API with server-side response caching for performance",
        "Blazor UI components for interactive portfolio display",
        "CI/CD pipeline with GitHub Actions for automated deployments",
        "Azure cloud deployment with zero-downtime updates"
      ],
      "proprietary": false,
      "source": {
        "type": "certification",
        "label": "Microsoft | Coursera",
        "icon": "fab fa-microsoft"
      }
    },
    {
      "title": "EventEase",
      "icon": "fas fa-ticket-alt",
      "categories": [
        "web"
      ],
      "featured": true,
      "description": "Blazor WebAssembly event management app for browsing corporate and social events, registering with validated forms, and tracking attendance. Capstone for Blazor for Front-End Development (Microsoft Front-End Developer Professional Certificate).",
      "tags": [
        "Blazor",
        "WebAssembly",
        ".NET 8",
        "C#",
        "DataAnnotations"
      ],
      "github": "https://github.com/aminajaved1999/eventease-blazor",
      "demo": "https://aminajaved1999.github.io/EventEase-Blazor/",
      "period": "2025",
      "role": "Front-End Developer",
      "images": [
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/1.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/2.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/3.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/4.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/5.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/6.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/EventEase/7.png"
      ],
      "features": [
        "Reusable EventCard component with parameters, EventCallback, and live data binding",
        "Dynamic routing with validated route parameters and graceful 404 fallback",
        "Registration form with DataAnnotations validation and duplicate detection",
        "Singleton session service with observer pattern for cross-page state",
        "Real-time attendance dashboard with per-event capacity tracking",
        "Deployed to GitHub Pages via GitHub Actions CI/CD"
      ],
      "proprietary": false,
      "source": {
        "type": "certification",
        "label": "Microsoft | Coursera",
        "icon": "fab fa-microsoft"
      }
    },
    {
      "title": "SecondChance — Exchange Platform",
      "icon": "fas fa-recycle",
      "categories": [
        "web"
      ],
      "featured": true,
      "description": "Node.js/MongoDB backend enabling users to exchange household items. Secure RESTful APIs for listings, search, and sentiment analysis, with JWT auth. Containerized and deployed via Docker, Kubernetes, and IBM Cloud CI/CD.",
      "tags": [
        "Node.js",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "IBM Cloud"
      ],
      "github": "",
      "demo": "",
      "period": "02/2024",
      "role": "Backend Developer",
      "images": [],
      "features": [
        "Secure RESTful APIs for item listings, search, and filtering",
        "JWT-based user authentication and session management",
        "IBM Watson NLU sentiment analysis on item reviews",
        "Docker containerization for consistent deployment environments",
        "Kubernetes orchestration with IBM Cloud CI/CD pipeline"
      ],
      "proprietary": false,
      "source": {
        "type": "certification",
        "label": "IBM | Coursera",
        "icon": "fas fa-certificate"
      }
    },
    {
      "title": "Little Lemon — Reservation App",
      "icon": "fas fa-utensils",
      "categories": [
        "web"
      ],
      "featured": false,
      "description": "Full-stack restaurant reservation system. Django REST Framework backend with MySQL and Djoser auth. React frontend with React Router and useReducer for dynamic form state management.",
      "tags": [
        "Django",
        "DRF",
        "React",
        "MySQL",
        "Djoser"
      ],
      "github": "",
      "demo": "",
      "period": "01/2024",
      "role": "Full Stack Developer",
      "images": [],
      "features": [
        "Django REST Framework API with menu and reservation endpoints",
        "MySQL database integration for persistent data storage",
        "Djoser-powered secure user authentication and token management",
        "React frontend with React Router for seamless navigation",
        "useReducer for complex dynamic table reservation form state"
      ],
      "proprietary": false,
      "source": {
        "type": "certification",
        "label": "Meta | Coursera",
        "icon": "fab fa-meta"
      }
    },
    {
      "title": "GeoHealth Tracker",
      "icon": "fas fa-map-marked-alt",
      "categories": [
        "web"
      ],
      "featured": false,
      "description": "Single-page dashboard for exploring health facilities using live OpenStreetMap Overpass API data. Interactive mapping with marker clustering for high performance, dynamic filtering, and real-time statistics.",
      "tags": [
        "Vanilla JS",
        "Leaflet.js",
        "Tailwind CSS",
        "OpenStreetMap"
      ],
      "github": "https://github.com/aminajaved1999/GeoHealth-Tracker",
      "demo": "https://aminajaved1999.github.io/intro-to-web-dev-portfolio",
      "period": "2024",
      "role": "Frontend Developer",
      "images": [
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/GeoHealth-Tracker/1.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/GeoHealth-Tracker/2.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/GeoHealth-Tracker/3.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/GeoHealth-Tracker/4.png"
      ],
      "features": [
        "Live OpenStreetMap Overpass API integration for real-time facility data",
        "Leaflet.js with marker clustering for high-performance map rendering",
        "Dynamic category filtering by facility type",
        "Real-time statistics panel with live facility counts",
        "Fully responsive single-page design with Tailwind CSS"
      ],
      "proprietary": false,
      "source": {
        "type": "freelance",
        "label": "Freelance",
        "icon": "fas fa-laptop-code"
      }
    },
    {
      "title": "E-commerce DevOps PoC",
      "icon": "fas fa-shopping-cart",
      "categories": [
        "web"
      ],
      "featured": false,
      "description": "Modern Django MVT e-commerce PoC replacing a legacy monolith. Full CI/CD pipeline with GitHub Actions and Docker, with automated testing and zero-downtime migration to Render.",
      "tags": [
        "Django",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Render"
      ],
      "github": "https://github.com/aminajaved1999/ecommerce-devops-poc",
      "demo": "",
      "period": "2024",
      "role": "Full Stack & DevOps",
      "images": [
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Ecommerce-DevOps-PoC/1.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Ecommerce-DevOps-PoC/2.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Ecommerce-DevOps-PoC/3.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Ecommerce-DevOps-PoC/4.png",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Ecommerce-DevOps-PoC/5.png"
      ],
      "features": [
        "Django MVT architecture replacing a legacy monolithic system",
        "Full CI/CD pipeline with GitHub Actions for automated testing and builds",
        "Docker containerization for consistent dev and production environments",
        "Zero-downtime deployment strategy to Render PaaS",
        "Modular codebase designed for scalable feature additions"
      ],
      "proprietary": false,
      "source": {
        "type": "freelance",
        "label": "Freelance",
        "icon": "fas fa-laptop-code"
      }
    },
    {
      "title": "WIP Analysis Tool",
      "icon": "fas fa-chart-line",
      "categories": [
        "enterprise",
        "desktop"
      ],
      "featured": false,
      "description": "C# WinForms application using EPPlus and SQL Server to import Excel data (catalog, forecast, POs, stock), automate WIP calculations with data validation, and export accurate reports — replacing manual DTS processes.",
      "tags": [
        "C#",
        "WinForms",
        "EPPlus",
        "SQL Server"
      ],
      "github": "",
      "demo": "",
      "period": "07/2025 – Present",
      "role": "Desktop Application Developer",
      "images": [
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/0.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/1.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/2.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/3.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/4.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/5.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/6.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/7.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/8.PNG",
        "https://raw.githubusercontent.com/aminajaved1999/my-portfolio-assets/main/projects/Wip-Analysis-Tool/9.PNG"
      ],
      "features": [
        "Multi-source Excel data import: catalog, forecast, POs, and stock",
        "Automated WIP calculations with built-in data validation rules",
        "Accurate Excel report export replacing error-prone manual DTS processes",
        "SQL Server integration for data persistence and audit tracking",
        "Intuitive WinForms UI with progress feedback and error handling"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "Tracket — Ticketing System",
      "icon": "fas fa-ticket-alt",
      "categories": [
        "enterprise",
        "web"
      ],
      "featured": false,
      "description": "Ticketing management system backend using .NET Core and EF Code-First. Led design and implementation of RESTful APIs supporting efficient workflows and seamless cross-system integration.",
      "tags": [
        ".NET Core",
        "EF Code-First",
        "REST APIs",
        "SQL"
      ],
      "github": "",
      "demo": "",
      "period": "2024",
      "role": "Backend Developer",
      "images": [],
      "features": [
        "EF Core Code-First data modeling with clean migration history",
        "RESTful API design supporting full ticketing lifecycle workflows",
        "Cross-system integration endpoints for seamless data exchange",
        "High-performance query optimization for large ticket volumes",
        "Scalable backend architecture following SOLID principles"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "TruckDestino — Fleet Management",
      "icon": "fas fa-truck",
      "categories": [
        "enterprise",
        "web"
      ],
      "featured": false,
      "description": "Modernized a legacy Fleet Management System from Silverlight/SOAP to RESTful APIs. Resolved legacy bugs, enforced data consistency, and produced full API documentation for cross-team integration.",
      "tags": [
        "C#",
        ".NET",
        "REST APIs",
        "Legacy Migration"
      ],
      "github": "",
      "demo": "",
      "period": "08/2022 – 12/2024",
      "role": "Backend Developer",
      "images": [],
      "features": [
        "Legacy Silverlight/SOAP to modern RESTful API migration",
        "Full API documentation for frontend and mobile team integration",
        "Legacy bug resolution and data consistency enforcement",
        "Extended fleet tracking functionality via new API endpoints",
        "Maintained backward compatibility during phased migration"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "QuickBooks IIF Generator",
      "icon": "fas fa-file-invoice-dollar",
      "categories": [
        "enterprise",
        "desktop"
      ],
      "featured": false,
      "description": "C# WinForms application automating conversion of SQL Server transactional data (Sales, Purchases, Items) into QuickBooks IIF import files — eliminating all manual export effort.",
      "tags": [
        "C#",
        "WinForms",
        "SQL Server",
        "EPPlus",
        "QuickBooks"
      ],
      "github": "",
      "demo": "",
      "period": "12/2023 – 01/2025",
      "role": "Desktop Application Developer",
      "images": [],
      "features": [
        "Automated conversion of SQL Server data into QuickBooks IIF format",
        "Supports Sales, Purchase, and Item data types in one unified tool",
        "Validated WinForms UI for intuitive file upload and export operations",
        "EPPlus integration for Excel-based intermediate file handling",
        "Eliminated all manual QuickBooks import effort for the finance team"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "GPMS — Garment Production",
      "icon": "fas fa-cogs",
      "categories": [
        "enterprise",
        "desktop"
      ],
      "featured": false,
      "description": "Garment Production & Packing Management System. Designed a WCF Service Layer for decoupled communication and high-performance API transactions. Optimized EF queries with comprehensive unit testing.",
      "tags": [
        "C#",
        ".NET Framework",
        "WCF",
        "Entity Framework",
        "SQL Server"
      ],
      "github": "",
      "demo": "",
      "period": "03/2024 – 05/2024",
      "role": "Backend Developer",
      "images": [],
      "features": [
        "WCF Service Layer for decoupled, high-performance API transactions",
        "Entity Framework with SQL Server for efficient data management",
        "Optimized database queries for production throughput requirements",
        "Comprehensive unit testing ensuring system reliability",
        "Clean architectural practices for long-term maintainability"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "MEZBAN — Travel Platform (FYP)",
      "icon": "fas fa-bed",
      "categories": [
        "web"
      ],
      "featured": false,
      "description": "Final Year Project. MEAN stack accommodation platform helping travelers find lodging based on location, availability, and nearby amenities via Google Places API, with scalable architecture and personalized recommendations.",
      "tags": [
        "MongoDB",
        "Express.js",
        "Angular",
        "Node.js",
        "Google Places API"
      ],
      "github": "https://github.com/aminajaved1999/MEZBAN-FYP",
      "demo": "",
      "period": "2021 – 2022",
      "role": "Full Stack Developer",
      "images": [],
      "features": [
        "MEAN stack full architecture: MongoDB, Express, Angular, Node.js",
        "Google Places API for real-time location and amenity data",
        "Personalized accommodation recommendations based on traveler preferences",
        "Scalable Angular frontend with modular component architecture",
        "RESTful backend with JWT authentication and role management"
      ],
      "proprietary": false,
      "source": {
        "type": "university",
        "label": "FAST NUCES — Final Year Project",
        "icon": "fas fa-graduation-cap"
      }
    },
    {
      "title": "Tracko IS — Vehicle Tracker",
      "icon": "fas fa-satellite",
      "categories": [
        "enterprise",
        "desktop",
        "web"
      ],
      "featured": false,
      "description": "Vehicle Tracker Invoicing System. Developed Database-First RESTful APIs via ADO.NET and WinForms automation modules including a SIM lifecycle management tool. Resolved complex legacy bugs.",
      "tags": [
        "C#",
        ".NET",
        "ADO.NET",
        "WinForms",
        "SQL Server"
      ],
      "github": "",
      "demo": "",
      "period": "2023 – 2024",
      "role": "Backend & Desktop Developer",
      "images": [],
      "features": [
        "Database-First RESTful APIs via ADO.NET for efficient SQL Server interaction",
        "SIM lifecycle management automation module reducing manual effort significantly",
        "Multiple WinForms automation modules for operational workflows",
        "Complex legacy bug resolution and application performance optimization",
        "Data consistency improvements across integrated systems"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "Denim Labels Utility",
      "icon": "fas fa-tags",
      "categories": [
        "enterprise",
        "desktop"
      ],
      "featured": false,
      "description": "WinForms desktop application using EPPlus to automate item-level denim label generation from Excel data, enabling multi-format exports (PDF, Word, Excel) and significantly reducing manual errors.",
      "tags": [
        "C#",
        ".NET",
        "WinForms",
        "EPPlus"
      ],
      "github": "",
      "demo": "",
      "period": "12/2022 – 01/2023",
      "role": "Desktop Application Developer",
      "images": [],
      "features": [
        "Automated item-level denim label generation from Excel source data",
        "Multi-format export support: PDF, Word, and Excel",
        "EPPlus-powered Excel parsing with robust error handling",
        "Significantly reduced manual labeling errors and turnaround time",
        "User-friendly WinForms interface with batch processing support"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "Warehouse Management System",
      "icon": "fas fa-warehouse",
      "categories": [
        "enterprise",
        "web"
      ],
      "featured": false,
      "description": "Backend for a WMS using Code-First approach in .NET. Designed APIs supporting seamless data integration and optimized for high-throughput warehouse operations.",
      "tags": [
        ".NET",
        "EF Code-First",
        "REST APIs",
        "SQL Server"
      ],
      "github": "",
      "demo": "",
      "period": "2024",
      "role": "Backend Developer",
      "images": [],
      "features": [
        "Entity Framework Code-First approach for clean schema management",
        "RESTful APIs designed for high-throughput warehouse operations",
        "Seamless data integration with existing business systems",
        "Optimized backend for performance under heavy operational load",
        "Scalable architecture supporting future warehouse workflow extensions"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    },
    {
      "title": "Terminal Management System",
      "icon": "fas fa-terminal",
      "categories": [
        "enterprise",
        "desktop"
      ],
      "featured": false,
      "description": "Maintenance and optimization of a critical .NET Framework desktop application. Focused on resolving legacy bugs, code optimization, and improving stability for seamless business operation.",
      "tags": [
        ".NET Framework",
        "C#",
        "WinForms",
        "Legacy Optimization"
      ],
      "github": "",
      "demo": "",
      "period": "2022 – 2023",
      "role": "Software Engineer",
      "images": [],
      "features": [
        "Critical legacy .NET Framework desktop application maintenance",
        "Resolution of long-standing bugs affecting business operations",
        "Code optimization improving overall application performance",
        "Stability improvements ensuring reliable day-to-day operation",
        "Adherence to strict coding standards for a business-critical system"
      ],
      "proprietary": true,
      "source": {
        "type": "professional",
        "label": "Beacon Impex Pvt. Ltd.",
        "icon": "fas fa-building"
      }
    }
  ],
  "skills": [
    {
      "category": "Backend & .NET Ecosystem",
      "icon": "fas fa-server",
      "hoverColor": "cyan",
      "items": [
        "C#",
        ".NET Framework",
        ".NET Core",
        ".NET 8",
        "ASP.NET Web API",
        "Entity Framework",
        "ADO.NET",
        "REST APIs",
        "JWT",
        "MQTT",
        "WCF",
        "LINQ"
      ]
    },
    {
      "category": "Frontend & Desktop",
      "icon": "fas fa-desktop",
      "hoverColor": "magenta",
      "items": [
        "Windows Forms (WinForms)",
        "Blazor",
        "React.js",
        "Angular",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery"
      ]
    },
    {
      "category": "Data, Cloud & DevOps",
      "icon": "fas fa-database",
      "hoverColor": "cyan",
      "items": [
        "SQL Server",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Python (Django)",
        "Node.js",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "Azure",
        "IIS",
        "EPPlus"
      ]
    }
  ],
  "certifications": [
    {
      "title": "Meta Full Stack Developer: Front-End & Back-End from Scratch",
      "issuer": "Meta",
      "date": "06/2025",
      "category": "meta",
      "credentialUrl": "https://coursera.org/verify/specialization/GDS86I5P383R"
    },
    {
      "title": "Meta Database Engineer",
      "issuer": "Meta",
      "date": "02/2024",
      "category": "meta",
      "credentialUrl": "https://coursera.org/verify/professional-cert/24FHYJUVQUCP"
    },
    {
      "title": "Meta Back-End Developer",
      "issuer": "Meta",
      "date": "01/2024",
      "category": "meta",
      "credentialUrl": "https://coursera.org/verify/professional-cert/W7JGATZ9649F"
    },
    {
      "title": "Meta Front-End Developer",
      "issuer": "Meta",
      "date": "10/2023",
      "category": "meta",
      "credentialUrl": "https://coursera.org/verify/professional-cert/9E9XKYNPRXXH"
    },
    {
      "title": "IBM Front-End Development with Figma, Bootstrap & Git",
      "issuer": "IBM",
      "date": "06/2025",
      "category": "ibm",
      "credentialUrl": "https://coursera.org/verify/professional-cert/4UX87VCMDHM7"
    },
    {
      "title": "IBM Back-End Development",
      "issuer": "IBM",
      "date": "06/2025",
      "category": "ibm",
      "credentialUrl": "https://coursera.org/verify/professional-cert/4MMWXAZ01RG6"
    },
    {
      "title": "IBM JavaScript Backend Developer",
      "issuer": "IBM",
      "date": "06/2025",
      "category": "ibm",
      "credentialUrl": "https://coursera.org/verify/professional-cert/TQV7PKESIQQS"
    },
    {
      "title": "IBM Full-Stack JavaScript Developer",
      "issuer": "IBM",
      "date": "08/2024",
      "category": "ibm",
      "credentialUrl": "https://coursera.org/verify/professional-cert/T2O6HAMC5Z9J"
    },
    {
      "title": "IBM Full Stack Software Developer",
      "issuer": "IBM",
      "date": "02/2024",
      "category": "ibm",
      "credentialUrl": "https://coursera.org/verify/professional-cert/CES0M4XG70JX"
    },
    {
      "title": "Microsoft Full-Stack Developer",
      "issuer": "Microsoft",
      "date": "06/2025",
      "category": "ms",
      "credentialUrl": "https://coursera.org/verify/professional-cert/2CPTH4F23Y8M"
    },
    {
      "title": "Microsoft Back-End Developer",
      "issuer": "Microsoft",
      "date": "06/2025",
      "category": "ms",
      "credentialUrl": "https://coursera.org/verify/professional-cert/JVWX27N82JMF"
    },
    {
      "title": "Microsoft Front-End Developer",
      "issuer": "Microsoft",
      "date": "06/2025",
      "category": "ms",
      "credentialUrl": "https://coursera.org/verify/professional-cert/JM83BAK534V9"
    },
    {
      "title": "Google Project Management",
      "issuer": "Google",
      "date": "06/2025",
      "category": "google",
      "credentialUrl": "https://coursera.org/verify/professional-cert/COFGLB7OEY1N"
    },
    {
      "title": "Academic English: Writing Specialization",
      "issuer": "Coursera",
      "date": "2025",
      "category": "other",
      "credentialUrl": "https://coursera.org/verify/specialization/WDTEYG3SBW8R"
    }
  ],
  "achievements": [
    {
      "title": "Dean's List of Honor",
      "detail": "Fall 2018",
      "org": "FAST NUCES, Faisalabad",
      "icon": "fas fa-star",
      "type": "academic"
    },
    {
      "title": "Runner Up — Badminton Doubles",
      "detail": "TAKKRA 2022",
      "org": "UCP, Lahore",
      "icon": "fas fa-trophy",
      "type": "sports"
    },
    {
      "title": "Runner Up — Badminton Tournament",
      "detail": "2021",
      "org": "FAST NUCES, Faisalabad",
      "icon": "fas fa-trophy",
      "type": "sports"
    },
    {
      "title": "Runner Up — Badminton Tournament",
      "detail": "2019",
      "org": "FAST NUCES, Faisalabad",
      "icon": "fas fa-trophy",
      "type": "sports"
    },
    {
      "title": "FAST Silent Steps Society",
      "detail": "7 Semesters",
      "org": "Fundraising & Charity Events",
      "icon": "fas fa-hands-helping",
      "type": "community"
    },
    {
      "title": "Security Team — DAIRA'22",
      "detail": "National Event, Mar 2022",
      "org": "FAST NUCES, Faisalabad",
      "icon": "fas fa-shield-alt",
      "type": "community"
    },
    {
      "title": "Registration Team — DAIRA'19",
      "detail": "National Event, Mar 2019",
      "org": "FAST NUCES, Faisalabad",
      "icon": "fas fa-id-badge",
      "type": "community"
    },
    {
      "title": "Management Team — Convocation 2019",
      "detail": "Usher, 2019",
      "org": "FAST NUCES, Faisalabad",
      "icon": "fas fa-users",
      "type": "community"
    }
  ],
  "languages": [
    {
      "name": "English",
      "level": "Fluent",
      "type": "fluent"
    },
    {
      "name": "Urdu",
      "level": "Native",
      "type": "native"
    },
    {
      "name": "Punjabi",
      "level": "Native",
      "type": "native"
    },
    {
      "name": "Arabic",
      "level": "Basic",
      "type": "basic"
    }
  ]
};