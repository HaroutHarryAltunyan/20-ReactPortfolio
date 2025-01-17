import React from 'react';
import sampleResume from '../pages/Resume';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        <a href={sampleResume} download="YourName-Resume">
          Download My Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML5/CSS3</li>
        <li>JavaScript/ES6+</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL / NoSQL</li>
        {/* Add as many as you like */}
      </ul>
    </section>
  );
}

export default Resume;