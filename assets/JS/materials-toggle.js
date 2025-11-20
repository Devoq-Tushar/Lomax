document.querySelectorAll('.materials-listing').forEach(section => {
    const button = section.querySelector('.materials-listing .btn-primary');
    const targetSelector = section.getAttribute('data-bs-target');
    const collapseElement = document.querySelector(targetSelector);

    collapseElement.addEventListener('show.bs.collapse', () => {
        button.textContent = 'HIDE FILES';
    });

    collapseElement.addEventListener('hide.bs.collapse', () => {
        button.textContent = 'SEE FILES';
    });
});
