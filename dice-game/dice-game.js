const clientDice = document.querySelector('.col-10 div:nth-child(1) .dice');
const serverDice = document.querySelector('.col-10 div:nth-child(2) .dice');
const outputTarget = document.getElementById('output-target');
const outputContainer = document.getElementById('output-container');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    clientDice.innerHTML = '';
    serverDice.innerHTML = '';
    const clientRand = Math.floor(Math.random() * 6);
    const serverRand = Math.floor(Math.random() * 6);
    for (let i = 0; i <= clientRand ; i++) {
        diceDot = document.createElement("i");
        clientDice.appendChild(diceDot);
        diceDot.setAttribute('class', 'fas fa-dot-circle')
    }
    for (let i = 0; i <= serverRand ; i++) {
        diceDot = document.createElement("i");
        serverDice.appendChild(diceDot);
        diceDot.setAttribute('class', 'fas fa-dot-circle')
    }
    outputContainer.style.setProperty('display', 'flex', 'important');
    if(clientRand > serverRand){
        outputTarget.textContent = 'You Won'
    }else if(clientRand === serverRand){
        outputTarget.textContent = 'Tie'
    }else{
        outputTarget.textContent = 'You Lost'
    }
    
})
