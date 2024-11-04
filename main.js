let inputSecondi = document.querySelector("#inputSecondi");
let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let clearBtn = document.querySelector("#clearBtn");
let secondi = parseInt(inputSecondi.value);


startBtn.addEventListener('click', () => {
    if (isNaN(secondi) || secondi <= 0) {
        secondiInput.value = "Valore non valido";
        return;
    }
    
    let countdown = secondi;
    secondiInput.value = countdown;
    
    const interval = setInterval(() => {
        countdown--;
        secondiInput.value = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            secondiInput.value = "Countdown Terminato!";
        }
    }, 1000);
})