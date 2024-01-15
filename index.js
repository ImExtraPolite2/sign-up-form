const createAccount = () => {
  const error = document.querySelectorAll('.error');

  error.forEach(password => {
    if (password.value !== password.value) {
      console.log('not equal');
    } else {
      console.log('equal');
    }
  })
}

const create = document.querySelector('button');

create.addEventListener('click', () => {
  createAccount();
})
