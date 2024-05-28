const mobileMenu = document.getElementById('mobile-menu');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
        }

        document.querySelectorAll('.mobile-menu-button').forEach(button => {
            button.addEventListener('click', toggleMobileMenu);
        });