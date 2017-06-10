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

        url = "pages/" + start + "/" + end + "/1.html";
        localStorage.setItem("url", url);
        window.location.href = url;
    }
})

$("#return").click(function() {
    window.location.href = 'index.html';
})

function getUrl() {
    start = localStorage.getItem("start");
    end = localStorage.getItem("end");
    url = localStorage.getItem("url", url);
    console.log(url);
}
