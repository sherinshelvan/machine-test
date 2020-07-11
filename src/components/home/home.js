import React from 'react'
import Main from '../main'
import Banner from './banner'
import Graph from './graph'

// const axios = require('axios'); its is used to intract with api
class Home extends Main {
	constructor(props){
	    super(props);
	    this.check_login();
	    this.state = {
	    	isLoaded : false,
	      	config : this.config(),
	      	error : '',
	    }
	}
	componentDidMount(){	

	}
	// images/mail.svg
  	render() {
  		
	    return (
	      <div id="main-content">
	      	<Banner />
	      	<Graph />
	      </div>
	    )
  	}
}
export default Home