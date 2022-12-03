let h1 = 0;

function red(elm) {
    console.log("red(elm)");

    document.getElementById('deter').innerText="Determiner"; elm.style = "background-color:red; color:white";
      
 
}

function red2(elm) {
    console.log("red2(elm)");

    document.getElementById('premo').innerText="Premodifier"; elm.style = "background-color:red; color:white";
    
 
}

function green3(elm) {
    console.log("green3(elm)");
    h1 = h1+1
    console.log(h1)
    document.getElementById('head').innerText="Head"; elm.style = "background-color:hsl(84, 90%, 44%)";

}

function red4(elm) {
    console.log("red4(elm)");

    document.getElementById('postmo').innerText="Postmodifier"; elm.style = "background-color:red; color:white";
    
 
}

function red5(elm) {
    console.log("red5(elm)");

    document.getElementById('premo2').innerText="Premodifier"; elm.style = "background-color:red; color:white";
    
 
}

function green6(elm) {
    console.log("green6(elm)");
    h1 = h1+1
    console.log(h1)
    document.getElementById('head2').innerText="Head"; elm.style = "background-color:hsl(84, 90%, 44%)"; 
   
 
}

function red7(elm) {
    console.log("red7(elm)");

    document.getElementById('deter3').innerText="Determiner"; elm.style = "background-color:red; color:white"; 
      
 
}

function red8(elm) {
    console.log("red8(elm)");

    document.getElementById('premo3').innerText="Premodifier"; elm.style = "background-color:red; color:white";
    
 
}

function green9(elm) {
    console.log("green9(elm)");
    h1 = h1+1
    console.log(h1)
    document.getElementById('head3').innerText="Head"; elm.style = "background-color:hsl(84, 90%, 44%)"; 
      
 
}

function red10(elm) {
    console.log("red10(elm)");

    document.getElementById('postmo3').innerText="Postmodifier"; elm.style = "background-color:red; color:white";

   
 
}

function svar(){
    
    let elm = document.getElementById("fort")

if(h1 == 3)
  elm.style.visibility='visible'

}


