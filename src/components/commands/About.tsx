import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nirbhay Tiwari</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Lucknow,
        India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
