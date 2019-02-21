import React from 'react';
import { connect } from 'react-redux';
import { addToParagraph, addToIterator } from '../../../actions';
import './style.css';


class AppearTyping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            underscore: '',
            header: true
        }
    }
    
    static getDerivedStateFromProps(props, currentState) {
        if (currentState.header !== props.header) {
            return {
                header: props.header,
            }
        }
        return null
    }

    componentDidMount() {
        this.myTimer = setInterval(this.timer, 22);
        this.underTimer = setInterval(this.underscore, 250)
    };

    componentWillUnmount() {
        clearInterval(this.myTimer);
    }

    timer = () => {
        if (this.props.iterator <= this.props.string.length){
        this.props.addToParagraph(this.props.string[this.props.iterator]);
        this.props.addToIterator();
    }
}

    underscore = () => {
        if (this.state.underscore === '_') {
            this.setState({
                underscore: ''
            })
        } else {
            this.setState({
                underscore: '_'
            })
        }
    }

    render () {
        let display = this.props.paragraph.join('')
        const WrapperComponenet = this.state.header ? 'h2' : 'p';
        return (
          <div>
            <WrapperComponenet className="typed about white">
                {display}{this.state.underscore}
            </WrapperComponenet>
          </div>
        )
      }
}

const mapStateToProps = (state) => {
    return {
        paragraph: state.addToParagraph,
        iterator: state.iterator
    }
}

export default connect(mapStateToProps, { addToParagraph, addToIterator })(AppearTyping);