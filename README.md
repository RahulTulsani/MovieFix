# Movie List App
This is a movie information app built with React Native and TypeScript, utilizing The Movie Database (TMDb) API to fetch and display popular movies. The app allows users to filter movies by genre and seamlessly load more movies as they scroll through the list.

# Demo
![Movie List App Demo](https://github.com/RahulTulsani/MovieFix/blob/main/src/demo/Demo.gif)

# Features
- Display a list of popular movies sorted by descending order of popularity.
- Filter movies by genre using genre tags provided by TMDb API.
- Load movies for the default year (2012) and dynamically fetch movies for previous or next years based on user scroll direction.
- Implements smooth scrolling behavior for optimal user experience, even with a large number of loaded movies.
# Requirements Covered
- Layout and UI Components:
  - Custom UI components built with React Native for reusability and enhanced user experience.
  - Movie information cards display movie title, image, genre, cast, director, and short description.
- Default Page Load State:
  - Loads 20 movies for the default year (2012) upon initial app load.
  - Implements smooth scrolling behavior to dynamically fetch movies for previous or next years based on user scroll direction.
- API Integration:
  - Utilizes TMDb API to fetch movie data using query parameters such as **`primary_release_year`**  and **`vote_count.gte`** for filtering.
- Genre Filter:
  - Fetches available movie genres from TMDb API and provides UI filters for users to select specific genres.
- Code Quality and Structure:
  - Well-structured codebase with reusable components, written in TypeScript for enhanced type safety and maintainability.
  - Implements smooth scrolling optimization for seamless user interaction.
# Getting Started
## Prerequisites
- Node.js and npm (or yarn) installed on your development machine.
- React Native CLI installed globally (**`npm install -g react-native-cli`**).
# Installation
1. **Clone the Repository:**:
   ```bash
   git clone https://github.com/RahulTulsani/MovieFix.git
2. **Navigate to the project directory:**:
   ```bash
   cd MovieFix
3. **Install dependencies:**:
   ```bash
   npm install
# Running the App
1. Start the Metro bundler:
   ```bash
   npx react-native start --port 8081 --reset-cache
2. Run the app on a physical device or emulator:
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
# APK Build (Android)
  If you want to install the app on an Android device without building it from the source code, you can download the pre-built APK file from this [GitHub link](https://github.com/RahulTulsani/MovieFix/blob/main/src/demo/MovieFix.apk).
## Installation Steps:
Download the APK file from the Releases section.
Transfer the APK file to your Android device (via USB, email, or cloud storage).
On your Android device, navigate to the location where you transferred the APK file using a file manager.
Tap on the APK file to begin the installation process.
Follow the on-screen instructions to complete the installation.
Note:
Make sure to enable "Install Unknown Apps" or "Unknown Sources" in your device settings to allow installation of apps from external sources.
Additional Notes
Smooth Scrolling:
The app implements smooth scrolling behavior to ensure a seamless user experience, especially when loading more movies dynamically.
Search Feature (Not Implemented):
The search bar feature was listed as optional and is not included in this version of the app. If you wish to implement search functionality in the future, consider integrating a search bar component and modifying the API request to fetch movies matching the search query.

