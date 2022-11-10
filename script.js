const kits =["snare","kick","crash","tom"]
const containerEl = document.getElementById("childcontainer")


kits.forEach(kit=>{

  const btnEl = document.createElement("button")
  btnEl.classList.add("btn", "btn-lg"  ,"btn-dark" ,"p-3")
  btnEl.innerText=kit
  
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio")
  audioEl.src = "sounds/"+kit + ".mp3"
  containerEl.appendChild(audioEl);

btnEl.addEventListener("click",()=>{

  audioEl.play();
})
  window.addEventListener("keydown",(event)=>{

   
 if(event.key === 'ArrowLeft'){
  
 let snare = new Audio("sounds/snare.mp3");
 snare.play();
  
 }
 if(event.key === 'ArrowDown' ){
  
  let kick = new Audio("sounds/kick.mp3");
  kick.play();
   
  }
   
  if(event.key === 'ArrowRight' ){
  
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
     
    }
    if(event.key === 'ArrowUp' ){
  
      let tom = new Audio("sounds/tom.mp3");
      tom.play();
       
      }

  
  })

  


})

