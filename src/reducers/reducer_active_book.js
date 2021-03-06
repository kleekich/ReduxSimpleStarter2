
/*
    Reducer provides value of app's state
	ex) App state

	{    (key: value)
		books:[{title: 'Harry potter'}, {title: 'Javascript'}] //Books Reducer
		activeBook: {title: 'Javascript for dummy'} // ActiveBook Reducer
	}

*/
//State argument is not application state, only the state
//this reducdder is responsible for.
export default function(state = null, action) {
	switch(action.type){
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state;
}