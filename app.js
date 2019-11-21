class SplitBill{
    constructor(totalBill, tipPercent, people, shareBill, shareTip, shareTotalBill){
        this.totalBill = totalBill;
        this.tipPercent = tipPercent;
        this.people = people;
        this.shareBill = shareBill;
        this.shareTip = shareTip;
        this.shareTotalBill = shareTotalBill;
    }
}

class UI{
    addSplitBillToList(SplitBill){
        const display = document.querySelector('.display');
        let html = '<div class="display-bill"> <div class="display-total-bill"> %totalbill% </div> <div class="display-tip-percent"> %tippercent% </div> <div class="display-people"> %people% </div> <div class="display-share-bill"> %sharebill% </div> <div class="display-share-tip"> %sharetip% </div> <div class="display-share-total-bill"> %sharetotalbill% </div> <div class="remove-bill"> <p class="remove-bill">Remove Bill &#10006;</p> </div> </div>'
        let newHtml= html.replace('%totalbill%', splitBill.totalBill);
        newHtml = newHtml.replace('%tippercent%', splitBill.tipPercent);
        newHtml = newHtml.replace('%people%', splitBill.people);
        /* newHtml = newHtml.replace('%sharebill%', splitBill.shareBill);
        newHtml = newHtml.replace('%sharetip%', splitBill.shareTip);
        newHtml = newHtml.replace('%sharetotalbill%', splitBill.shareTotalBill); */
        
        display.insertAdjacentHTML('beforeend', newHtml);
    
    }
    clearFields(){
        document.getElementById("totalbill").value = '';
        document.getElementById("tipPercent").value = '';
        document.getElementById("people").value = '';
        document.getElementById("shareBill").value = '';
        document.getElementById("shareTip").value = '';
        document.getElementById("shareTotalBill").value = '';
    }
    removeMovie(target){
        if(target.className === 'remove-bill'){
            target.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('form').addEventListener('submit', function(e){
    const totalbill = document.getElementById('totalbill').value;
    const tipPercent = document.getElementById('tipPercent').value;
    const people = document.getElementById('people').value;
    const shareBill = document.getElementById('shareBill').value;
    const shareTip = document.getElementById('shareTip').value;
    const shareTotalBill = document.getElementById('shareTotalBill').value;

    const splitBill = new SplitBill(totalbill, tipPercent, people, shareBill,shareTip,shareTotalBill);
    //console.log(movie);

    const ui = new UI();
    //console.log(ui);

    /* if(title == ''||yearReleased == '' ||duration == ''||genre == ''){
        alert("Error: Missing Info")
    }else{ */
        ui.addSplitBillToList(splitBill);
        ui.clearFields();
    /* } */
    e.preventDefault();
});

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeMovie(e.target);

    ui.clearFields();

    e.preventDefault();
})