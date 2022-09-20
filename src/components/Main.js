import React, { Component } from 'react';
import General from './input/General';
import GeneralPreview from './preview/GeneralPreview';

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
      };
  }

  generalFormChange = (e) => {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value,
    })
}

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

  render() {
    return (
      <div className="main">
        <main>
          <General parentCallback={this.handleCallback} /*generalInfo={this.state.GeneralInfo}*/ />
          <GeneralPreview info={this.state.generalInfo} />
        </main>
      </div>
    );
  }
}

export default Main;
