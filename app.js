var catList = [
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
];

var currentCat;
var catListElem = document.getElementById('list-o-cats');
var catNameElem = document.getElementById('cat-name');
var catImgElem = document.getElementById('cat-img');
var catCountElem = document.getElementById('cat-count');

for (var i = 0; i < catList.length; i++) {
	var cat = catList[i];
	var liElem = document.createElement('li');
	liElem.textContent = cat.name;
	catListElem.appendChild(liElem);

	liElem.addEventListener('click', (function(catNum){
		return function() {
			var cat = catList[catNum];
			currentCat = cat;
			catNameElem.textContent = cat.name;
			catImgElem.src = cat.link;
			catCountElem.textContent = cat.count;
		};
	})(i), false);
}


function plusOne() {
	currentCat.count++;
	catCountElem.textContent = currentCat.count;
}

catImgElem.addEventListener('click', plusOne, false);