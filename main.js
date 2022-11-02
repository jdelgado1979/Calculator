const mainDisplay = document.querySelector('.mainDisplay');
const subDisplay1 = document.querySelector('.subDisplay1')
const subDisplay2 = document.querySelector('.subDisplay2')
const botones = document.querySelector('.botones');
const mainButtons = document.querySelector('.mainButtons');
const operationBtns = document.querySelector('.operationBtns');
const buttonPercent = document.getElementById('buttonPercent');
const buttonBckspace = document.getElementById('buttonBckspace');
const buttonC = document.getElementById('buttonC');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const buttonMinusPlus = document.getElementById('buttonMinusPlus');
const button0 = document.getElementById('button0');
const buttondecimal = document.getElementById('buttondecimal');
const buttonDiv = document.getElementById('buttonDiv');
const buttonMult = document.getElementById('buttonMult');
const buttonSubtract = document.getElementById('buttonSubtract');
const buttonAdd = document.getElementById('buttonAdd');
const buttonEqual = document.getElementById('buttonEqual');




// Clicking events per button

button7.addEventListener('click', printNumber);
button8.addEventListener('click', printNumber);
button9.addEventListener('click', printNumber);
button4.addEventListener('click', printNumber);
button5.addEventListener('click', printNumber);
button6.addEventListener('click', printNumber);
button1.addEventListener('click', printNumber);
button2.addEventListener('click', printNumber);
button3.addEventListener('click', printNumber);
button0.addEventListener('click', printNumber);
buttondecimal.addEventListener('click', printDecimal);
buttonDiv.addEventListener('click', printSymbol);
buttonMult.addEventListener('click', printSymbol);
buttonSubtract.addEventListener('click', printSymbol);
buttonAdd.addEventListener('click', printSymbol);


// Functions to input numbers and operators into the display


let accumulatedVal = [];
let accumulatedStr = [];


function printNumber (e) {
 
  const firstInput = /[0-9]/g;
  const str = e.target.firstChild.nodeValue;
  
  let myArray;
  while ((myArray = firstInput.exec(str)) !== null) {
    let num = parseInt(myArray[0])
    var y = document.createTextNode(myArray[0]);    
    subDisplay1.appendChild(y);
    accumulatedVal.push(num);
    }
   
  }
  
  function printSymbol (e) {
   
    const firstInput = /\W/g;
    const str = e.target.firstChild.nodeValue;
    let testValue = parseInt(accumulatedVal[0]);
    let testValue2 = parseInt(accumulatedVal[accumulatedVal.length - 1]);
    let myArray;
    while ((myArray = firstInput.exec(str)) !== null) {
      if ((testValue>=0) && (testValue2>=0)) {
        var y = document.createTextNode(myArray[0]);    
        subDisplay1.appendChild(y);
        accumulatedVal.push(myArray[0]);
        accumulatedStr.push(myArray[0]);
      }  else return;
     }
    console.log(accumulatedStr);
  }
  


  function printDecimal (e) {
       
    const str = e.target.firstChild.nodeValue;
    let testValue = parseInt(accumulatedVal[0]);
    let testValue2 = parseInt(accumulatedVal[accumulatedVal.length - 1]);
    let displayTest = subDisplay1.innerHTML;
    var y = document.createTextNode('.');  
    if ((testValue>=0) && (testValue2>=0)) {
        
      subDisplay1.appendChild(y);
      accumulatedVal.push('.');
      accumulatedStr.push('.');
     } else return;

    let newStr = accumulatedStr.join('');
    
    for (let i=0; i < newStr.length; i++ ) {
      if (newStr.charCodeAt(i) === newStr.charCodeAt(i+1) ){
        accumulatedStr.pop();
        accumulatedVal.pop();
        subDisplay1.removeChild(y);
      } 
     }     
        console.log(newStr);
        console.log(accumulatedStr);
     } 
      
      
      


/*
 for (let i=0; i < newStr.length; i++ ) {
         if (newStr.charCodeAt(i) == newStr.charCodeAt(i+1) == '.'){
            return;
         } 
        }




 var y = document.createTextNode('.');    
            subDisplay1.appendChild(y);
            accumulatedVal.push('.');
            accumulatedStr.push('.');
            console.log(newStr.charCodeAt(i));

  */

/*
console.log(newStr);

let prevButton = null;

operationBtns.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON'; 
  
    if (!isButton) {
      return;
    }
  
    e.target.classList.add('change');
    if (prevButton !== null) {
     prevButton.classList.remove('change');
    }
   prevButton = e.target;
   
});

*/







