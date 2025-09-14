function navigate(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}
