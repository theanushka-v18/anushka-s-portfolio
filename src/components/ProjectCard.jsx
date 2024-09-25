import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProjectCard = ({ projectData }) => {
  return (
    <div className="project-card-container">
      <div className="project-image">
        <img src={projectData.imgURL} alt="project image" />
        <div className="overlay">
          <div className="overlay-text">
            {projectData.techstack.map((tech, idx) => {
                return (
                    <span key={idx}>{tech}</span>
                )
            })}
          </div>
        </div>
      </div>
      <div className="project-links-title">
        <p>{projectData.title}</p>
        <div className="project-links">
          <a href={projectData.gitRepoURL} target="_blank">
            {" "}
            <GitHubIcon />{" "}
          </a>
          <a href={projectData.liveURL} target="_blank">
            {" "}
            <VisibilityIcon />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
