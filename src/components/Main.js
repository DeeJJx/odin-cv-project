import React, { Component } from 'react';
import Education from './input/Education';
import General from './input/General';
import Practical from './input/Practical';
import GeneralPreview from './preview/GeneralPreview';
import EducationPreview from './preview/EducationPreview';
import PracticalPreview from './preview/PracticalPreview';


class Main extends Component {
  constructor(props){
    super(props);

            //Create Preview object, add values to preview object in handle submit
        //Pass preview object to GeneralPreview, map through object and create copy entries // style
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
         educationInfo: {
          universityName: '',
          courseTitle: '',
          startDate: '',
          endDate: '',
      },
      experienceInfo: {
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
    },
      };
  }


  //Don't think is necessary to use form change in main & in components
/*   generalFormChange = (e) => {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value,
    })
} */

handleCallback = (childData) => {
  let childDataValues = Object.values(childData);
  this.setState({
    generalInfo:
      {
        firstName : childDataValues[0],
        secondName : childDataValues[1],
        email: childDataValues[2],
        addressOne: childDataValues[3],
        addressTwo: childDataValues[4],
        postcode: childDataValues[5],
        town: childDataValues[6],
      }
    });
  }

handleSubmit = (e) => {
    e.preventDefault();
    console.log("fired")
    this.setState(prevState => ({
      General: {
        ...prevState.General,
        [e.target.name]: e.target.value, 
      }
    }))
  }

  handleCallbackEducation = (childData) => {
    let childDataValues = Object.values(childData);
    this.setState({
      educationInfo:
        {
          universityName : childDataValues[0],
          courseTitle : childDataValues[1],
          startDate: childDataValues[2],
          endDate: childDataValues[3],
        }
      });
    }


  handleSubmitEducation = (e) => {
    e.preventDefault();
    console.log("fired")
    this.setState(prevState => ({
      Education: {
        ...prevState.Education,
        [e.target.name]: e.target.value, 
      }
    }))
  }

  handleCallbackExperience = (childData) => {
    let childDataValues = Object.values(childData);
    this.setState({
      experienceInfo: {
        companyName: childDataValues[0],
        positionTitle: childDataValues[1],
        responsibilities: childDataValues[2],
        startDate: childDataValues[3],
        endDate: childDataValues[4],
    },
      });
    }


  handleSubmitExperience = (e) => {
    e.preventDefault();
    console.log("fired")
    this.setState(prevState => ({
      Experience: {
        ...prevState.Experience,
        [e.target.name]: e.target.value, 
      }
    }))
  }

  //Gotta create new handle

  render() {
    return (
      <div className="main">
        <main>
          <div className="input-div">
              <General parentCallback={this.handleCallback} /*generalInfo={this.state.GeneralInfo}*/ />
              <Education parentCallback={this.handleCallbackEducation} />
              <Practical parentCallback={this.handleCallbackExperience} />
          </div>
          <GeneralPreview info={this.state.generalInfo} />
          <EducationPreview info={this.state.educationInfo} />
          <PracticalPreview info={this.state.experienceInfo} />
        </main>
      </div>
    );
  }
}

export default Main;
