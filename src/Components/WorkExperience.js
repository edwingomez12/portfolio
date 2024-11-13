function WorkExperience() {
    const experiences = [
      {
        role: "Software Development Engineer",
        company: "GM Financial",
        duration: "July 2021 - Present",
        description: "Worked on the credit team, building and optimizing software solutions to streamline loan processes and improve user experience. Leveraged .NET and React for full-stack development, ensuring high performance and reliability."
      },
      {
        role: "Application Developer",
        company: "IBM",
        duration: "June 2019 - July 2021",
        description: "Collaborated with AT&T on developing their Enterprise Infrastructure Solutions (EIS) application. Focused on developing robust backend services and integrating them with user interfaces."
      },
      {
        role: "Software Developer Contractor",
        company: "Ambit Energy",
        duration: "September 2018 - January 2019",
        description: "Developed API endpoints and worked on frontend features using Angular and Vue.js for financial applications. Enhanced system reliability and upgraded legacy projects to newer .NET frameworks."
      }
    ];
  
    return (
      <section id="work-experience" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">{experience.role}</h3>
                <p className="text-gray-600 italic mb-2">{experience.company} | {experience.duration}</p>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default WorkExperience;
  