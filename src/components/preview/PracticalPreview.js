import React, { Component } from 'react';

class PracticalPreview extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const experience = this.props.info;
    const infoValues = Object.values(experience);
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

export default PracticalPreview;
