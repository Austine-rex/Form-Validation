document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('nav')
    const mobileNavIcons = document.querySelector('.close-hamburger')
    
    // hamburger and close 
    // const showNavBar = () => {
    //  mobileNavIcons.classList.toggle()
    // }
    // showNavBar()

    //show nav bar
    const showNavBar = () => {
    mobileNavIcons.addEventListener('click', () => {
        mobileNavIcons.classList.toggle('hamIcon')
        navBar.classList.toggle('mobileNav')
    })
    }
    showNavBar()


    //operators part
    const productAmount = () => {
    const minusBtn = document.querySelector('.minus')
    const plusBtn = document.querySelector('.plus')
    const quantityInput = document.querySelector('.zero')
    quantityIcon = document.querySelector('.operators')

    quantityIcon.addEventListener('click', (event) => {
        if (minusBtn.contains(event.target)){
            let quantity = parseInt(quantityInput.textContent);

            //subtraction
            if(quantity > 1){
                quantity--;
                quantityInput.textContent = quantity
            }            
        }
        if(plusBtn.contains(event.target)){
            let quantity = parseInt(quantityInput.textContent);

            //addition
            quantity++;
            quantityInput.textContent = quantity
        }
    })
    }
    productAmount()

    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('arrow-right')
    const arrows = document.querySelector('.arrows')

     const productImage = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];

     const carousel = () => {
      let currentImage = productImage[0]

        arrows.addEventListener('click', (event) => {
        if (arrowRight.contains(event.target)) {
                const currentIndex = productImage.findIndex(cIndex => cIndex === currentImage )  

                const next = currentIndex + 1;

        if (next === (productImage.length - 1)) {
            arrowRight.style.display = 'none' 
                }

            currentImage = productImage[next]
                
            arrows.style.backgroundImage = `url('${currentImage}')`;
                
        }
        if (arrowLeft.contains(event.target)) {
            const  currentIndex = productImage.findIndex(cIndex => cIndex === currentImage)

            const next = currentIndex - 1;

            

            if (next === (productImage - 1)) {
                    arrowLeft.style.display = 'none'
                }

                currentImage = productImage[next]

                arrows.style.backgroundImage = `url('${currentImage}')`;

                arrowRight.style.display ='block'
            }
        })
    }
     carousel()

     

     
})