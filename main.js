

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
document.getElementById("sub2").defaultValue = "0";



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
buttonEqual.addEventListener('click', equalTotal);
buttonPercent.addEventListener('click', percentNum);
buttonMinusPlus.addEventListener('click',addnegative);

const regex = /(\-)?[0-9]*(\.)?[0-9]+/g;
const regex2 = /(\+)|(\-)|(\*)|(\/)/g;
const regex3 = /^[0-9]+(\.[0-9]+)[\W][0-9]+((\.)[0-9]+)?$/;
const regex4 = /^[0-9]*(\.)?[0-9]*[\W][0-9]*(\.)?[0-9]*([\W][0-9]*(\.)?[0-9]+)*$/;
const regex5 = /^(\-)?[0-9]*(\.)?[0-9]+[\W]$/;


let text;
let operatorSigns;
let stringNumbers;
let numeros = [];
let accumulatedVal = [];
let accumulatedSym = [];
let num2;

// Functions to input numbers and operators into the display

//Function to input numbers

function printNumber (e) {
 
  console.log(typeof(num2));
    const str = e.target.firstChild.nodeValue;
    let num = parseInt(str);
    
    console.log(num);
    if (subDisplay1.innerHTML !== total && subDisplay1.innerHTML !== num2) {
      var y = document.createTextNode(str); 
      subDisplay1.appendChild(y); 
      accumulatedVal.push(num);
      console.log(accumulatedVal);
      
      subDisplay2.value = num;
      subDisplay2.style.color = 'hsl(0, 0%, 67%)';
      text = accumulatedVal.join('');
      showcaseOutput(text);
    }

    console.log(total);

    console.log(numeros);
    }
   
    

  //Function to input operation symbols
  
  function printSymbol (e) {
   
    const str = e.target.firstChild.nodeValue;
    let testValue = parseInt(accumulatedVal[0]);
    let testValue2 = parseInt(accumulatedVal[accumulatedVal.length - 1]);
    let testValue3 = accumulatedSym[0];
        
    if (((testValue) && (testValue2) || (testValue3 == '.')) ) {
      var y = document.createTextNode(str);  
      subDisplay1.appendChild(y); 
      accumulatedVal.push(str);
      accumulatedSym.push(str);
      
    } else return;
  }

    
  //Function to input the decimal period

  function printDecimal (e) {
       
    const str = e.target.firstChild.nodeValue;
    let testValue4 = accumulatedSym[accumulatedSym.length - 1];
    let testValue5 = numeros[numeros.length - 1];
     
    if ((accumulatedSym.length == 0) || (testValue4 == '+' || testValue4 == '-' || testValue4 == '*' || testValue4 == '/' ) 
    && (subDisplay1.innerHTML !== total) )  {
      if ((numeros[numeros.length-1] !== parseFloat(num2))) {
        var y = document.createTextNode(str);  
        subDisplay1.appendChild(y); 
        accumulatedVal.push(str);
        accumulatedSym.push(str);
      }
    } else return;  
   } 


 //Function for percentage

  function percentNum () {

    if (subDisplay2.value == subDisplay2.defaultValue || subDisplay2.value == num2 || subDisplay2.value == total || subDisplay2.value == ''){
      return;
    }


 let text = subDisplay1.innerHTML;
 let num = parseInt(text);
 
 num = num % 1;
  
  if(num == 0){
    num2 = (subDisplay2.value/100).toFixed(2);
  } else {
    num2 = (subDisplay2.value/100).toFixed(10);
  }

  if(subDisplay2.value != null ){ 
    if (numeros[numeros.length-1]) {
     numeros.pop(numeros[numeros.length-1]);
     numeros.push(num2); 
    }
     subDisplay1.innerHTML = num2; 
     subDisplay1.style.color = 'black';
     subDisplay1.style.fontSize = '60px';
     accumulatedVal.length = 0; 
     accumulatedVal.push(num2);
     subDisplay2.style.color = 'hsl(0, 0%, 67%)';
     subDisplay2.value = num2; 
     text = accumulatedVal.join('');
     showcaseOutput(text);
    } 
  
  } 

  // Function to convert a positive number to negative and viceversa

  function addnegative() {
    if (subDisplay2.value == subDisplay2.defaultValue || subDisplay2.value == ''){
      return;
    }

    let text = subDisplay1.innerHTML;
    let num = parseInt(text);
     num = num*(-1);
    if(subDisplay2.value != null ){ 
     
      if (numeros[numeros.length-1]) {
       numeros.pop(numeros[numeros.length-1]);
       numeros.push(num); 
       console.log(numeros);
      }
      console.log(accumulatedVal);
       subDisplay1.innerHTML = num; 
       subDisplay1.style.color = 'black';
       subDisplay1.style.fontSize = '60px';
       cutAndReplace(accumulatedVal,num);
       console.log(accumulatedVal);
       subDisplay2.style.color = 'hsl(0, 0%, 67%)';
       subDisplay2.value = num; 
       text = accumulatedVal.join('');
       showcaseOutput(text);
      } 

  }

  function cutAndReplace(array,x) {
    for(let i = array.length-1; i >= 0; i--){
      if(typeof(array[i]) == 'number' || array[i] == '.') {
        array.pop();
      } if(array[i]== '-' || array[i]== '*' || array[i]== '/' || array[i]== '+' || array.length == 0) 
      {
       array.push(x);
       break;
      }
    }
    return array;
  }

 
