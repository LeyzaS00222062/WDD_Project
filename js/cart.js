//add to cart function
var addtocart = document.getElementById('addtocart');
addtocart.addEventListener("click", addTocart);

function addToCart(){
  var total = localStorage.getItem('checkout') || 0 ;
  total++;
  localStorage.setItem('checkout', total);
  document.querySelector('#checkout').innerHTML=total;
}

