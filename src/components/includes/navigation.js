import React from 'react';
import { NavLink} from 'react-router-dom'
import Main from '../main'
class Navigation extends Main {
	constructor(props){
		super(props);
		this.state = {
			side_nav : '',
			token : '',
			config : this.config()
		};
		this.logOut = this.logOut.bind(this);
	}
	componentDidMount() {		
	  	this.setState({
	  		token : localStorage.getItem("token")
	  	});
	}
	logOut(){
		
		
	}
  	render() {
  	const logo = require('./../../assets/images/logo.png');

    return (
    <header id="main-header" >
	    <div className="container">
	        <nav className="navbar top-menu">
	            <div className="nav-wrapper">
	                <NavLink to="/" className="brand-logo">
	                    <img src={logo} alt="" />
	                </NavLink>
	                <NavLink to="#"  data-target="main-nav" className="top-nav sidenav-trigger waves-effect waves-light hide-on-large-only">
	                    <i className="material-icons">menu</i>
	                </NavLink> 
	            </div>
	        </nav>
	        <ul id="main-nav" className="sidenav sidenav-fixed" >
	            <li><NavLink exact to="/" activeClassName="active" className="sidenav-close" >HOME</NavLink></li>
	            <li><NavLink to="/news" activeClassName="active" className="sidenav-close" >News</NavLink></li>
	            
	            <li><NavLink to="/contact-us" activeClassName="active" className="sidenav-close" >Contact Us</NavLink></li>
	            


	        </ul>
	    </div>
	</header>
    )
  }
}
export default Navigation