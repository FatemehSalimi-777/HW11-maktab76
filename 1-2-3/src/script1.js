// 1

document.getElementsByTagName("table")[0].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].style.backgroundColor = "white";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineOne")[0].style.backgroundColor = "white";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineTwo")[0].style.backgroundColor = "#99F6E4";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineThree")[0].style.backgroundColor = "#D8B4FE";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineFour")[0].style.backgroundColor = "#99F6E4";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineFive")[0].style.backgroundColor = "#F87171";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineSix")[0].style.backgroundColor = "#FEF08A";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineSeven")[0].style.backgroundColor = "#99F6E4";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineEight")[0].style.backgroundColor = "#F0FDFA";
document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByClassName("lineNine")[0].style.backgroundColor = "#111827";


// 2

function removeLine() {
    let line = document.querySelectorAll("tr");
    for (let i = 1; i <= 5; i++) {
        line[i].parentElement.removeChild(line[i]);
    }
}


// 3

function CreateLine() {
for (let i = 0; i < 3; i++) {
    document.querySelector("tbody").insertRow().innerHTML =
        "<table border='1'>" +
        "<tr>" +
        "<td>Info</td>" +
        "<td>Cell</td>" +
        "<td>cell</td>" +
        "</tr>" 
}}
document.getElementsByTagName("table").appendChild(newDiv);

