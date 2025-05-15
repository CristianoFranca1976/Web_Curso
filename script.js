// Espera 15 segundos antes de liberar o botão "Avançar"
    setTimeout(() => {
      document.getElementById('btnAvancar').disabled = false;
    }, 15000);

    function avancarPagina() {
      alert("Ir para o próximo módulo...");
       window.location.href = 'modulo2.html';
    }

    function voltarPagina() {
      alert("Voltar ao módulo anterior...");
      window.location.href = 'intro.html';
    }