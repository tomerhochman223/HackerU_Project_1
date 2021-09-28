let countDownEnd = false;

setInterval(() => {
    let targetTime = 1633445795402;
    let now = new Date().getTime(2022, 3, 1, 12-00-00);
    let timeleft = targetTime - now;

    if (timeleft < 0) {
        countDownEnd = true;
    }

    let day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = day;
    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
}, 1000);