//Function to obtain input and print output in the second screen 


let resultx;
let resulty;     
  
  function showcaseOutput (a) {
   
    resultx = regex.exec(a);
    resulty = regex4.exec(a);
    let num;
    console.log(resultx);
    console.log(resulty);
    if (resultx) {
      num = parseFloat(resultx.input);
      subDisplay2.value = num;
      numeros.push(num);
    } 
      

   if (resulty) {
   
      operatorSigns = resulty[0].match(regex2);
      stringNumbers = resulty[0].match(regex);
      numeros = stringNumbers.map(Number);
      if (numeros.length == 1) {
        let numi = numeros[0];
        subDisplay2.value = numi;
        return;
      } 
      signsOrder(operatorSigns, stringNumbers);
      multDivOperation(indicesOfSigns);
      
      signsOrder2(operatorSigns, stringNumbers);
      addSubtractOperation(indicesOfminusplusSigns);

      totalreturn(); 
      subDisplay2.value = total;
      }
    
     reset1();
     }
     
 

   
// Functions to do operations

 
// this is to get the index positions of multiplication & division signs


let indicesOfSigns = [];


function signsOrder(array1, array2) {  
  for(let i =0; i < array2.length-1; ++i) {
     if (array1[i] === '*' || array1[i] === '/'){
    indicesOfSigns.push(i);
    }
   }   
};



// get one's to find consecutiveness of multiplication & division

let differences;

// function to multiply and divide numbers in the calculator

let multdiv = [];
console.log(multdiv);
let firstNumber;
let secondNumber;
let result;
let result2;

