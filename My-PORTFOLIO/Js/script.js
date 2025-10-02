document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupDarkMode();
  observeSections();
  setupFormValidation();
  initSmoothScroll();
  createParticles();
  init3DElements();
  animateSkillBadges();
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
      header.style.padding = "0.5rem 0";
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.padding = "1rem 0";
      header.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.1)";
    }
  });
});

function setupMobileNav() {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", isExpanded ? "false" : "true");

    mobileMenu.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");

    const bars = menuButton.querySelectorAll(".bar");
    if (isExpanded) {
      bars[0].style.transform = "";
      bars[1].style.opacity = "";
      bars[2].style.transform = "";
    } else {
      bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    }
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");

      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("hidden");

      const bars = menuButton.querySelectorAll(".bar");
      bars[0].style.transform = "";
      bars[1].style.opacity = "";
      bars[2].style.transform = "";
    });
  });
}
function setupDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  if (savedTheme === "dark") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
  themeToggle.addEventListener("click", () => {
    body.classList.add("theme-transition");

    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }

    setTimeout(() => {
      body.classList.remove("theme-transition");
    }, 500);
  });
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animation || "fade-in";
          entry.target.classList.add(animationType);

          if (entry.target.classList.contains("counter")) {
            animateCounter(entry.target);
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    if (el.classList.contains("stagger")) {
      const delay = Math.random() * 0.5;
      el.style.animationDelay = `${delay}s`;
    }
    observer.observe(el);
  });
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    element.textContent = Math.floor(current);

    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}
function setupFormValidation() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  const formElements = form.querySelectorAll("input, textarea");
  formElements.forEach((element) => {
    element.addEventListener("focus", () => {
      element.parentElement.classList.add("focused");
    });

    element.addEventListener("blur", () => {
      if (!element.value) {
        element.parentElement.classList.remove("focused");
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
      el.style.height = "0";
      el.style.opacity = "0";
    });

    if (!nameInput.value.trim()) {
      valid = false;
      const error = document.getElementById("name-error");
      if (error) {
        error.textContent = "Name is required";
        error.style.height = "auto";
        error.style.opacity = "1";
        nameInput.classList.add("shake");
        setTimeout(() => nameInput.classList.remove("shake"), 500);
      }
    }
    if (!emailInput.value.trim()) {
      valid = false;
      const error = document.getElementById("email-error");
      if (error) {
        error.textContent = "Email is required";
        error.style.height = "auto";
        error.style.opacity = "1";
        emailInput.classList.add("shake");
        setTimeout(() => emailInput.classList.remove("shake"), 500);
      }
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      valid = false;
      const error = document.getElementById("email-error");
      if (error) {
        error.textContent = "Please enter a valid email";
        error.style.height = "auto";
        error.style.opacity = "1";
        emailInput.classList.add("shake");
        setTimeout(() => emailInput.classList.remove("shake"), 500);
      }
    }

    if (!messageInput.value.trim()) {
      valid = false;
      const error = document.getElementById("message-error");
      if (error) {
        error.textContent = "Message is required";
        error.style.height = "auto";
        error.style.opacity = "1";
        messageInput.classList.add("shake");
        setTimeout(() => messageInput.classList.remove("shake"), 500);
      }
    }

    if (valid) {
      const submitButton = document.getElementById("submit-button");
      if (submitButton) {
        submitButton.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
      }

      setTimeout(() => {
        form.reset();
        formElements.forEach((el) =>
          el.parentElement.classList.remove("focused")
        );

        const successMessage = document.createElement("div");
        successMessage.className =
          "p-4 bg-green-100 text-green-800 rounded-md mb-4 slide-in-top";
        successMessage.style.padding = "1rem";
        successMessage.style.backgroundColor = "#dcfce7";
        successMessage.style.color = "#166534";
        successMessage.style.borderRadius = "0.5rem";
        successMessage.style.marginBottom = "1rem";
        successMessage.style.transform = "translateY(-20px)";
        successMessage.style.opacity = "0";
        successMessage.style.transition = "all 0.5s ease";
        successMessage.innerHTML =
          '<i class="fas fa-check-circle mr-2"></i> Your message has been sent successfully!';

        form.insertBefore(successMessage, form.firstChild);

        setTimeout(() => {
          successMessage.style.transform = "translateY(0)";
          successMessage.style.opacity = "1";
        }, 10);

        if (submitButton) {
          submitButton.innerHTML = "Send Message";
          submitButton.disabled = false;
        }

        setTimeout(() => {
          successMessage.style.transform = "translateY(-20px)";
          successMessage.style.opacity = "0";

          setTimeout(() => {
            successMessage.remove();
          }, 500);
        }, 5000);
      }, 1500);
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
        setTimeout(() => {
          targetElement.classList.add("highlight-section");
          setTimeout(
            () => targetElement.classList.remove("highlight-section"),
            1000
          );
        }, 500);
      }
    });
  });
}
function createParticles() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;
  const animatedBg = document.createElement("div");
  animatedBg.className = "animated-bg";
  heroSection.appendChild(animatedBg);

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 30 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particle.style.animationDelay = `${Math.random() * 5}s`;

    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;

    animatedBg.appendChild(particle);
  }
}
function init3DElements() {
  document.querySelectorAll(".service-icon").forEach((icon) => {
    icon.classList.add("icon-3d");
  });

  document
    .querySelectorAll(".project-card, .service-card")
    .forEach((element, index) => {
      if (index % 2 === 0) {
        element.classList.add("floating");
        element.style.animationDelay = `${index * 0.2}s`;
      }
    });

  document.querySelectorAll("h1").forEach((heading) => {
    heading.classList.add("text-3d");
  });

  document.querySelectorAll(".project-card, .service-card").forEach((card) => {
    card.addEventListener("mousemove", handleCardMove);
    card.addEventListener("mouseleave", resetCardPosition);
  });
}

