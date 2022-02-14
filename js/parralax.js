// Paralax na tle
function parralax() {
  $(window).scroll((event) => {
    $(".main-header").css("background-position", "0% " + (-1) * $(window).scrollTop()/10 + "%");
  });
}
