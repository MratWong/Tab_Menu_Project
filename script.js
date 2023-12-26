const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slide");
const pages = document.querySelectorAll(".pages");
const liTag = document.createElement("li");

const tabs = ["home", "service", "about us", "contact us", "login"];

let previouslyClickedTab = null;
const handleChangeTag = (event) => {
    const clickedTabId = event.target.id;
    const clickedLiTag = document.getElementById(clickedTabId);
    const homeTab = document.getElementById("0");
    const clickedLiTagWidth = clickedLiTag.offsetWidth + "px";
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft + "px";
    const pageTag = pages[clickedTabId];

    pages.forEach((page, clickedTabId) => {
        page.style.display = 'none';
    });

    pageTag.style.display = 'block';

    if (previouslyClickedTab) {
        previouslyClickedTab.style.color = "white";
    }
    clickedLiTag.style.color = "aqua";
    previouslyClickedTab = clickedLiTag;

    sliderTag.style.width = clickedLiTagWidth;
    sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft})`;

    if (clickedTabId !== '0' && homeTab) {
        homeTab.style.color = "white";
    }
}

for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    ulTag.append(liTag);
    liTag.addEventListener("click", handleChangeTag);
    if (i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
        liTag.style.color = "aqua";
    }
}