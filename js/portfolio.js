(function () {
  "use strict";

  var $buttonPortfolio = document.querySelector(".btn.btn-claro");
  var $backgroundPortfolio = document.querySelector(".portfolio");
  var $pPortfolio = document.querySelector(".portfolio div p");
  var $subtituloPortfolio = document.querySelector(
    ".subtitulo.subtitulo-claro"
  );

  $buttonPortfolio.addEventListener("mouseover", function () {
    $backgroundPortfolio.classList.toggle("light");
    $pPortfolio.classList.toggle("black");
    $subtituloPortfolio.classList.add("black");
    document.styleSheets[3].cssRules[14].style.background = "black";
  });

  $buttonPortfolio.addEventListener("mouseout", function () {
    $backgroundPortfolio.classList.toggle("light");
    $pPortfolio.classList.toggle("black");
    $subtituloPortfolio.classList.remove("black");
    document.styleSheets[3].cssRules[14].style.background = "#caa757";
  });
})();
