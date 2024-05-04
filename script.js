function displayMore(sectionId) {
  // Get the element with the corresponding ID
  const contentElement = document.getElementById(sectionId + '-content');

  // Check if the content is currently hidden
  if (contentElement.classList.contains('hidden')) {
    contentElement.classList.remove('hidden'); // Show the content
  } else {
    contentElement.classList.add('hidden'); // Hide the content
  }
}

// Add event listeners to the "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sectionId = button.dataset.sectionId; // Get the section ID from a data attribute
    displayMore(sectionId);
  });
});
