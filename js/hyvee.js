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
    const iconHamburger = header.querySelector(".hamburger");
    const iconClose = header.querySelector(".close");

    iconHamburger.addEventListener("click", () => {
        navMenu.classList.add("visible");
    });

    iconClose.addEventListener("click", () => {
        navMenu.classList.remove("visible");
    })
}

handleDefinitionLists();
handleHamburgerMenu();