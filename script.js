$(document).ready(function() {
  $(".registrationForm").on("submit", function(event) {
    event.preventDefault();
    
    let email=$("#email").val();
 
    let name=$("#fullName").val();
    
    $("#emailT").append(email);
    
    <!--$("#nameT").append(name);-->
    
     $("#nameT").text(name);
    
     $(".registrationForm")[0].reset()
  });
  
});
