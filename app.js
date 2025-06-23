document.getElementById('tareaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Para obtner los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const tipoSelect = document.getElementById('tipo');
    const tipo = tipoSelect.options[tipoSelect.selectedIndex].value;
    const prioridadRadios = document.getElementsByName('prioridad');
    let prioridad = '';
    for (const radio of prioridadRadios) {
        if (radio.checked) {
            prioridad = radio.value;
            break;
        }
    }

    // Las validaciones de los campos 
    if (!nombre || !fecha || !tipo || !prioridad) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Creacion del objeto de tarea para registrar
    const tarea = {
        nombre,
        fecha,
        descripcion,
        tipo,
        prioridad
    };

    // Aqui se crea una tarjeta para mostrar la tarea 
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    tarjeta.innerHTML = `
        <h3>${tarea.nombre} (${tarea.prioridad})</h3>
        <p><strong>Fecha de entrega:</strong> ${tarea.fecha}</p>
        <p><strong>Tipo:</strong> ${tarea.tipo}</p>
        <p><strong>Descripción:</strong> ${tarea.descripcion}</p>
    `;

    document.getElementById('listaTareas').appendChild(tarjeta);

    // Para tener colores en las tres opciones de prioridad

    function obtenerColorPrioridad(prioridad){
        switch (prioridad){
            case 'Urgente':
            return '#dc3545';
        }
    }

    // Aqui se reinicia el formulario
    document.getElementById('tareaForm').reset();
});