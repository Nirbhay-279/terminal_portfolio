import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science and Engineering (Information Security)",
    desc: "VIT Vellore | 2021 ~ 2025 | CGPA: 9.18",
  },
  {
    title: "Class XII (CBSE)",
    desc: "Rani Laxmi Bai Memorial School| 2020| 95%",
  },
  {
    title: "Class X (CBSE)",
    desc: "Rani Laxmi Bai Memorial School| 2018 | 96%",
  },
];

export default Education;
