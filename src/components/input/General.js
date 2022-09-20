import React, { Component } from "react";

class General extends Component {
    constructor(props){
        super(props);

        this.state = {
          generalInfo: { 
            firstName: '',
            lastName: '',
            email: '',
            addressOne: '',
            addressTwo: '',
            postcode: '',
            town: '',
         },
        }
    }

    onTrigger = (e) => {
        e.preventDefault();
        this.props.parentCallback(this.state.generalInfo);
      };

    
    handleChange = (e) => {
      this.setState({ generalInfo: { ...this.state.generalInfo, [e.target.name]: e.target.value } });
    }

    render() {
        const { firstName, lastName, email, addressOne, addressTwo, postcode, town } = this.props;
        return <div id="general">
        <h3>General Information</h3>
        <form onSubmit={this.onTrigger}>
            <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange} />
            <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange} />
            <input 
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={this.handleChange} />
            <input 
            type="text"
            name="addressOne"
            placeholder="Address First Line"
            value={addressOne}
            onChange={this.handleChange} />
            <input 
            type="text"
            name="addressTwo"
            placeholder="Address Second Line"
            value={addressTwo}
            onChange={this.handleChange} />
            <input 
            type="text"
            name="postcode"
            placeholder="Postcode"
            value={postcode}
            onChange={this.handleChange} />
            <input 
            type="text"
            name="town"
            placeholder="Town/City"
            value={town}
            onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
     </div>;
    }
}

export default General;