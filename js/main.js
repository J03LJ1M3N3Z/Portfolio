document.addEventListener("DOMContentLoaded", function () {
  const lightModeButton = document.querySelector("button.mode:nth-child(1)");
  const darkModeButton = document.querySelector("button.mode:nth-child(2)");
  const body = document.body;

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark-theme");
      lightModeButton.classList.remove("btnActive");
      darkModeButton.classList.add("btnActive");
    } else {
      body.classList.remove("dark-theme");
      lightModeButton.classList.add("btnActive");
      darkModeButton.classList.remove("btnActive");
    }
  }

  // Detectar la preferencia del usuario
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(userPrefersDark ? "dark" : "light");

  lightModeButton.addEventListener("click", function () {
    applyTheme("light");
  });

  darkModeButton.addEventListener("click", function () {
    applyTheme("dark");
  });
});

//Sliders
$(document).ready(function () {
  $(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      900: {
        items: 3,
      },

      1200: {
        items: 3,
      },
    },
  });

});


$(function () {
    $(".group-projects a").click(function () {
      var tabId = $(this).attr("data-tab");

      $(".group-projects a").removeClass("active");
      $(".Tabcondent").removeClass("active");

      $(this).addClass("active");
      $("#" + tabId).addClass("active");
    });
  });
