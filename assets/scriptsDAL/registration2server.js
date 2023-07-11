function makeSendRegResponse2server(email, password, isDriver) {
  var data = {
    email: email,
    password: password,
    isDriver: isDriver,
  };

  $.ajax({
    type: "POST",
    url: "тестовый адрес",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log("Сообщение успешно отправлено на сервер");
      console.log(response);
    },
    error: function (xhr, status, error) {
      console.log("Ошибка при отправке сообщения на сервер");
      console.log(error);
    },
  });
}

function SkipScreen() {
  window.location.href = "https://www.google.com/";
}

function GetUserRegData() {
  const promise = $.ajax({
    url: "тестовый адрес",
    dataType: "json",
    success: function(data) {
      console.log("JSON файл успешно получен:", data);
      // Дальнейшая обработка полученных данных
    },
    error: function(xhr, status, error) {
      console.log("Произошла ошибка при получении JSON файла:", error);
    }
  });
  return promise;
}
