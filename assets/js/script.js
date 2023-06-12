
const counter = document.querySelector("#counter");

const display = document.createElement('div');
display.classList.add('display');
counter.appendChild(display);



const counterControl = document.createElement('div');
counterControl.classList.add('counterControl');
counter.appendChild(counterControl);


const resettami = document.createElement('div');
resettami.classList.add('resettami');
counter.appendChild(resettami);


display.innerText = "0";

//style del display
display.style.height="100px";
display.style.textAlign="center";
display.style.color="rgb(215,234,235)";
display.style.marginTop="100px";
display.style.fontFamily="\'Wallpoet', cursive;";


//creo bottone -
const bottoneMeno = document.createElement('button');
bottoneMeno.classList.add('bottoneMeno');
bottoneMeno.innerHTML='-';
counterControl.appendChild(bottoneMeno);

//stile bottone meno
bottoneMeno.style.border="none";
bottoneMeno.style.borderRadius = "4px";
bottoneMeno.style.padding="5px";
bottoneMeno.style.background="rgba(0,0,0,0)";
bottoneMeno.style.color="white";
bottoneMeno.style.fontSize="60px";


//creo bottone +
const bottonePiu = document.createElement('button');
bottonePiu.classList.add('bottonePiu');
bottonePiu.innerHTML = '+';
counterControl.appendChild(bottonePiu);

//stile bottone +
bottonePiu.style.border="none";
bottonePiu.style.borderRadius = "4px";
bottonePiu.style.padding="5px";
bottonePiu.style.background="rgba(0,0,0,0)";
bottonePiu.style.color="white";
bottonePiu.style.fontSize="60px";


//creo bottone reset 
const bottoneReset = document.createElement('button');
bottoneReset.classList.add('bottoneReset')
bottoneReset.innerHTML='Reset';
resettami.appendChild(bottoneReset);
//cambiato display con counterControll rimodificare

//stile reset 
bottoneReset.style.border="1px solid white";
bottoneReset.style.borderRadius = "4px";
bottoneReset.style.padding="5px";
bottoneReset.style.background="rgba(0,0,0,0)";
bottoneReset.style.color="white";
bottoneReset.style.fontSize="20px";
bottoneReset.style.fontFamily="\'Wallpoet', cursive;"



//funzione per media query inferiore a 350px
function myFunction(x){
    if(x.matches){
        display.style.fontSize="80px";
    }else {
        display.style.fontSize="150px";
    }
}
var x = window.matchMedia("(max-width:350px)");
myFunction(x);
x.addListener(myFunction);


//creo funzioni per il contatore 

let count = 0;


function incrementa (){
    count++;
    if(count > 0){
        background.style.background="#012E25";
    } 
    if (count >= 5) {
    background.style.background="#012B20"        
    } 
    if (count >= 10){
        background.style.background="#012A15"
    }
  
}

function decrementa (){
    count--;
    if(count < 0){
        background.style.background="#301E30";
    }
    if (count <= -5){
        background.style.background="#401E30";
    }
    if (count <= -10){
        background.style.background="#501E30"
    }
    
}

function resetta(){
    count = 0;
    if(count === 0){
        background.style.background="rgb(28,44,66)";
        
    }
}


let sound = new Audio('assets/audio/button_click.mp3');
let soundRes = new Audio('assets/audio/reset.wav');

bottonePiu.addEventListener("click", () => {
    incrementa();
    display.textContent = count;
    sound.play();
  });

bottoneMeno.addEventListener("click", ()=>{
decrementa();
display.textContent=count;
sound.play();
 }); 

bottoneReset.addEventListener("click", ()=>{
    resetta();
    display.textContent=count;
    soundRes.play();
});





