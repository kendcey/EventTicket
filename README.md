# EventTicket
This project implements a dynamic web-based ticket registration system for an upcoming DMWT alumni event. It utilizes HTML5 and JavaScript to validate user input, calculate costs, and enhance the user experience through interactive features.


Core Components

Countdown Timer: A timer counting down 10 minutes, ensuring users complete transactions within the allotted time.
Ticket Purchase: Allows users to purchase 1 to 3 tickets.
Total Calculation: Dynamically calculates and displays the total cost for tickets purchased.

Interactive Design:
Provides descriptive error messages for invalid or incomplete fields.
Highlights invalid inputs with visual cues for better user feedback.
Functionality

Countdown Timer:
Updates every second, displaying the remaining minutes and seconds.
Alerts the user when the timer expires and reloads the page for a fresh attempt.

Ticket Validation:
Ensures ticket quantity is between 1 and 3.
Displays errors for invalid inputs and dynamically updates the total cost.

Complete Purchase:
Validates user’s name and email address.
Provides feedback for invalid inputs and thanks users for successful purchases.
Stops the countdown timer upon successful submission.

Technology Stack

HTML5: For semantic web structure.
CSS3: For responsive and interactive styling.
JavaScript: For dynamic content and user interactions.
Future Enhancements
Integrate email service for automated ticket delivery upon successful purchase.
Add animations for error feedback and form transitions.
