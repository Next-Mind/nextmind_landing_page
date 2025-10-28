
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // animação do hambúrguer em X
  hamburger.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1 // 10% do elemento visível
  });

  elements.forEach(el => observer.observe(el));
});

/* --- DESCRIÇÃO DOS MEMBROS --- */
document.addEventListener("DOMContentLoaded", () => {
  const members = document.querySelectorAll(".team-member");

  // cria elementos de descrição e overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const descriptionBox = document.createElement("div");
  descriptionBox.className = "member-description";

  document.body.appendChild(overlay);
  document.body.appendChild(descriptionBox);

  members.forEach(member => {
    member.addEventListener("click", () => {
      const name = member.querySelector("h3").textContent;
      const role = member.querySelector("p").textContent;
      const desc = member.dataset.description;

      descriptionBox.innerHTML = `
        <h3>${name}</h3>
        <h4 style="color:#3CA668;margin-bottom:1rem;font-weight:600;">${role}</h4>
        <p>${desc}</p>
        <button>Fechar</button>
      `;

      overlay.classList.add("active");
      descriptionBox.classList.add("active");
    });
  });

  // fechar ao clicar no botão ou no overlay
  overlay.addEventListener("click", closeDescription);
  descriptionBox.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") closeDescription();
  });

  function closeDescription() {
    overlay.classList.remove("active");
    descriptionBox.classList.remove("active");
  }
});
