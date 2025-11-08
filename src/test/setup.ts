import '@testing-library/jest-dom';

// JSDOM stubs for smooth-scrolling interactions used in components
// Avoid errors when tests invoke scrollIntoView or window.scrollTo
// without adding noisy logs or side-effects.
if (!Element.prototype.scrollIntoView) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Element.prototype.scrollIntoView = function () {};
}

if (typeof window.scrollTo !== 'function') {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.scrollTo = () => {};
}