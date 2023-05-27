'use strict';


// PRLOADER

let loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = 'none';
})

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

// mobile menu function
const mobileMenuCloseFunc = function () {
mobileMenu[i].classList.remove('active');
overlay.classList.remove('active');
}

mobileMenuOpenBtn[i].addEventListener('click', function () {
mobileMenu[i].classList.add('active');
overlay.classList.add('active');
});

mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

accordionBtn[i].addEventListener('click', function () {

const clickedBtn = this.nextElementSibling.classList.contains('active');

for (let i = 0; i < accordion.length; i++) {

    if (clickedBtn) break;

    if (accordion[i].classList.contains('active')) {

    accordion[i].classList.remove('active');
    accordionBtn[i].classList.remove('active');

    }

}

this.nextElementSibling.classList.toggle('active');
this.classList.toggle('active');

});

}


// Change Image Repeat
let arr = [' assets/images/products/jacket-2.jpg', 'assets/images/products/jacket-4.jpg', 'assets/images/products/jacket-5.jpg',
'assets/images/products/shirt-2.jpg', 'assets/images/products/3.jpg'];
let i = 0;
function changeImg () {
    var img = document.getElementById('image');
    img.src = arr[i];
    if ( i < arr.length - 1 ) {
        i++
    } else {
        i = 0;
    }
}

let image = document.getElementById('banner');
let images = ['assets/images/banner-1.jpg', 'assets/images/banner-2.jpg', 'assets/images/banner-3.jpg'];

setInterval(function(){
    let random = Math.floor(Math.random() * 3);
    image.src = images[random];
}, 2000);


// add to cart


let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let cartCountOpen = document.getElementById("cart-count-open");
let cartCountTwo = document.getElementById("cartcountTwo");
let closeIcon = document.querySelector('.close');
// mobile menu variables
const mobileMenuOpenBtnTwo = document.querySelectorAll('[data-mobile-menu-open-btn-two]');
const mobileMenuTwo = document.querySelectorAll('[data-mobile-menu-cart]');
const mobileMenuCloseBtnTwo = document.querySelectorAll('[data-mobile-menu-close-btn-two]');
const overlayTwo = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtnTwo.length; i++) {

// mobile menu function
const mobileMenuCloseFunc = function () {
    mobileMenuTwo[i].classList.remove('active');
    overlay.classList.remove('active');
}

mobileMenuOpenBtnTwo[i].addEventListener('click', function () {
    mobileMenuTwo[i].classList.add('active');
    overlay.classList.add('active');
});

mobileMenuCloseBtnTwo[i].addEventListener('click', mobileMenuCloseFunc);
overlay.addEventListener('click', mobileMenuCloseFunc);

}

// mobile menu variables
const mobileMenuOpenBtnfour = document.querySelectorAll('[data-mobile-menu-open-btn-four]');
const overlayfour = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtnfour.length; i++) {

// mobile menu function
const mobileMenuCloseFunc = function () {
    mobileMenuTwo[i].classList.remove('active');
    overlay.classList.remove('active');
}

mobileMenuOpenBtnfour[i].addEventListener('click', function () {
    mobileMenuTwo[i].classList.add('active');
    overlay.classList.add('active');
});

mobileMenuCloseBtnTwo[i].addEventListener('click', mobileMenuCloseFunc);
overlay.addEventListener('click', mobileMenuCloseFunc);

}

// let preview = document.getElementById('preview');

