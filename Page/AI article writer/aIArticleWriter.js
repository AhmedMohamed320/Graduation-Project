const inputSearchKeywords = document.querySelector(".inputSearchKeywords");
const btnSearchKeywords = document.querySelector(".btnSearchKeywords");

inputSearchKeywords.addEventListener("input", function () {
    if (inputSearchKeywords.value != "") {
        btnSearchKeywords.classList.add("valid");
    } else {
        btnSearchKeywords.classList.remove("valid");
    }
});

const inputAddTag = document.querySelector(".inputAddTag");
const btnNext = document.querySelector(".complete-the-fields .btnNext");
const divSomeKeyWords = document.querySelector(".complete-the-fields.one .someKeyWords");

inputAddTag.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        const value = inputAddTag.value.trim();
        if (value !== "") {
            const div = document.createElement("div");
            div.innerHTML = `
                <p>${inputAddTag.value}</p>
                <ion-icon
                    name="close-outline"
                    class="deleteKey"
                ></ion-icon>
            `;
            const iconDeleteKey = div.querySelector(".deleteKey");
            iconDeleteKey.addEventListener("click", () => {
                div.remove();
            });
            divSomeKeyWords.appendChild(div);
            inputAddTag.value = "";
        }
    }
    if (divSomeKeyWords.childElementCount > 0) {
        btnNext.classList.add("valid");
    } else {
        btnNext.classList.remove("valid");
    }
});
btnNext.addEventListener("click", (e) => {
    e.preventDefault();
});
// --------------------

const divEmpty = document.querySelector(".part-2-2 .empty");
const divAllKeyWords = document.querySelector(".divAllKeyWords");
btnSearchKeywords.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputSearchKeywords.value != "") {
        divEmpty.style.display = "none";
        divAllKeyWords.style.display = "block";
    }
});
// ---------------------
const selectKeywords = document.querySelectorAll(
    ".divAllKeyWords ul li,.AllIdeas ul li,.AllOutline ul li"
);
selectKeywords.forEach((li) => {
    li.addEventListener("click", () => {
        li.classList.toggle("active");
    });
});
// -------------------
let numDiv = 1;

const allBtnNext = document.querySelectorAll(".btnNext");
allBtnNext.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (numDiv === 1 && divSomeKeyWords.childElementCount > 0) {
            numDiv++;
            showDivStep();
        } 
        else if (numDiv < 4 && numDiv>1) {
            numDiv++;
            showDivStep();
        }
    });
});

const allBtnBack = document.querySelectorAll(".btnBack");
allBtnBack.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (numDiv <= 4) {
            numDiv--;
            showDivStep();
        }
    });
});

const allDivOfSteps = document.querySelectorAll(".complete-the-fields");
function showDivStep() {
    const pStepNum = document.querySelectorAll(".stepNum");
    pStepNum.forEach((stepNum) => {
        if (stepNum.textContent <= numDiv) {
            stepNum.parentElement.classList.add("active");
        } else {
            stepNum.parentElement.classList.remove("active");
        }
    });
    if (numDiv === 1) {
        hideAllDivOfSteps();
        const activeStepOne = document.querySelector(
            ".complete-the-fields.one"
        );
        activeStepOne.style.display = "flex";
    } else if (numDiv === 2) {
        hideAllDivOfMainContent();
        hideAllDivOfSteps();
        divEmpty.style.display = "flex";
        const activeStepTwo = document.querySelector(
            ".complete-the-fields.two"
        );
        activeStepTwo.style.display = "flex";
    } else if (numDiv === 3) {
        hideAllDivOfMainContent();
        hideAllDivOfSteps();
        divEmpty.style.display = "flex";
        const activeStepThree = document.querySelector(
            ".complete-the-fields.three"
        );
        activeStepThree.style.display = "flex";
    } else if (numDiv === 4) {
        hideAllDivOfMainContent();
        hideAllDivOfSteps();
        divEmpty.style.display = "flex";
        const activeStepFour = document.querySelector(
            ".complete-the-fields.four"
        );
        activeStepFour.style.display = "flex";
    }

}
showDivStep();
function hideAllDivOfSteps() {
    allDivOfSteps.forEach((div) => {
        div.style.display = "none";
    });
}
// --------------------
function hideAllDivOfMainContent() {
    const AllDivInPart_2 = document.querySelectorAll(".part-2-2>div");
    AllDivInPart_2.forEach((div) => {
        div.style.display = "none";
    });
}

const btnGenerateIdeas = document.querySelector(".GenerateIdeas");
btnGenerateIdeas.addEventListener("click", () => {
    hideAllDivOfMainContent();
    const DivAllIdeas = document.querySelector(".AllIdeas");
    DivAllIdeas.style.display = "block";
});
// --------------------

const btnGenerateOutline = document.querySelector(".GenerateOutline");
btnGenerateOutline.addEventListener("click", function () {
    hideAllDivOfMainContent();
    const divAllOutline = document.querySelector(".AllOutline");
    divAllOutline.style.display = "block";
});
// ----------------------
const btnGenerateArticle = document.querySelector(".GenerateArticle");
btnGenerateArticle.addEventListener("click", () => {
    hideAllDivOfMainContent();
    const DivEndArt = document.querySelector(".endArt");
    DivEndArt.style.display = "block";
});
// ----------------------
const addTalkingPoint = document.querySelectorAll(".addTalkingPoint");
addTalkingPoint.forEach((inputAdd) => {
    inputAdd.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            const point = document.createElement("div");
            point.classList.add("oneArt");
            point.innerHTML = `
                <img
                src="../../images/enable to darg and drop.svg"
                alt=""
                />
                <p>${inputAdd.value}</p>
    `;
            inputAdd.parentNode.insertBefore(
                point,
                inputAdd.parentNode.lastElementChild
            );
            point.setAttribute("draggable", true);
            inputAdd.value = "";
        }
    });
});

// function HeadArtOutline() {
//     const firstDivOutline = document.querySelectorAll(
//         ".up>.oneArt:nth-of-type(1)"
//     );
//     const img = document.createElement("div");
//     img.classList.add("img");
//     img.innerHTML = `
//         <ion-icon
//         name="checkmark-outline"
//         ></ion-icon>
//     `;
//     firstDivOutline.forEach((div) => {
//         div.insertBefore(img, div.firstElementChild.nextSibling);
//     });
// }

// HeadArtOutline();

var allCols = document.querySelectorAll(".Article-Outline .up");
var items = document.querySelectorAll(".oneArt");
items.forEach(function (element) {
    element.setAttribute("draggable", "true");
});

let drag = null;
items.forEach((column) => {
    column.addEventListener("dragstart", () => {
        drag = column;
        column.style.opacity = 0.5;
    });

    column.addEventListener("dragend", () => {
        drag = null;
        column.style.opacity = 1;
    });

    allCols.forEach((col) => {
        col.addEventListener("dragover", function (e) {
            if (drag && !drag.classList.contains("up")) {
                e.preventDefault();
            }
        });
        col.addEventListener("dragleave", function () {
            this.style.background = "none";
        });
        col.addEventListener("drop", function (e) {
            if (drag && !drag.classList.contains("up")) {
                e.preventDefault();
                this.insertBefore(drag, this.children[0]);
                this.style.background = "none";
            }
        });
    });
});
