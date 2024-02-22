window.addEventListener("scroll", function() {
    let header = this.document.getElementById("header-nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})