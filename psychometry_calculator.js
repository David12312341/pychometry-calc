function setCss() {
    var cssPath = "psychometry_calculator.css";
    if (navigator.platform == "iPhone")
        cssPath = "mobile.css";

    var fileref = document.createElement("link");

    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", cssPath);

    document.getElementsByTagName("head")[0].appendChild(fileref);
}
function getResults() {
    fixAnswers();
    getHebrewScore();
    getEnglishScore();
    getMathScore();
    getOverallTotal();
}

var hebrewChosen = false;
var englishChosen = false;
var mathChosen = false;

var hebrewSectionsTotal = 0;
var englishSectionsTotal = 0;
var mathSectionsTotal = 0;

var hebrewTotalAnswers = 0;
var englishTotalAnswers = 0;
var mathTotalAnswers = 0;

function fixAnswers() {
    if (document.getElementById("hebSection1").value < 0) {
        document.getElementById("hebSection1").value = 0;
        document.getElementById("hebSection1").style = "background-color: lightblue;";
    }

    if (document.getElementById("hebSection1").value > 23) {
        document.getElementById("hebSection1").value = 23;
        document.getElementById("hebSection1").style = "background-color: lightblue;"
    }

    if (document.getElementById("hebSection2").value < 0) {
        document.getElementById("hebSection2").value = 0;
        document.getElementById("hebSection2").style = "background-color: lightblue;"
    }

    if (document.getElementById("hebSection2").value > 23) {
        document.getElementById("hebSection2").value = 23;
        document.getElementById("hebSection2").style = "background-color: lightblue;"
    }

    if (document.getElementById("hebSection3").value < 0) {
        document.getElementById("hebSection3").value = 0;
        document.getElementById("hebSection3").style = "background-color: lightblue;"
    }

    if (document.getElementById("hebSection3").value > 23) {
        document.getElementById("hebSection3").value = 23;
        document.getElementById("hebSection3").style = "background-color: lightblue;"
    }

    if (document.getElementById("engSection1").value < 0) {
        document.getElementById("engSection1").value = 0;
        document.getElementById("engSection1").style = "background-color: lightblue;"
    }

    if (document.getElementById("engSection1").value > 22) {
        document.getElementById("engSection1").value = 22;
        document.getElementById("engSection1").style = "background-color: lightblue;"
    }

    if (document.getElementById("engSection2").value < 0) {
        document.getElementById("engSection2").value = 0;
        document.getElementById("engSection2").style = "background-color: lightblue;"
    }

    if (document.getElementById("engSection2").value > 22) {
        document.getElementById("engSection2").value = 22;
        document.getElementById("engSection2").style = "background-color: lightblue;"
    }

    if (document.getElementById("engSection3").value < 0) {
        document.getElementById("engSection3").value = 0;
        document.getElementById("engSection3").style = "background-color: lightblue;"
    }

    if (document.getElementById("engSection3").value > 22) {
        document.getElementById("engSection3").value = 22;
        document.getElementById("engSection3").style = "background-color: lightblue;"
    }

    if (document.getElementById("mathSection1").value < 0) {
        document.getElementById("mathSection1").value = 0;
        document.getElementById("mathSection1").style = "background-color: lightblue;"
    }

    if (document.getElementById("mathSection1").value > 20) {
        document.getElementById("mathSection1").value = 20;
        document.getElementById("mathSection1").style = "background-color: lightblue;"
    }

    if (document.getElementById("mathSection2").value < 0) {
        document.getElementById("mathSection2").value = 0;
        document.getElementById("mathSection2").style = "background-color: lightblue;"
    }

    if (document.getElementById("mathSection2").value > 20) {
        document.getElementById("mathSection2").value = 20;
        document.getElementById("mathSection2").style = "background-color: lightblue;"
    }

    if (document.getElementById("mathSection3").value < 0) {
        document.getElementById("mathSection3").value = 0;
        document.getElementById("mathSection3").style = "background-color: lightblue;"
    }

    if (document.getElementById("mathSection3").value > 20) {
        document.getElementById("mathSection3").value = 20;
        document.getElementById("mathSection3").style = "background-color: lightblue;"
    }

}
function getHebrewScore() {
    if (hebrewSectionsTotal == 1) {
        hebrewTotalAnswers = Number(document.getElementById("hebSection1").value);
    }

    if (hebrewSectionsTotal == 2) {
        hebrewTotalAnswers = Number(document.getElementById("hebSection1").value) +
            Number(document.getElementById("hebSection2").value);
    }

    if (hebrewSectionsTotal == 3) {
        hebrewTotalAnswers = Number(document.getElementById("hebSection1").value) +
            Number(document.getElementById("hebSection2").value) +
            Number(document.getElementById("hebSection3").value);
    }
    var hebrewScore = ((-0.0005 * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal)) + (0.0417 * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) + 1.367 * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) + 47.89));

    if (hebrewScore > 150)
        hebrewScore = 150;

    if (hebrewScore < 50)
        hebrewScore = 50;
    document.getElementById("hebrewScore").innerHTML = Math.round(hebrewScore);
}

