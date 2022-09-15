import React, { Component } from "react";

class General extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div id="general">
        <h3>General Information</h3>
        <form>
            <input 
            type="text"
            id="name"
            placeholder="First Name" />
            <input 
            type="text"
            id="name"
            placeholder="Last Name" />
            <input 
            type="text"
            id="name"
            placeholder="Email Address" />
            <input 
            type="text"
            id="name"
            placeholder="Address First Line" />
            <input 
            type="text"
            id="name"
            placeholder="Address Second Line" />
            <input 
            type="text"
            id="name"
            placeholder="Postcode" />
            <input 
            type="text"
            id="name"
            placeholder="Town/City" />
        </form>
     </div>;
    }
}

export default General;