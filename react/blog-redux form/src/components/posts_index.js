import React, { Component } from 'react';
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

import { Link } from 'react-router'

 class PostsIndex extends Component{

 	renderPosts(){
 		const {posts} = this.props;

 		return  posts.map(post=>{
	 			return(
	 				<li key={post.id} className="list-group-item">
	 					<Link to={"posts/" + post.id} >
		 					<span className="pull-xs-right">{post.categories ? post.categories : 'no category'}</span>
		 					<strong>{ post.title ? post.title : 'no title'}</strong>
	 					</Link>
	 				</li>
				);

 		})


 	}
 	componentWillMount(){
		this.props.fetchPosts();
 	}

 	render(){
 		this

		return(
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add a post</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
 	}
}

function mapStateToProps(state){
	return {posts: state.posts.all};
}

//function mapDispatchToProps(dispatch){
//	return bindActionCreators({fetchPosts}, dispatch);
//}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)