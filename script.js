// 1. Buscamos el botón por su ID
const boton = document.getElementById('miBotonn');

// 2. Escuchamos el evento 'click'
boton.addEventListener('click', () => {
    alert('¡Hola! Has activado el God Mode 🚀');
    console.log('El usuario hizo clic en el botón');
});