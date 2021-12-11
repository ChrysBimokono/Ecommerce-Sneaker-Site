function openNav(){
    document.getElementById("mySidenav").style.width= "250px";
    
  }
  function closeNav(){
    document.getElementById("mySidenav").style.width="0";
  }
//Function to implement oour slideshow gallery
//Slide Gallery Next and Previous Button
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
showSlides(slideIndex+=n);
}

function currentSlide(n){
showSlides(slideIndex =n);
}

function showSlides(n){
var slides= document.getElementsByClassName("mySlides");
console.log(slides);
var thumbnails= document.getElementsByClassName("demo");
console.log(thumbnails);
if(n>slides.length){
  slideIndex=1
}
if(n<1){
  slideIndex= slides.length
}
for(var i=0; i<slides.length;i++){
  slides[i].style.display="none";
}
for(i=0; i<thumbnails.length;i++){
  thumbnails[i].className= thumbnails[i].className.replace('active','');
}
slides[slideIndex-1].style.display= "block";
thumbnails[slideIndex-1].className+= 'active';
}
//Function and Event Listener for our shopping cart pop out
var cartButton= document.getElementsByClassName('nav-cart')[0]
cartButton.addEventListener('click',function(){
    var checkoutCart= document.getElementsByClassName('checkout-cart')[0];
    console.log(checkoutCart.classList.toggle('show-cart'))
   
})


//Now working on our cart
//
var minus_btns= document.getElementsByClassName('minus-cart');
var plus_btns= document.getElementsByClassName('plus-cart');
var qty_Inputs= document.getElementsByClassName('input-count')
console.log(qty_Inputs)
console.log(minus_btns)

//Function to decrease the number of items and updating the total amount
for(var i=0;i<minus_btns.length;i++){
    var buttonMinus= minus_btns[i];
    var count=0
    buttonMinus.addEventListener('click',buttonMinusadd)}

function buttonMinusadd(){
    buttonMinus.nextElementSibling.value = (buttonMinus.nextElementSibling.value==0) ? 1: buttonMinus.nextElementSibling.value -1;   
    numberOfitem=buttonPlus.previousElementSibling.value
    console.log(numberOfitem)
    var gettingPrice=buttonPlus.parentElement.parentElement
    var wegotthePrice= gettingPrice.childNodes[1].childNodes[1].childNodes[1].innerText
    var priceOfitem=parseFloat(wegotthePrice.replace('$',''))
    console.log(priceOfitem)
    var total= numberOfitem*priceOfitem
    var numberItemSelected= document.getElementsByClassName('number-selected ')[0].innerText= numberOfitem
    var itemPrices= document.getElementsByClassName('itemPrice')[0].innerText= '$'+priceOfitem+'x'
    var cartTotalPrice= document.getElementsByClassName('cart-total-price')[0].innerText= '$'+total
    console.log(itemPrices)
    console.log(numberItemSelected)
    console.log(cartTotalPrice)
    console.log(total)
  
}
//Function to increase the number of itmes and updating the total amount
for(var i=0;i<plus_btns.length;i++){
    var buttonPlus= plus_btns[i];
    var count=0
    buttonPlus.addEventListener('click', buttonPlusadd)}

function buttonPlusadd(){
    buttonPlus.previousElementSibling.value++;
    numberOfitem=buttonPlus.previousElementSibling.value
    console.log(numberOfitem)
    var gettingPrice=buttonPlus.parentElement.parentElement
    console.log(gettingPrice)
    var wegotthePrice= gettingPrice.childNodes[1].childNodes[1].childNodes[1].innerText
    console.log(wegotthePrice)
    var priceOfitem=parseFloat(wegotthePrice.replace('$',''))
    console.log(priceOfitem)
    var total= numberOfitem*priceOfitem
    var numberItemSelected= document.getElementsByClassName('number-selected ')[0].innerText= numberOfitem
    var itemPrices= document.getElementsByClassName('itemPrice')[0].innerText= '$'+priceOfitem+'x'
    var cartTotalPrice= document.getElementsByClassName('cart-total-price')[0].innerText= '$'+total
    var cartCount= document.getElementsByClassName('cart-count')[0].innerText= numberOfitem
    console.log(itemPrices)
    console.log(numberItemSelected)
    console.log(cartTotalPrice)
    console.log(cartCount)
    
}

// Function and Event Listener to add to cart
var addToCartbuttons=document.getElementsByClassName('add-cart')
for(var i=0;i<addToCartbuttons.length;i++){
    var button= addToCartbuttons[i]
    var checkItem= document.getElementsByClassName('input-count')[0]
    console.log(checkItem.value)
    
    button.addEventListener('click',function(event){
        var button=event.target
        console.log(button)
        //var shopItem=button.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].nextElementSibling.childNodes[1]
       // console.log(shopItem)
        var emptyText=document.getElementsByClassName('empty-cart')[0]
        var cartBody= document.getElementsByClassName('cart-body')[0]
        console.log(cartBody)
        var removebutton= document.getElementsByClassName('remove-btn')[0]
        var cartCounting= document.getElementsByClassName('cart-count')[0]
        console.log(cartCounting.classList.remove('delete-active'))
        console.log(cartBody.classList.remove('delete-active'))
         console.log(removebutton.classList.remove('delete-active'))
         console.log(emptyText.classList.add('nonactive'))    
            
    })
  
  function resetting(){
    window.location.reload(true);
}
}


//Function and Event Listener to remove item in cart
var removebutton= document.getElementsByClassName('remove-btn')[0];
console.log(removebutton)
removebutton.addEventListener('click',function(event){
    console.log('clicked')
   var button=event.target
   var cart= document.getElementsByClassName('cart-body')[0];
   var emptyText=document.getElementsByClassName('empty-cart')[0]
   console.log(button)
   console.log(cart.classList.add('nonactive'))
   console.log(emptyText.classList.remove('nonactive'))
})


