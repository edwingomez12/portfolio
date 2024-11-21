
  
  function Projects() {
    const projects = [
      {
        title: "BudgetApp",
        description: "A budgeting tool that allows users to track transactions and generate monthly statements by uploading a CSV file containing transactions for the year. Built with React and .NET 6.",
        link: "#"
      },
      {
        title: "Video Game Code Scraper/Discord Bot",
        description: "A Python script that scrapes codes for the Roblox game, checks for new codes daily, and sends updates to a Discord server.",
        link: "#"
      }
    ];
  
    return (
      <section id="projects" className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  