//Dice of the user
const clientDice = document.querySelector('.col-10 div:nth-child(1) .dice');
//Dice of the server
const serverDice = document.querySelector('.col-10 div:nth-child(2) .dice');
//output elemenets
const outputTarget = document.getElementById('output-target')
const outputContainer = document.getElementById('output-container');

const button = document.querySelector('button');

button.addEventListener('click', function(){
    //Default reset for appendChild
    clientDice.innerHTML = '';
    serverDice.innerHTML = '';
    //Random number of the user
    const clientRand = Math.floor(Math.random() * 6);
    //Random number of the server
    const serverRand = Math.floor(Math.random() * 6);
    //Client dice's dots generator
    for (let i = 0; i <= clientRand ; i++) {
        diceDot = document.createElement("i");
        clientDice.appendChild(diceDot);
        diceDot.setAttribute('class', 'fas fa-dot-circle')
    }
    //Server dice's dots generator
    for (let i = 0; i <= serverRand ; i++) {
        diceDot = document.createElement("i");
        serverDice.appendChild(diceDot);
        diceDot.setAttribute('class', 'fas fa-dot-circle')
    }
    //from d-none to d-flex
    outputContainer.style.setProperty('display', 'flex', 'important');
    //Output results
    if(clientRand > serverRand){
        outputTarget.textContent = 'You Won'
    }else if(clientRand === serverRand){
        outputTarget.textContent = 'Tie'
    }else{
        outputTarget.textContent = 'You Lost'
    }
    
})
