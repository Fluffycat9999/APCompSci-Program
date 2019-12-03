class bmi{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
        this.getBMI = function(){
        return weight / (height * height);
    }
}
}
/* const Mine = new bmi(110, 60);
console.log(Mine); */


class UI{
    addBMIToList(bmi){
        const display = document.querySelector('.display');
        let html = '<div class="display-bmi"> <div class="display-weight"> %weight% </div> <div class="display-height"> %height% </div><div class="display-result">%result%</div></div><div class="remove-bmi"> <p class="remove-bmi">Remove BMI &#10006;</p> </div> </div>'
        
        const getBMI = weight.value / (height.value * height.value);        

        let newHtml= html.replace('%weight%', bmi.weight);
        newHtml = newHtml.replace('%height%', bmi.height);
        newHtml = newHtml.replace('%result%', getBMI);
        display.insertAdjacentHTML('beforeend', newHtml);

    }
}

document.getElementById('form').addEventListener('submit', function(e){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const BMI = new bmi(weight, height);
    console.log(bmi);

    const ui = new UI();
    console.log(ui);

    ui.addBMIToList(BMI);
    e.preventDefault();
    }
);
