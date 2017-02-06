var email = $("#email");
email.keyup(function(){
  if (email.checkEmail()) {
    $("input#email").css("border-color", "green")
  } else {
    $("input#email").css("border-color", "red")
  }
})
