
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
		{title: 'Javascript: The Good parts', pages: 101},
		{title: 'Harry Potter', pages: 91},
		{title: 'THe Dark Tower', pages: 11},
		{title: 'Eloquent Ruby', pages: 1}
	]

}