

const username=document.querySelector("#Username");
const password=document.querySelector("#Password");
const submit=document.querySelector("#submit");

submit.addEventListener('click',event=>{
    event.preventDefault();
    if(username.value.trim()==''){
        console.log(password);
    }
})