const extent = document.querySelectorAll(".second-section-images img");
extent.forEach((oneBox) => {
  oneBox.addEventListener("mouseenter", () => {
    oneBox.style.transform = "scale(1.1)";
  });
  oneBox.addEventListener("mouseleave", () => {
    oneBox.style.transform = "scale(1)";
  });
});

document.body.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    document.getElementById("arrow").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "none";
  }
};

scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
