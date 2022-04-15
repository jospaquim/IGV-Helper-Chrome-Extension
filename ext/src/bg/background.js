// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
  const Calcular = () =>{
    let valorprecio = document.getElementById("price").value; 
    let newvalue=valorprecio*0.82;
    document.getElementById("montoSinRedondear").innerHTML = newvalue; 
    document.getElementById("montoRedondeado").innerHTML = newvalue.toFixed(2); 
  
    document.getElementById("montoCopiar").value= newvalue.toFixed(2); 
  
   }
