var catImageElem = document.getElementById('cat1');
var countElem = document.getElementById('count');
var count = 0;

function plusOne() {
	count++;
	countElem.textContent = count;
}

catImageElem.addEventListener('click', plusOne, false);
