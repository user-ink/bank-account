document.querySelector('.js-button').addEventListener('click', () => {
  const topupElement = document.querySelector('.js-input')
  const topup = Number(topupElement.value)

    let tophtml = '';
  if (topup > 1 && topup <= 30 ) {
    tophtml = `<p class="recharge" >confirm this recharge via SMS</p>`
  }
  document.querySelector('.topup-div').innerHTML = tophtml
  
});

document.querySelector('.js-button2').addEventListener('click', () => {
  const dataElement = document.querySelector('.js-data')
  const data = Number(dataElement.value)

    let datahtml = '';
  if (data > 1 && data <= 30 ) {
    datahtml = `<p class="recharge" >confirm data top up via SMS</p>`
  }
  document.querySelector('.data-div').innerHTML = datahtml
  
})