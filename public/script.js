function calcularDias() {
    const dataInput = document.getElementById("dataAcampamento").value;

    if (!dataInput) {
        alert("Por favor, insira uma data válida.");
        return;
    }

    const dataAcampamento = new Date(dataInput);
    const hoje = new Date();
    
    // Ajusta a data de hoje para ignorar a hora e comparar apenas as datas
    hoje.setHours(0, 0, 0, 0);
    dataAcampamento.setHours(0, 0, 0, 0);

    if (dataAcampamento > hoje) {
        alert("A data não pode ser no futuro.");
        return;
    }

    const diferenca = Math.floor((hoje - dataAcampamento) / (1000 * 60 * 60 * 24));

    document.getElementById("resultado").innerText = `Hoje é o ${diferenca}º dia da sua vida nova!`;

    // Lógica para alterar a cor de fundo
    const anoAtual = new Date().getFullYear();
    if (anoAtual === 2024) {
        // Altera a variável CSS diretamente
        document.documentElement.style.setProperty('--cor-fundo', 'rgb(0, 255, 0)'); // Verde
    } else {
        document.documentElement.style.setProperty('--cor-fundo', 'rgb(231, 83, 84)'); // Vermelho/Rosa
    }

    // Aplica a nova cor ao fundo
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-fundo');
}
