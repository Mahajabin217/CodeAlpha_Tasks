document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { // Add delay to trigger animation
        const progressBars = document.querySelectorAll(".progress");

        progressBars.forEach(bar => {
            let progressValue = bar.getAttribute("data-progress");
            bar.style.width = progressValue + "%";
        });
    }, 200); // 200ms delay to ensure smooth animation
});