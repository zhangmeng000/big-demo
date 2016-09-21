import React from 'react';
import Navheader from './component/Navheader'
import NavFooter from './component/NavFooter'
import LeftNav from './component/LeftNav'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      NavShow:false
    }
  }
  setNavBarState(){
    this.setState({
      NavShow:window.innerWidth>760 ? true : false
    })
  }
  componentDidMount(){
      this.setNavBarState();
      window.onresize = this.setNavBarState.bind(this)
  }
  render () {
    return(
      <div className = 'content-wrap'>
        {this.state.NavShow ? <LeftNav /> : <Navheader />}
        <div className = 'content-main'>
          {this.props.children}          
        </div>
        {this.state.NavShow ? null : <NavFooter />}
      </div>
    )
  }
}

export default App;
