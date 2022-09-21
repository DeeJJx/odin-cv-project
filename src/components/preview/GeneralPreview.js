import React, { Component } from 'react';

class GeneralPreview extends Component {
  constructor(props){
    super(props);
  }


  render() {
    const generalInfo = this.props.info;
    const infoValues = Object.values(generalInfo);
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

export default GeneralPreview;
