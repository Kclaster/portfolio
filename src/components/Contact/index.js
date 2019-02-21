import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../actions/index';



import './style.css';

class Contact extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fullname: '',
            message: '',
            email: '',
            showMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        this.setState({
            fullname: '',
            message: '',
            email: '',
            showMessage: true
        })

        this.props.addContact(this.state); 
}
render() {
    return (
        <div id="contact" className="akuna">
                        <div id="1" className="contact">               
                <div className="title-container">
                </div>
                <div className="overal-container">
                    <div className="form">
                        <form id="reset" onSubmit={this.handleSubmit}>
                            <div className="contact-title-container">
                                <h1 id="contact-title">Contact Me!</h1>
                                <h2 className={this.state.showMessage ? 'block white' : 'hide white'}>Thank you for reaching out! I'll be in touch within 24 hours.</h2>
                            </div>
                                <div className="field">
                                    <label className="label">Name:</label>
                                    <div className="control">
                                        <input name="fullname" type="text" value={this.state.fullname} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email:</label>
                                    <div className="control">
                                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div id="text-area" className="field">
                                <label className="label">Message:</label>
                                    <div className="control">
                                        <textarea className="textarea" name="message" value={this.state.message} onChange={this.handleChange} />
                                    </div>
                                </div>
                            <button id="contact-button" className="submit-btn" type="submit" value="Submit">Submit</button>
                        </form>

                    
                    </div>  
                </div>                       
            </div>

        </div>
    )
}
}

const mapStateToProps = ({ contact }) => {
    return {
        contact
    };
};

export default connect(mapStateToProps, { addContact })(Contact);