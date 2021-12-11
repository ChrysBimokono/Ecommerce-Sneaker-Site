# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Screenshot

![](images/Ecommerce-site-On-MobileDevice.jpeg)
![](images/Ecommerce-On-Pc.jpeg)
Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- DOM JS 

### What I learned

I have Learned so much doing this project. Among them are:
*Designing a better responsive website using JavaScript combined with HTML plus CSS
*The User will be able to view the optimal layout for the site depending on their device's screen
* I learned to design a lightbox gallery Using DOM property of JavaScript.
* The user can then switch the large product image by clicking on the small thumbnail images
* I Learned how to create a shopping cart Using pure JavaScript by traversing the DOM.
* I learned how to add items into the Cart and removing it.
To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of
   <nav id="mySidenav" class="menu-header sidenav" >
                      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <a href="#collection" class="nav-link"> Collection</a>
                        <a href="#Men" class="nav-link"> Men</a>
                        <a href="#Women" class="nav-link"> Women</a>
                        <a href="#About" class="nav-link"> About</a>
                      <a href="#Contact" class="nav-link"> Contact</a>
                    </nav>
</h1>
```
```css
.proud-of-this-css {
 .checkout-cart{
  background-color:white;
  display: none;
  position: absolute;
  top: 4.5rem;
  left: 33%;
  max-width: 17rem;
  width: 100%;
  height: 140px;
  border-radius: 5px;
  aspect-ratio: 2/1;
  box-shadow: 0 10px 32px 2px rgb(0 0 0 / 16%);
  z-index: 1;
  transition: all 0.8s ease-out
}
}
```
```js
const proudOfThisFunc = () => {
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
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

However, I need to focus more on how to use clearer and better codes. I am welle aware that this can be achieved using easier and better code Such as Jquery Library or React.js. Therefore, i hope to build this store using libraries next time.


### Useful resources

- https://www.w3schools.com/jsref/default.asp - This helped me become better at using and manipulating the DOM element. I really liked this pattern and will use it going forward.


## Author

- Website - [Chrys-Bim](https://www.ChrysBim.com)
- Frontend Mentor - [@ChrysBim](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

I really enjoyed this project and i thanks all mentor in frontendMentor slack community.

