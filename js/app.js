// .menu-links and .hamburger-icon class .open class ekledik.
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  //   console.log("MENU", menu);
  //   console.log("ICON", icon);
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
