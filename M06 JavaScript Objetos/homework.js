/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
// APUNTES DE CLASE:
// Estructura key:value

// var miOBjeto = {}; Objeto vacío

// var deportes = {
//    conBalon: ["futbol", "basket", "handball"],
//    sinBalon: ["natación", "atletismo", "tenis"],
// };

// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// Objeto dentro de otro objeto


// ACCEDER
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// console.log(persona.edad);

// ASIGNAR
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// persona.nombre = 'Martín';
// persona.edad = 32;
// console.log(persona.nombre);

// CREAR
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);

// BORRAR
// delete autos.marcas;
// console.log(autos);

// Dentro de la propiedad del objeto puede guardarse una function
// var misFunciones = {
//    saludar: function (){
//       return "Hola Mundo";
//    },
// }



// DOT NOTATION
// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
// atuendos['piernas'] = ['Bermudas', 'Pantalones'];

// IMPORTANTE ESCRIBIR LA PROPIEDAD COMO UN STRING
// var comidas = {};
// var diferenciaDeNotaciones = function(propUno, propDos){
//    comidas.propUno = ["Frutas", "Vegetales"];
//    comidas ['propDos'] = ['Hamburguesas', 'Papas Fritas'];
// }
// diferenciaDeNotaciones('desayuno', 'almuerzo');

// La forma en la que se agregan las propiedades al objeto se toman
// literalmente, en lugar de como valor de entrada de la función
// Además, propUno se toma como propiedad pero así no es posible 
// declararla como variable.

//    comidas [propDos] = ['Hamburguesas', 'Papas Fritas'];
// Esto no funciona, porque propDos no es un string, sino una variable



// MÉTODOS AVANZADAS

// HAS OWN PROPERTY: Valor booleano que indica si el objeto tiene la propiedad
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');
// console.log(tienePropiedad);
// Útl para saber si un objeto tiene una propiedad.

// KEYS: devuelve un array con las propiedades del objeto
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

// for-in loop: recorre las propiedades de un OBJETO 
// var mundo = {continentes: 7, países: 195, océanos: 5};
// for (let prop in mundo) {
//    console.log('Esta es la propiedad: ', prop);
//    console.log('Este es el valor: ', mundo[prop]);
// }

//THIS: hace referencia al objeto que lo contiene
// var mascota = {
//    animal: 'Perro',
//    raza: 'Ovejero Alemán',
//    amistoso: true,
//    dueño: 'María López',
//    info: () => {
//       console.log('Mi perro es un  ' + this.raza);
//    },
// };
// mascota.info();

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   let gato = {
      nombre: nombre,
      edad: edad,
      meow: function(){return "Meow!";}
   };   
   return gato;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   let usuario = {
      nombre: nombre,
      email: email,
      password: password,
   };
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email) {
      return true;
   } else {
      return false;
   }
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objeto.hasOwnProperty(propiedad)) {
      return true;
   } else { 
      return false;
   }
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password === password) return true;
   else return false;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   // objetoUsuario.amigos = objetoUsuario.amigos || [];
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   // for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
   //    objetoMuchosUsuarios[i].esPremium = true;
   // }
   // return objetoMuchosUsuarios;

   objetoMuchosUsuarios.forEach(usuario => usuario.esPremium = true);
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let add = 0;

   // for (let i = 0; i < objetoUsuario.posts.length; i++) {
   //    add += objetoUsuario.posts[i].likes;
   // }
   objetoUsuario.posts.forEach(post => add += post.likes);
   return add;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function () {
      let descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
      objetoProducto["Precio final"] = objetoProducto.precio - descuento;
      return objetoProducto["Precio final"];
   }
   return objetoProducto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
