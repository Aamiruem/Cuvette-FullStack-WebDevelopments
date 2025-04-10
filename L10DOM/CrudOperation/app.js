// Corrected and improved Todo List JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get DOM elements with proper selectors
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tasksContainer = document.querySelector("#tasks-container");
    
    // 2. Form submission handler
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userData = input.value.trim();
        
        // 3. Validate input
        if (!userData) {
            alert("Please enter a task before submitting!");
            input.focus();
            return;
        }
        
        // 4. Create new task element
        const task = createTaskElement(userData);
        
        // 5. Add task to container
        tasksContainer.appendChild(task);
        
        // 6. Clear input field
        input.value = "";
        input.focus();
    });
    
    // Function to create a complete task element
    function createTaskElement(taskText) {
        // Create main task container
        const task = document.createElement("div");
        task.classList.add("task", "mb-3", "p-3", "border", "rounded", "bg-light");
        
        // Create content area
        const content = document.createElement("div");
        content.classList.add("content", "mb-2");
        
        // Create task input field
        const taskInput = document.createElement("input");
        taskInput.classList.add("form-control", "mb-2");
        taskInput.value = taskText;
        taskInput.setAttribute("readonly", "readonly");
        taskInput.type = "text";
        
        content.appendChild(taskInput);
        task.appendChild(content);
        
        // Create actions container
        const actions = document.createElement("div");
        actions.classList.add("actions", "d-flex", "justify-content-end");
        
        // Create Edit button
        const editButton = document.createElement("button");
        editButton.classList.add("edit", "btn", "btn-warning", "me-2");
        editButton.textContent = "Edit";
        
        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete", "btn", "btn-danger");
        deleteButton.textContent = "Delete";
        
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        task.appendChild(actions);
        
        // Add event listeners
        setupTaskEventListeners(task, taskInput, editButton, deleteButton);
        
        return task;
    }
    
    // Function to set up event listeners for a task
    function setupTaskEventListeners(task, taskInput, editButton, deleteButton) {
        // Edit button functionality
        editButton.addEventListener('click', () => {
            if (editButton.textContent === "Edit") {
                // Switch to edit mode
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                editButton.textContent = "Save";
                taskInput.classList.add("bg-white");
            } else {
                // Save changes
                const newValue = taskInput.value.trim();
                if (!newValue) {
                    alert("Task cannot be empty!");
                    taskInput.focus();
                    return;
                }
                taskInput.setAttribute("readonly", "readonly");
                editButton.textContent = "Edit";
                taskInput.classList.remove("bg-white");
            }
        });
        
        // Delete button functionality
        deleteButton.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")) {
                task.remove();
            }
        });
    }
});
