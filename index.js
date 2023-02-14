function loadDescription(name, data) {
  let elm = document.getElementById(name);
  elm.innerHTML = data;

}

function loadText(name, data) {
  let elm = document.getElementById(name);
  elm.textContent = data
  elm.style.height = "83px"
  elm.style.overflow = "scroll"

}

let elmCardTxt = document.querySelectorAll(".card-text");
elmCardTxt.forEach((elm) => {
  elm.setAttribute("class", elm.getAttribute("class") + " overflow-scroll")
})


let copyrightElm = document.getElementById("copyright");
let currentYear = new Date()
copyrightElm.innerText += " 2019-" + currentYear.getFullYear();

document.querySelector('.first-button').addEventListener('click', function() {

  document.querySelectorAll('.animated-icon1').forEach(e => e.classList.toggle('open'))
});