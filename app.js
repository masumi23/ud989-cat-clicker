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
	
	init: function () {
		//current cat to be displayed as first on list
		model.currentCat = model.catList[0];

		//init view
		view.init();
	},

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
		view.renderCat();
	}
};

var view = {

	init: function() {

		//store pointers to DOM elements
		this.catListElem = document.getElementById('list-o-cats');
		this.catNameElem = document.getElementById('cat-name');
		this.catImgElem = document.getElementById('cat-img');
		this.catCountElem = document.getElementById('cat-count');
		
		//renders the catlist and the current cat
		this.renderCatList();
		this.renderCat();
	},

	renderCatList: function() {

		var cats = octopus.getCats();

		//empty cat list
		this.catListElem.innerHTML = '';

		for (var i = 0; i < cats.length; i++) {
			
			var catIdentifier = cats[i];
			
			//Make a list of the cats names
			var liElem = document.createElement('li');
			liElem.textContent = catIdentifier.name;
			
			//put an event listener on cat name.
			liElem.addEventListener('click', (function(catNum){
				return function () {
					octopus.setCurrentCat(catNum);
				};
			})(i), false);

			//add element to list
			this.catListElem.appendChild(liElem);
		}
	},
	
	//create a view for each cat
	renderCat: function () {
		var cat = octopus.getCurrentCat();
		
		this.catNameElem.textContent = cat.name;
		this.catImgElem.src = cat.link;
		this.catCountElem.textContent = cat.count;
		
		//Event listener on the cat's picture
		this.catImgElem.addEventListener('click', octopus.plusOne, false);
	}
};

octopus.init();


