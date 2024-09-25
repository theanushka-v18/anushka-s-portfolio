import cLogoImg from "../assets/c-logo.svg";
import cppLogoImg from "../assets/c++logo.svg";
import cssLogoImg from "../assets/css-logo.svg";
import expressjsLogoImg from "../assets/expressjs-logo.svg";
import firebaseLogoImg from "../assets/firebase-logo.svg";
import gitLogoImg from "../assets/git-logo.svg";
import githubLogoImg from "../assets/github-logo.svg";
import htmlLogoImg from "../assets/html-logo.svg";
import jsLogoImg from "../assets/js-logo.svg";
import monngodbLogoImg from "../assets/mongodb-logo.svg";
import muiLogoImg from "../assets/mui-logo.svg";
import nextjsLogoImg from "../assets/nextjs-logo.svg";
import nodejsLogoImg from "../assets/nodejs-logo.svg";
import reactRouterLogoImg from "../assets/react-router.svg";
import sqlLogoImg from "../assets/sql-logo.svg";
import tailwindcssLogoImg from "../assets/tailwindcss-logo.svg";
import tsLogoImg from "../assets/ts-logo.svg";
import vsCodeLogoImg from "../assets/vscode-logo.svg";
import reactjsLogoImg from "../assets/reactjs-logo.svg";
import reduxLogoImg from "../assets/redux-logo.svg";

const skillsImages = [
  vsCodeLogoImg,
  reactjsLogoImg,
  reduxLogoImg,
  tsLogoImg,
  tailwindcssLogoImg,
  sqlLogoImg,
  reactRouterLogoImg,
  nodejsLogoImg,
  nextjsLogoImg,
  muiLogoImg,
  monngodbLogoImg,
  jsLogoImg,
  htmlLogoImg,
  githubLogoImg,
  gitLogoImg,
  firebaseLogoImg,
  expressjsLogoImg,
  cssLogoImg, 
  cppLogoImg,
  cLogoImg
];

import mongodbLogoImg from "../assets/mongodb-logo.svg";
const Skills_Certifications = () => {
  return (
    <div className="skills-certifications-container">
      <h2>SKILLS & CERTIFICATIONS</h2>
      <div className="skills-container">
        <div className="skills">
          {
            skillsImages.map((skillImage) => {
              return (
                <div>
                  <img src={skillImage} alt="skill image" />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="certifications"></div>
    </div>
  );
};

export default Skills_Certifications;
