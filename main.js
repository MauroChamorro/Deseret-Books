 VARIABLES
       switch (acepto) {
         case "SI":
           alert ("Que buen libro has elegido!")
           break;
      
         default: "Te interesarìa ver otro genero de lectura?"
           break;
       }
      
    

  //FUNCIONES
 
  function agregarCompra (libro){
    this.misCompras.push(libro);
  }




  // ARRAYS
    const productos = [
      {
       nombre:"Justicia Ciega",
       autor: "Bruce Alexander",        
       disponible: true,
       genero:"policiales", 
       precio: 300
      },{
        nombre:"Asesinato en Grub Street",
        autor: "Bruce Alexander",        
        disponible: true,
        genero:"policiales", 
        precio: 350
      }, {
        nombre:"Experimentando la traiciòn",
        autor: "Bruce Alexander",        
        disponible: true,
        genero:"policiales", 
        precio: 600
      } ,{
        nombre:"Persona o personas desconocidas",
        autor: "Bruce Alexander",        
        disponible: false,
        genero:"policiales", 
        precio: 500
      }, {
        nombre:"Reglas del compromiso",
        autor: "Bruce Alexander",        
        disponible: false,
        genero:"policiales", 
        precio: 800
      }
    ]  
    let producto = ["justicia ciega","asesinato en grub Street", "Experimentando la traiciòn", "Persona o personas desconocidas", "Reglas del compromiso"];
            for (let index = 0; index <= 4;  index++) {
      alert (producto.length[index]);
      
    }  

  // DOM 
       let libro = document.getElementById("libro") 
       libro.innerText = "Justicia Ciega"
       let libroA = document.getElementById("libroA") 
       libroA.innerText = "Asesinato en Grub Street"
       let libroE = document.getElementById("libroE") 
       libroE.innerText = "Experimentando la traiciòn"
       let libroP = document.getElementById("libroP") 
       libroP.innerText = "Persona o Personas desconocidas"
       let libroR = document.getElementById("libroR") 
       libroR.innerText = "Reglas del compromiso"
    

    const misCompras = []

    // LIBRERIAS

    const justicia = document.querySelector(`#mybook`)
    justicia.addEventListener(`click`, () => {
      Swal.fire ({
        title: 'Excelente libro has elegido!',
        text: 'Termina con tu compra, falta poco',
        icon: 'success',
        confirmButtonText: 'Vamos, ya casi te lo llevas!'
})})
 
   const experiment = document.querySelector(`#mybookE`) 
    experiment.addEventListener('click', () => {
     Swal.fire({
      title: 'Excelente libro has elegido!',
      text: 'Termina con tu compra, falta poco',
      icon: 'success',
      confirmButtonText: 'Vamos, ya casi te lo llevas!'
     })})
 const rules = document.querySelector(`#mybookR`) 
  rules.addEventListener('click', () => {
    Swal.fire({
      title: 'Excelente libro has elegido!',
      text: 'Termina con tu compra, falta poco',
      icon: 'success',
      confirmButtonText: 'Vamos, ya casi te lo llevas!'
   })})
 const persona = document.querySelector(`#mybookP`) 
 persona.addEventListener('click', () => {
   Swal.fire({
    title: 'Excelente libro has elegido!',
    text: 'Termina con tu compra, falta poco',
    icon: 'success',
    confirmButtonText: 'Vamos, ya casi te lo llevas!'
   })})
 const grub = document.querySelector(`#mybookA`) 
 grub.addEventListener('click', () => {
   Swal.fire({
    title: 'Excelente libro has elegido!',
    text: 'Termina con tu compra, falta poco',
    icon: 'success',
    confirmButtonText: 'Vamos, ya casi te lo llevas!'
   })})

 const compra = document.querySelector(`#enviar`)
compra.addEventListener(`click`, () => {
  Swal.fire({
     title: 'Excelente libro has e+!',
     text: 'Vuelve para seguir armando tu biblioteca',
     icon: 'success',
     confirmButtonText: 'Vuela, imagina hay màs libros por leer!'
 })})


