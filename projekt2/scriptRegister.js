var pwd = document.getElementById("password");
var pwdRetype = document.getElementById("passwordRetype");

pwd.onkeyup = function () {
  if (pwd.value == pwdRetype.value) {
    pwd.style.outline = "2px solid green";
    pwdRetype.style.outline = "2px solid green";
  } else {
    pwd.style.outline = "2px solid red";
    pwdRetype.style.outline = "2px solid red";
  }
};

pwdRetype.onkeyup = function () {
  if (pwd.value == pwdRetype.value) {
    pwd.style.outline = "2px solid green";
    pwdRetype.style.outline = "2px solid green";
  } else {
    pwd.style.outline = "2px solid red";
    pwdRetype.style.outline = "2px solid red";
  }
};
