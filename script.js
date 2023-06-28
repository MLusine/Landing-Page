const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
const hero_text_box = document.getElementById("hero-text-box");
const div = document.createElement("div");
const newDiv = document.createElement("div");

menu.addEventListener("click", Open);

function Open() {
  menu.style.display = "none";

  div.classList.add("container_active");
  newDiv.classList.add("active");

  close.style.display = "block";
  nav.style.display = "block";
  newDiv.style.display = "block";
  newDiv.append(nav);
}
newDiv.append(div);
document.body.append(newDiv);

close.addEventListener("click", Close);

function Close() {
  close.style.display = "none";
  menu.style.display = "block";
  nav.style.display = "none";
  newDiv.style.display = "none";
}
