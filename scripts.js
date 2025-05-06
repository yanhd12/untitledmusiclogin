const overlay = document.getElementById('overlay');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

function showLogin() {
  overlay.classList.add('show');
  loginModal.classList.add('show');
  registerModal.classList.remove('show');
}

function showRegister() {
  overlay.classList.add('show');
  registerModal.classList.add('show');
  loginModal.classList.remove('show');
}

function hideModals() {
  overlay.classList.remove('show');
  loginModal.classList.remove('show');
  registerModal.classList.remove('show');
}
const themeColorMeta = document.getElementById('themeColorMeta');

// Список цветов, соответствующий градиенту
const colors = ['#fef08a', '#ffe08a', '#ffc0cb', '#a0e0ff', '#fef08a'];

let current = 0;

function updateThemeColor() {
  current = (current + 1) % colors.length;
  const color = colors[current];

  // Обновляем <meta name="theme-color">
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', color);
  }

  // Также можно поменять цвет статус-бара у iOS, если нужно:
  document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']")?.setAttribute('content', color);
}

// Меняй цвет каждые 6 секунд (или подбери интервал под анимацию)
setInterval(updateThemeColor, 6000);
