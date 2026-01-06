const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((btn) => btn.classList.remove('is-active'));
    item.classList.add('is-active');

    const label = item.dataset.label;
    document.title = `Telegram-style • ${label}`;
  });
});
