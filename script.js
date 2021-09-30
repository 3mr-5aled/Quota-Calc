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

        // var nan = document.querySelector("h3");
        // if (isNaN(num)) {
        //   num.innerHTML = "Go Back and enter the dates and the numbers";
        //   num.style.fontSize = "xx-large";
        // }
    });