import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';




/*
    Reducer provides value of app's state
	ex) App state

	{    (key: value)
		books:[{title: 'Harry potter'}, {title: 'Javascript'}] //Books Reducer
		activeBook: {title: 'Javascript for dummy'} // ActiveBook Reducer
	}
	

*/
//Here we have mapping
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
