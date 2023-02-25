let tabletWidth = window.matchMedia("(max-width: 1080px)")
let phoneWidth = window.matchMedia("(max-width: 450px)")

function openNav() {
    
    if (tabletWidth.matches) {
        document.getElementById("sidebar").style.width = "400px";
    } else if (phoneWidth.matches) {
        document.getElementById("sidebar").style.width = "100vw";
    } else {
        document.getElementById("sidebar").style.width = "400px";
    }
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}


console.log(phoneWidth);