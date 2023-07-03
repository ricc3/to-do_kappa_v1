document.addEventListener('DOMContentLoaded', () => {
	const sectionItem = document.querySelectorAll('.section__item');
	const ok = document.querySelectorAll('.ok');
	const items = document.querySelectorAll('[data-allItemsToKappa');
	const possessed = document.querySelector('[data-possessedItemsToKappa]');
	const missing = document.querySelector('[data-missingItemsToKappa]');
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
		const showMissing = sectionItem.length - ok.length;
		missing.innerText = showMissing;
	};
	// ===============================
	allItems();
	myItems();
	missingItems();
});
