const profileInfo = document.getElementById("profile-info");
const btnProfileInfo = document.getElementById("btnProfileInfo");
const asideNav = document.getElementById("aside-nav");
const btnToggleAsideActive = document.getElementById("btnToggleAside");

btnProfileInfo.addEventListener("click", () => {
    profileInfo.classList.toggle("active");
});

function toggleIconAsideNav() {
    // const close=`
    // <div>
    //     <ion-icon
    //         name="chevron-forward-outline"
    //     ></ion-icon>
    // </div>
    // `;

    // const open=`
    // <div>
    //     <ion-icon name="chevron-back-outline"></ion-icon>
    // </div>
    // `;
    // btnToggleAsideActive.innerHTML="";
    // btnToggleAsideActive.innerHTML= open;

    // if (asideNav.classList.contains("active")) {
    //     btnToggleAsideActive.appendChild(open);
    // }
}
btnToggleAsideActive.addEventListener("click", () => {
    asideNav.classList.toggle("active");
    toggleIconAsideNav();
});

window.addEventListener("click", function (event) {
    if (event.target !== profileInfo && event.target !== btnProfileInfo) {
        profileInfo.classList.remove("active");
    }
});
