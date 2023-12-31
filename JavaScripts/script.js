let button = document.getElementsByClassName('ResponsiveMoreLinks')[0];
let buttonicon = document.getElementsByClassName('ResponsiveMoreLinks')[0].innerHTML = 'More <i class="fa-solid fa-caret-down"></i>';
// let buttonicon = document.getElementsByClassName('ResponsiveMoreLinks')[0].childNodes[1].innerHTML = '<i class="fa-solid fa-caret-down"></i>';
// console.log(buttonicon)
let ResponsiveNavbar = document.getElementsByClassName('NavtionLinks')[0];
let searchBox = document.getElementsByClassName('SearchInputsBox')[0];
let allsubNavbar = document.getElementsByClassName('cource-navbar-container')[0]

button.addEventListener("click", function () {
    ResponsiveNavbar.classList.toggle("Responsive_NavtionLinks");
    allsubNavbar.classList.toggle("allnavBarMain")
})

let Tutorials = document.getElementsByClassName("Tutorials")[0];
let ResponsiveCourceNavbar = document.getElementsByClassName("courcesLinks")[0];
let ResponsiveBackbtn = document.getElementsByClassName("cource-Links-ReponsiveChild")[0];

Tutorials.addEventListener("click", function () {
    ResponsiveCourceNavbar.classList.toggle("ShowCourceNavbar")
})

ResponsiveBackbtn.addEventListener("click", function () {
    ResponsiveCourceNavbar.style.visibility = "hidden";
    ResponsiveBackbtn.style.display = "none";
})

let backgroundMode = document.getElementById("DaynightModeBtn");
let bodyBg = document.body;

backgroundMode.addEventListener('click', function () {
    bodyBg.classList.toggle("dark-mode")
})

function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('.loading-progress-bar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);

setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1000);

