import codePicture from '../Images/codepicture.png'

function About() {
    return (
      <section id="about" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img
                src={codePicture} 
                alt="Your Name"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-gray-700">
              <p className="mb-4">
                Edwin Gomez a passionate Software Developer with experience in building scalable and user-friendly applications. I love solving complex problems, and continuously learning new technologies to enhance my skills.
              </p>
              <p className="mb-4">
                My expertise includes working with modern web frameworks, backend technologies, and cloud services. I'm always eager to take on new challenges and contribute to projects that make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  