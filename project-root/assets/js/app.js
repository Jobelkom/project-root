document.getElementById('promoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const promoCode = document.getElementById('promoCode').value.trim();
  
    // Simulations aléatoires
    const commissions = {
      '1xbet': Math.floor(Math.random() * 10000) + 1000,
      'melbet': Math.floor(Math.random() * 10000) + 1000,
      'betwinner': Math.floor(Math.random() * 10000) + 1000
    };
  
    // Affichage des résultats
    document.getElementById('1xbetCommission').textContent = commissions['1xbet'];
    document.getElementById('melbetCommission').textContent = commissions['melbet'];
    document.getElementById('betwinnerCommission').textContent = commissions['betwinner'];
    document.getElementById('results').classList.remove('hidden');
  });
  
  function withdraw(bookmaker) {
    alert(`Votre retrait chez ${bookmaker.toUpperCase()} est en cours.`);
  }
  