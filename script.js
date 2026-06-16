document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((el) => observer.observe(el));
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".fade-fast, .fade-normal, .fade-slow"
).forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".pop-fast, .pop-medium, .pop-slow"
    ).forEach(el => observer.observe(el));

});
document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".slide-left-fast, .slide-left-medium, .slide-left-slow"
    ).forEach(el => observer.observe(el));

});