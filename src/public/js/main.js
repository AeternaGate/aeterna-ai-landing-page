// Neural Field Animation
class NeuralField {
  constructor() {
    this.canvas = document.getElementById("neural-field");
    this.ctx = this.canvas.getContext("2d");
    this.nodes = [];
    this.connections = [];
    this.nodeCount = 50;
    this.maxDistance = 150;

    this.init();
    this.animate();
  }

  init() {
    // Set canvas size to window size
    this.resizeCanvas();

    // Create nodes
    for (let i = 0; i < this.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    // Create connections
    this.updateConnections();

    // Add event listeners
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  updateConnections() {
    this.connections = [];
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.maxDistance) {
          this.connections.push({
            from: i,
            to: j,
            distance: distance,
          });
        }
      }
    }
  }

  animate() {
    // Clear canvas with transparent black for trail effect
    this.ctx.fillStyle = "rgba(18, 18, 18, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw connections
    this.ctx.strokeStyle = "rgba(0, 200, 83, 0.1)";
    this.ctx.lineWidth = 0.5;

    for (const conn of this.connections) {
      const from = this.nodes[conn.from];
      const to = this.nodes[conn.to];

      this.ctx.beginPath();
      this.ctx.moveTo(from.x, from.y);
      this.ctx.lineTo(to.x, to.y);
      this.ctx.stroke();
    }

    // Update and draw nodes
    this.ctx.fillStyle = "#00C853";

    for (const node of this.nodes) {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

      // Draw node
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Update connections periodically
    if (Math.random() < 0.01) {
      this.updateConnections();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize neural field when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new NeuralField();

  // Smooth scrolling for navigation links with enhanced effects
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        // Add a temporary class to the target section for animation
        target.classList.add("scroll-target");

        // Remove the class after animation completes
        setTimeout(() => {
          target.classList.remove("scroll-target");
        }, 1000);

        // Scroll to target with offset
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Split Catalog Panel Interactions
  const integrationPanel = document.getElementById("integration-panel");
  const productDevPanel = document.getElementById("product-dev-panel");

  if (integrationPanel && productDevPanel) {
    integrationPanel.addEventListener("mouseenter", () => {
      productDevPanel.style.transform = "scale(0.9)";
      productDevPanel.style.opacity = "0.7";
    });

    integrationPanel.addEventListener("mouseleave", () => {
      productDevPanel.style.transform = "scale(1)";
      productDevPanel.style.opacity = "1";
    });

    productDevPanel.addEventListener("mouseenter", () => {
      integrationPanel.style.transform = "scale(0.9)";
      integrationPanel.style.opacity = "0.7";
    });

    productDevPanel.addEventListener("mouseleave", () => {
      integrationPanel.style.transform = "scale(1)";
      integrationPanel.style.opacity = "1";
    });
  }

  // Horizontal scroll for methodology timeline
  const timelineContainer = document.querySelector(".timeline-container");
  if (timelineContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    timelineContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - timelineContainer.offsetLeft;
      scrollLeft = timelineContainer.scrollLeft;
    });

    timelineContainer.addEventListener("mouseleave", () => {
      isDown = false;
    });

    timelineContainer.addEventListener("mouseup", () => {
      isDown = false;
    });

    timelineContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timelineContainer.offsetLeft;
      const walk = (x - startX) * 2;
      timelineContainer.scrollLeft = scrollLeft - walk;
    });
  }

  // Success story card expansion
  const storyCards = document.querySelectorAll(".story-card");
  storyCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });

  // Form submission handling (for contact form)
  const contactForms = document.querySelectorAll("form");
  contactForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simple form validation and submission simulation
      alert("Thank you for your interest! We will contact you shortly.");
      form.reset();
    });
  });

  // Add functionality to all buttons
  const ctaButtons = document.querySelectorAll(".cta-button");
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the href attribute if it's an anchor element
      const href = this.getAttribute("href");

      // Add active state effect
      this.classList.add("active");

      // Remove active state after animation
      setTimeout(() => {
        this.classList.remove("active");
      }, 300);

      // Handle navigation if href exists
      if (href) {
        if (href.startsWith("#")) {
          // Scroll to section
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: "smooth",
            });
          }
        } else if (href === "/" || href === "/contact") {
          // Navigate to page
          window.location.href = href;
        } else {
          // For external links or other internal pages
          window.location.href = href;
        }
      }
    });
  });

  // Add hover effects to buttons
  ctaButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
      this.style.boxShadow = "0 8px 20px rgba(0, 200, 83, 0.3)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 5px 15px rgba(0, 200, 83, 0.4)";
    });
  });
});
