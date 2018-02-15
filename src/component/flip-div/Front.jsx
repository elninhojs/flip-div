import React, { Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';


export default class Front extends Component {

  doUnflip(div){
    div.parentElement.className = div.parentElement.className.concat(' flipped');
    if(typeof this.props.onFlipComplete==='function'){
      window.setTimeout(()=>this.props.onFlipComplete(div),1000);
    }
  }

    render() {
      return (
        <div className="flip-div-item flip-div-item-front" ref={(div) => this.div = div}>
            <div className="flip-div-item-head">
              <i className="fa fa-retweet" onClick={(div)=>this.doUnflip(this.div)}></i>
            </div>  
            {this.props.children}
        </div>
      );
    }
}
  