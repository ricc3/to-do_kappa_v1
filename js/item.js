const itemImgs = document.querySelectorAll('.section__item-img'); // showAlleItems | toggle
const allItems = document.querySelectorAll('[data-allItemsToKappa]'); // showAlleItems
const possessed = document.querySelector('[data-possessedItemsToKappa]'); // myItems
const missing = document.querySelector('[data-missingItemsToKappa]'); // missingItems
const clearButton = document.querySelector('[data-btnClear]');
// ===================================================
// === SHOW ALL ITEMS
const showAlleItems = () => {
	const items = itemImgs.length;
	for (let x of allItems) {
		x.innerText = items;
	}
};
// ===================================================
// === SAVE LOCALSTORAGE CHECK ITEMS
const saveToLocalStorage = () => {
	const iHaveItemImgs = document.querySelectorAll('.iHaveItemImg');
	const items = [];

	iHaveItemImgs.forEach((img) => {
		items.push(img.src);
	});

	localStorage.setItem('saveItems', JSON.stringify(items));
};
// ===================================================
// === RETRIEVE FROM LOCAL STORAGE
const retrieveFromLocalStorage = () => {
	const savedItems = localStorage.getItem('saveItems');

	if (savedItems) {
		const items = JSON.parse(savedItems);
		const itemImgs = document.querySelectorAll('.section__item-img');

		itemImgs.forEach((img) => {
			if (items.includes(img.src)) {
				img.classList.add('iHaveItemImg');
				img.nextElementSibling.classList.add('iHaveItem');
			}
		});
	}
};
// ===================================================
// === TOGGLE CLASS I HAVE ITMES
const toggle = (e) => {
	const itemImg = e.target;
	const nextElement = e.target.nextElementSibling;

	itemImg.classList.toggle('iHaveItemImg');
	nextElement.classList.toggle('iHaveItem');

	saveToLocalStorage();
	myItems();
	missingItems();
};
// ===================================================
// === I HAVE ITEMS
const myItems = () => {
	const items = document.querySelectorAll('.iHaveItemImg');
	const owneda = items.length;
	possessed.innerText = owneda;
	return possessed;
};
// ===================================================
// === MISS ITEMS
const missingItems = () => {
	const owned = myItems();
	const showMissingItems = itemImgs.length - owned.textContent;
	missing.innerText = showMissingItems;
};
// ===================================================
// === CLEANING UP PROGRESS
const clearLocalStorage = () => {
	const iHaveItemImgs = document.querySelectorAll('.iHaveItemImg');

	iHaveItemImgs.forEach((img) => {
		img.classList.remove('iHaveItemImg');
		img.nextElementSibling.classList.remove('iHaveItem');
	});

	localStorage.removeItem('saveItems');
	myItems();
	missingItems();
};
// ===================================================
// === RUN SCRIPTS / FUNCTION
showAlleItems();
retrieveFromLocalStorage();
itemImgs.forEach((img) => {
	img.addEventListener('click', (e) => {
		toggle(e);
	});
});
myItems();
missingItems();
clearButton.addEventListener('click', clearLocalStorage);
