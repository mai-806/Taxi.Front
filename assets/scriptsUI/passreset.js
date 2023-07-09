function validateEmailreg() {
  var email = $("#inpemailpasreset").val();
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    $("#inpemailpasreset").css("color", "green");
    PassReset($("#inpemailpasreset").val());
    console.log("Test code executed!");
  } else {
    console.log("Поччта не норм");
    $("#inpemailpasreset").css("color", "red");
    return 0;
  }
}

const sendbuttonpassres = document.querySelector("#authbutpassres");
sendbuttonpassres.addEventListener("click", validateEmailreg);
