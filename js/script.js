document.addEventListener("click", documentClick);

function documentClick(e) {
  const currentItem = e.target;
  if (currentItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}
