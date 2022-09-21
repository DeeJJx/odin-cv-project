import React, { Component } from "react";

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            educationInfo: {
                universityName: '',
                courseTitle: '',
                startDate: '',
                endDate: '',
            }
        }
    }

    handleChange = (e) => {
        this.setState({ educationInfo: { ...this.state.educationInfo, [e.target.name]: e.target.value } });
      }

      editSubmit = (e) => {
        let edit = document.getElementById("edit-education");
        let fieldset = document.getElementById("education-fieldset");
        e.target.classList.toggle("hidden");
        edit.classList.toggle("hidden");
        fieldset.setAttribute("disabled", "disabled");
      }
  
      editEdit = (e) => {
        let submit = document.getElementById("submit-education");
        let fieldset = document.getElementById("education-fieldset");
        e.target.classList.toggle("hidden");
        submit.classList.toggle("hidden");
        fieldset.removeAttribute("disabled")
      }

      onTrigger = (e) => {
        e.preventDefault();
        this.props.parentCallback(this.state.educationInfo);
      };


    render() {
        const { universityName, courseTitle, startDate, endDate } = this.props;
        return <div id="education">
            <h3>Education</h3>
            <form onSubmit={this.onTrigger}>
            <fieldset id="education-fieldset">
                <input 
                type="text"
                name="universityName"
                placeholder="University Name"
                value={universityName}
                onChange={this.handleChange} />
                <input 
                type="text"
                name="courseTitle"
                placeholder="Course Title"
                value={courseTitle}
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
            <input type="submit" value="Submit" onClick={this.editSubmit} id="submit-education"/>
            <button onClick={this.editEdit} className="hidden" id="edit-education">Edit</button>
        </form>
    </div>;
    }
}

export default Education;