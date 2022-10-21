var btnGet = document.getElementById("btc");
var result = document.querySelector("h3");

document.getElementById("bth").style.display = "none";

btnGet.addEventListener("click", () => {
  var myDate1 = document.getElementById("startDate").value;
  myDate1 = myDate1.split("-");
  var date1 = new Date(myDate1[0], myDate1[1] - 1, myDate1[2]);
  console.log(date1.getTime());

  var myDate2 = document.getElementById("endDate").value;
  myDate2 = myDate2.split("-");
  var date2 = new Date(myDate2[0], myDate2[1] - 1, myDate2[2]);
  console.log(date2.getTime());

  var diff = date2.getTime() - date1.getTime();

  var msinday = 1000 * 60 * 60 * 24;

  var difference = diff / msinday;

  var GB = parseInt(document.getElementById("GigaB").value);

  // the GigaBytes / the distance between current date and the ending one

  var theAverage = GB / difference;
  average = theAverage.toFixed(2);
  var num = document.getElementById("num");
  num.innerHTML = average;

  // organizing displays
  document.querySelector(".right").style.display = "none";
  document.getElementById("bth").style.display = "block";
  // document.getElementById("btc").style.display = "none";
  // document.querySelector(".left").style.order = "1";

  // NAN Solution

  // 🐞bug : it runs even if all required data is entered

  if (isNaN(average)) {
    document.write(
      "<div><h1>❗❗ Make sure you have entered all required data correctly ❗❗</h1></br><h1>❗❗ تأكد من انك ادخلت البيانات المطلوبة ❗❗</h1><button onClick=window.location.reload()>Back To calc ( العودة للحاسبة ) </button></div>"
    );

    document.querySelector("body").style =
      "background: linear-gradient(rgb(50, 1, 65), rgb(184, 0, 190));color: white;place-content: center;display: flex;text-align: center;justify-content: center;align-items: center;";
    document.querySelector("button").style =
      "margin:10px;font-size:24px;color:white;background:transparent;border:5px solid rgb(204, 0, 204);border-radius: 5px;";
    document.querySelector("button").onmouseover = function () {
      this.style =
        "background-color: rgb(50,1,65);border: 5px solid rgb(50,1,65);margin:10px;font-size:24px;color:white;border-radius: 5px;";
    };
    document.querySelector("button").onmouseout = function () {
      this.style =
        "margin:10px;font-size:24px;color:white;background:transparent;border:5px solid rgb(204, 0, 204);border-radius: 5px;";
    };
  }
});

// loader func

// window.addEventListener("load", function fadeOutEffect() {
//     var fadeTarget = document.querySelector(".loader-wrapper");
//     var fadeEffect = setInterval(function () {
//       if (!fadeTarget.style.opacity) {
//         fadeTarget.style.opacity = 1;
//       }
//       if (fadeTarget.style.opacity > 0) {
//         fadeTarget.style.opacity -= 0.5;
//       } else {
//         clearInterval(fadeEffect);
//       }
//     }, 300);
//     setInterval(function () {
//       loader.style.display = "none";
//     }, 1500);
//   });

// make enter button calculate

var input = document.getElementById("GigaB");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btc").click();
  }
})