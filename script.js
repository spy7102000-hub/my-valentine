const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const proposalSection = document.getElementById('proposal-section');
const successSection = document.getElementById('success-section');

// Function to move the "No" button randomly
noBtn.addEventListener('mouseenter', () => {
    // Calculate random coordinates
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Apply the new position to the button
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Function to handle the "Yes" click
yesBtn.addEventListener('click', () => {
    proposalSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});