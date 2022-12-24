

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
buttonBackspace.addEventListener('click',backSpace);


let text;
let operatorSigns;
let stringNumbers;
let numeros = [];
let accumulatedVal = [];
let accumulatedSym = [];


// FUNCTIONS TO INPUT NUMBERS AND OPERATORS INTO THE DISPLAY   

//Function to input numbers

function printNumber (e) {
 
  if(accumulatedVal.length == 1 && accumulatedVal[0] == 0){
    return;
  }
  
    const str = e.target.firstChild.nodeValue;
    let num = parseInt(str);
    
    if (subDisplay1.innerHTML !== total && subDisplay1.innerHTML !== num2) {
      var y = document.createTextNode(str); 
      subDisplay1.appendChild(y); 
      accumulatedVal.push(num);
      subDisplay2.value = num;
      subDisplay2.style.color = 'hsl(0, 0%, 67%)';
      text = accumulatedVal.join('');
      showcaseOutput(text);
      
    }
    if (subDisplay2.value >= 999999999){
      subDisplay2.style.fontSize = '50px';
    }
    if (subDisplay2.value >= 999999999999){
      subDisplay2.style.fontSize = '40px';
    }
    if (subDisplay2.value >= 999999999999999) {
        subDisplay2.style.fontSize = '30px';
    }
  
    if(accumulatedVal.length > 15) {
     testHigherFifteen(accumulatedVal);
     
    if (count>=15) {
      alert('input number has to be less than 15 digits');
      accumulatedVal.pop();
      console.log(accumulatedVal);
      let firstResult = accumulatedVal.join('');
      subDisplay1.innerHTML = firstResult;
      let num5 = parseFloat(firstResult);
      subDisplay2.value = num5.toExponential();
      subDisplay2.style.color = 'hsl(0, 0%, 67%)';
      text = accumulatedVal.join('');
      console.log(count);
      showcaseOutput(firstResult);
      return;
     
    }
    
    
  }
    
    console.log(accumulatedVal);
   }

