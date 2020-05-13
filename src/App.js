import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onKey = this.onKey.bind(this)
  }
  onKey(event) {
    this.setState({

    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div id="drum-machine">
          <div className="row">
          <div id="display"></div>
          </div>
          <div className="row">
            <div className="drum-pad col-xs-3" id="Q">X</div>
            <div className="drum-pad col-xs-3" id="W">x</div>
            <div className="drum-pad col-xs-3" id="E">x</div>
          </div>
          <div className="row">
            <div className="drum-pad col-xs-3" id="A">x</div>
            <div className="drum-pad col-xs-3" id="S">x</div>
            <div className="drum-pad col-xs-3" id="D">x</div>
          </div>
          <div className="row">
            <div className="drum-pad col-xs-3" id="Z">x</div>
            <div className="drum-pad col-xs-3" id="X">x</div>
            <div className="drum-pad col-xs-3" id="C">x</div>
          </div>
        </div>



      </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'))

export default DrumMachine;
