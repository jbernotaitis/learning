import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router'

class PostsShow extends Component{
	static contextTypes={
		router: PropTypes.object
	};

	componentWillMount(){
		const {id} = this.props.params;
		this.props.fetchPost(id);
 	}
 	onDeleteClick(){
 		const {id} = this.props.params;
 		this.props.deletePost(id).then(()=>{
			this.context.router.push('/');
 		});
 	}

	render(){

		const {post} = this.props;
		if(!post)
		{
			return <div> loading..</div>
		}
		return(
			
			<div>
				<Link to="/">Back to list of posts</Link>
				<button
					onClick={this.onDeleteClick.bind(this)}
				 	className="btn btn-danger pull-xs-right">
				 Delete post

				 </button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);