// Function to test for 15 digits at the end of an array
   let count = 0;
   function testHigherFifteen(array) {
    
     let i; 
      
      for(i = (array.length)-1; i >= 0; --i){
       if (typeof(array[i]) == 'number'){
        count++;
          } 
      if (count == 15 || array[i] == '*') {  break; }   
      }
      
      return count;
    }


    
  //Function to input operation symbols
  
  function printSymbol (e) {
   
    const str = e.target.firstChild.nodeValue;
    let testValue = accumulatedVal[accumulatedVal.length - 1];
    let testValue2 = accumulatedSym[accumulatedSym.length - 1];
         
    if ((accumulatedVal.length == 0) || testValue == '+' || testValue == '-' || testValue == '*' || testValue == '/' || (testValue2 == '.' && testValue == '.')) { 
      
      return;
    }  else {
      var y = document.createTextNode(str);  
      subDisplay1.appendChild(y); 
      accumulatedVal.push(str);
      accumulatedSym.push(str);

    }
   
  }

    
  //Function to input the decimal period

  function printDecimal (e) {
       
    const str = e.target.firstChild.nodeValue;
    let testValue4 = accumulatedSym[accumulatedSym.length - 1];
         
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
  let num2;

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
  console.log(accumulatedVal);
  } 

  // Function to convert a positive number to negative and viceversa

  function addnegative() {
    if (subDisplay2.value == subDisplay2.defaultValue || subDisplay2.value == ''){
      return;
    }

    if(((accumulatedSym[accumulatedSym.length-1] == '*' || accumulatedSym[accumulatedSym.length-1] == '/' || accumulatedSym[accumulatedSym.length-1] == '-'|| 
    accumulatedSym[accumulatedSym.length-1] == '+') && (accumulatedVal[accumulatedVal.length-1] == '*' || accumulatedVal[accumulatedVal.length-1] == '/' || accumulatedVal[accumulatedVal.length-1] == '+'|| 
    accumulatedVal[accumulatedVal.length-1] == '-'))) {
      return;
    }

    if(newText != null){

      if(newText[newText.length-1] == '-' && (newText[newText.length-2] == '*' || 
      newText[newText.length-2] == '/' || newText[newText.length-2] == '+' )) {
        return;
      }
     
    }
    
    let text = subDisplay1.innerHTML;
    let num;
     console.log(accumulatedSym);
     if (accumulatedVal.length >= 1 && accumulatedSym.length == 0){
     num = parseInt(cutlastnumber(text));
     num = num*(-1);
     console.log(num);
     cutAndReplace(accumulatedVal,num);
     } else if (accumulatedSym[accumulatedSym.length-1] == '*' || accumulatedSym[accumulatedSym.length-1] == '/' || accumulatedSym[accumulatedSym.length-1] == '+' && 
     accumulatedVal.length > 1){
      num = parseInt(cutlastnumber(text));
      num = num*(-1);
      console.log(num);
      cutAndReplace(accumulatedVal,num);
     } else if (accumulatedSym[accumulatedSym.length-1] == '-'  && 
     accumulatedVal.length > 1){
      num = parseInt(cutlastnumber(text));
      console.log(num);
      changeMinustoPlusArray(accumulatedVal);
     } else if (accumulatedSym[accumulatedSym.length-1] == '.' && accumulatedVal.length >= 1){
       cutAndReplace(accumulatedVal,cutlastnumber(text));
     }
    
    if(subDisplay2.value != null ){ 
   
       subDisplay2.style.color = 'hsl(0, 0%, 67%)';
       subDisplay2.value = num; 
       text = accumulatedVal.join('');
       console.log(text);
       subDisplay1.innerHTML = text; 
       showcaseOutput(text);
      } 

  }

 
  // Function to obtain the last number of the input

  function cutlastnumber(a) {
    let num = [];
    let num2 = [];
    let array = a.split('');
      for(let i = array.length-1; i >= 0; i--){
         
         if(array[i] === '-' || array[i] === '*' || array[i] === '/' || array[i] === '+' || array.length === 0) {
           break;
         } else {
           num.push(array[i]);
         } 
      }
    
    for(i = array.length-1; i >= 0; i--){
      num2.push(num[i]);
    }
    num2 = num2.join('');
    
    return num2;
  }

  //Function to cut the last number of an array and replace it with the negative number

  function cutAndReplace(array,x) {
   
    console.log(x);
    console.log(typeof(x));
    for(let i = array.length-1; i >= 0; i--){
      if(typeof(array[i]) == 'number' || array[i] == '.') {
        array.pop();
      } if(array[i]== '-' || array[i]== '*' || array[i]== '/' || array[i]== '+' || array.length == 0) 
      {
        if(x <1 && x>0 || accumulatedSym[accumulatedSym.length-1] == '.') {
          array.push(-x);
          console.log(typeof(x));
          console.log(accumulatedVal);
          break;
        } else {
          console.log(typeof(x));
          console.log(accumulatedVal);
          array.push(x);
          break;
        }
       
      }
    }
    return array;
  }


  //Function to change minus to plus when two minuses are placed

  function changeMinustoPlusArray(array) {
   
    for(let i = array.length-1; i >= 0; i--){
          
       if(array[i] === '-') {
         array[i] = '+'
         break;
       } 
    }
  return array;
}

 
//Function to obtain input and print output in the second screen 
const regex = /(\-)?[0-9]*(\.)?[0-9]+/g;
const regex2 = /(\-)?[0-9]*(\.)?[0-9]*[\W](\-)?[0-9]*(\.)?[0-9]*([\W](\-)?[0-9]*(\.)?[0-9]+)*$/;

