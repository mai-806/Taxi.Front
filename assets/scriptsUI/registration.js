function onGetUserRegData() {}

function checkValidatePassvord(password) {
  var passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (passwordRegex.test(password)) {  
    return 1;
  } else {
    $("#inppassreg1").css("border", "red 3px solid");
    $("#inppassreg2").css("border", "red 3px solid");
    return 0;
  }
}

function checkCorrectPassvord(password, confirmPassword) {
  if (password === confirmPassword) {
    return 1;
  } else {
    console.log("Пароль не норм");
    $("#inppassreg1").css("border", "red 3px solid");
    $("#inppassreg2").css("border", "red 3px solid");
    return 0;
  }
}

function validateEmailreg(email) {
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    return 1;
  } else {
    console.log("Поччта не норм");
    $("#inpemailreg").css("border", "red 3px solid");
  }
}

function checkAllReg() {
  var email = $("#inpemailreg").val();
  var password = $("#inppassreg1").val();
  var confirmPassword = $("#inppassreg2").val();

  if (
    validateEmailreg(email) &&
    checkCorrectPassvord(password, confirmPassword) &&
    checkValidatePassvord(password)
  ) {
    $("#inpemailreg").css("border", "green 3px solid");
    $("#inppassreg1").css("border", "green 3px solid");
    $("#inppassreg2").css("border", "green 3px solid");
    makeSendRegResponse2server(
      $("#inpemailreg").val(),
      $("#inppassreg1").val(),
      $("#indriverreg").val()
    );
    const promise = GetUserRegData();
    promise.then(onGetUserRegData);
  } else {
    console.log("Чето не ввели");
  }
}

const sendregbutton = document.querySelector("#regbut");
sendregbutton.addEventListener("click", checkAllReg);
