function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM D, YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let shanghaiElement = document.querySelector("#shanghai");

  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM D, YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
