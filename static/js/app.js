// app.js - Clean version
document.addEventListener('DOMContentLoaded', function () {
  
  // Export CSV button
  const exportBtn = document.getElementById('export-csv');
  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      alert('Export to CSV (UI placeholder). Implement server-side export endpoint.');
    });
  }

  // Delete confirmation for all delete forms
  const deleteForms = document.querySelectorAll('form.delete-form, form[action*="/delete"]');
  deleteForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      const message = form.classList.contains('delete-form') 
        ? 'Are you sure you want to delete this employee?'
        : 'Are you sure you want to delete this record?';
      
      if (!confirm(message)) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });

});