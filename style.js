document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    container.style.opacity = 0;
    container.style.transform = "translateY(20px)";

    setTimeout(() => {
        container.style.transition = "opacity 1s ease, transform 1s ease";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 300);
});