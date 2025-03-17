const moodNodes = document.querySelectorAll('.mood-node');
const quoteHologram = document.querySelector('.quote-hologram');
const quantumLoader = document.querySelector('.quantum-loader');
let currentMood = 'celestial';
let quoteInterval;


// Update quote display in script.js
function displayQuantumQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.classList.remove('quote-enter');
    void quoteElement.offsetWidth; // Trigger reflow
    quoteElement.classList.add('quote-enter');
}

function activateMatrixFlow() {
    const moods = Object.keys(quoteMatrix);
    let moodIndex = 0;
    
    quoteInterval = setInterval(() => {
        currentMood = moods[moodIndex];
        displayQuantumQuote();
        moodIndex = (moodIndex + 1) % moods.length;
    }, 10000);
}

function displayQuantumQuote() {
    const moodQuotes = quoteMatrix[currentMood];
    const randomIndex = Math.floor(Math.random() * moodQuotes.length);
    const { quote, author } = moodQuotes[randomIndex];
    
    quantumLoader.style.display = 'block';
    quoteHologram.classList.remove('active');
    
    setTimeout(() => {
        document.getElementById('quote').textContent = quote;
        document.getElementById('author').textContent = `- ${author}`;
        quantumLoader.style.display = 'none';
        quoteHologram.classList.add('active');
    }, 500);
}

moodNodes.forEach(node => {
    node.addEventListener('click', () => {
        currentMood = node.dataset.mood;
        clearInterval(quoteInterval);
        displayQuantumQuote();
        activateMatrixFlow();
    });
});


// Add to script.js
moodNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        document.getElementById('hover-sound').play();
    });
});

// Initialize with auto-cycle
activateMatrixFlow();
displayQuantumQuote();