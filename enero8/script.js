const inputt = document.getElementById('inputt');
const agregar = document.getElementById('agregar');
const listado = document.getElementById('listado');

const agregarTarea = () => {
    const tareaTexto = inputt.value.trim();
    if (tareaTexto === '') {
        alert('Por favor, ingresa una tarea válida.');
        return;
    }

    const tareas = document.createElement('li');
    tareas.className = 'tarea';
    tareas.innerHTML = `
        <span>${tareaTexto}</span>
        <div>
            <button class="completar">Completar</button>
            <button class="eliminar">Eliminar</button>
        </div>
    `;

    tareas.querySelector('.completar').addEventListener('click', () => {
        tareas.querySelector('span').classList.toggle('completada');
    });

    tareas.querySelector('.eliminar').addEventListener('click', () => {
        listado.removeChild(tareas);
    });

    listado.appendChild(tareas);

    inputt.value = '';
    inputt.focus();
};

agregar.addEventListener('click', agregarTarea);

inputt.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});