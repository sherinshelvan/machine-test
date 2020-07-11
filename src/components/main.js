import { Component } from 'react'
//This js file is work as a constructor. it should be act as a super controller of all component
export class Main extends Component {
	check_login = () => {
		// console.log('login check function');
	};
	accessPermission = async () => {
		return new Promise((resolve) => {
			var response = {
				permission : localStorage.getItem("token") ? true : false,
				redirect : "/login"
			};
			if(response.permission){
				resolve(response);
			}
			else{
				resolve(response);
			}
		});
	}
	// we can access all regular data from here
	config = () => {
		var fbUrl = "https://www.facebook.com/";
        var twitterurl = "http://twitter.com/";
		var  config = {
			"environment" : "development", //development | production
			"api_url" : "",
			"origin" : "",
			"map_api_key" : "",
			"social_media_links" : {
				"facebook" : fbUrl,
				"twitter" : twitterurl,
			}
		};
		return config;
	};
}
export default Main