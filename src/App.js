import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "",
      flip: true,
      side: "Side A"      
    }
    
    
    this.onKey = this.onKey.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
    this.qKey = this.qKey.bind(this);
    this.wKey = this.wKey.bind(this)
    this.eKey = this.eKey.bind(this)
    this.aKey = this.aKey.bind(this)
    this.sKey = this.sKey.bind(this)
    this.dKey = this.dKey.bind(this)
    this.zKey = this.zKey.bind(this)
    this.xKey = this.xKey.bind(this)
    this.cKey = this.cKey.bind(this)
    
    
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKey);
    document.getElementById("qCont").addEventListener('click', this.qKey)
    document.getElementById("wCont").addEventListener('click', this.wKey)
    document.getElementById("eCont").addEventListener('click', this.eKey)
    document.getElementById("aCont").addEventListener('click', this.aKey)
    document.getElementById("sCont").addEventListener('click', this.sKey)
    document.getElementById("dCont").addEventListener('click', this.dKey)
    document.getElementById("zCont").addEventListener('click', this.zKey)
    document.getElementById("xCont").addEventListener('click', this.xKey)
    document.getElementById("cCont").addEventListener('click', this.cKey)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKey)
    document.getElementById("qCont").addEventListener('click', this.qKey)
    document.getElementById("wCont").addEventListener('click', this.wKey)
    document.getElementById("eCont").addEventListener('click', this.eKey)
    document.getElementById("aCont").addEventListener('click', this.aKey)
    document.getElementById("sCont").addEventListener('click', this.sKey)
    document.getElementById("dCont").addEventListener('click', this.dKey)
    document.getElementById("zCont").addEventListener('click', this.zKey)
    document.getElementById("xCont").addEventListener('click', this.xKey)
    document.getElementById("cCont").addEventListener('click', this.cKey)
  }

  
  

  onKey(event) {
    switch (event.keyCode) {
      default: 
        break;
      case 81: 
        this.qKey();
        break;
      case 87:
          this.wKey()
          break;
      case 69:
          this.eKey()
          break;
      case 65:
          this.aKey()
          break;
      case 83:
          this.sKey();
          break;
      case 68: 
          this.dKey();
          break;
      case 90:
          this.zKey();        
          break;
      case 88:
          this.xKey();
          break;
      case 67:
          this.cKey();
          break;  
    }
  }

  onSwitch(event) {
    if (this.state.flip===true) {
        this.setState({
          flip: false,
          side: "Side B"
          
        }) 
        
      } else {
       
         this.setState({
           flip: true,
           siide: "Side A"
         }) }
    
  }

  qKey(event) {
    if (this.state.flip===true) {
    
    document.getElementById('Q').play()
    this.setState({
      view: "Groove"
      }) } else {
    
    document.getElementById('Q2').play()
    this.setState({
      view: "Piano Chord A"
    })    
  }
  }

  wKey() {
    if (this.state.flip===true) {
    document.getElementById('W').play()
    this.setState({
      view: "Move"
    })
  } else {
    
    document.getElementById('W2').play()
    this.setState({
      view: "Piano Chord B"
    })    
  }
  }

  eKey() {
    if (this.state.flip===true) {
    document.getElementById('E').play()
    this.setState({
      view: "Clap"
    })
  } else {
    
    document.getElementById('E2').play()
    this.setState({
      view: "Piano Chord C"
    })    
  }
  }

  aKey() {
    if (this.state.flip===true) {
    document.getElementById('A').play()
    this.setState({
      view: "Cymbal"
    })
  } else {
    
    document.getElementById('A2').play()
    this.setState({
      view: "Tisk"
    })    
  }
  }
  

  sKey() {
    if (this.state.flip===true) {
    document.getElementById('S').play()
    this.setState({
      view: "Tip"
    })
  } else {
    
    document.getElementById('S2').play()
    this.setState({
      view: "Bop"
    })    
  }
  }

  dKey() {
    if (this.state.flip===true) {
    document.getElementById('D').play()
    this.setState({
      view:"Tap"
    })
  } else {
    
    document.getElementById('D2').play()
    this.setState({
      view: "Fwaap"
    })    
  }
  }

  zKey() {
    if (this.state.flip===true) {
    document.getElementById('Z').play()
    this.setState({
      view: "Skitter"
    })
  } else {
    
    document.getElementById('Z2').play()
    this.setState({
      view: "Doo"
    })    
  }
  }
 
  xKey() {
    if (this.state.flip===true) {
    document.getElementById('X').play()
    this.setState({
      view: "Cuff"
    })
  } else {
    
    document.getElementById('X2').play()
    this.setState({
      view: "Roll"
    })    
  }
  }

  cKey() {
    if (this.state.flip===true) {
    document.getElementById('C').play()
    this.setState({
      view: "Zap"
    })
  } else {
    
    document.getElementById('C2').play()
    this.setState({
      view: "Bip"
    })    
  }
  }
 
    
  
  render() {
    return (
      <div className="container-fluid">
        <div id="drum-machine">
          <div className="row">
            
          <div id="display">{this.state.view}</div>
          </div>
          <div className="row">
            <button className="drum-pad col-xs-3 btn btn-dark" id="qCont">Q
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q" />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' className="clip" id='Q2' />
              
            </button>
            
            <button className="drum-pad col-xs-3 btn btn-info" id="wCont">W
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className="clip" id="W" />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' className="clip" id='W2' />

            </button>
            <button className="drum-pad col-xs-3 btn btn-dark" id="eCont">E
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='E' />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' className="clip" id='E2' />
            </button>
          </div>
          <div className="row">
            <button className="drum-pad col-xs-3 btn btn-info" id="aCont">A
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip' id='A' />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' className="clip" id='A2' />
              </button>
            <button className="drum-pad col-xs-3 btn btn-dark" id="sCont">S
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='S' />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' className="clip" id='S2' />
            </button>
            <button className="drum-pad col-xs-3 btn btn-info" id="dCont">D
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id="D" />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className="clip" id='D2' />
            </button>
          </div>
          <div className="row">
            <button className="drum-pad col-xs-3 btn btn-dark" id="zCont">Z
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' className='clip' id='Z' />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className="clip" id='Z2' />
            </button>
            <button className="drum-pad col-xs-3 btn btn-info" id="xCont">X
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' className='clip' id='X' />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className="clip" id='X2' />
            </button>
            <button className="drum-pad col-xs-3 btn btn-dark" id="cCont">C
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' className="clip" id='C' />
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' className="clip" id='C2' />
            </button>
          </div>
          <div className="row"> 
          <button className="btn btn-light sideButton col-xs-2 buttons" >On/Off</button>  
          <button className="btn btn-warning sideButton col-xs-2 buttons" onClick={this.onSwitch}>2nd Func</button>
           <span className="col-xs-2 buttons" id="ab">{this.state.side}</span>
          </div>
        </div>

      <h3 id='foot'>Designed by Lei Corre &hearts;</h3>

      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'))

export default DrumMachine;
