(function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  var copyButton = document.querySelector("[data-copy-bibtex]");
  var bibtex = document.querySelector("#bibtex code");

  if (!copyButton || !bibtex) return;

  copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(bibtex.textContent).then(function () {
      var label = copyButton.querySelector("span");
      if (!label) return;
      label.textContent = "Copied";
      window.setTimeout(function () {
        label.textContent = "Copy BibTeX";
      }, 1600);
    });
  });
})();
