// Function to change the paragraph's border and background color based on RGB input values
function changeParagraphColor() {
    // Get the RGB values for the border and background from input fields
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    // Select the paragraph element to change its style
    var tag = document.getElementById("paragraph");
    
    // Update the border color, width, and background color
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width + 'px'; // Ensure width is in pixels
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}


// Function to validate the passwords entered by the user
function validate() {
    // Get the values of the two password inputs
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    // Check if the first password is at least 8 characters long
    if (pass1.length < 8) {
        alert("The length of the first password is less than 8 letters!"); // Alert if too short
    } 
    // Check if the second password is at least 8 characters long
    else if (pass2.length < 8) {
        alert("The length of the second password is less than 8 letters!"); // Alert if too short
    } 
    // Check if the two passwords match
    else if (pass1 !== pass2) {
        alert("Two passwords don't match!"); // Alert if they don't match
    } 
    // If all checks pass, passwords match and are valid
    else {
        alert("Passwords match!"); // Alert user of success
    }
}
