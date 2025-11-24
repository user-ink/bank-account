const notification1 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
      <div class="text-div">
        <p class="text"> <span class="daily-pay">DAILY PAY.</span> You received <span class="span">&#163 2,000.00 </span>from Balfour Beatty</p>
      </div>
      </div>`;

      const notification2 = `<div class="first-div">
      <div class="img-div">
        <img src="icons/download (8).png" class="pnc-icon">
        <p class="incoming-text">POS Transaction Successful</p>
      </div>
      <div class="text-div">
        <p class="text"> <span class="daily-pay">CARD ..4557 PAYMENT</span> of <span class="withdrawal">&#163 9,419.00</span> proessed at Walmart store</p>
      </div>
   </div>`;

   const notification3 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">ATM Transaction Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">CARD ..4557 WITHDRAWAL</span> of <span class="withdrawal">&#163 7,000.00</span> proessed at Metro ATM gallerry</p>
    </div>
   </div>`;
   const notification4 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">POS Transaction Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">CARD 4557 PAYMENT</span> of <span class="withdrawal">&#163 14,000.00</span> proessed from T Victoria POS-2ITMVANG</p>
    </div>
   </div>`;
   const notification5 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">DAILY PAYMENT.</span> You received <span class="span">&#163 1,434.00</span> from Balfour Beatty Plc.</p>
    </div>
   </div>`;
   const notification6 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">GSK PLC.</span> You received <span class="span">&#163 60,000.00</span> from GSK plc</p>
    </div>
   </div>`;
   const notification7 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">GSK PLC.</span> You received <span class="span">&#163 37,860.00</span> from GSK plc</p>
    </div>
   </div>`;
   const notification8 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">GSK PLC.</span> You received <span class="span">&#163 82,400.00</span> from GSK plc</p>
    </div>
   </div>`;
   const notification9 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">ATM Transaction Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">CARD ...4557 WITHDRAWAL</span> of <span class="withdrawal">&#163 3,000.00</span> proessed at Metro ATM gallerry</p>
    </div>
   </div>`;
   const notification10 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">ATM Transaction Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">CARD ...4557 WITHDRAWAL</span> of <span class="withdrawal">&#163 5,000.00<span> proessed at PNC ATM gallerry</p>
    </div>
   </div> `;

const randomNumber = Math.random();
let message ='';
if (randomNumber >= 0 && randomNumber < 0.111) {
  message = notification1 
} else if (randomNumber >= 0.111 && randomNumber < 0.222) {
  message = notification2
} else if (randomNumber >= 0.222 && randomNumber < 0.333) {
  message = notification3
} else if (randomNumber >= 0.333 && randomNumber < 0.444) {
  message = notification4
} else if (randomNumber >= 0.444 && randomNumber < 0.555) {
  message = notification5
} else if (randomNumber >= 0.555 && randomNumber < 0.666) {
  message = notification6
} else if (randomNumber >= 0.666 && randomNumber < 0.777) {
  message = notification7
} else if (randomNumber >= 0.777 && randomNumber < 0.888) {
  message = notification8
} else if (randomNumber >= 0.888 && randomNumber < 0.999) {
  message = notification9
} else if (randomNumber >= 0.999 && randomNumber < 1) {
  message = notification10
}
  
const notify = document.querySelector('.js-notification')
notify.innerHTML = message;

const notify1 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">GSK PLC.</span> You received <span class="span">&#163 82,400.00</span> from GSK plc</p>
    </div>
   </div>`;
   const notify2 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">ATM Transaction Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">CARD ...4557 WITHDRAWAL</span> of <span class="withdrawal">&#163 3,000.00</span> proessed at Metro ATM gallerry</p>
    </div>
   </div>`;
   const notify3 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">DAILY PAYMENT.</span> You received <span class="span">&#163 1,434.00</span> from Balfour Beatty Plc.</p>
    </div>
   </div>`;
   const notify4 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">GSK PLC.</span> You received <span class="span">&#163 60,000.00</span> from GSK plc</p>
    </div>
   </div>`;
   const notify5 = `<div class="first-div">
    <div class="img-div">
      <img src="icons/download (8).png" class="pnc-icon">
      <p class="incoming-text">Incoming Transfer Successful</p>
    </div>
    <div class="text-div">
      <p class="text"> <span class="daily-pay">GSK PLC.</span> You received <span class="span">&#163 37,860.00</span> from GSK plc</p>
    </div>
   </div>`;

const randomNumber2 = Math.random();
let message2 ='';
if (randomNumber2 >= 0 && randomNumber2 < 0.222) {
  message2 = notify1 
} else if (randomNumber2 >= 0.222 && randomNumber2 < 0.444) {
  message2 = notify2
} else if (randomNumber2 >= 0.444 && randomNumber2 < 0.666) {
  message2 = notify3
} else if (randomNumber >= 0.666 && randomNumber2 < 0.888) {
  message2 = notify4
} else if (randomNumber2 >= 0.888 && randomNumber2 < 1) {
  message2 = notify5
} 
document.querySelector('.js-notification2').innerHTML = message2;

/* cashback notice*/
const notice = document.querySelector('.js-notification3')
notify.innerHTML = message;

const notice1 = `
<div class="first-div">
    <div class="marchant-div">
      <div class="glob-div">
        <img src="icons/images (4).jpeg" class="glob-icon">
      </div>
      <div class="marchant-text">
        <p>Security</p>
        <p> <span class="span">OCC</span> licensed, <span class="span">FDIC</span> insured</p>
      </div>
    </div>
   </div>`;
   const notice2 = `<div class="first-div">
    <div class="marchant-div">
      <div class="glob-div">
        <img src="icons/download (3).jpeg" class="glob-icon">
      </div>
      <div class="marchant-text">
        <p>Online Merchant Acceptance</p>
        <p>Accepted by <span class="span">100,000+</span> online merchants including NETFLIX and others</p>
      </div>
    </div>
   </div>`;
   const notice3 = `<div class="first-div">
    <div class="marchant-div">
      <div class="glob-div">
        <img src="icons/download (4).jpeg" class="cashback-icon">
      </div>
      <div class="marchant-text">
        <p>Limited- time cashback</p>
        <p>wine up to<span class="span">10% cashback on card transactions</span></p>
      </div>
    </div>
   </div>`;
   const notice4 = `<div class="first-div">
    <div class="marchant-div">
      <div class="glob-div">
        <img src="icons/images (5).jpeg" class="cashback-icon">
      </div>
      <div class="marchant-text">
        <p>Rep Your State Of Origin </p>
        <p><span class="span">Get a virtual PNC card unique to your state of origin</span></p>
      </div>
    </div>
   </div>`;
  

const randomNumber3 = Math.random();
let message3 ='';
if (randomNumber3 >= 0 && randomNumber3 < 0.222) {
  message3 = notice1 
} else if (randomNumber3 >= 0.222 && randomNumber3 < 0.444) {
  message3 = notice2
} else if (randomNumber3 >= 0.444 && randomNumber3 < 0.666) {
  message3 = notice3
} else if (randomNumber3 >= 0.666 && randomNumber3 < 1) {
  message2 = notice4
} 
document.querySelector('.js-notification3').innerHTML = message3;

