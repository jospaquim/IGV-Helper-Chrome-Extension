
 document.getElementById("btnCopiar").addEventListener("click", copyToClipBoard);

function copyToClipBoard() {

    var content = document.getElementById('montoCopiar');
    
    content.select();
    document.execCommand('copy');
}

 document.getElementById("btnCalcular").addEventListener("click", myPrices);

function myPrices(){
    let valorprecio = document.getElementById("price").value; 
    let newvalue=valorprecio*0.82;
    document.getElementById("montoSinRedondear").innerHTML = newvalue;

    document.getElementById("montoRedondeado").innerHTML = newvalue.toFixed(2); 

    document.getElementById("montoCopiar").value= newvalue.toFixed(2); 
}