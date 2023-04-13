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
    scrollBottom()
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
            <p>
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
    scrollBottom()
}

function scrollBottom() {
	divChatWithAi.scrollTo(0, divChatWithAi.scrollHeight)
}

// // MESSAGE INPUT
// const textarea = document.querySelector(".chatbox-message-input");
// const chatboxForm = document.querySelector(".chatbox-message-form");

// textarea.addEventListener("input", function () {
//     let line = textarea.value.split("\n").length;

//     if (textarea.rows < 6 || line < 6) {
//         textarea.rows = line;
//     }

//     if (textarea.rows > 1) {
//         chatboxForm.style.alignItems = "flex-end";
//     } else {
//         chatboxForm.style.alignItems = "center";
//     }
// });

// // TOGGLE CHATBOX
// const chatboxToggle = document.querySelector(".chatbox-toggle");
// const chatboxMessage = document.querySelector(".chatbox-message-wrapper");

// chatboxToggle.addEventListener("click", function () {
//     chatboxMessage.classList.toggle("show");
// });

// // DROPDOWN TOGGLE
// const dropdownToggle = document.querySelector(
//     ".chatbox-message-dropdown-toggle"
// );
// const dropdownMenu = document.querySelector(".chatbox-message-dropdown-menu");

// dropdownToggle.addEventListener("click", function () {
//     dropdownMenu.classList.toggle("show");
// });

// document.addEventListener("click", function (e) {
//     if (
//         !e.target.matches(
//             ".chatbox-message-dropdown, .chatbox-message-dropdown *"
//         )
//     ) {
//         dropdownMenu.classList.remove("show");
//     }
// });

// // CHATBOX MESSAGE
// const chatboxMessageWrapper = document.querySelector(
//     ".chatbox-message-content"
// );
// const chatboxNoMessage = document.querySelector(".chatbox-message-no-message");

// chatboxForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     if (isValid(textarea.value)) {
//         writeMessage();
//         setTimeout(autoReply, 1000);
//     }
// });

// function addZero(num) {
//     return num < 10 ? "0" + num : num;
// }

// function writeMessage() {
//     const today = new Date();
//     let message = `
// 		<div class="chatbox-message-item sent">
// 			<span class="chatbox-message-item-text">
// 				${textarea.value.trim().replace(/\n/g, "<br>\n")}
// 			</span>
// 			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(
//         today.getMinutes()
//     )}</span>
// 		</div>
// 	`;
//     chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
//     chatboxForm.style.alignItems = "center";
//     textarea.rows = 1;
//     textarea.focus();
//     textarea.value = "";
//     chatboxNoMessage.style.display = "none";
//     scrollBottom();
// }

// function autoReply() {
//     const today = new Date();
//     let message = `
// 		<div class="chatbox-message-item received">
// 			<span class="chatbox-message-item-text">
// 				Thank you for your awesome support!
// 			</span>
// 			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(
//         today.getMinutes()
//     )}</span>
// 		</div>
// 	`;
//     chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
//     scrollBottom();
// }

// function scrollBottom() {
//     chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
// }

// function isValid(value) {
//     let text = value.replace(/\n/g, "");
//     text = text.replace(/\s/g, "");

//     return text.length > 0;
// }
