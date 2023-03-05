import Footer from "../../components/footer/Footer";
import { imageData } from "../../helper/imageData";
import ProjectCards from "../../components/ProjectCards";
import "./Projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects__bio-image">
        <h1>My Projects</h1>
      </div>

      <main className="projects">
        <div className="projects-items">
          {imageData.map((image, index) => (
            <ProjectCards image={image.image} alt={index} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
