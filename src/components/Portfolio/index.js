import React from 'react';

import { reactProjects, javascriptProjects } from '../../data';
import MiniScroller from '../Features/mini-scroller';
import './style.css';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div id="2" className="portfolio-inner-container">
                <h1>ReactJS Apps</h1>
                <MiniScroller list={reactProjects}/>
                <h1>JavaScript Apps</h1>
                <MiniScroller list={javascriptProjects}/>
            </div>
        </div>
    )
}

export default Portfolio;







