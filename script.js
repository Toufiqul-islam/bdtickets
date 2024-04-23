const data = [
  {
      "from": "Dhaka",
      "to": "Chittagong",
      "fare": 1100,
      "date":"11-06-24"
  },
  {
      "from": "Dhaka",
      "to": "Chittagong",
      "fare": 1100,
      "date":"30-04-24"
  },
  {
      "from": "Dhaka",
      "to": "Chittagong",
      "fare": 1100,
      "date":"01-05-24"
  },
  {
      "from": "Barisal",
      "to": "Chittagong",
      "fare": 900,
      "date":"11-05-24"
  },
  {
      "from": "Barisal",
      "to": "Chittagong",
      "fare": 1200,
      "date":"21-05-24"
  },
  {
      "from": "Barisal",
      "to": "Chittagong",
      "fare": 900,
      "date":"14-05-24"
  },
  {
      "from": "Barisal",
      "to": "Rajshahi",
      "fare": 1900,
      "date":"28-04-24"
  },
  {
      "from": "Barisal",
      "to": "Rajshahi",
      "fare": 1900,
      "date":"02-05-24"
  }
];

const separatedData = {};
data.forEach(item => {
  if (!separatedData[item.from]) {
      separatedData[item.from] = [];
  }
  separatedData[item.from].push(item);
});

console.log(separatedData);

// Sample data for suggestions
const sourceData = ['Dhaka', 'Barisal', 'Rajshahi', 'Chittagong', ];
const destinationData = ['Dhaka', 'Barisal', 'Rajshahi', 'Chittagong', ];

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