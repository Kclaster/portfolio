import React from 'react';
import './App.css'

import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Arrow from './components/Features/side-bar/arrow';


const App = () => {
    return (
    <div>
        <Arrow />
        <About />
        <Portfolio />
        <Contact />
    </div>
    )

}



export default App;

