import React, { Component } from 'react';
import './App.css';
import FlipDiv, {Front, Back, flip, unflip} from './component/flip-div/FlipDiv';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Component to render a Flip Div component</h1>
        </header>
        <div className="div-body">
          <button type="button" onClick={(e)=>{flip(document.getElementById('f1'));flip(document.getElementById('f2'));}}>Flip All</button>
          <button type="button" onClick={(e)=>{unflip(document.getElementById('f1'));unflip(document.getElementById('f2'));}}>Unflip All</button>

          <FlipDiv flipTime={.3} onFlip={(div)=>console.log(div)} onUnflip={(div)=> console.log(div)} id="f1">
            <Front>
              <span>You can have some inputs at Front for exemplo</span>
              <br/>
              <label>First Name</label><input type="text"/>
              <label>Last Name</label> <input type="text"/>
              <label>Email</label> <input type="text"/>
            </Front>
            <Back>
              <span>And some list on Back</span>
              <ul>
                <li>Subaru WRX</li>
                <li>Lance EVO X</li>
                <li>Tesla Model S</li>
              </ul>
            </Back>
          </FlipDiv>

          <FlipDiv flipTime={1} onFlip={(div)=>console.log(div)} onUnflip={(div)=> console.log(div)} id="f2">
            <Front>
              <span>You can have some inputs at Front for exemplo</span>
              <br/>
              <label>First Name</label><input type="text"/>
              <label>Last Name</label> <input type="text"/>
              <label>Email</label> <input type="text"/>
            </Front>
            <Back>
              <span>And some list on Back</span>
              <ul>
                <li>Subaru WRX</li>
                <li>Lance EVO X</li>
                <li>Tesla Model S</li>
              </ul>
            </Back>
          </FlipDiv>  
        </div>
      </div>
    );
  }
}

export default App;
