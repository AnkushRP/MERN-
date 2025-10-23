class Calculator {
    constructor() {
        this.display = document.getElementById("display");
        this.clearDisplay();
    }

    appendNumber(number) {
        this.display.value += number;
    }

    appendOperator(operator) {
        this.display.value += operator;
    }

    clearDisplay() {
        this.display.value = "";
    }

    calculate() {
        try {
            this.display.value = eval(this.display.value);
        } catch (error) {
            this.display.value = "Error";
        }
    }
}

const calculator = new Calculator();
