const bmi = [];

class bmi{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
    getBMI(){
        return this.bmi.weight / (this.bmi.height * this.bmi.height);
    }
}
const Mine = new bmi(110, 60);
console.log(Mine);


class UI{
    addBMIToList(bmi){
        const display = document.querySelector('.display');
        let html = '<div class="display-bmi"> <div class="display-weight"> %weight% </div> <div class="display-height"> %height% </div> <div class="display-bmi-result">%bmi-result%</div></div><div class="remove-bmi"> <p class="remove-bmi">Remove BMI &#10006;</p> </div> </div>'
        let newHtml= html.replace('%weight%', bmi.weight);
        newHtml = newHtml.replace('%height%', bmi.height);
        
        display.insertAdjacentHTML('beforeend', newHtml);  
    }
}

document.getElementById('form').addEventListener('submit', function(e){
    const weight = document.getElementById('display-weight').value;
    const height = document.getElementById('display-height').value;
    const result = document.getElementById('display-bmi-result').value;

    const BMI = new bmi(weight, height);
    console.log(bmi);

    const ui = new UI();
    console.log(ui);

    ui.addBMIToList(BMI);
    e.preventDefault();
    }
);
