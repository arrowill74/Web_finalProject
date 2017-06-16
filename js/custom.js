var start, end, url;

$("#start").change(function() {
    $("#end").removeAttr('disabled');
    var filter = $(this).val();
    $('#end option').each(function() {
        if ($(this).val() === filter || $(this).val() === 'unchecked') {
            $(this).hide();
        } else {
            $(this).show();
        }
    })
})

// index button
$("#go").click(function() {
    start = document.getElementById("start").value;
    localStorage.setItem("start", start);
    end = document.getElementById("end").value;
    localStorage.setItem("end", end);
    url = "pages/" + start + "/" + end + "/1.html";
    localStorage.setItem("url", url);
    window.location.href = url;
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
