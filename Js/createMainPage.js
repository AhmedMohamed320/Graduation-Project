const containerPage = document.querySelector(".container");
const mainPage = document.querySelector(".sec-home");

// nav ----------------------------------
const createNav = document.createElement("nav");
createNav.innerHTML = `
<a href="../../../index.html">
    <img
    class="logo"
    src="../../images/feather ai logo.svg"
    alt="logo feather.ai"
    />
</a>

<button>
    <a>
        <img src="../../images/Icon copy.svg" alt="copy" />
        <p>create copy</p>
    </a>
</button>
<button>
    <a href="../Saved Copies/savedCopies.html">
        <img src="../../images/Icon saved.svg" alt="save" />
        <p>save copies</p>
    </a>
</button>
<div class="info">
    <img
        id="notification"
        src="../../images/Icon bing.svg"
        alt="bing"
    />
    <span></span>
    <div class="img">
        <img
            src="../../images/3425.jpg"
            alt="My personal photo"
        />
    </div>
    <ion-icon
        name="chevron-down-outline"
        id="btnProfileInfo"
    ></ion-icon>
    <div class="profile-info" id="profile-info">
        <div class="my-data">
            <div class="img">
                <img
                src="../../images/3425.jpg"
                alt="my personal photo"
                />
            </div>
            <p>
                kirolos adel

                <br />
                <span> keroadel5@gmail.com </span>
            </p>
        </div>
        <ul>
            <li>
                <img
                    src="../../images/Icon language-2.svg"
                    alt="language icon"
                />
                <p>languages</p>
            </li>
            <li>
                <img
                    src="../../images/Icon person.svg"
                    alt="person icon"
                />
                <p>profile details</p>
            </li>
            <li>
                <img
                    src="../../images/Icon people.svg"
                    alt="people icon"
                />
                <p>team</p>
            </li>
            <li>
                <img
                    src="../../images/Icon Ask.svg"
                    alt="asking icon"
                />
                <p>ask the community</p>
            </li>
            <span class="hr"></span>
            <li>
                <img
                    src="../../images/Icon help.svg"
                    alt="helping icon"
                />
                <p>help center</p>
            </li>
            <li>
                <a href="#">
                    <img
                        src="../../images/Icon log out.svg"
                        alt="log out icon"
                    />
                    <p>log out</p>
                </a>
                
            </li>
        </ul>
    </div>
</div>
`;
containerPage.prepend(createNav);

// aside -------------------------------

const createAside = document.createElement("aside");
createAside.setAttribute("id", "aside-nav");
createAside.innerHTML = `
<ul>
    <li id="btnToggleAside">
        <div>
            <ion-icon
                name="chevron-forward-outline"
            ></ion-icon>
        </div>
    </li>
    <li id="asideLiSearch">
        <img
            src="../../images/Icon search.svg"
            alt="search"
        />
        <input type="text" placeholder="Search" />
    </li>
    <li>
        <a href="../Dashboard/dashboard.html">
            <img
                src="../../images/Icon dashboard.svg"
                alt="dashboard"
            />
            <p>dashboard</p>
        </a>
    </li>
    <li>
        <a href="../Long form editor/Long-form-editor.html">
            <img
                src="../../images/Icon edit.svg"
                alt="long form editor"
            />
            <p>long form editor</p>
        </a>
    </li>
    <li>
        <a href="../Chat Feather/chat-feather.html">
            <img src="../../images/Icon chat.svg" alt="chat" />
            <p>chat feather</p>
        </a>
    </li>
    <li>
        <a href="../Email tools/emailTool.html">
            <img
            src="../../images/Icon email.svg"
            alt="email"
            />
            <p>email tools</p>
        </a>
    </li>
    <li>
        <a href="../Social media tool/socialMediaTool.html">
            <img src="../../images/Icon social.svg" alt="email"/>
            <p>social media tool</p>
        </a>
    </li>
    <li>
        <a href="../Saved Copies/savedCopies.html">
            <img
                src="../../images/Icon saved.svg"
                alt="saved"
            />
            <p>saved copies</p>
        </a>
    </li>
    <li>
        <a href="../Recent Activity/recentActivity.html">
            <img
                src="../../images/Icon clock.svg"
                alt="activity"
            />
            <p>recent activity</p>
        </a>
    </li>
    <li id="liTextAccount">
        <p id="textAccount">account</p>
    </li>
    <li>
        <a href="../Change Language/changeLanguage.html">
            <img
                src="../../images/Icon language.svg"
                alt="language"
            />
            <p>change language</p>
        </a>
    </li>
</ul>
`;
mainPage.prepend(createAside);

// -------------------------------
const profileInfo = document.getElementById("profile-info");
const btnProfileInfo = document.getElementById("btnProfileInfo");
const asideNav = document.getElementById("aside-nav");
const btnToggleAsideActive = document.getElementById("btnToggleAside");
const iconToggleAsideActive= document.querySelector("#btnToggleAside div");


btnProfileInfo.addEventListener("click", () => {
    profileInfo.classList.toggle("active");
});

btnToggleAsideActive.addEventListener("click", () => {
    asideNav.classList.toggle("active");
    iconToggleAsideActive.classList.toggle("active");
});

window.addEventListener("click", function (event) {
    if (event.target !== profileInfo && event.target !== btnProfileInfo) {
        profileInfo.classList.remove("active");
    }
});
// ---------------------------
const currentUrl = window.location.href;
const links = document.querySelectorAll("aside ul li a");
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const url = link.href;

    if (currentUrl === url) {
        link.parentElement.classList.add("active");
        break;
    }
}
