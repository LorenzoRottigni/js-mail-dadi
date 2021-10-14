const mailInput = document.getElementById('mail-input');
const button = document.querySelector('button');
const whiteList = ['lorenzo@rottigni.net','lorenzo@rottigni.tech','bolean@careers.com','hello@google.com'];
const outputContainer = document.querySelector('.d-none');
const outputTarget = document.getElementById('output-target');

button.addEventListener("click", function(){
    let accessGranted;
    for (let i = 0; i < whiteList.length && !accessGranted; i++) {
        const whiteListMail = whiteList[i];
        if(mailInput.value.toLowerCase() === whiteListMail.toLowerCase()){
            outputContainer.style.setProperty('display', 'block', 'important');
            outputTarget.textContent = 'access granted for '+ mailInput.value;
            accessGranted = true
        }else
            outputTarget.textContent = 'access denied'
    }
});