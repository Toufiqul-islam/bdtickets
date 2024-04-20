const fromInput = document.getElementById('fromInput');
const toInput = document.getElementById('toInput');
const dateInput = document.getElementById('dateInput');
const fromSuggestions = document.getElementById('fromSuggestions');
const toSuggestions = document.getElementById('toSuggestions');
const swapButton = document.getElementById('swapButton');
const searchButton = document.getElementById('searchButton');
const busList = document.getElementById('busList');
const noResultsMessage = document.getElementById('noResultsMessage');
const loader = document.getElementById('loader');

const fromData = ['City A', 'City B', 'City C']; // Sample data for 'From' input
const toData = ['City X', 'City Y', 'City Z']; // Sample data for 'To' input

// Function to filter suggestions
function filterSuggestions(input, suggestions, data) {
    const inputValue = input.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(inputValue));
    suggestions.innerHTML = ''; // Clear previous suggestions
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => {
            input.value = item;
            suggestions.innerHTML = ''; // Clear suggestions after selection
        });
        suggestions.appendChild(li);
    });
}

// Event listener for 'From' input
fromInput.addEventListener('input', () => {
    filterSuggestions(fromInput, fromSuggestions, fromData);
});

// Event listener for 'To' input
toInput.addEventListener('input', () => {
    filterSuggestions(toInput, toSuggestions, toData);
});

// Event listener for swap button
swapButton.addEventListener('click', () => {
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
});

// Event listener for search button
searchButton.addEventListener('click', () => {
    // Show loader
    loader.style.display = 'block';
    
    // Simulate fetching bus data (replace with actual API call)
    setTimeout(() => {
        const busData = []; // Replace with fetched data
        displayBusList(busData);
    }, 2000); // Simulating a delay of 2 seconds
});

// Function to display bus list
function displayBusList(data) {
    // Hide loader
    loader.style.display = 'none';
    
    // Clear previous results
    busList.innerHTML = '';
    
    if (data.length === 0) {
        // Show "No buses available" message
        noResultsMessage.style.display = 'block';
    } else {
        // Populate bus list
        data.forEach(bus => {
            const busItem = document.createElement('div');
            busItem.textContent = `Date: ${bus.date}, Time: ${bus.time}, Fare: ${bus.fare}`;
            busList.appendChild(busItem);
        });
    }
}
