listaDeTareas = [];

let inputt = document.getElementById("inputt")
let agregar = document.getElementById("agregar")
let listado = document.getElementById("listado");

agregar.addEventListener('click', () => {
    let texto = inputt.value();
 

    let lista = document.createElement('li');
    lista.textContent = texto;

        
    let borrar = document.createElement('button');
    borrar.textContent = 'X';
    borrar.addEventListener('click', () => {
        listado.removeChild(lista);
    });

    lista.appendChild(borrar);

    listado.appendChild(lista);

    inputt.value = '';
    inputt.focus();
});