function getMathScore() {
    if (mathSectionsTotal == 1) {
        mathTotalAnswers = Number(document.getElementById("mathSection1").value);
    }

    if (mathSectionsTotal == 2) {
        mathTotalAnswers = Number(document.getElementById("mathSection1").value) +
            Number(document.getElementById("mathSection2").value);
    }

    if (mathSectionsTotal == 3) {
        mathTotalAnswers = Number(document.getElementById("mathSection1").value) +
            Number(document.getElementById("mathSection2").value) +
            Number(document.getElementById("mathSection3").value);
    }
    var mathScore = ((-0.0019 * ((mathTotalAnswers * 2) / mathSectionsTotal) * ((mathTotalAnswers * 2) / mathSectionsTotal) * ((mathTotalAnswers * 2) / mathSectionsTotal)) + (0.1311 * ((mathTotalAnswers * 2) / mathSectionsTotal) * ((mathTotalAnswers * 2) / mathSectionsTotal) + 0.3303 * ((mathTotalAnswers * 2) / mathSectionsTotal) + 48.992));

    if (mathScore > 150)
        mathScore = 150;

    if (mathScore < 50)
        mathScore = 50;

    document.getElementById("mathScore").innerHTML = Math.round(mathScore);
}

function getEnglishScore() {
    if (englishSectionsTotal == 1) {
        englishTotalAnswers = Number(document.getElementById("engSection1").value);
    }

    if (englishSectionsTotal == 2) {
        englishTotalAnswers = Number(document.getElementById("engSection1").value) +
            Number(document.getElementById("engSection2").value);
    }

    if (englishSectionsTotal == 3) {
        englishTotalAnswers = Number(document.getElementById("engSection1").value) +
            Number(document.getElementById("engSection2").value) +
            Number(document.getElementById("engSection3").value);
    }
    englishScore = ((-0.0001 * ((englishTotalAnswers * 2) / englishSectionsTotal) * ((englishTotalAnswers * 2) / englishSectionsTotal) * ((englishTotalAnswers * 2) / englishSectionsTotal)) + (0.015 * ((englishTotalAnswers * 2) / englishSectionsTotal) * ((englishTotalAnswers * 2) / englishSectionsTotal) + 1.8429 * ((englishTotalAnswers * 2) / englishSectionsTotal) + 48.646));
    if (englishScore > 150)
        englishScore = 150;

    if (englishScore < 50)
        englishScore = 50;

    document.getElementById("englishScore").innerHTML = Math.round(englishScore);
}


