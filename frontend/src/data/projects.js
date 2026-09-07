import { siteImages } from "./images";

export const projects = [
  {
    id: 1,
    title: "Smart Resume AI",
    description:
      "An AI-powered CV analysis platform designed for HR and recruiters to quickly analyze multiple resumes, extract key insights, and evaluate candidates efficiently. Helps companies streamline hiring by speeding up resume screening and improving decision-making.",
    tech: ["React", "Next.js", "Tailwind", "Node.js", "OpenAI API"],
    image: siteImages.smartResumeAi,
    liveUrl: "https://smart-resume-ai-eta.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/smart-resume-ai",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website showcasing my projects, technical skills, experience, and achievements. Designed with a clean UI and smooth user experience to effectively highlight my work as a Frontend Developer.",
    tech: ["React", "JavaScript","HTML", "CSS", "Responsive"],
    image:  siteImages.myportfolio,
    liveUrl: "https://portfolio-website-q9wp.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/portfolio-website",
    featured: true,
  },
   {
    id: 3,
    title: "Weather web App",
    description:
      "weather application using vanilla JavaScript and the OpenWeathe  rMap API. Features real-time weather data including temperature, humidity, wind speed, visibility, pressure, and sunrise/sunset times for any city worldwide. ",
    tech: ["JavaScript", "React","HTML", "CSS", "Responsive"],
    image:  siteImages.weatherapp,
    liveUrl: "https://weather-app-lyart-tau-75.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/weather-app",
    featured: true,
  },
   {
    id: 4,
    title: "Barber shop web App",
    description:
      "A fully responsive Barber Shop website built with HTML, CSS, Bootstrap 5, and JavaScript. Features smooth scroll navigation, services showcase, booking form, and Google Maps integration. ",
    tech: ["JavaScript", "Bootstrap","HTML", "CSS", "Responsive"],
    image:  siteImages.barbershop,
    liveUrl: "https://barber-shop-web-six.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/barber-shop-web.git",
    featured: true,
  },
   {
    id: 5,
    title: "PipelineIQ - Business Website",
    description:
      "A pixel-perfect clone of the PipelineIQ business website, built during my internship at Kiwilogics. Implemented using two approaches — vanilla HTML, CSS & JavaScript for core fundamentals, and React.js for a component-based, reusable architecture. Focused on responsive layouts, clean UI structuring, and accurate design replication. ",
    tech: ["React", "JavaScript", "HTML", "CSS", "Responsive"],
    image:  siteImages.pipeline,
    liveUrl: "https://kiwi-logics-pipe-line-m7wh.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/kiwi-logics-pipe-line",
    featured: true,
  },
  {
    id: 6,
    title: "Skilline Website ",
    description:"A responsive clone of the Skilline landing page, built during my internship at Kiwilogics using React.js and Tailwind CSS. Recreated from a Figma design with a component-based architecture and interactive UI elements.",
    tech: ["React", "JavaScript", "HTML", "Tailwind-CSS", "Responsive"],
    image:  siteImages.skilline,
    liveUrl: "https://skillie-kiwilogics.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/skillie-kiwilogics",
    featured: true,
  },
  {
    id: 7,
    title: "Library Management System",
    description:
      "A MernStacklibrary management platform with role-based access for admins and students. Admins can manage the book catalog, approve or reject borrow requests, track issued and returned books, and manage student accounts from a colorful, icon-driven dashboard. Students can browse the catalog, request to borrow books, track due dates, and manage their profile with a photo upload.",
    tech: ["MongoDB", "Vite", "Tailwind CSS", "Node.js", "Express", "React"],
    image: siteImages.LMS,
    liveUrl: "https://library-management-system-teal-nu.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/library-management",
    featured: true,
  },
  {
    id: 8,
    title: "Invoice Generator",
    description:
      "A MERN stack invoice management app that lets users create, customize, and manage professional invoices with ease. Supports itemized billing, client details, and downloadable invoices, helping freelancers and small businesses handle billing faster.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: siteImages.invoiceGenerator,
    liveUrl: "https://invoice-maker-iota-three.vercel.app/",
    githubUrl: "https://github.com/theirhasnain-eng/invoice-maker",
    featured: true,
  }
];
