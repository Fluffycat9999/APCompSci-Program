class bmi{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
        this.getBMI = function(){
        return Math.round((703 * weight.value / (height.value * height.value)) * 10 ) / 10;
        this.
    }
}
}
/* const Mine = new bmi(110, 60);
console.log(Mine); */


class UI{
    addBMIToList(bmi){
        const display = document.querySelector('.display');
        let html = '<div class="display-bmi"> <div class="display-weight">Weight: %weight% </div> <div class="display-height">Height: %height% </div><div class="display-result">BMI: %result%</div></div><div class="category">You are %category%</div></div>'
        
        const bmi = new BMI();
        category {
        if(getBMI > 18.5){
            "Underweight"
        }else{
            "Obese"
        }
    }

        let newHtml= html.replace('%weight%', bmi.weight);
        newHtml = newHtml.replace('%height%', bmi.height);
        newHtml = newHtml.replace('%result%', BMI);
        newHtml = newHtml.replace('%category%', category());
        display.insertAdjacentHTML('beforeend', newHtml);

    }
    clearFields(){
        document.getElementById("weight").value = '';
        document.getElementById("height").value = '';
    }
    /* removeBMI(target){
        if(target.className === 'remove-BMI'){
            target.parentElement.parentElement.remove();
        }
    } */
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
    
    /* ui.removeBMI(e.target); */

    ui.clearFields();

    e.preventDefault();
})