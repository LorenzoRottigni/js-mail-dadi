//Client mail
const mailInput = document.getElementById('mail-input');
const button = document.querySelector('button');
//Mails allowed
const whiteList = ['lorenzo@rottigni.net','lorenzo@rottigni.tech','boolean@careers.com','hello@google.com'];
//Output elements
const outputContainer = document.querySelector('.d-none');
const outputTarget = document.getElementById('output-target');

button.addEventListener("click", function(){
    //Boolean var to stop the loop
    let accessGranted;
    //drom d-none to d-block
    outputContainer.style.setProperty('display', 'block', 'important');
    //while i<array.lenght && access not granted
    for (let i = 0; i < whiteList.length && !accessGranted; i++) {
        const whiteListMail = whiteList[i];
        //if inserted email = allowed email
        if(mailInput.value.toLowerCase() === whiteListMail.toLowerCase()){
            //output
            outputTarget.textContent = 'access granted for '+ mailInput.value;
            //Access granted ==> stop loop
            accessGranted = true
        }else
            outputTarget.textContent = 'access denied'
    }
});