let resultx;
let resulty;     
  
  function showcaseOutput (a) {
   
    resultx = regex.exec(a);
    resulty = regex2.exec(a);
    let num;
    
    if (resultx) {
      num = parseFloat(resultx.input);
      subDisplay2.value = num;
      numeros.push(num);
    } 
      

   if (resulty) {

       operatorSigns = [];
             
      stringNumbers = resulty[0].match(regex);
      numeros = stringNumbers.map(Number);
        
      // if sign push it
      for(let i = 0; i < accumulatedVal.length; i++){
        if(accumulatedVal[i] == '/' || accumulatedVal[i] == '*' || accumulatedVal[i] == '-' || accumulatedVal[i] == '+'){
          operatorSigns.push(accumulatedVal[i]);
        }
      }

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

     
 // Function to delete numbers and operators if mistakes are made

 // Function to check if number

 function isNumber(data) {
  return (typeof data === 'number' && !isNaN(data));
}


 let newText;
 function backSpace() {

  // to eliminate decimal periods by themselves
  if (accumulatedVal[0] == '.' && accumulatedVal[accumulatedVal.length-1] == '.') {
    resetall();
   }

  let text = subDisplay1.innerHTML;
  let text2;
  let num3
 
  // if the last value in my calculator is a number:

    if (isNumber(accumulatedVal[accumulatedVal.length-1])){ 

      
// higher digit numbers (negative or positive)
if (text.length >= 1 &&  (accumulatedVal[accumulatedVal.length-1] < -9 || accumulatedVal[accumulatedVal.length-1] > 9) ) {
  console.log(accumulatedVal); 
  
  newText = text.split('');
  //console.log(newText); 
  newText.pop();
  //console.log(newText); 
  newText = newText.join(''); 
  //console.log(newText); 
  subDisplay1.innerHTML = newText;

  accumulatedVal.pop();
  console.log(accumulatedVal);
  num3 = parseInt(newText);
  console.log(num3); 
  subDisplay2.value = num3;
  subDisplay2.style.color = 'hsl(0, 0%, 67%)';
  
  accumulatedVal.push(num3);
  console.log(accumulatedVal); 
  console.log(accumulatedVal.join('')); 
  showcaseOutput(accumulatedVal.join(''));
  return;
 }
 console.log(accumulatedVal[accumulatedVal.length-1]);

   // negative decimals below 9 or higher than -9
if (accumulatedVal.length >= 1 && (text.indexOf('.') != -1)) {
  if (accumulatedVal[accumulatedVal.length-1] >= -9 && accumulatedVal[accumulatedVal.length-1] < 0) {
    console.log(accumulatedVal); 
  
    newText = text.split('');
    console.log(newText); 
    newText.pop();
    console.log(newText); 
    newText = newText.join(''); 
    console.log(newText); 
    subDisplay1.innerHTML = newText;
  
    accumulatedVal.pop();
    console.log(accumulatedVal);
    num3 = parseInt(newText);
    console.log(num3); 
    subDisplay2.value = num3;
    subDisplay2.style.color = 'hsl(0, 0%, 67%)';
    
    accumulatedVal.push(num3);
    console.log(accumulatedVal); 
    console.log(accumulatedVal.join('')); 
    showcaseOutput(accumulatedVal.join(''));
    return;
  }
  if (accumulatedVal[accumulatedVal.length-1] > 0 && accumulatedVal[accumulatedVal.length-1] <= 9) {

    newText = text.split('');
    console.log(newText);
    newText.pop();
    newText = newText.join('');
    console.log(newText);
    console.log(accumulatedVal);
    subDisplay1.innerHTML = newText; 
    accumulatedVal.pop();
    newText = parseFloat(newText);
    console.log(newText);
    subDisplay2.value = newText;
    subDisplay2.style.color = 'hsl(0, 0%, 67%)';
    //accumulatedVal.push(newText);
    text2 = accumulatedVal.join('');
    console.log(text2);
    if (!isNaN(newText)){
      console.log(showcaseOutput(text2));
      return;
    }
    if(accumulatedVal[0] == '.'){
      subDisplay2.value = 0;
      
    }
        
    if (accumulatedVal.length == 1 || (newText >= -9 && newText < 0) ||
    (newText > 0 && newText <= 9)) {
      console.log(text2);
      resetall();
     }
     console.log(showcaseOutput(text2));
    return;
   }

  }

    // single digits (negative or positive)
if (accumulatedVal.length === 1 && (text.indexOf('.') == -1) && ((accumulatedVal[accumulatedVal.length-1] >= -9 && accumulatedVal[accumulatedVal.length-1] < 0) ||
(accumulatedVal[accumulatedVal.length-1] >= 0 && accumulatedVal[accumulatedVal.length-1] <= 9)))   { 

 console.log(accumulatedVal.length);
 resetall();
}

}

  // to eliminate symbols and consecutive inputted numbers
  if (accumulatedVal.length > 1 && text.length > 1) { 

      
    newText = text.split('');
    console.log(newText);
    newText.pop();
    newText = newText.join('');
    console.log(newText);
    console.log(accumulatedVal);
    subDisplay1.innerHTML = newText; 
    accumulatedVal.pop();
    newText = parseFloat(newText);
    console.log(newText);
    subDisplay2.value = newText;
    subDisplay2.style.color = 'hsl(0, 0%, 67%)';
    //accumulatedVal.push(newText);
    text2 = accumulatedVal.join('');
    console.log(text2);
    if (!isNaN(newText)){
      console.log(showcaseOutput(text2));
      return;
    }
    if(accumulatedVal[0] == '.'){
      subDisplay2.value = 0;
      
    }
        
    if (accumulatedVal.length == 1 || (newText >= -9 && newText < 0) ||
    (newText > 0 && newText <= 9)) {
      console.log(text2);
      resetall();
     }
     console.log(showcaseOutput(text2));
    return;
   }


} 

 
   
// FUNCTIONS TO DO OPERATIONS

 
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
let firstNumber;
let secondNumber;
let result;
let result2 =0;

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

  
 
  // Do this only if there are no * or / , meaning we are only adding or subtracting:
 
  if (addminus.length == 0 && indicesOfSigns.length == 0) {    
     
  // if there is only one + or - in the array
     
  if (operatorSigns.length >= 1) {
   if (operatorSigns[0] === '+') {
      addminresult =  (numeros[0] +
      numeros[1]);
      console.log(addminresult);
   } if (operatorSigns[0]  === '-') {
     addminresult = (numeros[0] +
      numeros[1]);
      console.log(addminresult);
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
            console.log(addminresult);
      }
   }  
     
     }
    addminus.push(addminresult);
    }
   }
  }


  // Function that returns the total outcome

