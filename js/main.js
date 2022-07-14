const dropdownLink = Array.from(document.getElementsByClassName("dropdown"));
const closeBtn = document.getElementById("close");
const sideNav = document.querySelector(".sideNav");
const sideNavBtn = document.querySelector(".sideNav-btn");

let arrowIcon = "";

dropdownLink.forEach((link) =>
  link.addEventListener("click", function (e) {
    arrowIcon = e.target.lastElementChild;
    let listItems = e.target.nextElementSibling;
    if (listItems != null) {
      toggleList(listItems, arrowIcon);
    }
  })
);

function toggleList(listItems, arrowIcon) {
  if (listItems.classList.contains("d-none")) {
    listItems.classList.remove("d-none");
    arrowIcon.src = "images/icon-arrow-up.svg";
  } else {
    listItems.classList.add("d-none");
    arrowIcon.src = "images/icon-arrow-down.svg";
  }
}

sideNavBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

let positionRight = 0;

function openMenu() {
  sideNav.style.right = positionRight;
}

function closeMenu() {
  let sideNavWidth = sideNav.clientWidth;

  if (positionRight == 0) {
    sideNav.style.right = `-${sideNavWidth}px`;
  }
}
