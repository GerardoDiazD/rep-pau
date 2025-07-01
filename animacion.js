
function iniciarAnimacion(bloqueIni,bloqueMensaje) {
    setTimeout(() => {
      document.getElementById(bloqueIni).style.display = "none";
      document.getElementById(bloqueMensaje).style.display = "block";
    }, 8000); // cambia a 8000 para 8 segundos de espera
  }
