// Função para verificar se o usuário já aceitou os cookies
function checkCookieConsent() {
    return localStorage.getItem('cookieConsent') !== null;
  }
  
  // Função para esconder o banner de cookies
  function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    banner.style.display = 'none';
  }
  
  // Função para salvar a preferência do usuário
  function setCookieConsent(accepted) {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
    hideCookieBanner();
  }
  
  // Verifica se o usuário já aceitou os cookies
  if (checkCookieConsent()) {
    hideCookieBanner();
  } else {
    // Exibe o banner de cookies
    const banner = document.getElementById('cookie-banner');
    banner.style.display = 'flex';
  
    // Configura um timeout para fechar o banner após 10 segundos (10000 ms)
    const timeoutDuration = 10000; // 10 segundos
    let timeoutId = setTimeout(() => {
      hideCookieBanner();
      // Aqui você pode adicionar a lógica padrão (ex.: considerar como "rejeitado")
      setCookieConsent(false); // Considera como "rejeitado" se o usuário não interagir
    }, timeoutDuration);
  
    // Cancela o timeout se o usuário interagir com o banner
    document.getElementById('accept-cookies').addEventListener('click', () => {
      clearTimeout(timeoutId); // Cancela o timeout
      setCookieConsent(true);
      // Aqui você pode adicionar a lógica para carregar os cookies
    });
  
    document.getElementById('reject-cookies').addEventListener('click', () => {
      clearTimeout(timeoutId); // Cancela o timeout
      setCookieConsent(false);
      // Aqui você pode adicionar a lógica para bloquear os cookies
    });
  
    // Abre o modal de política de cookies
    document.getElementById('open-cookie-modal').addEventListener('click', () => {
      const modal = new bootstrap.Modal(document.getElementById('cookie-modal'));
      modal.show();
    });
  }