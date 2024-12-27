
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

//add to cart function
var addtocart = document.getElementById('addtoCart');
addtocart.addEventListener("click", addtocart);

function addtoCart(){
  var total = localStorage.getItem('checkout');
  total++;
  localStorage.setItem('checkout', total);
  document.querySelector('#checkout').innerHTML=total;
}