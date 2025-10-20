document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.getElementById("uploadBtn");
  const projectList = document.getElementById("projectList");
  const content = document.getElementById("content");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  // --- OWNER KEY CHECK ---
  const OWNER_KEY = "my-secret-key"; // Change this
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("key") === OWNER_KEY) {
    uploadBtn.classList.remove("hidden");
  }

  uploadBtn.addEventListener("click", () => {
    window.location.href = "upload.html?key=" + OWNER_KEY;
  });

  // --- MENU TOGGLE ---
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  // --- LOAD PROJECTS ---
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");

  projects.forEach((proj) => {
    const li = document.createElement("li");
    li.textContent = proj.name;
    li.addEventListener("click", () => {
      content.innerHTML = `
        <h2>${proj.name}</h2>
        <p>${proj.description}</p>
        <pre>${proj.files.join("\n")}</pre>
      `;
    });
    projectList.appendChild(li);
  });
});
