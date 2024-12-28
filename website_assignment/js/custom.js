
// collapsible function
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } 
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
    });
}

//checkout 
var checkout = document.getElementById('buy-now');

if (localStorage.getItem('checkout') == null) {  
  localStorage.setItem('checkout', 0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

//add to cart function
var addtocart = document.getElementById('addtoCart');
addtocart.addEventListener("click", addtocart);

function addtoCart(){
  var total = localStorage.getItem('checkout');
  total++;
  localStorage.setItem('checkout', total);
  document.querySelector('#checkout').innerHTML=total;
}

//payment
var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

//deliver details function
checkout.addEventListener("click", () => {
  event.preventDefault();
  var cardnumber=document.getElementById('cardNumber').value;
  var cardcvv=document.getElementById('cardCvv').value;

  if (cardnumber=="0000 1111 2222 9999" && cardcvv=="910") {
      alert("payment success");
      var element = document.getElementById("payment-failure");
      element.style.display = 'none';
      var element = document.getElementById("payment-success");
      element.style.display = 'block';
      var total=0;
      localStorage.setItem('checkout',total); 

  } else {
      alert("payment failure");
      var element = document.getElementById("payment-failure");
      element.style.display = 'block';
      var element = document.getElementById("payment-success");
      element.style.display = 'none';
      var element = document.getElementById("payment-failure");  

  }
  return false;  

})