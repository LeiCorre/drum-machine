import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Q = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
const Q2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
const W = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')
const W2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
const E = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')
const E2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')

const A = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
const A2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')
const S = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')
const S2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
const D = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
const D2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')

const Z = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')
const Z2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')
const X = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
const X2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')
const C = new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
const C2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    }
    this.onSwitch = this.onSwitch.bind(this);
    this.onKey = this.onKey.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.onKey)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKey)
  }
  

  onSwitch() {
    if (this.state.pressed === false) {
    return  this.setState({
        pressed: true
      })
    } else {
      return this.setState({
        pressed: false
      })
    }



  }

  onKey(event) {
    if (this.state.pressed === false) {
    switch (event.keyCode) {
      case 81: 
        Q.play();
        break;
      case 87:
        W.play(); 
        break;
      case 69:
        E.play();
        break;
      case 65:
        A.play();
        break;
      case 83:
        S.play();
        break;
      case 68: 
        D.play();
        break;
      case 90:
        Z.play();        
        break;
      case 88:
        X.play();
        break;
      case 67:
        C.play();
        break;    
      default: 
    }
  } else {
    switch (event.keyCode) {
      case 81: 
        Q2.play();
        break;
      case 87:
        W2.play(); 
        break;
      case 69:
        E2.play();
        break;
      case 65:
        A2.play();
        break;
      case 83:
        S2.play();
        break;
      case 68: 
        D2.play();
        break;
      case 90:
        Z2.play();        
        break;
      case 88:
        X2.play();
        break;
      case 67:
        C2.play();
        break;    
      default: 
    }

  } 
    
    
  }
  render() {
    return (
      <div className="container-fluid">
        <div id="drum-machine">
          <div className="row">
            
          <div id="display"></div>
          </div>
          <div className="row">
            <button className="drum-pad col-xs-3 btn btn-primary" id="Q">X</button>
            <div className="drum-pad col-xs-3" id="W" onClick={W.play()}>x</div>
            <div className="drum-pad col-xs-3" id="E" onClick={E.play()}>x</div>
          </div>
          <div className="row">
            <div className="drum-pad col-xs-3" id="A" onClick={A.play}>x</div>
            <div className="drum-pad col-xs-3" id="S" onClick={S.play}>x</div>
            <div className="drum-pad col-xs-3" id="D" onClick={D.play}>x</div>
          </div>
          <div className="row">
            <div className="drum-pad col-xs-3" id="Z" onClick={Z.play}>x</div>
            <div className="drum-pad col-xs-3" id="X" onClick={X.play}>x</div>
            <div className="drum-pad col-xs-3" id="C" onClick={C.play}>x</div>
          </div>
          <div className="row">
          <button id="switch" className="btn btn-light" onClick={this.onSwitch}>Click Here</button>
          </div>
        </div>



      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'))

export default DrumMachine;
