import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Notes4u",
    desc: "A personalized notes app using Next.js, Firebase & MongoDB, with Gemini API for smart autocomplete.",
    url: "https://github.com/Nirbhay-279/Notes",
  },
  {
    id: 2,
    title: "Newsify",
    desc: "A personalized news platform using MERN stack with user authentication and CRUD features.",
    url: "https://github.com/Nirbhay-279/Newsify",
  },
  {
    id: 3,
    title: "QuickCart",
    desc: "An e-commerce store developed using React, Node.js, and MongoDB with cart and payment integration.",
    url: "https://github.com/Nirbhay-279/QuickCart",
  },
  {
    id: 4,
    title: "Audify",
    desc: "A speech-to-text web app using Web Speech API and React, with real-time audio transcription.",
    url: "https://github.com/Nirbhay-279/Audify",
  },
];

export default Projects;
