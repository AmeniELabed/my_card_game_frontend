# My Card Game Frontend

This is the frontend application for the My Card Game project. It is built using Vue.js and BootstrapVue to provide an interactive UI for drawing and sorting cards.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Installation

Before you start, ensure you have Node.js and npm installed on your machine.

1. Clone the repository:
    ```bash
    git clone https://github.com/AmeniELabed/my_card_game_frontend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd my_card_game_frontend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the development server, run:
```bash
npm run serve
 ```
The application will be available at http://localhost:8080.

## Project Structure
- #### src/:
  - **App.vue**: Main App component
  - **main.js**: Entry point for the application
  
- #### src/components/: 
  - **HandComponent.vue**: Component to display a hand of cards
  - **SortControls.vue**: Component to handle sorting controls

  
- #### src/assets/: 
    - Contains all Images .

- #### src/store/:
  -  Vuex store configuration

- #### src/utils/:
  - **cardImages.js**: Helper to import card images
  
- #### src/views/:
  - **HomePage.vue**: Home page view
  
  
- **.env**: Default environment variables.

- **.gitignore**: Specifies files and directories to be ignored by Git.

- **README.md**: This readme file.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This `README.md` file provides detailed information on how to install, run, and use the frontend application. It also includes details about the project's structure, components, and environment variables.