let products = [
    {
        id: 1,
        name: 'jacket',
        image: 'jacket-3.jpg',
        description: 'Mens Winter Leathers Jackets',
        stars:'<ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 4800,
    },
    {
        id: 2,
        name: 'shirt',
        image: 'shirt-1.jpg',
        description: 'Pure Garment Dyed Cotton Shirt',
        stars:'  <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 5800,
    },
    {
        id: 3,
        name: 'jacket',
        image: 'jacket-5.jpg',
        description: 'MEN Yarn Fleece Full-Zip Jacket',
        stars:' <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 8800,
    },
    {
        id: 4,
        name: 'Cap',
        image: '4.jpg',
        description: 'Black Floral Wrap Midi Skirt',
        stars:' </ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 7800,
    },
    {
        id: 5,
        name: 'shoe',
        image: 'shoe-2.jpg',
        description: 'Black Floral Wrap Midi Skirt',
        stars:' <ion-icon name="star"></ion-icon> </ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 78500,
    },
    {
        id: 6,
        name: 'watch',
        image: 'watch-3.jpg',
        description: 'Pocket Watch Leather Pouch',
        stars:' </ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 98500,
    },
    {
        id: 7,
        name: 'jacket',
        image: 'jacket-1.jpg',
        description: 'Mens Winter Leathers Jackets',
        stars:'<ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 4800,
    },
    {
        id: 8,
        name: 'shirt',
        image: 'shirt-2.jpg',
        description: 'Pure Garment Dyed Cotton Shirt',
        stars:'  <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 5800,
    },
    {
        id: 9,
        name: 'jacket',
        image: 'jacket-2.jpg',
        description: 'MEN Yarn Fleece Full-Zip Jacket',
        stars:' <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 8800,
    },
    {
        id: 10,
        name: 'sports',
        image: 'sports-3.jpg',
        description: 'Black Floral Wrap Midi Skirt',
        stars:' <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 7800,
    },
    {
        id: 11,
        name: 'shoe',
        image: 'shoe-1.jpg',
        description: 'Black Floral Wrap Midi Skirt',
        stars:' </ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 78500,
    },
    {
        id: 12,
        name: 'watch',
        image: 'watch-2.jpg',
        description: 'Pocket Watch Leather Pouch',
        stars:' </ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star-outline"></ion-icon>' ,
        price: 98500,
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        let showcaseBanner = document.createElement('div');
        let showcaseContent = document.createElement('div');
        showcaseBanner.classList.add('showcase-banner');
        showcaseContent.classList.add('showcase-content');
        showcaseBanner.innerHTML = `
        <img  src="image/${value.image}"  alt="Mens Winter Leathers Jackets"
        width="300" class="product-img default">

        <div class="showcase-actions">

            <button class="btn-action">
                <ion-icon name="heart-outline"></ion-icon>
            </button>

            <a href="#preview" class="btn-action" onclick="preview.src = image/${value.image}">
                <ion-icon name="eye-outline"></ion-icon>
            </a>

            <button class="btn-action">
                <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action" onclick="addToCard(${key})">
                <ion-icon name="bag-add-outline"></ion-icon>
            </button>

        </div>
        `
        showcaseContent.innerHTML = `
            <a href="#" class="showcase-category">${value.name}</a>
            
            <a href="#">
            <h3 class="showcase-title">${value.description}</h3>
            </a>

            <div class="stars">${value.stars}</div>

            <div class="price">${value.price.toLocaleString()} </div>`;
        list.appendChild(newDiv);
        newDiv.appendChild(showcaseBanner);
        newDiv.appendChild(showcaseContent);
    });
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        alert('The product has been added to the cart');
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <button>BUY</button>`;
                listCard.appendChild(newDiv);
        } 
    });  
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    alert('The product has been removed from the cart');
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
// sendEmail
function sendEmail() {
    Email.send({
    SecureToken : "658a7e0b-2d36-4429-880b-0d6cab405d6e",
    To : 'ammartop065@gmail.com',
    From : "ammartop065@gmail.com",
    Subject : "New Contact Form Enquiry",
    Body : "name: " + document.getElementById("name").value
    + "<br>  email: " + document.getElementById("email").value
    + "<br>  phone: " + document.getElementById("phone").value
    + "<br>  message: " + document.getElementById("message").value,
    }).then(
    message => alert("The message was sent successfully")
    );
    }
