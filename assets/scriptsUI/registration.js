function checkValidatePassvord(password) {
  var passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (passwordRegex.test(password)) {
    return 1;
    $("#inppassreg1").css("color", "green");
  } else {
    $("#inppassreg1").css("color", "red");
    return 0;
  }
}

function checkCorrectPassvord(password, confirmPassword) {
  if (password === confirmPassword) {
    $("#inppassreg1").css("color", "green");
    return 1;
  } else {
    console.log("Пароль не норм");
    $("#inppassreg1").css("color", "red");
    return 0;
  }
}

function validateEmailreg(email) {
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    $("#inpemailreg").css("color", "green");
    return 1;
  } else {
    console.log("Поччта не норм");
    $("#inpemailreg").css("color", "red");
  }
}

function checkAll() {
  var email = $("#inpemailreg").val();
  var isDriver = $("#indriverreg").val();
  var password = $("#inppassreg1").val();
  var confirmPassword = $("#inppassreg2").val();

  if (
    validateEmailreg(email) &&
    checkCorrectPassvord(password, confirmPassword) &&
    checkValidatePassvord(password)
  ) {
    makeSendRegResponse2server(
      $("#inpemailreg").val(),
      $("#inppassreg1").val(),
      $("#indriverreg").val()
    );
  } else {
    console.log("Чето не ввели");
  }
}

const sendregbutton = document.querySelector("#regbut");
sendregbutton.addEventListener("click", checkAll);
