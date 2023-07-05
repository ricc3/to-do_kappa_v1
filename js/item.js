'use strict';
// ===============================
// let
let sectionItem;
let items;
let ok;
let possessed;
let missing;
let itemImg;
// ===============================
const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
// ===============================
const prepareDOMElements = () => {
	sectionItem = document.querySelectorAll('.section__item'); // allItems: all items number
	items = document.querySelectorAll('[data-allItemsToKappa'); // allItems: show number all items in box
	ok = document.querySelectorAll('.iHaveItem'); // myItems: my items
	possessed = document.querySelector('[data-possessedItemsToKappa]'); // myItems: show number my items in box
	missing = document.querySelector('[data-missingItemsToKappa]'); // missingItems: show number missing items in box
	itemImg = document.querySelectorAll('.section__item-img'); // toggle: i have / i don't have items
};
const prepareDOMEvents = () => {
	allItems();
	myItems();
	missingItems();
	itemImg.forEach((img) => {
		img.addEventListener('click', toggle);
	});
};
// ===============================
const allItems = () => {
	const showItems = sectionItem.length;
	for (let x of items) {
		x.innerText = showItems;
	}
};
const myItems = () => {
	const showItems = ok.length;
	possessed.innerText = showItems;
};
const missingItems = () => {
	const showMissingItems = sectionItem.length - ok.length;
	missing.innerText = showMissingItems;
};
const toggle = (e) => {
	const itemImg = e.target;
	const nextElement = e.target.nextElementSibling;

	if (itemImg.matches('.section__item-img')) {
		itemImg.classList.toggle('iHaveItemImg');
		nextElement.classList.toggle('iHaveItem');
	}
	ok = document.querySelectorAll('.iHaveItem');
	myItems();
	missingItems();
};
// ===============================
document.addEventListener('DOMContentLoaded', main); // run the script after loading
