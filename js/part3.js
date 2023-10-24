const searchInput = document.getElementById('search-input');
const autocompleteResults = document.getElementById('autocomplete-results');

let data; // Store the autocomplete data here

// Fetch the JSON data
fetch('sss.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
    });

searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value.toLowerCase();
    const matchingResults = data.filter(item => item.toLowerCase().includes(inputValue));

    // Clear previous results
    autocompleteResults.innerHTML = '';

    // Display matching results
    if (inputValue) {
        matchingResults.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', () => {
                searchInput.value = result;
                autocompleteResults.innerHTML = '';
            });
            autocompleteResults.appendChild(li);
        });

        autocompleteResults.style.display = 'block';
    } else {
        autocompleteResults.style.display = 'none';
    }
});

// Close the autocomplete dropdown when clicking outside the input field
document.addEventListener('click', (event) => {
    if (event.target !== searchInput) {
        autocompleteResults.style.display = 'none';
    }
});
