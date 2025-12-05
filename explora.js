const burger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

// 1. Lógica del Sidebar (Sin cambios)
burger.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Cerrar si se toca fuera
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});


// 2. Lógica de Validación del Formulario

const form = document.getElementById('contactForm');
const fields = ['name', 'email', 'subject', 'message']; // Campos requeridos

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Detener el envío del formulario por defecto
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Iterar sobre los campos requeridos
    fields.forEach(fieldName => {
        const input = document.getElementById(fieldName);
        const errorElement = document.getElementById(`err-${fieldName}`);
        const value = input.value.trim();

        // Limpiar errores anteriores
        errorElement.textContent = '';
        input.classList.remove('invalid');

        if (value === '') {
            // Validar si está vacío
            errorElement.textContent = 'Este campo es obligatorio.';
            input.classList.add('invalid');
            isValid = false;
        } else if (fieldName === 'name' && value.length < 2) {
            // Validación de longitud para el nombre
            errorElement.textContent = 'Mínimo 2 caracteres.';
            input.classList.add('invalid');
            isValid = false;
        } else if (fieldName === 'message' && value.length < 10) {
            // Validación de longitud para el mensaje
            errorElement.textContent = 'Mínimo 10 caracteres.';
            input.classList.add('invalid');
            isValid = false;
        } else if (fieldName === 'email' && !isValidEmail(value)) {
            // Validación de formato de correo electrónico
            errorElement.textContent = 'Formato de correo inválido.';
            input.classList.add('invalid');
            isValid = false;
        }
    });

    if (isValid) {
        // Simulación de éxito
        showSuccessMessage();
        form.reset(); // Limpiar el formulario
    }
}

function isValidEmail(email) {
    // Expresión regular simple para validar el formato de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showSuccessMessage() {
    const successDiv = document.getElementById('formSuccess');
    successDiv.textContent = '¡Validación exitosa!';
    successDiv.style.color = 'green';

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        successDiv.textContent = '';
    }, 5000);
}