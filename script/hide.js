
const jsBalance = document.querySelector('.js-balance');

const jsHide = document.querySelector('.js-hide')

jsHide.addEventListener('click', () => {
jsBalance.style.visibility = "hidden"
jsHide.textContent = "Show Balance"
})
