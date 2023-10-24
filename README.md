# Top Stories MERN App

Welcome to the Story Top Stories MERN App README. This application fetches and displays top stories from the Story API using the MERN (MongoDB, Express, React, Node.js) stack.

## Table of Contents

- [Overview](#overview)
- [Frontend Features](#FrontendFeatures)
- [Installation](#installation)
- [Usage](#usage)

## Overview

This MERN application fetches top stories from the Story API and displays them as cards with React on the frontend. Users can click on a card to view the full story on the Story website. The application consists of a frontend and a backend component.

### Frontend Features

1. **Display All Stories Page**: The app includes a page that displays all the top stories.

2. **Story Cards**: Each story is presented as a card with an image, and clicking on the card will take the user to the story's link.

### Backend Features

1. **API Key**: To access the Story API, you will need to sign in and obtain an API key. The backend component securely stores and manages this API key.

2. **Data Fetching**: The frontend fetches data from the Express-based backend, which, in turn, fetches data from the Story API.

## Installation

Follow these steps to set up and run the application:

1. Clone this GitHub repository to your local machine:

   ```bash
   git clone https://github.com/Wajeeh-Haider/test.git

## Usage

To run the application, follow these steps:

1. Start the backend server:

   ```bash
   cd server
   npm install
   npm run dev

2. Start the frontend:

   ```bash
   cd client
   npm install
   npm start
