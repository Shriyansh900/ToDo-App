// Selectors
const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const deleteAllBtn = document.getElementById("delete-all-btn");

// Add Task Function
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create List Item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
        ${taskText}
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;

    // Append to List
    todoList.appendChild(listItem);

    // Clear Input
    todoInput.value = "";

    // Add Delete Functionality
    const deleteBtn = listItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(listItem);
    });
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    darkModeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("darkMode", isDarkMode); // Save preference
}

// Delete All Tasks
function deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        todoList.innerHTML = ""; // Clear all tasks
    }
}

// Load Dark Mode Preference
window.addEventListener("load", () => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
    }
});

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
darkModeToggle.addEventListener("click", toggleDarkMode);
deleteAllBtn.addEventListener("click", deleteAllTasks);
