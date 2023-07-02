// Constructor function
function Calculator() {
        this.display = document.querySelector('.display');

        this.start() = () => {

            this.clickButton();
            this.pressBackSpace();
            this.pressEnter();
        };

        this.pressBackSpace = () => {
            this.display.addEventListener('keydown', e => {
                if(e.keyCode === 8){
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        }

        this.pressEnter = () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.calculate();
                }
            });
        }

        this.calculate = () => {
            
            try {
                const calculation = eval(this.display.value);

                if(!calculation){
                    alert('Invalid calculation');
                    return;
                }

                this.display.value = calculation;
            } catch (error) {
                alert('Invalid calculation');
                return;
            }
        }

        this.clearDisplay = () => this.display.value = '';
        this.clearOne = () => this.display.value = this.display.value.slice(0, -1);

        this.clickButton = () => {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.btnStopDisplay(el);
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.clearOne();
                if(el.classList.contains('btn-del')) this.calculate();

            });
        }
        
        this.btnStopDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        }
}

const calculator = new Calculator();
calculator.start();