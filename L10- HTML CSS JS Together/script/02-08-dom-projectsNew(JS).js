//let inputValue = document.querySelector('.js-input').value;

function handleCostKeyDown(event){  // got actual event object
    console.log(event.key);  
    if(event.key === 'Enter'){
        calculateTotal();
    }
}

function calculateTotal(){
    let inputValue = document.querySelector('.js-input').value;  // .value gives the text inside the textbox
//          console.log(typeof inputValue); string   whenever we get a value from the DOM, the value will be a string
    let a = Number(inputValue);


    //console.log(inputValue);
    if(a<40){
        a = a + 10;
    }
    else if(isNaN(a)){
        a = NaN;
    }
    
    else{
        a = a;
    }

    document.querySelector('.js-FinalAmount').innerHTML = `$${a}`;

}

// document.querySelector('.js-FinalAmount').innerHTML = inputValue;