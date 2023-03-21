const goToElement = (element: HTMLElement) => {
  if (!element) return;

  const elementTop = element.getBoundingClientRect().top;
  window.scrollTo({
    top: window.scrollY + elementTop,
    behavior: "smooth",
  });
};

export default goToElement;
