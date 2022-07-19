const firstButton = document.querySelector('.main-first-link');
const firstEcran = document.querySelector('.main-first');
const secondEcran = document.querySelector('.main-second');

firstButton.addEventListener('click', () => {
    firstEcran.classList.add('transfer')
    secondEcran.classList.add('active')
})

const secondButton = document.querySelector('.main-second-link');
const thirdEcran = document.querySelector('.main-third');

secondButton.addEventListener('click', () => {
    secondEcran.classList.add('transfer')
    thirdEcran.classList.add('active')
})

const question1 = document.querySelector('.questions-one');
const question2 = document.querySelector('.questions-two');
const question3 = document.querySelector('.questions-three');
const question4 = document.querySelector('.questions-four');



const forma1 = document.querySelector('.form-1');

if (forma1) {
    forma1.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma1.querySelector('input').value;
        let continueButton = question1.querySelector('.continue');

        if (inpValue == '0') {
            console.log('first num received!')
            continueButton.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton.addEventListener('click', () => {
            question1.classList.remove('open')
            question2.classList.add('open')
        })
    });
}
const forma2 = document.querySelector('.form-2');

if (forma2) {
    forma2.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma2.querySelector('input').value;
        let continueButton = question2.querySelector('.continue');

        if (inpValue == '3') {
            console.log('second num received!')
            continueButton.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton.addEventListener('click', () => {
            question2.classList.remove('open')
            question3.classList.add('open')
        })
    });
}
const forma3 = document.querySelector('.form-3');

if (forma3) {
    forma3.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma3.querySelector('input').value;
        let continueButton = question3.querySelector('.continue');

        if (inpValue == '8') {
            console.log('third num received!')
            continueButton.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton.addEventListener('click', () => {
            question3.classList.remove('open')
            question4.classList.add('open')
        })
    });
}
const forma4 = document.querySelector('.form-4');
const fourthEcran = document.querySelector('.main-fourth');

if (forma4) {
    forma4.addEventListener('submit', (e) => {
        e.preventDefault();

        let inpValue = forma4.querySelector('input').value;
        let continueButton = question4.querySelector('.continue');

        if (inpValue == '7') {
            console.log('fourth num received!')
            continueButton.classList.add('working')
        } else {
            console.log('Wrong!')
        }

        continueButton.addEventListener('click', () => {
            question4.classList.remove('open')
            thirdEcran.classList.add('transfer')
            fourthEcran.classList.add('active')
        })
    });
}







