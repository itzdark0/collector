// Function to calculate FLAMES
function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        alert("Please enter both names.");
        return;
    }

    let name1Arr = name1.split('');
    let name2Arr = name2.split('');

    // Remove common letters
    for (let i = 0; i < name1Arr.length; i++) {
        for (let j = 0; j < name2Arr.length; j++) {
            if (name1Arr[i] === name2Arr[j]) {
                name1Arr.splice(i, 1);
                name2Arr.splice(j, 1);
                i--;
                break;
            }
        }
    }

    // Get remaining letters count
    const remainingLettersCount = name1Arr.length + name2Arr.length;

    // FLAMES array
    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemy', 'Siblings'];

    // Calculate the result by cycling through FLAMES
    let index = 0;
    while (flames.length > 1) {
        index = (index + remainingLettersCount - 1) % flames.length;
        flames.splice(index, 1);
    }

    // Show the result with animation
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('show');  // Reset animation
    resultElement.innerText = `Your relationship is: ${flames[0]}`;
    resultElement.classList.add('show');
}

// Function to submit details
function submitDetails() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const resultElement = document.getElementById('result');
    const resultText = resultElement.innerText;

    if (name1 === '' || name2 === '' || !resultText) {
        alert("Please calculate the FLAMES result first.");
        return;
    }

    // Create a new detail entry
    const detailEntry = `${name1} and ${name2}: ${resultText}`;

    // Display the submitted details
    const detailsList = document.getElementById('details-list');
    const listItem = document.createElement('li');
    listItem.textContent = detailEntry;
    detailsList.appendChild(listItem);

    // Clear the form
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    resultElement.innerText = '';
}
