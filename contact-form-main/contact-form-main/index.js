// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const firstName = document.querySelector('fname');
//      const lastName = document.querySelector('#lname')
//       const email = document.querySelector('email')
//        const radioBox = document.getElementsByName('#radio-select')
//         const messages = document.getElementById('#comment')
//         const checkBox = document.getElementById('#my-checkbox')

//       const firstNameError = document.querySelector('.ferror')   
//       const lastNameError = document.querySelector('.lerror')
//        const emailError = document.querySelector('.error')   
//        const queryError = document.querySelector('.rerror')    
//        const messagesError = document.querySelector('.merror')
//        const checkboxError = document.querySelector('.cerror')  
       
//        form.addEventListener('submit', (action) => {
//         action.preventDefault()

//         const firstNameValue = firstName.Value.trim()
//         const lastNameValue = lastName.Value.trim()
//         const emailValue = email.Value.trim()
//         const messagesValue = messagesError.Value.trim()
//         const checkBoxValue = checkBox.Value.trim()

//         let isQueryChecked = false;
//         let isValid = true;

//          radioBox.forEach(radioBox => {
//             if(radioBox.checked){
//                 return isQueryChecked = true;
//             }
//          })
//          if(!firstNameValue){
//             firstNameError.classList.add('ferror');
//             isValid = false;
//          }
//          else{
//             firstNameError.classList.remove('ferror')
//          }
//          if(!lastNameValue){
//             lastNameError.classList.add('lerror');
//             isValid = false;
//          }
//          else{
//             lastNameError.classList.remove('lerror')
//          }
//          if(!emailValue){
//            emailError.classList.add('error');
//             isValid = false;
//          }
//          else{
//             emailError.classList.remove('error')
//          }
//          if(!messagesValue){
//             messagesError.classList.add('merror');
//             isValid = false;
//          }
//          else{
//             firstNameError.classList.remove('merror')
//          }
//          if(!checkBoxValue){
//             messagesError.classList.add('cerror');
//             isValid = false;
//          }
//          else{
//             firstNameError.classList.remove('cerror')
//          }
//          if(!isQueryChecked){
//            queryError.classList.add('rerror')
//          }
//          else{
//             queryError.classList.remove('rerror')
//          }
//          if(isValid){
//             form.submit( )
//          }
//        })
// })







// document.addEventListener('DOMContentLoaded', () => {
//   const   form = document.querySelector('form');

//   const firstName = document.querySelector('#fname');
//   const lastName = document.querySelector('#lname');
//   const  email = document.querySelector('#email');
//   const radio = document.querySelector('#my-radio');
//   const comment = document.querySelector('#comment');
//   console.log(comment);
  
//   const checkbox = document.querySelector('#my-checkbox');

//   //error part
//   const firstNameError = document.querySelector('.error');
//   const lastNameError = document.querySelector('error');
//   const emailError = document.querySelector('.error');
//   const radioError = document.querySelector('.error');
//   const commentError = document.querySelector('.error');
//   const checkBoxError = document.querySelector('.error')

//   form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const firstNameValue = firstName.value.trim()
//     const lastNameValue = lastName.value.trim()
//     const emailValue = email.value.trim()
   
//     const commentValue = comment.value.trim()
//     console.log(commentValue);
    
//     const checkboxValue = checkbox.value.trim()

//     let isQueryChecked = false;
//     let isValid = true;

//     radio.forEach(radio => {
//         if(radio.checked){
//             return isQueryChecked = true;
//         }
//     })
       
//       if (!firstNameValue){
//         firstNameError.classList.add('error');
//         isValid = false;
//       }else{
//         firstNameError.classList.remove('error');
//       }
//       if(!lastNameValue){
//         lastNameError.classList.add('error');
//         isValid = false;
//       }else{
//         lastNameError.classList.remove('error')
//       }
//       if (!emailValue){
//         emailError.classList.add('error')
//       }else{
//         emailError.classList.remove('error')
//       }
    //   if(!radioValue){
    //     radioError.classList.add('error');
    //   }else{
    //     radioError.classList.remove('error');
    //   }
