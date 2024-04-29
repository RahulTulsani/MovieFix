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
- React Native CLI installed globally (npm install -g react-native-cli).
