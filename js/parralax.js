// Paralax na tle
function parralax() {
  $(window).scroll((event) => {
    $(".main-header").css("background-position", "0% " + $(window).scrollTop()/3 + "px");
  });
}
