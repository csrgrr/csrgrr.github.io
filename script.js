function getCodeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const codigo = urlParams.get('code');
    console.log(codigo)
  
    if (codigo) {
      const message = `Tu código es ${codigo}`;
      document.getElementById('message').innerText = message;
    } else {
      document.getElementById('message').innerText = 'No se encontró ningún código en la URL.';
    }
  }
  
  window.onload = getCodeFromURL;
  