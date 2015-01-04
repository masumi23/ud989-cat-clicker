var model = {
	//array of cats with name, url, and ClickCount
	catList: [
		{
			name:'caty',
			link: 'cat1.jpg',
			count: 0
		},
		{
			name:'precious',
			link: 'cat2.jpg',
			count: 0
		},
		{
			name:'squishy',
			link: 'cat1.jpg',
			count: 0
		},
		{
			name:'stretchy',
			link: 'cat1.jpg',
			count: 0
		},
		{
			name:'silly',
			link: 'cat1.jpg',
			count: 0
		},
		{
			name:'bob',
			link: 'cat1.jpg',
			count: 0
		}
	]
};

var octopus = {
	// Grab the list of cats from the model so that the view can set it up
	getCats: function() {
		return model.catList;
	}
	// Determine what the Current Cat because of an event listener is in the view and grab its info from the model so that the view can render it.
	// Find out from the view when a cat picture has been clicked and then update the click count on the model
};

var view = {

	renderCatList: function() {
		// get the cats so we can do stuff with them
		var cats = octopus.getCats();
		//Make a cat identifier
		var catListElem = document.getElementById('list-o-cats');
		for (var i = 0; i < cats.length; i++) {
			var catIdentifier = cats[i];
			//Make a list of the cats names
			var liElem = document.createElement('li');
			liElem.textContent = catIdentifier.name;
			catListElem.appendChild(liElem);
		}
		//adds an event listener for clicking on the cats name and create the cat
	}
	//create a view for each cat with an event listener on the cat's picture, and a counter showing how many times the cat has been clicked
};
view.renderCatList();
