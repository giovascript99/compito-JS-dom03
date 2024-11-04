let remainingTime = document.querySelector('#remainingTime'); // tempo rimanente (countdown che visualizzeremo)
let countdown_input = document.querySelector('#countdown_input'); // elemento che permette all'utente di inserire i secondi
let startBtn = document.querySelector('#startBtn'); // button start
let stopBtn = document.querySelector('#stopBtn'); // button stop 
let resetBtn = document.querySelector('#resetBtn'); // button reset

let interval;
let counter;
let remainingSeconds = 0;


startBtn.addEventListener('click', () => {
    clearInterval(interval)
    counter = countdown_input.value; // secondi che inserirà l'utente nell'input

    if(remainingSeconds !== 0){
        counter = remainingSeconds;
    }

    interval = setInterval(() => {
        if(counter < 0){
            clearInterval(interval)
            remainingTime.innerHTML = 'tempo scaduto';

        }else{
            remainingTime.innerHTML = counter;
            counter --;
        }
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    remainingSeconds = counter
});

resetBtn.addEventListener('click', () => {
    countdown_input.value = '';
    clearInterval(interval)
    remainingTime.innerHTML = '--';
})