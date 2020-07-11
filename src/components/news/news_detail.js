import React from 'react'
import Main from '../main'
import PageTitle from '../includes/page_title.js'
import { Link  } from 'react-router-dom'

class NewsDetails extends Main {
	constructor(props){
	    super(props);
	    this.check_login();
	    this.state = {
	      	config : this.config(),
	      	result : [],
	    }
	}
	componentDidMount(){	
		
	}
	
  	render() {
		const {match : {params}}               = this.props;
	    return (
	    <div id="main-content" className="activity-details">
	      	<PageTitle title="News Details"/>
	      	<div id="breadcrumb-wrap">
				<div className="container">           
					<Link to="/">Home</Link> \ <span>
					<Link to={"/news"}>News</Link></span> \ 	
					<span>
					<Link to={"/news/"+params.id}>Detail Page</Link></span>				
				</div>
			</div>
			<div id="main-container">
				<div className="container">
					<h4>ID :  {params.id}</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>				
			</div>
	    </div>




	    )
  	}
}
export default NewsDetails
