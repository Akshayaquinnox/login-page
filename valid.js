//validation for input

function validated(){

var username=document.getElementById('Username').value
var password=document.getElementById('Password').value

if(username==""){
    alert('username required');
}
else{
    alert('submitted');
}
if(password==""){
    alert('password required');
}
else{
    alert('password submitted');
}


}