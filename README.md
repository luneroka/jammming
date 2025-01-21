# Jammming

Jammming is a React-based web application that allows users to search for songs, create a playlist, rename the playlist, and save it to their Spotify account. The application integrates with the Spotify API using the Implicit Grant Authorization flow to enable user authentication and access to their Spotify data.

## Features

- **Search for Songs:** Search the Spotify catalog for songs based on the user's query.

- **Create Playlists:** Add songs to a custom playlist.

- **Rename Playlists:** Rename the playlist before saving it.

- **Save to Spotify Account:** Save the playlist to the user's Spotify account.

## Screenshots

![Home Page](https://github.com/luneroka/jammming/blob/main/frontend/public/jammming-screenshot.png?raw=true)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.
- A Spotify Developer account and access to the Spotify Web API.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/jammming.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd jammming
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up your Spotify API credentials:**

   - Create a Spotify Developer account at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

   - Create an app and retrieve the `client_id` and `redirect_uri`.

   - Update the application to use these credentials by adding them to the appropriate files.

     For this step it is recommended not to publish you client_id and redirect_uri but instead store them into an `.env` file and add this file to .gitignore.

5. **Run the app locally:**

   ```bash
   npm start
   ```

   The app should now be available at `http://localhost:3000`.

## Usage

1. Log in with your Spotify account using the Implicit Grant Authorization flow.

2. Search for songs and add them to your playlist.

3. Rename your playlist.

4. Save your playlist to your Spotify account.

## Running Tests

This project uses [Vitest](https://vitest.dev/) for testing.

## Credit

This project is part of Codecademy's [Full-Stack Engineer Path](https://www.codecademy.com/career-journey/full-stack-engineer).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
