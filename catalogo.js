// ==========================
// BURGER MENU
// ==========================
const burger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

function openSidebar() {
  if (!sidebar || !overlay) return;
  sidebar.classList.add("active");
  overlay.classList.add("active");
  sidebar.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "false");
}
function closeSidebar() {
  if (!sidebar || !overlay) return;
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  sidebar.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");
}

if (burger) {
  burger.addEventListener("click", openSidebar);
  burger.addEventListener("keypress", (e) => { if (e.key === "Enter") openSidebar(); });
}
if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", closeSidebar);
  closeSidebarBtn.addEventListener("keypress", (e) => { if (e.key === "Enter") closeSidebar(); });
}
if (overlay) overlay.addEventListener("click", closeSidebar);

// ==========================
// BASE DE DATOS (interna y simple)
// ==========================
const productData = {
  reloj1: {
    title: "Reloj #1", img: "img/reloj.jpg", description: "Reloj ilustrativo", peso: "150g", material: "Acero inoxidable", garantia: "1 año"
  },
  reloj2: { title: "Reloj #2", img: "img/reloj.jpg", description: "Reloj ilustrativo", peso: "145g", material: "Acero", garantia: "1 año" },
  reloj3: { title: "Reloj #3", img: "img/reloj.jpg", description: "Reloj ilustrativo", peso: "148g", material: "Acero", garantia: "1 año" },
  reloj4: { title: "Reloj #4", img: "img/reloj.jpg", description: "Reloj ilustrativo", peso: "152g", material: "Acero", garantia: "1 año" },

  cadena1: { title: "Cadena #1", img: "img/cadenas.jpg", description: "Cadena ilustrativa", peso: "60g", material: "Plata", garantia: "6 meses" },
  cadena2: { title: "Cadena #2", img: "img/cadenas.jpg", description: "Cadena ilustrativa", peso: "58g", material: "Plata", garantia: "6 meses" },
  cadena3: { title: "Cadena #3", img: "img/cadenas.jpg", description: "Cadena ilustrativa", peso: "63g", material: "Plata", garantia: "6 meses" },
  cadena4: { title: "Cadena #4", img: "img/cadenas.jpg", description: "Cadena ilustrativa", peso: "61g", material: "Plata", garantia: "6 meses" },

  anillo1: { title: "Anillo #1", img: "img/anillo.jpg", description: "Anillo ilustrativo", peso: "20g", material: "Oro", garantia: "1 año" },
  anillo2: { title: "Anillo #2", img: "img/anillo.jpg", description: "Anillo ilustrativo", peso: "22g", material: "Oro", garantia: "1 año" },

  pendiente1: { title: "Pendiente #1", img: "img/pendientes.jpg", description: "Pendiente ilustrativo", peso: "15g", material: "Plata", garantia: "6 meses" },
  pendiente2: { title: "Pendiente #2", img: "img/pendientes.jpg", description: "Pendiente ilustrativo", peso: "16g", material: "Plata", garantia: "6 meses" }
};

// ==========================
// ELEMENTOS DE LA MODAL
// ==========================
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPeso = document.getElementById("modal-peso");
const modalMaterial = document.getElementById("modal-material");
const modalGarantia = document.getElementById("modal-garantia");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

// ==========================
// ABRIR MODALES (delegación)
// ==========================
document.addEventListener("click", (e) => {
  const btn = e.target.closest && e.target.closest(".btn-info");
  if (!btn) return;

  const card = btn.closest(".card");
  if (!card) return;

  const id = card.dataset.product;
  const info = productData[id];

  if (!info) {
    console.warn("Producto no encontrado:", id);
    return;
  }

  // Llenar modal
  if (modalTitle) modalTitle.textContent = info.title || "";
  if (modalDesc) modalDesc.textContent = info.description || "";
  if (modalPeso) modalPeso.textContent = info.peso || "N/A";
  if (modalMaterial) modalMaterial.textContent = info.material || "N/A";
  if (modalGarantia) modalGarantia.textContent = info.garantia || "N/A";
  if (modalImg) {
    modalImg.src = info.img || "";
    modalImg.alt = info.title || "Imagen del producto";
  }

  if (modal) {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // bloquear scroll de fondo
  }
});

// ==========================
// CERRAR MODAL
// ==========================
function closeModal() {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

if (modalClose) modalClose.addEventListener("click", closeModal);

// Cerrar al dar click en fondo (comprobamos que el click sea en la capa .modal)
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("show")) {
    closeModal();
  }
});

