const cir = document.getElementById('cirs')
const cbtn = document.getElementsByClassName('containerbtn');
const btnr = document.getElementsByClassName('btn-red');
const btng = document.getElementsByClassName('btn-green');
const btnb = document.getElementsByClassName('btn-blue');
const btno = document.getElementsByClassName('btn-orange');
const btnp = document.getElementsByClassName('btn-pink');
const btnc = document.getElementsByClassName('btn-cyan');
const btnre = document.getElementsByClassName('btn-reset');


function ccr(){
        cir.style.border = "10px red solid" 
    }
function ccg(){
        cir.style.border = "10px green solid"  
    }
function ccb(){
        cir.style.border = "10px blue solid"  
    }
function cco(){
        cir.style.border = "10px orange solid"  
    }
function ccp(){
        cir.style.border = "10px pink solid"  
    }
function ccc(){
        cir.style.border = "10px cyan solid"  
    }
function reset(){

    location.reload();
}