function getOverallTotal() {
    var overallTotal = (((-0.0019 * ((mathTotalAnswers * 2) / mathSectionsTotal) * ((mathTotalAnswers * 2) / mathSectionsTotal) * ((mathTotalAnswers * 2) / mathSectionsTotal)) + (0.1311 * ((mathTotalAnswers * 2) / mathSectionsTotal) * ((mathTotalAnswers * 2) / mathSectionsTotal) + 0.3303 * ((mathTotalAnswers * 2) / mathSectionsTotal) + 48.992)) * 2 + ((-0.0005 * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal)) + (0.0417 * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) + 1.367 * ((hebrewTotalAnswers * 2) / hebrewSectionsTotal) + 47.89)) * 2 +
        ((-0.0001 * ((englishTotalAnswers * 2) / englishSectionsTotal) * ((englishTotalAnswers * 2) / englishSectionsTotal) * ((englishTotalAnswers * 2) / englishSectionsTotal)) + (0.015 * ((englishTotalAnswers * 2) / englishSectionsTotal) * ((englishTotalAnswers * 2) / englishSectionsTotal) + 1.8429 * ((englishTotalAnswers * 2) / englishSectionsTotal) + 48.646))) * 0.2 * 5.7372 - 62.001;

    document.getElementById("overallTotal").innerHTML = Math.round(overallTotal);
}


function selectHebrewSections(hebrewSectionsTotalSelected) {
    hebrewChosen = true;
    hebrewSectionsTotal = hebrewSectionsTotalSelected;

    if (hebrewSectionsTotalSelected == 1) {
        document.getElementById("heb1").setAttribute("class", "btn selected-button-sections btn-outline-info ");
        document.getElementById("heb2").setAttribute("class", "btn btn-outline-info");
        document.getElementById("heb3").setAttribute("class", "btn btn-outline-info");

        document.getElementById("hebSec1").setAttribute("style", "");
        document.getElementById("hebSec2").setAttribute("style", "display:none");
        document.getElementById("hebSec3").setAttribute("style", "display:none");
    }

    if (hebrewSectionsTotalSelected == 2) {
        document.getElementById("heb1").setAttribute("class", "btn btn-outline-info");
        document.getElementById("heb2").setAttribute("class", "btn btn-outline-info selected-button-sections");
        document.getElementById("heb3").setAttribute("class", "btn btn-outline-info");

        document.getElementById("hebSec1").setAttribute("style", "");
        document.getElementById("hebSec2").setAttribute("style", "");
        document.getElementById("hebSec3").setAttribute("style", "display:none");
    }

    if (hebrewSectionsTotalSelected == 3) {
        document.getElementById("heb1").setAttribute("class", "btn btn-outline-info");
        document.getElementById("heb2").setAttribute("class", "btn btn-outline-info");
        document.getElementById("heb3").setAttribute("class", "btn btn-outline-info selected-button-sections");

        document.getElementById("hebSec1").setAttribute("style", "");
        document.getElementById("hebSec2").setAttribute("style", "");
        document.getElementById("hebSec3").setAttribute("style", "");
    }
}

function selectEnglishSections(englishSectionsTotalSelected) {
    englishChosen = true;
    englishSectionsTotal = englishSectionsTotalSelected;

    if (englishSectionsTotalSelected == 1) {
        document.getElementById("eng1").setAttribute("class", "btn btn-outline-info selected-button-sections");
        document.getElementById("eng2").setAttribute("class", "btn btn-outline-info");
        document.getElementById("eng3").setAttribute("class", "btn btn-outline-info");

        document.getElementById("engSec1").setAttribute("style", "");
        document.getElementById("engSec2").setAttribute("style", "display:none");
        document.getElementById("engSec3").setAttribute("style", "display:none");
    }

    if (englishSectionsTotalSelected == 2) {
        document.getElementById("eng1").setAttribute("class", "btn btn-outline-info");
        document.getElementById("eng2").setAttribute("class", "btn btn-outline-info selected-button-sections");
        document.getElementById("eng3").setAttribute("class", "btn btn-outline-info");

        document.getElementById("engSec1").setAttribute("style", "");
        document.getElementById("engSec2").setAttribute("style", "");
        document.getElementById("engSec3").setAttribute("style", "display:none");
    }

    if (englishSectionsTotalSelected == 3) {
        document.getElementById("eng1").setAttribute("class", "btn btn-outline-info");
        document.getElementById("eng2").setAttribute("class", "btn btn-outline-info");
        document.getElementById("eng3").setAttribute("class", "btn btn-outline-info selected-button-sections");

        document.getElementById("engSec1").setAttribute("style", "");
        document.getElementById("engSec2").setAttribute("style", "");
        document.getElementById("engSec3").setAttribute("style", "");
    }
}

