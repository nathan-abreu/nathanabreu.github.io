function handleDefinitionLists() {
    const titles = document.querySelectorAll('dt');
    const openClass = "open";

    titles.forEach((title) => {
        title.addEventListener("click", () => {
            title.classList.toggle(openClass);
            title.nextElementSibling.classList.toggle(openClass);
        });
    });
}

function handleHamburgerMenu() {
    const header = document.querySelector("header");
    const navMenu = header.querySelector("nav");
    const navLinks = header.querySelectorAll("a")
    const iconHamburger = header.querySelector(".hamburger");
    const iconClose = header.querySelector(".close");

    function closeNav() {
        navMenu.classList.remove("visible");
    }

    iconHamburger.addEventListener("click", () => {
        navMenu.classList.add("visible");
    });

    iconClose.addEventListener("click", closeNav);

    navLinks.forEach((link) => {
        link.addEventListener("click", closeNav);
    });
}

handleDefinitionLists();
handleHamburgerMenu();