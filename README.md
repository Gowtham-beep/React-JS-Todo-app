 React Todo App

A simple and intuitive **Todo App** built with **ReactJS**, styled with **[Fanta CSS](https://www.fantacss.smoljames.com/)**, and utilizing **LocalStorage** for persistent task management. This app allows users to add, edit, delete, and mark tasks as completed, even after refreshing the page.

## Features

- **Add Tasks**: Create new todo items with ease.
- - **Delete Tasks**: Remove tasks you no longer need.
- **Mark as Completed**: Keep track of your progress by marking tasks as done.
- **LocalStorage**: All tasks are saved locally, ensuring persistence even after closing or refreshing the app.
- **Responsive UI**: Styled with Fanta CSS for a clean and visually appealing user interface.

## Tech Stack

- **ReactJS**: A JavaScript library for building user interfaces.
- **Fanta CSS**: A simple and lightweight CSS framework for fast and easy styling.
- **LocalStorage**: Used to store tasks locally in the browser for data persistence.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

- [Node.js](https://nodejs.org/) (v12 or above)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Gowtham-beep/React-JS-Todo-app.git
   cd React-JS-Todo-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Access the app**:

   The app will be running at `http://localhost:5173`.

### Fanta CSS Integration

This project uses **[Fanta CSS](https://www.fantacss.smoljames.com/)** for styling. Fanta CSS is a lightweight, minimal CSS framework that allows you to style your components quickly without the bloat of larger frameworks.

To integrate Fanta CSS:

- Import Fanta CSS in your `index.html` file:

   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fantacss@0.1.0/fanta.min.css">
   ```

### How LocalStorage is Used

The Todo App uses **LocalStorage** to store the list of tasks, allowing them to persist even after the browser is closed or the page is refreshed.

- **Saving Tasks**: Each task is saved as an object in an array, which is then stored in LocalStorage under a `todos` key.
- **Retrieving Tasks**: When the app is loaded, the tasks are fetched from LocalStorage and displayed in the Todo list.

### Example Code for LocalStorage

Here's a simplified example of how LocalStorage is used in the app:

```js
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  setTodos(storedTodos);
}, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

## How to Use

1. **Add a Task**: Enter a task in the input field and click "Add". The task will appear in the list below.
2. **Delete a Task**: Click on the "Delete" button to remove a task from the list.
3. **Mark as Completed**: Click on a task to mark it as completed.
4. **Persistent Data**: Your tasks are saved in LocalStorage, so they remain even after refreshing the page.

## Live Demo

You can view the live version of the app [here](https://your-live-demo-url).

## Screenshots

![Todo App All tasks](todo-all.jpg)
![Todo App Open tasks](todo-open.jpg)
![Todo App completed tasks](todo-completed.jpg)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README` provides an overview of your React Todo App, its features, tech stack, and instructions on how to set it up and use it. It also explains the integration of Fanta CSS and LocalStorage in your project.
