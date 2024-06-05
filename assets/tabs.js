document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs-container .tab");

  // Function to deactivate all tabs
  function deactivateAllTabs() {
    tabs.forEach((otherTab) => {
      otherTab
        .querySelector(".tab-link")
        .setAttribute("aria-selected", "false");
      otherTab.querySelector(".tab-panel").setAttribute("hidden", true);
    });
  }

  // Function to activate a tab
  function activateTab(tab) {
    const tabLink = tab.querySelector(".tab-link");
    const tabPanel = tab.querySelector(".tab-panel");
    tabLink.setAttribute("aria-selected", "true");
    tabPanel.removeAttribute("hidden");
  }

  // Set up event listeners
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

  // Activate the first tab by default
  if (tabs.length > 0) {
    activateTab(tabs[0]);
  }
});