let availableKeyWords = [
    "<a href='html-home.html'>" + "HTML Tutorial" + "</a>",
    "<a href='..//htmls/CSS-home.html'>" + "CSS Tutorial" + "</a>",
    "<a href='cources.html'>" + "Free Courses" + "</a>",
    "<a href='blog.html'>" + "Projects" + "</a>",
    "<a href='notes.html'>" + "Notes" + "</a>",
    "<a href='contact.html'>" + "Contact" + "</a>",
    "<a href='workWithUs.html'>" + "WorkWithUs" + "</a>",
    "<a href='index.html'>" + "Home" + "</a>",
    "<a href='login.html'>" + "Login" + "</a>",
    "<a href='..//Program Notes/CSS_Complete_Notes.pdf'>" + "CSS Note" + "</a>",
    "<a href='..//Program Notes/HTML_Complete_Notes.pdf'>" + "HTML Note" + "</a>",
    "<a href='..//Program Notes/JS All in One Notes.pdf'>" + "JavaScript Note" + "</a>",
    "<a href='..//Program Notes/DSA_CompleteNotes.pdf'>" + "DSA Note" + "</a>",
    "<a href='..//Program Notes/Python_Complete_Notes.pdf'>" + "Python Note" + "</a>",
    "<a href='..//Program Notes/C_Complete_Notes.pdf'>" + "C Note" + "</a>",
    "<a href='..//Program Notes/Android_CompleteNotes%20(1).pdf'>" + "Android Studio Note" + "</a>",
    "<a href='..//Program Notes/Java_Complete_Notes.pdf'>" + "Java Note" + "</a>",
    "<a href='..//htmls/html-home.html'>" + "HTML Introduction" + "</a>",
    "<a href='..//htmls/html-working.html'>" + "HTML Working" + "</a>",
    "<a href='..//htmls/html-Prerequisite.html'>" + "HTML Prereuisite" + "</a>",
    "<a href='..//htmls/html-Document.html'>" + "HTML Document" + "</a>",
    "<a href='..//htmls/html-Structure1.html'>" + "HTML Structure" + "</a>",
    "<a href='..//htmls/html-editor.html'>" + "HTML Editor" + "</a>",
    "<a href='..//htmls/html-ViewSource.html'>" + "HTML View Source" + "</a>",
    "<a href='..//htmls/html-basicTag.html'>" + "HTML BasicTags" + "</a>",
    "<a href='..//htmls/html-element.html'>" + "HTML Element" + "</a>",
    "<a href='..//htmls/html-VsCode.html'>" + "VsCode Installation" + "</a>",
    "<a href='..//htmls/html-LineBreak.html'>" + "HTML Line Break" + "</a>",
    "<a href='..//htmls/html-paragraph.html'>" + "HTML Paragraph Tag" + "</a>",
    "<a href='..//htmls/html-headingTag.html'>" + "HTML Heading Tag" + "</a>",
    "<a href='..//htmls/html-HorizontelLine.html'>" + "HTML Horizontel Line Tag" + "</a>",
    "<a href='..//htmls/html-skeletal-tags.html'>" + "HTML Skeletal Tags" + "</a>",
    "<a href='..//htmls/html-Preserve.html'>" + "HTML Preserve Tag" + "</a>",
    "<a href='..//htmls/html-TextTag.html'>" + "HTML Text Tags" + "</a>",
    "<a href='..//htmls/html-TextAbbreviation.html'>" + "HTML Text Abbreviation" + "</a>",
    "<a href='..//htmls/html-AcronymTag.html'>" + "HTML Acronym Tag" + "</a>",
    "<a href='..//htmls/HTML Unordered List.html'>" + "HTML Unordered List" + "</a>",
    "<a href='..//htmls/HTML ordered List.html'>" + "HTML ordered List" + "</a>",
    "<a href='..//htmls/html-htmlBlockTags.html'>" + "HTML Block Tag" + "</a>",
    "<a href='..//htmls/html-TableTag.html'>" + "HTML Table Tag" + "</a>",
    "<a href='..//htmls/html-MonospacedFont.html'>" + "HTML Monospaced Tag" + "</a>",
    "<a href='..//htmls/html-ImageTag.html'>" + "HTML Image Tag" + "</a>",
    "<a href='..//htmls/html-MoreForm.html'>" + "HTML Form Details" + "</a>",
    "<a href='..//htmls/html-QuoteTag.html'>" + "HTML Quote Tag" + "</a>",
    "<a href='..//htmls/html-LinkTag.html'>" + "HTML Anchor Tag" + "</a>",
    "<a href='..//htmls/html-LineBreak.html'>" + "HTML LinkBreak Tag" + "</a>",
    "<a href='..//htmls/html-AttributionIntroduction.html'>" + "HTML Attribution Tag" + "</a>",
    "<a href='..//htmls/html-basicTag.html'>" + "HTML Basic Tags" + "</a>",
    "<a href='..//htmls/html-BlockquoteTag.html'>" + "HTML BlockQuote Tag" + "</a>",
    "<a href='..//htmls/html-CenterTag.html'>" + "HTML Center Tag" + "</a>",
    "<a href='..//htmls/html-Comment.html'>" + "HTML Comments" + "</a>",
    "<a href='..//htmls/html-AddressText.html'>" + "HTML Address Text" + "</a>",
    "<a href='..//htmls/html-CitationTag.html'>" + "HTML Citation Tag" + "</a>",
    "<a href='..//htmls/html-CoreAttribution.html'>" + "HTML Core ATtribution Tag" + "</a>",
    "<a href='..//htmls/FormIntroduction.html'>" + "HTML Form Introduction Tag" + "</a>",
    "<a href='..//htmls/html-GenericAttributes.html'>" + "HTML Generic Attribution Tag" + "</a>",
    "<a href='..//htmls/HTML-inlineElementTag.html'>" + "HTML Inline Element" + "</a>",
    "<a href='..//htmls/html-TextAbbreviation.html'>" + "HTML Text Abbrivation" + "</a>",
    "<a href='..//htmls/html-TextDirection.html'>" + "HTML Text Direction" + "</a>",
    "<a href='..//htmls/html-TextTag.html'>" + "HTML Text Tag" + "</a>",
    "<a href='..//htmls/htmlAllListIntro.html'>" + "HTML Lists" + "</a>",
    "<a href='..//htmls/htmlBasicInformationAbbribu.html.html'>" + "HTML Attribution Introduction" + "</a>",
    "<a href='..//htmls/htmlCodeTag.html'>" + "HTML Code Tag" + "</a>",
    "<a href='..//htmls/CSS-addways.html'>" + "Ways to add css" + "</a>",
    "<a href='..//htmls/CSS-backgrounds.html'>" + "CSS backgrounds" + "</a>",
    "<a href='..//htmls/CSS-borders.html'>" + "CSS border" + "</a>",
    "<a href='..//htmls/CSS-colors.html'>" + "CSS colours" + "</a>",
    "<a href='..//htmls/CSS-Comments.html'>" + "CSS Comments" + "</a>",
    "<a href='..//htmls/CSS-firstCSSWeb.html'>" + "First CSS website" + "</a>",
    "<a href='..//htmls/CSS-fontfamily.html'>" + "CSS font family" + "</a>",
    "<a href='..//htmls/CSS-home.html'>" + "CSS Introduction" + "</a>",
    "<a href='..//htmls/CSS-Image.html'>" + "CSS Image" + "</a>",
    "<a href='..//htmls/CSS-Padding.html'>" + "CSS Padding" + "</a>",
    "<a href='..//htmls/CSS-Selectors.html'>" + "CSS Selectors" + "</a>",
    "<a href='..//htmls/CSS-TextStyling.html'>" + "CSS Text Styling" + "</a>",
    "<a href='..//htmls/CSS-Videos.html'>" + "CSS Video" + "</a>",
    "<a href='..//htmls/CSS-Working.html'>" + "CSS Working" + "</a>",
    "<a href='..//htmls/CSS-Margin.html'>" + "CSS Margin" + "</a>",
    "<a href='..//htmls/CSS-Hover.html'>" + "CSS Hover" + "</a>",
    "<a href='..//htmls/CSS-Combinators.html'>" + "CSS Combinators" + "</a>",
    "<a href='..//htmls/CSS-PseudoClasses.html'>" + "CSS Pseudo Classes" + "</a>",
    "<a href='..//htmls/CSS-buttons.html'>" + "CSS Buttons" + "</a>",
    "<a href='..//htmls/CSS-Overflow.html'>" + "CSS Overflow" + "</a>",
    "<a href='..//htmls/CSS-Float.html'>" + "CSS Float" + "</a>",
    "<a href='..//htmls/CSS-!Important.html'>" + "CSS !Important" + "</a>",
    "<a href='..//htmls/CSS-MathsFunction.html'>" + "CSS Maths Function" + "</a>",
    "<a href='..//htmls/CSS-Size.html'>" + "CSS Size" + "</a>",
    "<a href='..//htmls/CSS-Positioning.html'>" + "CSS Positioning" + "</a>",
    "<a href='..//htmls/CSS-ZIndex.html'>" + "CSS Z-Index" + "</a>",
    "<a href='..//htmls/CSS-Forms.html'>" + "CSS Forms" + "</a>",
    "<a href='..//htmls/CSS-Navigation.html'>" + "CSS Display" + "</a>",
    "<a href='..//htmls/CSS-Display.html'>" + "CSS FlexBox" + "</a>",
    "<a href='..//htmls/CSS-FlexBox.html'>" + "CSS Grid" + "</a>",
    "<a href='..//htmls/CSS-Grid.html'>" + "CSS Media Queries" + "</a>",
    "<a href='..//htmls/CSS-CSS2D.html'>" + "CSS 2D" + "</a>",
    "<a href='..//htmls/CSS-Transform.html'>" + "CSS Transform" + "</a>",
    "<a href='..//htmls/CSS-Transition.html'>" + "CSS Transition" + "</a>",
    "<a href='..//htmls/CSS-Gradients.html'>" + "CSS Color Gradients" + "</a>",
    "<a href='..//htmls/CSS-Inherit.html'>" + "CSS Inherit Value" + "</a>",
    "<a href='..//htmls/CSS-Shadows.html'>" + "CSS Shadow" + "</a>",
    "<a href='..//htmls/CSS-ToolTipText.html'>" + "CSS ToolTip" + "</a>",
    "<a href='..//htmls/Tutorials.html'>" + "Tutorails" + "</a>",
    "<a href='..//htmls/CSS-BorderImage.html'>" + "CSS Border Image" + "</a>",
    "<a href='..//htmls/CSS-Masking.html'>" + "CSS Masking" + "</a>",
    "<a href='..//htmls/CSS-Pagination.html'>" + "CSS Pagination" + "</a>",
    "<a href='..//htmls/CSS-MediaQueriesAdvance.html'>" + "CSS Advance Media Queries" + "</a>",
    "<a href='..//htmls/CSS-Animation.html'>" + "CSS Animation" + "</a>",
    "<a href='..//htmls/CSS-Questions.html'>" + "CSS Questions" + "</a>",
    
];

