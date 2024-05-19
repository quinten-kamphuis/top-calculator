const screen = document.querySelector('#screen');
let lastNumber = 0;
let operatorActive = false;
let activeOperator;
let resultGiven = false;

const clear = () => {
    screen.innerText = 0;
};

const selectOperator = operator => {
    operatorActive = true;
    activeOperator = operator;
    lastNumber = parseInt(screen.innerText);
}

const inputNumber = num => {
    if (resultGiven){
        screen.innerText = num;
        resultGiven = false;
    } else if (operatorActive){
        switch(activeOperator){
            case '*':
                screen.innerText = lastNumber * num;
                break;
            case '/':
                screen.innerText = lastNumber / num;
                break;
            case '+':
                screen.innerText = lastNumber + +num;
                break;
            case '-':
                screen.innerText = lastNumber - num;
                break;    
        }
        operatorActive = false;
        resultGiven = true;
    } else if (screen.innerText == 0){
        screen.innerText = num;
    } else if (screen.innerText !== 0) {
        screen.innerText = `${screen.innerText}${num}`;
    }
};

const buttonPressed = target => {
    const id = target.id;
    if (parseInt(id)){
        inputNumber(id);
    } else if (target.className === 'operator') {
        selectOperator(id);
    } else if (id === 'ac'){
        clear();
    }
};

document.addEventListener('click', e => {
    buttonPressed(e.target);
});