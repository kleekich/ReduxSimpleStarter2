import React, { Component } from 'react';
import { connect} from 'react-redux';

//This is a container that has direct access from Redux.
class BookList extends Component {

	renderList() {

		return this.props.books.map((book) => {

			return (

				<li key={book.title} className="list-group-itme">{book.title}</li>
		})
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}