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

handleDefinitionLists();