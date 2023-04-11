const divWelcome=document.querySelector(".welcome");
const divSomePrompts=document.querySelector(".some-prompts");
const InputChat=document.querySelector(".input-chat input");
const divChatWithAi=document.querySelector(".chat-with-ai");

InputChat.addEventListener('keydown', function(event) {
    if (event.key === 'Enter')
    {
        divWelcome.style.display="none";
        divSomePrompts.style.display="none";
        divChatWithAi.style.display="flex"; 
    }
})


