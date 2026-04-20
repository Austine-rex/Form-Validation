let qty = 0;
let cartQty = 0;

function changeImage(num) {
  document.getElementById('mainImage').src = `image-product-${num}.jpg`;
}

function updateQty(val) {
  qty = Math.max(0, qty + val);
  document.getElementById('qty').innerText = qty;
}

function addToCart() {
  if (qty === 0) return;

  cartQty += qty;
  document.getElementById('cartBadge').style.display = 'block';
  document.getElementById('cartBadge').innerText = cartQty;

  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = `
    <div class="cart-item">
      <img src="image-product-1-thumbnail.jpg" alt="thumbnail"/>
      <div>
        Fall Limited Edition Sneakers<br>
        $125.00 x ${cartQty} <strong>$${125 * cartQty}.00</strong>
      </div>
    </div>
    <button onclick="removeCart()">Remove</button>
  `;
}

function removeCart() {
  cartQty = 0;
  document.getElementById('cartBadge').style.display = 'none';
  document.getElementById('cartItems').innerHTML = 'Your cart is empty.';
}

document.getElementById('cartToggle').addEventListener('click', () => {
  const cart = document.getElementById('cartDropdown');
  cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
});

const productImage = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg']

 const arrows = document.querySelector('.arrows');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right')

const carousel = () => {
  let currentImage = productImage[0]
  
  arrows.addEventListener('click', (event)=> {
    
    if(arrowRight.contains(event.target)){
      const currentIndex = productImage.findIndex(cIndex => cIndex === currentImage)

      const next = currentIndex +1;

      
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
        // arrowLeft.style.display = 'none'
            }
          
            

        currentImage = productImage[next]

        arrows.style.backgroundImage = `url('${currentImage}')`;

        arrowRight.style.display ='block'
            }
  })

}
carousel()

const navBar = document.querySelector('nav')
const mobileNavIcons = document.querySelector('.close-hamburger')

const showNavBar = () => {

 mobileNavIcons.addEventListener('click', () => {
   
  mobileNavIcons.classList.toggle('hamIcon')
  navBar.classList.toggle('mobileNav')
 })
}
showNavBar()