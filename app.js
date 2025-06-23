document.getElementById('tareaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
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
