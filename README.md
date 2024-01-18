# MelodyMate - Lyrics Finder App

## Author
Cynthia Langat
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

   ## Project Setup Instructions

### Prerequisites
- Node.js installed
- JSON Server installed (for data persistence)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/melodymate.git
   cd melodymate
2. Navigate to the project directory:

  ```bash
  Copy code
  cd MelodyMate-Lyrics-Finder

Certainly! Below is a template for a well-documented README file for your GitHub project. Feel free to customize it according to your specific project details:

markdown
Copy code
# Project Name

MelodyMate Lyrics Finder App

## Author

[Your Name]

## Description

The MelodyMate Lyrics Finder App is a JavaScript application that allows users to search for song lyrics by providing the artist name and song title. The application fetches data from the [Lyrics.ovh API](https://api.lyrics.ovh/v1/) to provide accurate and up-to-date lyrics. Users can also like their favorite songs, and the liked songs are stored in a `db.json` file using JSON Server.

## Project Setup Instructions

To set up and run the project locally, follow these steps:

1. Clone the repository:
   git clone [https://github.com/Citric472/lyrics-finder]
2. Navigate to the project directory:
   cd MelodyMate-Lyrics-Finder
3. Install dependencies:
    npm install
4. Start the JSON Server:
   json-server --watch db.json
5. Open index.html in your web browser or use a local development server to view the application.

## Live Site
The live site is hosted on GitHub Pages. 

## Copyright and License
Copyright (c) 2024 Cynthia Langat
This project is licensed under the MIT License.