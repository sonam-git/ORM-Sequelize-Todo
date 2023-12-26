const $addBtn = document.getElementById('addBtn');
const $todoInput = document.getElementById('todo');

$addBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  if ($todoInput?.value.trim() === '') {
    return alert('Please enter a todo');
  }


  try {
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({todo: $todoInput.value}),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
    console.log(data.id)
  //  location.reload()

  } catch (error) {
    console.log(error);
  }


});

// DELETE TODO FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the document, listening for clicks on elements with class 'delete-icon'
  document.addEventListener("click", function (event) {
      // Check if the clicked element has the class 'delete-icon'
      if (event.target.classList.contains("delete-icon")) {
          // Retrieve the todo ID from the data attribute
          const todoId = event.target.getAttribute("data-todo-id");
          console.log(todoId)

          // Call the deleteTodo function with the todo ID
          deleteTodo(todoId);
      }
  });

  // Function to delete the todo with a specific ID
  function deleteTodo(todoId) {
      // Make a DELETE request to the "/api/todos/todoId" endpoint
      fetch(`/api/todos/${todoId}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      })
          .then(response => {
              // Check if the request was successful (status code 200-299)
              if (response.ok) {
                  // Update the UI or perform additional actions as needed
                  console.log(`Todo with ID ${todoId} deleted successfully.`);
              } else {
                  // Handle error scenarios
                  console.error("Failed to delete todo.", response.statusText);
              }
          })
          .catch(error => {
              // Handle network errors
              console.error("Network error:", error);
          });
  }
});



function goBack() {
    window.history.back();
  }

  