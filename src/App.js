import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ""      
    }
    
    
    this.onKey = this.onKey.bind(this);
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

  qKey(event) {
    document.getElementById('Q').play()
    this.setState({
      view: "Groove"
    })
  }
  wKey() {
    document.getElementById('W').play()
    this.setState({
      view: "Move"
    })
  }

  eKey() {
    document.getElementById('E').play()
    this.setState({
      view: "Clap"
    })
  }

  aKey() {
    document.getElementById('A').play()
    this.setState({
      view: "Cymbal"
    })
  }
  

  sKey() {
    document.getElementById('S').play()
    this.setState({
      view: "Tip"
    })
  }

  dKey() {
    document.getElementById('D').play()
    this.setState({
      view:"Tap"
    })
  }

  zKey() {
    document.getElementById('Z').play()
    this.setState({
      view: "Skitter"
    })
  }
 
  xKey() {
    document.getElementById('X').play()
    this.setState({
      view: "Cuff"
    })
  }

  cKey() {
    document.getElementById('C').play()
    this.setState({
      view: "Zap"
    })
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
              
            </button>
            
            <button className="drum-pad col-xs-3 btn btn-info" id="wCont">W
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className="clip" id="W" />
            

            </button>
            <button className="drum-pad col-xs-3 btn btn-dark" id="eCont">E
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='E' />
            </button>
          </div>
          <div className="row">
            <button className="drum-pad col-xs-3 btn btn-info" id="aCont">A
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip' id='A' />
              </button>
            <button className="drum-pad col-xs-3 btn btn-dark" id="sCont">S
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='S' />
            </button>
            <button className="drum-pad col-xs-3 btn btn-info" id="dCont">D
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id="D" />
            </button>
          </div>
          <div className="row">
            <button className="drum-pad col-xs-3 btn btn-dark" id="zCont">Z
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' className='clip' id='Z' />
            </button>
            <button className="drum-pad col-xs-3 btn btn-info" id="xCont">X
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' className='clip' id='X' />
            </button>
            <button className="drum-pad col-xs-3 btn btn-dark" id="cCont">C
              <audio src='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' className="clip" id='C' />
            </button>
          </div>
          <div className="row">
          
          </div>
        </div>

      <h3 id='foot'>Designed by Lei Corre &hearts;</h3>

      <div className="circles1"/>

      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'))

export default DrumMachine;
