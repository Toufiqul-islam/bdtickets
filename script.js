// Sample data for suggestions
const sourceData = ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Seattle'];
const destinationData = ['Miami', 'Boston', 'Washington DC', 'Atlanta', 'Las Vegas'];

// Function to filter suggestions based on input text
function filterSuggestions(inputText, dataList) {
  return dataList.filter(item => item.toLowerCase().includes(inputText.toLowerCase()));
}

// Function to populate suggestion list
function populateSuggestions(inputElement, suggestionList, dataList) {
  const inputText = inputElement.value;
  const filteredData = filterSuggestions(inputText, dataList);
  suggestionList.innerHTML = '';
  filteredData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', function() {
      inputElement.value = item;
      suggestionList.innerHTML = '';
    });
    suggestionList.appendChild(li);
  });
}

// Event listeners for input fields
document.getElementById('sourceInput').addEventListener('input', function() {
  populateSuggestions(this, document.getElementById('sourceSuggestions'), sourceData);
});

document.getElementById('sourceInput').addEventListener('click', function() {
  populateSuggestions(this, document.getElementById('sourceSuggestions'), sourceData);
});

document.getElementById('destinationInput').addEventListener('input', function() {
  populateSuggestions(this, document.getElementById('destinationSuggestions'), destinationData);
});

document.getElementById('destinationInput').addEventListener('click', function() {
  populateSuggestions(this, document.getElementById('destinationSuggestions'), destinationData);
});



const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

arrowLeft.addEventListener('click', () => {
    const temp = item1.innerHTML;
    item1.innerHTML = item2.innerHTML;
    item2.innerHTML = temp;
});

arrowRight.addEventListener('click', () => {
    const temp = item2.innerHTML;
    item2.innerHTML = item1.innerHTML;
    item1.innerHTML = temp;
});