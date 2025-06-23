// Desconto de jogo aplica automaticamente mudando os valores no codigo HTML
const cards = document.querySelectorAll(".cartao");

cards.forEach(card => {
    const preco = parseFloat(card.dataset.preco);
    const desconto = parseFloat(card.dataset.desconto);
    const valorDesconto = preco * desconto / 100;
    const precoFinal = preco - valorDesconto;

    card.querySelector(".original").textContent = preco.toFixed(2);
    card.querySelector(".final").textContent = precoFinal.toFixed(2);
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o envio "real"
        alert("Mensagem enviada com sucesso! Em até 24 horas você receberá uma resposta.");
        form.reset(); // limpa os campos
    });
});
