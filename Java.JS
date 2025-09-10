document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const postText = button.closest('.post-container').querySelector('.post-text').textContent;
        const encodedText = encodeURIComponent(postText);
        let shareUrl = '';

        if (button.classList.contains('share-twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        } else if (button.classList.contains('share-facebook')) {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`;
        } else if (button.classList.contains('share-whatsapp')) {
            shareUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
        }

        window.open(shareUrl, '_blank');
    });
});
