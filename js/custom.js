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


if (localStorage.getItem('userdetails') === null) {  
    var userDetails = {firstName:"Nana", lastName:"Mumei", dob:"2000-06-28",address1:"1 Council Drive", address2:"Promiseland"};
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
      localStorage.setItem('userdetails',JSON.stringify(userDetails));
  document.getElementById("dobID").setAttribute('value',userDetails.dob);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);       
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
} else {
    
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dobID").setAttribute('value',userDetails.dob);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);      
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
}


var userDetailsUpdate = document.getElementById('updatedetails');

userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails() {
    var userDetails={};
    userDetails.firstName=document.getElementById('firstNameID').value;
    userDetails.lastName=document.getElementById('lastNameID').value;
    userDetails.dob=document.getElementById('dobID').value;
    userDetails.address1=document.getElementById('address1ID').value;   
    userDetails.address2=document.getElementById('address2ID').value;
  
    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    event.preventDefault();
}