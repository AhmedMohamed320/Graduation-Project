const divFeatures = document.querySelector(".features");
const arrOfAllTemplates = [
    {
        img: "../../images/aiArticle.svg",
        heading: "ai article writer",
        text: `A chatbot like ChatGPT but with
        real-time data, images & voice search.`,
        link: "../AI article writer/aIArticleWriter.html",
    },
    {
        img: "../../images/blog ideas.svg",
        heading: "blog ideas",
        text: `Brainstorm topics for blog articles.`,
    },
    {
        img: "../../images/paragraph writer.svg",
        heading: "paragraph writer",
        text: `Write short, punchy paragraphs that turn your readers into customers.`,
    },
    {
        img: "../../images/ai article outlines.svg",
        heading: "ai article outlines",
        text: `Detailed article outlines that help you write better content on a consistent basis.`,
    },
    {
        img: "../../images/product descriptions.svg",
        heading: "product descriptions",
        text: `Detailed article outlines that help you write better content on a consistent basis.`,
    },
    {
        img: "../../images/facebook.svg",
        heading: "facebook ads",
        text: `Facebook ad copies that make
        your ads truly stand out.`,
    },
    {
        img: "../../images/content rephase.svg",
        heading: "content rephrase",
        text: `Detailed article outlines that help you write better content on a consistent basis.`,
    },
    {
        img: "../../images/product descriptions.svg",
        heading: "product descriptions",
        text: `Authentic product descriptions that will compel, inspire, and influence.`,
    },
    {
        img: "../../images/blog ideas-2.svg",
        heading: "blog ideas",
        text: `Brainstorm topics for blog articles.`,
    },
];

arrOfAllTemplates.forEach((templates) => {
    const divTemplates = `
    <div>
        <a href="${templates.link}">
            <div class="part-1">
                <div class="icon">
                    <img
                        src="${templates.img}"
                        alt=""
                    />
                </div>
                <div class="text">
                    <p>${templates.heading}</p>
                    <p>
                        ${templates.text}
                    </p>
                </div>
        </a>
                <div class="fav" title="add to book mark">
                    <ion-icon name="star-outline"></ion-icon>
                </div>
            </div>
    </div>
    `;

    // <div class="state">
    //     <ion-icon name="star-sharp"></ion-icon>
    //     <p>new</p>
    // </div>

    divFeatures.insertAdjacentHTML("beforeend", divTemplates);
});

const btnStart = document.querySelectorAll(".fav");
btnStart.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

// ---------------------------

const templateTypes = document.querySelector(".templates-types");
let isDown = false;
let startX;
let scrollLeft;

templateTypes.addEventListener("mousedown", (event) => {
    isDown = true;
    startX = event.pageX - templateTypes.offsetLeft;
    scrollLeft = templateTypes.scrollLeft;
});

templateTypes.addEventListener("mouseleave", () => {
    isDown = false;
});

templateTypes.addEventListener("mouseup", () => {
    isDown = false;
});

templateTypes.addEventListener("mousemove", (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - templateTypes.offsetLeft;
    const walk = (x - startX);
    templateTypes.scrollLeft = scrollLeft - walk;
});
