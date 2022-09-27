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
            },
            educationCounter: 1,
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

      //This only adds 1 new section to component state
      addSection = () => {
        this.setState((prevState) => ({ 
          educationCounter: prevState.educationCounter + 1 
          
       }));
       

        // for(let i=0;i< this.state.educationCounter;i++){
        //   let i = {
        //     universityName: '1',
        //     courseTitle: '2',
        //     startDate: '3',
        //     endDate: '4',
        //   }
        // this.setState({ i });
        // }
      };

      //Change render so it renders by mapping through component state


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
        <button onClick={this.addSection} id="add-section">Add</button>
        <button onClick = {this.removeSection} id="remove-section">Remove</button>
    </div>;
    }
}

export default Education;