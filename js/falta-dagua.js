// Função genérica para alternar subníveis
function toggleNivel(botaoId, nivelId, linhaId = null) {
    const botao = document.getElementById(botaoId);
    const nivel = document.getElementById(nivelId);
    const linha = linhaId ? document.getElementById(linhaId) : null;

    if (botao && nivel) {
        botao.addEventListener('click', () => {

            // VERIFICA SE É O BOTÃO INICIAL
            const isInitialButton = (botaoId === 'btnFalta');
            // Verifica se a ação inicial (ocultar texto) já foi realizada
            const initialActionDone = botao.getAttribute('data-initial-action-done') === 'true';

            if (isInitialButton) {
                const instrucaoInicial = document.getElementById('instrucaoInicial');

                if (!initialActionDone) {
                    // --- LÓGICA DO PRIMEIRO CLIQUE (OCULTAR TEXTO E EXPANDIR) ---
                    if (instrucaoInicial) {
                        instrucaoInicial.style.display = 'none';
                    }
                    botao.setAttribute('data-initial-action-done', 'true');

                    // Apenas ativa o nível que contém o botão Procedimento
                    nivel.classList.add('ativo');

                } else {
                    // --- LÓGICA DOS CLIQUES SUBSEQUENTES (TOGGLE NORMAL) ---
                    nivel.classList.toggle('ativo');

                    // NOVO: Se Retaguarda for fechado, fechar os níveis internos
                    const nivelProcedimentoConteudo = document.getElementById('nivelProcedimentoConteudo');
                    const nivelDecisao = document.getElementById('nivelDecisao');
                    const textoProcedimento = document.getElementById('textoProcedimento');
                    const nivelPadraoFotos = document.getElementById('nivelPadraoFotos');
                    const textoPadraoFotos = document.getElementById('textoPadraoFotos');

                    if (!nivel.classList.contains('ativo')) {
                        if (nivelProcedimentoConteudo) nivelProcedimentoConteudo.classList.remove('ativo');
                        if (nivelDecisao) nivelDecisao.classList.remove('ativo');
                        if (textoProcedimento) textoProcedimento.classList.remove('ativo');
                        if (nivelPadraoFotos) nivelPadraoFotos.classList.remove('ativo');
                        if (textoPadraoFotos) textoPadraoFotos.classList.remove('ativo');
                    }
                }

            } else {
                // LÓGICA PADRÃO PARA OS OUTROS BOTÕES (Toggle)
                nivel.classList.toggle('ativo');

                if (linha) {
                    linha.classList.toggle('oculta');
                }
            }
        });
    }
}

// Função genérica para alternar **apenas** o texto de instrução (para sub-botões de foto)
function toggleTexto(botaoId, textoId) {
    const botao = document.getElementById(botaoId);
    const texto = document.getElementById(textoId);

    if (botao && texto) {
        botao.addEventListener('click', () => {
            texto.classList.toggle('ativo');
        });
    }
}


// --- INICIALIZAÇÃO DO FLUXO PRINCIPAL ---
toggleNivel('btnFalta', 'nivelFalta');
toggleNivel('btnAguaJorrando', 'nivelAguaJorrando', 'linhaAguaJorrando');


// --- Lógica para o botão PROCEDIMENTO (Passo 2) ---
const btnProcedimento = document.getElementById('btnProcedimento');
const textoProcedimento = document.getElementById('textoProcedimento');
const nivelProcedimentoConteudo = document.getElementById('nivelProcedimentoConteudo');

if (btnProcedimento && nivelProcedimentoConteudo && textoProcedimento) {
    btnProcedimento.addEventListener('click', () => {
        // 1. Toggle o container que contém o Padrão de Fotos
        nivelProcedimentoConteudo.classList.toggle('ativo');

        // 2. Toggle o texto de instrução de Procedimento
        textoProcedimento.classList.toggle('ativo');

        // 3. NOVO: Se o container está sendo desativado, fechar o nível de Decisão e Padrão de Fotos (limpeza)
        const nivelDecisao = document.getElementById('nivelDecisao');
        const nivelPadraoFotos = document.getElementById('nivelPadraoFotos');
        const textoPadraoFotos = document.getElementById('textoPadraoFotos');

        if (!nivelProcedimentoConteudo.classList.contains('ativo')) {
            if (nivelDecisao) nivelDecisao.classList.remove('ativo');
            if (nivelPadraoFotos) nivelPadraoFotos.classList.remove('ativo');
            if (textoPadraoFotos) textoPadraoFotos.classList.remove('ativo');
        }
    });
}


// --- Lógica para o botão PADRÃO DE FOTOS (Passo 3) ---
const btnPadraoFotos = document.getElementById('btnPadraoFotos');
const textoPadraoFotos = document.getElementById('textoPadraoFotos');
const nivelPadraoFotos = document.getElementById('nivelPadraoFotos');
const nivelDecisao = document.getElementById('nivelDecisao');

if (btnPadraoFotos && textoPadraoFotos && nivelPadraoFotos && nivelDecisao) {
    btnPadraoFotos.addEventListener('click', () => {
        // 1. Alterna o texto de instrução (Padrão de Fotos)
        textoPadraoFotos.classList.toggle('ativo');

        // 2. Alterna os botões de fotos
        nivelPadraoFotos.classList.toggle('ativo');

        // 3. NOVO: Alterna o fluxo de decisão (ÁGUA JORRANDO?)
        nivelDecisao.classList.toggle('ativo');
    });
}


