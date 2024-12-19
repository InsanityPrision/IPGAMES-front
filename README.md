# IPGAMES

IPGAMES is a **mobile-only** application designed to manage a list of video games. It offers key features such as viewing, creating, deleting, and exploring detailed information about each game. Below are the features, technologies used, and required configuration.

---

## **Features**

### 1. **Game List**

- Displays a list of video games stored in the database.
- Each game shows:
  - **Title**
  - **Price**
  - **Rating**
- Available actions:
  - **Delete**: Button to remove a video game.
  - **View Details**: Button to access detailed information about the game.

### 2. **Create a Game**

- Page to add a new video game with a form, filling all fields.
- After submitting the form:
  - Automatic redirection to the game list, displaying the newly added game.

### 3. **Game Details**

- Individual page to view extended information about the selected game with the "More" button.

### 4. **Page Not Found**

- Handles invalid or non-existent routes:
  - Displays an error page indicating the entered address is not valid.

---

## **Technologies**

The application is developed using modern technologies to ensure speed, efficiency, and an excellent user experience:

- **Vite**: A fast and efficient frontend development tool.
- **Vitest**: Primary testing tool.
- **React**: Main library for creating user interfaces.
- **Redux Toolkit**: Efficient tool for state management.
- **Toastify**: Library for providing elegant and simple feedback.
- **MSW**: Library to mock a REST API for testing.
- **ESLint**: Tool to ensure clean code standards.
- **Husky and Lint Staged**: Pre-commit and pre-push scripts to ensure guidelines compliance.
- **TypeScript**: A statically-typed extension of JavaScript.

---

## **Environment Variables**

- A `.env` file is required to use the app.

```env
VITE_API_REST_URL=<ApiRestUrl>
```
