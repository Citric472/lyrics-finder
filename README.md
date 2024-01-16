# lyrics-finder
## Overview

This web application allows users to search for song lyrics by entering an artist's name and song title. The application utilizes the "https://api.lyrics.ovh/v1/artist/title" API to dynamically fetch and display lyrics. Additionally, users can express their appreciation for a particular song using the integrated "Like" functionality.

## Features

1. **Lyrics Retrieval:**
   - Users can input an artist's name and song title via a form.
   - Upon submitting the form, the application fetches lyrics from the specified API and displays them on the user interface.

2. **Event Listeners:**
   - The application responds to three primary events: `DOMContentLoaded`, `click`, and `submit`.
   - The `DOMContentLoaded` event initializes the application, while `click` and `submit` events handle user interactions, such as liking a song or searching for lyrics.

3. **Like Functionality:**
   - A "Like" button is incorporated into the application.
   - Upon clicking the "Like" button, the application sends a `POST` request to a JSON Server, adding the liked song's artist and title to the persisted data.

4. **JSON Server Integration:**
   - The application utilizes JSON Server to persist liked songs temporarily.
   - The `db.json` file is updated dynamically with each liked song, ensuring data persistence between user sessions.

5. **User Experience:**
   - The user interface provides a user-friendly experience with clear input validation and error handling.
   - Liked songs are visually represented, and the interface is updated dynamically upon each like action.