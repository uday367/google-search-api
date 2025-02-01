document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchQuery').value;
    const apiKey = 'AIzaSyDObvCfMTjdRBBRlozg-u9VMmZM1QnUWZg'; // Replace with your actual API key
    const cx = '31e690420682c4a92'; // Replace with your Custom Search Engine ID

    if (!query) {
        alert('Please enter a search query.');
        return;
    }

    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

    fetch(url).then(response => response.json()).then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
});

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (data.items && data.items.length) {
        data.items.forEach(item => {
            const result = document.createElement('div');
            result.classList.add('result');

            result.innerHTML = `
                <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                <p>${item.snippet}</p>
            `;

            resultsContainer.appendChild(result);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
