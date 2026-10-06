document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const tabs = document.querySelectorAll(".tab");
  const cards = document.querySelectorAll(".menu-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;

      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));

      cards.forEach((card) => {
        const type = card.dataset.type;
        const visible = filter === "all" || type === filter;
        card.style.display = visible ? "block" : "none";
      });
    });
  });

  const form = document.querySelector(".reservation-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("预约提交成功！我们会尽快联系您。");
      form.reset();
    });
  }
});
