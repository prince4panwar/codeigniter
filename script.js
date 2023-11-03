const menu1 = document.querySelector(".fa");
const nav = document.querySelector(".nav-links");
const menu2 = document.querySelector(".ra");
menu1.addEventListener("click",()=>{
    nav.style.display = "block";
    nav.style.transition = "all 0.6s";
    nav.style.right = "0";
});
menu2.addEventListener("click",()=>{
    nav.style.display = "none";
    nav.style.transition = "1s ease";
    nav.style.right = "-200";
    // console.log("hello");
});
document.getElementById('myClickableBoxJava').addEventListener('click', function() {
    window.location.href = 'java.html'; // Replace with the desired URL
  });
document.getElementById('myClickableBoxPhp').addEventListener('click', function() {
    window.location.href = 'php.html'; // Replace with the desired URL
  });

  document.getElementById('explore').addEventListener('click', function() {
    window.location.href = '#contain'; // Replace with the desired URL
  });
  
  document.getElementById('exploreAfter').addEventListener('click', function() {
    window.location.href = '#containAfter'; // Replace with the desired URL
  });
  
  

  

