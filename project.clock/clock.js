// set hours, minutes and seconds.
function displayTime() {
  var a = new Date();
  var hrs = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var date = a.toLocaleDateString();

  document.getElementById("time").innerHTML =
    hrs + ":" + min + ":" + sec;
    document.getElementById("date").innerHTML = date;
}
// for updating sec ar time intercal 10 MS.
setInterval(displayTime, 10);
