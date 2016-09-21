import React from 'react'
import { Router, Route,hashHistory,IndexRoute } from 'react-router';
import App from './App';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Blog from './Blog/Blog';
class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App }>
          <IndexRoute component={Home} />
          <Route path="blog" component={Blog} />
          <Route path="work" component={Work} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
