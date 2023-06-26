const itemsKappa = document.querySelectorAll('.section__item');
const headerItems = document.querySelector('.header__items');

const allItems = () => {
	const item = itemsKappa.length;
	headerItems.innerText = item;
};
allItems();

// console.log('W bazie znajduje się ' + itemsKappa.length + ' items');
