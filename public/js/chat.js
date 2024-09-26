

// Get references to the DOM elements
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatBox = document.getElementById('chatBox');

// Retrieve chat messages from localStorage when the page loads
window.onload = function() {
    const chats = JSON.parse(localStorage.getItem('chats')) || [];
    displaymsg(chats);
};

// Handle form submission (adding a new message)
chatForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const chatMessage = chatInput.value.trim();
    if (chatMessage === "") return; // Prevent empty messages

    // Retrieve the username from localStorage
    const username = localStorage.getItem('username') || 'Anonymous';

    // Get chats from localStorage
    const chats = JSON.parse(localStorage.getItem('chats')) || [];
    chats.push({ user: username, message: chatMessage });

    // Save data
    localStorage.setItem('chats', JSON.stringify(chats));

    // Display the updated chat messages
    displaymsg(chats);

    // Clear the input field after submission
    chatInput.value = "";
});

// Function to display chat messages in the chatBox
function displaymsg(chats) {
    chatBox.innerHTML = ""; // Clear the chatBox
    chats.forEach(chat => {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = `<strong>${chat.user}:</strong> ${chat.message}`;
        chatBox.appendChild(messageElement);
    });
}


