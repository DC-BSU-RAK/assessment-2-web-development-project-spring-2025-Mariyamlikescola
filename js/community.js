 const form = document.getElementById('chatForm');
  const chatBox = document.getElementById('chatBox');

  // Loading existing messages
  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('residentEvilChat')) || [];
    chatBox.innerHTML = '';
    messages.forEach(msg => {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'chat-message';
      msgDiv.innerHTML = `<strong>${msg.name}:</strong> ${msg.text}`;
      chatBox.appendChild(msgDiv);
    });
  }

  // Submitting a new message
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('username').value.trim();
    const text = document.getElementById('message').value.trim();
    if (!name || !text) return;

    const newMsg = { name, text };
    const messages = JSON.parse(localStorage.getItem('residentEvilChat')) || [];
    messages.push(newMsg);
    localStorage.setItem('residentEvilChat', JSON.stringify(messages));

    form.reset();
    loadMessages();
  });
  loadMessages();
