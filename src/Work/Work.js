import React from 'react'
import Bg from '../images/02.jpg'
class Work extends React.Component {
  render () {
    let styles = {
      root:{

      },
      img:{
        width:'100%',
        height:'auto',
        margin:'10px auto',
        display:'block',
        borderRadius:'5px'
      }
    }
    return(
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6 col-md-4 work-nav"><img style = {styles.img} src = {Bg} /><a href = '#' className = 'nav-zp'><h3>作品1</h3><p>2015.8.10</p></a></div>
            <div className="col-sm-6 col-md-4 work-nav"><img style = {styles.img} src = {Bg} /><a href = '#' className = 'nav-zp'><h3>作品2</h3><p>2015.9.12</p></a></div>
            <div className="col-sm-6 col-md-4 work-nav"><img style = {styles.img} src = {Bg} /><a href = '#' className = 'nav-zp'><h3>作品3</h3><p>2016.3.12</p></a></div>
            <div className="col-sm-6 col-md-4 work-nav"><img style = {styles.img} src = {Bg} /><a href = '#' className = 'nav-zp'><h3>作品4</h3><p>2016.5.15</p></a></div>
            <div className="col-sm-6 col-md-4 work-nav"><img style = {styles.img} src = {Bg} /><a href = '#' className = 'nav-zp'><h3>作品5</h3><p>2016.9.19</p></a></div>
        </div>
      </div>
    )
  }
}

export default Work;
