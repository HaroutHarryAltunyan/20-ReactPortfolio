import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  // An array of your projects, with image, title, links, etc.
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.png',
      deployedUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/YourGitHub/project1'
    },
    {
      title: 'Project 2',
      image: 'project2.png',
      deployedUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/YourGitHub/project2'
    },
    // ... up to 6 or more
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <Project key={index} project={proj} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;