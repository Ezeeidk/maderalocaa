document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nick = document.getElementById('nick').value.trim();
        const contrasena = document.getElementById('contrasena').value.trim();

        if (!nick || !contrasena) {
            alert('Por favor completa todos los campos.');
            return;
        }

        form.reset();
    });
});
