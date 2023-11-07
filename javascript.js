//Funcion que me aplica el estil a la opcion seleccionada ene el menu quita previamente seleccionado
function responsive(link)
var opciones = document.querySelectorall("#links a");
opciones[0].className = "";
opciones[1].className = "";
opciones[2].className = "";
opciones[3].className = "";
opciones[4].className = "";
link.className = "selecionado";

//HACEMOS DESAPARECER EL MENU UNA VEZ QUE SE HA SELECCIONADO UNA OPCION EN EL MODO RESPONSIVE
var x = document.getElementById("nav");
x.className ="";

//Funcion que muestra el menu responsive
function responsive(){
    var x = document.getElementById("nav");
    if( x.className==""){
        x.className="responsive";
    }else{
        x.className = "";
    }
}

//DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll =function(){
    efectoHabilidades()
};

//FUNCION DE APLICA LA ANIMACION DE LA BARRA DE HABILIDADES
function efectoHabilidades(){
    var skills =document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add(barra-progreso1)
        document.getElementById("js").classList.add(barra-progreso2)
        document.getElementById("bd").classList.add(barra-progreso3)
        
        

    }
}
