import throttle from "lodash.throttle";
const formData={};
const formEl =document.querySelector(`.feedback-form`);
const textAreaEl = document.querySelector(`.feedback-form textarea`);

formEl.addEventListener(`submit`, onFormSubmit);
textAreaEl.addEventListener(`input`, throttle(onTextAreaInput, 1000));


formEl.addEventListener(`input`, (e) =>{
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name]=e.target.value
    console.log(formData);
})

populateTextArea();

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(`feedback-msg`)  
}

function onTextAreaInput(evt){
    const message = evt.target.value;
    console.log(message);
    localStorage.setItem(`feedback-msg`,message)
}

function populateTextArea(){
    const savedMessage = localStorage.getItem(`feedback-msg`)
    if(savedMessage){
        textAreaEl.value = savedMessage;
    }
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
  
setTimeout(() => {
    
}, timeout);
function name(params) {
    
}
promise = new Promise((resolve, reject) => {
    
});