function handleCardMove(e) {
  const card = this;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const angleX = (y - centerY) / 20;
  const angleY = (centerX - x) / 20;

  card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  card.style.transition = "transform 0.1s";

  const glare =
    card.querySelector(".card-glare") || document.createElement("div");
  if (!card.querySelector(".card-glare")) {
    glare.className = "card-glare";
    glare.style.position = "absolute";
    glare.style.top = "0";
    glare.style.left = "0";
    glare.style.width = "100%";
    glare.style.height = "100%";
    glare.style.borderRadius = "inherit";
    glare.style.pointerEvents = "none";
    glare.style.background =
      "radial-gradient(circle at " +
      x +
      "px " +
      y +
      "px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)";
    glare.style.zIndex = "1";
    card.appendChild(glare);
  } else {
    glare.style.background =
      "radial-gradient(circle at " +
      x +
      "px " +
      y +
      "px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)";
  }
}

function resetCardPosition() {
  this.style.transform = "";
  this.style.transition = "transform 0.5s var(--transition-bounce)";

  const glare = this.querySelector(".card-glare");
  if (glare) glare.remove();
}

function animateSkillBadges() {
  const badges = document.querySelectorAll(".skill-badge");

  badges.forEach((badge, index) => {
    badge.style.transitionDelay = `${index * 0.05}s`;

    badge.addEventListener("mouseenter", () => {
      const siblings = document.querySelectorAll(".skill-badge");
      siblings.forEach((sibling, siblingIndex) => {
        if (sibling !== badge) {
          const distance = Math.abs(index - siblingIndex);
          if (distance <= 2) {
            sibling.style.transform = `translateY(${
              -5 + distance * 2
            }px) scale(${1 - distance * 0.05})`;
          }
        }
      });
    });

    badge.addEventListener("mouseleave", () => {
      const siblings = document.querySelectorAll(".skill-badge");
      siblings.forEach((sibling) => {
        if (sibling !== badge) {
          sibling.style.transform = "";
        }
      });
    });
  });
}

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Fade out loader
  loader.classList.add("hidden");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 500);
});

