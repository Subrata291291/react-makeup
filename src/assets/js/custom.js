document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header_area");
      if (window.scrollY > 270) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  });
  