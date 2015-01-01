var catImageElem1 = document.getElementById('cat1');
var catImageElem2 = document.getElementById('cat2');
var countElem1 = document.getElementById('count1');
var countElem2 = document.getElementById('count2');
var count1 = 0;
var count2 = 0;

function plusOne1() {
	count1++;
	countElem1.textContent = count1;
}

function plusOne2() {
	count2++;
	countElem2.textContent = count2;
}

catImageElem1.addEventListener('click', plusOne1, false);
catImageElem2.addEventListener('click', plusOne2, false);
