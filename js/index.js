const rangeInputs = document.querySelectorAll("input[type=range]");
const code = document.querySelector(".code");
const color = document.querySelector(".color");
let root = window.getComputedStyle(document.documentElement);
let radius = [
  // root.getPropertyValue("--radius-1"),
  // root.getPropertyValue("--radius-2"),
  root.getPropertyValue("--radius-3"),
  root.getPropertyValue("--radius-4"),
  "/ " + root.getPropertyValue("--radius-5"),
  root.getPropertyValue("--radius-6"),
  root.getPropertyValue("--radius-7"),
  // root.getPropertyValue("--radius-8")
];

// Function to generate random number
document.querySelector('.change').addEventListener('click', ()=>{
 const one = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const two = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const three = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const four = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const five = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const six = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const seven = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const eight = Math.floor(Math.random() * (100 - 1) + 1) + "%";
 const value = `${one} ${two} / ${three} ${four}  ${five}`
 document.querySelector(".blob").style.borderRadius = value
 code.innerHTML = `
 .demo{
 border-radius:  ${value};
 }
 
     `
})


code.innerHTML = `
.demo{
border-radius:  ${radius.join(' ')};
} `;
rangeInputs.forEach((el, index) => {
  el.addEventListener("input", (e) =>{
    document.documentElement.style.setProperty("--radius-" + (index + 1), e.target.value + "%");
    el.setAttribute("data-value", e.target.value + "%");
    if(index === 4){
      radius[index] = "/ " + e.target.value + "%";
    }else{
      radius[index] = e.target.value + "%";
    }
    code.innerHTML = `
.demo{
border-radius:  ${radius.join(' ')};
}

    `;
  });
})

const sidebar = document.querySelector("#sidebar")
document.querySelector(".open-sidebar").addEventListener('click',()=>{
const opacity = document.querySelector("#sidebar").style.opacity
if(opacity == 1){
sidebar.style.opacity="0"
sidebar.style.width="0px"
sidebar.style.overflow="hidden"

}else{
sidebar.style.opacity="1"   
sidebar.style.width="300px"
sidebar.style.overflow="visible"  

}
})

const init = "white"
document.querySelector('#color').style.background =  "white";
function Handlecolor(){
const backcolor = document.querySelector('#color').value
document.querySelector('.blob').style.background =  `${backcolor}`;
document.querySelector('#color').style.background =  `${backcolor}`;
document.querySelector(".color-container").style.display='block'
color.innerHTML=`background-color: ${backcolor}`
 

}

if(
  document.querySelector('#color').style.background == "white"
){
  document.querySelector(".color-container").style.display='none'

}

var blob = document.querySelector(".blob")
var pattern = document.querySelector(".pattern-display")
document.querySelector(".pattern.one").addEventListener('click',()=>{
 blob.style.backgroundColor = "#e5e5f7";
 blob.style.opacity = 0.8;
 blob.style.background = "radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 10px 10px, linear-gradient(#444cf7 0.8px, transparent 0.8px) 0 -0.4px, linear-gradient(90deg, #444cf7 0.8px, #e5e5f7 0.8px) -0.4px 0"
 blob.style.backgroundSize = "20px 20px, 20px 20px, 10px 10px, 10px 10px"

 pattern.innerHTML =`
 <xmp>.demo{
 background-color: #e5e5f7;
 opacity: 0.8;
 background: radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 10px 10px, linear-gradient(#444cf7 0.8px, transparent 0.8px) 0 -0.4px, linear-gradient(90deg, #444cf7 0.8px, #e5e5f7 0.8px) -0.4px 0;
 background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
}</xmp>
 `
  })
document.querySelector(".pattern.two").addEventListener('click',()=>{
 blob.style.backgroundColor = "#e5e5f7";
 blob.style.opacity = 0.8;
 blob.style.background = "repeating-linear-gradient(45deg, #444cf7 0, #444cf7 0.4px, #e5e5f7 0, #e5e5f7 50%)"
 blob.style.backgroundSize = "4px 4px"

 pattern.innerHTML =`
 <xmp>.demo{
  background-color: #e5e5f7;
  opacity: 0.8;
  background-size: 4px 4px;
  background-image: repeating-linear-gradient(45deg, #444cf7 0, #444cf7 0.4px, #e5e5f7 0, #e5e5f7 50%);
}</xmp>
 `
  })
document.querySelector(".pattern.three").addEventListener('click',()=>{
 blob.style.backgroundColor = "#e5e5f7";
 blob.style.opacity = 0.8;
 blob.style.backgroundImage = "linear-gradient(#444cf7 0.8px, transparent 0.8px), linear-gradient(90deg, #444cf7 0.8px, transparent 0.8px), linear-gradient(#444cf7 0.4px, transparent 0.4px), linear-gradient(90deg, #444cf7 0.4px, #e5e5f7 0.4px)";
 blob.style.backgroundPosition = "-0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px"
 blob.style.backgroundSize = "20px 20px, 20px 20px, 4px 4px, 4px 4px"

 pattern.innerHTML =`
 <xmp>.demo{
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image:  linear-gradient(#444cf7 0.8px, transparent 0.8px), linear-gradient(90deg, #444cf7 0.8px, transparent 0.8px), linear-gradient(#444cf7 0.4px, transparent 0.4px), linear-gradient(90deg, #444cf7 0.4px, #e5e5f7 0.4px);
  background-size: 20px 20px, 20px 20px, 4px 4px, 4px 4px;
  background-position: -0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px;
}</xmp>
 `
  })
document.querySelector(".pattern.four").addEventListener('click',()=>{
 blob.style.backgroundColor = "#e5e5f7";
 blob.style.opacity = 0.8;
 blob.style.backgroundImage = "radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px)";
 blob.style.backgroundBlendMode = "multiply"


 pattern.innerHTML =`
 <xmp>.demo{
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px);
  background-blend-mode: multiply;}</xmp>
 `
  })

