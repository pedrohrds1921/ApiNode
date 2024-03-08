# User CRUD with SQLite, Knex, and TypeScript

This is a sample project that implements a user CRUD (Create, Read, Update, Delete) using SQLite as the database, Knex for database interaction, TypeScript for development with static typing, along with concepts of dependency inversion, dependency injection, and layered architecture.

## Installation

1. Make sure you have Node.js and npm installed on your machine.

2. Clone this repository:
   ```bash
   git clone https://github.com/your-user/your-project.git](https://github.com/pedrohrds1921/ApiNode.git
   ```

3. Navigate to the project directory and install the dependencies:
   ```bash
   cd your-project
   npm install
   ```

4. Run the migrations to create the database tables:
   ```bash
   npm run knex migrate:latest 
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

## Technologies Used

- Node.js
- SQLite
- Knex
- TypeScript

## Project Structure

The project follows a layered architecture, with the separation of concerns into different modules:

- **`src/`**: Main source code directory.
  - **`controllers/`**: Application controllers, responsible for handling HTTP requests, validating data, and calling appropriate services.
  - **`services/`**: Application services, responsible for implementing business logic and interacting with the database.
  - **`repositories/`**: Application repositories, responsible for performing database operations.
  - **`models/`**: Application data models, representing the structure of domain entities.
  - **`routes/`**: Application routes, defining HTTP endpoints and their respective controllers.
  - **`middlewares/`**: Application middlewares, such as authentication, error handling, etc.
  - **`knexfile.ts`**: Knex configuration file to define the database connection.

## API Documentation

The API documentation is provided using Swagger. To access it, start the server and navigate to `http://localhost:3000/api-docs`.

## Contributing

Contributions are welcome! To propose a new feature, fix a bug, or discuss improvements, please open an issue and describe your proposal.

