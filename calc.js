// const themeSwitcher = document.getElementById('theme-switcher');
// const p = document.button
// let isDarkMode = false;

// themeSwitcher.addEventListener('click', () => {
//     isDarkMode = !isDarkMode;
//     if(isDarkMode){
//      button.classList.add('dark- mode');
//      button.classList.remove('light-mode')
//      themeSwitcher.textContent = 'switch light mode'
//     }
//     else{
//         button.classList.add('light-mode')
//         button.classList.remove('dark mode')
//         themeSwitcher.textContent = 'switch dark mode'
//     }
// });

// button.classList.add('light-mode');

// let displayValue = '';
// let currentValue = ''
// let previousValue = ''
// let operation = ''

// const display = document.getElementsByClassName('head')
// console.log(display);


// document.getElementsByClassName('button-style-0').addEventListener('click', () => appendToDisplay('0'))
// document.getElementsByClassName('button-style-1').addEventListener('click', () => appendToDisplay('1'))
// document.getElementsByClassName('button-style-2').addEventListener('click', () => appendToDisplay('3'))
// document.getElementsByClassName('button-style-3').addEventListener('click', () => appendToDisplay('3'))
// document.getElementsByClassName('button-style-4').addEventListener('click', () => appendToDisplay('4'))
// document.getElementsByClassName('button-style-5').addEventListener('click', () => appendToDisplay('5'))
// document.getElementsByClassName('button-style-6').addEventListener('click', () => appendToDisplay('6'))
// document.getElementsByClassName('button-style-7').addEventListener('click', () => appendToDisplay('7'))
// document.getElementsByClassName('button-style-8').addEventListener('click', () => appendToDisplay('8'))
// document.getElementsByClassName('button-style-9').addEventListener('click', () => appendToDisplay('9'))


// document.getElementsByClassName('button-style-add').addEventListener('click', () => setOperation('+'))
// document.getElementsByClassName('button-style-subtract').addEventListener('click', () => setOperation('-'))
// document.getElementsByClassName('button-style-multiply').addEventListener('click', () => setOperation('*'))
// document.getElementsByClassName('button-style-divide').addEventListener('click', () => setOperation('/'))
// document.getElementsByClassName('button-style-del').addEventListener('click',  deleteLastDigit)
// document.getElementsByClassName('first-reset').addEventListener('click',  resetCalculator)
// document.getElementsByClassName('second-equals').addEventListener('click',  calculateResult)

// function appendToDisplay(digit){
//     currentValue += digit;
//     displayValue += digit;
//     display.Value = displayValue
// }

// function setOperation(op){
//     previousValue = currentValue;
//     currentValue = '';
//     operation = op
//     displayValue += op;
//     display.Value = displayValue
// }

// function deleteLastDigit(){
//     if( currentValue === ''){
//         previousValue = previousValue.slice(0, -1)
//         displayValue = displayValue.slice(0, -1)
//     }
//     else{
//         currentValue = currentValue.slice(0, -1)
//         displayValue = displayValue.slice(0, -1)
//     }
//     display.Value = displayValue
// }

// function calculatorReset (){
//     currentValue = ''
//     previousValue = ''
//     operation = ''
//     displayValue = ''
//     display.Value = displayValue
// }

// function calculateResult (){
//     try{
//         let result;
//         switch(operation){
//             case '+':
//                 result = parseFloat(previousValue) + parseFloat(currentValue);
//                 break;
//                 case '-':
//                  result = parseFloat(previousValue) - parseFloat(currentValue);
//                  break;
//                  case '*':
//                  result = parseFloat(previousValue) * parseFloat(currentValue);
//                  break;
//                  case '/':
//                  result = parseFloat(previousValue) / parseFloat(currentValue);
//                  break;
//                  default:
//                     result = 0
//         }
//         displayValue = result.toString();
//         display.Value = displayValue
//         currentValue = result.toString()
//         previousValue = ''
//         operation = ''
//     }
//     catch (error) {
//         display.Value = Error
//     }
// }