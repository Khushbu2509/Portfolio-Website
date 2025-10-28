// Animate skill bars when visible
const bars = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});
