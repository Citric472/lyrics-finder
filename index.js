document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const lyricsContainer = document.getElementById('lyricsContainer');
    const likeButton = document.getElementById('likeButton');
    let isLiked = false;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        searchLyrics();
    });

    likeButton.addEventListener('click', function () {
        toggleLike();
    });

    async function searchLyrics() {
        const artist = document.getElementById('artist').value;
        const title = document.getElementById('title').value;

        if (artist && title) {
            try {
                const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
                const data = await response.json();

                if (data.lyrics) {
                    lyricsContainer.textContent = data.lyrics;
                } else {
                    lyricsContainer.textContent = 'Lyrics not found.';
                }
            } catch (error) {
                console.error('Error fetching lyrics:', error);
                lyricsContainer.textContent = 'Error fetching lyrics.';
            }
        } else {
            lyricsContainer.textContent = 'Please enter both artist and title.';
        }
    }

    function toggleLike() {
        isLiked = !isLiked;
        updateLikeButton();
    }

    function updateLikeButton() {
        const heartSymbol = isLiked ? '&#10084;' : '&#9825;'; // Filled heart or empty heart
        likeButton.innerHTML = `<span class="heart-icon">${heartSymbol}</span>`;
        likeButton.classList.toggle('liked');
    }
});
