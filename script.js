document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("exploreBtn");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");
  const backToTop = document.createElement("button");

  // ===== Smooth Scroll from Explore Button =====
  exploreBtn.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });

  // ===== Smooth Scroll for Navbar Links =====
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===== Highlight Active Nav Link on Scroll =====
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ===== Back to Top Button =====
  backToTop.innerText = "⬆ Top";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);

  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "8px 12px";
  backToTop.style.background = "#4b2e2e";
  backToTop.style.color = "white";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "6px";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "1000";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Animate Menu Cards on Scroll =====
  const menuCards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  menuCards.forEach(card => {
    observer.observe(card);
  });
});
