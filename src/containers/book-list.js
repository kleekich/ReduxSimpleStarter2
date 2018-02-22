import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//glue between React and Redux, and makes connect function available.

//This is a container that has direct access from Redux.
class BookList extends Component {

	renderList() {

		return this.props.books.map((book) => {

			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
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
Whenever state ever changes, 
1. this container automatically re-render with new state.books
2. the object in the state function will be asgined to props
*/
function mapStateToProps(state) {
	//Whatever is returned will show up as props inside of BookLists

	return {
		books: state.books
		//because reducer returns books we set it to state.books
	};
}


export default connect(mapStateToProps)(BookList);
//connect takes a function, and component to produce a container