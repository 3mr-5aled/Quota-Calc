    // Today function (Still Not working)
    // var today = new Date();
    // let myDate1 = today.toLocaleDateString();
    // myDate1 = myDate1.split("/");
    // var date1 = new Date(myDate1[1], myDate1[0] - 1, myDate1[2]);
    // console.log(date1.getTime());
    // let date1 = new Date("08/16/2021");
    // let date2 = new Date("09/03/2021");
    var btnGet = document.querySelector("button");
    var result = document.querySelector("h3");
    
    document.getElementById("btc2").style.display = "none";

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
        document.querySelector("form").style.display = "none";
        document.querySelector("#btc").style.display ="none";
        document.querySelector("h4").style.display = "block";
        document.querySelector("h3").style.display = "block";
        document.getElementById("btc2").style.display = "block";

        // NAN Solution

        // 🐞bug : it runs even if all required data is entered

        // if (isNaN(num)) {
        //   document.write("<div><h1>❗❗ Make sure you have entered all required data ❗❗</h1><button onClick=window.location.reload()>Back To calc</button></div>")
        //   document.querySelector("body").style = "background:linear-gradient(180deg,rgb(50,1,65),rgb(184,0,190,1));color:white;justify-content:center;display:flex;text-align:center;align-items:center;flex-wrap:wrap;";
        //   document.querySelector("button").style= "margin:10px;font-size:24px;color:white;background:transparent;border:5px solid rgb(204, 0, 204);border-radius: 5px;";
        //   document.querySelector("button").onmouseover = function() {
        //             this.style= "background-color: rgb(50,1,65);border: 5px solid rgb(50,1,65);margin:10px;font-size:24px;color:white;border-radius: 5px;";
        //         }
        // document.querySelector("button").onmouseout = function() {
        //     this.style= "margin:10px;font-size:24px;color:white;background:transparent;border:5px solid rgb(204, 0, 204);border-radius: 5px;";
        // }
        // }
    });
