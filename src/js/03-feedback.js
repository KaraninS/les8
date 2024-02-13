import throttle from 'lodash.throttle';

const formBox = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const KEY_LOCALSTORAGE = 'feedback-form-state';
const textInMemory = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
const inputObject = {};

if (textInMemory) {
  inputEmail.value = textInMemory.email;
  textareaMessage.value = textInMemory.message;
}

formBox.addEventListener('input', throttle(addToLocal, 500));
formBox.addEventListener('submit', sendForm);

function addToLocal() {
  inputObject[inputEmail.name] = inputEmail.value;
  inputObject[textareaMessage.name] = textareaMessage.value;
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(inputObject));
}

function sendForm(event) {
  event.preventDefault();
  console.log(inputObject);
  event.currentTarget.reset();
  localStorage.clear();
}


















// email.addEventListener("input", (ev) => {
//     localStorage.setItem("feedback-form-state", ev)
//     console.log(ev)
// })

// feedback.addEventListener("submit", handleSubmit)

// function handleSubmit (event){
//     event.preventDefault();
//     // console.dir(event.currentTarget.children)
//     const form = event.target.elements;
//     // console.log(form)
//   const email = form.email.value;
//     const message = form.message.value;
//     localStorage.setItem("feedback-form-state",email)
  
// //   if (login === "" || password === "") {
// //     return console.log("Please fill in all the fields!");
// //   }

//   console.log(`email: ${email}, message: ${message}`);
// //   form.reset();
// }
// // localStorage.setItem("feedback-form-state")