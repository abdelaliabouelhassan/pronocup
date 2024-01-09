const animateright = {
  mounted(el) {
    el.style.opacity = 0;
    el.style.transition = 'all 350ms ease-in-out';
    el.style.transform = 'translateX(-24px)';

    const animateElement = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)';
        } else {
          // Reset the animation properties when the element is not intersecting
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-24px)';
        }
      });
    };

    const observer = new IntersectionObserver(animateElement, { threshold: 0.4 });

    observer.observe(el);

  },
};

export default animateright;
