document.addEventListener('DOMContentLoaded', () => {
    let screenValue = '';

    //DOM Search and Select
    const calculatorScreen = document.querySelector('.inner-digits');
    
    function addClickedBtnValueToScreen(){
        const btn = document.querySelectorAll('.button-style:not(#del)');

        //loop through btn
        btn.forEach((eachhBtn) => {
            eachhBtn.addEventListener('click', (event)=>{
                screenValue += event.target.textContent;
                calculatorScreen.textContent = screenValue;
            })
        })
        
    }
    addClickedBtnValueToScreen()

    const equalToOperation = () => {
        const btn = document.querySelector('.second');
        btn.onclick = () => {
            const totalSum = eval(screenValue)

            calculatorScreen.textContent = totalSum

            screenValue = ''
        }
    }
    equalToOperation()

    const reset = () => {
        const btn = document.querySelector('.first');
        btn.addEventListener('click', () => {
            screenValue = 0;
            calculatorScreen.textContent = screenValue;
            screenValue = ''
        })
    }
    reset()

    const del = () => {
        const btn = document.getElementById('del');
        btn.onclick = () => {
            screenValue = screenValue.slice(0, -1)

            if(screenValue === ''){
                return calculatorScreen.textContent = 0;
            }

            calculatorScreen.textContent = screenValue;
            
        }
    }

    if(screenValue ==='+'){
        return calculatorScreen.textContent = 0;
    }
    calculatorScreen.textContent = screenValue
    del()
  
    // function validateInput(current, next){
    //     const operators = ['+', '-', '/', '*'];
 
    //     const isOp = (c) => 
    //         operators.includes(c);
    //     const last = current.slice(-1);

    //     //prevent operator first, except minus
    //     if (current.length === 0 && isOp(next)
    //     && next !== '-'
    //     ){
    //         return current;
    //     }

    //     //prevent 2 operators next to each other
    //     if (isOp(last) && isOp(next)){
    //         if (next === '-') {return current + next;
    //         return current;}
    //     }

    //     //if user types., convert to 0.
    //     if(next === '.'){
    //         // if empty or last is an operator, create a new number 0
    //         if(current.length === 0 || isOp(last)){
    //             return current + '0'
    //         }
    //     }
    //     //prevent double dots inside same number 
    //     const parts = current.split(/[\+\*/-]/);
    //     if (parts[parts.length - 1].includes('.')){
    //         return current;
    //     }
    // }
    // return current + next;

    // button.addEventListener('click', () => {
    //     const input = button.innerText;
    //     screenValue = validateInput(screenValue, input)
    // })



    document.addEventListener('DOMContentLoaded', () => {
        addClickedBtnValueToScreen();
    });
    const allOperators =  ['+', '-', '/', '*']

    function addClickedBtnValueToScreen(){
         const btn = document.querySelectorAll('.button-style:not(#del)');

        btn.forEach((eachOperator)=> {
            eachOperator.addEventListener('click', (event) =>{
                const value = event.target.textContent;
                const lastChar = screenValue.slice(-1);
                        console.log('this is what is happening here'+ lastChar);
                
                const theOperators = allOperators.includes(value);
                
                const isLastCharOperator = allOperators.includes(lastChar);
                const initialInput = screenValue === '';
                console.log(initialInput);
                

                if (initialInput && theOperators && value !== '-'){
                    return;
                }
                if(theOperators && isLastCharOperator && !(value === '-' && lastChar !== '-')) {
                    return;
                }
                if (value === '.' && lastChar === '.'){
                    return;
                }
                if(value === '.' && initialInput){
                    screenValue = '0.';
                    calculatorScreen.textContent = screenValue;
                    return;
                }
                
                // if(char === '.' ) {
                //     if(lastIsOperator) return;
                //     const parts = screenValue.split(/ [\+\-\*\/]/)
                //     const lastPart = parts[parts.length -1 ];
                //     if (lastPart.includes('.')) return;
                // }
                screenValue += value;
                calculatorScreen.textContent = screenValue
            })
        })
    }
})


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