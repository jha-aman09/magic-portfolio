import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aman",
  lastName: "Jha",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Analyst",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Schedule a Meeting</>,
  description: (
    <>
      Enter your email to start the scheduling process. I will send you a link to choose a time that works best for you.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jha-aman09",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aman--jha",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+918745037110",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:pjha78498@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data Analyst and builder</>,
  subline: (
    <>
      I'm Aman, a <InlineCode><b>Data Analyst</b></InlineCode> who crafts insights 
      <br/>and builds projects beyond work.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "Aman Kumar Jha.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Data Analyst with a passion for transforming complex data into actionable insights.
        My work spans data analysis, interactive dashboards, and the convergence of data and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ClearDekho Eyewear Pvt. Ltd.",
        timeframe: "July 2024 - August 2024",
        role: "Business Analyst Trainee",
        achievements: [
          <>
            Conducted data analysis to identify trends and provided recommendations for enhancing business operations.
          </>,
          <>
            Created dashboards in Excel and Power BI to monitor KPIs.
          </>,
          <>
            Worked with cross-functional teams to implement process optimization initiatives.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/DS/SF1.png",
            alt: "Customer Segmentation",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Prodigy InfoTech Pvt. Ltd.",
        timeframe: "April 2024 - May 2024",
        role: "Data Science Intern",
        achievements: [
          <>Conducted data analysis to identify trends and provided recommendations for enhancing business operations.</>,
          <>Created dashboards in Excel and Power BI to monitor KPIs.</>,
          <>Worked with cross-functional teams to implement process optimization initiatives</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Institute of Innovation in Technology and Management",
        description: <>Bachelor of Computer Applications</>,
      },
      {
        name: "Kamal Model Sr. Sec. School",
        description: <>Higher Secondary Certificate</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
