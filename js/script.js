/* ============================================================
   Roshn Kal — site script
   - Dark mode toggle (persisted in localStorage)
   - Scroll-reveal animation via IntersectionObserver
   - Small progressive enhancements
   ============================================================ */

(function () {
  "use strict";

  // Once JS is confirmed running, drop the no-js fallback class
  document.documentElement.classList.remove("no-js");

  /* ---------------- Dark mode ---------------- */
  var STORAGE_KEY = "rk-theme";
  var root = document.documentElement;

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    var toggles = document.querySelectorAll(".theme-toggle");
    toggles.forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    });
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    var current = root.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Active nav link ---------------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".rk-navbar .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === here) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* ---------------- Bootstrap tooltips (if any get added) ---------------- */
  var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

  /* ---------------- Contact form: lightweight client feedback ---------------- */
  var form = document.getElementById("rk-contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  }
})();