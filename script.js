function showTime() {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    session = "AM";

  if (h === 0) h = 12;

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const $time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock-display").innerHTML = $time;

  setTimeout(showTime, 1000);
}

showTime();

//Cursor animation
const $cursor = document.querySelector(".cursor");

let timeout;

//Follow cursor on mousemove

document.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  $cursor.style.top = y + "px";
  $cursor.style.left = x + "px";
  $cursor.style.display = "block";

  //cursor effects on mouse stopped
  function mouseStop() {
    $cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStop, 1000);
});

//cursor effects on mouseout
document.addEventListener("mouseout", () => {
  $cursor.style.display = "none";
});
