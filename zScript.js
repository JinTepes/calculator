//global variables
const digitBtns = document.querySelectorAll(".dig-btn");
const calcscreen = document.querySelector('#calc-screen')
const clearBtn = document.querySelector('#btn-clear');
const delBtn = document.querySelector('#btn-delete');
const oprBtn = document.querySelectorAll('.op-button');
const eqlBtn = document.querySelector('#op-eql');
const dotBtn = document.querySelector('#dig-dot');

//initials and event listeners
for (let i=0; i<digitBtns.length; i++){
    digitBtns[i].addEventListener(
        'click', () =>
            putonScreen(digitBtns[i].textContent)
    );
}

for (let i=0; i<oprBtn.length; i++){
    oprBtn[i].addEventListener(
        'click', () =>
        putOpronScreen(oprBtn[i].textContent)
    );
}

clearBtn.addEventListener(
    'click', () =>
    clearScrn()
);

delBtn.addEventListener(
    'click', () =>
    delScrn()
);

eqlBtn.addEventListener(
    'click', () =>
    operate()
);

dotBtn.addEventListener(
    'click', () =>
    addDot(dotBtn.textContent)
);

//dot handling
function addDot(dat){
    let osc = calcscreen.textContent.split("\n");
    if(!isNaN(osc[0]+'.') || !isNaN(osc[2]+'.')){
        dat = dat.replace(/\s+/g, '');
        calcscreen.textContent += dat;
    }
}

//appending opperations on screen
function putOpronScreen(operator){
    //check for double op
    let prevDig = calcscreen.textContent.slice(-1);
    prevDig = parseFloat(prevDig);
    //check for screen length
    let currentSc = calcscreen.textContent.split("\n");
    if(isNaN(prevDig)){
        alert("Invalid Input")
    }
    else if(currentSc.length===3){
        operate();
        calcscreen.textContent += " "+operator+" ";
    }
    else{
        calcscreen.textContent += " "+operator+" ";
    }
}
//Appending numbers on screen
function putonScreen(ndigit){
    ndigit = ndigit.replace(/\s+/g, '');
    calcscreen.textContent += ndigit ;
}
//clearing screen
function clearScrn(){
    calcscreen.textContent="";
}
//deleting latest digit on screen
function delScrn(){
    let ld = calcscreen.textContent.slice(-1);
    if(ld===" "){
        let ro = calcscreen.textContent.split("\n");
        ro.pop();ro.pop();
        calcscreen.textContent = ro.toString().slice(0,-1);
    }
    else{
        calcscreen.textContent = calcscreen.textContent.slice(0,-1);
        ld = calcscreen.textContent.slice(-1);
    }
}
//equals function
function operate(){
    let onScrn = calcscreen.textContent.slice(-1);
    let len = calcscreen.textContent.split("\n").length;
    if(onScrn===" "){
        
    }
    else if(len===1){

    }
    else{
        let exScreen = calcscreen.textContent.split("\n");
         for (let i = 0; i<exScreen.length; i++){
              exScreen[i] = exScreen[i].replace(/\s+/g, ''); //removing spaces.
         }

        let con1, con2, opr, res;
        con1 = parseFloat(exScreen[0]);
        opr = exScreen[1].toString();
        con2 = parseFloat(exScreen[2]);

        //calculations
        switch (opr){
            case "+":
                res = add(con1,con2);
                calcscreen.textContent = res.toString().replace(/\s+/g, '');
                break;
            case "-":
                res = subtract(con1,con2);
                calcscreen.textContent = res.toString().replace(/\s+/g, '');
                break;
            case "x":
                res = multiply(con1,con2);
                calcscreen.textContent = res.toString().replace(/\s+/g, '');
                break;
            case "X":
                res = multiply(con1,con2);
                calcscreen.textContent = res.toString().replace(/\s+/g, '');
                break;
            case "%":
                res = divide(con1,con2);
                calcscreen.textContent = res.toString().replace(/\s+/g, '');
                break;
            }
    }
}

// operation functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}
