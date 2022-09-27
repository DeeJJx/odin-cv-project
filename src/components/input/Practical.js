import React, { Component } from "react";

class Practical extends Component {
    constructor(props){
        super(props);

        this.state = {
            experienceInfo: {
                companyName: '',
                positionTitle: '',
                responsibilities: '',
                startDate: '',
                endDate: '',
            }
        }
    }

    handleChange = (e) => {
        this.setState({ experienceInfo: { ...this.state.experienceInfo, [e.target.name]: e.target.value } });
      }

      editSubmit = (e) => {
        let edit = document.getElementById("edit-experience");
        let fieldset = document.getElementById("experience-fieldset");
        e.target.classList.toggle("hidden");
        edit.classList.toggle("hidden");
        fieldset.setAttribute("disabled", "disabled");
      }
  
      editEdit = (e) => {
        let submit = document.getElementById("submit-experience");
        let fieldset = document.getElementById("experience-fieldset");
        e.target.classList.toggle("hidden");
        submit.classList.toggle("hidden");
        fieldset.removeAttribute("disabled")
      }

      onTrigger = (e) => {
        e.preventDefault();
        this.props.parentCallback(this.state.experienceInfo);
      };



    render() {
        const { companyName, positionTitle, responsibilities, startDate, endDate } = this.props;
        return <div id="experience">
        <h3>Work Experience</h3>
        <form onSubmit={this.onTrigger}>
            <fieldset id="experience-fieldset">
                <input 
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={companyName}
                onChange={this.handleChange} />
                <input 
                type="text"
                name="positionTitle"
                placeholder="Position Title"
                value={positionTitle}
                onChange={this.handleChange} />
                <input 
                type="text"
                name="responsibilities"
                placeholder="Responsibilities"
                value={responsibilities}
                onChange={this.handleChange} />
                <label htmlFor="startDate">Start Date</label>
                <input 
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={startDate}
                onChange={this.handleChange} />
                <label htmlFor="endDate">End Date</label>
                <input 
                type="date"
                name="endDate"
                placeholder="End Date"
                value={endDate}
                onChange={this.handleChange} />
            </fieldset>
            <input type="submit" value="Submit" onClick={this.editSubmit} id="submit-experience"/>
            <button onClick={this.editEdit} className="hidden" id="edit-experience">Edit</button>
        </form>
    </div>;
    }
}

export default Practical;