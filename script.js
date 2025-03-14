const desc = document.getElementById("description");
const cat = document.getElementById("category");
const amount = document.getElementById("amount");
const add = document.getElementById("add");
const tableBody = document.getElementById("expenseTableBody");

add.addEventListener("click", function () {
  const descValue = desc.value.trim();
  const catValue = cat.value;
  const amountValue = amount.value.trim();

  if (
    descValue === "" ||
    amountValue === "" ||
    isNaN(amountValue) ||
    amountValue <= 0
  ) {
    alert("Please enter valid details.");
    return;
  }

  const newRow = document.createElement("tr");

  const descCell = document.createElement("td");
  descCell.textContent = descValue;

  const catCell = document.createElement("td");
  catCell.textContent = catValue;

  const amountCell = document.createElement("td");
  amountCell.textContent = `$${parseFloat(amountValue).toFixed(2)}`;

  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    newRow.remove();
  });

  deleteCell.appendChild(deleteBtn);

  newRow.appendChild(descCell);
  newRow.appendChild(catCell);
  newRow.appendChild(amountCell);
  newRow.appendChild(deleteCell);

  tableBody.appendChild(newRow);

  desc.value = "";
  amount.value = "";
});
