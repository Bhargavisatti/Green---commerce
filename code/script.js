// JavaScript for interactivity (e.g., adding items to the cart, filtering products)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Added to cart!');
        });
    });
});
