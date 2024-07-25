














// JavaScript para alterar o número e o conteúdo da div
document.getElementById('botão_ataque_1').addEventListener('click', function() {
    // Obtenha o elemento da barra de progresso e o valor atual
    var barra = document.getElementById('Vida');
    var valorAtual = parseInt(barra.style.width);

    var gif_padrão= document.getElementById('gif_principal')

    var barra = document.getElementById('Vida');

    // Calcule o novo valor (diminua 10%)
    var novoValor = valorAtual - 10;
    if (novoValor < 0) novoValor = 0;

    // Atualize a barra de progresso e o texto
    barra.style.width = novoValor + '%';
    barra.textContent = novoValor + '%';
    gif_padrão.src = 'personagens/kizaru/kizaruChute.gif';
    setTimeout(() => {
        gif_padrão.src='personagens/kizaru/kizaru.gif'; // Simula o clique no segundo botão
    }, 300);

});