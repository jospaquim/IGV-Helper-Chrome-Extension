// IGV Helper Chrome Extension - Main Script
// Updated for Manifest V3 and modern APIs

window.onload = generateNames;

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showNotification('Copiado al portapapeles');
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showNotification('Copiado al portapapeles');
    } catch (fallbackErr) {
      showNotification('Error al copiar');
    }
    document.body.removeChild(textArea);
  }
}

// Show notification to user
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #4CAF50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
    font-size: 14px;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000);
}

// Copy names to clipboard
document.getElementById("copiarNombre").addEventListener("click", async () => {
  const content = document.getElementById('costumerNames');
  await copyToClipboard(content.value);
});

document.getElementById("btnCopiar").addEventListener("click", async () => {
  const content = document.getElementById('montoCopiar');
  await copyToClipboard(content.value);
});

function generateNames() {
  const names = [
    "MARIA", "JOSE", "JUAN", "LUIS", "CARLOS", "ROSA", "JORGE", "VICTOR", "ANA", "LUZ", 
    "CESAR", "CARMEN", "MIGUEL", "JULIO", "JESUS", "PEDRO", "MANUEL", "JUANA", "SANTOS", "SEGUNDO", 
    "JHON", "DAVID", "ANGEL", "JULIA", "DIEGO", "FLOR", "ELIZABETH", "DANIEL", "OSCAR", "RUTH", 
    "DIANA", "MARCO", "EDWIN", "JAVIER", "WALTER", "FRANCISCO", "FERNANDO", "MILAGROS", "ALEJANDRO", "RAUL", 
    "RICARDO", "ALEX", "ROBERTO", "EDGAR", "VICTORIA", "EDUARDO", "MARIO", "JAIME", "GLORIA", "ANDREA", 
    "NANCY", "GLADYS", "SONIA", "FELIX", "ISABEL", "HECTOR", "MARTHA", "PABLO", "CLAUDIA", "SILVIA", 
    "KEVIN", "MARGARITA", "SANDRA", "ALEXANDER", "PATRICIA", "JEAN", "ROCIO", "CRISTIAN", "ANTONIO", "ALBERTO", 
    "HUGO", "SEBASTIAN", "ANDRES", "YOLANDA", "NORMA", "JESSICA", "MERCEDES", "PERCY", "OLGA", "ANGELA", 
    "CHRISTIAN", "EDITH", "LUCIA", "KAREN", "RICHARD", "ROXANA", "VILMA", "HILDA", "LIDIA", "RUBEN", 
    "ALFREDO", "JOEL", "ERIKA", "RONALD", "ERICK", "TERESA", "ALICIA", "GUILLERMO", "CAMILA", "JOSUE", 
    "ROSARIO", "LEONARDO", "NELLY", "KARINA", "ELMER", "MARIBEL", "KATHERINE", "ELSA", "LUISA", "RODRIGO", 
    "DORIS", "FREDY", "MARCOS", "ARIANA", "SERGIO", "WILMER", "ANGELICA", "FRANK", "MARITZA", "MONICA", 
    "HENRY", "MIRIAM", "WILLIAM", "SANTIAGO", "LILIANA", "GABRIEL", "LIZ", "RAFAEL", "MOISES", "ELENA", 
    "SARA", "ROGER", "FRANCISCA", "GABRIELA", "MARTIN", "ENRIQUE", "BLANCA", "ESTHER", "LOURDES", "CRISTHIAN", 
    "VERONICA", "ANTHONY", "MARY", "ELVIS", "BERTHA", "KIARA", "ADRIANA", "THIAGO", "JHONATAN", "BRAYAN", 
    "DELIA", "VALERIA", "GUSTAVO", "MAXIMO", "CECILIA", "IVAN", "IRMA", "DANIELA", "ADRIAN", "SOFIA", 
    "WILFREDO", "ANGIE", "SUSANA", "NICOLAS", "SAMUEL", "RENZO", "ROLANDO", "PIERO", "FELIPE", "BEATRIZ", 
    "EVELYN", "JUNIOR", "NOEMI", "KARLA", "WILSON", "CRISTINA", "JUDITH", "WILDER", "ALEXANDRA", "ABEL", 
    "MARINA", "FIORELLA", "ANDERSON", "OMAR", "LUCIANA", "ELIAS", "JENNY", "ALVARO", "ORLANDO", "LAURA", 
    "DEYSI", "GRACIELA", "JULIAN", "ALEJANDRA", "DINA", "FRANKLIN", "TANIA", "GREGORIO", "MAYRA", "PAOLA"
  ];
  
  const lastnames = [
    "Quispe", "Flores", "Sanchez", "Garcia", "Rodriguez", "Huaman", "Rojas", "Vasquez", "Mamani", "Lopez", 
    "Ramos", "Perez", "Torres", "Diaz", "Gonzales", "Ramirez", "Mendoza", "Chavez", "Espinoza", "Castillo", 
    "Fernandez", "Vargas", "Gutierrez", "Cruz", "Ruiz", "De la Cruz", "Romero", "Gomez", "Silva", "Cordova", 
    "Condori", "Castro", "Martinez", "Reyes", "Rivera", "Salazar", "Medina", "Aguilar", "Morales", "Paredes"
  ];

  const nameIndex = Math.floor(Math.random() * names.length);
  const lastnameIndex1 = Math.floor(Math.random() * lastnames.length);
  const lastnameIndex2 = Math.floor(Math.random() * lastnames.length);

  const fullName = `${lastnames[lastnameIndex1].toUpperCase()} ${lastnames[lastnameIndex2].toUpperCase()} ${names[nameIndex]}`;
  document.getElementById("costumerNames").value = fullName;
}

// Calculate price without IGV
document.getElementById("btnCalcular").addEventListener("click", getNewPrice);

function getNewPrice() {
  try {
    const inputValue = document.getElementById("price").value;
    
    if (!inputValue || isNaN(inputValue) || inputValue <= 0) {
      showNotification('Por favor ingrese un precio válido');
      return;
    }
    
    const priceWithoutIGV = (parseFloat(inputValue) / 1.18).toFixed(4);
    document.getElementById("montoCopiar").value = priceWithoutIGV;
    showNotification('Precio calculado correctamente');
  } catch (error) {
    showNotification('Error al calcular el precio');
    console.error('Error calculating price:', error);
  }
}

// Add enter key support for price input
document.getElementById("price").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita el submit del formulario
    getNewPrice();
  }
});