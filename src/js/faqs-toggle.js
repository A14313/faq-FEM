const faqs = document.querySelectorAll(".card__faqs");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})