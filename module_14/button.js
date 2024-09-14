import './button.css'

class CreateButton {

    handleEvent() {

        this.counter++;

        this.btnHtml()

    }

    constructor() {

        this.counter = 0;


        this.wordEnd = counter => {

            counter = counter > 100 ? counter % 100 : counter;

            if (counter >= 5 && counter <= 14) {

                return "ов";

            } else {

                const ov = [0, 5, 6, 7, 8, 9];

                const a = [2, 3, 4];

                return ov.includes(counter % 10) ? "ов" : a.includes(counter % 10) ? "а" : "";

            }

        };


        this.elem = document.createElement("button");

        this.elem.classList.add("button");


        this.btnHtml = () => {

            this.elem.innerHTML = `${this.counter} клик${this.wordEnd(this.counter)}`;

            return this.elem

        }

        document.querySelector("body").append(this.btnHtml());

        this.elem.addEventListener("click", this);

    }


}

export default CreateButton