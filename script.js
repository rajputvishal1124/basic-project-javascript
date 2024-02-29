let input = document.querySelector("#input");
let btn = document.querySelectorAll("#btn button");

btn.forEach(element => {
    element.addEventListener("click",(e) => {
        console.log(e.target.textContent);
        if(e.target.textContent ==="c"){
            input.innerText ="input";
        }
        else if(e.target.textContent ===  "<"){
            input.innerText= input.innerText.
            slice(0,-1);
        }
                    
        else if(e.target.textContent ===  "="){
            input.innerText= eval(input.innerText)
            
        }
        else{
            input.innerText+=e.target.textContent;
        }
        input.scrollLeft = input.scrollWidth;
    })
})