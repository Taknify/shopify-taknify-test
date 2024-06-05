document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs-container .tab");

  function deactivateAllTabs() {
    tabs.forEach((otherTab) => {
      const iconPlus = otherTab.querySelector(".plus-icon");
      const iconMinus = otherTab.querySelector(".minus-icon");
      otherTab
        .querySelector(".tab-link")
        .setAttribute("aria-selected", "false");
      otherTab.querySelector(".tab-panel").setAttribute("hidden", true);
      iconPlus.style.display = "inline";
      iconMinus.style.display = "none";
    });
  }

  function activateTab(tab) {
    const tabLink = tab.querySelector(".tab-link");
    const tabPanel = tab.querySelector(".tab-panel");
    const iconPlus = tab.querySelector(".plus-icon");
    const iconMinus = tab.querySelector(".minus-icon");
    tabLink.setAttribute("aria-selected", "true");
    tabPanel.removeAttribute("hidden");
    iconPlus.style.display = "none";
    iconMinus.style.display = "inline";
  }

  tabs.forEach((tab) => {
    const tabLink = tab.querySelector(".tab-link");
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (tabLink.getAttribute("aria-selected") !== "true") {
        deactivateAllTabs();
        activateTab(tab);
      }
    });
  });

  if (tabs.length > 0) {
    deactivateAllTabs();
    activateTab(tabs[0]);
  }
});
