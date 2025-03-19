function calcularDias() {
    const dataInput = document.getElementById("dataAcampamento").value;

    if (!dataInput) {
        alert("Por favor, insira uma data válida.");
        return;
    }

    const dataAcampamento = new Date(dataInput);
    const hoje = new Date();
    
    // Ajusta para ignorar a hora
    hoje.setHours(0, 0, 0, 0);
    dataAcampamento.setHours(0, 0, 0, 0);

    if (dataAcampamento > hoje) {
        alert("A data não pode ser no futuro.");
        return;
    }

    const diferenca = Math.floor((hoje - dataAcampamento) / (1000 * 60 * 60 * 24));
    document.getElementById("resultado").innerText = `Hoje é o ${diferenca}º dia da sua vida nova!`;

    // Obtém o ano atual
    const anoAtual = hoje.getFullYear();
    console.log("Ano Atual:", anoAtual); // LOG PARA DEPURAÇÃO

    if (anoAtual === 2024) {
        document.documentElement.style.setProperty('--cor-fundo', 'rgb(0, 255, 0)'); // Verde
        console.log("Fundo alterado para verde"); // LOG PARA DEPURAÇÃO
    } else {
        document.documentElement.style.setProperty('--cor-fundo', 'rgb(231, 83, 84)'); // Vermelho/Rosa
        console.log("Fundo alterado para vermelho"); // LOG PARA DEPURAÇÃO
    }

    // Aplica a cor corretamente
    const novaCor = getComputedStyle(document.documentElement).getPropertyValue('--cor-fundo').trim();
    document.body.style.backgroundColor = novaCor;

    console.log("Cor final aplicada ao body:", novaCor); // LOG PARA DEPURAÇÃO
}
