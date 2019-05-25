import Typed from 'typed.js';

export const init = () => {
  const  options = {
    strings: ["", "<p>boo, almost forgot...</p>", "<p>simplicity, always.</p>"],
    typeSpeed: 70,
    startDelay: 3400
  }

  const typed = new Typed(".typed", options);
}
