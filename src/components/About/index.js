import React from 'react';
import { connect } from 'react-redux';

import { introduction } from '../../data'
import { resetParagraph, resetIterator } from '../../actions';
import './style.css';
import still from '../../pics/desk.jpg';
import mobile from '../../pics/vertical2.jpg';
import AppearTyping from '../Features/appear-typing';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showParagraph: false
        }
    }

    displaymobile = () => {
       if (window.innerWidth <= 950) {
           this.setState({
               showMobile: true
           })
       } else {
           this.setState({
               showMobile: false
           })
       }
    }

    showParagraph = () => {
        setTimeout(function() {
            this.props.resetParagraph();
            this.props.resetIterator();
            this.setState({
                showParagraph: true
            })
        }.bind(this), 3000)
    }

    componentDidMount() {
        this.displaymobile();
        window.addEventListener('resize', this.displaymobile);
        this.showParagraph();
    }

    transition = (el) => {
        el.preventDefault();
        let element = el.currentTarget.getAttribute('scroll');
        document.getElementById(element).scrollIntoView({behavior: "smooth"});
    }

    render() {
        //660 need to change
        let { showMobile } = this.state;

    return (
        <div id="about" className="overall-container">
            <header>
            <div className="title">
            <h1>Kyle Laster</h1>
            <h2>JavaScript Developer</h2>
            </div>
            <nav>
                <span scroll="2" onClick={(el) => this.transition(el)} href="#portfolio">Portfolio</span>
                <h3 className="white">/</h3>
                <span scroll="1" onClick={(el) => this.transition(el)} href="#contact">Contact</span>
            </nav>
            </header>
            <img id="full-pic" src={showMobile ? mobile : still} alt="coder outdoors" />
            <div className="about-section" style={{'width': `${showMobile ? '70vw' : '55vw'}`}}>
            <div className="about-container">
                {!this.state.showParagraph ? <AppearTyping header={true} string="Hi! My Name is Kyle Laster." /> : <AppearTyping header={false} string={introduction} /> }
                    <button scroll="1" onClick={(el) => this.transition(el)} href="#contact" className="btn" id="employer">Send Me An Email</button>
                    <button onClick={(el) => this.transition(el)} scroll="2" href="#portfolio" className="btn" id="employer">See My Work</button>
                </div>  
            </div>
        </div>

    )
    }
}

export default connect(null, { resetIterator, resetParagraph })(About);