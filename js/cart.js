//add to cart function
var addtocart = document.getElementById('addtoCart');
addtocart.addEventListener("click", addTocart);

function addToCart(){
  var total = localStorage.getItem('checkout');
  total++;
  localStorage.setItem('checkout', total);
  document.querySelector('#checkout').innerHTML=total;
}

