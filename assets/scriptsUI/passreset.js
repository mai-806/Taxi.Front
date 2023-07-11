function onGetUserResetData() {}

function validateEmailReset() {
  var email = $("#inpemailpasreset").val();
  var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (emailRegex.test(email)) {
    $("#inpemailpasreset").css("border", "green 3px solid");
    PassReset($("#inpemailpasreset").val());
    const promise = GetUserResetData();
    promise.then(onGetUserResetData);
    console.log("Test code executed!");
  } else {
    console.log("Поччта не норм");
    $("#inpemailpasreset").css("border", "red 3px solid");
    return 0;
  }
}

const sendbuttonpassres = document.querySelector("#authbutpassres");
sendbuttonpassres.addEventListener("click", validateEmailReset);
