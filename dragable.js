const openmodal = document.querySelector(".open-modal")
const modalscreen = document.querySelector(".modal-screen")
const continuebtn = document.querySelector(".continue")
const todoinput = document.querySelector(".todo-input")
const statussection = document.querySelector(".default")
const closebtn = document.querySelector(".close")
const xbtn = document.querySelector(".x-btn")
const  inprogress = document.querySelector(".in-progress")
const complete = document.querySelector(".complete")
const trash = document.querySelector(".trash")
openmodal.addEventListener("click" , openmodals)
let randomnumber
let todoValue ;
let dataid ; 
function openmodals () {
modalscreen.classList.remove("hidden")
}

continuebtn.addEventListener("click" , addtodo)

function  addtodo () {
     randomnumber = Math.floor(10000 + Math.random() * 50000)
    
    //console.log(randomnumber);
 todoValue = todoinput.value
//console.log(todoValue);
statussection.insertAdjacentHTML(
    "beforeend" , 
    `<article  id="todo-${randomnumber}" class="todo" draggable="true" ondragstart="startdrag(event)">
    <p>${todoValue}</p>
  </article>`
)
modalscreen.classList.add("hidden")
todoinput.value = ""
}

closebtn.addEventListener("click" , closemodal)
xbtn.addEventListener("click" , closemodal)

function closemodal () {
    modalscreen.classList.add("hidden")
  
}


document.body.addEventListener("keydown" , function(event){
   // console.log(event);
if (event.key == "Enter"){
    addtodo()
    closemodal()
}
})


function startdrag(event) {
   dataid =  event.dataTransfer.setData("id" , event.target.id)
   //console.log(event.target.id);;
   // console.log("drag");
}


function dragover (event) {
    event.preventDefault() 
}
inprogress.addEventListener("dragover" , dragover)
complete.addEventListener("dragover" , dragover)
trash.addEventListener("dragover" , dragover)

inprogress.addEventListener("drop" , droping)
complete.addEventListener("drop" , droping)
trash.addEventListener("drop" , droping)

function droping (event) {
    const dataidrecive = event.dataTransfer.getData("id")
    const savedata = document.querySelector(`#${dataidrecive}`)
    event.target.append(savedata)
    console.log(savedata);
console.log("drop");
}