(function () {
  const canvas = document.getElementById("code-particles");
  const ctx = canvas.getContext("2d", { alpha: true });

  // ---------- Configuration ----------

  const config = {
    chars: ["<", ">", "</>", "s"],
    colors: [
      "rgba(0,0,0,0.9)",
      "rgba(255,60,60,0.3)",
      "rgba(0,209,102,0.3)",
      "rgba(255,204,0,0.3)",
      "rgba(255,102,255,0.3)",
      "rgba(0,255,255,0.3)",
      "rgba(255,255,255,01)",
    ],
    maxParticlesDesktop: 50, // fewer on desktop
    maxParticlesMobile: 25, // fewer on mobile
    minSize: 14, // smaller size
    maxSize: 30, // smaller size
    minSpeed: 40, // medium float
    maxSpeed: 100,
    alphaFade: 0.65, // softer visibility
    gravity: 0, // optional downward force (px/s^2). Keep 0 for upward float.
    respawnWhenLeftScreen: true,
  };

  // ---------- DPR aware sizing ----------
  let DPR = Math.max(window.devicePixelRatio || 1, 1);

  function resizeCanvas() {
    DPR = Math.max(window.devicePixelRatio || 1, 1);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.width = Math.round(w * DPR);
    canvas.height = Math.round(h * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); // make drawing coordinates in CSS pixels
  }

  // ---------- Particle class ----------
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      // spawn near bottom with small Y jitter
      this.x = Math.random() * w;
      this.y = h + Math.random() * 60; // start slightly off-screen bottom
      // upward speed in px/s
      this.vy = -(
        config.minSpeed +
        Math.random() * (config.maxSpeed - config.minSpeed)
      );
      // slight horizontal drift
      this.vx = (Math.random() - 0.5) * 40;
      // rotation in radians and rotation speed (rad/s)
      this.angle = Math.random() * Math.PI * 2;
      const deg =
        Math.random() * config.maxAngleSpeed * 2 - config.maxAngleSpeed;
      this.va = deg * (Math.PI / 180);
      // font size
      this.size =
        config.minSize + Math.random() * (config.maxSize - config.minSize);
      // life duration (seconds) -- approximate (not strictly used)
      this.life = 6 + Math.random() * 8;
      // char & color
      this.char = config.chars[Math.floor(Math.random() * config.chars.length)];
      this.color =
        config.colors[Math.floor(Math.random() * config.colors.length)];
      // alpha (opacity start)
      this.alpha = Math.max(0.25, Math.random() * config.alphaFade + 0.3);
      // rotation anchor offset to center text properly when drawing
      this.textAlign = "center";
    }

    update(dt) {
      // dt in seconds
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.vy += config.gravity * dt;
      this.angle += this.va * dt;
      this.life -= dt;
      // fade out near top
      const h = canvas.height / DPR;
      if (this.y < h * 0.2) {
        // start fading faster near top
        this.alpha -= 0.6 * dt;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.textAlign = this.textAlign;
      ctx.textBaseline = "middle";
      ctx.font = `bold ${this.size}px "Courier New", monospace`;
      ctx.fillStyle = this.color;
      ctx.fillText(this.char, 0, 0);
      ctx.restore();
    }

    isDead() {
      // remove when alpha fully faded or completely above screen
      const h = canvas.height / DPR;
      return this.alpha <= 0.02 || this.y < -100;
    }
  }

  // ---------- Particles management ----------
  let particles = [];
  let lastTime = performance.now();
  let spawnTimer = 0;

  function getMaxParticles() {
    // adapt max on smaller screens
    return window.innerWidth < 600
      ? config.maxParticlesMobile
      : config.maxParticlesDesktop;
  }

  function spawnParticle() {
    // prevent overcrowding
    if (particles.length >= getMaxParticles()) return;
    particles.push(new Particle());
  }

  // spawn initially a few
  function initialSpawn() {
    const start = Math.round(getMaxParticles() * 0.4);
    for (let i = 0; i < start; i++) {
      const p = new Particle();
      // randomize starting vertical position so not all start at bottom
      p.y = (canvas.height / DPR) * (0.6 + Math.random() * 0.5);
      particles.push(p);
    }
  }

  // ---------- Animation loop ----------
  function animate(now) {
    const dt = Math.min(0.05, (now - lastTime) / 1000); // cap dt to avoid big jumps
    lastTime = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // update + draw
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update(dt);
      p.draw(ctx);
      if (p.isDead()) {
        // recycle: reset particle instead of splice to reduce GC thrash
        if (config.respawnWhenLeftScreen) {
          particles[i].reset();
        } else {
          particles.splice(i, 1);
        }
      }
    }

    // spawn occasionally based on timer
    spawnTimer += dt * 1000;
    if (spawnTimer >= config.spawnIntervalMs) {
      spawnTimer = 0;
      // spawn a few each interval with some randomness
      const spawnCount = 1 + Math.floor(Math.random() * 2);
      for (let j = 0; j < spawnCount; j++) spawnParticle();
    }

    requestAnimationFrame(animate);
  }

  // ---------- Resize + start ----------
  function start() {
    resizeCanvas();
    particles = [];
    initialSpawn();
    lastTime = performance.now();
    requestAnimationFrame(animate);
  }

  // handle window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
    }, 120);
  });

  // reduce particle load on mobile when cpu is limited
  function adaptToDevice() {
    // If device memory or other heuristics exist, you can reduce particles here
    // For now we already use screen width to lower count.
  }

  adaptToDevice();
  start();

  // Optional: pause animation on tab hidden to save CPU
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // stop draws by not requesting frames (simple approach)
      lastTime = performance.now();
    }
  });

  // expose config for debugging (open console)
  window.__codeParticlesConfig = config;
})();




const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    
    form.reset();
  } catch (err) {
    alert("Failed to send message!");
  }
});
