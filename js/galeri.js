document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function () {
        const src = this.getAttribute('src');
        document.getElementById('modalImage').setAttribute('src', src);
    });
});