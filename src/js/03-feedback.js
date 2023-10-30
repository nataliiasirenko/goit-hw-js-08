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

const date = new Date("March 16, 2030 14:25:00");

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

console.log(date.toLocaleString());
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000