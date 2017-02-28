import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import VideoList from './video_list'
import SearchBar from './search_bar'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyCukZcxqQRadcmUl7b6F7WJwOPz6yBEPDg';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {videos: [], selectedVideo: null};

		this.videoSearch('surfboards')
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) =>{			
			this.setState({videos, selectedVideo: videos[0]});
		});
	}

	render() {
		const videoSearch = _.debounce(term=>{this.videoSearch(term)}, 300)
		return (
			<div>
				<div className="row">
			  		<SearchBar onSearchTermChange={videoSearch} />
				</div>
				<div className="row">
			  		<VideoDetail video={this.state.selectedVideo}/>
				</div>
				<div className="row">
					<VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
				</div>
		  	</div>
	  	);
	}
}

export default App;