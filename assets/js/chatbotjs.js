const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatBotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_Key = "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";
const inputIniHeight = chatInput.scrollHeight; // Initial height of the input field

const createChatLi = (message, className) => {
    // Create a new list item for the chat message
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_Key}`
        },
        body: JSON.stringify({
            model: "gpt-4.1",
            messages: [{ role: "user", content: "this is a website and business (Schooler), our contact mobile phone +966566713813, we provide a website and mobile applications along with payment integration solutions, so just act like a real chatbot and respond to this next, " + userMessage +"?"}],
            max_tokens: 800,
            temperature: 0.7
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
        //console.log("Response is: ", data);
    }).catch(err => {
        messageElement.textContent = "Ooops, Unable to get response by now, try again later";
        messageElement.classList.add("error");
        //console.error("Error:", err);
    }).finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));

}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = ""; // Clear the input field
    chatInput.style.height = `${inputIniHeight}px`; 

    //append user message to chat box
    chatBox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        const incomingChatLi = createChatLi("Typing...", "incoming");
        chatBox.appendChild(incomingChatLi);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        generateResponse(incomingChatLi);
    }, 500);
};

// Event listeners for chat input and buttons
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputIniHeight}px`; // Reset height
    chatInput.style.height = `${chatInput.scrollHeight}px`; // Set height to scroll height
});

chatInput.addEventListener("keydown", (event) => {
    if (chatInput.value.trim() && event.key === "Enter" && !event.shiftkey) {
        event.preventDefault(); // Prevent default Enter key behavior
        handleChat();
    }
});

chatbotToggler.addEventListener("click", () => document.getElementById("chatToggler").classList.toggle("show-chatbot"));
chatBotCloseBtn.addEventListener("click", () => document.getElementById("chatToggler").classList.remove("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat);
