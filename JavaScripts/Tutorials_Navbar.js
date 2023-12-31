let InnerNavbar = document.getElementById('InnerNavBarShow');
let InNavbar = document.getElementById('Inner-Navition');

InnerNavbar.addEventListener("click", function() {
    InNavbar.classList.toggle("ResponsiveInnerStuNavbar");
    InnerNavbar.classList.toggle('fa-times')
})