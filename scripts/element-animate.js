const hiddenElements = document.querySelectorAll('.hidden-element');

function isElementInViewport(element, offset = 100) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top - offset <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  hiddenElements.forEach((element, index) => {
    if (isElementInViewport(element)) {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 50); // Adjust the delay (500 milliseconds in this example)
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


