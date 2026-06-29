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
      "yearsExp": "3+",
      "deployments": 16,
      "certs": 14
    },
    "topSkills": ["C#", ".NET 8", "ASP.NET", "Docker", "SQL Server"]
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
      "categories": ["enterprise", "web"],
      "featured": true,
      "description": "Enterprise IoT platform managing smart AC systems. Multi-layered ASP.NET Web API with RESTful APIs, JWT RBAC, and MQTT integration for real-time remote control and automated scheduling.",
      "tags": ["C#", "ASP.NET Web API", "MQTT", "EF Core", "JWT"],
      "github": "",
      "demo": ""
    },
    {
      "title": "DevPort — Cloud Portfolio App",
      "icon": "fab fa-microsoft",
      "categories": ["web"],
      "featured": true,
      "description": "Cloud web app showcasing user portfolios. ASP.NET Core, Blazor, EF Core, ASP.NET Identity, RESTful APIs, caching, and CI/CD pipeline deploying to Azure via GitHub Actions.",
      "tags": ["ASP.NET Core", "Blazor", "EF Core", "Azure", "CI/CD"],
      "github": "",
      "demo": ""
    },
    {
      "title": "SecondChance — Exchange Platform",
      "icon": "fas fa-recycle",
      "categories": ["web"],
      "featured": true,
      "description": "Node.js/MongoDB backend enabling users to exchange household items. Secure RESTful APIs for listings, search, and sentiment analysis, with JWT auth. Containerized and deployed via Docker, Kubernetes, and IBM Cloud CI/CD.",
      "tags": ["Node.js", "MongoDB", "Docker", "Kubernetes", "IBM Cloud"],
      "github": "",
      "demo": ""
    },
    {
      "title": "Little Lemon — Reservation App",
      "icon": "fas fa-utensils",
      "categories": ["web"],
      "featured": false,
      "description": "Full-stack restaurant reservation system. Django REST Framework backend with MySQL and Djoser auth. React frontend with React Router and useReducer for dynamic form state management.",
      "tags": ["Django", "DRF", "React", "MySQL", "Djoser"],
      "github": "",
      "demo": ""
    },
    {
      "title": "GeoHealth Tracker",
      "icon": "fas fa-map-marked-alt",
      "categories": ["web"],
      "featured": false,
      "description": "Single-page dashboard for exploring health facilities using live OpenStreetMap Overpass API data. Interactive mapping with marker clustering for high performance, dynamic filtering, and real-time statistics.",
      "tags": ["Vanilla JS", "Leaflet.js", "Tailwind CSS", "OpenStreetMap"],
      "github": "",
      "demo": ""
    },
    {
      "title": "E-commerce DevOps PoC",
      "icon": "fas fa-shopping-cart",
      "categories": ["web"],
      "featured": false,
      "description": "Modern Django MVT e-commerce PoC replacing a legacy monolith. Full CI/CD pipeline with GitHub Actions and Docker, with automated testing and zero-downtime migration to Render.",
      "tags": ["Django", "Docker", "GitHub Actions", "CI/CD", "Render"],
      "github": "",
      "demo": ""
    },
    {
      "title": "WIP Analysis Tool",
      "icon": "fas fa-chart-line",
      "categories": ["enterprise", "desktop"],
      "featured": false,
      "description": "C# WinForms application using EPPlus and SQL Server to import Excel data (catalog, forecast, POs, stock), automate WIP calculations with data validation, and export accurate reports — replacing manual DTS processes.",
      "tags": ["C#", "WinForms", "EPPlus", "SQL Server"],
      "github": "",
      "demo": ""
    },
    {
      "title": "Tracket — Ticketing System",
      "icon": "fas fa-ticket-alt",
      "categories": ["enterprise", "web"],
      "featured": false,
      "description": "Ticketing management system backend using .NET Core and EF Code-First. Led design and implementation of RESTful APIs supporting efficient workflows and seamless cross-system integration.",
      "tags": [".NET Core", "EF Code-First", "REST APIs", "SQL"],
      "github": "",
      "demo": ""
    },
    {
      "title": "TruckDestino — Fleet Management",
      "icon": "fas fa-truck",
      "categories": ["enterprise", "web"],
      "featured": false,
      "description": "Modernized a legacy Fleet Management System from Silverlight/SOAP to RESTful APIs. Resolved legacy bugs, enforced data consistency, and produced full API documentation for cross-team integration.",
      "tags": ["C#", ".NET", "REST APIs", "Legacy Migration"],
      "github": "",
      "demo": ""
    },
    {
      "title": "QuickBooks IIF Generator",
      "icon": "fas fa-file-invoice-dollar",
      "categories": ["enterprise", "desktop"],
      "featured": false,
      "description": "C# WinForms application automating conversion of SQL Server transactional data (Sales, Purchases, Items) into QuickBooks IIF import files — eliminating all manual export effort.",
      "tags": ["C#", "WinForms", "SQL Server", "EPPlus", "QuickBooks"],
      "github": "",
      "demo": ""
    },
    {
      "title": "GPMS — Garment Production",
      "icon": "fas fa-cogs",
      "categories": ["enterprise", "desktop"],
      "featured": false,
      "description": "Garment Production & Packing Management System. Designed a WCF Service Layer for decoupled communication and high-performance API transactions. Optimized EF queries with comprehensive unit testing.",
      "tags": ["C#", ".NET Framework", "WCF", "Entity Framework", "SQL Server"],
      "github": "",
      "demo": ""
    },
    {
      "title": "MEZBAN — Travel Platform (FYP)",
      "icon": "fas fa-bed",
      "categories": ["web"],
      "featured": false,
      "description": "Final Year Project. MEAN stack accommodation platform helping travelers find lodging based on location, availability, and nearby amenities via Google Places API, with scalable architecture and personalized recommendations.",
      "tags": ["MongoDB", "Express.js", "Angular", "Node.js", "Google Places API"],
      "github": "",
      "demo": ""
    },
    {
      "title": "Tracko IS — Vehicle Tracker",
      "icon": "fas fa-satellite",
      "categories": ["enterprise", "desktop", "web"],
      "featured": false,
      "description": "Vehicle Tracker Invoicing System. Developed Database-First RESTful APIs via ADO.NET and WinForms automation modules including a SIM lifecycle management tool. Resolved complex legacy bugs.",
      "tags": ["C#", ".NET", "ADO.NET", "WinForms", "SQL Server"],
      "github": "",
      "demo": ""
    },
    {
      "title": "Denim Labels Utility",
      "icon": "fas fa-tags",
      "categories": ["enterprise", "desktop"],
      "featured": false,
      "description": "WinForms desktop application using EPPlus to automate item-level denim label generation from Excel data, enabling multi-format exports (PDF, Word, Excel) and significantly reducing manual errors.",
      "tags": ["C#", ".NET", "WinForms", "EPPlus"],
      "github": "",
      "demo": ""
    },
    {
      "title": "Warehouse Management System",
      "icon": "fas fa-warehouse",
      "categories": ["enterprise", "web"],
      "featured": false,
      "description": "Backend for a WMS using Code-First approach in .NET. Designed APIs supporting seamless data integration and optimized for high-throughput warehouse operations.",
      "tags": [".NET", "EF Code-First", "REST APIs", "SQL Server"],
      "github": "",
      "demo": ""
    },
    {
      "title": "Terminal Management System",
      "icon": "fas fa-terminal",
      "categories": ["enterprise", "desktop"],
      "featured": false,
      "description": "Maintenance and optimization of a critical .NET Framework desktop application. Focused on resolving legacy bugs, code optimization, and improving stability for seamless business operation.",
      "tags": [".NET Framework", "C#", "WinForms", "Legacy Optimization"],
      "github": "",
      "demo": ""
    }
  ],

  "skills": [
    {
      "category": "Backend & .NET Ecosystem",
      "icon": "fas fa-server",
      "hoverColor": "cyan",
      "items": ["C#", ".NET Framework", ".NET Core", ".NET 8", "ASP.NET Web API", "Entity Framework", "ADO.NET", "REST APIs", "JWT", "MQTT", "WCF", "LINQ"]
    },
    {
      "category": "Frontend & Desktop",
      "icon": "fas fa-desktop",
      "hoverColor": "magenta",
      "items": ["Windows Forms (WinForms)", "Blazor", "React.js", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      "category": "Data, Cloud & DevOps",
      "icon": "fas fa-database",
      "hoverColor": "cyan",
      "items": ["SQL Server", "MongoDB", "MySQL", "PostgreSQL", "Python (Django)", "Node.js", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Azure", "IIS", "EPPlus"]
    }
  ],

  "certifications": [
    {
      "title": "Full Stack Developer: Front-End & Back-End",
      "issuer": "Meta",
      "date": "06/2025",
      "category": "meta",
      "credentialUrl": ""
    },
    {
      "title": "Full-Stack Engineer",
      "issuer": "Meta",
      "date": "02/2024",
      "category": "meta",
      "credentialUrl": ""
    },
    {
      "title": "Database Engineer",
      "issuer": "Meta",
      "date": "02/2024",
      "category": "meta",
      "credentialUrl": ""
    },
    {
      "title": "Back-End Developer",
      "issuer": "Meta",
      "date": "01/2024",
      "category": "meta",
      "credentialUrl": ""
    },
    {
      "title": "Front-End Developer",
      "issuer": "Meta",
      "date": "10/2023",
      "category": "meta",
      "credentialUrl": ""
    },
    {
      "title": "Front-End Development (Figma, Bootstrap & Git)",
      "issuer": "IBM",
      "date": "06/2025",
      "category": "ibm",
      "credentialUrl": ""
    },
    {
      "title": "Back-End Development",
      "issuer": "IBM",
      "date": "06/2025",
      "category": "ibm",
      "credentialUrl": ""
    },
    {
      "title": "JavaScript Backend Developer",
      "issuer": "IBM",
      "date": "06/2025",
      "category": "ibm",
      "credentialUrl": ""
    },
    {
      "title": "Full-Stack JavaScript Developer",
      "issuer": "IBM",
      "date": "08/2024",
      "category": "ibm",
      "credentialUrl": ""
    },
    {
      "title": "Full Stack Software Developer",
      "issuer": "IBM",
      "date": "02/2024",
      "category": "ibm",
      "credentialUrl": ""
    },
    {
      "title": "Full-Stack Developer",
      "issuer": "Microsoft",
      "date": "06/2025",
      "category": "ms",
      "credentialUrl": ""
    },
    {
      "title": "Back-End Developer",
      "issuer": "Microsoft",
      "date": "06/2025",
      "category": "ms",
      "credentialUrl": ""
    },
    {
      "title": "Front-End Developer",
      "issuer": "Microsoft",
      "date": "06/2025",
      "category": "ms",
      "credentialUrl": ""
    },
    {
      "title": "Project Management",
      "issuer": "Google",
      "date": "06/2025",
      "category": "google",
      "credentialUrl": ""
    }
  ]
};