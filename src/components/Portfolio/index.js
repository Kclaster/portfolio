import React from 'react';

import { reactProjects, javascriptProjects, nodeProjects } from '../../data';
import MiniScroller from '../Features/mini-scroller';
import './style.css';

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div id="2" className="portfolio-inner-container">
        <MiniScroller start="1" title="ReactJS Apps" list={reactProjects} />
        <MiniScroller
          start="1"
          title="JavaScript Apps"
          list={javascriptProjects}
        />
        <MiniScroller start="1" title="NodeJS Apps" list={nodeProjects} />
      </div>
    </div>
  );
};

export default Portfolio;
