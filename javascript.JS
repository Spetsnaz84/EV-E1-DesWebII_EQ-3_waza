document.addEventListener('DOMContentLoaded', () => {
  const dropdownCards = document.querySelectorAll('.destinos-dropdown, .destinos-naturales-dropdown');

  dropdownCards.forEach(card => {
    const menu = card.querySelector('.dropdown-menu');

    card.addEventListener('click', (e) => {
      e.stopPropagation();

      document.querySelectorAll('.dropdown-menu.show').forEach(otherMenu => {
        if (otherMenu !== menu) {
          otherMenu.classList.remove('show');
        }
      });

      menu.classList.toggle('show');
    });
  });

  document.addEventListener('click', (e) => {
    const isInsideDropdown = e.target.closest('.destinos-dropdown, .destinos-naturales-dropdown');
    const isInsideMenu = e.target.closest('.dropdown-menu');

    if (!isInsideDropdown && !isInsideMenu) {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
});