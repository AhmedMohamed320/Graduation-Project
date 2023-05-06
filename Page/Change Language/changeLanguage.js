const divWelcome = document.querySelector(".welcome");
const divSomePrompts = document.querySelector(".some-prompts");
const InputChat = document.querySelector(".input-chat input");
const divChatWithAi = document.querySelector(".chat-with-ai");
const sentMessage = document.querySelector(".sent");
const inputChat = document.getElementById("inputChat");

InputChat.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        createChatAi();
    }
});

sentMessage.addEventListener("click", function () {
    createChatAi();
});

function createChatAi() {
    const valueInputChat = inputChat.value;
    if (isValid(valueInputChat)) {
        divWelcome.style.display = "none";
        divSomePrompts.style.display = "none";
        divChatWithAi.style.display = "flex";
        writeMessage();
        setTimeout(autoReply, 1000);
    }
}

function isValid(value) {
    return value.length > 0;
}

function writeMessage() {
    let message = `
    <div class="message me">
        <div class="img">
            <img src="" alt="">
        </div>
        <div class="text">
            <p>
                ${inputChat.value}
            </p>
        </div>
    </div>
	`;
    divChatWithAi.insertAdjacentHTML("beforeend", message);
    inputChat.focus();
    inputChat.value = "";
    scrollBottom();
}

function autoReply() {
    let message = `
    <div class="message ai">
        <div class="img">
            <img
                src="../../images/robot.svg"
                alt=""
            />
        </div>
        <div class="text">
            <p id="ai-text">
            Thank you for your awesome support!
            </p>
            <div class="copy">
                <ion-icon
                    name="copy-outline"
                ></ion-icon>
            </div>
        </div>
    </div>
	`;
    divChatWithAi.insertAdjacentHTML("beforeend", message);
    scrollBottom();
    const btnCopy = document.querySelector(".copy");
    btnCopy.addEventListener("click", () => {
        let text = document.querySelector("#ai-text").innerText;
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    });
}

function scrollBottom() {
    divChatWithAi.scrollTo(0, divChatWithAi.scrollHeight);
}