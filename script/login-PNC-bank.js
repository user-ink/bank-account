function login() {
const cardidElement = document.
querySelector('.js-card')
const cardid = cardidElement.value;

const passwordidElement = document.querySelector('.js-password')
const passwordid = passwordidElement.value;
let LOG = '';
if (cardid === '4540168290104557' && passwordid === 'anna520#wave') {
  loginhtml = `<a href="bank.html">
  <p class="login-js">Log me in</p>
  </a>`
} else {loginhtml = `<p class="not-found">ID not found</p>`}

cardidElement.value = '';
passwordidElement.value = '';

LOG += loginhtml;
document.querySelector('.login-html').innerHTML = LOG;
}

