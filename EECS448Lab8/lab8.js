// execrise 1
console.log("js file work!");

function onClick() {
    var pw1 = exe1.pw1.value;
    var pw2 = exe1.pw2.value;
    //console.log(this.pw1);
    console.log(this.pw2);
    alert(this.pw1);
    //alert(this.pw2);
    if (this.pw1 == this.pw2) {
        alert("Passward Correct");
    } else {
        alert("Passward Error");
    }
}

// exercise 2
//initralized array[]
var count = 0;
var array = [];
document.getElementById("img01").hidden = false;
document.getElementById("img02").hidden = true;
document.getElementById("img03").hidden = true;
document.getElementById("img04").hidden = true;
document.getElementById("img05").hidden = true;
for (var i = 0; i < 4; i++) {
    this.array[i] = i;
}

function countRule() {
    if (this.count == -1) {
        this.count = 4;
    }
    if (this.count == 5) {
        this.count = 0;
    }
}

function previous() {
    this.count--;
    countRule();
    wrapImage(this.count);
}

function next() {
    this.count++;
    countRule();
    wrapImage(this.count);
}

function wrapImage(n) {
    if (n == 0) {
        document.getElementById("img01").hidden = false;
        document.getElementById("img02").hidden = true;
        document.getElementById("img03").hidden = true;
        document.getElementById("img04").hidden = true;
        document.getElementById("img05").hidden = true;
    } else if (n == 1) {
        document.getElementById("img01").hidden = true;
        document.getElementById("img02").hidden = false;
        document.getElementById("img03").hidden = true;
        document.getElementById("img04").hidden = true;
        document.getElementById("img05").hidden = true;
    } else if (n == 2) {
        document.getElementById("img01").hidden = true;
        document.getElementById("img02").hidden = true;
        document.getElementById("img03").hidden = false;
        document.getElementById("img04").hidden = true;
        document.getElementById("img05").hidden = true;
    } else if (n == 3) {
        document.getElementById("img01").hidden = true;
        document.getElementById("img02").hidden = true;
        document.getElementById("img03").hidden = true;
        document.getElementById("img04").hidden = false;
        document.getElementById("img05").hidden = true;
    } else if (n == 4) {
        document.getElementById("img01").hidden = true;
        document.getElementById("img02").hidden = true;
        document.getElementById("img03").hidden = true;
        document.getElementById("img04").hidden = true;
        document.getElementById("img05").hidden = false;
    }
}

document.getElementById("test").hidden = true;


function show() {
    if (clr.style.display == "none") {
        clr.style.display == "";
    } else {
        clr.style.display == "none";
    }
}