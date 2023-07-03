document.addEventListener('DOMContentLoaded', () => {
	const kappaBoxName = document.querySelector('[data-kappaBoxName]');
	const clearButton = document.querySelector('[data-btnClear]');

	// saving the contents of the input field when the user changes the value of the field
	kappaBoxName.addEventListener('input', () => {
		const inputValue = kappaBoxName.value;
		localStorage.setItem('kappaBoxName', inputValue);
	});
	// "button" to restart localstorage and input fields
	clearButton.addEventListener('click', () => {
		localStorage.removeItem('kappaBoxName');
		kappaBoxName.value = '';
	});
	// retrieve data from localStorage and display it in the input field
	const savedValue = localStorage.getItem('kappaBoxName');
	if (savedValue) {
		kappaBoxName.value = savedValue;
	}
});
