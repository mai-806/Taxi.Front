function checkValidatePassvord(password) {
  var passwordRegex = /.+/;
  if (passwordRegex.test(password)) {
    return 1;
    $("#inppass").css("color", "green");
  } else {
    console.log("Пароль не норм");
    $("#inppass").css("color", "red");
    return 0;
  }
}

function validateEmailreg(email) {
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    $("#inpemail").css("color", "green");
    return 1;
  } else {
    console.log("Поччта не норм");
    $("#inpemail").css("color", "red");
    return 0;
  }
}

function checkAll() {
  var email = $("#inpemail").val();
  var isDriver = $("#indriver").val();
  var password = $("#inppass").val();

  if (validateEmailreg(email) && checkValidatePassvord(password)) {
    makeSendAutResponse2server(
      $("#inpemail").val(),
      $("#inppass").val(),
      $("#indriver").val()
    );
  } else {
    console.log("Чето не ввели");
  }
}

const sendbuttonauth = document.querySelector("#authbut");
sendbuttonauth.addEventListener("click", checkAll);

const skipbutton = document.querySelector("#skipbut");
skipbutton.addEventListener("click", SkipScreen);
