function svar() {
    let selection = document.querySelector("#i");
    console.log(selection.selectedIndex);
    let selection2 = document.querySelector("#love");
    console.log(selection2.selectedIndex);
    let selection3 = document.querySelector("#you");
    console.log(selection3.selectedIndex);
    let elm = document.getElementById("fort");
    console.log(elm);
    let elm2 = document.getElementById("igen");
    console.log(elm2);

    if(selection.selectedIndex == 3 && selection2.selectedIndex == 10 && selection3.selectedIndex == 3)
       elm.style.visibility='visible'
   else
       elm2.style.visibility='visible';
      

      
   
 
}