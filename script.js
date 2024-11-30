document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const resposta = document.getElementById('resposta');
    resposta.textContent = `Obrigado, ${nome}! Recebemos sua mensagem e entraremos em contato pelo e-mail ${email} em breve.`;
    resposta.style.color = "green";

    // Limpa os campos do formulário
    this.reset();
});
