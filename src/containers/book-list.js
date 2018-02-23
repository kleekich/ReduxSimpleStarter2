import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
/*
	A container is a react component that has direct connection to state
	managed by Redux.
	glue between React and Redux, and makes connect function available.
*/
class BookList extends Component {

	renderList() {

		return this.props.books.map((book) => {

			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}


	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}


/*
This mapStateToProps is the glue between Redux and React.

Whenever state ever changes, 
1. this container automatically re-render with new state.books
2. the object in the state function will be asgined to props
*/
function mapStateToProps(state) {
	//Whatever is returned will show up as props inside of BookLists

	return {
		books: state.books//->This is what Reducer returns
		//now we can access this.props.books
	};
}


/*
	Anything returned from this function will end up as props on the 
 	BookList container
*/
function mapDispatchToProps(dispatch) {
	/*
		Whenever selectBook is called, the result should be passed to 
		all of our reducers
		bindActionCreators with dispatch parameter means:
		I want to make sure that result flows through dispatch function,
		and dispatch function takes all the actions and spits back to 
		all the reducers
	*/
	return bindActionCreators({ selectBook: selectBook }, dispatch)
	//The selectBook as a value is the actiona creator that is imported 
	//at the top.
}


/* 
	Promote BookList from a compnent to a container - it needs to know
	about this new dispatch method, selectBook. Make it available as a prop.
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function, and component to produce a container