document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-box");
    const productTable = document.getElementById("product-table");
    const modal = document.getElementById("product-modal");
    const overlay = document.getElementById("modal-overlay");
    const openBtn = document.getElementById("open-modal-btn");
    const closeBtn = document.getElementById("close-modal-btn");
    const form = document.getElementById("new-product-form");
  
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();
      const rows = productTable.querySelectorAll("tr");
  
      rows.forEach((row) => {
        const name = row.cells[2].textContent.toLowerCase();
        const category = row.cells[4].textContent.toLowerCase();
        row.style.display = (name.includes(filter) || category.includes(filter)) ? "" : "none";
      });
    });
  
    openBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
      form.reset();
    });
  
    overlay.addEventListener("click", () => {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
      form.reset();
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const id = document.getElementById("new-id").value;
      const image = document.getElementById("new-image").value;
      const name = document.getElementById("new-name").value;
      const price = parseFloat(document.getElementById("new-price").value).toFixed(2);
      const category = document.getElementById("new-category").value;
      const description = document.getElementById("new-description").value;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${id}</td>
        <td><img src="${image}" alt="${name}" width="50" /></td>
        <td>${name}</td>
        <td>$${price}</td>
        <td>${category}</td>
        <td>${description}</td>
        <td>
          <button>Edit</button>
          <button>Archive</button>
          <button>Delete</button>
        </td>
      `;
  
      productTable.appendChild(row);
      form.reset();
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });
  });
  