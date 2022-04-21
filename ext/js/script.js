


window.onload = generateNames;




document.getElementById("copiarNombre").addEventListener("click", copyToClipBoardNames);

function copyToClipBoardNames() {

    var content = document.getElementById('costumerNames');
    
    content.select();
    document.execCommand('copy');
}



 document.getElementById("btnCopiar").addEventListener("click", copyToClipBoard);

function copyToClipBoard() {

    var content = document.getElementById('montoCopiar');
    
    content.select();
    document.execCommand('copy');
}


function generateNames(){
    let names=  ["MARIA", "JOSE", "JUAN", "LUIS", "CARLOS", "ROSA", "JORGE", "VICTOR", "ANA", "LUZ", "CESAR", "CARMEN", "MIGUEL", "JULIO", "JESUS", "PEDRO", "MANUEL", "JUANA", "SANTOS", "SEGUNDO", "JHON", "DAVID", "ANGEL", "JULIA", "DIEGO", "FLOR", "ELIZABETH", "DANIEL", "OSCAR", "RUTH", "DIANA", "MARCO", "EDWIN", "JAVIER", "WALTER", "FRANCISCO", "FERNANDO", "MILAGROS", "ALEJANDRO", "RAUL", "RICARDO", "ALEX", "ROBERTO", "EDGAR", "VICTORIA", "EDUARDO", "MARIO", "JAIME", "GLORIA", "ANDREA", "NANCY", "GLADYS", "SONIA", "FELIX", "ISABEL", "HECTOR", "MARTHA", "PABLO", "CLAUDIA", "SILVIA", "KEVIN", "MARGARITA", "SANDRA", "ALEXANDER", "PATRICIA", "JEAN", "ROCIO", "CRISTIAN", "ANTONIO", "ALBERTO", "HUGO", "SEBASTIAN", "ANDRES", "YOLANDA", "NORMA", "JESSICA", "MERCEDES", "PERCY", "OLGA", "ANGELA", "CHRISTIAN", "EDITH", "LUCIA", "KAREN", "RICHARD", "ROXANA", "VILMA", "HILDA", "LIDIA", "RUBEN", "ALFREDO", "JOEL", "ERIKA", "RONALD", "ERICK", "TERESA", "ALICIA", "GUILLERMO", "CAMILA", "JOSUE", "ROSARIO", "LEONARDO", "NELLY", "KARINA", "ELMER", "MARIBEL", "KATHERINE", "ELSA", "LUISA", "RODRIGO", "DORIS", "FREDY", "MARCOS", "ARIANA", "SERGIO", "WILMER", "ANGELICA", "FRANK", "MARITZA", "MONICA", "HENRY", "MIRIAM", "WILLIAM", "SANTIAGO", "LILIANA", "GABRIEL", "LIZ", "RAFAEL", "MOISES", "ELENA", "SARA", "ROGER", "FRANCISCA", "GABRIELA", "MARTIN", "ENRIQUE", "BLANCA", "ESTHER", "LOURDES", "CRISTHIAN", "VERONICA", "ANTHONY", "MARY", "ELVIS", "BERTHA", "KIARA", "ADRIANA", "THIAGO", "JHONATAN", "BRAYAN", "DELIA", "VALERIA", "GUSTAVO", "MAXIMO", "CECILIA", "IVAN", "IRMA", "DANIELA", "ADRIAN", "SOFIA", "WILFREDO", "ANGIE", "SUSANA", "NICOLAS", "SAMUEL", "RENZO", "ROLANDO", "PIERO", "FELIPE", "BEATRIZ", "EVELYN", "JUNIOR", "NOEMI", "KARLA", "WILSON", "CRISTINA", "JUDITH", "WILDER", "ALEXANDRA", "ABEL", "MARINA", "FIORELLA", "ANDERSON", "OMAR", "LUCIANA", "ELIAS", "JENNY", "ALVARO", "ORLANDO", "LAURA", "DEYSI", "GRACIELA", "JULIAN", "ALEJANDRA", "DINA", "FRANKLIN", "TANIA", "GREGORIO", "MAYRA", "PAOLA"]; 
    let lastnames=["Quispe", "Flores", "Sanchez", "Garcia", "Rodriguez", "Huaman", "Rojas", "Vasquez", "Mamani", "Lopez", "Ramos", "Perez", "Torres", "Diaz", "Gonzales", "Ramirez", "Mendoza", "Chavez", "Espinoza", "Castillo", "Fernandez", "Vargas", "Gutierrez", "Cruz", "Ruiz", "De la Cruz", "Romero", "Gomez", "Silva", "Cordova", "Condori", "Castro", "Martinez", "Reyes", "Rivera", "Salazar", "Medina", "Aguilar", "Morales", "Paredes"];

    var nameg = Math.floor(Math.random()*names.length); 
    var lastnameg1 = Math.floor(Math.random()*lastnames.length);
    var lastnameg2 = Math.floor(Math.random()*lastnames.length); 

    document.getElementById("costumerNames").value= lastnames[lastnameg1].toUpperCase()+" "+lastnames[lastnameg2].toUpperCase()+" "+names[nameg]; 

}

document.getElementById("btnCalcular").addEventListener("click", getNewPrice);

function getNewPrice () {
    let newvaluep =0;
    newvaluep = document.getElementById("price").value; 
    newvaluep=(newvaluep/1.18).toFixed(4);
    document.getElementById("montoCopiar").value= newvaluep; 
}

//document.getElementById("price").setAttribute("oninput", "getNewPrice(this.value)");