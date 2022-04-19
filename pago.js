
constaxios = require('axios');
    

document.getElementById('enviar').addEventListener('submit', function () {​​​​​​​​
let  nombre = document.getElementById("nombrePago").value;
let telefono = document.getElementById("telefonoPago").value;
let productos = document.getElementById("productosPago").value;

alert(nombrel,telefono,productos);
 
if (nombre != "" && telefono != "" && productos != "") {​​​​​​​​

    letdatos = {​​​​​​​​
    n:nombre,
    t:telefono,
    p:productos
        }​​​​​​​​;

    axios.post('/api/Info', datos)
            .then(function (response) {​​​​​​​​
    alert("Gracias! \nDatos Registrados");
    
            }​​​​​​​​).catch(function (error) {​​​​​​​​
    console.log(error);
            }​​​​​​​​);
    
        }​​​​​​​​ else {​​​​​​​​
    alert('Por favor rellenar los campos');
        }​​​​​​​​
 
    alert(n,t,p);
}​​​​​​​​);



