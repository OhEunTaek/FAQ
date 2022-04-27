const dl = document.querySelector("dl");
const dts = dl.querySelectorAll("dt");
const dds = dl.querySelectorAll("dd");


dl.addEventListener("click",(e)=>{

    if(e.target == dl) return;
    let targetdt = e.target.closest("dt");
    
    for(let el of dds){
        el.classList.remove("on")
        }
    for(let el of dts){
        el.classList.remove("on");
    }
    targetdt.classList.add("on");
    targetdt.nextElementSibling.classList.add("on");
    

    


    
    
})

















