const footerYear = document.querySelector('[data-footerYear]');
// ===============================
const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
// ===============================
document.addEventListener('DOMContentLoaded', currentYear);
