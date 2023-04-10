// The const function grabs the message from the user 
// starting with the message input
const messageInput = document.getElementById("message-input");
// Must add a function to submit.
//1st you have to create the function get message. 
// Get access to whereever the message
// should be displayed which is the message output.

// Add an event listner to the input box so that then user can enter their message, 
//and click on the enter key and be able to enter their message that way.
messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    getMessage();
});



function getMessage(){
    // We get access by using the
    // document.getElementById function
    document.getElementById("message-output").
    // Set the inner HTML of the 
    // p tag = to the message that is 
    // stored in the message-input. 
    //().value)must be added to the messageInput function in order for it to work.
    innerHTML = messageInput.value;
    // This function below ensures that when we 
    // click the submit box the enter a message field is cleared.
    // The input box is set to an empty string.
    messageInput.value = "";
}

