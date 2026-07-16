// ==========================================
// CONSTANTES GLOBALES DE IMÁGENES
// ==========================================
const IMAGENES_PROYECTOS = {
  ecommerce: [
    "../img/projects/ecommerce1.png",
    "../img/projects/ecommerce2.png",
    "../img/projects/ecommerce3.png",
    "../img/projects/ecommerce4.png",
  ],
  m2blocks: ["../img/projects/m2blocks.png"],
  supermario: ["../img/projects/mario1.png", "../img/projects/mario2.png"],
  impresion3d: [
    "../img/work/impresora1.jpg",
    "../img/work/impresora2.jpg",
    "../img/work/impresora3.jpg",
  ],
  futsal: [
    "../img/hobbies/vm1.jpeg",
    "../img/hobbies/vm2.jpeg",
    "../img/hobbies/vm3.jpeg",
  ],
  futbol: [
    "../img/hobbies/bonanza1.jpg",
    "../img/hobbies/bonanza2.JPEG",
    "../img/hobbies/bonanza3.jpeg",
    "../img/hobbies/bonanza4.jpeg",
  ],
  familia: ["../img/hobbies/familia1.jpeg"],
  racing: [
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
  // DATOS DE LOS PROYECTOS Y CATEGORÍAS
  // ==========================================
  const modalData = {
    "btn-ver-mas-ecommerce": {
      title: "E-commerce",
      description:
        "Co-desarrollo de una plataforma web Serverless con arquitectura limpia en JavaScript (ES6) y Bootstrap 5. Programé la lógica de negocio en el cliente, gestioné la persistencia de datos (usuarios, stock y auditoría) mediante LocalStorage.",
      images: IMAGENES_PROYECTOS.ecommerce,
    },
    "btn-ver-mas-m2blocks": {
      title: "M2 Blocks",
      description:
        "Desarrollo en equipo de una implementación híbrida de juego. Diseñado utilizando React para la construcción de una interfaz de usuario limpia e interactiva en el frontend, integrada de forma eficiente con Prolog.",
      images: IMAGENES_PROYECTOS.m2blocks,
    },
    "btn-ver-mas-supermario": {
      title: "Recreación de Super Mario Bros",
      description:
        "Proyecto colaborativo enfocado en modelado y arquitectura de software. Diseñado completamente con diagramas de clases y secuencia en UML bajo el paradigma POO e implementado en Java nativo.",
      images: IMAGENES_PROYECTOS.supermario,
    },
    "btn-ver-mas-impresion3d": {
      title: "Impresión & Diseño 3D",
      description:
        "Gestión de flota de impresión 3D, optimización de recursos en flujos de trabajo, modelado de piezas funcionales y troubleshooting avanzado.",
      images: IMAGENES_PROYECTOS.impresion3d,
    },
    "btn-ver-mas-futsal": {
      title: "Futsal Liga del Sur - Club Villa Mitre",
      description:
        "Desconexión de la rutina, estrategia en equipo, liderazgo y disciplina física acumulada a lo largo de más de 5 años de práctica activa.",
      images: IMAGENES_PROYECTOS.futsal,
    },
    "btn-ver-mas-futbol": {
      title: "Fútbol Liga Universitaria - Bonanza",
      description:
        "Espacio de esparcimiento e integración social fundado para disfrutar de la competencia  junto a amigos en la liga universitaria.",
      images: IMAGENES_PROYECTOS.futbol,
    },
    "btn-ver-mas-familia": {
      title: "Mi Familia",
      description:
        "El pilar fundamental de mi vida. Espacios de reunión, valores compartidos y apoyo mutuo incondicional en cada paso de mi carrera.",
      images: IMAGENES_PROYECTOS.familia,
    },
    "btn-ver-mas-racing": {
      title: "Pasión por Racing",
      description:
        "Seguimiento activo y acompañamiento incondicional a la Academia. Momentos compartidos que forman parte de mi corazon y mi identidad deportiva.",
      images: IMAGENES_PROYECTOS.racing,
    },
  };

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
  // ==========================================
  // FUNCIONES DE CONTROL PRINCIPAL (OPEN/CLOSE)
  // ==========================================
  function openModal(id) {
    const data = modalData[id];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    // Limpiamos el contenedor
    modalImagesContainer.innerHTML = "";

    // SI TIENE UNA SOLA IMAGEN: Añadimos la clase para manejo de singulares
    if (data.images.length === 1) {
      modalImagesContainer.classList.add("has-single-image");
    } else {
      modalImagesContainer.classList.remove("has-single-image");
    }

    // Recorremos las imágenes con su índice para identificar cuál es la primera
    data.images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = data.title;

      // Control de errores de carga
      img.onerror = () => {
        img.src = `https://placehold.co/300x200?text=${encodeURIComponent(data.title)}`;
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
    closeBtn.addEventListener("click", closeModal);
  }
  configurarBotonCerrar();

  // Click Fuera del Modal
  function configurarClickFueraModal() {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
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
