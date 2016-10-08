import React from 'react'
import Bg from '../images/02.jpg'
class Work extends React.Component {
  render () {
    let styles = {
      root:{

      },
      img:{
        width:'100%',
        height:'100%',
        margin:'10px auto',
        display:'block',
        borderRadius:'5px'
      }
    }
    return(
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-10 col-md-5 work-nav">
                <h3>家庭</h3>
                <p>出生在离市区还比较远的小村庄，父亲，母亲，妹妹和我，四口之家，父母都是地地道道农民，与大多数父母一样，父母肯定想孩子将来考上个好大学，所以从小的愿望就是能够考上大学．</p>
            </div>
            <div className="col-sm-10 col-md-5 work-nav">
                <h3>教育</h3>
                <p>我的大学母校是＂河北科技大学＂，都说学校是个小型的社会，在大学，增加了我们的阅历，使我们见识到了许多我们以前没想过也没见过的，在其中确实能学到了一些社会上可以用到的，但更多的还是出了学校的大门之后学的．大学阶段是我们人生中的一个阶段，是我们步入社会的中间阶段，同时在期间也保留着我们的一份回忆．．</p>
            </div>
            <div className="col-sm-10 col-md-5 work-nav">
                <h3>工作</h3>
                <p>刚毕业，年轻，想出去闯闯，所以去做销售，用两年时间在全国到处跑，深深的感觉到了不太喜欢也不适合做业务，偶然发现了WEB前端开发，一下就喜欢上了它，通过自学，向别人请教，终于使自己成为了别人口中的小菜鸟，然后在北京的一家公司实习工作</p>
            </div>
            <div className="col-sm-10 col-md-5 work-nav">
                <h3>兴趣</h3>
                <p>平时有时间的话出去打打球，运动下，活动活动筋骨，如果时间比较多的话可以去附近爬爬山．在家的时候，有时间就看看前端相关的资料，多了解了解，丰富自己的知识面．</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Work;
