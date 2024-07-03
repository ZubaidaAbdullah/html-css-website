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
  
  function vallogin() {
    var username = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var ogpass = "zubi2003";
    var errorSpan = document.getElementById("error");

    if (username === "Zubi@gmail.com" && pass === ogpass) {
        errorSpan.innerHTML = "Login Successful!";
        // Add styling to the error message
        errorSpan.style.color = "green"; // Example: Change text color to green
        // Redirect to index.html upon successful login
        window.location.href = "index.html";
        return true;
    } else if (username != "Zubi@gmail.com" && pass === ogpass){
        errorSpan.innerHTML = "Please Enter the Correct Email Address.";
        // Add styling to the error message
        errorSpan.style.color = "red"; // Example: Change text color to red
        
    }
    else if (username === "Zubi@gmail.com" && pass != ogpass){
      errorSpan.innerHTML = "Please Enter the Correct Password.";
      errorSpan.style.color = "red"; // Example: Change text color to red
     
  } 
  else {
    errorSpan.innerHTML = "Please Enter the Correct Email Address and Password";
    errorSpan.style.color = "red"; // Example: Change text color to red
  
}
}

