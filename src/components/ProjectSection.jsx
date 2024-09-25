import typingTestImg from '../assets/typing-test-logo.png';
import githubUserFinderImg from '../assets/github-user-finder-logo.png';
import userRecordsImg from '../assets/user-records-logo.png';
import apodOfNasaImg from '../assets/apodofnasa-logo.png';
import rockPaperScissorImg from '../assets/rock-paper-scissor-logo.png';
import ticTacToeImg from '../assets/tic-tac-toe-logo.png';
import todoAppImg from '../assets/todo-app-logo.png';
import portfolioImg from '../assets/portfolioImg.png';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        imgURL : portfolioImg,
        title : 'Portfolio',
        gitRepoURL : 'https://github.com/theanushka-v18/anushka-s-portfolio',
        liveURL : 'https://anushka-s-portfolio.vercel.app/',
        techstack : ['reactjs', 'material ui']
    },
    {
        imgURL : typingTestImg,
        title : 'Typing Test',
        gitRepoURL : 'https://github.com/theanushka-v18/Typing-Test',
        liveURL : 'https://typing-test-theanushka-v18.vercel.app/',
        techstack : ['reactjs', 'material ui', 'firebase', 'styled-components', 'react-router-dom', 'chartjs']
    },
    {
        imgURL : githubUserFinderImg,
        title : 'Github User Finder',
        gitRepoURL : 'https://github.com/theanushka-v18/Github-User-Finder',
        liveURL : 'https://github-user-finder-theanushka-v18.vercel.app/',
        techstack : ['reactjs', 'axios']
    },
    {
        imgURL : userRecordsImg,
        title : 'User Records',
        gitRepoURL : 'https://github.com/theanushka-v18/User-Records',
        liveURL : 'https://user-records.vercel.app/',
        techstack : ['html', 'javascript', 'bootstrap']
    },
    {
        imgURL : apodOfNasaImg,
        title : 'NASA Apod',
        gitRepoURL : 'https://github.com/theanushka-v18/F3-ModuleTest',
        liveURL : 'https://apodofnasa.vercel.app/',
        techstack : ['html', 'css', 'javascript']
    },
    {
        imgURL : rockPaperScissorImg,
        title : 'Rock, Paper & Scissor',
        gitRepoURL : 'https://github.com/theanushka-v18/Rock-Paper-Scissor-Game',
        liveURL : 'https://rock-paper-scissor-game-anushka.vercel.app/',
        techstack : ['html', 'css', 'javascript']
    },
    {
        imgURL : ticTacToeImg,
        title : 'Tic, Tac, Toe',
        gitRepoURL : 'https://github.com/theanushka-v18/Samta.ai-Tic-Tac-Toe-CA',
        liveURL : 'https://samta-ai-tic-tac-toe-ca.vercel.app/',
        techstack : ['reactjs', 'tailwind css']
    },
    {
        imgURL : todoAppImg,
        title : 'Todo App',
        gitRepoURL : 'https://github.com/theanushka-v18/Samta.ai-Todo-CA',
        liveURL : 'https://samta-ai-todo-ca.vercel.app/',
        techstack : ['reactjs', 'tailwind css']
    }
]

const ProjectSection = () => {
  return (
    <div className="project-section-container">
        <h2>PROJECTS</h2>
        <div className="projects">
            {
                projectsData.map((project, idx) => {
                    return (
                        <ProjectCard projectData={project} key={idx} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectSection
