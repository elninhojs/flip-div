import React from 'react';
import '../flip-div/FlipDiv.css'

const FlipDiv = ({className='',style={}, children='', flipTime=.5, id=''})=>{
  return (<div id={id} className={`flip-div-root ${className}`}>
        <div className="flip-div-card" style={{transition:`transform ${flipTime}s`}}>
          {children}
        </div>  
    </div>
    );
};

export const Back = ({children=''})=>(
  <div className="flip-div-item flip-div-item-back">
    <div className="flip-div-item-head">
      <button onClick={(e)=>doUnflip(e.target.parentElement.parentElement)}>Unflip</button>
    </div>  
    {children}
</div>
);

export const Front = ({children=''})=>(
  <div className="flip-div-item flip-div-item-front">
      <div className="flip-div-item-head">
        <button onClick={(e)=>doFlip(e.target.parentElement.parentElement)}>Flip</button>
      </div>  
      {children}
  </div>
);

export default FlipDiv;

export const flip = (query)=>document.querySelectorAll(query).forEach(ref => ref.childNodes[0].className = ref.childNodes[0].className.concat(' flipped'));
export const unflip = (query)=>document.querySelectorAll(query).forEach(ref => ref.childNodes[0].className = ref.childNodes[0].className.replace('flipped',''));

const doUnflip = (div) => {
  div.parentElement.className = div.parentElement.className.replace('flipped','');
};

const doFlip = (div) => {
  div.parentElement.className = div.parentElement.className.concat(' flipped');
};
