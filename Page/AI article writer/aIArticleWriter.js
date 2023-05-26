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
const divSomeKeyWords = document.querySelector(".someKeyWords");

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
const selectKeywords = document.querySelectorAll(".divAllKeyWords ul li");
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
        if (divSomeKeyWords.childElementCount > 0 && numDiv < 4) {
            numDiv++;
            showDivStep();
        }
    });
});

function showDivStep() {
    const pStepNum = document.querySelectorAll(".stepNum");
    pStepNum.forEach((stepNum) => {
        if(stepNum.textContent<=numDiv){
            stepNum.parentElement.classList.add("active")
        }
    });
}
