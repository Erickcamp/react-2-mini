import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily(this)
    this.updateEditStatus = this.updateEditStatus(this)

  }

  updateColor(val){
    this.setState({
      fontColor: val
    })
  }

  updateSize(val){
    this.setState({
      fontSize: val
    })
  }

  updateFamily(val){
    this.setState({
      fontFamily: val
    })
  }

  updateEditStatus(val){
    this.setState({
      allowEdit: val
    })
  }

  render() {
    const {allowEdit, fontFamily, fontColor, fontSize} = this.state
    return (
      <div>
        <div className="headerBar">
        <EditToggle update={this.updateEditStatus} />
        <ColorChanger update={this.updateColor} allowEdit={allowEdit}/>
        <SizeChanger update={this.updateSize} allowEdit={allowEdit}/>
        <FamilyChanger update={this.updateFamily} allowEdit={allowEdit}/>
        </div>
        <div className="textArea">
        <TextContainer fontSize={fontSize} fontColor={fontColor} fontFamily={fontFamily}/>
        </div>
      </div>
    );
  }
}

export default App;
