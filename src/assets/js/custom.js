window.$ = window.jQuery = require("jquery");
const $ = window.$;
// OFFCANVAS HEADER
export const dataTrigger = () => {
  var trigger_id = $("[data-trigger]").attr("data-trigger");
  $(trigger_id).toggleClass("show");
  $("body").toggleClass("offcanvas-active");
};
export const buttonClose = () => {
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
};
// STICKY HEADER
document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header?.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header?.classList.add("sticky");
    } else {
      header?.classList?.remove("sticky");
    }
  }
});
// ===== Scroll to Top ====