function multDivOperation(x) {

  differences = [];

  for (let j = 0; j< x.length-1; j++) {
    
    differences.push(x[j+1] - x[j]);
    
}


      
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
 
 
 for (let i = 0; i <= differences.length; i++) {

// multiplying any nonconsecutive number
 
if (differences[i] > 1) {  
  if ((differences[i-1] == undefined && differences[i+1] == undefined) || (differences[i-1] == undefined && differences[i+1] > 1)  ) {
 
      if (operatorSigns[x[i]] == '*') {
          firstNumber =  numeros[x[i]] *
                         numeros[x[i]+1];
         multdiv.push(firstNumber);
        // console.log(firstNumber);
       } if (operatorSigns[x[i]] == '/') {
          firstNumber =  numeros[x[i]] /
                         numeros[x[i]+1];
         multdiv.push(firstNumber);
        //  console.log(firstNumber);
       }
  
      if (operatorSigns[x[i+1]] == '*') {
          secondNumber =  numeros[x[i+1]] *
                         numeros[x[i+1]+1];
         multdiv.push(secondNumber);
       // console.log(secondNumber);
       } if (operatorSigns[x[i+1]] == '/') {
          secondNumber =  numeros[x[i+1]] /
                         numeros[x[i+1]+1];
         multdiv.push(secondNumber);
         //console.log(secondNumber);
       }
     }
 
  
    if ((differences[i-1] >= 1 && differences[i+1] == undefined) ||
      (differences[i-1] > 1 && differences[i+1] > 1)) {
      
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
 
   if ((differences[i-1] == undefined && differences[i+1] == 1) || (differences[i-1] == 1 && differences[i+1] > 1)) {
       if (operatorSigns[x[i]] == '*') {
          firstNumber =  numeros[x[i]] *
                         numeros[x[i]+1];
         multdiv.push(firstNumber);
        // console.log(firstNumber);
       } if (operatorSigns[x[i]] == '/') {
          firstNumber =  numeros[x[i]] /
                         numeros[x[i]+1];
         multdiv.push(firstNumber);
        //  console.log(firstNumber);
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

let indicesOfminusplusSigns = [];


function signsOrder2(array2, array3){  
  for(let i =0; i < array3.length-1; ++i) {
     if (array2[i] === '+' || array2[i] === '-'){
      indicesOfminusplusSigns.push(i);
    }   
  }     
};


let addminresult = 0;
let addminus = [];
console.log(addminus);

function addSubtractOperation(a) {

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
  for(let i = 1; i <= a.length; i++) {
 
     if (operatorSigns[i] === '+') {
            addminresult =  (addminresult +
            numeros[a[i]+1]);
           console.log(addminresult);
     } if (operatorSigns[i]  === '-') {
            addminresult = (addminresult +                          
            numeros[a[i]+1]);
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
  let num;
  if (addminus.length >= 1 && multdiv.length >= 1) {
    totalarr = multdiv.concat(addminus);
    total = totalarr.reduce((a,b) => a + b);
    num = total % 1;
    if(num == 0){
      total = total.toFixed(1); 
    } else {
      total = total.toFixed(10); 
     } 
    console.log(total);
  } if (addminus.length == 0 && multdiv.length >= 1){
    total = multdiv.reduce((a,b) => a + b);
    num = total % 1;
    if(num == 0){
      total = total.toFixed(1); 
    } else {
      total = total.toFixed(10); 
     } 
    console.log(total);
  } if (addminus.length == 1 && multdiv.length == 0){
     total = addminresult;
     num = total % 1;
     if(num == 0){
      total = total.toFixed(1); 
    } else {
      total = total.toFixed(10); 
     } 
     console.log(total);
  }

}

//Function to reset individual outputs to recalculate when new inputs are added:

  function reset1() {
    indicesOfSigns.length = 0;
    multdiv.length = 0;
    indicesOfminusplusSigns.length = 0;
    addminus.length = 0;
    addminresult = 0;
    
  }

  //Function to reset everything:

  function resetall() {
    accumulatedVal.length = 0;
    accumulatedSym.length = 0;
    subDisplay2.value = subDisplay2.defaultValue; 
    subDisplay1.innerHTML = '';
    subDisplay2.style.color = 'black';
    subDisplay1.style.fontSize = '30px';
    total = 0;
  }

 
//Function for button equal || !subDisplay2.defaultValue

function equalTotal() {

  if (subDisplay2.value == subDisplay2.defaultValue){
    return;
  }

  if (subDisplay2.value == total ) {
  subDisplay1.innerHTML = total;
  subDisplay2.value = ''; 
  subDisplay1.style.color = 'black';
  subDisplay1.style.fontSize = '60px';

   } 
   
 }


