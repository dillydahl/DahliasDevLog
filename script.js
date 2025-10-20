document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const petals = document.querySelectorAll('.petal');
    const center = document.getElementById('center');
    const randomizeBtn = document.getElementById('randomize-colors');
    const resetBtn = document.getElementById('reset-flower');
    const flowerRoot = document.getElementById('flower-root');

    // Store original colors
    const originalColors = Array.from(petals).map(petal => petal.getAttribute('fill'));

    // Randomize colors function
    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 80%, 75%)`;
    }

    // Handle petal clicks
    petals.forEach(petal => {
        petal.addEventListener('click', () => {
            petal.classList.toggle('open');
            petal.setAttribute('aria-pressed', 
                petal.classList.contains('open').toString());
        });
    });

    // Center click handler
    if (center) {
        center.addEventListener('click', () => {
            flowerRoot.classList.remove('rotating');
            void flowerRoot.offsetWidth; // Trigger reflow
            flowerRoot.classList.add('rotating');
        });
    }

    // Randomize colors button
    if (randomizeBtn) {
        randomizeBtn.addEventListener('click', () => {
            petals.forEach(petal => {
                petal.setAttribute('fill', getRandomColor());
            });
        });
    }

    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            petals.forEach((petal, index) => {
                petal.setAttribute('fill', originalColors[index]);
                petal.classList.remove('open');
                petal.setAttribute('aria-pressed', 'false');
            });
            flowerRoot.classList.remove('rotating');
        });
    }
});



