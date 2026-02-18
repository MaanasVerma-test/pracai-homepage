/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}


/* =========================
   PAGE LOADED
========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     CTA GET STARTED BUTTON
  ========================= */

  const ctaBtn = document.querySelector(".cta .btn-secondary");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      alert("Redirecting to Sign Up...");
      // Example redirect:
      // window.location.href = "signup.html";
    });
  }


  /* =========================
     SUBSCRIBE BUTTON
  ========================= */

  const subscribeBtn = document.querySelector(".subscribe-box button");
  const emailInput = document.querySelector(".subscribe-box input");

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {

      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email address.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Subscribed successfully!");
      emailInput.value = "";
    });
  }


  /* =========================
     REVIEW CARD CLICK EFFECT
  ========================= */

  const reviewCards = document.querySelectorAll(".review-card");

  reviewCards.forEach(card => {
    card.addEventListener("click", function () {
      card.style.transform = "scale(1.05)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 200);
    });
  });


  /* =========================
     FOOTER LINKS SCROLL
  ========================= */

  const footerLinks = document.querySelectorAll(".footer-links p");

  footerLinks.forEach(link => {
    link.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

});


/* =========================
   EMAIL VALIDATION FUNCTION
========================= */

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
/* =========================
   FAQ ACCORDION
========================= */

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

      // Close other open items (optional but cleaner)
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
        }
      });

      // Toggle current one
      item.classList.toggle("active");
    });

  });

});
