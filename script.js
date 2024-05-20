const screen = document.querySelector('#screen');
let lastNumber = 0;
let operatorActive = false;
let activeOperator;
let resultGiven = true;

const clear = () => {
    screen.innerText = 0;
    resultGiven = true;
    operatorActive = false;
    lastNumber = 0;
};

const selectDecimal = () => {
    if (!screen.innerText.includes('.')) {
        decimalSelected = true;
        screen.innerText = `${screen.innerText}.`;
    }
};

const calculate = () => {
    resultGiven = true;
    switch(activeOperator){
        case '*':
            screen.innerText = lastNumber * parseFloat(screen.innerText);
            break;
        case '/':
            screen.innerText = lastNumber / parseFloat(screen.innerText);
            break;
        case '+':
            screen.innerText = lastNumber + parseFloat(screen.innerText);
            break;
        case '-':
            screen.innerText = lastNumber - parseFloat(screen.innerText);
            break;    
    }
};

const selectOperator = operator => {
    operatorActive = true;
    resultGiven = true;
    activeOperator = operator;
    lastNumber = parseFloat(screen.innerText);
}

const inputNumber = num => {
    if (operatorActive){
        screen.innerText = num;
        operatorActive = false;
    } else if (resultGiven){
        screen.innerText = num;
    } else {
        screen.innerText = `${screen.innerText}${num}`;
    }
    resultGiven = false;
};

const buttonPressed = key => {
    if (parseInt(key) || parseInt(key) === 0){
        inputNumber(key);
    } else if (key === '+' || key === '-' || key === '/' || key === '*') {
        selectOperator(key);
    } else if (key === '=' || key === 'Enter'){
        calculate()
    } else if (key === '.'){
        selectDecimal()
    } else if (key === 'ac' || key === 'Delete'){
        clear();
    } 
};

document.addEventListener('click', e => {
    buttonPressed(e.target.id);
});

document.addEventListener('keydown', e => {
    buttonPressed(e.key)
});