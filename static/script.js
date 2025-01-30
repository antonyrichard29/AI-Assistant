const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatResults = document.getElementById("chat-results");
const chatHistoryList = document.getElementById("chat-history-list");
const modelSelectButton = document.getElementById("model-select");
let selectedModel = "gemma2:2b"; // Default model

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Handle model selection from dropdown
document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
        selectedModel = item.getAttribute("data-value");
        modelSelectButton.textContent = item.textContent.trim();
    });
});

// Send a message to the AI
function sendMessage() {
    const message = userInput.value.trim();

    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";

    const typingIndicator = appendMessage("ai", "Thinking...");
    fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: message, model: selectedModel }),
    })
        .then((response) => response.json())
        .then((data) => {
            typeWriterEffect("ai", data.response, typingIndicator);
            loadChatHistory();
        })
        .catch((error) => {
            console.error("Error fetching response:", error);
            removeTypingIndicator(typingIndicator);
            appendMessage("ai", "Error: Unable to fetch a response.");
        });
}

// Append message to the chat results
function appendMessage(type, message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type}-message`;

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = message.replace(/\n/g, "<br>");

    messageDiv.appendChild(contentDiv);
    chatResults.appendChild(messageDiv);
    chatResults.scrollTop = chatResults.scrollHeight;

    return messageDiv;
}

// Remove the typing indicator
function removeTypingIndicator(typingIndicator) {
    typingIndicator?.remove();
}

// Typewriter effect for AI responses
function typeWriterEffect(type, text, typingIndicator) {
    removeTypingIndicator(typingIndicator);
    const messageContainer = appendMessage(type, "");
    let i = 0;

    function typeCharacter() {
        if (i < text.length) {
            messageContainer.innerHTML += text[i] === "\n" ? "<br>" : text[i];
            i++;
            chatResults.scrollTop = chatResults.scrollHeight;
            setTimeout(typeCharacter, 10);
        }
    }

    typeCharacter();
}

// Load chat history
function loadChatHistory() {
    fetch("/api/history")
        .then((response) => response.json())
        .then((data) => {
            chatHistoryList.innerHTML = "";

            if (Array.isArray(data.history)) {
                data.history.forEach((chat) => {
                    if (chat.length >= 3) {
                        const item = document.createElement("li");
                        item.className = "chat-item";

                        const chatName = document.createElement("span");
                        chatName.textContent = chat[1].slice(0, 20);

                        const deleteButton = document.createElement("button");
                        deleteButton.className = "delete-button";
                        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
                        deleteButton.addEventListener("click", () => deleteChat(chat));

                        item.appendChild(chatName);
                        item.appendChild(deleteButton);
                        chatHistoryList.appendChild(item);

                        chatName.addEventListener("click", () => loadPreviousChat(chat));
                    }
                });
            }
        })
        .catch((error) => {
            console.error("Error loading chat history:", error);
        });
}

// Delete a chat
function deleteChat(chat) {
    fetch(`/api/history/delete/${chat[0]}`, { method: "DELETE" })
        .then((response) => {
            if (response.ok) loadChatHistory();
        })
        .catch((error) => console.error("Error deleting chat:", error));
}

// Load a previous chat into the chat window
function loadPreviousChat(chat) {
    chatResults.innerHTML = "";
    appendMessage("user", chat[1]);
    appendMessage("ai", chat[2]);
}

// Initial load of chat history
loadChatHistory();
