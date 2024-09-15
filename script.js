document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.body.style.background = color;
    });
});
