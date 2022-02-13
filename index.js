$("button").click(function(){
  var firstName = $(".Fname").val();
  var lastName = $(".Lname").val();
  var email = $(".eml").val();
  var password = $(".pass").val();

  if(firstName === ""){
    $(".empty-firstName").css("display","block");
  }
  if(lastName === ""){
    $(".empty-lastName").css("display","block");
  }
  if(password === ""){
    $(".empty-password").css("display","block");
  }
  var myRegex =  /\S+@\S+\.\S+/;
  if(!myRegex.test(email)){
    $(".wrong-email").css("display","block");
  }
});
