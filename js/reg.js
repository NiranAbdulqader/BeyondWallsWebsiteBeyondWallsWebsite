
// Function to validate form input
function validateForm() {
    // Get all form elements
    var formElements = document.forms["myForm"].elements;
    
    // Initialize variable to track form submission validity
    var canSubmit = true;

    // Loop through each form field
    for (var i = 0; i < formElements.length; i++) {
        // Check if the field is empty
        if (formElements[i].value.trim() === "") {
            canSubmit = false;
            break; // Exit the loop if any field is empty
        }
    }

    // If any field is empty, prevent form submission and show alert
    if (!canSubmit) {
        alert("Please fill out all fields before submitting.");
        return false;
    }

    // If all fields are filled, allow form submission
    return true;
}

// Event listener to prevent default form submission and handle form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate form input before submitting
    if (validateForm()) {
        // Show confirmation message
        alert("Form submitted successfully!");

        // Reset the form
        this.reset();
    }
});
