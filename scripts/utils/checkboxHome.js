export function checkboxFilterItems() {
    document.querySelectorAll('.filter-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const filterItem = this.closest('.filter-item');
            if (filterItem) {
                if (this.checked) {
                    filterItem.classList.add('checked');
                } else {
                    filterItem.classList.remove('checked');
                }
            }
        });
    });
}

export function checkboxMenuMobile() {
    const menuCheckbox = document.getElementById('menu');
    const nav = document.querySelector('nav');

    if (!menuCheckbox || !nav) return;

    // Toggle .show on nav when checkbox changes
    menuCheckbox.addEventListener('change', function () {
        if (this.checked) {
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }
    });

    // Close menu when any nav item is clicked
    nav.addEventListener('click', function (e) {
        // Optional: only close if a link or button inside nav is clicked
        if (e.target.closest('a, button, li')) {
            menuCheckbox.checked = false;
            nav.classList.remove('show');
        }
    });

    // Responsive validation: remove .show and uncheck on desktop
    function handleResize() {
        // Adjust 1024px as needed for your breakpoint
        if (window.innerWidth >= 1024) {
            menuCheckbox.checked = false;
            nav.classList.remove('show');
        }
    }

    window.addEventListener('resize', handleResize);
    // Run once on load
    handleResize();
}

