document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');
    const filterSelect = document.getElementById('filter');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value;
      const doctorId = document.getElementById('doctor_id').value;
      const specialization = document.getElementById('specialization').value;
      const experience = document.getElementById('experience').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
  
      // Determine role based on experience
      let role;
      if (experience > 5) {
        role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
      } else {
        role = 'Trainee';
      }
  
      // Create new row
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${doctorId}</td>
        <td>${specialization}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
  
      // Append row to table
      tableBody.appendChild(newRow);
  
      // Clear form fields
      form.reset();
    });
  
    filterSelect.addEventListener('change', function () {
      const selectedSpecialization = filterSelect.value.toLowerCase();
  
      // Show/hide rows based on specialization filter
      const rows = tableBody.getElementsByTagName('tr');
      for (const row of rows) {
        const rowSpecialization = row.cells[2].innerText.toLowerCase();
        row.style.display = rowSpecialization === selectedSpecialization || selectedSpecialization === '' ? '' : 'none';
      }
    });
  });
  
  function deleteRow(button) {
    // Delete the row containing the clicked button
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  