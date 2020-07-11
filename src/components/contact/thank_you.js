import React from 'react'
import Main from '../main'
import PageTitle from '../includes/page_title.js'
import { Link } from 'react-router-dom'
// const axios = require('axios');

class ThankYou extends Main {
	constructor(props){
	    super(props);
	    this.check_login();
	    this.state = {
	    	isLoaded : false,
	      	config : this.config(),
	      	// error : '',
	    }
	}
	componentDidMount(){	
	}
  	render() {
	    return (
	    <div id="main-content">
	      	<PageTitle title="Contact Us"/>
	      	<div id="breadcrumb-wrap">
				<div className="container">
					<Link to="/">Home</Link> \ <span>
					<Link to="/contact-us">Contact Us</Link></span>					
				</div>
			</div>
			<div id="main-container">
				<div className="container">
					<div className="row col-2">
						<div className="item subscribe-form">
							<h2>Contact Us</h2>
							<div className="box24">
								<h2 className="anu" > Thank you</h2>
								<span className="opp"> We appreciate that you've taken the time to write us.</span>
							    <br /><span className="opp"> We'll get back to you very soon. </span>
							</div>
						</div>
						<div className="item">
							<img src={require("../../assets/images/subscribe-right.png")} alt=""/>
						</div>
					</div>
				</div>
			</div>
	    </div>
	    )
  	}
}
export default ThankYou
