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
(function () {
  const deviceWarning = document.getElementById('deviceWarning');
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (!isIOS) {
    deviceWarning.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
})();
(function () {
  const deviceWarning = document.getElementById('deviceWarning');

  // Функция точной проверки на iPhone
  function isIphone() {
    return /iPhone/i.test(navigator.userAgent) && !window.MSStream;
  }

  if (!isIphone()) {
    deviceWarning.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
})();

  
