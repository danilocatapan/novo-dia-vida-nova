function calcularDias() {
     const dataInput = document.getElementById("dataAcampamento").value;
 
     if (!dataInput) {
         alert("Por favor, insira uma data válida.");
         return;
     }
 
     const dataAcampamento = new Date(dataInput);
     const hoje = new Date();
     const diferenca = Math.floor((hoje - dataAcampamento) / (1000 * 60 * 60 * 24));
 
     document.getElementById("resultado").innerText = `Hoje é o ${diferenca}º dia da sua vida nova!`;
 }