let resultBox = document.querySelector(".result-box");
let inputBox = document.getElementById("input-box");
let resultButton = document.getElementById("InputSearcht");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeyWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this) class='resultBoxDoc'>" + list + "</li>"
    })

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = "";
}

let analogyVideo = document.getElementsByClassName("analogyVideo")[0]
let specialExtraSizeImage = document.getElementsByClassName("specialExtraSizeImage")[0]
let htmlInnerCources = document.getElementsByClassName("innerNavitionWithManage")[0]
let himImage = document.getElementsByClassName("analogyImage");
let bodyMatter = document.getElementsByClassName("body-matter")[0];
let CloseFullImageSizeButton = document.querySelectorAll(".HimCloseFullImageSizeButton")[0];
var himImageContainer = document.querySelectorAll(".HTMLIntroanalogy");
himImageContainer.forEach(function (himImageContainer) {
    himImageContainer.addEventListener("click", function () {
        himImageContainer.classList.add("HTMLIntroanalogyFullIMage");
        CloseFullImageSizeButton.classList.add("HimCloseFullImageSizeButtonOnFullImage");
        htmlInnerCources.style.display = "none"
    });
    CloseFullImageSizeButton.addEventListener("click", function () {
        himImageContainer.classList.remove("HTMLIntroanalogyFullIMage");
        this.classList.remove("HimCloseFullImageSizeButtonOnFullImage");
        htmlInnerCources.style.display = "block";
        CloseFullImageSizeButton.style.display = "none"
    });
})

