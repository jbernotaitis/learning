import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux'
import { Link } from 'react-router'

const renderTextField = field =>  
  <div>
    <input {...field.input} type="text" className="form-control"/> 
    <div className="text-help">
		{field.meta.touched && field.meta.invalid ? field.meta.error: ''}
	</div>
  </div>

 const renderTextAreaField = field =>   
  <div>
    <textarea {...field.input} className="form-control"/> 
    <div className="text-help">
		{field.meta.touched && field.meta.invalid ? field.meta.error: ''}
	</div>
  </div>


class PostsNew extends Component{
	static contextTypes={
		router: PropTypes.object
	};

	onSubmit(props){
		this.props.createPost(props).then(()=>{
			this.context.router.push('/');
		});

	}

	render(){
		const { handleSubmit, createPost  } = this.props;
		return(			
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new post</h3>
				<div className="form-group"> 
					<label htmlFor="title">Title</label>
					<Field name="title" component={renderTextField} />
				</div>
				<div className="form-group"> 
					<label htmlFor="categories">Categories</label>
					<Field name="categories" component={renderTextField} />
				</div>
				<div className="form-group"> 
					<label htmlFor="content">Content</label>
					<Field name="content" component={renderTextAreaField} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
			
		);
	}
}

function validate(values){
	const errors = {};
	
	if(!values.title){
		errors.title = "enter title";
	}
	if(!values.categories){
		errors.categories = "enter categories";
	}
	if(!values.content){
		errors.content = "enter some content";
	}

	return errors;
}

export default connect(null, {createPost} )(reduxForm({
	form: "new post form",
	validate
})(PostsNew));