//       if(!commentValue){
//         commentError.classList.add('error')
//       }else{
//         commentError.classList.remove('error');
//       }
//       if(!checkboxValue){
//         checkBoxError.classList.add('error');        
//       }else{
//         checkBoxError.classList.remove('error');
//       }
      
//       if(!isQueryChecked){
//       radioError.classList.add('error');
//       isValid = false;
//       }else{
//         radioError.classList.remove('error')
//       }

//       if(isValid){
//         form.submit()
//       }

//   })
// })



// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const firstName = document.querySelector('#fname')
//     const lastName = document.querySelector('#lname')
//     const email = document.querySelector('email')
//     const radio = document.querySelector('#my-radio')
//     const comment = document.querySelector('#comment')
//     const checkbox = document.querySelector('#my-checkbox')
  
//     //error
//     const firstNameError = document.querySelector('error')
//     const lastNameError = document.querySelector('error')
//     const emailError = document.querySelector('error')
//     const radioError = document.querySelector('error')
//     const commentError = document.querySelector('error')
//     const checkboxError = document.querySelector('error')

//     //main
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()

//         const firstNameValue = firstName.value.trim()
//          const lastNameValue = lastName.value.trim()
//          const emailValue = email.value.trim()
//          const radioValue = radio.value.trim()
//         const commentValue = comment.value.trim()
//         const checkboxValue = checkbox.value.trim()
        
//         isRadioChecked = false;
//         let isValid = true;

//         radio.forEach(radio => {
//             if (radio.checked){
//                 return isRadioChecked = true;
//             }
//         })
//         if(!firstNameValue){
//             firstNameError.classList.add('error')
//             isValid = false;
//         }else{
//             firstNameError.classList.remove('error')
//         }
//         if(!lastNameValue){
//             lastNameError.classList.add('error')
//             isValid = false;
//         }else{
//             lastNameError.classList.remove('error')
//         }
//         if(!emailValue){
//             emailError.classList.add('error')
//             isValid = false;
//         }else{
//             emailError.classList.remove('error')
//         }
//         if(!radioValue){
//             radioError.classList.add('error')
//             isValid = false;
//         }else{
//            radioError.classList.remove('error')
//         }
//         if(!commentValue){
//             commentError.classList.add('error')
//             isValid = false;
//         }else{
//            commentError.classList.remove('error')
//         }
//     })

// })





document.addEventListener('DOMContentLoaded', () =>{
const form = document.querySelector('form')
const radioOption = document.querySelector('#my-radio')

radioOption.forEach(option => {
    option.addEventListener('click', () => {
        radioOption.forEach(opt => opt.classList.remove('selected'))
        option.classList.add('selected')
        option.querySelector('input[type = "radio"]').checked = true;
    })
})
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let isValid = true;

    document.querySelector('form-main').forEach(event.classList.remove('error'))

    const checkRequired = (id) => {
        const input = document.getElementById(id);
        if (input.value.trim() === ''){
            input.closest('.form-main').classList.add('error')
            isValid = false;
        }
    }
    checkRequired('firstName')
    checkRequired('lastName')
    checkRequired('messages')

    const queryType = document.querySelector('input[name = "radio-select"]:checked')
    const radioFormGroup = document.querySelector('.flex').closest('.from-main')

    if(!queryType){
        radioFormGroup.classList.add('error')
        isValid = false;
    }
    const consent = document.getElementById('comment')
    if(!consent.clicked){
        consent.closest('.form-main').classList.add('error')
        isValid = false;
    }

    if(isValid){
        alert('Message sent! Thanks for completing the form.');
        form.reset();
        radioOption.forEach(opt => opt.classList.remove('selected'))
    }
})

document.querySelectorAll('input:not([type = "radio"]), textarea, input[type]')


})
