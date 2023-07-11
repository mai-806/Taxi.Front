function checkValidatedriveForm(firstPoint, secondPoint) {
  var validReg = /.+/;
  if (firstPoint.test(validReg) && secondPoint.test(validReg)) {
    startdriveserv($("#first").val(), $("#second").val());
  } else {
    console.log("Корды не норм");
    return 0;
  }
}

const startdrivebutt = document.querySelector("#startdrivebutt");
startdrivebutt.addEventListener(
  "click",
  checkValidatedriveForm($("#first").val(), $("#second").val())
);
