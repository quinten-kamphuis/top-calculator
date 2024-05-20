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

const buttonPressed = target => {
    const id = target.id;
    if (parseInt(id) || parseInt(id) === 0){
        inputNumber(id);
    } else if (target.className === 'operator') {
        selectOperator(id);
    } else if (id === '='){
        calculate()
    } else if (id === '.'){
        selectDecimal()
    } else if (id === 'ac'){
        clear();
    } 
};

document.addEventListener('click', e => {
    buttonPressed(e.target);
});