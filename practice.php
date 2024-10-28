<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the size from the form
    $size = intval($_POST["size"]); // Convert to an integer

    // Start the HTML output
    echo "<h1>Multiplication Table up to $size</h1>";
    echo "<table border='1'>"; // Start a table with borders

    // Create the table rows
    for ($i = 1; $i <= $size; $i++) {
        echo "<tr>"; // Start a new row
        for ($j = 1; $j <= $size; $j++) {
            $product = $i * $j; // Calculate the product
            echo "<td>$product</td>"; // Display the product in a table cell
        }
        echo "</tr>"; // End the row
    }

    echo "</table>"; // End the table
}
?>
