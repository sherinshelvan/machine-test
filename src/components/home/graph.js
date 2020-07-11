import React from 'react'
import Main from '../main'
import { Graph } from "react-d3-graph";

class Home extends Main {
	constructor(props){
	    super(props);
	    this.check_login();
	    this.state = {
	    	isLoaded : false,
	    	message : "",
	      	config : this.config(),
	      	error : '',
	    }
	}
	componentDidMount(){	

	}
	// images/mail.svg
  	render() {
  		var self = this;
  		// graph payload (with minimalist structure)
		const data = {
		    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
		    links: [
		        { source: "Harry", target: "Sally" },
		        { source: "Harry", target: "Alice" },
		    ],
		};
 
		// the graph configuration, you only need to pass down properties
		// that you want to override, otherwise default ones will be used
		const myConfig = {
		    nodeHighlightBehavior: true,
		    node: {
		        color: "lightgreen",
		        size: 500,
		        highlightStrokeColor: "blue",
		    },
		    link: {
		        highlightColor: "lightblue",
		    },
		};
 
		// graph event callbacks
		const onClickGraph = function() {
			self.setState({message : "Clicked the graph background"});
		};
		 
		const onClickNode = function(nodeId) {
			self.setState({message : "Clicked node : "+nodeId});
		};
		 
		const onDoubleClickNode = function(nodeId) {
			self.setState({message : "Double Clicked node : "+nodeId});
		};
		 
		const onRightClickNode = function(event, nodeId) {
			self.setState({message : "Right Clicked node : "+nodeId});
		};
		 
		const onMouseOverNode = function(nodeId) {
			self.setState({message : "Mouse over node : "+nodeId});
		};
		 
		const onMouseOutNode = function(nodeId) {
			self.setState({message : "Mouse node node : "+nodeId});
		};
		 
		const onClickLink = function(source, target) {
			self.setState({message : "Clicked link between "+source+" and "+target});
		};
		 
		const onRightClickLink = function(event, source, target) {
			self.setState({message : "Right link between "+source+" and "+target});
		};
		 
		const onMouseOverLink = function(source, target) {
			self.setState({message : "Mouse in link between "+source+" and "+target});
		};
		 
		const onMouseOutLink = function(source, target) {
			self.setState({message : "Mouse out link between "+source+" and "+target});
		};
		 
		const onNodePositionChange = function(nodeId, x, y) {
			self.setState({message : "Node "+nodeId+" is moved to new position. New position is x= "+x+"y="+y});
		};
 

  		
	    return (
	      <div className="container" id="graph">
	      <h1>D3 Graph</h1>
	      <h2><b>Action</b>{this.state.message}</h2>
	      	<Graph
			    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
			    data={data}
			    config={myConfig}
			    onClickNode={onClickNode}
			    onDoubleClickNode={onDoubleClickNode}
			    onRightClickNode={onRightClickNode}
			    onClickGraph={onClickGraph}
			    onClickLink={onClickLink}
			    onRightClickLink={onRightClickLink}
			    onMouseOverNode={onMouseOverNode}
			    onMouseOutNode={onMouseOutNode}
			    onMouseOverLink={onMouseOverLink}
			    onMouseOutLink={onMouseOutLink}
			    onNodePositionChange={onNodePositionChange}
			/>
	      </div>
	    )
  	}
}
export default Home