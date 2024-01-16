document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const lyricsContainer = document.getElementById('lyricsContainer');
    const likeButton = document.getElementById('likeButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        searchLyrics();
    });

    likeButton.addEventListener('click', function () {
        likeSong();
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

    async function likeSong() {
        const artist = document.getElementById('artist').value;
        const title = document.getElementById('title').value;

        if (artist && title) {
            try {
                // Send a request to like the song
                const likeResponse = await fetch('http://localhost:3000/likes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        artist,
                        title,
                    }),
                });

                if (likeResponse.ok) {
                    console.log('Song liked!');

                    // Update the liked songs on the UI
                    updateLikedSongs();
                } else {
                    console.error('Failed to like the song.');
                }
            } catch (error) {
                console.error('Error liking the song:', error);
            }
        } else {
            console.error('Cannot like the song without artist and title.');
        }
    }

    async function updateLikedSongs() {
        try {
            // Fetch the updated liked songs from the server
            const likedSongsResponse = await fetch('http://localhost:3000/likes');
            const likedSongs = await likedSongsResponse.json();

            // Update the UI with the liked songs
            displayLikedSongs(likedSongs);
        } catch (error) {
            console.error('Error updating liked songs:', error);
        }
    }

    function displayLikedSongs(likedSongs) {
        // For simplicity, replace this with your logic to display liked songs in the UI
        console.log('Liked Songs:', likedSongs);
    }
});
