var checked = document.getElementById("check");
checked.addEventListener("click", openNav);

function openNav() {
    if (document.getElementById("check").checked) {
        document.getElementById("sidebar").style.width = "241px";  
        document.getElementById("content").style.opacity = "0.5";
        document.getElementById("head").style.opacity = "0.5";
        document.getElementById("footer").style.opacity = "0.5";
    } else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("content").style.opacity = "1";
        document.getElementById("head").style.opacity = "1";
        document.getElementById("footer").style.opacity = "1";
    }
}