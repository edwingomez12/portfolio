import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main className="space-y-16 md:space-y-24 lg:space-y-32 pt-20"> {/* Added pt-20 to provide space for the fixed navbar */}
        <AboutMe />
        <WorkExperience />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}


export default App;
