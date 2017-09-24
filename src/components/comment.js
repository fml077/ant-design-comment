import React, { Component } from 'react';

class Comment extends Component{
	constructor(props){
		super(props);
		this.state = {
			editing: true
		}
		this.changeCheck = this.changeCheck.bind(this);
	}

	edit(){
		this.setState({
			editing: true
		})
	}
	remove(){
		// alert('remove');
		this.props.deleteComment(this.props.index);
		console.log(this.props.index);
	}
	save(){
		var textVal = this.refs.textVal.value;
		console.log(textVal);
		// this.props.updateCommentText(textVal,this.props.index)
		this.setState({
			editing: false
		})
	}

	changeCheck(){
		this.setState({
			isChecked: !this.state.isChecked
		})
	}

	renderNormal(){
		return(
			<div className="commentContainer">
				<p>{this.props.children}</p>
				<button className="button-primary" onClick={this.edit.bind(this)}>Edit</button>
				<button className="button-danger" onClick={this.remove.bind(this)}>Remove</button>
			</div>
		)
	}

	renderForm(){
		return(
			<div className="commentContainer">
				<textarea ref="textVal" defaultValue={this.props.children}></textarea>
				<button className="button-save" onClick={this.save.bind(this)}>Save</button>
			</div>
		)
	}

	render(){
		if (this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderNormal();
		}
	}
}



class CommentBoard extends Component{
	constructor(props){
		super(props);
		this.state = {
			comments: [
				"hello 大家好",
				"hello 好好学习",
				"hello 天天向上",
				"hello haihi"
			]
		}
	}
	updateComment(newtext, i){
		console.log(newtext);
		var arr = this.state.comments;
		arr[i] = newtext;
		//更新状态
		this.setState({
			comments: arr
		})
	}

	removeComment(i){
		var arr = this.state.comments;
		//移除第i个
		arr.splice(i, 1);
		this.setState({
			comments: arr
		})
	}

	addNew(text){
		var arr = this.state.comments;
		arr.push(text);
		//更新状态
		this.setState({
			comments: arr
		})
	}
	// eachComment(item, i){
	// 	return(
	// 		<Comment updateCommentText={this.updateComment} key={i} index={i}>{item}</Comment>
	// 	)
	// }
	render(){
		let style={
			width: '80px',
			border: '1px solid #fff',
			background: 'rgb(110, 208, 62)',
			padding: '3px',
			cursor: 'pointer'
		}
		return(
			<div>
				<div style={style} onClick={this.addNew.bind(this, "Default text")}>Add New</div>
				<div className="commentBoard">
					{
						this.state.comments.map((item, i) => {
							return(
								<Comment 
								updateCommentText={this.updateComment} 
								deleteComment={this.removeComment}
								key={i} 
								index={i}>{item}
								</Comment>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default CommentBoard;
