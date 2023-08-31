const hiddenElements = document.querySelectorAll('.hidden-element');

function isElementInViewport(element, offset = 20) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top - offset <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  hiddenElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });

  // Remove the event listener if all elements are visible
  if (Array.from(hiddenElements).every(element => element.classList.contains('visible'))) {
    window.removeEventListener('scroll', handleScroll);
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the initial check in case some elements are visible on page load
handleScroll();


