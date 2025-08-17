// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];


function agregarAmigo() {
    
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    
    amigos.push(nombreAmigo);
    
    
    inputAmigo.value = '';
    
    
    actualizarListaAmigos();
}


function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    
    listaAmigos.innerHTML = '';
    
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }
    
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}


function configurarEventoEnter() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    configurarEventoEnter();
});
