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

(function() {
    // Все переменные объявляем внутри анонимной функции для изоляции области видимости
  
    const themeColorMeta = document.getElementById('themeColorMeta');
    const overlay = document.getElementById('overlay');
    const statusBarFake = document.querySelector('.status-bar-fake');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
  
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
  
      // Также меняем статус-бар
      if (statusBarFake) {
        statusBarFake.style.background = color;
      }
    }
  
    // Меняй цвет каждые 6 секунд (или подбери интервал под анимацию)
    setInterval(updateThemeColor, 6000);
  
    // Функция для отображения логина с изменением цвета статус-бара
    function showLogin() {
      overlay.classList.add('show');
      statusBarFake.classList.add('dark'); // Затемняем статус-бар
      loginModal.classList.add('show');
      registerModal.classList.remove('show');
    }
  
    // Функция для отображения регистрации с изменением цвета статус-бара
    function showRegister() {
      overlay.classList.add('show');
      statusBarFake.classList.add('dark'); // Затемняем статус-бар
      registerModal.classList.add('show');
      loginModal.classList.remove('show');
    }
  
    // Функция для скрытия модалей с возвратом цвета
    function hideModals() {
      overlay.classList.remove('show');
      statusBarFake.classList.remove('dark'); // Возвращаем исходный цвет статус-бара
      loginModal.classList.remove('show');
      registerModal.classList.remove('show');
    }
  
    // Ожидание событий (к примеру, для кнопок)
    document.querySelectorAll('.show-login').forEach(button => {
      button.addEventListener('click', showLogin);
    });
  
    document.querySelectorAll('.show-register').forEach(button => {
      button.addEventListener('click', showRegister);
    });
  
    document.querySelectorAll('.hide-modals').forEach(button => {
      button.addEventListener('click', hideModals);
    });
  
  })();
  
