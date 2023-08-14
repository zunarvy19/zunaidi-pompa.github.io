const navbar = document.getElementById("navbar");
const menuItems = document.querySelectorAll("li");
const navbarToggle = document.getElementById("check");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbarToggle.checked = false;
  });
});
