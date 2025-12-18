const PATIENCE_MESSAGE = "Be patient! This door isn't ready to open yet.";

// Set to true to disable date checking (for testing)
const DISABLE_DATE_CHECK = true;

// Check if a door can be opened based on current date
function canOpenDoor(day) {
  if (DISABLE_DATE_CHECK) return true;
  const now = new Date();
  const currentMonth = now.getMonth(); // 0 = January, 11 = December
  const currentDay = now.getDate();

  // Only allow opening in December, and only if the day has arrived
  if (currentMonth === 11 && currentDay >= day) {
    return true;
  }
  return false;
}

// Open day content - navigate to the day's page
function openDoor(day) {
  if (!canOpenDoor(day)) {
    alert(PATIENCE_MESSAGE);
    return;
  }

  // Mark door as opened in localStorage
  const opened = JSON.parse(localStorage.getItem('openedDoors') || '[]');
  if (!opened.includes(day)) {
    opened.push(day);
    localStorage.setItem('openedDoors', JSON.stringify(opened));
  }

  // Navigate to the day's page
  window.location.href = `days/${day}/index.html`;
}

// Event listeners
document.querySelectorAll('.door').forEach(door => {
  door.addEventListener('click', () => {
    const day = parseInt(door.dataset.day);
    openDoor(day);
  });
});

// Restore opened doors from localStorage
const opened = JSON.parse(localStorage.getItem('openedDoors') || '[]');
opened.forEach(day => {
  document.querySelector(`[data-day="${day}"]`)?.classList.add('opened');
});
