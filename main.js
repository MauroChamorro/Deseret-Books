
let costo= 7000

if (costo >= 6000) {
  alert(" Puedes comprar el producto")
} else{
  alert( "No puedes comprar el producto")
}


let producto = prompt(" ¿queres comprar el producto?")

switch (producto) { 
  case "SI":
    console.log("Aceptaste comprar el producto")
    break;

  default:
    console.log(" No acepto comprar el producto")
    break;
}

let cantidad = prompt("Ingrese el producto que le interesa o ESC para finalizar")
let texto= ""

while (cantidad != "ESC" && cantidad !="esc") {
  texto += cantidad + " ";
  cantidad = prompt("Ingrese el producto que le interesa o ESC para finalizar")

   }
   alert(texto);

  //FUNCIONES
 
  function valorLibro() {
    alert( "¿Queres filtrar por el valor del libro? ");
  }
  valorLibro()


 function seleccionarNombre() {
    let nombre = prompt ("Ingrese el nombre del libro")
  }

  seleccionarNombre()

  //OBJETOS

    const nombre = "Justos por pecadores";
    const autor = "Bruce Cook";
    const precio = 300;
    const disponible = true;
    const genero ="policiales";


    // ONJETOS LITERALES

    const libro = {
       nombre:"Justos por pecadores",
       autor: "Bruce Cook",        
       disponible: true,
       genero:"policiales", 
       precio: 300
    };

    //ARRAYs

    let libros = [ "justos por pecadores", "asesinato en grubb street", "el mar fue su tumba", "sir jhon fielding"];

    for (let  index = 0; index <= 3; index++){
  
    }
