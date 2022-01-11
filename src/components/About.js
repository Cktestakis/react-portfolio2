import React from "react";
import self from "../images/self-portrait.jpg";

export default function About() {
  return (
    <div>
      <section id="about">
        <img id="selfImg" src={self} alt="me"></img>
        <div className="bio">
          <h1 className="opening-line">
            Hello, my name is Cody Ktestakis!
          </h1>
          <p className="aboutPara">
            I am a Full Stack Web Developer educated in the Full Stack Web
            Development from the University of Chapel Hill. With strong skills
            in UX/UI, HTML, CSS, JavaScript, responsive web design and ES6.
            Currently working at FillTech USA, as a Validation Specialist,
            validating the company's work process, equipments, cleaning
            validation and product validation, to ensure that every validation
            is up to FDA standards
          </p>

          <p className="aboutPara">
            Currently attending the Coding Bootcamp at University of North
            Carolina at Chapel Hill to become a Full Stack Developer, with
            enhanced skills in problem solving skills and strong ability to
            execute user friendly applications. With each project, my aim is to
            engage my audience with an effective, smooth and problem free
            user-experience. Recently I applied my creative skills in a project
            where I worked with my team to develop a journal app focused on
            mental health. I assisted in making for a tranquil app usage with
            smooth transitions between features as well creating an aesthetic
            and calming visual experience. Excited to further enhance my skills
            in future as part of a fast-paced, quality-driven team in order to
            build better experience for users on the web.
          </p>
        </div>
      </section>
    </div>
  );
}
