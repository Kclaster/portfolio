import React from 'react';
import reactprof from '../../../pics/background.png';
import reactsmall1 from '../../../pics/gif.png';
import reactsmall2 from '../../../pics/trivia.png';
import reactsmall3 from '../../../pics/Diary.PNG';
import javascriptsmall1 from '../../../pics/fight.png';
import javascriptsmall2 from '../../../pics/word.png';
import javascriptsmall3 from '../../../pics/cinimania.png';
import nodesmall1 from '../../../pics/liri.PNG';
import './style.css';

const Snippet = props => {
  let picture;
  const { id, description, name, github, url, language } = props.app;

  const image = [reactsmall3, reactprof, reactsmall2, reactsmall1];

  const javascriptImage = [
    javascriptsmall1,
    javascriptsmall2,
    javascriptsmall3
  ];

  const nodeImage = [nodesmall1];

  if (language === 'javascript') {
    picture = javascriptImage[id];
  } else if (language === 'react') {
    picture = image[id];
  } else {
    picture = nodeImage[id];
  }

  return (
    <div id={`card-${id}`} className="card">
      <div className="snippet-container">
        <img className="snippet-image" src={picture} alt={name} />
        <h3 className="snippet-header">{name}</h3>
        <p className="snippet-description">{description}</p>
      </div>
      <div className="hover">
        <a className="snippet-button 1" href={github}>
          Visit GitHub
        </a>
        <a className="snippet-button 2" href={url}>
          Visit App
        </a>
      </div>
    </div>
  );
};

export default Snippet;
