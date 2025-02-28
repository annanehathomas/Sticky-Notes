let colorInput = document.querySelector("#color input");
colorInput.value = "#00ffa1";
let button = document.querySelector(".button");
let notesAdded = document.querySelector(".notesAdded");
let textarea = document.querySelector("textarea");
let button2 = document.querySelectorAll(".buttons");

// add note button click
button.addEventListener("click", ()=>{
  if(textarea.value.trim() == ""){
    textarea.classList.remove("text-empty");

    // Force a reflow to restart the animation
    void textarea.offsetWidth;

    // Re-add the class with a slight delay
    setTimeout(() => {
      textarea.classList.add("text-empty");
    }, 10);
    alert("Enter some text");
    return;
  }
  textarea.classList.remove("text-empty");
  addNotes(textarea.value , colorInput.value);
  textarea.value = "";
  document.querySelector(".notadded").style.display = "none";
  button2 = document.querySelectorAll(".buttons");
  removeNotes();
});

// funtion of addNotes
function addNotes(notes , color){
  div1 = document.createElement("div");
  div1.innerHTML = `<p>${notes}</p> <button class ="buttons">X</button>`;
  div1.style.backgroundColor = `${color}`;
  div1.classList.add("notes");
  notesAdded.appendChild(div1);
}

//function of removeing notes
function removeNotes(){
  button2 = document.querySelectorAll(".buttons");
  button2.forEach((val, idx) => {
    val.addEventListener("click", () => {
      val.parentElement.remove();
    });
  });
}