import React, { Component } from 'react';

class EducationPreview extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const educationInfo = this.props.info;
    const infoValues = Object.values(educationInfo);
    return (
      <div className="general-preview section">
        <section>
        {infoValues.map((info, key) => {
            return <div key={key} id={key} className="output">{info}</div>})}
        </section>
      </div>
    );
  }
}

export default EducationPreview;
