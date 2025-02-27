function mostrarSeccion(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.add('oculto');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(id).classList.remove('oculto');
}
