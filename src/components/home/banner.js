import React from 'react'
import Main from '../main'
class Banner extends Main {
	constructor(props){
	    super(props);
	    this.state = {
	    	isLoaded : false,
	      	config : this.config(),
	      	banner : [],
	    }
	}
	componentDidMount(){
	}
	render() {
	    return (
	    	<div className="app-slider">
		        <div className="video-box">
					<img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
				</div>
				<div className="banner-text-wrapper">
					<div className="banner-text">
						<h1>Banner Title</h1>
						<h3><span className="red-text">Sub Content</span></h3>
						<p>Description</p>
					</div>
				</div>
	        </div>
	    )
	}
}
export default Banner