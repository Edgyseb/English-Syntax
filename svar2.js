let h1 = 0;

function red(elm) {
    console.log("red(elm)");

    document.getElementById('adjp').innerText="Adjective Phrase"; elm.style = "background-color:red; color:white";
      
 
}

function green2(elm) {
    console.log("green2(elm)");
    h1 = h1+1
    console.log(h1)

    document.getElementById('np').innerText="Noun Phrase"; elm.style = "background-color:hsl(84, 90%, 44%)";
    
 
}

function red3(elm) {
    console.log("red3(elm)");
    
    document.getElementById('advp').innerText="Adverb Phrase"; elm.style = "background-color:red; color:white";

}

function red4(elm) {
    console.log("red4(elm)");

    document.getElementById('vp').innerText="Verb Phrase"; elm.style = "background-color:red; color:white";
    
 
}

function red5(elm) {
    console.log("red5(elm)");

    document.getElementById('pp').innerText="Prepositional Phrase"; elm.style = "background-color:red; color:white";
    
 
}

function red6(elm) {
    console.log("red6(elm)");
    
    document.getElementById('adjp2').innerText="Adjective Phrase"; elm.style = "background-color:red; color:white"; 
   
 
}

function red7(elm) {
    console.log("red7(elm)");

    document.getElementById('np2').innerText="Noun Phrase"; elm.style = "background-color:red; color:white"; 
      
 
}

function red8(elm) {
    console.log("red8(elm)");

    document.getElementById('advp2').innerText="Adverb Phrase"; elm.style = "background-color:red; color:white";
    
 
}

function green9(elm) {
    console.log("green9(elm)");
    h1 = h1+1
    console.log(h1)
    document.getElementById('vp2').innerText="Verb Phrase"; elm.style = "background-color:hsl(84, 90%, 44%)"; 
      
 
}

function red10(elm) {
    console.log("red10(elm)");

    document.getElementById('pp2').innerText="Prepositional Phrase"; elm.style = "background-color:red; color:white";

   
 
}

function red11(elm) {
    console.log("red11(elm)");
    
    document.getElementById('adjp3').innerText="Adjective Phrase"; elm.style = "background-color:red; color:white"; 
   
 
}

function green12(elm) {
    console.log("green12(elm)");
    h1 = h1+1
    console.log(h1)
    document.getElementById('np3').innerText="Noun Phrase"; elm.style = "background-color:hsl(84, 90%, 44%)"; 

}

function red13(elm) {
    console.log("red13(elm)");

    document.getElementById('advp3').innerText="Adverb Phrase"; elm.style = "background-color:red; color:white";
    
 
}

function red14(elm) {
    console.log("red14(elm)");

    document.getElementById('vp3').innerText="Verb Phrase"; elm.style = "background-color:red; color:white";
    
 
}



function red15(elm) {
    console.log("red15(elm)");

    document.getElementById('pp3').innerText="Prepositional Phrase"; elm.style = "background-color:red; color:white";

   
 
}

function svar(){
    
    let elm = document.getElementById("fort")

if(h1 == 3)
  elm.style.visibility='visible'

}


