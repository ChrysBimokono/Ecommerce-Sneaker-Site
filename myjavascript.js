function openNav(){
    document.getElementById("mySidenav").style.width= "250px";
    
  }
  function closeNav(){
    document.getElementById("mySidenav").style.width="0";
  }

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
var thumbnails= document.getElementsByClassName("thumbnails-pic");
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
//shopping cart pop out
var cartButton= document.getElementsByClassName('nav-cart')[0]
cartButton.addEventListener('click',function(){
    var checkoutCart= document.getElementsByClassName('checkout-cart')[0];
    console.log(checkoutCart.classList.toggle('show-cart'))
   
})
//remove cart items

//Now working on our cart
//
var minus_btns= document.getElementsByClassName('minus-cart');
var plus_btns= document.getElementsByClassName('plus-cart');
var qty_Inputs= document.getElementsByClassName('input-count')
console.log(qty_Inputs)
console.log(minus_btns)

for(var i=0;i<minus_btns.length;i++){
    var buttonMinus= minus_btns[i];
    var count=0
    buttonMinus.addEventListener('click',function(){
        buttonMinus.nextElementSibling.value = (buttonMinus.nextElementSibling.value==1) ? 1: buttonMinus.nextElementSibling.value -1;   
        addCartvalue=buttonPlus.previousElementSibling.value*125.00
        updateCartTotal()
    })    
}

for(var i=0;i<plus_btns.length;i++){
    var buttonPlus= plus_btns[i];
    var count=0
    buttonPlus.addEventListener('click',function(){
         buttonPlus.previousElementSibling.value++;
         addCartvalue=buttonPlus.previousElementSibling.value
         console.log(addCartvalue)
        updateCartTotal()
         
    })
    
}
//for quantity change
for(var i=0;i<qty_Inputs.length;i++){
    var input= qty_Inputs[i];
    input.addEventListener('change',function(event){
        var input= event.target
        updateCartTotal()
    })
}
//adding to cart
var addToCartbuttons=document.getElementsByClassName('add-cart')
for(var i=0;i<addToCartbuttons.length;i++){
    var button= addToCartbuttons[i]
    button.addEventListener('click',function(event){
        var button=event.target
        console.log(button)
        var shopItem=button.parentElement.parentElement.parentElement
        console.log(shopItem)
        var title= shopItem.getElementsByClassName('product-title')[0].innerText
        var priceItem= shopItem.getElementsByClassName('cart-price')[0].innerText
        var imageSrc= shopItem.getElementsByClassName('img-product-1')[0].src
        var emptyText=document.getElementsByClassName('empty-cart')[0]
        var removebutton= document.getElementsByClassName('remove-btn')[0]
        console.log(removebutton.classList.remove('delete-active'))
        console.log(emptyText.classList.add('active'))    
        console.log(title,priceItem,imageSrc)
        addItemToCart(title,priceItem,imageSrc)
    })
}
function addItemToCart(title,price, imageSrc){
    var cartRow= document.createElement('div')
    cartRow.innerText= title
   
    var cartItems= document.getElementsByClassName('checkout-cart')[0]
    cartItems.append(cartRow)
    var cartRowContents=`
    <div style="display:flex">
    <span class="thumbnails-pic" onclick="currentSlide(1)"><img src="${imageSrc}" loading="lazy" alt="sneaker" width="60px"></span>
    <h4 class="product-title" style="font-size:12px">${title} ${price}</h4> 
    <h1 class="cart-price">${price}</h1>
    </div>
     `
cartRow.innerHTML=cartRowContents
cartItems.append(cartRow)
}




function updateCartTotal(){
  var cartItembody= document.getElementsByClassName('product-item-body')[0];
  var cartPrices= cartItembody.getElementsByClassName('product-price');
  for(var i=0;i<cartPrices.length;i++){
      var cartPrice= cartPrices[i];
      var priceElement= cartPrice.getElementsByClassName('cart-price')[0];
    //   var quantityElement= cartPrice.getElementsByClassName('input-count')[0]
     
       console.log(priceElement)
      var price= parseFloat(priceElement.innerText.replace('$',''))
      console.log(price);

  }
  
}
