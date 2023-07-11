function onGetUserAuthData() {}

function checkValidatePassvordAuth(password) {
  var passwordRegex = /.+/;
  if (passwordRegex.test(password)) {
    return 1;
  } else {
    console.log("Пароль не норм");
    $("#inppass").css("border", "red 3px solid");
    return 0;
  }
}

function validateEmailAuth(email) {
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    return 1;
  } else {
    console.log("Поччта не норм");
    $("#inpemail").css("border", "red 3px solid");
    return 0;
  }
}

function checkAllAuth() {
  var email = $("#inpemail").val();
  var password = $("#inppass").val();

  if (validateEmailAuth(email) && checkValidatePassvordAuth(password)) {
    $("#inpemail").css("border", "green 3px solid");
    $("#inppass").css("border", "green 3px solid");
    makeSendAutResponse2server(
      $("#inpemail").val(),
      $("#inppass").val(),
      $("#indriver").val()
    );
    const promise = GetUserAuthData();
    promise.then(onGetUserAuthData);
  } else {
    console.log("Чето не ввели");
  }
}

const sendbuttonauth = document.querySelector("#authbut");
sendbuttonauth.addEventListener("click", checkAllAuth);

const skipbutton = document.querySelector("#skipbut");
skipbutton.addEventListener("click", SkipScreen);