let navbarHeading = document.getElementsByClassName("navbar-heading")[0].childNodes[1]
navbarHeading.innerHTML = `<a href="index.html">&lt;/&gt;CodeWithRahul</a>`

let tutorailsChnage = document.getElementsByClassName("header-Links-2")[0].childNodes[0]
tutorailsChnage.innerHTML = 'Tutorials<i class="totialBtn fa-solid fa-caret-down"></i>'

modalContent = document.getElementsByClassName("modal-content")[0]
modalContent.innerHTML = `<button type="button" class="btn-close close-signup"
style="position:absolute;top:0;right:0px;margin:10px;" data-bs-dismiss="modal"
aria-label="Close"></button>
<div class="container center" style="display:flex;width:100%;justify-content: center;margin-top:10px;">
<img width="100" style="border-radius:50px;" src="..//Images/WebPage Owner Image.jpg" alt="">
</div>
<div>
<h4 class="text-center mt-3">&lt;/&gt;CodeWithRahul</h4>
<h5 class="text-center" id="exampleModalLabel">Create an account</h5>
</div>
<div class="modal-body">
<form action="../Login/register.php" method="post">
    <div class="mb-3">
        <input type="text" name="username" class="form-control" id="recipient-name1"
            placeholder="Username" required>
    </div>
    <div class="mb-3">
        <input type="password" name="password" class="form-control" id="recipient-name2"
            placeholder="Password" required>
    </div>
    <div class="mb-3">
        <input type="password" name="confirm_password" class="form-control" id="recipient-name3"
            placeholder="Confirm Password" required>
    </div>
    <button type="submit" class="btn btn-primary">Create an account</button>
</form>
</div>`

let changeMode = document.getElementsByClassName("changeModeBtn")[0]
changeMode.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="md:hidden w-4 text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>`


let SearchButton = document.getElementById("InputSearcht")
let SearchBar = document.getElementById("input-box")
let SearchMain = document.getElementsByClassName("row")[0]

SearchButton.addEventListener("click", function () {
    SearchBar.classList.toggle('SearchBarVisible')
    SearchMain.classList.toggle('SearchMaincolorChange')
})


// Website Cookies

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path='ga=GA1.1.1482926580.1702915728; _ga_TLJ82JF418=GS1.1.1703261921.4.1.1703261938.0.0.0'"

// Get all the anchor elements on the page
const links = document.querySelectorAll('a');

// Loop through each link
links.forEach(link => {
  // Check if the link is empty
  if (!link.href) {
    // Set the default HTML file as the href attribute
    link.href = '../htmls/YetToMake666666.html';
  }
});
