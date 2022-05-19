const start = document.getElementById('start')
var currentTab = 0;
start.addEventListener('click', function (){
    start.classList.add('d-none')
    showTab(currentTab);
})

function showTab(n) {
    var x = document.getElementsByClassName("fishing-form__tab");
    x[n].style.display = "block";

    /*if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "block";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }*/

    fixStepIndicator(n)
}
function nextPrev(n) {
    var x = document.getElementsByClassName("fishing-form__tab");
    if (n == 0){
        x[currentTab].style.display = "none";
        currentTab = 0;
        showTab(currentTab);
    }
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("FishingForm").submit();
        return false;
    }
    showTab(currentTab);
    console.log(currentTab)
}



function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("nav-step__item");
    for (i = 1; i < x.length; i++) {
        x[i].className = x[i].className.replace(" nav-step__item--active    ", "");
    }
    x[n].className += " nav-step__item--active";
}