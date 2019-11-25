class bmi{
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
}

class UI{
    addBMIToList(bmi){
        const display = document.querySelector('.display');
        let html = '<div class="display-bmi"> <div class="display-weight"> %weight% </div> <div class="display-height"> %height% </div> <div class="display-bmi-result"> %bmi-result% </div> <div class="remove-bmi"> <p class="remove-bmi">Remove BMI &#10006;</p> </div> </div>'
        let newHtml= html.replace('%weight%', bmi.weight);
        newHtml = newHtml.replace('%height%', bmi.height);
        newHtml = newHtml.replace('%bmi-result%', getBMI());
        
        display.insertAdjacentHTML('beforeend', newHtml);
        
        getBMI(){
            return this.bmi.weight / (this.bmi.height * this.bmi.height);
        }
    
    }
    /* clearFields(){
        document.getElementById("weight").value = '';
        document.getElementById("height").value = '';
    }
    removeBMI(target){
        if(target.className === 'remove-BMI'){
            target.parentElement.parentElement.remove();
        }
    } */
}

document.getElementById('form').addEventListener('submit', function(e){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result').value;

    const BMI = new bmi(weight, height);
    //console.log(movie);

    const ui = new UI();
    //console.log(ui);

    /* if(title == ''||yearReleased == '' ||duration == ''||genre == ''){
        alert("Error: Missing Info")
    }else{ */
        ui.addBMIToList(BMI);/* 
        ui.clearFields(); */
    /* } */
    e.preventDefault();
});

/* document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeBMI(e.target);

    ui.clearFields();

    e.preventDefault();
}) */