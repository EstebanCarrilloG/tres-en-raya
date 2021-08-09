let cuadro_btn = document.querySelectorAll(".cuadro");
let info = document.getElementById("juego-info");
const juego_btn = document.getElementById("juego-boton")
let i = 0;
let n_boton;
const jBtn_e =  "pointer-events:initial;opacity:initial;"
const jBtn_d =  "pointer-events:none;opacity:40%;"


juego_btn.onclick = function(){

  
    for(n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
        cuadro_btn[n_boton].style.cssText = "pointer-events:initial;";
        cuadro_btn[n_boton].innerHTML = "";
    }
    nEmpieza();

}

nEmpieza();

cuadro_btn.forEach(boton => {
    
 boton.onclick = function(){
     
      
    info.innerHTML = ""; 
     
     if(i %= 2){    
        boton.innerHTML = "X";
        comprobar();
    } else {
        boton.innerHTML = "O"; 
        comprobar();
    }  
    boton.style.setProperty("pointer-events","none"); 
    i++;   
  }

});




function comprobar(){
    
    juego_btn.style.cssText = jBtn_d;
        
   if ((cuadro_btn[0].innerHTML == "X" && cuadro_btn[1].innerHTML == "X" && cuadro_btn[2].innerHTML == "X") ||
       (cuadro_btn[3].innerHTML == "X" && cuadro_btn[4].innerHTML == "X" && cuadro_btn[5].innerHTML == "X") ||
       (cuadro_btn[6].innerHTML == "X" && cuadro_btn[7].innerHTML == "X" && cuadro_btn[8].innerHTML == "X") ||
       (cuadro_btn[0].innerHTML == "X" && cuadro_btn[3].innerHTML == "X" && cuadro_btn[6].innerHTML == "X") ||
       (cuadro_btn[1].innerHTML == "X" && cuadro_btn[4].innerHTML == "X" && cuadro_btn[7].innerHTML == "X") ||
       (cuadro_btn[2].innerHTML == "X" && cuadro_btn[5].innerHTML == "X" && cuadro_btn[8].innerHTML == "X") ||
       (cuadro_btn[0].innerHTML == "X" && cuadro_btn[4].innerHTML == "X" && cuadro_btn[8].innerHTML == "X") ||
       (cuadro_btn[6].innerHTML == "X" && cuadro_btn[4].innerHTML == "X" && cuadro_btn[2].innerHTML == "X"))  {
       
        info.innerHTML = '"X" Gana';
       deshabilitarCasillas();
       
        } else if ((cuadro_btn[0].innerHTML == "O" && cuadro_btn[1].innerHTML == "O" && cuadro_btn[2].innerHTML == "O") ||
        (cuadro_btn[3].innerHTML == "O" && cuadro_btn[4].innerHTML == "O" && cuadro_btn[5].innerHTML == "O") ||
        (cuadro_btn[6].innerHTML == "O" && cuadro_btn[7].innerHTML == "O" && cuadro_btn[8].innerHTML == "O") ||
        (cuadro_btn[0].innerHTML == "O" && cuadro_btn[3].innerHTML == "O" && cuadro_btn[6].innerHTML == "O") ||
        (cuadro_btn[1].innerHTML == "O" && cuadro_btn[4].innerHTML == "O" && cuadro_btn[7].innerHTML == "O") ||
        (cuadro_btn[2].innerHTML == "O" && cuadro_btn[5].innerHTML == "O" && cuadro_btn[8].innerHTML == "O") ||
        (cuadro_btn[0].innerHTML == "O" && cuadro_btn[4].innerHTML == "O" && cuadro_btn[8].innerHTML == "O") ||
        (cuadro_btn[6].innerHTML == "O" && cuadro_btn[4].innerHTML == "O" && cuadro_btn[2].innerHTML == "O"))  {
        
         info.innerHTML = '"O" Gana';
        deshabilitarCasillas();
 
         } else{  if (cuadro_btn[0].innerHTML != "" && cuadro_btn[1].innerHTML != "" && cuadro_btn[2].innerHTML != "" &&
        cuadro_btn[3].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[5].innerHTML != "" &&
        cuadro_btn[6].innerHTML != "" && cuadro_btn[7].innerHTML != "" && cuadro_btn[8].innerHTML != "" &&
        cuadro_btn[0].innerHTML != "" && cuadro_btn[3].innerHTML != "" && cuadro_btn[6].innerHTML != "" &&
        cuadro_btn[1].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[7].innerHTML != "" &&
        cuadro_btn[2].innerHTML != "" && cuadro_btn[5].innerHTML != "" && cuadro_btn[8].innerHTML != "" &&
        cuadro_btn[0].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[8].innerHTML != "" &&
        cuadro_btn[6].innerHTML != "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[2].innerHTML != "")  {
         
          info.innerHTML = "Empate";
          deshabilitarCasillas(false);
          } 
        }

         

         
    
}

function  deshabilitarCasillas(y){
  
  if (y == false){
    i = Math.floor(Math.random() * (3 - 1)) + 1;
 }
 console.log(i);
    for(n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
    cuadro_btn[n_boton].style.setProperty("pointer-events","none"); 
    }
    juego_btn.style.cssText = jBtn_e;
}


function nEmpieza(){

    juego_btn.style.cssText = jBtn_d;

    const texto_info = "Presione cualquier cuadro para iniciar: "
    const c2 = "Empieza."
    let c1;

    if(i %= 2 ){
        c1= '"X" ' ; 
    }else{
        c1= '"O" ';  
    }
    
    let p = texto_info.split(/\n/g);
    let html = "";
  
    for (let x = 0; x < p.length; x++) {
        html += p[x] + c1 + c2 + "<br>";
    }

    info.innerHTML = html;
    
}