import React from 'react';
import './style.css'
import SideBar from '../sidebar'
import { connect } from 'react-redux';

import { showSidebar } from '../../../../actions'


class Arrow extends React.Component {

    renderSideBar = () => {
        this.props.showSidebar();
    }

    render() {
    return (
        <div className="prof-arrow-container">
            <div onClick={this.renderSideBar} className = "arrow">
            </div>
            <SideBar />
        </div>
    )
}
}





export default connect(null, {showSidebar})(Arrow);