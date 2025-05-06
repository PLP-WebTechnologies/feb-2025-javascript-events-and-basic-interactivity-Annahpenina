function revealSecret() {
    alert("🌳 You found the secret! Trees love double-clicks!");
}



let pressTimer;

const button = document.getElementById("submitBtn");

button.addEventListener("mousedown", function () {
    pressTimer = window.setTimeout(() => {
        alert("🌿 Long press detected! You're dedicated!");
    }, 1000);
});

button.addEventListener("mouseup", function () {
    clearTimeout(pressTimer);
}
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (this.textContent.includes("Support")) {
      this.textContent = "Thank You! 🌱";
      this.style.backgroundColor = "#228B22";
    } else {
      this.textContent = "Support Us 💚";
      this.style.backgroundColor = "#4CAF50";
    }
  });
  
  
  function updateContent() {
    document.getElementById("awareness").textContent =
      "Forests in Africa are vanishing... let's act together!";
    document.getElementById("help").textContent =
      "Join tree planting, support education, and donate.";
  }
  
  function highlightText() {
    const p = document.getElementById("awareness");
    p.style.backgroundColor = "yellow";
    p.style.color = "darkgreen";
  }
  

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
  }
  
  
  function revealSecret() {
    alert("🌳 You found the secret! Trees love double-clicks!");
  }
  
  
  
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  }

  function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
  }
  

  document.getElementById("email").addEventListener("input", function () {
    const msg = document.getElementById("emailMsg");
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    msg.textContent = valid ? "" : "Invalid email format";
  });
  
  document.getElementById("password").addEventListener("input", function () {
    const msg = document.getElementById("passwordMsg");
    msg.textContent = this.value.length >= 8 ? "" : "Password must be at least 8 characters";
  });
  
  
  document.getElementById("joinForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email!");
      return;
    }
    if (pass.length < 8) {
      alert("Password too short!");
      return;
    }
    alert("Form submitted successfully!");
  });
  