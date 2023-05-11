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

const filename = document.getElementById("filename");

function fileHandle(value) {
    if (value === "new") {
        content.innerHTML = "";
        filename.value = "untitled";
    } else if (value === "txt") {
        const blob = new Blob([content.innerText]);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${filename.value}.txt`;
        link.click();
    } else if (value === "pdf") {
        html2pdf(content).save(filename.value);
    }
}

// -------------------------------------
const divAskFeather=document.querySelector(".askFeather");
const InputPressSpace=document.querySelector("#pressSpace");
const inputDraftWithAi = document.getElementById("inputDraftWithAi");
const selectOptions = document.querySelectorAll(".select .option");
const divStepOne=document.querySelector(".step1");
const divStepTwo=document.querySelector(".step2");
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
        content.innerText = "";
        headP.textContent = inputDraftWithAi.value;
        inputDraftWithAi.value = "Tell Al what to do next...";
        divStepOne.style.display="none";
        divStepTwo.style.display="flex";
        InputPressSpace.style.display="none";
    }
});

optionReload.addEventListener("click", ()=>{
    location.reload();
})

optionClose.addEventListener("click", ()=>{
    divAskFeather.style.display="none";
})

InputPressSpace.addEventListener("keydown", function (event) {
    if (event.code !== "Space") {
        event.preventDefault();
    }
    else{
        divAskFeather.style.display = "flex";
    }
});
