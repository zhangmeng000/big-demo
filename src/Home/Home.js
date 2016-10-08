import React from 'react'
import Bg from '../images/01.jpg'
class Home extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
      },
      span:{
        display:'block',
        width:'120px',
        height:'150px',
        borderRadius:'50%',
        margin:'30px auto',
        backgroundImage:'url(' + Bg + ')',
        backgroundSize:'cover'
      }
    }
    return(
      <div className="home-container">
        <div className="cover">
          <span style={styles.span}></span>
          <div className="home-item">
            <h2 style={styles.h2}>HI, 我是 <span style={{color:'#00bcd4'}}>zhangmeng</span></h2>
            <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
            <button className="home-btn"><a href="https://github.com/zhangmeng000" style={{color:'#fff'}}>HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
