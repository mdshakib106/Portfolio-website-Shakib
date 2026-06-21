'use client';

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Header */}
        <header className="border-b pb-4 mb-6 flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Md. Shakib Hossain</h1>
            <p className="text-lg">Frontend Developer</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="mt-2 text-sm text-gray-600 font-medium">
            <p>mdshakib24519@gmail.com</p>
            <p>(+88) 01645239918</p>
            <p className="mt-1">
              <a href="https://github.com/mdshakib106" className="text-blue-600 hover:underline mr-4">GitHub</a>
              <a href="https://atiksportfolio.vercel.app/" className="text-blue-600 hover:underline">Portfolio</a>
            </p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Professional Summary</h2>
          <p className="text-sm text-gray-700 leading-6">
            Detail-oriented Frontend Developer with hands-on experience building responsive, modern, and user-friendly web applications.
            Skilled in React.js, Next.js, Tailwind CSS, and component-based architecture. Strong understanding of UI/UX principles, 
            API integration, and state management. Passionate about writing clean code and creating smooth user experiences.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">Frontend</h3>
              <p>HTML5, CSS3, JavaScript, TailwindCSS, DaisyUI, NextUI, ReactJS, React Router, React Hook Form, React Query</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Backend</h3>
              <p>NodeJs, ExpressJs, Rest API, Firebase Auth, JWT (Basic), MongoDB</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Tools</h3>
              <p>VS Code, Git, Figma, Netlify, Vercel</p>
            </div>
          </div>
        </section>

        {/* Education & Certification */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Education & Certification</h2>

          <div className="text-sm mb-4">
            <p className="font-semibold">B.Sc. in Computer Science & Engineering</p>
            <p className="text-gray-600">Green University of Bangladesh (Feb 2022 – Feb 2026)</p>
            <p>CGPA: 3.31 / 4.00</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Complete Web Development Course</p>
            <p className="text-gray-600">Programming Hero</p>
          </div>
        </section>

        {/* Work Experience & Co-Curricular Activities */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Work Experience & Co-Curricular Activities</h2>

          {/* Job 1 */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Front-End Developer, 9AM Solution (Internship)</h3>
            <p className="text-gray-600 text-sm">Nov 2025 – Present</p>
            <ul className="list-disc ml-5 text-sm mt-2 text-gray-700">
              <li>Worked on developing and improving basic company websites using HTML, CSS, JavaScript, and React.js.</li>
              <li>Built small interactive components and pages using React.js and applied clean UI styling with Tailwind CSS.</li>
            </ul>
          </div>

  
        </section>

    {/* Projects */}
<section className="mb-6">
  <h2 className="text-xl font-semibold border-b pb-2 mb-3">Projects</h2>

  <div className="space-y-6 text-sm">

    {/* Event Management Platform */}
    <div>
      <h3 className="font-semibold text-gray-800">
        Event Management Platform
      </h3>

      <p>
        A modern event management platform designed to help users discover,
        explore, and manage events in real time with secure authentication
        and protected routes.
      </p>

      <div className="flex justify-between mt-2">
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>User Authentication with Firebase</li>
          <li>Private Routes for protected pages</li>
          <li>Real-Time Event Information</li>
          <li>Toast Notifications</li>
          <li>Responsive Design</li>
        </ul>

        <div className="flex gap-2 font-semibold">
          <a
            href="https://github.com/mdshakib106/event-management-system.git"
            className="text-blue-600 hover:underline"
          >
            Client
          </a>
          <span>-</span>
          <a
            href="https://event-management-system-shakib.netlify.app/"
            className="text-blue-600 hover:underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>

    {/* Emergency Service Directory */}
    <div>
      <h3 className="font-semibold text-gray-800">
        Emergency Service Directory
      </h3>

      <p>
        A responsive web application that provides quick access to essential
        emergency hotline services across Bangladesh.
      </p>

      <div className="flex justify-between mt-2">
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>One-click Call & Copy functionality</li>
          <li>Emergency service cards</li>
          <li>Call history tracking</li>
          <li>Favorite services management</li>
          <li>Responsive Design</li>
        </ul>

        <div className="flex gap-2 font-semibold">
          <a
            href="https://github.com/mdshakib106/B12-A5-Emergency-Hotline.git"
            className="text-blue-600 hover:underline"
          >
            Client
          </a>
          <span>-</span>
          <a
            href="https://mdshakib106.github.io/B12-A5-Emergency-Hotline/"
            className="text-blue-600 hover:underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>

    {/* Flower Shop */}
    <div>
      <h3 className="font-semibold text-gray-800">
        Flower Shop
      </h3>

      <p>
        A responsive flower shop website focused on modern UI design,
        seamless navigation, and a smooth shopping experience.
      </p>

      <div className="flex justify-between mt-2">
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>Fully responsive design</li>
          <li>Modern product showcase UI</li>
          <li>Easy navigation system</li>
          <li>Interactive forms</li>
          <li>Organized product sections</li>
        </ul>

        <div className="flex gap-2 font-semibold">
          <a
            href="https://github.com/mdshakib106/B12A02-Responsive-Flowers.git"
            className="text-blue-600 hover:underline"
          >
            Client
          </a>
          <span>-</span>
          <a
            href="https://mdshakib106.github.io/B12A02-Responsive-Flowers/"
            className="text-blue-600 hover:underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>

    {/* Influencer Products */}
    <div>
      <h3 className="font-semibold text-gray-800">
        Influencer Products
      </h3>

      <p>
        A modern e-commerce landing page designed for influencers and content
        creators to showcase popular products.
      </p>

      <div className="flex justify-between mt-2">
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>Responsive Design</li>
          <li>Modern Hero Section</li>
          <li>Product Collection Showcase</li>
          <li>Featured Products Section</li>
          <li>Clean Navigation Experience</li>
        </ul>

        <div className="flex gap-2 font-semibold">
          <a
            href="https://github.com/mdshakib106/influencer-gear.git"
            className="text-blue-600 hover:underline"
          >
            Client
          </a>
          <span>-</span>
          <a
            href="https://mdshakib106.github.io/influencer-gear/"
            className="text-blue-600 hover:underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>

  </div>
</section>
        {/* Languages */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Languages</h2>
          <p className="text-sm text-gray-600">
            Fluent in <span className="font-medium">Bangla</span>, full working knowledge of <span className="font-medium">English</span>, and good understanding of <span className="font-medium">Hindi</span>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
