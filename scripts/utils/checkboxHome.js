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
    menuCheckbox.addEventListener('change', function () {
        if (this.checked) {
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }
    });

    nav.addEventListener('click', function (e) {
        if (e.target.closest('a, button, li')) {
            menuCheckbox.checked = false;
            nav.classList.remove('show');
        }
    });

    function handleResize() {
        if (window.innerWidth >= 1024) {
            menuCheckbox.checked = false;
            nav.classList.remove('show');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
}