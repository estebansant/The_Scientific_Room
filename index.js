let tick = document.getElementById("check");
let sidebar = document.getElementById("sidebar");
let content = document.getElementById("content");
let head = document.getElementById("head");
let footer = document.getElementById("footer");
tick.addEventListener("click", openNav);

function openNav() {
    content.style.opacity = "0.5";
    head.style.opacity = "0.5";
    footer.style.opacity = "0.5";
    sidebar.style.right = "0px";
}

content.onclick = closeNav;
head.onclick = closeNav;
footer.onclick = closeNav;

function closeNav() {
    sidebar.style.right = "-300px";
    content.style.opacity = "1";
    head.style.opacity = "1";
    footer.style.opacity = "1";
}