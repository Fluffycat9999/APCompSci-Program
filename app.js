class bmi{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
        
}
}
/* const Mine = new bmi(110, 60);
console.log(Mine); */


class UI{
    addBMIToList(bmi){
        const display = document.querySelector('.display');
        let html = '<div class="display-bmi"><div class="display-weight">Weight: %weight% </div><div class="display-height">Height: %height% </div><div class="display-result">BMI: %result%</div><div class="category">BMI Category: %category%</div><div class="remove-bmi">  <p class="remove-bmi">Remove BMI &#10006;</p></div></div>'
        
        const getBMI = Math.round((703 * weight.value / (height.value * height.value)) * 10 ) / 10;
        function category(getBMI){
        if(getBMI < 18.5){
            return "Underweight";
        }else if(getBMI >= 18.5 && getBMI <= 24.9){
            return "Normal Weight";
        }else if(getBMI >= 25 && getBMI <= 29.9){
            return "Overweight";
        }else{
            return "Obese";
        }}

        let newHtml= html.replace('%weight%', bmi.weight);
        newHtml = newHtml.replace('%height%', bmi.height);
        newHtml = newHtml.replace('%result%', getBMI);
        newHtml = newHtml.replace('%category%', category(getBMI));
        display.insertAdjacentHTML('beforeend', newHtml);

    }
    clearFields(){
        document.getElementById("weight").value = '';
        document.getElementById("height").value = '';
    }
    removeBMI(target){
        if(target.className === 'remove-bmi'){
            target.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('form').addEventListener('submit', function(e){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const BMI = new bmi(weight, height);
    /* console.log(bmi); */

    const ui = new UI();
    /* console.log(ui); */

    if(weight == ''||height == ''){
        alert("Error: Missing Info")
    }else{
        ui.addBMIToList(BMI);
        ui.clearFields();
     }
    e.preventDefault();
    }
);

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeBMI(e.target);

    ui.clearFields();

    e.preventDefault();
})