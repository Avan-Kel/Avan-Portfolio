import { notFound } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    title: "Front End Engineering Encyclopedia Documentation",
    date: "Nov 15, 2025",
    author: "KC",
    category: "Web Development",
    image: "/front-end.jpg",
    description:
      "A deep dive into the fundamentals and important highlights in Front End Engineering.",
    slug: "front-end-pedia",
    content: `
      <h2>Introduction</h2>
<p>
Front End Engineering focuses on everything users see, touch, and interact with on the web. 
It blends programming, UI/UX principles, accessibility standards, and performance optimization 
to create seamless digital experiences. A Front End Engineer transforms product concepts into 
real, interactive interfaces.
</p>

<h2>Core Responsibilities</h2>
<ul>
  <li>Building responsive user interfaces</li>
  <li>Converting UI/UX designs into working components</li>
  <li>Implementing client-side logic and interactions</li>
  <li>Optimizing performance and loading speed</li>
  <li>Ensuring cross-browser and cross-device compatibility</li>
  <li>Maintaining accessibility (WCAG standards)</li>
</ul>

<h2>Fundamental Languages</h2>
<h3>HTML (Structure)</h3>
<p>
HTML defines the foundational layout and semantics of any web page. It ensures the correct 
hierarchical structure and accessibility of content.
</p>

<h3>CSS (Presentation)</h3>
<p>
CSS controls styling, layout, animations, responsiveness, and theme systems. Frameworks like 
Tailwind CSS and Bootstrap accelerate development.
</p>

<h3>JavaScript (Interactivity)</h3>
<p>
JavaScript drives all dynamic behavior on the front end — events, animations, API calls, 
state logic, and UI rendering.
</p>

<h2>Modern Tools & Frameworks</h2>
<ul>
  <li><strong>React.js</strong> — component-based UI architecture</li>
  <li><strong>Next.js</strong> — full-stack React framework with routing, SSR, SSG</li>
  <li><strong>TypeScript</strong> — adds static typing for safer, predictable code</li>
  <li><strong>Tailwind CSS</strong> — utility-first styling</li>
  <li><strong>Redux / Zustand / Context API</strong> — state management</li>
  <li><strong>Vite</strong> — ultra-fast front-end tooling</li>
</ul>

<h2>Performance Optimization</h2>
<p>Key techniques include:</p>
<ul>
  <li>Lazy-loading components</li>
  <li>Code-splitting and bundling</li>
  <li>Compressing and optimizing images</li>
  <li>Pre-fetching and caching API data</li>
  <li>Minimizing JavaScript payload</li>
</ul>

<h2>Accessibility Essentials</h2>
<ul>
  <li>Proper semantic HTML</li>
  <li>Keyboard navigability</li>
  <li>Contrast and readable typography</li>
  <li>Screen reader support (ARIA roles)</li>
</ul>

<h2>Conclusion</h2>
<p>
Front End Engineering is an evolving discipline that merges creativity with technical skill. 
Mastering it means understanding how people think and how interfaces behave, then building 
experiences that feel effortless.
</p>

    `,
  },
  {
    title: "Back End Encyclopedia Documentation",
    date: "Nov 15, 2025",
    author: "KC",
    category: "Web Development",
    image: "/back-end.jpg",
    description:
      "Everything you need to understand the foundations and workflow of Back End Engineering.",
    slug: "back-end-pedia",
    content: `
      <h2>Introduction</h2>
<p>
Back End Engineering powers everything that happens behind the scenes in a web application. 
It handles data management, authentication, server logic, performance, and communication 
between the database and the front end.
</p>

<h2>Core Responsibilities</h2>
<ul>
  <li>Designing and building server-side logic</li>
  <li>Creating and managing APIs</li>
  <li>Handling databases and storage systems</li>
  <li>Implementing authentication & authorization</li>
  <li>Optimizing backend performance and scalability</li>
  <li>Integrating external services and microservices</li>
</ul>

<h2>Fundamental Languages & Backend Runtimes</h2>
<ul>
  <li><strong>Node.js</strong> — JavaScript runtime for backend services</li>
  <li><strong>Python</strong> (FastAPI, Django, Flask)</li>
  <li><strong>Go</strong> — highly scalable, fast API services</li>
  <li><strong>Java</strong> / <strong>Spring</strong></li>
  <li><strong>PHP</strong> / Laravel</li>
</ul>

<h2>Databases</h2>
<h3>SQL Databases</h3>
<p>Structured and relational systems:</p>
<ul>
  <li>PostgreSQL</li>
  <li>MySQL</li>
  <li>SQL Server</li>
</ul>

<h3>NoSQL Databases</h3>
<p>Flexible, schema-less storage:</p>
<ul>
  <li>MongoDB</li>
  <li>Firebase</li>
  <li>Redis</li>
</ul>

<h2>APIs & Communication</h2>
<ul>
  <li><strong>REST APIs</strong> — traditional web API architecture</li>
  <li><strong>GraphQL</strong> — query-based, flexible data fetching</li>
  <li><strong>WebSockets</strong> — real-time communication</li>
  <li><strong>gRPC</strong> — fast binary RPC for microservices</li>
</ul>

<h2>Authentication & Security</h2>
<ul>
  <li>JWT-based authentication</li>
  <li>OAuth and SSO</li>
  <li>Password hashing (bcrypt, argon2)</li>
  <li>Input validation & sanitization</li>
  <li>Rate limiting & IP filtering</li>
</ul>

<h2>Backend Architecture Patterns</h2>
<ul>
  <li>MVC (Model-View-Controller)</li>
  <li>Microservices architecture</li>
  <li>Monolithic systems</li>
  <li>Event-driven systems</li>
  <li>Serverless functions (Lambda, Vercel, Cloudflare)</li>
</ul>

<h2>DevOps & Deployment</h2>
<ul>
  <li>Docker containers</li>
  <li>CI/CD pipelines</li>
  <li>Load balancing & autoscaling</li>
  <li>Reverse proxies (Nginx, Traefik)</li>
</ul>

<h2>Conclusion</h2>
<p>
Back End Engineering forms the backbone of every successful application. It ensures reliability, 
security, and the smooth delivery of data to the user interface.
</p>

    `,
  },
  {
    title: "Full Stack Engineering Encyclopedia Documentation",
    date: "Nov 20, 2025",
    author: "KC",
    category: "Web Development",
    image: "/fullstack.webp",
    description:
      "A complete breakdown of Full Stack Engineering concepts, tools, and architecture.",
    slug: "full-stack-pedia",
    content: `
     <h2>Introduction</h2>
<p>
Full Stack Engineering combines both Front End and Back End disciplines, enabling developers 
to build complete applications from database to UI. A Full Stack Engineer understands how 
systems connect, communicate, and scale across the entire software lifecycle.
</p>

<h2>What Full Stack Really Means</h2>
<ul>
  <li>Proficiency in both front end and back end languages</li>
  <li>Ability to design user interfaces and system architecture</li>
  <li>Managing databases, APIs, and deployments</li>
  <li>Connecting client-side logic to server-side systems</li>
</ul>

<h2>Core Technologies</h2>
<h3>Front End</h3>
<ul>
  <li>HTML, CSS, JavaScript</li>
  <li>React / Next.js</li>
  <li>Tailwind CSS</li>
  <li>TypeScript</li>
</ul>

<h3>Back End</h3>
<ul>
  <li>Node.js</li>
  <li>Express or Fastify</li>
  <li>Python (FastAPI)</li>
  <li>PostgreSQL / MongoDB</li>
</ul>

<h2>API Development</h2>
<p>
Full Stack Engineers build and consume APIs. They must understand:
</p>
<ul>
  <li>REST architecture</li>
  <li>GraphQL schemas and resolvers</li>
  <li>Authentication layers</li>
  <li>Server-side input validation</li>
</ul>

<h2>Systems & Infrastructure Knowledge</h2>
<ul>
  <li>Git version control</li>
  <li>Package management (npm, pnpm, yarn)</li>
  <li>Docker and container orchestration</li>
  <li>CI/CD workflows</li>
  <li>Cloud hosting (Vercel, AWS, DigitalOcean)</li>
</ul>

<h2>Application Architecture</h2>
<ul>
  <li>Monolith vs Microservices</li>
  <li>Component-based UI design</li>
  <li>Database schema planning</li>
  <li>API-layer separation</li>
  <li>Authentication & state management</li>
</ul>

<h2>Best Practices</h2>
<ul>
  <li>Write clean, reusable code</li>
  <li>Use TypeScript for reliability</li>
  <li>Document APIs and components</li>
  <li>Optimize both frontend and backend performance</li>
  <li>Implement tests for stability</li>
</ul>

<h2>Conclusion</h2>
<p>
Full Stack Engineers are versatile and adaptable. They bridge the gap between user experience 
and server infrastructure, ensuring every aspect of an application works harmoniously.
</p>

    `,
  },
  {
    title: "Cyber Security Encyclopedia Documentation",
    date: "Nov 15, 2025",
    author: "KC",
    category: "Web Security",
    image: "/cyber.webp",
    description: "Coming Soon...",
    slug: "cyber-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
  {
    title: "Dev-Ops Encyclopeida Documentation",
    date: "Nov 10, 2025",
    author: "KC",
    category: "Web Developement",
    image: "/dev-ops.jpg",
    description: "Coming Soon...",
    slug: "dev-ops-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
  {
    title: "Mobile Engineering Encyclopeida Documentation",
    date: "Nov 10, 2025",
    author: "KC",
    category: "Web Developement",
    image: "/mobile.png",
    description: "Coming Soon...",
    slug: "mobile-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
  {
    title: "Software Engineering Encyclopeida Documentation",
    date: "Nov 10, 2025",
    author: "KC",
    category: "Web Developement",
    image: "/software.jpg",
    description: "Coming Soon...",
    slug: "software-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
  {
    title: "Hardware Engineering Encyclopeida Documentation",
    date: "Nov 10, 2025",
    author: "KC",
    category: "Electronics Developement",
    image: "/hardware.jpg",
    description: "Coming Soon...",
    slug: "hardware-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
  {
    title: "Mechanical Engineering Encyclopeida Documentation",
    date: "Nov 10, 2025",
    author: "KC",
    category: "Industrial Developement",
    image: "/mechanic.jpg",
    description: "Coming Soon...",
    slug: "mechanic-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
  {
    title: "Aero-Space ENgineering Encyclopeida Documentation",
    date: "Nov 10, 2025",
    author: "KC",
    category: "Industrial Developement",
    image: "/space.jpg",
    description: "Coming Soon...",
    slug: "Aero-space-pedia",
    content: `
      <h2>Introduction</h2>
      <p>Coming Soon...</p>
    `,
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ⬇️ Next.js 15 requires this
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <section className="py-24 px-5 md:px-10 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Header Image */}
        <div className="relative w-full h-80 md:h-[420px] mb-10 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Category + Date */}
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
          {post.title}
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-4 mb-12">
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {post.author}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Author</p>
          </div>
        </div>

        {/* Content */}
        <article
          className="
        prose prose-lg 
        dark:prose-invert 
        max-w-none 
        prose-headings:font-bold 
        prose-img:rounded-xl 
        prose-a:text-blue-600 
        dark:prose-a:text-blue-400 
        prose-pre:bg-gray-900 
        prose-code:text-pink-600 
      "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thanks for reading. More articles coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
