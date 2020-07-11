import React from 'react'
import Main from '../main'
import PageTitle from '../includes/page_title.js'
import { Link  } from 'react-router-dom'
import Popup from "reactjs-popup";
var contact_form = {
	name : { value : "", error : "", class : ""},
	email_address : { value : "", error : "", class : ""},
	subject : { value : "", error : "", class : ""},
	message : { value : "", error : "", class : ""},
	webform_id : 'subscribe',
	iagree : false,
	submit : false

};
class Contact extends Main {
	constructor(props){
	    super(props);
	    this.check_login();
	    this.state = {
	    	isLoaded : false,
	      	config : this.config(),
	      	contact_form : contact_form,
	      	// error : '',
	    }
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit     = this.onSubmit.bind(this);
	}
	componentDidMount(){	
		// console.log(this.state);
		// await this.filter_menu();
		// const { contact_form, config } = this.state;
		
	}
	handleChange = (field , value) => {
		// <Redirect to="/" push={true} />
		// let history = useHistory();	

		var contact_form = this.state.contact_form;
		 switch(field) {
		    case 'email_address':
		    	var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      			contact_form[field]['class'] = emailValid ? '' : 'invalid';
      			contact_form[field]['value'] = value;
		    break;
		    case 'iagree':
		    	contact_form[field] = !contact_form[field];
		    break;
		    default:
		    	contact_form[field]['class'] = value ? '' : 'invalid';
		    	contact_form[field]['value'] = value;
		    break;
		}
		var submit = true;
		for(var key in contact_form){
			var data = contact_form[key];
			if ( (key === 'iagree' && !data) || 
				(data.hasOwnProperty('value') && (data['class'] || !data['value']) ) 
				
			) { 
				submit = false;
			}			
		}
		contact_form.submit = submit;
		this.setState({contact_form:contact_form});
	}
	onSubmit = (event) => {
		event.preventDefault();
		var self = this;
		const { contact_form } = this.state;
		var submit_data = {};
		submit_data['terms_of_service']    = '1';
		submit_data['webform_id']          = 'subscribe';
		for(var key in contact_form){
			var data = contact_form[key];
			if(data.hasOwnProperty('value')){
				submit_data[key] = data.value;
			}		
		}
		self.props.history.push("/thankyou");		
		
	}
  	render() {
  		const { contact_form } = this.state;
	    return (
	    <div id="main-content">
	      	<PageTitle title="Contact Us"/>
	      	<div id="breadcrumb-wrap">
				<div className="container">
					<Link to="/">Home</Link> \ <span>
					<Link to="/contact-us">Contact US</Link></span>					
				</div>
			</div>
			<div id="main-container">
				<div className="container">
					<div className="row col-2">
						<div className="item subscribe-form">
							<h2>Contact Us</h2>							
							<p>To contact us please use the form below</p>
							<form name="subscribe" onSubmit={this.onSubmit} className="subscribe-form">
								<div className="row col-2">
									<div className="input-field item">
										<input name="name"  
											placeholder="Name" 
											onChange={evt => this.handleChange('name', evt.target.value) }
											onFocus={evt => this.handleChange('name', evt.target.value) }
											id="name" 
											type="text" 
											className={"validate "+contact_form.name.class } 
											required
										/>
								        <label htmlFor="name">Name</label>
								        <span className="helper-text" data-error="Required field."></span>							      
									</div>
									<div className="input-field item">
										<input name="email_address"  
											placeholder="Email" 
											onChange={evt => this.handleChange('email_address', evt.target.value) }
											onFocus={evt => this.handleChange('email_address', evt.target.value) }
											id="email_address" 
											type="email" 
											className={"validate "+contact_form.email_address.class } 
											required
										/>
										<label htmlFor="email">Email</label>
								        <span className="helper-text" data-error="Please enter a valid email address"></span>
									</div>
								</div>
								<div className="row col-2">
									<div className="input-field item">
										<input name="subject"  
											placeholder="Subject" 
											onChange={evt => this.handleChange('subject', evt.target.value) }
											onFocus={evt => this.handleChange('subject', evt.target.value) }
											id="subject" 
											type="text" 
											className={"validate "+contact_form.subject.class } 
											required
										/>
										<label htmlFor="subject">Subject</label>
								        <span className="helper-text" data-error="Required field"></span>
									</div>
								</div>
								<div className="form-check">
									<div className="input-field item">
										<textarea name="message"  
											placeholder="Subject" 
											onChange={evt => this.handleChange('message', evt.target.value) }
											onFocus={evt => this.handleChange('message', evt.target.value) }
											id="message" 
											data-length="120"
											className={"validate message materialize-textarea"+contact_form.message.class } 
											required
										></textarea>
										<label htmlFor="subject">Message</label>
									</div>
									<input type="hidden" defaultValue={contact_form.webform_id} name="webform_id" />
									<div className="input-check">
										<div>
											<label>
												<input type="checkbox" 
												onChange={evt => this.handleChange('iagree', '')}
												required />
												<span>I agree to the studio 56 <Popup trigger={<Link to="/subscribe">Privacy Policy</Link>} 
												 position="right center">
    											<div>Privacy policy !!</div>
  												</Popup></span>
												 
											</label>
										</div>
									</div>
								</div>
								
								<div className="btn-wrap">
									<button className="btn red subscribe" >
										Send <i className="material-icons">arrow_forward</i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	    </div>
	    )
  	}
}
export default Contact
