
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;
if (words && words.length > 0) {
    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }
    changeWord();
    setInterval(changeWord, 4000);
}


function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}







$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 100) { //-navbar-----scrolltop---fixed---jquery--/
            $('.planewrap').removeClass('navbar-scroll');
        }
        else {
            $('.planewrap').addClass('navbar-scroll');
        }
    });

});


$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $('.overlay').addClass('open');
    });

    $('.close-menu').on('click', function () {
        $('.overlay').removeClass('open');
    });
});

function filterFunction() {
    var i;
    var input = document.getElementById("fromInput");
    var filter = input.value.toUpperCase();
    var div = document.getElementById("fromDropdown");
    var a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";

        } else {
            a[i].style.display = "none";
        }
    }
}

function showA() {
    var listOfA = document.getElementById("listOfA");

    listOfA.setAttribute("class", "show");
    document.getElementById("toInput").style.opacity = 0;

}

function setValue(value) {
    document.getElementById("fromInput").value = value;
    document.getElementById("listOfA").setAttribute("class", "listOfA");
    document.getElementById("toInput").style.opacity = 1;
}

function setValuee(value) {
    document.getElementById("toInput").value = value;
    document.getElementById("listOfB").setAttribute("class", "listOfB");
}

function filterFunctionn() {
    var x;
    var inputt = document.getElementById("toInput");
    var filterr = inputt.value.toUpperCase();
    var divv = document.getElementById("toDropdown");
    var a = divv.getElementsByTagName("a");
    for (x = 0; x < a.length; x++) {
        txtValue = a[x].textContent || a[x].innerHTML;
        if (txtValue.toUpperCase().indexOf(filterr) > -1) {
            a[x].style.display = "";

        } else {
            a[x].style.display = "none";
        }
    }
}

function showB() {
    var listOfB = document.getElementById("listOfB");

    listOfB.setAttribute("class", "show");
}

function hideA() {
    setTimeout(() => {
        var listOfA = document.getElementById("listOfA");

        listOfA.setAttribute("class", "listOfA");
        document.getElementById("toInput").style.opacity = 1;
    }, 500);
}

function hideB() {
    setTimeout(() => {
        var listOfB = document.getElementById("listOfB");

        listOfB.setAttribute("class", "listOfB");
    }, 500);
}

function sendFlightDestination() {
    var obj = {};
    var fromInput = $("#fromInput").val();
    var toInput = $("#toInput").val();

    obj.fromInput = fromInput;
    obj.toInput = toInput;

    var stringobj = JSON.stringify(obj);

    sessionStorage.setItem("flightDestination", stringobj);

    window.open("search.html", "_blank");
}


function priceone() {
    window.open("details.html", "_blank");
}
function pricetwo() {
    window.open("details.html", "_blank");
}
function pricethree() {
    window.open("details.html", "_blank");
}
function pricefour() {
    window.open("details.html", "_blank");
}
function pricefive() {
    window.open("details.html", "_blank");
}
function pricesix() {
    window.open("details.html", "_blank");
}
function priceseven() {
    window.open("details.html", "_blank");
}
function priceeight() {
    window.open("details.html", "_blank");
}
function pricenine() {
    window.open("details.html", "_blank");
}

function sendInformation() {
    var obj = {};
    var namee = $("#namee").val();
    var surnamee = $("#surnamee").val();


    obj.namee = namee;
    obj.surnamee = surnamee;
    console.log('obj', obj);
    var stringobj = JSON.stringify(obj);

    sessionStorage.setItem("sendInformation", stringobj);

    window.open("ticket.html", "_blank");
}
var ResultsendInformation = sessionStorage.getItem("sendInformation");
var sendInformationobj = JSON.parse(ResultsendInformation);
$("#passengername").text(sendInformationobj.namee);
$("#passengersurname").text(sendInformationobj.surnamee);



function dataSelector() {
    var data = $("#selectdata").val();


    sessionStorage.setItem("dataSelector", data);
}
var ResultdataSelector = sessionStorage.getItem("dataSelector");

$("#dataselectt").text(ResultdataSelector);

var flightDestinationn = sessionStorage.getItem("flightDestination");
var flightDestinationObj = JSON.parse(flightDestinationn);
$(".jfk").text(flightDestinationObj.fromInput.substring(0, 3).toUpperCase());
$(".sfo").text(flightDestinationObj.toInput.substring(0, 3).toUpperCase());





