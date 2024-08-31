# Instagram Stories Feature with Next.js and TypeScript

This project implements an Instagram-like stories feature using Next.js with TypeScript. It allows users to view stories posted by other users in a carousel format, similar to the functionality found in the Instagram app.

## Demo

Check out the live demo: [Instagram Story Demo](https://assign-stage-insta-8djss2hlg-abhay-jiratis-projects.vercel.app/)

## Features

- Story Viewing: Users can view stories posted by other users.
- Mobile Design: The interface adapts to only for mobile devices.
- TypeScript: Utilizes TypeScript for type safety and improved code maintainability.
- Test Cases: Includes test cases to ensure the reliability and robustness of the application.

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- TypeScript: A statically typed superset of JavaScript for enhanced code quality.
- Jest: A JavaScript testing framework for unit and integration testing.
- React Testing Library: A testing utility for React applications to write test cases.
- CSS: Tailwind CSS is used to design the Insta Story

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhijrt/assign-stage-insta.git
   ```

2. Install dependencies:

   ```bash
   cd assign-insta-stage
   npm install
   ```

3. Set up environment variables:
   Create a .env.local file in the root directory of the project if you change the port otherwise its already in the .env file and add the following environment variables:

   ```bash
   API_BASE_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   Navigate to http://localhost:3000 in your web browser to view the application.

6. Running Tests
   To run the test cases included in the project, use the following command:

   ```bash
   npm test
   ```

This will execute all test suites and display the results in the terminal.
