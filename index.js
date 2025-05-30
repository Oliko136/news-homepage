(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
 
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
 
    function toggleMenu() {
        refs.menu.classList.toggle('is-open');
        preventScroll();
    }

    function preventScroll() {
        if (!refs.menu.classList.contains('is-open')) {
            document.body.style.overflow = 'scroll';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
  })();