const payments = [{
  date: 'Date',
  description: 'Description',
  ref: 'Ref.',
  withdrawal: 'Withdrawals',
  deposit: 'Deposits',
  balance: 'Balance',
}]

let pays = '';

payments.forEach((payment) => {
    pays += `
 <div class="details-div">${payment.date}</div>
      <div class="details-div">${payment.description}</div>
      <div class="details-div">${payment.ref}</div>
      <div class="details-div">${payment.withdrawal}</div>
      <div class="details-div">${payment.deposit}</div>
      <div class="details-div">${payment.balance}</div>`; 
})
document.querySelector('.js-history').innerHTML = pays;


/* BLUE ROW */ 
const lightblueRow = [{
  date: '2025',
  description: 'Interac Refund - ELECTRONICS',
  ref: '1559',
  withdrawal: '51.08',
  deposit: '--',
  balance: '40,321.00',
},
{
  date: '2025',
  description: 'ATM Withdrawal - INTERAC',
  ref: '3998',
  withdrawal: '2,000.00',
  deposit: '--',
  balance: '38,321.00',
},{
  date: '2025',
  description: 'Payroll Deposit - HOTEL',
  ref: '--',
  withdrawal: '--',
  deposit: '93,250.00',
  balance: '400,743.85',
},{
  date: '2025',
  description: 'Interac Purchase - SUPERMARKET',
  ref: '3443',
  withdrawal: '65.02',
  deposit: '--',
  balance: '400,743.19.8',
},{
  date: '2025',
  description: 'Web Bill Payment Amex',
  ref: '6539',
  withdrawal: '1000',
  deposit: '--',
  balance: '200,643.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK',
  ref: '--',
  withdrawal: '--',
  deposit: '82,400.00',
  balance: '300,805.19.8',
},{
  date: '2025',
  description: 'Telephone Bill Payment - VISA',
  ref: '2475',
  withdrawal: '8.77',
  deposit: '82,400.00',
  balance: '900,805.11.8',
},{
  date: '2025',
  description: 'Pre-Auth. Payment - INSURANCE',
  ref: '--',
  withdrawal: '64.77',
  deposit: '82,400.00',
  balance: '400,762.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK Plc',
  ref: '--',
  withdrawal: '--',
  deposit: '200,00.00',
  balance: '600,743.85',
},
{
  date: '2025',
  description: 'ATM Withdrawal - INTERAC',
  ref: '3998',
  withdrawal: '2,000.00',
  deposit: '--',
  balance: '38,321.00',
},{
  date: '2025',
  description: 'Payroll Deposit - HOTEL',
  ref: '--',
  withdrawal: '--',
  deposit: '93,250.00',
  balance: '700,743.85',
},{
  date: '2025',
  description: 'Interac Purchase - SUPERMARKET',
  ref: '3443',
  withdrawal: '65.02',
  deposit: '--',
  balance: '400,743.19.8',
},{
  date: '2025',
  description: 'Web Bill Payment Amex',
  ref: '6539',
  withdrawal: '1000',
  deposit: '--',
  balance: '400,643.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK',
  ref: '--',
  withdrawal: '--',
  deposit: '82,400.00',
  balance: '700,805.19.8',
},{
  date: '2025',
  description: 'Telephone Bill Payment - VISA',
  ref: '2475',
  withdrawal: '8.77',
  deposit: '82,400.00',
  balance: '865,805.11.8',
},{
  date: '2025',
  description: 'Pre-Auth. Payment - INSURANCE',
  ref: '--',
  withdrawal: '64.77',
  deposit: '82,400.00',
  balance: '955,762.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK Plc',
  ref: '--',
  withdrawal: '--',
  deposit: '200,00.00',
  balance: '600,743.85',
},,
{
  date: '2025',
  description: 'ATM Withdrawal - INTERAC',
  ref: '3998',
  withdrawal: '2,000.00',
  deposit: '--',
  balance: '38,321.00',
},{
  date: '2025',
  description: 'Payroll Deposit - HOTEL',
  ref: '--',
  withdrawal: '--',
  deposit: '93,250.00',
  balance: '400,743.85',
},{
  date: '2025',
  description: 'Interac Purchase - SUPERMARKET',
  ref: '3443',
  withdrawal: '65.02',
  deposit: '--',
  balance: '400,743.19.8',
},{
  date: '2025',
  description: 'Web Bill Payment Amex',
  ref: '6539',
  withdrawal: '1000',
  deposit: '--',
  balance: '549,643.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK',
  ref: '--',
  withdrawal: '--',
  deposit: '82,400.00',
  balance: '400,805.19.8',
},{
  date: '2025',
  description: 'Telephone Bill Payment - VISA',
  ref: '2475',
  withdrawal: '8.77',
  deposit: '82,400.00',
  balance: '598,805.11.8',
},{
  date: '2025',
  description: 'Pre-Auth. Payment - INSURANCE',
  ref: '--',
  withdrawal: '64.77',
  deposit: '82,400.00',
  balance: '400,762.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK Plc',
  ref: '--',
  withdrawal: '--',
  deposit: '200,00.00',
  balance: '600,743.85',
},
{
  date: '2025',
  description: 'ATM Withdrawal - INTERAC',
  ref: '3998',
  withdrawal: '2,000.00',
  deposit: '--',
  balance: '38,321.00',
},{
  date: '2025',
  description: 'Payroll Deposit - HOTEL',
  ref: '--',
  withdrawal: '--',
  deposit: '93,250.00',
  balance: '400,743.85',
},{
  date: '2025',
  description: 'Interac Purchase - SUPERMARKET',
  ref: '3443',
  withdrawal: '65.02',
  deposit: '--',
  balance: '400,743.19.8',
},{
  date: '2025',
  description: 'Web Bill Payment Amex',
  ref: '6539',
  withdrawal: '1000',
  deposit: '--',
  balance: '400,643.19.8',
},{
  date: '2025',
  description: 'Payroll Deposit - GSK',
  ref: '--',
  withdrawal: '--',
  deposit: '82,400.00',
  balance: '700,805.19.8',
},
]

let lightblue = '';

lightblueRow.forEach((light) => {
  lightblue += `
  <div class="blue-div">${light.date}</div>
      <div class="blue-div">${light.description}</div>
      <div class="blue-div">${light.ref}</div>
      <div class="blue-div">${light.withdrawal}</div>
      <div class="blue-div">${light.deposit}</div>
      <div class="blue-div">${light.balance}</div>`;
})

document.querySelector('.js-history1').innerHTML = lightblue;
