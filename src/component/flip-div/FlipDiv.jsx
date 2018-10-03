import React from 'react';
import '../flip-div/FlipDiv.css'
import 'font-awesome/css/font-awesome.min.css';

let parent;
const FlipDiv = ({className='',style={}, children='', flipTime, onFlip = ()=>{}, onUnflip = ()=>{}, id=''})=>(
    <div id={id} className="flip-div-root" ref={(div)=> {parent = div; parent.onFlip = onFlip; parent.onUnflip = onUnflip; parent.flipTime=flipTime;}}>
        <div className="flip-div-card" style={{transition:`transform ${flipTime}s`}}>
          {children}
        </div>  
    </div>
);

export const Back = ({children=''})=>(
  <div className="flip-div-item flip-div-item-back">
    <div className="flip-div-item-head">
      <i className="fa fa-repeat" onClick={(e)=>doUnflip(e.target.parentElement.parentElement)}></i>
    </div>  
    {children}
</div>
);

export const Front = ({children=''})=>(
  <div className="flip-div-item flip-div-item-front">
      <div className="flip-div-item-head">
        <i className="fa fa-repeat" onClick={(e)=>doFlip(e.target.parentElement.parentElement)}></i>
      </div>  
      {children}
  </div>
);

export default FlipDiv;

export const flip = (ref)=>ref.childNodes[0].className = ref.childNodes[0].className.concat(' flipped');
export const unflip = (ref)=>ref.childNodes[0].className = ref.childNodes[0].className.replace('flipped','');

const doUnflip = (div) => {
  div.parentElement.className = div.parentElement.className.replace('flipped','');
  setTimeout((e)=>parent.onUnflip(div), parent.flipTime*1000);
};

const doFlip = (div) => {
  div.parentElement.className = div.parentElement.className.concat(' flipped');
  setTimeout((e)=>parent.onFlip(div), parent.flipTime*1000);
};
