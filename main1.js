document.addEventListener("scroll", function () {
    var header = document.getElementById("nav-bar");
  
    // Change background color when scrolling down
    if (window.scrollY > 400) {
      header.style.backgroundColor = "black";
      header.style.zIndex='1000';
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
  
 

  
