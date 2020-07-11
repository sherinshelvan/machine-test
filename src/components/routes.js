import React from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import Navigation from './includes/navigation'
import Footer from './includes/footer'
import Home from './home/home'
import Contact from './contact/contact'
import News from './news/news'
import NewsDetails from './news/news_detail'
import Notfound from './notfound'
import ThankYou from './contact/thank_you'

import '../assets/css/materialize.min.css'
import '../assets/css/style.css'

// It will help to find component based on url
class Routes extends React.Component {  
  render() {
    return (
      <Router >
	      <Navigation />
	      <Switch>
	        <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/news/:id" component={NewsDetails} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/thankyou" component={ThankYou} />
	        <Route component={Notfound} />
	      </Switch>
        <Footer />
      </Router>
    )
  }
}
export default Routes