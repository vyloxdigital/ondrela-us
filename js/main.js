/* Ondrela — ondrela-us.vercel.app */
(function () {
  "use strict";

  /* Section menu on small screens */
  var toggle = document.querySelector(".nav-btn");
  var panel = document.getElementById("nav-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Sticky bar: appears once the opening buttons scroll away, and steps
     aside over the price table so it never covers the figures. */
  var stick = document.querySelector(".stick");
  if (stick && "IntersectionObserver" in window) {
    var passed = false;
    var onRates = false;
    function update() {
      stick.classList.toggle("up", passed && !onRates);
    }
    var leadGets = document.getElementById("lead-gets");
    if (leadGets) {
      new IntersectionObserver(
        function (entries) {
          passed =
            !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          update();
        },
        { threshold: 0 }
      ).observe(leadGets);
    }
    var cost = document.getElementById("cost");
    if (cost) {
      new IntersectionObserver(
        function (entries) {
          onRates = entries[0].isIntersecting;
          update();
        },
        { threshold: 0 }
      ).observe(cost);
    }
  }
})();
