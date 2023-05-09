// Nav menu icons click
const navIconClick = (btnType) => {
  let burgerBtn = document.querySelector(".fa-bars");
  let closeBtn = document.querySelector(".fa-xmark");
  let navBar = document.querySelector(".nav_links");
  let navBarLinks = document.querySelectorAll(".nav_links a");

  if (btnType === "burger") {
    burgerBtn.classList.add("inactive");
    closeBtn.classList.remove("inactive");
    navBar.classList.remove("inactive");
    navBarLinks.forEach((link) => link.classList.remove("inactive"));
  } else {
    burgerBtn.classList.remove("inactive");
    closeBtn.classList.add("inactive");
    navBar.classList.add("inactive");
    navBarLinks.forEach((link) => link.classList.add("inactive"));
  }
};

const closeMenu = () => {
  let burgerBtn = document.querySelector(".fa-bars");
  let closeBtn = document.querySelector(".fa-xmark");
  let navBar = document.querySelector(".nav_links");
  let navBarLinks = document.querySelectorAll(".nav_links a");

  burgerBtn.classList.remove("inactive");
  closeBtn.classList.add("inactive");
  navBar.classList.add("inactive");
  navBarLinks.forEach((link) => link.classList.add("inactive"));
};

// Handle form click
const handleSubmit = () => {
  e.preventDefault();
  debugger;
};
