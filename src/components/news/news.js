import React from 'react'
import Main from '../main'
import PageTitle from '../includes/page_title.js'
import { Link  } from 'react-router-dom'
import Pagination from "react-js-pagination";
// import M from 'materialize-css'

var pager = {count : 10, pages : 5, items_per_page : 2, current_page : 0};
var search = { _format: "json", type : "All", title : "", field_start_end_dates_value : "", page:0 }
class News extends Main {
	constructor(props){
	    super(props);
	    this.check_login();
	    this.state = {
	    	isLoaded : false,
	      	config : this.config(),
	      	results : [

	      	{"id" : "1", "title" : "Title A", "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
	      	{"id" : "2", "title" : "Title B", "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
	      	{"id" : "3", "title" : "Title C", "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
	      	{"id" : "4", "title" : "Title D", "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
	      	
	      	],
	      	pager: pager,
	      	search: search,
	    }
		this.handleChange     = this.handleChange.bind(this);
		this.onSubmit         = this.onSubmit.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	componentDidMount(){	
		this.get_activity();
	}
	get_activity(){
		var self = this;
		self.setState({
	            isLoaded : true
	    });
	}
	handlePageChange(pageNumber) {
		var { search } = this.state;
		search.page = pageNumber-1;
		this.setState({search : search});
		this.get_activity();
	  }
	handleChange = (field , value) => {
		var { search } = this.state;
		search[field] = value;
		this.setState({search:search});
	}
	onSubmit = (event) => {
		event.preventDefault();
		this.get_activity();		
	}
  	render() {
  		const { results, pager, isLoaded } = this.state;
	    return (
	    <div id="main-content" className="activiti-list">
	      	<PageTitle title="News"/>
	      	<div id="breadcrumb-wrap">
				<div className="container">           
					<Link to="/">Home</Link> \ <span>
					<Link to="/news">News</Link></span>					
				</div>
			</div>
			<div id="main-container">
				<div className="container">
					<div className="row">
						<div className="col s7 result-status">
							

						</div>
					</div>
					<div className="activities">
					{results.map((row, index) => (
						<div className="row" key={index}>						
							<div className="col s9">
								<h3 className="title"><Link to={"/news/"+row.id} >{row.title}</Link ></h3>
								<div className="details">
									{row.description}
								</div>
							</div>
							<div className="col s3 btn-wrap">
								<Link to={"/news/"+row.id} title="Details" className="btn blue-border">Details</Link>
								
							</div>
						</div>
					))}
					{ !results.length && isLoaded &&
						<div className="row"><div className="col s12 no-result">No result found.</div></div>
					}
					</div>
					{isLoaded ? "Search Result ( "+(pager.current_page+1)+" of "+pager.pages : ""} )
					{ (results.length && isLoaded ) ?(
						<Pagination
						   prevPageText='Preview '
                           nextPageText='Next'
                           firstPageText='<'
                           lastPageText='>'
				          activePage={pager.current_page+1}
				          itemsCountPerPage={pager.items_per_page}
				          totalItemsCount={pager.count}
				          pageRangeDisplayed={5}
						  onChange={this.handlePageChange}
				        />):""
			    	}
				</div>
							<div className="sparkles">
				<span className="orange-circle"></span>
				<span className="multi-square two"><b><i></i></b></span>
				<span className="grey-square-rotate red-sq one"></span>
				<span className="grey-square-rotate red-sq two"></span>
			</div>				
			</div>
	    </div>







	    )
  	}
}
export default News