function selectMathSections(mathSectionsTotalSelected) {
    englishChosen = true;
    mathSectionsTotal = mathSectionsTotalSelected;

    if (mathSectionsTotalSelected == 1) {
        document.getElementById("math1").setAttribute("class", "btn btn-outline-info selected-button-sections");
        document.getElementById("math2").setAttribute("class", "btn btn-outline-info");
        document.getElementById("math3").setAttribute("class", "btn btn-outline-info");

        document.getElementById("mathSec1").setAttribute("style", "");
        document.getElementById("mathSec2").setAttribute("style", "display:none");
        document.getElementById("mathSec3").setAttribute("style", "display:none");
    }


    if (mathSectionsTotalSelected == 2) {
        document.getElementById("math1").setAttribute("class", "btn btn-outline-info");
        document.getElementById("math2").setAttribute("class", "btn btn-outline-info selected-button-sections");
        document.getElementById("math3").setAttribute("class", "btn btn-outline-info");

        document.getElementById("mathSec1").setAttribute("style", "");
        document.getElementById("mathSec2").setAttribute("style", "");
        document.getElementById("mathSec3").setAttribute("style", "display:none");
    }


    if (mathSectionsTotalSelected == 3) {
        document.getElementById("math1").setAttribute("class", "btn btn-outline-info");
        document.getElementById("math2").setAttribute("class", "btn btn-outline-info");
        document.getElementById("math3").setAttribute("class", "btn btn-outline-info selected-button-sections");

        document.getElementById("mathSec1").setAttribute("style", "");
        document.getElementById("mathSec2").setAttribute("style", "");
        document.getElementById("mathSec3").setAttribute("style", "");
    }
}

function resetAllButtons() {
    document.getElementById("math1").setAttribute("class", "btn btn-outline-info");
    document.getElementById("math2").setAttribute("class", "btn btn-outline-info");
    document.getElementById("math3").setAttribute("class", "btn btn-outline-info");

    document.getElementById("heb1").setAttribute("class", "btn btn-outline-info");
    document.getElementById("heb2").setAttribute("class", "btn btn-outline-info");
    document.getElementById("heb3").setAttribute("class", "btn btn-outline-info");

    document.getElementById("eng1").setAttribute("class", "btn btn-outline-info");
    document.getElementById("eng2").setAttribute("class", "btn btn-outline-info");
    document.getElementById("eng3").setAttribute("class", "btn btn-outline-info");

    hebrewSectionsTotal = 0;
    englishSectionsTotal = 0;
    mathSectionsTotal = 0;
}

function notEnoughSections() {
    document.getElementById("inputForm").setAttribute("style", "border-color:red");
    document.getElementById("errorLabel1").setAttribute("style", "color:red;");
    resetAllButtons();
}

$(document).ready(function () {
    hebrewSectionsTotal = 0;
    englishSectionsTotal = 0;
    mathSectionsTotal = 0;

    $("#getTestButton").click(function () {
        if ((hebrewSectionsTotal == 3 && englishSectionsTotal == 3 && mathSectionsTotal == 2) ||
            (hebrewSectionsTotal == 2 && englishSectionsTotal == 2 && mathSectionsTotal == 2) ||
            (hebrewSectionsTotal == 1 && englishSectionsTotal == 1 && mathSectionsTotal == 1)) {
            document.getElementById("inputForm").setAttribute("style", "");
            $("#answersSection").fadeIn().delay(1000)
            $("#sectionsTotal").fadeOut().delay(400)
        }
        else {
            notEnoughSections();
        }
    });

    $("#resultButton").click(function () {
        getResults();
        setTimeout(() => {
            $("#resultsSection").fadeIn().delay(1000)
            $("#inputForm").fadeOut().delay(400)
        }, 500);
    });
});
