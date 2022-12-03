function svar() {
    let selection = document.querySelector("#i");
    console.log(selection.selectedIndex);
    let selection2 = document.querySelector("#love");
    console.log(selection2.selectedIndex);
    let selection3 = document.querySelector("#you");
    console.log(selection3.selectedIndex);
    let elm = document.getElementById("fort");
    console.log(elm);

    if(selection.selectedIndex == 1 && selection2.selectedIndex == 2 && selection3.selectedIndex == 3)
       elm.style.visibility='visible'
   else
       alert("Try again!");
      

      
   
 
}