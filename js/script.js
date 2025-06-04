document.addEventListener("DOMContentLoaded", function () {
    // 1) Referencias a elementos
    const btnAbrir = document.getElementById("btnCotizar");
    const modal = document.getElementById("modalCotizar");
    const btnCerrar = document.getElementById("btnCerrarModal");
    const overlay = modal.querySelector(".modal__overlay");

    // 2) Mostrar el modal
    function abrirModal() {
      modal.classList.remove("hidden");
      // Evitar scroll de fondo
      document.body.style.overflow = "hidden";
    }

    // 3) Ocultar el modal
    function cerrarModal() {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }

    // 4) Asignar eventos
    btnAbrir.addEventListener("click", abrirModal);
    btnCerrar.addEventListener("click", cerrarModal);
    overlay.addEventListener("click", cerrarModal);

    // Cerrar con tecla “Esc”
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        cerrarModal();
      }
    });
  });