let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }
  else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
function openNav() {
  document.getElementById("Sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}





window.onload = fadeOut();

function checkform() {
  if (document.getElementById("text").value == "")
 {
    alert("Please fill out the form.");
  }
  else if (document.getElementById("email").value == "")
  {
     alert("Please fill out the form.");
   }
   else if (document.getElementById("number").value == "")
   {
      alert("Please mention total number of people.");
    }
   else if (document.getElementById("date").value == "")
  {
     alert("Please mention the date.");
   }
   
  else
    alert("Booking Successful!");
}