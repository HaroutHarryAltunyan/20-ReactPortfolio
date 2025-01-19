import React from 'react';
import developerPhoto from '../assets/images/developerPhoto.jpg';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={developerPhoto} alt="Developer" />
      <p>
        Hi, I'm [Your Name]! I'm a [Your Specialty] who loves creating modern,
        responsive, and accessible web applications...
      </p>
    </section>
  );
}

export default AboutMe;