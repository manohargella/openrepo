// Get references to DOM elements
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');

// Array to store chat messages
const messages = [];

// Function to display messages
function displayMessages() {
  chatMessages.innerHTML = messages.map(({ user, message }) => `<p><strong>${user}:</strong> ${message}</p>`).join('');
}

// Function to handle message sending
function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== '') {
    const user = 'User'; // You can prompt for user's name here or implement a login system
    messages.push({ user, message });
    messageInput.value = '';
    displayMessages();
  }
}

// Event listener for Send button click
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key press in the input field
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Display initial messages
displayMessages();
