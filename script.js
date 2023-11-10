const log = (...msg) => {
  console.log(...msg);
};
////////// START YOUR SCRIPT BELOW HERE /////////////

// log(document.querySelectorAll('li')[2]);

const fname = document.querySelector('#name');
const femail = document.querySelector('#email');
const fdetails = document.querySelector('#details');
const addDetails = document.querySelector('.addDetails');

const dispName = document.querySelector('.dispName');
const dispEmail = document.querySelector('.dispEmail');
const dispDetails = document.querySelector('.dispDetails');

const displayRecord = document.querySelector('.displayRecord');

if (
  dispName.textContent === '' ||
  dispEmail.textContent === '' ||
  dispDetails.textContent === ''
) {
  displayRecord.style = 'visibility:hidden';
}

addDetails.addEventListener('click', (e) => {
  e.preventDefault();
  if (fname.value === '' || femail.value === '' || fdetails.value === '') {
    alert('enter value');
  } else {
    dispName.textContent = fname.value;
    dispEmail.textContent = femail.value;
    dispDetails.textContent = fdetails.value;
    displayRecord.style = 'visibility:visible';
  }
});
