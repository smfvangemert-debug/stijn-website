document.addEventListener("DOMContentLoaded", function () {
    const toggleProfileBtn = document.getElementById("toggleProfileBtn");
    const profileSummary = document.getElementById("profileSummary");
    const scrollContactBtn = document.getElementById("scrollContactBtn");

    if (toggleProfileBtn && profileSummary) {
        toggleProfileBtn.addEventListener("click", function () {
            profileSummary.classList.toggle("hidden");

            if (profileSummary.classList.contains("hidden")) {
                toggleProfileBtn.textContent = "Show profile summary";
            } else {
                toggleProfileBtn.textContent = "Hide profile summary";
            }
        });
    }

    if (scrollContactBtn) {
        scrollContactBtn.addEventListener("click", function () {
            const contactSection = document.getElementById("contact-section");

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            formFeedback.classList.remove("hidden");
            contactForm.reset();
        });
    }
});