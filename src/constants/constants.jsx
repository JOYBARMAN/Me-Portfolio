import { FaStar, FaJsSquare, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql, SiRedis, SiElasticsearch, SiCelery, SiHtml5, SiCss3, SiBootstrap } from "react-icons/si";

export const projects = [
    {
        title: "Project Alpha",
        description: "A dynamic web application built with React and a custom API. Features include real-time data visualization and user authentication.",
        image: "https://www.techfunnel.com/wp-content/uploads/2019/07/Top-Benefits-of-ECommerce-for-Retailers-_-ECommerce-in-retail-1.png",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        liveLink: "#"
    },
    {
        title: "Design Studio Showcase",
        description: "A minimalist portfolio for a design firm, focusing on elegant typography and a grid-based layout. Animations enhance the user experience.",
        image: "https://www.resultfirst.com/wp-content/uploads/2024/04/Untitled-16-1024x576.png",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
        liveLink: "#"
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with a modern UI, shopping cart functionality, and secure payment integration.",
        image: "https://cdn.dribbble.com/userupload/9000434/file/original-903fac30a0a944a36dcfaeb29e373619.png?format=webp&resize=400x300&vertical=center",
        technologies: ["React", "Redux", "Firebase", "Stripe"],
        liveLink: "#"
    },
    {
        title: "Project Alpha",
        description: "A dynamic web application built with React and a custom API. Features include real-time data visualization and user authentication.",
        image: "https://www.techfunnel.com/wp-content/uploads/2019/07/Top-Benefits-of-ECommerce-for-Retailers-_-ECommerce-in-retail-1.png",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        liveLink: "#"
    },
    {
        title: "Design Studio Showcase",
        description: "A minimalist portfolio for a design firm, focusing on elegant typography and a grid-based layout. Animations enhance the user experience.",
        image: "https://www.resultfirst.com/wp-content/uploads/2024/04/Untitled-16-1024x576.png",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
        liveLink: "#"
    },
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with a modern UI, shopping cart functionality, and secure payment integration.",
        image: "https://cdn.dribbble.com/userupload/9000434/file/original-903fac30a0a944a36dcfaeb29e373619.png?format=webp&resize=400x300&vertical=center",
        technologies: ["React", "Redux", "Firebase", "Stripe"],
        liveLink: "#"
    },
];

export const experiences = [
    {
        role: "Software Developer ( Backend )",
        company: "Repliq Limited",
        duration: "May 2023 - Present",
        description: "Develop and maintain scalable backend systems using Python, Django, and Django Rest Framework (DRF). Lead a team of engineers, ensuring efficient project execution and smooth collaboration. Implemented WebSocket for real-time communication, Redis for caching, and Elasticsearch for advanced search functionality. Worked on AI-driven solutions and integrated complex systems to enhance platform capabilities. Optimized database performance and improved overall application scalability and reliability."
    },
    {
        role: "Junior Frontend Developer",
        company: "FreshoSoft Limited",
        duration: "November 2021 - November 2022",
        description: "Developed and designed responsive web applications using React and JavaScript. Implemented APIs and ensured seamless integration with backend services. Collaborated with clients to understand and meet their requirements. Optimized UI/UX for better performance, accessibility, and overall user experience."
    },
];

export const productionProjects = [
    {
        title: "Notifications WebSocket Packege",
        role: "Back-End Developer",
        duration: "2024",
        tasks: [
            "Developed a full-featured Django package providing both WebSocket and REST API notifications.",
            "Implemented real-time notifications using Django Channels and Redis for scalable message broadcasting.",
            "Built and optimized REST API endpoints with Django Rest Framework (DRF) for notification management.",
            "Configured ASGI, middleware, and routing to seamlessly handle HTTP and WebSocket connections.",
            "Performed thorough testing, optimization, and documentation to ensure reliability and easy integration into other Django projects."
        ],
        liveLink: "https://pypi.org/project/django-notifications-websocket/"
    },
    {
        title: "ATS Software Solutions",
        role: "Back-End Developer",
        duration: "2023 - 2025",
        tasks: [
            "Designed, developed, and maintained the entire backend architecture of the platform.",
            "Built and integrated robust APIs to support all frontend and external services.",
            "Performed thorough performance testing, optimization, and ensured system scalability and reliability.",
            "Handled all backend-related tasks, including database design, server management, and security implementation."
        ],
        liveLink: "https://www.prohr.io/"
    },
    {
        title: "B2B Medicine E-commerce",
        role: "Back-End Developer",
        duration: "2023 - 2024",
        tasks: [
            "Developed and maintained the entire backend system, including database design and server-side logic.",
            "Built robust APIs to support frontend operations and third-party integrations.",
            "Optimized backend performance and conducted thorough testing to ensure reliability and scalability.",
        ],
        liveLink: "https://healthos.io/"
    },
    {
        title: "Video Downloader & MP3 Converter App ( Linux )",
        role: "Full-Stack / Backend Developer",
        duration: "2025",
        tasks: [
            "Developed a Ubuntu Linux application to download videos from user-provided links and convert them to MP3 format.",
            "Implemented robust backend logic for handling video processing, format conversion, and file management.",
            "Optimized download and conversion performance for faster processing and reduced errors.",
            "Designed a user-friendly interface for seamless interaction on Linux systems.",
            "Maintained the project on GitHub, ensuring clear documentation and ease of use for other developers."
        ],
        liveLink: "https://github.com/JOYBARMAN/youtube_downloader/tree/downloder_v1"
    },
    {
        title: "Scalable Real-Time Chat Backend",
        role: "Back-End Developer",
        duration: "2024 - present",
        tasks: [
            "Developed the complete backend for a real-time chat application with 1-to-1 and group messaging functionality, similar to WhatsApp.",
            "Implemented REST APIs using Django Rest Framework (DRF) to handle user authentication, chat management, and message storage.",
            "Integrated WebSocket functionality with Django Channels for real-time messaging and notifications.",
            "Optimized backend performance, ensuring scalability and low latency for multiple simultaneous users.",
            "Managed database schema design, message history, and data integrity for seamless chat operations."
        ],
        liveLink: "https://github.com/JOYBARMAN/drf_chat_app"
    }
];

