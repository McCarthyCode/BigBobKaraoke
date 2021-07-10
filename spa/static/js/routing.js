document.addEventListener(
  "DOMContentLoaded",
  () => {
    /**
     * DOM object declarations
     */

    // Tabs
    let tabs = {};
    for (let tab of ["home", "about", "songs", "rates", "contact"]) {
      tabs[tab] = document.querySelector(`#nav li[data-tab="${tab}"]`);
    }

    /**
     * Routing logic
     *
     * Creates an event listener for each tab, which updates the iframe
     * content and the URL.
     */

    const routerCallback = (key) => {
      if (key === "home") {
        history.pushState({}, "BigBob Karaoke", "/");
      } else if (["about", "songs", "rates", "contact"].includes(key)) {
        history.pushState({}, 'BigBob Karaoke', `/${key}`);
      }

      document.getElementById('content').src = `/iframe/${key}`;
    };

    for (let key in tabs) {
      const $tab = tabs[key];
      $tab.addEventListener("click", () => routerCallback(key));
    }
  },
  false
);
