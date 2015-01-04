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
	],

	currentCat: null
};

var octopus = {
	
	// Grab the list of cats from the model so that the view can set it up
	getCats: function() {
		return model.catList;
	},
	
	// Grab cats info from the model so that the view can render it.
	setCurrentCat: function(catNum) {
		model.currentCat = model.catList[catNum];
		view.renderCat();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},
	
	// Find out from the view when a cat picture has been clicked and then update the click count on the model
	plusOne: function() {
		model.currentCat.count++;
		console.log('h00', model.currentCat.count);
		view.renderCat();
	}
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
			
			//put an event listener on cat name.
			liElem.addEventListener('click', (function(catNum){
				return function () {
					octopus.setCurrentCat(catNum);
				};
			})(i), false);
		}
	},
	
	//create a view for each cat
	renderCat: function () {
		var cat = octopus.getCurrentCat();
		var catNameElem = document.getElementById('cat-name');
		var catImgElem = document.getElementById('cat-img');
		var catCountElem = document.getElementById('cat-count');
		
		catNameElem.textContent = cat.name;
		catImgElem.src = cat.link;
		catCountElem.textContent = cat.count;
		
		//Event listener on the cat's picture
		catImgElem.addEventListener('click', octopus.plusOne, false);
	}
};
view.renderCatList();








