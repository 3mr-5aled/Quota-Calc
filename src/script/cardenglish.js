if (navigator.userAgent.match(/Mobile/)) {
    document.getElementById('firstCard').style.display = 'none';
    document.getElementById('secondCardh1').innerHTML = 'Welcome to Quota Calc';
    document.getElementById('secondCardh2').innerHTML = `Let's see what is the average use for you for the rest of the month`;
}