export const skillCategories = ["All", "Languages", "Backend", "Frontend", "Database", "Tools", "Development", "OS", "Leadership"];

export const skills = [
    // Programming Languages
    { name: "Python", category: "Languages", rating: 5, icon: <FaPython className="text-blue-500 w-10 h-10" /> },
    { name: "JavaScript", category: "Languages", rating: 5, icon: <FaJsSquare className="text-yellow-500 w-10 h-10" /> },
    { name: "C", category: "Languages", rating: 3, icon: <FaStar className="text-gray-500 w-10 h-10" /> },

    // Frameworks
    { name: "Django", category: "Backend", rating: 5, icon: <SiDjango className="text-green-700 w-10 h-10" /> },
    { name: "Django REST Framework", category: "Backend", rating: 5, icon: <SiDjango className="text-green-700 w-10 h-10" /> },
    { name: "React JS", category: "Frontend", rating: 5, icon: <FaReact className="text-cyan-500 w-10 h-10" /> },

    // Tools & Technologies
    { name: "WebSocket", category: "Tools", rating: 4, icon: <FaStar className="text-gray-500 w-10 h-10" /> },
    { name: "Elasticsearch", category: "Tools", rating: 4, icon: <SiElasticsearch className="text-blue-600 w-10 h-10" /> },
    { name: "Redis", category: "Tools", rating: 4, icon: <SiRedis className="text-red-500 w-10 h-10" /> },
    { name: "Celery", category: "Tools", rating: 4, icon: <SiCelery className="text-purple-600 w-10 h-10" /> },
    { name: "Docker", category: "Tools", rating: 4, icon: <FaDocker className="text-sky-500 w-10 h-10" /> },
    { name: "Unit / Py / Async Testing", category: "Tools", rating: 4, icon: <FaStar className="text-gray-500 w-10 h-10" /> },

    // Database
    { name: "PostgreSQL", category: "Database", rating: 4, icon: <SiPostgresql className="text-blue-700 w-10 h-10" /> },
    { name: "MySQL", category: "Database", rating: 3, icon: <SiMysql className="text-blue-600 w-10 h-10" /> },

    // Frontend / Web
    { name: "HTML", category: "Frontend", rating: 5, icon: <SiHtml5 className="text-orange-500 w-10 h-10" /> },
    { name: "CSS", category: "Frontend", rating: 5, icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
    { name: "Bootstrap", category: "Frontend", rating: 4, icon: <SiBootstrap className="text-purple-500 w-10 h-10" /> },

    // Software Development
    { name: "Agile & CI/CD", category: "Development", rating: 4, icon: <FaStar className="text-gray-500 w-10 h-10" /> },
    { name: "TDD", category: "Development", rating: 4, icon: <FaStar className="text-gray-500 w-10 h-10" /> },

    // OS
    { name: "Linux", category: "OS", rating: 5, icon: <FaStar className="text-gray-700 w-10 h-10" /> },
    { name: "Windows", category: "OS", rating: 4, icon: <FaStar className="text-blue-500 w-10 h-10" /> },

    // Leadership
    { name: "Team Leadership", category: "Leadership", rating: 4, icon: <FaStar className="text-gray-500 w-10 h-10" /> },
];


export const educations = [
    {
        degree: "B.Sc. in Software Engineering",
        institution: "Daffodil International University",
        duration: "2016 - 2020",
        description:
            "Specialized in software engineering and algorithms. Graduated with honors and top 5% of class.",
        certificateLink: "https://example.com/certificate.pdf"
    },
    {
        degree: "Machine Learning Foundations",
        institution: "University of Washington (Coursera)",
        duration: "2020",
        description:
            "Focused on machine learning, deep learning, and NLP. Completed thesis on transformer architectures.",
        certificateLink: "https://drive.google.com/file/d/1XBbFvZf0_BZWz3xSaWHwjfyJGDhwfojB/view?usp=sharing"
    }
];