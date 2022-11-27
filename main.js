

const mainDisplay = document.querySelector('.mainDisplay');
const subDisplay1 = document.getElementById('sub1')
const subDisplay2 = document.querySelector('.subDisplay2')
const botones = document.querySelector('.botones');
const mainButtons = document.querySelector('.mainButtons');
const operationBtns = document.querySelector('.operationBtns');
const buttonPercent = document.getElementById('buttonPercent');
const buttonBackspace = document.getElementById('buttonBckspace');
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
buttonC.addEventListener('click', resetall);
//buttonEqual.addEventListener('click', totalreturn);



// Functions to input numbers and operators into the display

function printNumber (e) {
 
  const firstInput = /[0-9]/g;
  const str = e.target.firstChild.nodeValue;
  let myArray;
  while ((myArray = firstInput.exec(str)) !== null) {
    let num = parseInt(myArray[0]);
    var y = document.createTextNode(myArray[0]);  
    subDisplay1.appendChild(y); 
    //subDisplay1.value = subDisplay1.value + myArray[0];
    accumulatedVal.push(num);
    }
    //console.log(accumulatedVal);
    text = accumulatedVal.join('')
    showcaseOutput(text);
           
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
        //subDisplay1.value = subDisplay1.value + myArray[0];
        accumulatedVal.push(myArray[0]);
        accumulatedStr.push(myArray[0]);
      }  else return;
     }
    
    
  }
  

  function printDecimal (e) {
       
    const str = e.target.firstChild.nodeValue;
    let testValue = parseInt(accumulatedVal[0]);
    let testValue2 = parseInt(accumulatedVal[accumulatedVal.length - 1]);
    let displayTest = subDisplay1.innerHTML;
    var y = document.createTextNode('.');  
    if ((testValue>=0) && (testValue2>=0)) {
       //subDisplay1.value = subDisplay1.value + '.'; 
      subDisplay1.appendChild(y);
      accumulatedVal.push('.');
      accumulatedStr.push('.');
     } else return;

    let newStr = accumulatedStr.join('');
    
    for (let i=0; i < newStr.length; i++ ) {
      if ((newStr.charCodeAt(i) == newStr.charCodeAt(i+1)) && (newStr.charCodeAt(i) == 46)){
        accumulatedStr.pop();
        accumulatedVal.pop();
        //subDisplay1.value = accumulatedVal.join('');
        subDisplay1.removeChild(y);
      } 
     }     
       
     } 

    // ^[0-9]+(\.)?[0-9]*([\W][0-9]*(\.)?[0-9]+)*$
       

//Function to obtain input and print output in the second screen 
const regex = /(\-)?[0-9]*(\.)?[0-9]+/g;
const regex2 = /(\+)|(\-)|(\*)|(\/)/g;
const regex3 = /^[0-9]+(\.[0-9]+)[\W][0-9]+((\.)[0-9]+)?$/;
const regex4 = /^[0-9]*(\.)?[0-9]*[\W][0-9]*(\.)?[0-9]*([\W][0-9]*(\.)?[0-9]+)*$/;

let result1;
let result2;
let text;
let operatorSigns;
let stringNumbers;
let numeros;
let accumulatedVal = [];
let accumulatedStr = [];
var defaultVal = subDisplay2.defaultValue;

      
  
  function showcaseOutput () {
   
    result1 = regex3.exec(text);
    result2 = regex4.exec(text);
    
    if ((result1 == null) && (typeof(parseInt(text) == 'number'))) {
      y = parseInt(text);
       subDisplay2.value = y;
    } 
 /*
    if (result1) {
        operatorSigns = result1[0].match(regex2);
        stringNumbers = result1[0].match(regex);
        numeros = stringNumbers.map(Number);
        multDivOperation();
        addSubtractOperation();
        totalreturn();  
        y = total;
        subDisplay2.value = y; 
        
     }
     */
   if (result2) {
      operatorSigns = result2[0].match(regex2);
      console.log(operatorSigns);
      stringNumbers = result2[0].match(regex);
      console.log(stringNumbers);
      numeros = stringNumbers.map(Number);
      console.log(numeros);
      signsOrder(operatorSigns);
      indicesOfSigns.sort();
      console.log(indicesOfSigns);
      multDivOperation(indicesOfSigns);
      console.log(differences);
      console.log(multdiv);



      signsOrder2(operatorSigns);
      indicesOfminusplusSigns.sort();
      console.log(indicesOfminusplusSigns);
      addSubtractOperation(indicesOfminusplusSigns);

      totalreturn();  
      y = total;  
      subDisplay2.value = y; 
      
     
     }
     reset1();
     

    }  
   
