const formGuardar = document.getElementById('formGuardar');
const nombreGuardar = document.getElementById('nombreGuardar');
const errorNombre = document.getElementById('errorNombre');
const resultadoGuardar = document.getElementById('resultadoGuardar');
const resultadoMostrar = document.getElementById("resultadoMostrar");
const formEditar = document.getElementById("formEditar");
const nombreEditar = document.getElementById("nombreEditar");
const resultadoEditar = document.getElementById("resultadoEditar");
const formMostrar = document.getElementById("formMostrar");
const formEliminar = document.getElementById("formEliminar");
const resultadoEliminar = document.getElementById("resultadoEliminar");
const formMascota = document.getElementById("formMascota");

nombreGuardar.addEventListener('input', validarNombre);

function validarNombre() {
  const valor = nombreGuardar.value.trim();

  if (valor === '') {
    errorNombre.textContent = 'El nombre es obligatorio';
    return false;
  } else if (valor.length < 3) {
    errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres';
    return false;
  } else {
    errorNombre.textContent = '';
    return true;
  }
}

formGuardar.addEventListener('submit', guardarNombre);

function guardarNombre(evento) {
  evento.preventDefault();

  if (!validarNombre()) {
    return;
  }

  localStorage.setItem("nombre guardado", nombreGuardar.value.trim());
  resultadoGuardar.textContent = "El nombre se ha guardado correctamente";
  formGuardar.reset();
}

formMostrar.addEventListener("submit", mostrarNombre);

function mostrarNombre(evento) {
  evento.preventDefault();
  const nombreGuardado = localStorage.getItem("nombre guardado");

  resultadoMostrar.textContent = nombreGuardado === null
    ? "No hay un nombre guardado."
    : "Nombre guardado: " + nombreGuardado;
}

formEditar.addEventListener("submit", editarNombre);

function editarNombre(evento) {
  evento.preventDefault();
  const nuevoNombre = nombreEditar.value.trim();

  if (nuevoNombre.length < 3) {
    resultadoEditar.textContent = "El nuevo nombre debe tener al menos 3 caracteres.";
    return;
  }

  localStorage.setItem("nombre guardado", nuevoNombre);
  resultadoEditar.textContent = "Nombre actualizado correctamente.";
  formEditar.reset();
}

formEliminar.addEventListener("submit", eliminarNombre);

function eliminarNombre(evento) {
  evento.preventDefault();
  localStorage.removeItem("nombre guardado");
  resultadoEliminar.textContent = "Nombre eliminado correctamente.";
  formEliminar.reset();
}

formMascota.addEventListener("submit", (event)=> {
    event.preventDefault();
    const mascota = {
        nombre: document.getElementById("mascota").value.trim(),
        raza: document.getElementById("raza").value.trim(),
        edad: parseInt(document.getElementById("edad").value)
    };

    localStorage.setItem("mascota", JSON.stringify(mascota));

});


