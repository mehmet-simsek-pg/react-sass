import "../pages/projects/Projects.scss"

const ProjectCards = ({ image, alt }) => {
  return (
    <div className="projects__item">
      <img src={image} alt={alt} />
    </div>
  );
};

export default ProjectCards;
