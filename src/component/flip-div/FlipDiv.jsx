import React, { Component } from 'react';
import '../flip-div/FlipDiv.css'
export default class FlipDiv extends Component {
    
    render() {
      return (
        <div className="flip-div-root">
          <div className="flip-div-card">
            {this.props.children}
          </div>  
        </div>
      );
    }
  }