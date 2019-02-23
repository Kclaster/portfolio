import React from 'react';
import { connect } from 'react-redux';
import { hideSidebar } from '../../../../actions';
import profilePic from '../../../../pics/myface.jpg';
import resume from '../../../../pics/my-resume.pdf';
// import ProgressBar from '../../Progress';
import './style.css';

class Sidebar extends React.Component {
  handleClick = () => {
    this.props.hideSidebar();
  };

  render() {
    console.log(this.props.displaySidebar.showSidebar);
    let slide = this.props.displaySidebar.showSidebar ? '-95%' : '0';
    return (
      <div
        style={{ transform: `translateX(${slide})` }}
        className={`sidebar-container ${
          !this.props.displaySidebar.showSidebar ? null : null
        }`}
      >
        <div onClick={this.handleClick} className="new-arrow" />
        <div className="sidebar">
          <img className="profile-pic" src={profilePic} alt="my profile" />
          <a rel="noopener noreferrer" target="_blank" href={resume}>
            <h3>My Resume</h3>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kyle-laster/"
          >
            <h3>LinkedIn</h3>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Kclaster"
          >
            <h3>GitHub</h3>
          </a>
          <div className="email">
            <h3>Email: kyle.laster@</h3>
            <h3>gmail.com</h3>
          </div>
          <h3>Phone: (479)220-1856</h3>
          {/* <div className="languages">
                    <h2>Current Languages</h2>
                    <div className="language">
                        <h3>*HTML/CSS</h3>
                        <ProgressBar percent="75"/>

                    </div>
                    <div className="language">
                        <h3>*JavaScript</h3>
                        <ProgressBar percent="69" />
                    </div>
                    <div className="language">
                        <h3>React</h3>
                        <ProgressBar percent="50"/>
                    </div>
                    <div className="language">
                        <h3>Redux</h3>
                        <ProgressBar percent="35"/>
                    </div>
                    <div className="exerpt">
                        <h5>* Based on IKM Assessment</h5>
                    </div>
                </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displaySidebar: state.showSidebar
  };
};

export default connect(
  mapStateToProps,
  { hideSidebar }
)(Sidebar);
