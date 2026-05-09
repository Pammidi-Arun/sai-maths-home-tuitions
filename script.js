/* ================================================
   Sai Maths Home Tuitions — script.js
   ================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Mobile hamburger menu ---------- */
  const ham = document.getElementById("ham");
  const nav = document.getElementById("nav");

  ham.addEventListener("click", () => nav.classList.toggle("open"));

  /* Close menu on any nav-link click and smooth-scroll */
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        nav.classList.remove("open");
        const target = document.querySelector(href);
        if (target) {
          const offset = 66; // navbar height
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });

  /* ---------- Navbar shadow on scroll ---------- */
  window.addEventListener("scroll", () => {
    nav.style.boxShadow = window.scrollY > 20
      ? "0 4px 20px rgba(26,86,219,0.1)"
      : "0 2px 16px rgba(26,86,219,0.07)";
  });

  /* ---------- Scroll-reveal (IntersectionObserver) ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ---------- Contact form submission ---------- */
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", handleSubmit);
  }

  function handleSubmit() {
    const name    = document.getElementById("parentName")?.value.trim();
    const phone   = document.getElementById("phone")?.value.trim();
    const cls     = document.getElementById("studentClass")?.value;
    const area    = document.getElementById("area")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    /* Basic validation */
    if (!name || !phone || !cls) {
      alert("Please fill in your name, phone number, and student's class.");
      return;
    }

    /* WhatsApp deep-link (opens chat with pre-filled message) */
    const text = encodeURIComponent(
      `Hello! I'd like to book a free demo class.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Class: ${cls}\n` +
      `Area: ${area || "Not specified"}\n` +
      `Message: ${message || "None"}`
    );
    const waNumber = "919160713726"; // international format, no +
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");

    /* UI feedback */
    submitBtn.textContent = "✓ Opening WhatsApp…";
    submitBtn.style.background = "#16a34a";
    submitBtn.disabled = true;

    /* Re-enable after 5 s */
    setTimeout(() => {
      submitBtn.textContent = "Book Free Demo Class →";
      submitBtn.style.background = "";
      submitBtn.disabled = false;
    }, 5000);
  }

});