let total = 0;
let totalarr;
function totalreturn() {
  let num;
  if (addminus.length >= 1 && multdiv.length >= 1) {
    totalarr = multdiv.concat(addminus);
    total = totalarr.reduce((a,b) => a + b);
    if (total >= 999999999999999) {
      total = total.toExponential(5);
  } else {
    num = total % 1;
    if(num == 0){
      total = total.toFixed(1); 
    } else {
      total = total.toFixed(5); 
     } 
  }
   
   
  } if (addminus.length == 0 && multdiv.length >= 1){
    total = multdiv.reduce((a,b) => a + b);
    if (total >= 999999999999999) {
      total =  total.toExponential(5);
    } else {
      num = total % 1;
      if(num == 0){
        total = total.toFixed(1); 
      } else {
        total = total.toFixed(5); 
       } 
    }
    
    
  } if (addminus.length == 1 && multdiv.length == 0) {
     total = addminresult;
     if (total >= 999999999999999) {
      total = total.toExponential(5);
     } else {
      num = total % 1;
      if(num == 0){
       total = total.toFixed(1); 
      } else {
       total = total.toFixed(5); 
      } 
     }
    
     
  }
 
}

//Function to reset individual outputs to recalculate when new inputs are added:

  function reset1() {
    indicesOfSigns.length = 0;
    multdiv.length = 0;
    indicesOfminusplusSigns.length = 0;
    addminus.length = 0;
    addminresult = 0;
    count = 0;
  }

  //Function to reset everything:

  function resetall() {
    accumulatedVal.length = 0;
    accumulatedSym.length = 0;
    subDisplay2.value = subDisplay2.defaultValue; 
    subDisplay1.innerHTML = '';
    subDisplay2.style.color = 'black';
    subDisplay1.style.fontSize = '30px';
    subDisplay2.style.fontSize = '60px';
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
  if (subDisplay1.innerHTML.length <= 10) {
    subDisplay1.style.fontSize = '60px';
  }
  if (subDisplay1.innerHTML.length > 10 || subDisplay1.innerHTML.length <= 12) {
    subDisplay1.style.fontSize = '50px';
  }
  if (subDisplay1.innerHTML.length > 12) {
    subDisplay1.style.fontSize = '40px';
  }
   } 
   
 }


