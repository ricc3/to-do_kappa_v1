const sectionItem = document.querySelectorAll('.section__item');
const ok = document.querySelectorAll('.ok');
const headerItems = document.querySelectorAll('.header__items');
const possessed = document.querySelector('.possessed');
const missingItems = document.querySelector('.missingItems');
// ===============================
const allItems = () => {
	const items = sectionItem.length;
	for (let item of headerItems) {
		item.innerText = items;
	}
};
const myItems = () => {
	const items = ok.length;
	possessed.innerText = items;
};
const missing = () => {
	const missing = sectionItem.length - ok.length;
	missingItems.innerText = missing;
};
// ===============================
allItems();
myItems();
missing();
