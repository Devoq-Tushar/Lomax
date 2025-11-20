(function () {
    const wrapper = document.querySelector('.user-profile-wrapper');
    if (!wrapper) return;

    const profile = wrapper.querySelector('.user-profile');
    const menu = wrapper.querySelector('#userMenu');
    if (!profile || !menu) return;

    function openMenu() {
        menu.classList.add('open');
        profile.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKeyDown);
    }

    function closeMenu() {
        menu.classList.remove('open');
        profile.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', onDocClick);
        document.removeEventListener('keydown', onKeyDown);
    }

    function toggleMenu() {
        menu.classList.contains('open') ? closeMenu() : openMenu();
    }

    function onDocClick(e) {
        if (!wrapper.contains(e.target)) closeMenu();
    }

    function onKeyDown(e) {
        if (e.key === 'Escape') closeMenu();
    }

    // Toggle on click
    profile.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Optional: Toggle with Enter/Space key
    profile.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close menu when any item is clicked
    menu.addEventListener('click', function (e) {
        if (e.target.closest('[role="menuitem"]')) closeMenu();
    });
})();
