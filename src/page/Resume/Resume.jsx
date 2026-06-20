'use client';

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Header */}
        <header className="border-b pb-4 mb-6 flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Atikur Rahman</h1>
            <p className="text-lg">Frontend Developer</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="mt-2 text-sm text-gray-600 font-medium">
            <p>foysalatik33@gmail.com</p>
            <p>(+88) 01822988250</p>
            <p className="mt-1">
              <a href="https://github.com/atikurrahman33" className="text-blue-600 hover:underline mr-4">GitHub</a>
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

          {/* Job 2 */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Information Secretary, IEEE GUB Student Branch</h3>
            <p className="text-gray-600 text-sm">May 2025 – Present</p>
            <ul className="list-disc ml-5 text-sm mt-2 text-gray-700">
              <li>Managed official communication, announcements, and documentation for the student branch.</li>
              <li>Coordinated event-related updates and supported smooth execution of technical and social programs.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Volunteer, STI 2025 (Science, Technology & Innovation Summit)</h3>
            <ul className="list-disc ml-5 text-sm mt-2 text-gray-700">
              <li>Assisted multiple committees including Food, Publicity, and Transport, ensuring efficient event coordination.</li>
              <li>Helped manage guests, logistics, and on-site tasks to maintain smooth event operations.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Projects</h2>
          <div className="space-y-6 text-sm">

            {/* IEEE Website */}
            <div>
              <h3 className="font-semibold text-gray-800">IEEE Website</h3>
              <p>
                I am currently contributing to the IEEE Website project – a Next.js and Tailwind CSS-based platform for 
                managing and showcasing IEEE events and activities.
              </p>
              <div className="flex justify-between mt-2">
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Modern UI with Next.js & Tailwind CSS</li>
                  <li>Event management with details</li>
                  <li>Dynamic content with context-based state</li>
                </ul>
                <div className="flex gap-2 font-semibold">
                  <a href="https://ieeegub.vercel.app/" className="text-blue-600 hover:underline">Live</a>
                </div>
              </div>
            </div>

            {/* Student and Class Management */}
            <div>
              <h3 className="font-semibold text-gray-800">Student and Class Management</h3>
              <p>
                A platform to manage students, classes, and course enrollments with secure authentication and role-based dashboards.
              </p>
              <div className="flex justify-between mt-2">
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Secure login/signup with Firebase</li>
                  <li>Teacher role (Admin Approval)</li>
                  <li>Course enrollment & payments</li>
                  <li>Role-based dashboards</li>
                </ul>
                <div className="flex gap-2 font-semibold">
                  <a href="https://github.com/atikurrahman33/Student-and-Class-Management-client" className="text-blue-600 hover:underline">Client</a>
                  <span>-</span>
                  <a href="https://github.com/atikurrahman33/Student-and-Class-Management-server" className="text-blue-600 hover:underline">Server</a>
                  <span>-</span>
                  <a href="https://edumentor12.netlify.app/" className="text-blue-600 hover:underline">Live</a>
                </div>
              </div>
            </div>

            {/* Community Food Sharing Platform */}
            <div>
              <h3 className="font-semibold text-gray-800">Community Food Sharing Platform</h3>
              <p>
                A web platform to facilitate food donation, tracking, and pickup, connecting donors with those in need.
              </p>
              <div className="flex justify-between mt-2">
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Food donation management</li>
                  <li>Track donations & requests</li>
                  <li>Request handling & food pickup system</li>
                </ul>
                <div className="flex gap-2 font-semibold">
                  <a href="https://github.com/atikurrahman33/Food-Sharing-Client" className="text-blue-600 hover:underline">Client</a>
                  <span>-</span>
                  <a href="https://github.com/atikurrahman33/Food-Sharing-server" className="text-blue-600 hover:underline">Server</a>
                  <span>-</span>
                  <a href="https://foodsharing.netlify.app/" className="text-blue-600 hover:underline">Live</a>
                </div>
              </div>
            </div>

            {/* Brand Shop */}
            <div>
              <h3 className="font-semibold text-gray-800">Brand Shop</h3>
              <p>
                An e-commerce platform for browsing brands, managing personal car listings, and user authentication.
              </p>
              <div className="flex justify-between mt-2">
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>User authentication (Google/email)</li>
                  <li>Car management (add, update, delete own cars)</li>
                  <li>Brand browsing for all users</li>
                </ul>
                <div className="flex gap-2 font-semibold">
                  <a href="https://github.com/atikurrahman33/Simple-Brand-Client" className="text-blue-600 hover:underline">Client</a>
                  <span>-</span>
                  <a href="https://github.com/atikurrahman33/Simple-Brand-Server" className="text-blue-600 hover:underline">Server</a>
                  <span>-</span>
                  <a href="https://65380c5660e984007a96edf3--quiet-boba-078908.netlify.app/" className="text-blue-600 hover:underline">Live</a>
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
