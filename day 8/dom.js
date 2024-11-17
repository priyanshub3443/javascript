// let h2= document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from priyanshu bharti "

let divs=document.querySelectorAll(".box");
// divs[0].innerHTML= "new vale of box ";

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}