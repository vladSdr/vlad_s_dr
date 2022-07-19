const firstButton = document.querySelector('.main-first-link');
const firstEcran = document.querySelector('.main-first');
const secondEcran = document.querySelector('.main-second');

firstButton.addEventListener('click', () => {
    firstEcran.classList.add('transfer');
    firstEcran.classList.remove('active');
    secondEcran.classList.add('active');
})

const secondButton = document.querySelector('.main-second-link');
const thirdEcran = document.querySelector('.main-third');

secondButton.addEventListener('click', () => {
    secondEcran.classList.add('transfer')
    secondEcran.classList.remove('active');
    thirdEcran.classList.add('active')
})

const question1 = document.querySelector('.questions-one');
const question2 = document.querySelector('.questions-two');
const question3 = document.querySelector('.questions-three');
const question4 = document.querySelector('.questions-four');



const forma1 = document.querySelector('.form-1');
const continueButton1 = document.querySelector('.continue-1');

if (forma1) {
    forma1.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma1.querySelector('input').value;
        

        if (inpValue == '0') {
            console.log('first num received!')
            continueButton1.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton1.addEventListener('click', () => {
            question1.classList.remove('open')
            question2.classList.add('open')
            continueButton1.classList.remove('working')
        })
    });
}
const forma2 = document.querySelector('.form-2');
const continueButton2 = document.querySelector('.continue-2');

if (forma2) {
    forma2.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma2.querySelector('input').value;
        

        if (inpValue == '3') {
            console.log('second num received!')
            continueButton2.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton2.addEventListener('click', () => {
            question2.classList.remove('open')
            question3.classList.add('open')
            continueButton2.classList.remove('working')
        })
    });
}
const forma3 = document.querySelector('.form-3');
const continueButton3 = document.querySelector('.continue-3');

if (forma3) {
    forma3.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma3.querySelector('input').value;
        

        if (inpValue == '8') {
            console.log('third num received!')
            continueButton3.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton3.addEventListener('click', () => {
            question3.classList.remove('open')
            question4.classList.add('open')
            continueButton3.classList.remove('working')
        })
    });
}
const forma4 = document.querySelector('.form-4');
const fourthEcran = document.querySelector('.main-fourth');
const continueButton4 = document.querySelector('.continue-4');

if (forma4) {
    forma4.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma4.querySelector('input').value;
        

        if (inpValue == '7') {
            console.log('fourth num received!')
            continueButton4.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton4.addEventListener('click', () => {
            question4.classList.remove('open')
            thirdEcran.classList.add('transfer')
            thirdEcran.classList.remove('active');
            fourthEcran.classList.add('active')
            continueButton4.classList.remove('working')
        })
    });
}







