const divWelcome = document.querySelector(".welcome");
const divSomePrompts = document.querySelector(".some-prompts");
const inputChat = document.querySelector(".input-chat #inputChat");
const divChatWithAi = document.querySelector(".chat-with-ai");
const sentMessage = document.querySelector(".sent");

inputChat.focus();

inputChat.addEventListener("keydown", function (event) {
    if (event.shiftKey && key === 13) {
        inputChat.value += "\n";
        event.preventDefault();
    } else if (event.key === "Enter") {
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
    const formattedCode = inputChat.value
        .trim()
        .replace(/\n/g, "<br>")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    let message = `
    <div class="message me">
        <div class="img">
            <img src="" alt="">
        </div>
        <div class="text">
            <code>
                ${formattedCode}
            </code>
        </div>
    </div>
	`;

    divChatWithAi.insertAdjacentHTML("beforeend", message);
    inputChat.focus();
    inputChat.value = " ";
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
            <code id="ai-text">
            Thank you for your awesome support!
            </code>
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
    const btnCopy = document.querySelectorAll(".copy");
    btnCopy.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const text = event.target.parentNode.parentNode
                .querySelector("#ai-text")
                .textContent.trim();
            navigator.clipboard.writeText(text);
        });
    });
}

function scrollBottom() {
    divChatWithAi.scrollTo(0, divChatWithAi.scrollHeight);
}

// ---------------
const paragraphFeatures = document.querySelectorAll(
    ".some-features .feature > div:nth-of-type(2)"
);

paragraphFeatures.forEach((div) => {
    div.addEventListener("click", () => {
        const text = div.querySelector("p").innerText;
        inputChat.value = text;
    });
});
// ---------------

const recordButton = document.getElementById("mic");
const recognition = new window.webkitSpeechRecognition();
let isRecording = false;

recognition.continuous = true;

recordButton.addEventListener("click", () => {
    if (!isRecording) {
        recognition.start();
        recordButton.src = "../../images/Icon  mic.svg";
    } else {
        recognition.stop();
        recordButton.src = "../../images/Icon  mic-2.svg";
    }
    isRecording = !isRecording;
});

recognition.addEventListener("result", (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            inputChat.value += event.results[i][0].transcript;
        }
    }
});

recognition.addEventListener("end", () => {
    if (isRecording) {
        recognition.start();
    }
});

// ------------------
inputChat.addEventListener("input", () => {
    const numberOfLines = inputChat.value.split("\n").length;
    if (numberOfLines > 5) {
        inputChat.style.height = "10rem";
        divSomePrompts.style.display = "none";
    } else {
        inputChat.style.height = "2rem";
    }
});

inputChat.addEventListener("keydown", (event) => {});
