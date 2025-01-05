<script>
    // Select all cards with the class 'coaching-card'
    const cards = document.querySelectorAll('.coaching-card');

    // Add touch event listeners for each card
    cards.forEach(card => {
        // When card is touched
        card.addEventListener('touchstart', () => {
            card.classList.add('enlarge'); // Add enlarge effect
        });

        // When touch ends, remove the effect
        card.addEventListener('touchend', () => {
            card.classList.remove('enlarge');
        });

        // Optional: Support mouse hover as well
        card.addEventListener('mouseenter', () => {
            card.classList.add('enlarge');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('enlarge');
        });
    });
</script>
