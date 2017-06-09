var start, end, url;

// index button
$("#go").click(function() {
    start = document.getElementById("start").value;
    localStorage.setItem("start", start);
    end = document.getElementById("end").value;
    localStorage.setItem("end", end);
    if (start === end) {
        window.alert("啊不是同個地方嗎？選屁呀！");
    } else {
        window.location.href = 'navigate.html';
        url = "img/plan/" + start + "/" + end + "/";
        localStorage.setItem("url", url);
    }
})

function getUrl() {
    start = localStorage.getItem("start");
    end = localStorage.getItem("end");
    url = localStorage.getItem("url", url);
    console.log(url);
}

$(".next").click(function() {
    $("#plan-img").attr("data", url + "hall2.svg");
})
