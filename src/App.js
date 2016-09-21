import React from 'react';
import Navheader from './component/Navheader'
import NavFooter from './component/NavFooter'
import LeftNav from './component/LeftNav'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      NavShow:false,
      title:'Home'
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
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  render () {
    return(
      <div className = 'content-wrap'>
        {this.state.NavShow ? <LeftNav title = {this.state.title}/> : <Navheader title = {this.state.title}/>}
        <div className = 'content-main'>
          {this.props.children}
        </div>
        {this.state.NavShow ? null : <NavFooter />}
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default App;
