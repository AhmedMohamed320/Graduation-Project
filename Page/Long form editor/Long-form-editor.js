let blockClassType = "paragraphStyle";

function formatDoc(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

function addLink() {
    const url = prompt("Insert url");
    formatDoc("createLink", url);
}

const content = document.getElementById("content");

content.addEventListener("mouseenter", function () {
    const a = content.querySelectorAll("a");
    a.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            content.setAttribute("contenteditable", false);
            item.target = "_blank";
        });
        item.addEventListener("mouseleave", function () {
            content.setAttribute("contenteditable", true);
        });
    });
});

// -------------------------------------
const divAskFeather = document.querySelector(".askFeather");
const mainInput = document.querySelector("#mainInput");
const inputDraftWithAi = document.getElementById("inputDraftWithAi");
const selectOptions = document.querySelectorAll(".select .option");
const divStepOne = document.querySelector(".step1");
const divStepTwo = document.querySelector(".step2");
const optionReload = document.querySelector(".reload");
const optionClose = document.querySelector(".close");

const headP = document.querySelector(".heading");
selectOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const optionValue = option.querySelector("p").textContent.trim();
        inputDraftWithAi.value = optionValue;
    });
});

inputDraftWithAi.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        createBlock(inputDraftWithAi.value, blockClassType);
        inputDraftWithAi.placeholder = "Tell Al what to do next...";
        divStepOne.style.display = "none";
        divStepTwo.style.display = "flex";
        inputDraftWithAi.value = "";
    }
});

// optionReload.addEventListener("click", () => {
//     location.reload();
// });

optionClose.addEventListener("click", () => {
    divAskFeather.style.display = "none";
    inputDraftWithAi.placeholder = "Ask Feather.Al to write anything...";
    divStepTwo.style.display = "none";
    divStepOne.style.display = "flex";
    inputDraftWithAi.value = "";
});

// --------------------------------
const optionH1 = document.querySelector(".commandsOption .h1");
const optionH2 = document.querySelector(".commandsOption .h2");
const optionH3 = document.querySelector(".commandsOption .h3");
const optionParagraph = document.querySelector(".commandsOption .paragraph");
const optionBullet = document.querySelector(".commandsOption .bullet-list");
const optionAskAi = document.querySelector(".commandsOption .askAi");
const divCommandsOption = document.querySelector(".commandsOption");

mainInput.addEventListener("keydown", function (event) {
    divAskFeather.style.display = "none";
    if (event.key === "/") {
        divCommandsOption.style.display = "block";
        optionH1.addEventListener("click", () => {
            blockClassType = "h1Style";
            hideDivCommandsOption();
        });
        optionH2.addEventListener("click", () => {
            blockClassType = "h2Style";
            hideDivCommandsOption();
        });
        optionH3.addEventListener("click", () => {
            blockClassType = "h3Style";
            hideDivCommandsOption();
        });
        optionParagraph.addEventListener("click", () => {
            blockClassType = "paragraphStyle";
            hideDivCommandsOption();
        });
        optionBullet.addEventListener("click", () => {
            blockClassType = "listStyle";
            hideDivCommandsOption();
        });
        optionAskAi.addEventListener("click", () => {
            hideDivCommandsOption();
            divAskFeather.style.display = "block";
        });
    } else if (event.key === "Enter") {
        createBlock(mainInput.value, blockClassType);
        blockClassType = "paragraphStyle";
        mainInput.setAttribute("class", `${blockClassType}`);
        mainInput.value = "";
    } else {
        divCommandsOption.style.display = "none";
    }
    // else if (event.key != "ArrowUp" && event.key != "ArrowDown") {
    //     divCommandsOption.style.display = "none";
    // }
});

function hideDivCommandsOption() {
    divCommandsOption.style.display = "none";
    mainInput.focus();
    mainInput.setAttribute("class", `${blockClassType}`);
}

// function deleteSlash() {
//     const inputValue = mainInput.value;
//     const modifiedValue = inputValue.slice(0, -1);
//     mainInput.value = modifiedValue;
// }

function createBlock(value, classType) {
    const block = document.createElement("div");
    block.setAttribute("class", `newBlock ${classType}`);
    block.innerHTML = `
    <img src="../../images/enable to darg and drop.svg"/>
    <ion-icon name="radio-button-on-outline"></ion-icon>
    <p>${value}</p>
    `;

    content.appendChild(block);
    dragAndDrop();
}

// ---------------

// const myList = document.querySelector(".commandsOption ul");
// const listItems = myList.querySelectorAll("li");
// let focusedIndex = -1;

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowUp") {
//         focusedIndex = Math.max(focusedIndex - 1, 0);
//         updateFocus();
//         event.preventDefault();
//     } else if (event.key === "ArrowDown") {
//         focusedIndex = Math.min(focusedIndex + 1, listItems.length - 1);
//         updateFocus();
//         event.preventDefault();
//     // }else if (event.key === 'Enter' && focusedIndex !== -1) {

//     //   }
// });

// function updateFocus() {
//     listItems.forEach((item, index) => {
//         if (index === focusedIndex) {
//             item.classList.add("focused");
//         } else {
//             item.classList.remove("focused");
//         }
//     });
// }

// myList.addEventListener("mouseover", function (event) {
//     const target = event.target;
//     if (target.tagName === "LI") {
//         focusedIndex = Array.from(listItems).indexOf(target);
//         updateFocus();
//     }
// });

// updateFocus();

// -----------------------
function dragAndDrop() {
    const allCols = document.querySelector("#content");
    let items = document.querySelectorAll(".newBlock");
    items.forEach(function (element) {
        element.draggable = true;
    });

    let drag = null;
    items.forEach((column) => {
        column.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
            drag = column;
            column.style.opacity = 0.5;
        });

        column.addEventListener("dragend", () => {
            drag = null;
            column.style.opacity = 1;
        });

        allCols.addEventListener("dragover", function (e) {
            if (
                drag &&
                !drag.classList.contains("upContent") &&
                this.classList.contains(drag.closest(".upContent").classList)
            ) {
                e.preventDefault();
            }
        });
        allCols.addEventListener("dragleave", function () {
            this.style.background = "none";
        });
        allCols.addEventListener("drop", function (e) {
            if (
                drag &&
                !drag.classList.contains("upContent") &&
                this.classList.contains(drag.closest(".upContent").classList)
            ) {
                e.preventDefault();
                this.insertBefore(drag, e.target);
                this.style.background = "none";
            }
        });
    });
}

// if (event.keyCode === 27) {
//     divAskFeather.style.display = "none";
// }
