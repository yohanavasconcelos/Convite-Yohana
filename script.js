const nomeJogador = document.getElementById('nome');
const botao = document.getElementById('confirmacao');

botao.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('name');

    if(nome.value.length === 0){
        mostrarPopup();
    }else{
        window.location.href = 'convite.html';
    }

});


function mostrarPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

