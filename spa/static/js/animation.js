$(() => {
  const $menu = $("#nav ul");
  $("#dropdownToggle").on("click", () => {
    if ($menu.css("display") === "none") {
      $menu.slideDown(400, () => $menu.css({ display: "flex" }));
    } else {
      $menu.slideUp(400);
    }
  });

  $("#nav li").on("click", () => $menu.slideUp());
});
