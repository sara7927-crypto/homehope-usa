// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

// WEBSITE SEARCH
const searchBox = document.createElement("div");
searchBox.className = "website-search";

searchBox.innerHTML = `
    <input
        type="text"
        id="siteSearch"
        placeholder="Search HomeHope USA..."
        aria-label="Search website information"
    >
    <button id="searchButton">Search</button>
    <p id="searchMessage"></p>
`;

const introSection = document.querySelector(".intro");
introSection.appendChild(searchBox);

const searchInput = document.getElementById("siteSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

function searchWebsite() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") {
        searchMessage.textContent = "Please type something to search.";
        return;
    }

    const sections = document.querySelectorAll("main section");
    let foundSection = null;

    sections.forEach(function (section) {
        if (
            section.innerText.toLowerCase().includes(searchTerm) &&
            foundSection === null
        ) {
            foundSection = section;
        }
    });

    if (foundSection) {
        searchMessage.textContent = "Information found! Taking you there...";
        foundSection.scrollIntoView({ behavior: "smooth" });
    } else {
        searchMessage.textContent = "No information found. Try another word.";
    }
}

searchButton.addEventListener("click", searchWebsite);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchWebsite();
    }
});