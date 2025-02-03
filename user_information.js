// Función para previsualizar la imagen de perfil
function previewProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('profile-picture-preview');
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Función para manejar el envío del formulario
document.getElementById('profile-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Aquí puedes agregar la lógica para guardar los cambios (por ejemplo, enviar a un servidor)
    console.log('Nombre:', username);
    console.log('Correo Electrónico:', email);

    alert('Cambios guardados correctamente');
});

// Función para regresar a la pantalla anterior
document.getElementById('cancel-button').addEventListener('click', function () {
    window.history.back();
});