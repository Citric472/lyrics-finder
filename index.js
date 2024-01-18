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

    async function toggleLike() {
        isLiked = !isLiked;
        updateLikeButton();
    
        const artist = document.getElementById('artist').value;
        const title = document.getElementById('title').value;
    
        if (isLiked && artist && title) {
            try {
                const response = await fetch('http://localhost:3000/likedsongs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ artist, title }),
                });
    
                if (response.ok) {
                    console.log('Liked song added to db.json');
                } else {
                    console.error('Failed to add liked song to db.json:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error adding liked song to db.json:', error);
            }
        }
    }
    

    function updateLikeButton() {
        if (isLiked) {
            likeButton.innerHTML = '&#10084;'; // Full heart
            likeButton.classList.add('liked');
        } else {
            likeButton.innerHTML = '&#9825;'; // Empty heart
            likeButton.classList.remove('liked');
        }
    }

    // Initial state: Like feature starts as an empty heart
    updateLikeButton();
});
