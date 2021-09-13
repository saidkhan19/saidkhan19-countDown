let targetDate = new Date(2021, 09, 1, 9, 30).getTime();

console.log(targetDate);

let timer = setInterval(function () {
    let now = Date.now();

    let leftTime = targetDate - now;

    let days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((leftTime % (1000 * 60)) / 1000);


    function check(val) {
        if (String(val).length === 1) return "0" + val;
        else if (leftTime < 0) {
            clearInterval(timer);
            return "00";
        }
        else return String(val);
    }

    days = check(days);
    hours = check(hours);
    minutes = check(minutes);
    seconds = check(seconds);

    function update(element, value) {
        if (element.innerHTML !== value) {
            element.previousElementSibling.classList.remove("action");
            void element.offsetWidth;
            element.previousElementSibling.classList.add("action");
            setTimeout(() => element.innerHTML = value, 300);
        }
    }

    update(document.getElementById("seconds"), seconds);
    update(document.getElementById("minutes"), minutes);
    update(document.getElementById("hours"), hours);
    update(document.getElementById("days"), days);



}, 1000);

