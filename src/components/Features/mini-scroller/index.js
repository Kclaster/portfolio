import React from 'react';
import Snippet from './Snippet';

import './style.css';

class MiniScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: props.list.app,
      app: props.list.app[props.start]
    };
  }

  nextProperty = () => {
    let newIndex;
    if (this.state.app.id === this.state.apps.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.state.app.id + 1;
    }
    this.setState({
      app: this.props.list.app[newIndex]
    });
  };

  prevProperty = () => {
    let newIndex;
    if (this.state.app.id === 0) {
      newIndex = this.state.apps.length - 1;
    } else {
      newIndex = this.state.app.id - 1;
    }
    this.setState({
      app: this.props.list.app[newIndex]
    });
  };

  render() {
    const { apps, app } = this.state;
    return (
      <div className="miniscroller">
        <div className="title-div">
          <div
            onClick={() => this.prevProperty()}
            className="arrow-container left"
          >
            <div className="arrow-left" onClick={() => this.prevProperty()} />
          </div>
          <h1>{this.props.title}</h1>
          <div
            onClick={() => this.nextProperty()}
            className="arrow-container right"
          >
            <div className="arrow-right" onClick={() => this.nextProperty()} />
          </div>
        </div>
        <div className={`cards-slider active-slide-${app.id}`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${app.id * (100 / apps.length)}%`
            }}
          >
            {apps.map(app => (
              <Snippet key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MiniScroller;
