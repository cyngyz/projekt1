let layers = document.querySelectorAll(".layer");
layers.forEach(function (elm) {
  elm.addEventListener("click", function (e) {
    let p = document.elementFromPoint(e.clientX, e.clientY);
    elm.style.animation = "none";
    if (p.classList.contains("one") || p.classList.contains("four")) {
      elm.style.transform = "translateX(0px)";
    }
    if (p.classList.contains("two")) {
      elm.style.transform = "translateX(-250px)";
    }
    if (p.classList.contains("three")) {
      elm.style.transform = "translateX(-500px)";
    }
  });

  elm.addEventListener("dblclick", function (e) {
    let p = document.elementFromPoint(e.clientX, e.clientY);
    elm.style.animation = "";
    elm.style.transform = "";
  });
});
