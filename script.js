function sendMessage() {
  const input = document.getElementById('message-input');
  const chatBox = document.getElementById('chat-box');
  const message = input.value.trim();

  if (message === '') return;

  addMessage(message, 'sent');
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot reply after 1 second
  setTimeout(() => {
    const botReply = getBotReply(message);
    addMessage(botReply, 'received');
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

function addMessage(text, type) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.innerHTML = `${text}<div class="timestamp">${getTime()}</div>`;
  chatBox.appendChild(messageDiv);
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getBotReply(userMsg) {
  const msg = userMsg.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) return "Hi there! 👋";
  if (msg.includes("how are you")) return "I'm just a bot, but I'm doing great! 😊";
  if (msg.includes("bye")) return "Goodbye! 👋";
  return "I'm not sure how to respond to that 🤖";
}

// 🌙 Toggle Dark Mode
document.getElementById('mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
