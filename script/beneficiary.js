const beneficiary = [];

function fun() {
    let dropdownHTML = '';
    beneficiary.forEach((dropDown) => {
    const beneficiaryName = dropDown.name;
    const beneficiaryNumber = dropDown.number;

    
    let html = `
    <div  class="name-text">
        <p>${beneficiaryName}</p>
      </div>
      <p class="number-text">${beneficiaryNumber}</p>
      <p> <span class="send-money-text">Make quick transfer</span>
      <a href="send-money.html">
      <button class="send-money-button">Send Money</button>
      </a>
      <button 
      " class="delet-button js-delete-button">Delete</button>
       </p>
      `;
      dropdownHTML += html
      document.querySelector('.js-beneficiary-output').innerHTML = dropdownHTML;

        document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      beneficiary.splice(dropDown, 1);
      fun();
    })
  })
})
  }


document.querySelector('.js-add')
.addEventListener('click', () => {
  const nameElement = document.querySelector('.js-beneficiary-name')
  const name = nameElement.value;
  nameElement.value = '';
  
  const numberElement = document.querySelector('.js-beneficiary-number')
  const number = numberElement.value 
  numberElement.value = ''; 

  if (name === '') {
    alert('Enter beneficiary name')
  } else if (number === '') {
    alert('Enter beneficiary account number')
  } else {
     beneficiary.push({
    name: name,
    number: number
  })
  }

 
  
  fun();

})



  

