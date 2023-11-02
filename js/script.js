function atualizarpag(pagina) {
    window.location = pagina + ".html";
}

let navbar = document.querySelector(".navbar");

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.right = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.right = "-100%";
}

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}

const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
        const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
        );
        if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