// Functions to do operations

 
// this is to get the index positions of multiplication & division signs

const elemenTimes = '*';
const elementDivide = '/';
let idx;
let idDiv;



let indicesOfSigns = [];

function signsOrder(array) { 
  
  idx = array.indexOf(elemenTimes);
  idDiv = array.indexOf(elementDivide);

  while (idx !== -1) {
    indicesOfSigns.push(idx);
    idx = array.indexOf(elemenTimes, idx + 1);
   }
    while (idDiv !== -1) {
    indicesOfSigns.push(idDiv);
    idDiv = array.indexOf(elementDivide, idDiv + 1);
  }

};



// function to multiply and divide numbers in the calculator

let differences = [];
let multdiv = [];


function multDivOperation(x) {
      

  
  // get one's to find consecutiveness of multiplication & division

for (let j = 0; j< x.length-1; j++) {
  differences.push(x[j+1] - x[j]);
}

  let firstNumber;
  let secondNumber;
  let result;
  let result2;
  let i;

// if there is only one number in the array of indices of signs and zero in the differences
   
  if (x[0] >= 0 && differences.length == 0) {
   
     if (operatorSigns[x[0]] === '*') {
      result = numeros[x[0]] *
      numeros[x[0]+1];
      multdiv.push(result);
     
    }
   
     if (operatorSigns[x[0]] === '/') {
      result = numeros[x[0]] /
      numeros[x[0]+1];
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
 
      if (operatorSigns[x[i]] == '*') {
         firstNumber =  numeros[x[i]] *
                        numeros[x[i]+1];
        multdiv.push(firstNumber);
       // console.log(firstNumber);
      } if (operatorSigns[x[i]] == '/') {
         firstNumber =  numeros[x[i]] /
                        numeros[x[i]+1];
        multdiv.push(firstNumber);
        // console.log(firstNumber);
      }
 
 if (((differences[i-1] > 1 || differences[i-1] == undefined) &&
     differences[i+1] == undefined)) {  
 
    if (operatorSigns[x[i+1]] == '*') {
         secondNumber =  numeros[x[i+1]] *
                        numeros[x[i+1]+1];
        multdiv.push(secondNumber);
       // console.log(secondNumber);
      } if (operatorSigns[x[i+1]] == '/') {
         secondNumber =  numeros[x[i+1]] /
                        numeros[x[i+1]+1];
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
     
        if (operatorSigns[x[i]] === '*'){
         result2 = numeros[x[i]] *
                 numeros[x[i]+1];
        //  console.log(result2);
        if (operatorSigns[x[i+1]] === '*'){
          result2 = result2 * numeros[x[i]+2];
        //  console.log(result2);
        } else if (operatorSigns[x[i+1]] === '/'){
          result2 = result2 / numeros[x[i]+2];
        //  console.log(result2);
        }
         
        } else if (operatorSigns[x[i]] === '/') {
         result2 = numeros[x[i]] /
                 numeros[x[i]+1];
          //console.log(result2);
        if (operatorSigns[x[i+1]] === '/'){
          result2 = result2 / numeros[x[i]+2];
          //console.log(result2);
        }  else if (operatorSigns[x[i+1]] === '*'){
          result2 = result2 * numeros[x[i]+2];
         // console.log(result2);
        }
      }
     }    
       
   // get the rest of the one's(numbers) to multiply or divide  and save it to result2
       
   if ((differences[i] == 1) && (differences[i-1] == 1) &&
        (differences[i+1] == 1)) {
     
        if (operatorSigns[x[i+1]] === '*'){
          result2 =
          result2 * numeros[x[i+1]+1];
         //  console.log(result2);  
         } else if (operatorSigns[x[i+1]] === '/'){
         result2 =
          result2 / numeros[x[i+1]+1];
         // console.log(result2);  
        }
      }
       
  // get the last of the one's(numbers) to multiply or divide  and push result2 to main array
       
  if((differences[i] === 1) && ((differences[i+1] > 1) ||
     (differences[i+1] == undefined)) && (differences[i-1] == 1 ) )
       {
         if (operatorSigns[x[i+1]] === '*'){
          result2 =
          result2 * numeros[x[i+1]+1];
           multdiv.push(result2);
           //console.log(result2);  
         } else if (operatorSigns[x[i+1]] === '/'){
         result2 =
          result2 / numeros[x[i+1]+1];
           multdiv.push(result2);
          // console.log(result2);  
        }
       }
       
// dealing with singles (not streaks of ones),  get the first 3 numbers (multiply or divide) and push it
       
    if((differences[i] === 1) && ((differences[i-1] > 1) || (differences[i-1] == undefined)) && ((differences[i+1] > 1) || (differences[i+1] == undefined)) )
       {
     
        if (operatorSigns[x[i]] === '*'){
         result2 = numeros[x[i]] *
                 numeros[x[i]+1];
         
        if (operatorSigns[x[i+1]] === '*'){
          result2 = result2 * numeros[x[i]+2];
          multdiv.push(result2);
         
        } else if (operatorSigns[x[i+1]] === '/'){
          result2 = result2 / numeros[x[i]+2];
          multdiv.push(result2);
         
        }
         
        } else if (operatorSigns[x[i]] === '/') {
         result2 = numeros[x[i]] /
                 numeros[x[i]+1];
        if (operatorSigns[x[i+1]] === '/'){
          result2 = result2 / numeros[x[i]+2];
          multdiv.push(result2);
         
        }  else if (operatorSigns[x[i+1]] === '*'){
          result2 = result2 * numeros[x[i]+2];
          multdiv.push(result2);
          //console.log(result2);
       }
      }
     }    
    }
   
  }

  


// this is to find the index positions of + and -

const elementPlus = '+';
const elementNegative = '-';
let idp;
let idMin;


let indicesOfminusplusSigns = [];


function signsOrder2(array2) {


  idp = array2.indexOf(elementPlus);
  idMin = array2.indexOf(elementNegative);

  for(let i = 0; i < array2.length;i++) {  
  if (idp !== -1) {
    indicesOfminusplusSigns.push(idp);
    idp = array2.indexOf(elementPlus, idp + 1);
   
   }
    if (idMin !== -1) {
    indicesOfminusplusSigns.push(idMin);
    idMin = array2.indexOf(elementNegative, idMin + 1);
     
   }
  }
 
};




let addminresult = 0;
let addminus = [];
console.log(addminus);

function addSubtractOperation(z) {

  if (operatorSigns != null) {
  
  

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

   
 //console.log(addminus);
 
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
  for(let i = 1; i <= z.length;i++) {
 
     if (operatorSigns[i] === '+') {
            addminresult =  (addminresult +
            numeros[z[i]+1]);
           console.log(addminresult);
     } if (operatorSigns[i]  === '-') {
            addminresult = (addminresult +                          
            numeros[z[i]+1]);
           //console.log(addminresult);  
      }
   }  
     
     }
    addminus.push(addminresult);
    }
   }
  }



//console.log(addminus);
//console.log(addminresult);

// Function that returns the total outcome

let total = 0;
let totalarr;
function totalreturn() {
  if (addminus.length >= 1 && multdiv.length >= 1) {
    totalarr = multdiv.concat(addminus);
    total = totalarr.reduce((a,b) => a + b);
    console.log(total);
  } if (addminus.length == 0 && multdiv.length >= 1){
    total = multdiv.reduce((a,b) => a + b);
    console.log(total);
  } if (addminus.length == 1 && multdiv.length == 0){
     total = addminresult;
     console.log(total);
  }
}


  function reset1() {
    indicesOfSigns.length = 0;
    differences.length = 0;
    multdiv.length = 0;
    indicesOfminusplusSigns.length = 0;
    addminus.length = 0;
  }

  

  function resetall() {
    accumulatedVal.length = 0;
    subDisplay2.value = 0; 
    subDisplay1.innerHTML = '';
  }

 




