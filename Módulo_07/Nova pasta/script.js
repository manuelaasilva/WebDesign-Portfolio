document.getElementById('btnAvaliar').addEventListener('click', function () {
    const temperatura = Number(document.getElementById('febre').value);
    const dor = Number(document.getElementById('dor').value);
    const resultado = document.getElementById('resultado');

    // ESTRUTURA CONDICIONAL: if / else if / else
    let classificacao;
    let cor;

    if (temperatura >= 39 || dor >= 8) {
      classificacao = 'PRIORIDADE VERMELHA — atendimento imediato';
      cor = 'vermelho';
    } else if (temperatura >= 37.8 || dor >= 4) {
      classificacao = 'PRIORIDADE AMARELA — aguardar até 30 min';
      cor = 'amarelo';
    } else {
      classificacao = 'PRIORIDADE VERDE — aguardar na fila normal';
      cor = 'verde';
    }

    resultado.textContent = classificacao;
    resultado.className = cor;
  });