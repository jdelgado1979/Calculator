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
//buttonEqual.addEventListener('click', totalreturn);

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
   // console.log(accumulatedStr);
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
      if ((newStr.charCodeAt(i) == newStr.charCodeAt(i+1)) && (newStr.charCodeAt(i) == 46)){
        accumulatedStr.pop();
        accumulatedVal.pop();
        subDisplay1.removeChild(y);
      } 
     }     
        //console.log(newStr);
        //console.log(accumulatedStr);
        //console.log(newStr.charCodeAt(0));
     } 
      
      
      


// Functions to do operations
console.log(accumulatedVal);

// this is to separate the numbers of the signs

let regex = /(\-)?[0-9]+(\.)?[0-9]+/g;
let regex2 = /(\+)|(\-)|(\*)|(\/)/g;
let a1 = accumulatedVal.join('');
console.log(a1);

let operatorSigns = a1.match(regex2);
let stringNumbers = a1.match(regex);
/*
let numeros = stringNumbers.map(Number);
console.log(numeros);

// this is to get the index positions of multiplication & division signs

const elemenTimes = '*';
const elementDivide = '/';


let indicesOfSigns = [];

let idx = operatorSigns.indexOf(elemenTimes);
let idDiv = operatorSigns.indexOf(elementDivide);

function signsOrder(array) {  
  while (idx !== -1) {
    indicesOfSigns.push(idx);
    idx = operatorSigns.indexOf(elemenTimes, idx + 1);
   }
    while (idDiv !== -1) {
    indicesOfSigns.push(idDiv);
    idDiv = operatorSigns.indexOf(elementDivide, idDiv + 1);
  }
};

signsOrder(operatorSigns);
indicesOfSigns.sort();

// get one's to find consecutiveness of multiplication & division
let differences = [];
for (let i = 0; i< indicesOfSigns.length-1; i++) {
  differences.push(indicesOfSigns[i+1] - indicesOfSigns[i]);
}


// function to multiply and divide numbers in the calculator

let multdiv = [];
function multDivOperation() {

  let firstNumber;
  let secondNumber;
  let result;
  let result2;
  let i;

// if there is only one number in the array of indices of signs and zero in the differences
   
  if (indicesOfSigns[0] >= 0 && differences.length == 0) {
   
     if (operatorSigns[indicesOfSigns[0]] === '*') {
      result = numeros[indicesOfSigns[0]] *
      numeros[indicesOfSigns[0]+1];
      multdiv.push(result);
     
    }
   
     if (operatorSigns[indicesOfSigns[0]] === '/') {
      result = numeros[indicesOfSigns[0]] /
      numeros[indicesOfSigns[0]+1];
      multdiv.push(result);
     
     }
    }
 
 
 for (i = 0; i <= differences.length; i++) {

// multiplying any nonconsecutive number
   
 if (differences[i] > 1) {  
    if ( (differences[i-1] > 1 && differences[i+1] == 1) ||
       (differences[i-1] == undefined && differences[i+1] ==
       undefined) || (differences[i-1] == undefined &&
       differences[i+1] >= 1) || (differences[i-1] >= 1 &&
       differences[i+1] == undefined) ||  (differences[i-1] > 1 &&
       differences[i+1] > 1) ) {
 
      if (operatorSigns[indicesOfSigns[i]] == '*') {
         firstNumber =  numeros[indicesOfSigns[i]] *
                        numeros[indicesOfSigns[i]+1];
        multdiv.push(firstNumber);
       // console.log(firstNumber);
      } if (operatorSigns[indicesOfSigns[i]] == '/') {
         firstNumber =  numeros[indicesOfSigns[i]] /
                        numeros[indicesOfSigns[i]+1];
        multdiv.push(firstNumber);
        // console.log(firstNumber);
      }
 
 if (((differences[i-1] > 1 || differences[i-1] == undefined) &&
     differences[i+1] == undefined)) {  
 
    if (operatorSigns[indicesOfSigns[i+1]] == '*') {
         secondNumber =  numeros[indicesOfSigns[i+1]] *
                        numeros[indicesOfSigns[i+1]+1];
        multdiv.push(secondNumber);
       // console.log(secondNumber);
      } if (operatorSigns[indicesOfSigns[i+1]] == '/') {
         secondNumber =  numeros[indicesOfSigns[i+1]] /
                        numeros[indicesOfSigns[i+1]+1];
        multdiv.push(secondNumber);
       // console.log(secondNumber);
      }
     }
 
    }
   }
 
// dealing with streaks of ones (consecutive multiplications or divisions), get the first 3 numbers (multiply or divide) and save it to result2
       
 if( (differences[i] === 1) && ((differences[i-1] > 1) ||
    (differences[i-1] == undefined)) && (differences[i+1] == 1 ) )
       {
     
        if (operatorSigns[indicesOfSigns[i]] === '*'){
         result2 = numeros[indicesOfSigns[i]] *
                 numeros[indicesOfSigns[i]+1];
        //  console.log(result2);
        if (operatorSigns[indicesOfSigns[i+1]] === '*'){
          result2 = result2 * numeros[indicesOfSigns[i]+2];
        //  console.log(result2);
        } else if (operatorSigns[indicesOfSigns[i+1]] === '/'){
          result2 = result2 / numeros[indicesOfSigns[i]+2];
        //  console.log(result2);
        }
         
        } else if (operatorSigns[indicesOfSigns[i]] === '/') {
         result2 = numeros[indicesOfSigns[i]] /
                 numeros[indicesOfSigns[i]+1];
          //console.log(result2);
        if (operatorSigns[indicesOfSigns[i+1]] === '/'){
          result2 = result2 / numeros[indicesOfSigns[i]+2];
          //console.log(result2);
        }  else if (operatorSigns[indicesOfSigns[i+1]] === '*'){
          result2 = result2 * numeros[indicesOfSigns[i]+2];
         // console.log(result2);
        }
      }
     }    
       
   // get the rest of the one's(numbers) to multiply or divide  and save it to result2
       
   if ((differences[i] == 1) && (differences[i-1] == 1) &&
        (differences[i+1] == 1)) {
     
        if (operatorSigns[indicesOfSigns[i+1]] === '*'){
          result2 =
          result2 * numeros[indicesOfSigns[i+1]+1];
         //  console.log(result2);  
         } else if (operatorSigns[indicesOfSigns[i+1]] === '/'){
         result2 =
          result2 / numeros[indicesOfSigns[i+1]+1];
         // console.log(result2);  
        }
      }
       
  // get the last of the one's(numbers) to multiply or divide  and push result2 to main array
       
  if((differences[i] === 1) && ((differences[i+1] > 1) ||
     (differences[i+1] == undefined)) && (differences[i-1] == 1 ) )
       {
         if (operatorSigns[indicesOfSigns[i+1]] === '*'){
          result2 =
          result2 * numeros[indicesOfSigns[i+1]+1];
           multdiv.push(result2);
           //console.log(result2);  
         } else if (operatorSigns[indicesOfSigns[i+1]] === '/'){
         result2 =
          result2 / numeros[indicesOfSigns[i+1]+1];
           multdiv.push(result2);
          // console.log(result2);  
        }
       }
       
// dealing with singles (not streaks of ones),  get the first 3 numbers (multiply or divide) and push it
       
    if((differences[i] === 1) && ((differences[i-1] > 1) || (differences[i-1] == undefined)) && ((differences[i+1] > 1) || (differences[i+1] == undefined)) )
       {
     
        if (operatorSigns[indicesOfSigns[i]] === '*'){
         result2 = numeros[indicesOfSigns[i]] *
                 numeros[indicesOfSigns[i]+1];
         
        if (operatorSigns[indicesOfSigns[i+1]] === '*'){
          result2 = result2 * numeros[indicesOfSigns[i]+2];
          multdiv.push(result2);
         
        } else if (operatorSigns[indicesOfSigns[i+1]] === '/'){
          result2 = result2 / numeros[indicesOfSigns[i]+2];
          multdiv.push(result2);
         
        }
         
        } else if (operatorSigns[indicesOfSigns[i]] === '/') {
         result2 = numeros[indicesOfSigns[i]] /
                 numeros[indicesOfSigns[i]+1];
        if (operatorSigns[indicesOfSigns[i+1]] === '/'){
          result2 = result2 / numeros[indicesOfSigns[i]+2];
          multdiv.push(result2);
         
        }  else if (operatorSigns[indicesOfSigns[i+1]] === '*'){
          result2 = result2 * numeros[indicesOfSigns[i]+2];
          multdiv.push(result2);
          //console.log(result2);
       }
      }
     }    
    }
   }

console.log(operatorSigns);
console.log(indicesOfSigns);
console.log(differences);
multDivOperation();
console.log(multdiv);

// this is to find the index positions of + and -

const elementPlus = '+';
const elementNegative = '-';

let indicesOfminusplusSigns = [];

let idp = operatorSigns.indexOf(elementPlus);
let idMin = operatorSigns.indexOf(elementNegative);

function signsOrder2() {
  for(let i = 0; i < operatorSigns.length;i++) {  
  if (idp !== -1) {
    indicesOfminusplusSigns.push(idp);
    idp = operatorSigns.indexOf(elementPlus, idp + 1);
   
   }
    if (idMin !== -1) {
    indicesOfminusplusSigns.push(idMin);
    idMin = operatorSigns.indexOf(elementNegative, idMin + 1);
     
  }
}
};

signsOrder2();
indicesOfminusplusSigns.sort();
console.log(indicesOfminusplusSigns);

let addminresult = 0;
let addminus = [];
function addSubtractOperation() {

  // If there is any * or / sign, find the numbers that are only being added or subtracted that are independent of these operations

  if (multdiv.length >= 1) {
   
 for(let k = 0; k < operatorSigns.length; k++) {      
 if ((operatorSigns[k-1] === undefined && operatorSigns[k] === '+')    || (operatorSigns[k-1] === undefined && operatorSigns[k] === '-'))       {
      addminus.push(numeros[k]);
    }
   
   if ((operatorSigns[k] === '+' && operatorSigns[k+1] === '+') ||
      (operatorSigns[k] === '-' && operatorSigns[k+1] === '-') ||
       (operatorSigns[k] === '-' && operatorSigns[k+1] === '+') ||
      (operatorSigns[k] === '+' && operatorSigns[k+1] === '-')) {
            addminus.push(numeros[k+1]);
           
 } if ((operatorSigns[k] === '+' && operatorSigns[k+1] === undefined)   || (operatorSigns[k] === '-' && operatorSigns[k+1] ===
      undefined)) {
            addminus.push(numeros[k+1]);
      }
    }
   }

   
 console.log(addminus);
 
  // Do this only if there are no * or / , meaning we are only adding or subtracting:
 
  if (addminus.length == 0 && indicesOfSigns.length == 0) {    
     
  // if there is only one + or - in the array
     
  if (operatorSigns.length >= 1) {
   if (operatorSigns[0] === '+') {
      addminresult =  (numeros[0] +
      numeros[1]);
      //console.log(addminresult);
   } if (operatorSigns[0]  === '-') {
     addminresult = (numeros[0] +
      numeros[1]);
      //console.log(addminresult);
   }
                 
  }
     
  // if there is more than one + or - in the array (streaks):
   
  if (operatorSigns.length > 1) {
  for(let i = 1; i <= indicesOfminusplusSigns.length;i++) {
 
     if (operatorSigns[i] === '+') {
            addminresult =  (addminresult +
            numeros[indicesOfminusplusSigns[i]+1]);
           console.log(addminresult);
     } if (operatorSigns[i]  === '-') {
            addminresult = (addminresult +                          
            numeros[indicesOfminusplusSigns[i]+1]);
           //console.log(addminresult);  
      }
   }  
     
     }
    addminus.push(addminresult);
    }
 
   }


addSubtractOperation();
//console.log(addminus);
console.log(addminresult);

let total = 0;
let totalarr;
function totalreturn() {
  if (addminus.length >= 1 && multdiv.length >= 1) {
    totalarr = multdiv.concat(addminus);
    total = totalarr.reduce((a,b) => a + b);
    console.log(total);
  } if (addminus.length == 0 && multdiv.length > 1){
    total = multdiv.reduce((a,b) => a + b);
    console.log(total);
  } if (addminus.length == 1 && multdiv.length == 0){
     total = addminresult;
     console.log(total);
  }
}


*/






