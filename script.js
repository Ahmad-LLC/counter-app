let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
    count += 1
    countEl.textContent = count
}



function reset(){
let cmp = confirm("Are you sure you wanna reset your count to zero ?")
    if(cmp == true){
countEl.textContent = 0
      count = 0
    }
}

console.error("this is an error ")