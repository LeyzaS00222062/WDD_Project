//checkout 
var checkout = document.getElementById('buy-now');

if (localStorage.getItem('checkout') == null) {  
  localStorage.setItem('checkout', 0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

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
    alert("Payment Approved! Thank you for your order!")
    var element = document.getElementById("payment-failure");
    element.style.display = 'none';
    var element = document.getElementById("payment-success");
    element.style.display = 'block';
      
    var total=0;
    localStorage.setItem('checkout',total); 

  } else {
        alert("Payment Failed, Try again!");
        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
        var element = document.getElementById("payment-failure"); 

  }
  return false;  
})