(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        mainContent: document.querySelector('main')
    };
 
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
 
    function toggleMenu() {
        refs.menu.classList.toggle('is-open');
        preventScroll();
        trapFocus();
    }

    function preventScroll() {
        if (!refs.menu.classList.contains('is-open')) {
            document.body.style.overflow = 'scroll';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    function trapFocus() {
        if (!refs.menu.classList.contains('is-open')) {
            refs.mainContent.removeAttribute('inert');
        } else {
            refs.mainContent.setAttribute('inert', 'true');
        }
    }
  })();