// --- Lógica para os demais fluxos (Permanecem os mesmos) ---

// Lógica para o fluxo ÁGUA JORRANDO? (SIM)
const btnSimJorrando = document.getElementById('btnSimJorrando');
const fluxoSimJorrando = document.getElementById('fluxoSimJorrando');

if (btnSimJorrando && fluxoSimJorrando) {
    let simSelecionado = false;

    btnSimJorrando.addEventListener('click', () => {
        if (btnSimJorrando.classList.contains('desabilitado')) {
            return;
        }

        if (simSelecionado) {
            // TOGGLE OFF: Deselecionar SIM
            simSelecionado = false;
            fluxoSimJorrando.classList.remove('ativo');
            document.getElementById('btnNaoJorrando').classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar SIM
            simSelecionado = true;
            fluxoSimJorrando.classList.add('ativo');
            fluxoNaoJorrando.classList.remove('ativo');
            document.getElementById('btnNaoJorrando').classList.add('desabilitado');
        }
    });
}

// Lógica de Toggle para o botão NÃO 
const btnNaoJorrando = document.getElementById('btnNaoJorrando');
const fluxoNaoJorrando = document.getElementById('fluxoNaoJorrando');

if (btnNaoJorrando && fluxoNaoJorrando) {
    let naoSelecionado = false;

    btnNaoJorrando.addEventListener('click', () => {
        if (btnNaoJorrando.classList.contains('desabilitado')) {
            return;
        }

        if (naoSelecionado) {
            // TOGGLE OFF: Deselecionar NÃO
            naoSelecionado = false;
            fluxoNaoJorrando.classList.remove('ativo');
            document.getElementById('btnSimJorrando').classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar NÃO
            naoSelecionado = true;
            fluxoNaoJorrando.classList.add('ativo');
            fluxoSimJorrando.classList.remove('ativo');
            document.getElementById('btnSimJorrando').classList.add('desabilitado');
        }
    });
}

// FLUXO: VIZINHOS ABASTECIDOS?
toggleNivel('btnVizinhosAbastecidos', 'nivelVizinhosAbastecidos', 'linhaVizinhosAbastecidos');

// SIM - VIZINHOS
const btnSimVizinhos = document.getElementById('btnSimVizinhos');
const fluxoSimVizinhos = document.getElementById('fluxoSimVizinhos');
if (btnSimVizinhos && fluxoSimVizinhos) {
    let simVizinhosSelecionado = false;

    btnSimVizinhos.addEventListener('click', () => {
        if (btnSimVizinhos.classList.contains('desabilitado')) {
            return;
        }

        if (simVizinhosSelecionado) {
            // TOGGLE OFF: Deselecionar SIM
            simVizinhosSelecionado = false;
            fluxoSimVizinhos.classList.remove('ativo');
            document.getElementById('btnNaoVizinhos').classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar SIM
            simVizinhosSelecionado = true;
            fluxoSimVizinhos.classList.add('ativo');
            fluxoNaoVizinhos.classList.remove('ativo');
            document.getElementById('btnNaoVizinhos').classList.add('desabilitado');
        }
    });
}

// Lógica de Toggle para o botão NÃO (Vizinhos)
const btnNaoVizinhos = document.getElementById('btnNaoVizinhos');
const fluxoNaoVizinhos = document.getElementById('fluxoNaoVizinhos');

if (btnNaoVizinhos && fluxoNaoVizinhos) {
    let naoVizinhosSelecionado = false;

    btnNaoVizinhos.addEventListener('click', () => {
        if (btnNaoVizinhos.classList.contains('desabilitado')) {
            return;
        }

        if (naoVizinhosSelecionado) {
            // TOGGLE OFF: Deselecionar NÃO
            naoVizinhosSelecionado = false;
            fluxoNaoVizinhos.classList.remove('ativo');
            document.getElementById('btnSimVizinhos').classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar NÃO
            naoVizinhosSelecionado = true;
            fluxoNaoVizinhos.classList.add('ativo');
            fluxoSimVizinhos.classList.remove('ativo');
            document.getElementById('btnSimVizinhos').classList.add('desabilitado');
        }
    });
}

// FLUXO: EXISTEM VAZAMENTOS NO LOCAL?
toggleNivel('btnExistemVazamentos', 'nivelExistemVazamentos', 'linhaExistemVazamentos');

// VAZAMENTO VISÍVEL
const btnVazVisivel = document.getElementById('btnVazVisivel');
const fluxoVazVisivel = document.getElementById('fluxoVazVisivel');
if (btnVazVisivel && fluxoVazVisivel) {
    btnVazVisivel.addEventListener('click', () => {
        fluxoVazVisivel.classList.toggle('ativo');
    });
}

// VAZAMENTO NÃO VISÍVEL
const btnVazNaoVisivel = document.getElementById('btnVazNaoVisivel');
const fluxoVazNaoVisivel = document.getElementById('fluxoVazNaoVisivel');
if (btnVazNaoVisivel && fluxoVazNaoVisivel) {
    btnVazNaoVisivel.addEventListener('click', () => {
        fluxoVazNaoVisivel.classList.toggle('ativo');
    });
}


/* --- Lógica de Toggle para os botões de Padrão de Fotos (Apenas Textos) --- */
toggleTexto('btnFachada', 'textoFachada');
toggleTexto('btnNumHD', 'textoNumHD');
toggleTexto('btnLacre', 'textoLacre');
toggleTexto('btnManometro', 'textoManometro');