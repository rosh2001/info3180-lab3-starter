/* Add your Application JavaScript */
window.addEventListener('load', (event)=>{

    setInterval( ()=>{
        let flashcontainer= document.querySelector("span#flashitem");
        if (document.contains(flashcontainer)){
            flashcontainer.innerHTML="";
            flashcontainer.classList.remove("success");
        }
    }, 3000)
});

