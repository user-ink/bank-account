 const balance = [{
  big1: '$84,457,000.00',
  big2: '$58,722,000.00',
  big3: '$10,943,001.00',
  big4: '$40,321,00',
  big5: '$72,623,499.00',
  big6: '$37,000.00',
  big7: '$114,288.00',
  big8: '$64,922.00',
  big9: '$76,000,000.00',
  big10: '$44,543,00.00'
}]

balance.forEach((balance) => { 
  const randomNumber = Math.random();
  let amount ='';
if (randomNumber <= 0.111) {
  amount = balance.big1 
} else if (randomNumber >= 0.111 && randomNumber < 0.222) {
  amount = balance.big2
} else if (randomNumber >= 0.222 && randomNumber < 0.333) {
  amount = balance.big3
} else if (randomNumber >= 0.333 && randomNumber < 0.444) {
  amount = balance.big4
} else if (randomNumber >= 0.444 && randomNumber < 0.555) {
  amount = balance.big5
} else if (randomNumber >= 0.555 && randomNumber < 0.666) {
  amount = balance.big6
} else if (randomNumber >= 0.666 && randomNumber < 0.777) {
  amount = balance.big7
} else if (randomNumber >= 0.777 && randomNumber < 0.888) {
  amount = balance.big8
} else if (randomNumber >= 0.888 && randomNumber < 0.999) {
  amount = balance.big9
} else if (randomNumber >= 0.999 && randomNumber < 1) {
  amount = balance.big10
}
const currentBalance = document.querySelector('.js-balance')
currentBalance.innerHTML = amount

const hidden = document.querySelector('.js-hide')

hidden.addEventListener('click', () => { if (currentBalance.style.visisbility === "hidden") {
  currentBalance.style.visibility = "visible"
  hidden.textContent = "Hide Blance"
} else{
  currentBalance.style.visisbility = "hidden"
  hidden.textContent = "Show Balance"
};
  
})


let ledger = '';
if (amount === balance.big1) {
  ledger = amount
} else if (amount === balance.big2) {
  ledger = amount
} else if (amount === balance.big3) {
  ledger = amount
} else if (amount === balance.big4) {
  ledger = amount
} else if (amount === balance.big5) {
  ledger = amount
} else if (amount === balance.big6) {
  ledger = amount
} else if (amount === balance.big7) {
  ledger = amount
} else if (amount === balance.big8) {
  ledger = amount
} else if (amount === balance.big9) {
  ledger = amount
} else if (amount === balance.big10) {
  ledger = amount
} 
document.querySelector('.js-ledger').innerHTML = ledger
});;





