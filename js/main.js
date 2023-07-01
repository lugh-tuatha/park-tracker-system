// increment parking entered
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

// form to google sheets
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwPPibASEByK4hGrShfN4GNUORos9qCNaUrxxpCcztVUoQFr4wfVFR56_uDak5pZyUJAQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

// success message
const successMessage = document.getElementById("success-message")
function success(){
  successMessage.style.opacity = "1";

  setTimeout(function() {
    successMessage.style.opacity = "0";
  }, 3000)
}