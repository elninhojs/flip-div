import React, { Component } from 'react';
import './App.css';
import FlipDiv from './component/flip-div/FlipDiv';
import Front from './component/flip-div/Front';
import Back from './component/flip-div/Back';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Component to render a Flip Div component</h1>
        </header>
        <div className="div-body">
          <FlipDiv>
            <Front onFlipComplete={(div)=>alert(div)}>
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
