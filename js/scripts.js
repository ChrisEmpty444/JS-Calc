const previusOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll ("#buttons-container button")

class Calculator {
    constructor (previusOperationText, currentOperationText) {
        this.previusOperationText = previusOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    //adicionar digito na tela da calculadora
    addDigit(digit) {
        this.currentOperation = digit;
        this.updateScreen();
    }

    //mudar valores na tela da calculadora
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator (previusOperationText, currentOperationText);

buttons.forEach ((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >=0 || value === ".") {
            calc.addDigit(value);
        } else {
            console.log("Op: " + value);
        }

    });
});
