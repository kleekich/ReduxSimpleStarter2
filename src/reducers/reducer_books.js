
/*
    Reducer provides value of app's state
	ex) App state

	{    (key: value)
		books:[{title: 'Harry potter'}, {title: 'Javascript'}] //Books Reducer
		activeBook: {title: 'Javascript for dummy'} // ActiveBook Reducer
	}

*/
export default function() {
	return [
		{title: 'Javascript: The Good parts'},
		{title: 'Harry Potter'},
		{title: 'THe Dark Tower'},
		{title: 'Eloquent Ruby'}
	]

}