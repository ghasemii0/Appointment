$(document).ready(function()  {
  $("#appointment").submit(function(event) {
    event.preventDefault();
    $("#display").removeClass("hidden");
    $("#appointment").addClass("hidden");
  });
});
