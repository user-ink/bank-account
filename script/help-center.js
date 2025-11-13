const list = [{
  header: 'Security & Privacy',
  line1: 'Alert setup',
  line2: 'Dispute charge',
  line3: 'Fingerprint (Touch ID)',
  line4: 'Forget ID/password',
  line5: 'Security center',
},{
   header: 'Card Management',
  line1: 'Activate card',
  line2: 'Credit card PIN',
  line3: 'Lock/unlock debit card',
  line4: 'Redeem rewards',
  line5: 'Replace card',
},{
  header: 'Account Management',
  line1: 'Account balace',
  line2: 'Reorder checks',
  line3: 'Routing number',
  line4: 'Statement of document',
  line5: 'Update contact info',
},{
   header: 'Digital Services',
  line1: 'How to Guide for Digital Banking',
  line2: 'Digital wallet - pay using phone',
  line3: 'Enroll in online/mobile banking',
  line4: 'ATM  card payment assistance',
  line5: 'Paperless statements',
},{
  header: 'Payments & Transfers',
  line1: 'Bill Pay',
  line2: 'Direct deposit',
  line3: 'Mobile check deposit',
  line4: 'Transfer money',
  line5: 'Wire transfers',
},{
  header: 'Tools',
  line1: 'Accessibility help',
  line2: 'PNC Bank life plan',
  line3: 'Exchange foreign currency',
  line4: 'FICO@ scor',
  line5: 'Goals tool',
}]

let theHTML = '';
list.forEach((build) => {
  const thehtml = `
  <div class="next-div">
      <p class="head-topic">${build.header}</p>
      <p class="content">${build.line1}</p>
      <p class="content">${build.line2}</p>
      <p class="content">${build.line3}</p>
      <p class="content">${build.line4}</p>
      <p class="content">${build.line5}</p>
    </div>
  `;
  theHTML += thehtml
  document.querySelector('.empty-div').innerHTML = theHTML;
})

