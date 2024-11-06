document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');
    const closeSidebar = document.getElementById('closeSidebar');

    // Open sidebar when menu button is clicked
    menuButton.addEventListener('click', () => {
        sidebar.classList.add('sidebar-open');
    });

    // Close sidebar when close button is clicked
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove('sidebar-open');
        }
    });
});
