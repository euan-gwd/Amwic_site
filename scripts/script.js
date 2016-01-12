$("#intro").show();

$("#aboutbtn").click(function () {
    $("#intro").fadeOut("fast");
    $("#services").fadeOut("fast");
    $("#about").slideDown("slow");
});

$("#servicesbtn").click(function () {
    $("#intro").fadeOut("fast");
    $("#about").fadeOut("fast");
    $("#services").slideDown("slow");
});

$("#abtrttbtn,#srvrttbtn").click(function () {
    $("#about").slideUp();
    $("#services").slideUp();
    $("#intro").fadeIn("fast");
});
