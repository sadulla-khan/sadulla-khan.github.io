
//const form = document.getElementById('form');
const password = document.getElementById('password');

const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isvalid =false;
let passwordMatch = false;

function validateForm() {

    console.log("hello")
    //Using Constraint API
    isvalid = true
    passwordMatch = true
    //form.checkvalid();
   // console.log(isvalid);
   //Style Main Message for An Error
  
   //If Form is valid and password match
   if(isvalid && passwordMatch){
    console.log("hello2")
    message.textContent = 'Successfully Registered!';
    messageContainer.style.display = 'block';
    messageContainer.className = 'message-container success';
   }
}

/*function processFormData(e) {
    e.preventDefault();
   // console.log(e);

   // Validate Form
   validateForm();
}*/
// Event Listener
document.getElementById('btn').addEventListener('click', function (e) {
    // Prevent default form submission behavior
    e.preventDefault();
    validateForm();

})
