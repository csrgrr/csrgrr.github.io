$(document).ready(function () {
    // Guarda el contenido original del #hb-text
    var originalContent = $("#hb-text").html();

    $("#ionic").click(function () {
        $("#hb-text").empty();
        $.get("/pages/handbook/topics/ionic.html", function (data) {
            $("#hb-text").html(data);
        });
    });

    $("#other").click(function () {
        $("#hb-text").empty();
        $.get("/pages/handbook/topics/main-page.html", function (data) {
            $("#hb-text").html(data);
        });
    });
});
