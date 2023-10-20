document.getElementById('searchButton').addEventListener('click', searchHeadings);

function searchHeadings() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    headings.forEach(heading => {
        const headingText = heading.textContent.toLowerCase();
        if (headingText.includes(searchInput)) {
            const resultItem = document.createElement('p');
            resultItem.textContent = headingText;
            searchResults.appendChild(resultItem);
        }
    });
}
