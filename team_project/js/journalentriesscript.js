document.getElementById('journalForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const subject = document.getElementById('subject').value.trim();
  const notes = document.getElementById('notes').value.trim();

  if (subject && notes) {
    const entry = { subject, notes };
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));

    displayEntries();

    // clear journal form
    document.getElementById('journalForm').reset();
  }
});

function displayEntries() {
  const container = document.getElementById('entriesContainer');
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  // clear previous entries and  keep the title
  container.innerHTML = '<h2>Your Journal Entries</h2>';

  entries.forEach(entry => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    entryDiv.innerHTML = `
      <h4>${entry.subject}</h4>
      <p>${entry.notes}</p>
      <hr />
    `;
    container.appendChild(entryDiv);
  });
}

// display saved entries
window.onload = displayEntries;

