function myFunction1() {
  var text = document.getElementById("text").value;
  document.getElementById("preview").innerHTML = text;
}

function myFunction2() {
  var color = document.getElementById("text-color").value;
  document.getElementById("preview").style.color = color;
  document.getElementById("value1").innerText = color;
}

function myFunction3() {
  document.getElementById("preview").style.fontFamily = "arial";
  document.getElementById("value2").innerText = "'arial', sans-serif";
}

function myFunction4() {
  document.getElementById("preview").style.fontFamily = "calibri";
  document.getElementById("value2").innerText = "'calibri', sans-serif";
}
