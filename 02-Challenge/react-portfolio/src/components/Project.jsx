import React from 'react';

function Project({ project }) {
  const { title, image, deployedUrl, githubUrl } = project;
  return (
    <article className="project">
      <img src={`/src/assets/images/${image}`} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        {' | '}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </article>
  );
}

export default Project;