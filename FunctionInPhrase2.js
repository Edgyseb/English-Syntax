class Type {

    constructor(adj, n, adv, v, p) {
        this.adjp = adj;
        this.np = n;
        this.advp = adv;
        this.vp = v;
        this.pp = p;
        
    }

    getAdjp() {
        return this.adjp;
    }

    setNp(np) {
        this.np = np;
    }
    setAdvp(advp) {
        this.advp = advp;
    }
    
    getVp() {
        return this.vp;
    }

    setPp(pp) {
        this.pp = pp;
    }

    }

let myAdjp = new Type("Adjective Phrase", "Noun Phrase", "Adverb Phrase", "Verb Phrase", "Prepositional Phrase");
console.log(myAdjp.adjp);

document.getElementById("adjp").innerText = myAdjp.getAdjp();
document.getElementById("adjp2").innerText = myAdjp.getAdjp();
document.getElementById("adjp3").innerText = myAdjp.getAdjp();

let myNp = new Type("Adjective Phrase", "Noun Phrase", "Adverb Phrase", "Verb Phrase", "Prepositional Phrase");
console.log(myNp.np);

document.getElementById("np").innerText = myNp.np;
document.getElementById("np2").innerText = myNp.np;
document.getElementById("np3").innerText = myNp.np;

let myAdvp = new Type("Adjective Phrase", "Noun Phrase", "Adverb Phrase", "Verb Phrase", "Prepositional Phrase");
console.log(myAdvp.advp);

document.getElementById("advp").innerText = myAdvp.advp;
document.getElementById("advp2").innerText = myAdvp.advp;
document.getElementById("advp3").innerText = myAdvp.advp;

let myVp = new Type("Adjective Phrase", "Noun Phrase", "Adverb Phrase", "Verb Phrase", "Prepositional Phrase");
console.log(myVp.vp);

document.getElementById("vp").innerText = myVp.getVp();
document.getElementById("vp2").innerText = myVp.getVp();
document.getElementById("vp3").innerText = myVp.getVp();

let myPp = new Type("Adjective Phrase", "Noun Phrase", "Adverb Phrase", "Verb Phrase", "Prepositional Phrase");
console.log(myPp.pp);

document.getElementById("pp").innerText = myPp.pp;
document.getElementById("pp2").innerText = myPp.pp;
document.getElementById("pp3").innerText = myPp.pp;










