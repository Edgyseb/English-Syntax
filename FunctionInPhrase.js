class Phrase2 {

    constructor(d, pre, h, pos) {
        this.det = d;
        this.premo = pre;
        this.head = h;
        this.post = pos;
        
    }

    getDet() {
        return this.det;
    }

    setPremo(premo) {
        this.premo = premo;
    }
    setHead(head) {
        this.head = head;
    }
    
    getPostmo() {
        return this.post;
    }

   
    }

let myDet = new Phrase2("Determiner", "Premodifier", "Head", "Postmodifier");
console.log(myDet.det);

document.getElementById("deter").innerText = myDet.getDet();
document.getElementById("deter3").innerText = myDet.getDet();

let myPre = new Phrase2("Determiner", "Premodifier", "Head", "Postmodifier");
console.log(myPre.premo);

document.getElementById("premo").innerText = myPre.premo;
document.getElementById("premo2").innerText = myPre.premo;
document.getElementById("premo3").innerText = myPre.premo;

let myHead = new Phrase2("Determiner", "Premodifier", "Head", "Postmodifier");
console.log(myHead.head);

document.getElementById("head").innerText = myHead.head;
document.getElementById("head2").innerText = myHead.head;
document.getElementById("head3").innerText = myHead.head;

let myPost = new Phrase2("Determiner", "Premodifier", "Head", "Postmodifier");
console.log(myPost.post);

document.getElementById("postmo").innerText = myPost.getPostmo();
document.getElementById("postmo3").innerText = myPost.getPostmo();










