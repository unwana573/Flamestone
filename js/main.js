// Wait for the page to fully load
window.addEventListener('load', function() {
    // Simulate a 2-second delay for demonstration purposes
    setTimeout(function() {
      // Hide the preloader and show the content
      document.querySelector('.preloader').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
  });
   
function openNav() {
  document.getElementById("myNav")
  .style.height="100%";
}

function closeNav() {
  document.getElementById("myNav")
  .style.height = "0%";

}