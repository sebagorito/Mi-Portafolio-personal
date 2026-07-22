// ==========================================
// CONSTANTES GLOBALES DE IMÁGENES
// ==========================================
const IMAGENES_PROYECTOS = {
  "btn-ver-mas-ecommerce": [
    "../img/projects/ecommerce1.png",
    "../img/projects/ecommerce2.png",
    "../img/projects/ecommerce3.png",
    "../img/projects/ecommerce4.png",
  ],
  "btn-ver-mas-m2blocks": ["../img/projects/m2blocks.png"],
  "btn-ver-mas-supermario": [
    "../img/projects/mario1.png",
    "../img/projects/mario2.png",
  ],
  "btn-ver-mas-impresion3d": [
    "../img/work/impresora1.jpg",
    "../img/work/impresora2.jpg",
    "../img/work/impresora3.jpg",
  ],
  "btn-ver-mas-futsal": [
    "../img/hobbies/vm1.jpeg",
    "../img/hobbies/vm2.jpeg",
    "../img/hobbies/vm3.jpeg",
  ],
  "btn-ver-mas-futbol": [
    "../img/hobbies/bonanza1.jpg",
    "../img/hobbies/bonanza2.JPEG",
    "../img/hobbies/bonanza3.jpeg",
    "../img/hobbies/bonanza4.jpeg",
  ],
  "btn-ver-mas-familia": ["../img/hobbies/familia1.jpeg"],
  "btn-ver-mas-racing": [
    "../img/hobbies/racing1.jpeg",
    "../img/hobbies/racing2.jpeg",
    "../img/hobbies/racing3.jpeg",
    "../img/hobbies/racing4.jpeg",
    "../img/hobbies/racing5.jpeg",
  ],
};

// Activa los tooltips flotantes en el navbar
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // REFERENCIAS DEL DOM
  // ==========================================
  const modal = document.getElementById("custom-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImagesContainer = document.getElementById(
    "modal-images-container",
  );
  const closeBtn = document.getElementById("modal-close-btn");

  // ==========================================
  // FUNCIONES DE CONTROL PRINCIPAL (OPEN/CLOSE)
  // ==========================================
  function openModal(id) {
    const lang = window.currentLanguage || "es";
    const modalText = translations[lang]?.modales?.[id];
    const images = IMAGENES_PROYECTOS[id];

    if (!modalText || !images) return;

    modalTitle.textContent = modalText.title;
    modalDescription.textContent = modalText.description;

    // Limpiamos el contenedor
    modalImagesContainer.innerHTML = "";

    // SI TIENE UNA SOLA IMAGEN: Añadimos la clase para manejo de singulares
    if (images.length === 1) {
      modalImagesContainer.classList.add("has-single-image");
    } else {
      modalImagesContainer.classList.remove("has-single-image");
    }

    // Recorremos las imágenes con su índice para identificar cuál es la primera
    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = modalText.title;

      // Control de errores de carga
      img.onerror = () => {
        img.src = `https://placehold.co/300x200?text=${encodeURIComponent(modalText.title)}`;
      };

      // CONDICIÓN EXCLUSIVA:
      // Si es el primer elemento (index 0) de Bonanza ("btn-ver-mas-futbol")
      // o si pertenece a M2 Blocks ("btn-ver-mas-m2blocks")
      if (
        (id === "btn-ver-mas-futbol" && index === 0) ||
        id === "btn-ver-mas-m2blocks"
      ) {
        img.classList.add("img-portrait");
      }

      modalImagesContainer.appendChild(img);
    });

    modal.classList.remove("anim-close");
    modal.classList.add("anim-open");
  }

  function closeModal() {
    if (modal.classList.contains("anim-open")) {
      modal.classList.remove("anim-open");
      modal.classList.add("anim-close");

      setTimeout(() => {
        modal.classList.remove("anim-close");
      }, 400);
    }
  }

  // ==========================================
  // IMPLEMENTACIÓN DE COMPORTAMIENTOS Y BOTONES
  // ==========================================

  // Botón Ver Más
  function configurarBotonesVerMas() {
    document.querySelectorAll("[id^='btn-ver-mas-']").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(button.id);
      });
    });
  }
  configurarBotonesVerMas();

  // Botón Cerrar (X)
  function configurarBotonCerrar() {
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
  }
  configurarBotonCerrar();

  // Click Fuera del Modal
  function configurarClickFueraModal() {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
  }
  configurarClickFueraModal();

  // Tecla Escape
  function configurarTeclaEscape() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });
  }
  configurarTeclaEscape();
});
