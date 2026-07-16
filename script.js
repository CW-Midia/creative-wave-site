// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.style.display === "flex";
      links.style.display = open ? "none" : "flex";
      links.style.flexDirection = "column";
      links.style.position = "absolute";
      links.style.top = "76px";
      links.style.left = "0";
      links.style.right = "0";
      links.style.background = "#2B2A28";
      links.style.padding = "24px 32px";
      links.style.gap = "20px";
      links.style.borderBottom = "1px solid #45423C";
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  // Contact form -> WhatsApp
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const service = form.service.value;
      const message = form.message.value.trim();

      if (!name || !phone || !message) {
        showFormStatus("Preencha nome, WhatsApp e mensagem antes de enviar.", true);
        return;
      }

      const text =
        `Olá! Me chamo ${name}.%0A` +
        `Interesse: ${service}%0A` +
        `WhatsApp: ${phone}%0A%0A` +
        `${encodeURIComponent(message)}`;

      const waLink = `https://wa.me/message/3SI7TIXU5ECCD1?text=${text}`;
      showFormStatus("Abrindo o WhatsApp com sua mensagem...", false);
      window.open(waLink, "_blank");
      form.reset();
    });
  }

  function showFormStatus(msg, isError) {
    let el = document.querySelector("#form-status");
    if (!el) return;
    el.textContent = msg;
    el.style.color = isError ? "#D98F8F" : "#B8894A";
  }

  // Scroll-reveal for section headers
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
