let sidebar = document.getElementById("sidebar");
let content = document.getElementById("content");
let head = document.getElementById("op");
let footer = document.getElementById("footer");

function openNav() {
    head.style.opacity = "0.5";
    content.style.opacity = "0.5";
    footer.style.opacity = "0.5";
    sidebar.style.right = "0px";
}

content.addEventListener("click", closeNav);
head.addEventListener("click", closeNav);
footer.addEventListener("click", closeNav);

function closeNav() {
    sidebar.style.right = "-300px";
    content.style.opacity = "1";
    head.style.opacity = "1";
    footer.style.opacity = "1";
}