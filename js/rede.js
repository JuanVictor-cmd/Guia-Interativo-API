// Função genérica para alternar a visibilidade de um nível
function toggleNivelRede(botaoId, nivelId) {
    const botao = document.getElementById(botaoId);
    const nivel = document.getElementById(nivelId);
    const instrucaoInicial = document.getElementById('instrucaoInicial');
    const linhaDecisao = document.getElementById('linhaDecisao');
    const nivelDecisoesFinais = document.getElementById('nivelDecisoesFinais');

    if (botao && nivel) {
        botao.addEventListener('click', () => {
            // Verifica se a ação inicial já foi feita (esconder o texto)
            const initialActionDone = botao.getAttribute('data-initial-action-done') === 'true';

            if (!initialActionDone) {
                // 1. Esconde o texto de instrução permanentemente
                if (instrucaoInicial) {
                    instrucaoInicial.style.display = 'none';
                }
                // 2. Marca que a ação foi feita e mostra o nível
                botao.setAttribute('data-initial-action-done', 'true');
                nivel.classList.add('ativo');
                // 3. Mostra a linha de decisão e os serviços posteriores apenas para btnRede
                if (botaoId === 'btnRede') {
                    if (linhaDecisao) linhaDecisao.style.display = 'block';
                    if (nivelDecisoesFinais) nivelDecisoesFinais.classList.add('ativo');
                }
            } else {
                // 4. Após a primeira vez, funciona como um toggle normal de abre/fecha
                nivel.classList.toggle('ativo');
                // Toggle também da linha e serviços posteriores apenas para btnRede
                if (botaoId === 'btnRede') {
                    if (linhaDecisao) {
                        linhaDecisao.style.display = nivel.classList.contains('ativo') ? 'block' : 'none';
                    }
                    if (nivelDecisoesFinais) {
                        nivelDecisoesFinais.classList.toggle('ativo');
                    }
                    // Fechar opcoesTipoPavimento quando btnRede é fechado
                    if (!nivel.classList.contains('ativo')) {
                        fecharOpcoesTipoPavimento();
                    }
                }
            }
        });
    }
}

// Inicializa o fluxo principal
toggleNivelRede('btnRede', 'nivelRede');

// Inicializa o botão Padrão de Fotos
toggleNivelRede('btnPadraoFotos', 'nivelPadraoFotos');

// Estado e funções para botões de etapa
let selectedEtapa = null;

function enableBotoesEtapa() {
    const btnProcedimento = document.getElementById('btnProcedimento');
    const btnVerificacao = document.getElementById('btnVerificacao');
    const btnFormulario = document.getElementById('btnFormulario');
    const btnPadraoFotos = document.getElementById('btnPadraoFotos');
    [btnProcedimento, btnVerificacao, btnFormulario, btnPadraoFotos].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

function disableBotoesEtapa(buttonId) {
    const btnProcedimento = document.getElementById('btnProcedimento');
    const btnVerificacao = document.getElementById('btnVerificacao');
    const btnFormulario = document.getElementById('btnFormulario');
    const btnPadraoFotos = document.getElementById('btnPadraoFotos');

    [btnProcedimento, btnVerificacao, btnFormulario, btnPadraoFotos].forEach(el => {
        if (!el || el.id === buttonId) return;
        el.classList.add('desabilitado');
        el.setAttribute('disabled', 'true');
        el.setAttribute('aria-disabled', 'true');
    });
}

// Estado e funções para Sim/Não do Vazamento Visível
let selectedSimNaoVazamento = null;

function disableSimNaoVazamento(buttonId) {
    const btnSimVazamento = document.getElementById('btnSimVazamento');
    const btnNaoVazamento = document.getElementById('btnNaoVazamento');

    if (buttonId === 'btnSimVazamento' && btnNaoVazamento) {
        btnNaoVazamento.classList.add('desabilitado');
        btnNaoVazamento.setAttribute('disabled', 'true');
        btnNaoVazamento.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoVazamento' && btnSimVazamento) {
        btnSimVazamento.classList.add('desabilitado');
        btnSimVazamento.setAttribute('disabled', 'true');
        btnSimVazamento.setAttribute('aria-disabled', 'true');
    }
}

function enableSimNaoVazamento() {
    const btnSimVazamento = document.getElementById('btnSimVazamento');
    const btnNaoVazamento = document.getElementById('btnNaoVazamento');
    [btnSimVazamento, btnNaoVazamento].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Estado e funções para Verificação
let selectedSimNaoVerificacao = null;
let selectedAguaEsgoto = null;
let selectedServico = null;
let selectedSimNaoRepavimentacao = null;
let selectedInfoFormulario = null;

function enableSimNaoVerificacao() {
    const btnSimVerificacao = document.getElementById('btnSimVerificacao');
    const btnNaoVerificacao = document.getElementById('btnNaoVerificacao');
    [btnSimVerificacao, btnNaoVerificacao].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

function disableSimNaoVerificacao(buttonId) {
    const btnSimVerificacao = document.getElementById('btnSimVerificacao');
    const btnNaoVerificacao = document.getElementById('btnNaoVerificacao');
    if (buttonId === 'btnSimVerificacao' && btnNaoVerificacao) {
        btnNaoVerificacao.classList.add('desabilitado');
        btnNaoVerificacao.setAttribute('disabled', 'true');
        btnNaoVerificacao.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoVerificacao' && btnSimVerificacao) {
        btnSimVerificacao.classList.add('desabilitado');
        btnSimVerificacao.setAttribute('disabled', 'true');
        btnSimVerificacao.setAttribute('aria-disabled', 'true');
    }
}

function enableAguaEsgoto() {
    const btnAgua = document.getElementById('btnAgua');
    const btnEsgoto = document.getElementById('btnEsgoto');
    [btnAgua, btnEsgoto].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

function disableAguaEsgoto(buttonId) {
    const btnAgua = document.getElementById('btnAgua');
    const btnEsgoto = document.getElementById('btnEsgoto');
    if (buttonId === 'btnAgua' && btnEsgoto) {
        btnEsgoto.classList.add('desabilitado');
        btnEsgoto.setAttribute('disabled', 'true');
        btnEsgoto.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnEsgoto' && btnAgua) {
        btnAgua.classList.add('desabilitado');
        btnAgua.setAttribute('disabled', 'true');
        btnAgua.setAttribute('aria-disabled', 'true');
    }
}

function enableServico() {
    const btnSondagem = document.getElementById('btnSondagem');
    const btnReparoRamal = document.getElementById('btnReparoRamal');
    const btnSubstituicao = document.getElementById('btnSubstituicao');
    [btnSondagem, btnReparoRamal, btnSubstituicao].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

function disableServico(buttonId) {
    const btnSondagem = document.getElementById('btnSondagem');
    const btnReparoRamal = document.getElementById('btnReparoRamal');
    const btnSubstituicao = document.getElementById('btnSubstituicao');
    [btnSondagem, btnReparoRamal, btnSubstituicao].forEach(el => {
        if (!el || el.id === buttonId) return;
        el.classList.add('desabilitado');
        el.setAttribute('disabled', 'true');
        el.setAttribute('aria-disabled', 'true');
    });
}

function enableSimNaoRepavimentacao() {
    const btnSimRepavimentacao = document.getElementById('btnSimRepavimentacao');
    const btnNaoRepavimentacao = document.getElementById('btnNaoRepavimentacao');
    [btnSimRepavimentacao, btnNaoRepavimentacao].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

function disableSimNaoRepavimentacao(buttonId) {
    const btnSimRepavimentacao = document.getElementById('btnSimRepavimentacao');
    const btnNaoRepavimentacao = document.getElementById('btnNaoRepavimentacao');
    if (buttonId === 'btnSimRepavimentacao' && btnNaoRepavimentacao) {
        btnNaoRepavimentacao.classList.add('desabilitado');
        btnNaoRepavimentacao.setAttribute('disabled', 'true');
        btnNaoRepavimentacao.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoRepavimentacao' && btnSimRepavimentacao) {
        btnSimRepavimentacao.classList.add('desabilitado');
        btnSimRepavimentacao.setAttribute('disabled', 'true');
        btnSimRepavimentacao.setAttribute('aria-disabled', 'true');
    }
}

function enableInfoFormulario() {
    const btnInfoRede = document.getElementById('btnInfoRede');
    const btnInfoRepavimentacao = document.getElementById('btnInfoRepavimentacao');
    [btnInfoRede, btnInfoRepavimentacao].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

function disableInfoFormulario(buttonId) {
    const btnInfoRede = document.getElementById('btnInfoRede');
    const btnInfoRepavimentacao = document.getElementById('btnInfoRepavimentacao');
    if (buttonId === 'btnInfoRede' && btnInfoRepavimentacao) {
        btnInfoRepavimentacao.classList.add('desabilitado');
        btnInfoRepavimentacao.setAttribute('disabled', 'true');
        btnInfoRepavimentacao.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnInfoRepavimentacao' && btnInfoRede) {
        btnInfoRede.classList.add('desabilitado');
        btnInfoRede.setAttribute('disabled', 'true');
        btnInfoRede.setAttribute('aria-disabled', 'true');
    }
}

// Toggle para btnProcedimento
const btnProcedimento = document.getElementById('btnProcedimento');
if (btnProcedimento) {
    btnProcedimento.addEventListener('click', () => {
        const textoProcedimento = document.getElementById('textoProcedimento');
        const textoVazamentoVisivel = document.getElementById('textoVazamentoVisivel');
        const linhaAntesSimNaoVazamento = document.getElementById('linhaAntesSimNaoVazamento');
        const botoesSimNaoVazamento = document.getElementById('botoesSimNaoVazamento');
        const textoSimVazamento = document.getElementById('textoSimVazamento');
        const textoNaoVazamento = document.getElementById('textoNaoVazamento');

        const isActive = btnProcedimento.classList.contains('ativo');

        if (!isActive) {
            btnProcedimento.classList.add('ativo');
            disableBotoesEtapa('btnProcedimento');
            selectedEtapa = 'btnProcedimento';
            if (textoProcedimento) textoProcedimento.style.display = 'block';
            if (textoVazamentoVisivel) textoVazamentoVisivel.style.display = 'block';
            if (linhaAntesSimNaoVazamento) linhaAntesSimNaoVazamento.style.display = 'block';
            if (botoesSimNaoVazamento) botoesSimNaoVazamento.classList.add('ativo');
        } else {
            btnProcedimento.classList.remove('ativo');
            enableBotoesEtapa();
            selectedEtapa = null;
            if (textoProcedimento) textoProcedimento.style.display = 'none';
            if (textoVazamentoVisivel) textoVazamentoVisivel.style.display = 'none';
            if (linhaAntesSimNaoVazamento) linhaAntesSimNaoVazamento.style.display = 'none';
            if (botoesSimNaoVazamento) botoesSimNaoVazamento.classList.remove('ativo');
            if (textoSimVazamento) textoSimVazamento.style.display = 'none';
            if (textoNaoVazamento) textoNaoVazamento.style.display = 'none';
            enableSimNaoVazamento();
            selectedSimNaoVazamento = null;
        }
    });
}

// Botão Sim do Vazamento Visível
const btnSimVazamento = document.getElementById('btnSimVazamento');
if (btnSimVazamento) {
    btnSimVazamento.addEventListener('click', () => {
        const textoSimVazamento = document.getElementById('textoSimVazamento');
        const textoNaoVazamento = document.getElementById('textoNaoVazamento');
        if (selectedSimNaoVazamento === 'btnSimVazamento') {
            enableSimNaoVazamento();
            selectedSimNaoVazamento = null;
            if (textoSimVazamento) textoSimVazamento.style.display = 'none';
        } else {
            disableSimNaoVazamento('btnSimVazamento');
            selectedSimNaoVazamento = 'btnSimVazamento';
            if (textoSimVazamento) textoSimVazamento.style.display = 'block';
            if (textoNaoVazamento) textoNaoVazamento.style.display = 'none';
        }
    });
}

// Botão Não do Vazamento Visível
const btnNaoVazamento = document.getElementById('btnNaoVazamento');
if (btnNaoVazamento) {
    btnNaoVazamento.addEventListener('click', () => {
        const textoSimVazamento = document.getElementById('textoSimVazamento');
        const textoNaoVazamento = document.getElementById('textoNaoVazamento');
        const textoVazamentoVisivel = document.getElementById('textoVazamentoVisivel');
        const linhaAntesSimNaoVazamento = document.getElementById('linhaAntesSimNaoVazamento');
        const botoesSimNaoVazamento = document.getElementById('botoesSimNaoVazamento');
        if (selectedSimNaoVazamento === 'btnNaoVazamento') {
            enableSimNaoVazamento();
            selectedSimNaoVazamento = null;
            if (textoNaoVazamento) textoNaoVazamento.style.display = 'none';
        } else {
            disableSimNaoVazamento('btnNaoVazamento');
            selectedSimNaoVazamento = 'btnNaoVazamento';
            if (textoVazamentoVisivel) textoVazamentoVisivel.style.display = 'block';
            if (linhaAntesSimNaoVazamento) linhaAntesSimNaoVazamento.style.display = 'block';
            if (botoesSimNaoVazamento) botoesSimNaoVazamento.classList.add('ativo');
            if (textoNaoVazamento) textoNaoVazamento.style.display = 'block';
            if (textoSimVazamento) textoSimVazamento.style.display = 'none';
        }
    });
}

// ----- Fluxo de Verificação de Execução -----
const btnVerificacao = document.getElementById('btnVerificacao');
if (btnVerificacao) {
    btnVerificacao.addEventListener('click', () => {
        const textoVerificacao = document.getElementById('textoVerificacao');
        const textoPerguntaReparo = document.getElementById('textoPerguntaReparo');
        const botoesSimNaoVerificacao = document.getElementById('botoesSimNaoVerificacao');

        const isActive = btnVerificacao.classList.contains('ativo');

        if (!isActive) {
            btnVerificacao.classList.add('ativo');
            disableBotoesEtapa('btnVerificacao');
            selectedEtapa = 'btnVerificacao';
            if (textoVerificacao) textoVerificacao.style.display = 'block';
            if (textoPerguntaReparo) textoPerguntaReparo.style.display = 'block';
            if (botoesSimNaoVerificacao) botoesSimNaoVerificacao.classList.add('ativo');
        } else {
            btnVerificacao.classList.remove('ativo');
            enableBotoesEtapa();
            selectedEtapa = null;
            if (textoVerificacao) textoVerificacao.style.display = 'none';
            if (textoPerguntaReparo) textoPerguntaReparo.style.display = 'none';
            if (botoesSimNaoVerificacao) botoesSimNaoVerificacao.classList.remove('ativo');
            enableSimNaoVerificacao();
            selectedSimNaoVerificacao = null;

            // Resetar texto/serviço executado e suas opções
            const linhaAntesServicoExecutado = document.getElementById('linhaAntesServicoExecutado');
            const textoServicoExecutado = document.getElementById('textoServicoExecutado');
            const linhaAntesOpcoesServico = document.getElementById('linhaAntesOpcoesServico');
            const opcoesServico = document.getElementById('opcoesServico');
            const textoSondagem = document.getElementById('textoSondagem');
            const textoReparoRamal = document.getElementById('textoReparoRamal');
            const textoSubstituicao = document.getElementById('textoSubstituicao');
            const linhaAntesAguaEsgoto = document.getElementById('linhaAntesAguaEsgoto');
            const botoesAguaEsgoto = document.getElementById('botoesAguaEsgoto');
            const textoAgua = document.getElementById('textoAgua');
            const textoEsgoto = document.getElementById('textoEsgoto');

            if (linhaAntesServicoExecutado) linhaAntesServicoExecutado.style.display = 'none';
            if (textoServicoExecutado) textoServicoExecutado.style.display = 'none';
            if (linhaAntesOpcoesServico) linhaAntesOpcoesServico.style.display = 'none';
            if (opcoesServico) opcoesServico.classList.remove('ativo');
            if (textoSondagem) textoSondagem.style.display = 'none';
            if (textoReparoRamal) textoReparoRamal.style.display = 'none';
            if (textoSubstituicao) textoSubstituicao.style.display = 'none';
            if (linhaAntesAguaEsgoto) linhaAntesAguaEsgoto.style.display = 'none';
            if (botoesAguaEsgoto) botoesAguaEsgoto.classList.remove('ativo');
            if (textoAgua) textoAgua.style.display = 'none';
            if (textoEsgoto) textoEsgoto.style.display = 'none';

            if (selectedServico) {
                document.getElementById(selectedServico).classList.remove('ativo');
                selectedServico = null;
                enableServico();
            }
            if (selectedAguaEsgoto) {
                document.getElementById(selectedAguaEsgoto).classList.remove('ativo');
                selectedAguaEsgoto = null;
                enableAguaEsgoto();
            }
        }
    });
}

const btnPerguntaReparo = document.getElementById('btnPerguntaReparo');
if (btnPerguntaReparo) {
    btnPerguntaReparo.addEventListener('click', () => {
        const linhaAntesSimNaoVerificacao = document.getElementById('linhaAntesSimNaoVerificacao');
        const botoesSimNaoVerificacao = document.getElementById('botoesSimNaoVerificacao');
        const isOpening = !botoesSimNaoVerificacao.classList.contains('ativo');

        if (linhaAntesSimNaoVerificacao) {
            linhaAntesSimNaoVerificacao.style.display = isOpening ? 'block' : 'none';
        }
        botoesSimNaoVerificacao.classList.toggle('ativo');

        if (!isOpening) {
            enableSimNaoVerificacao();
            selectedSimNaoVerificacao = null;

            // Resetar texto/serviço executado e suas opções
            const linhaAntesServicoExecutado = document.getElementById('linhaAntesServicoExecutado');
            const textoServicoExecutado = document.getElementById('textoServicoExecutado');
            const linhaAntesOpcoesServico = document.getElementById('linhaAntesOpcoesServico');
            const opcoesServico = document.getElementById('opcoesServico');
            const textoSondagem = document.getElementById('textoSondagem');
            const textoReparoRamal = document.getElementById('textoReparoRamal');
            const textoSubstituicao = document.getElementById('textoSubstituicao');
            const linhaAntesAguaEsgoto = document.getElementById('linhaAntesAguaEsgoto');
            const botoesAguaEsgoto = document.getElementById('botoesAguaEsgoto');
            const textoAgua = document.getElementById('textoAgua');
            const textoEsgoto = document.getElementById('textoEsgoto');

            if (linhaAntesServicoExecutado) linhaAntesServicoExecutado.style.display = 'none';
            if (textoServicoExecutado) textoServicoExecutado.style.display = 'none';
            if (linhaAntesOpcoesServico) linhaAntesOpcoesServico.style.display = 'none';
            if (opcoesServico) opcoesServico.classList.remove('ativo');
            if (textoSondagem) textoSondagem.style.display = 'none';
            if (textoReparoRamal) textoReparoRamal.style.display = 'none';
            if (textoSubstituicao) textoSubstituicao.style.display = 'none';
            if (linhaAntesAguaEsgoto) linhaAntesAguaEsgoto.style.display = 'none';
            if (botoesAguaEsgoto) botoesAguaEsgoto.classList.remove('ativo');
            if (textoAgua) textoAgua.style.display = 'none';
            if (textoEsgoto) textoEsgoto.style.display = 'none';

            if (selectedServico) {
                document.getElementById(selectedServico).classList.remove('ativo');
                selectedServico = null;
                enableServico();
            }
            if (selectedAguaEsgoto) {
                document.getElementById(selectedAguaEsgoto).classList.remove('ativo');
                selectedAguaEsgoto = null;
                enableAguaEsgoto();
            }
        }
    });
}

const btnSimVerificacao = document.getElementById('btnSimVerificacao');
if (btnSimVerificacao) {
    btnSimVerificacao.addEventListener('click', () => {
        const linhaAntesAguaEsgoto = document.getElementById('linhaAntesAguaEsgoto');
        const botoesAguaEsgoto = document.getElementById('botoesAguaEsgoto');
        const textoAgua = document.getElementById('textoAgua');
        const textoEsgoto = document.getElementById('textoEsgoto');

        if (selectedSimNaoVerificacao === 'btnSimVerificacao') {
            enableSimNaoVerificacao();
            selectedSimNaoVerificacao = null;
            if (linhaAntesAguaEsgoto) linhaAntesAguaEsgoto.style.display = 'none';
            if (botoesAguaEsgoto) botoesAguaEsgoto.classList.remove('ativo');
            if (textoAgua) textoAgua.style.display = 'none';
            if (textoEsgoto) textoEsgoto.style.display = 'none';
            enableAguaEsgoto();
            selectedAguaEsgoto = null;
        } else {
            disableSimNaoVerificacao('btnSimVerificacao');
            selectedSimNaoVerificacao = 'btnSimVerificacao';
            if (linhaAntesAguaEsgoto) linhaAntesAguaEsgoto.style.display = 'block';
            if (botoesAguaEsgoto) botoesAguaEsgoto.classList.add('ativo');
            if (textoAgua) textoAgua.style.display = 'none';
            if (textoEsgoto) textoEsgoto.style.display = 'none';
            enableAguaEsgoto();
            selectedAguaEsgoto = null;
        }
    });
}

const btnNaoVerificacao = document.getElementById('btnNaoVerificacao');
if (btnNaoVerificacao) {
    btnNaoVerificacao.addEventListener('click', () => {
        const linhaAntesServicoExecutado = document.getElementById('linhaAntesServicoExecutado');
        const textoServicoExecutado = document.getElementById('textoServicoExecutado');
        const opcoesServico = document.getElementById('opcoesServico');
        const linhaAntesAguaEsgoto = document.getElementById('linhaAntesAguaEsgoto');
        const botoesAguaEsgoto = document.getElementById('botoesAguaEsgoto');
        const textoAgua = document.getElementById('textoAgua');
        const textoEsgoto = document.getElementById('textoEsgoto');
        const textoSondagem = document.getElementById('textoSondagem');
        const textoReparoRamal = document.getElementById('textoReparoRamal');
        const textoSubstituicao = document.getElementById('textoSubstituicao');

        if (selectedSimNaoVerificacao === 'btnNaoVerificacao') {
            enableSimNaoVerificacao();
            selectedSimNaoVerificacao = null;
            if (linhaAntesServicoExecutado) linhaAntesServicoExecutado.style.display = 'none';
            if (textoServicoExecutado) textoServicoExecutado.style.display = 'none';
            if (opcoesServico) opcoesServico.classList.remove('ativo');
            if (textoSondagem) textoSondagem.style.display = 'none';
            if (textoReparoRamal) textoReparoRamal.style.display = 'none';
            if (textoSubstituicao) textoSubstituicao.style.display = 'none';
            if (selectedServico) {
                document.getElementById(selectedServico).classList.remove('ativo');
                selectedServico = null;
                enableServico();
            }
        } else {
            disableSimNaoVerificacao('btnNaoVerificacao');
            selectedSimNaoVerificacao = 'btnNaoVerificacao';
            if (linhaAntesServicoExecutado) linhaAntesServicoExecutado.style.display = 'block';
            if (textoServicoExecutado) textoServicoExecutado.style.display = 'block';
            if (opcoesServico) opcoesServico.classList.add('ativo');
        }

        if (linhaAntesAguaEsgoto) linhaAntesAguaEsgoto.style.display = 'none';
        if (botoesAguaEsgoto) botoesAguaEsgoto.classList.remove('ativo');
        if (textoAgua) textoAgua.style.display = 'none';
        if (textoEsgoto) textoEsgoto.style.display = 'none';
        enableAguaEsgoto();
        selectedAguaEsgoto = null;
    });
}

const btnAgua = document.getElementById('btnAgua');
if (btnAgua) {
    btnAgua.addEventListener('click', () => {
        const textoAgua = document.getElementById('textoAgua');
        const textoEsgoto = document.getElementById('textoEsgoto');
        const btnFormulario = document.getElementById('btnFormulario');

        if (selectedAguaEsgoto === 'btnAgua') {
            enableAguaEsgoto();
            selectedAguaEsgoto = null;
            if (textoAgua) textoAgua.style.display = 'none';
            if (btnFormulario) {
                btnFormulario.classList.add('desabilitado');
                btnFormulario.setAttribute('disabled', 'true');
            }
        } else {
            disableAguaEsgoto('btnAgua');
            selectedAguaEsgoto = 'btnAgua';
            if (textoAgua) textoAgua.style.display = 'block';
            if (textoEsgoto) textoEsgoto.style.display = 'none';
            if (btnFormulario) {
                btnFormulario.classList.remove('desabilitado');
                btnFormulario.removeAttribute('disabled');
            }
        }
    });
}

const btnEsgoto = document.getElementById('btnEsgoto');
if (btnEsgoto) {
    btnEsgoto.addEventListener('click', () => {
        const textoAgua = document.getElementById('textoAgua');
        const textoEsgoto = document.getElementById('textoEsgoto');

        if (selectedAguaEsgoto === 'btnEsgoto') {
            enableAguaEsgoto();
            selectedAguaEsgoto = null;
            if (textoEsgoto) textoEsgoto.style.display = 'none';
        } else {
            disableAguaEsgoto('btnEsgoto');
            selectedAguaEsgoto = 'btnEsgoto';
            if (textoEsgoto) textoEsgoto.style.display = 'block';
            if (textoAgua) textoAgua.style.display = 'none';
        }
    });
}

// As opções de serviço agora abrem automaticamente ao clicar em "Não" na verificação.

// Botão Sondagem
const btnSondagem = document.getElementById('btnSondagem');
if (btnSondagem) {
    btnSondagem.addEventListener('click', () => {
        const textoSondagem = document.getElementById('textoSondagem');
        const textoReparoRamal = document.getElementById('textoReparoRamal');
        const textoSubstituicao = document.getElementById('textoSubstituicao');

        if (selectedServico === 'btnSondagem') {
            btnSondagem.classList.remove('ativo');
            if (textoSondagem) textoSondagem.style.display = 'none';
            selectedServico = null;
            enableServico();
        } else {
            if (selectedServico) {
                document.getElementById(selectedServico).classList.remove('ativo');
                if (selectedServico === 'btnReparoRamal' && textoReparoRamal) {
                    textoReparoRamal.style.display = 'none';
                } else if (selectedServico === 'btnSubstituicao' && textoSubstituicao) {
                    textoSubstituicao.style.display = 'none';
                }
            }
            btnSondagem.classList.add('ativo');
            if (textoSondagem) textoSondagem.style.display = 'block';
            selectedServico = 'btnSondagem';
            disableServico('btnSondagem');
        }
    });
}

// Botão Reparo de Ramal
const btnReparoRamal = document.getElementById('btnReparoRamal');
if (btnReparoRamal) {
    btnReparoRamal.addEventListener('click', () => {
        const textoSondagem = document.getElementById('textoSondagem');
        const textoReparoRamal = document.getElementById('textoReparoRamal');
        const textoSubstituicao = document.getElementById('textoSubstituicao');

        if (selectedServico === 'btnReparoRamal') {
            btnReparoRamal.classList.remove('ativo');
            if (textoReparoRamal) textoReparoRamal.style.display = 'none';
            selectedServico = null;
            enableServico();
        } else {
            if (selectedServico) {
                document.getElementById(selectedServico).classList.remove('ativo');
                if (selectedServico === 'btnSondagem' && textoSondagem) {
                    textoSondagem.style.display = 'none';
                } else if (selectedServico === 'btnSubstituicao' && textoSubstituicao) {
                    textoSubstituicao.style.display = 'none';
                }
            }
            btnReparoRamal.classList.add('ativo');
            if (textoReparoRamal) textoReparoRamal.style.display = 'block';
            selectedServico = 'btnReparoRamal';
            disableServico('btnReparoRamal');
        }
    });
}

// Botão Substituição
const btnSubstituicao = document.getElementById('btnSubstituicao');
if (btnSubstituicao) {
    btnSubstituicao.addEventListener('click', () => {
        const textoSondagem = document.getElementById('textoSondagem');
        const textoReparoRamal = document.getElementById('textoReparoRamal');
        const textoSubstituicao = document.getElementById('textoSubstituicao');

        if (selectedServico === 'btnSubstituicao') {
            btnSubstituicao.classList.remove('ativo');
            if (textoSubstituicao) textoSubstituicao.style.display = 'none';
            selectedServico = null;
            enableServico();
        } else {
            if (selectedServico) {
                document.getElementById(selectedServico).classList.remove('ativo');
                if (selectedServico === 'btnSondagem' && textoSondagem) {
                    textoSondagem.style.display = 'none';
                } else if (selectedServico === 'btnReparoRamal' && textoReparoRamal) {
                    textoReparoRamal.style.display = 'none';
                }
            }
            btnSubstituicao.classList.add('ativo');
            if (textoSubstituicao) textoSubstituicao.style.display = 'block';
            selectedServico = 'btnSubstituicao';
            disableServico('btnSubstituicao');
        }
    });
}

// Botão Formulário
const btnFormulario = document.getElementById('btnFormulario');
if (btnFormulario) {
    btnFormulario.addEventListener('click', () => {
        const textoFormulario = document.getElementById('textoFormulario');
        const opcoesFormulario = document.getElementById('opcoesFormulario');
        const textoInfoRede = document.getElementById('textoInfoRede');
        const textoInfoRepavimentacao = document.getElementById('textoInfoRepavimentacao');
        const botoesSimNaoRepavimentacao = document.getElementById('botoesSimNaoRepavimentacao');
        const textoSimRepavimentacao = document.getElementById('textoSimRepavimentacao');
        const textoNaoRepavimentacao = document.getElementById('textoNaoRepavimentacao');

        const isActive = btnFormulario.classList.contains('ativo');

        if (!isActive) {
            btnFormulario.classList.add('ativo');
            disableBotoesEtapa('btnFormulario');
            selectedEtapa = 'btnFormulario';
            if (textoFormulario) textoFormulario.style.display = 'block';
            if (opcoesFormulario) opcoesFormulario.classList.add('ativo');
        } else {
            btnFormulario.classList.remove('ativo');
            enableBotoesEtapa();
            selectedEtapa = null;
            if (textoFormulario) textoFormulario.style.display = 'none';
            if (opcoesFormulario) opcoesFormulario.classList.remove('ativo');
            if (textoInfoRede) textoInfoRede.style.display = 'none';
            if (textoInfoRepavimentacao) textoInfoRepavimentacao.style.display = 'none';
            if (botoesSimNaoRepavimentacao) botoesSimNaoRepavimentacao.classList.remove('ativo');
            if (textoSimRepavimentacao) textoSimRepavimentacao.style.display = 'none';
            if (textoNaoRepavimentacao) textoNaoRepavimentacao.style.display = 'none';
            enableSimNaoRepavimentacao();
            selectedSimNaoRepavimentacao = null;
            if (selectedInfoFormulario) {
                document.getElementById(selectedInfoFormulario).classList.remove('ativo');
                selectedInfoFormulario = null;
                enableInfoFormulario();
            }
        }
    });
}

// Botão Informações sobre a Rede
const btnInfoRede = document.getElementById('btnInfoRede');
if (btnInfoRede) {
    btnInfoRede.addEventListener('click', () => {
        const textoInfoRede = document.getElementById('textoInfoRede');
        const textoInfoRepavimentacao = document.getElementById('textoInfoRepavimentacao');
        const botoesSimNaoRepavimentacao = document.getElementById('botoesSimNaoRepavimentacao');

        if (selectedInfoFormulario === 'btnInfoRede') {
            btnInfoRede.classList.remove('ativo');
            if (textoInfoRede) textoInfoRede.style.display = 'none';
            selectedInfoFormulario = null;
            enableInfoFormulario();
        } else {
            if (selectedInfoFormulario) {
                document.getElementById(selectedInfoFormulario).classList.remove('ativo');
                if (selectedInfoFormulario === 'btnInfoRepavimentacao') {
                    if (textoInfoRepavimentacao) textoInfoRepavimentacao.style.display = 'none';
                    if (botoesSimNaoRepavimentacao) botoesSimNaoRepavimentacao.classList.remove('ativo');
                    enableSimNaoRepavimentacao();
                    selectedSimNaoRepavimentacao = null;
                }
            }
            btnInfoRede.classList.add('ativo');
            if (textoInfoRede) textoInfoRede.style.display = 'block';
            selectedInfoFormulario = 'btnInfoRede';
            disableInfoFormulario('btnInfoRede');
        }
    });
}

// Botão Informações sobre Repavimentação
const btnInfoRepavimentacao = document.getElementById('btnInfoRepavimentacao');
if (btnInfoRepavimentacao) {
    btnInfoRepavimentacao.addEventListener('click', () => {
        const textoInfoRede = document.getElementById('textoInfoRede');
        const textoInfoRepavimentacao = document.getElementById('textoInfoRepavimentacao');
        const botoesSimNaoRepavimentacao = document.getElementById('botoesSimNaoRepavimentacao');
        const textoSimRepavimentacao = document.getElementById('textoSimRepavimentacao');
        const textoNaoRepavimentacao = document.getElementById('textoNaoRepavimentacao');

        if (selectedInfoFormulario === 'btnInfoRepavimentacao') {
            btnInfoRepavimentacao.classList.remove('ativo');
            if (textoInfoRepavimentacao) textoInfoRepavimentacao.style.display = 'none';
            if (botoesSimNaoRepavimentacao) botoesSimNaoRepavimentacao.classList.remove('ativo');
            if (textoSimRepavimentacao) textoSimRepavimentacao.style.display = 'none';
            if (textoNaoRepavimentacao) textoNaoRepavimentacao.style.display = 'none';
            enableSimNaoRepavimentacao();
            selectedSimNaoRepavimentacao = null;
            selectedInfoFormulario = null;
            enableInfoFormulario();
        } else {
            if (selectedInfoFormulario) {
                document.getElementById(selectedInfoFormulario).classList.remove('ativo');
                if (selectedInfoFormulario === 'btnInfoRede') {
                    if (textoInfoRede) textoInfoRede.style.display = 'none';
                }
            }
            btnInfoRepavimentacao.classList.add('ativo');
            if (textoInfoRepavimentacao) textoInfoRepavimentacao.style.display = 'block';
            if (botoesSimNaoRepavimentacao) botoesSimNaoRepavimentacao.classList.add('ativo');
            selectedInfoFormulario = 'btnInfoRepavimentacao';
            disableInfoFormulario('btnInfoRepavimentacao');
        }
    });
}

// Botão Sim da Repavimentação
const btnSimRepavimentacao = document.getElementById('btnSimRepavimentacao');
if (btnSimRepavimentacao) {
    btnSimRepavimentacao.addEventListener('click', () => {
        const textoSimRepavimentacao = document.getElementById('textoSimRepavimentacao');
        const textoNaoRepavimentacao = document.getElementById('textoNaoRepavimentacao');

        if (selectedSimNaoRepavimentacao === 'btnSimRepavimentacao') {
            btnSimRepavimentacao.classList.remove('ativo');
            if (textoSimRepavimentacao) textoSimRepavimentacao.style.display = 'none';
            enableSimNaoRepavimentacao();
            selectedSimNaoRepavimentacao = null;
        } else {
            if (selectedSimNaoRepavimentacao) {
                document.getElementById(selectedSimNaoRepavimentacao).classList.remove('ativo');
                if (selectedSimNaoRepavimentacao === 'btnNaoRepavimentacao' && textoNaoRepavimentacao) {
                    textoNaoRepavimentacao.style.display = 'none';
                }
            }
            btnSimRepavimentacao.classList.add('ativo');
            if (textoSimRepavimentacao) textoSimRepavimentacao.style.display = 'block';
            if (textoNaoRepavimentacao) textoNaoRepavimentacao.style.display = 'none';
            disableSimNaoRepavimentacao('btnSimRepavimentacao');
            selectedSimNaoRepavimentacao = 'btnSimRepavimentacao';
        }
    });
}

// Botão Não da Repavimentação
const btnNaoRepavimentacao = document.getElementById('btnNaoRepavimentacao');
if (btnNaoRepavimentacao) {
    btnNaoRepavimentacao.addEventListener('click', () => {
        const textoSimRepavimentacao = document.getElementById('textoSimRepavimentacao');
        const textoNaoRepavimentacao = document.getElementById('textoNaoRepavimentacao');

        if (selectedSimNaoRepavimentacao === 'btnNaoRepavimentacao') {
            btnNaoRepavimentacao.classList.remove('ativo');
            if (textoNaoRepavimentacao) textoNaoRepavimentacao.style.display = 'none';
            enableSimNaoRepavimentacao();
            selectedSimNaoRepavimentacao = null;
        } else {
            if (selectedSimNaoRepavimentacao) {
                document.getElementById(selectedSimNaoRepavimentacao).classList.remove('ativo');
                if (selectedSimNaoRepavimentacao === 'btnSimRepavimentacao' && textoSimRepavimentacao) {
                    textoSimRepavimentacao.style.display = 'none';
                }
            }
            btnNaoRepavimentacao.classList.add('ativo');
            if (textoNaoRepavimentacao) textoNaoRepavimentacao.style.display = 'block';
            if (textoSimRepavimentacao) textoSimRepavimentacao.style.display = 'none';
            disableSimNaoRepavimentacao('btnNaoRepavimentacao');
            selectedSimNaoRepavimentacao = 'btnNaoRepavimentacao';
        }
    });
}

// Controla a exibição da linha do Padrão de Fotos
const btnPadraoFotos = document.getElementById('btnPadraoFotos');
const nivelPadraoFotos = document.getElementById('nivelPadraoFotos');
const linhaPadraoFotos = document.getElementById('linhaPadraoFotos');

if (btnPadraoFotos && nivelPadraoFotos && linhaPadraoFotos) {
    btnPadraoFotos.addEventListener('click', () => {
        setTimeout(() => {
            if (nivelPadraoFotos.classList.contains('ativo')) {
                linhaPadraoFotos.style.display = 'block';
            } else {
                linhaPadraoFotos.style.display = 'none';
            }
        }, 0);
    });
}

// Estado para saber qual botão de Padrão de Fotos está selecionado
let selectedPadraoFotosButton = null;

function disablePadraoFotosButtons(buttonId) {
    const btnFotoLocalAntes = document.getElementById('btnFotoLocalAntes');
    const btnFotoAvaria = document.getElementById('btnFotoAvaria');
    const btnFotoReparo = document.getElementById('btnFotoReparo');
    const btnFotoAfericoes = document.getElementById('btnFotoAfericoes');
    const btnFotoConclusao = document.getElementById('btnFotoConclusao');
    const allPadraoFotosButtons = [btnFotoLocalAntes, btnFotoAvaria, btnFotoReparo, btnFotoAfericoes, btnFotoConclusao];

    allPadraoFotosButtons.forEach(el => {
        if (!el) return;
        if (el.id !== buttonId) {
            el.classList.add('desabilitado');
            el.setAttribute('disabled', 'true');
            el.setAttribute('aria-disabled', 'true');
        }
    });
}

function enablePadraoFotosButtons() {
    const btnFotoLocalAntes = document.getElementById('btnFotoLocalAntes');
    const btnFotoAvaria = document.getElementById('btnFotoAvaria');
    const btnFotoReparo = document.getElementById('btnFotoReparo');
    const btnFotoAfericoes = document.getElementById('btnFotoAfericoes');
    const btnFotoConclusao = document.getElementById('btnFotoConclusao');
    const allPadraoFotosButtons = [btnFotoLocalAntes, btnFotoAvaria, btnFotoReparo, btnFotoAfericoes, btnFotoConclusao];

    allPadraoFotosButtons.forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Botão Foto do local antes da Execução
const btnFotoLocalAntes = document.getElementById('btnFotoLocalAntes');
if (btnFotoLocalAntes) {
    btnFotoLocalAntes.addEventListener('click', () => {
        const texto = document.getElementById('textoFotoLocalAntes');
        const img = document.getElementById('imgFotoLocalAntes');

        if (selectedPadraoFotosButton === 'btnFotoLocalAntes') {
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnFotoLocalAntes');
            selectedPadraoFotosButton = 'btnFotoLocalAntes';
        }
    });
}

// Botão Foto evidenciando avaria do serviço
const btnFotoAvaria = document.getElementById('btnFotoAvaria');
if (btnFotoAvaria) {
    btnFotoAvaria.addEventListener('click', () => {
        const texto = document.getElementById('textoFotoAvaria');
        const img = document.getElementById('imgFotoAvaria');

        if (selectedPadraoFotosButton === 'btnFotoAvaria') {
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnFotoAvaria');
            selectedPadraoFotosButton = 'btnFotoAvaria';
        }
    });
}

// Botão Foto do Reparo Executado
const btnFotoReparo = document.getElementById('btnFotoReparo');
if (btnFotoReparo) {
    btnFotoReparo.addEventListener('click', () => {
        const texto = document.getElementById('textoFotoReparo');
        const img = document.getElementById('imgFotoReparo');

        if (selectedPadraoFotosButton === 'btnFotoReparo') {
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnFotoReparo');
            selectedPadraoFotosButton = 'btnFotoReparo';
        }
    });
}

// Botão Aferições
const btnFotoAfericoes = document.getElementById('btnFotoAfericoes');
if (btnFotoAfericoes) {
    btnFotoAfericoes.addEventListener('click', () => {
        const texto = document.getElementById('textoFotoAfericoes');
        const img = document.getElementById('imgFotoAfericoes');

        if (selectedPadraoFotosButton === 'btnFotoAfericoes') {
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnFotoAfericoes');
            selectedPadraoFotosButton = 'btnFotoAfericoes';
        }
    });
}

// Botão Conclusão do Serviço
const btnFotoConclusao = document.getElementById('btnFotoConclusao');
if (btnFotoConclusao) {
    btnFotoConclusao.addEventListener('click', () => {
        const texto = document.getElementById('textoFotoConclusao');
        const img = document.getElementById('imgFotoConclusao');

        if (selectedPadraoFotosButton === 'btnFotoConclusao') {
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnFotoConclusao');
            selectedPadraoFotosButton = 'btnFotoConclusao';
        }
    });
}

// Inicializa o botão Serviços Posteriores
toggleNivelRede('btnServicosPosteriores', 'nivelServicosPosteriores');

// Controla a exibição da linha do Serviços Posteriores
const btnServicosPosteriores = document.getElementById('btnServicosPosteriores');
const nivelServicosPosteriores = document.getElementById('nivelServicosPosteriores');
const linhaServicosPosteriores = document.getElementById('linhaServicosPosteriores');

if (btnServicosPosteriores) {
    btnServicosPosteriores.addEventListener('click', () => {
        const textoPerguntaReaterro = document.getElementById('textoPerguntaReaterro');
        const linhaReaterro = document.getElementById('linhaAntesSimNaoReaterro'); // Ajuste o ID conforme seu HTML
        const botoesSimNao = document.getElementById('botoesSimNaoReaterro'); // Ajuste o ID conforme seu HTML

        // Verifica se está abrindo ou fechando
        const isOpening = textoPerguntaReaterro.style.display === 'none';

        if (isOpening) {
            textoPerguntaReaterro.style.display = 'block';
            if (linhaReaterro) linhaReaterro.style.display = 'block';
            if (botoesSimNao) botoesSimNao.classList.add('ativo');
        } else {
            textoPerguntaReaterro.style.display = 'none';
            if (linhaReaterro) linhaReaterro.style.display = 'none';
            if (botoesSimNao) botoesSimNao.classList.remove('ativo');

            // Opcional: Resetar estados dos botões sim/não aqui se desejar
        }
    });
}


// Estado e funções para Sim/Não do Reaterro
let selectedSimNaoReaterro = null;

function disableSimNaoReaterro(buttonId) {
    const btnSimReaterro = document.getElementById('btnSimReaterro');
    const btnNaoReaterro = document.getElementById('btnNaoReaterro');

    if (buttonId === 'btnSimReaterro' && btnNaoReaterro) {
        btnNaoReaterro.classList.add('desabilitado');
        btnNaoReaterro.setAttribute('disabled', 'true');
        btnNaoReaterro.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoReaterro' && btnSimReaterro) {
        btnSimReaterro.classList.add('desabilitado');
        btnSimReaterro.setAttribute('disabled', 'true');
        btnSimReaterro.setAttribute('aria-disabled', 'true');
    }
}

function enableSimNaoReaterro() {
    const btnSimReaterro = document.getElementById('btnSimReaterro');
    const btnNaoReaterro = document.getElementById('btnNaoReaterro');
    [btnSimReaterro, btnNaoReaterro].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Função para fechar opcoesTipoPavimento e resetar estado
function fecharOpcoesTipoPavimento() {
    const linhaAntesTipoPavimento = document.getElementById('linhaAntesTipoPavimento');
    const opcoesTipoPavimento = document.getElementById('opcoesTipoPavimento');
    const textoTerra = document.getElementById('textoTerra');
    const textoCalcada = document.getElementById('textoCalcada');
    const textoConcreto = document.getElementById('textoConcreto');
    const linhaAntesValaRecortada = document.getElementById('linhaAntesValaRecortada');
    const btnValaRecortada = document.getElementById('btnValaRecortada');

    if (linhaAntesTipoPavimento) linhaAntesTipoPavimento.style.display = 'none';
    if (opcoesTipoPavimento) opcoesTipoPavimento.classList.remove('ativo');

    // Resetar botão selecionado
    if (selectedTipoPavimento) {
        const btnSelecionado = document.getElementById(selectedTipoPavimento);
        if (btnSelecionado) btnSelecionado.classList.remove('ativo');
        selectedTipoPavimento = null;
    }

    // Esconder todos os textos e botões relacionados
    if (textoTerra) textoTerra.style.display = 'none';
    if (textoCalcada) textoCalcada.style.display = 'none';
    if (textoConcreto) textoConcreto.style.display = 'none';
    if (linhaAntesValaRecortada) linhaAntesValaRecortada.style.display = 'none';
    if (btnValaRecortada) btnValaRecortada.style.display = 'none';

    // Re-habilitar todos os botões de tipo de pavimento
    enableTipoPavimento();
}

// Botão Reaterro e Compactação
const btnReaterroCompactacao = document.getElementById('btnReaterroCompactacao');
if (btnReaterroCompactacao) {
    btnReaterroCompactacao.addEventListener('click', () => {
        const linhaAntesSimNaoReaterro = document.getElementById('linhaAntesSimNaoReaterro');
        const botoesSimNaoReaterro = document.getElementById('botoesSimNaoReaterro');
        const textoNaoReaterro = document.getElementById('textoNaoReaterro');
        const linhaAntesPavimento = document.getElementById('linhaAntesPavimento');
        const textoPavimentoEscavado = document.getElementById('textoPavimentoEscavado');
        const btnSimReaterro = document.getElementById('btnSimReaterro');
        const btnNaoReaterro = document.getElementById('btnNaoReaterro');

        // Toggle: se já está ativo, fecha tudo
        if (botoesSimNaoReaterro && botoesSimNaoReaterro.classList.contains('ativo')) {
            if (linhaAntesSimNaoReaterro) linhaAntesSimNaoReaterro.style.display = 'none';
            if (botoesSimNaoReaterro) botoesSimNaoReaterro.classList.remove('ativo');
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'none';
            if (linhaAntesPavimento) linhaAntesPavimento.style.display = 'none';
            if (textoPavimentoEscavado) textoPavimentoEscavado.style.display = 'none';

            // Resetar seleção dos botões Sim/Não
            if (btnSimReaterro) btnSimReaterro.classList.remove('ativo');
            if (btnNaoReaterro) btnNaoReaterro.classList.remove('ativo');
            enableSimNaoReaterro();
            selectedSimNaoReaterro = null;

            // Fechar opcoesTipoPavimento
            fecharOpcoesTipoPavimento();
        } else {
            // Fechar opcoesTipoPavimento antes de abrir
            fecharOpcoesTipoPavimento();

            // Abre os botões Sim/Não
            if (linhaAntesSimNaoReaterro) linhaAntesSimNaoReaterro.style.display = 'block';
            if (botoesSimNaoReaterro) botoesSimNaoReaterro.classList.add('ativo');
        }
    });
}

// Botão Sim Reaterro
const btnSimReaterro = document.getElementById('btnSimReaterro');
if (btnSimReaterro) {
    btnSimReaterro.addEventListener('click', () => {
        const textoNaoReaterro = document.getElementById('textoNaoReaterro');
        const linhaAntesPavimento = document.getElementById('linhaAntesPavimento');
        const textoPavimentoEscavado = document.getElementById('textoPavimentoEscavado');
        const linhaAntesTipoPavimento = document.getElementById('linhaAntesTipoPavimento');
        const opcoesTipoPavimento = document.getElementById('opcoesTipoPavimento');

        if (selectedSimNaoReaterro === 'btnSimReaterro') {
            btnSimReaterro.classList.remove('ativo');
            if (linhaAntesPavimento) linhaAntesPavimento.style.display = 'none';
            if (textoPavimentoEscavado) textoPavimentoEscavado.style.display = 'none';
            // Fechar opcoesTipoPavimento
            fecharOpcoesTipoPavimento();
            enableSimNaoReaterro();
            selectedSimNaoReaterro = null;
        } else {
            if (selectedSimNaoReaterro) {
                document.getElementById(selectedSimNaoReaterro).classList.remove('ativo');
                if (textoNaoReaterro) textoNaoReaterro.style.display = 'none';
            }
            btnSimReaterro.classList.add('ativo');
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'none';
            if (linhaAntesPavimento) linhaAntesPavimento.style.display = 'block';
            if (textoPavimentoEscavado) textoPavimentoEscavado.style.display = 'block';
            if (linhaAntesTipoPavimento) linhaAntesTipoPavimento.style.display = 'block';
            if (opcoesTipoPavimento) opcoesTipoPavimento.classList.add('ativo');
            disableSimNaoReaterro('btnSimReaterro');
            selectedSimNaoReaterro = 'btnSimReaterro';
        }
    });
}

// Botão Não Reaterro
const btnNaoReaterro = document.getElementById('btnNaoReaterro');
if (btnNaoReaterro) {
    btnNaoReaterro.addEventListener('click', () => {
        const textoNaoReaterro = document.getElementById('textoNaoReaterro');
        const linhaAntesPavimento = document.getElementById('linhaAntesPavimento');
        const textoPavimentoEscavado = document.getElementById('textoPavimentoEscavado');

        if (selectedSimNaoReaterro === 'btnNaoReaterro') {
            btnNaoReaterro.classList.remove('ativo');
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'none';
            enableSimNaoReaterro();
            selectedSimNaoReaterro = null;
        } else {
            if (selectedSimNaoReaterro) {
                document.getElementById(selectedSimNaoReaterro).classList.remove('ativo');
                if (linhaAntesPavimento) linhaAntesPavimento.style.display = 'none';
                if (textoPavimentoEscavado) textoPavimentoEscavado.style.display = 'none';
            }
            btnNaoReaterro.classList.add('ativo');
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'block';
            if (linhaAntesPavimento) linhaAntesPavimento.style.display = 'none';
            if (textoPavimentoEscavado) textoPavimentoEscavado.style.display = 'none';
            disableSimNaoReaterro('btnNaoReaterro');
            selectedSimNaoReaterro = 'btnNaoReaterro';
        }
    });
}

// As opções de tipo de pavimento agora abrem automaticamente ao clicar em "Sim" no Reaterro.

// Estado e funções para botões de tipo de pavimento
let selectedTipoPavimento = null;

function disableTipoPavimento(buttonId) {
    const btnTerra = document.getElementById('btnTerra');
    const btnCalcada = document.getElementById('btnCalcada');
    const btnConcreto = document.getElementById('btnConcreto');
    const btnAsfalto = document.getElementById('btnAsfalto');
    const allTipoPavimentoButtons = [btnTerra, btnCalcada, btnConcreto, btnAsfalto];

    allTipoPavimentoButtons.forEach(el => {
        if (!el || el.id === buttonId) return;
        el.classList.add('desabilitado');
        el.setAttribute('disabled', 'true');
        el.setAttribute('aria-disabled', 'true');
    });
}

function enableTipoPavimento() {
    const btnTerra = document.getElementById('btnTerra');
    const btnCalcada = document.getElementById('btnCalcada');
    const btnConcreto = document.getElementById('btnConcreto');
    const btnAsfalto = document.getElementById('btnAsfalto');
    const allTipoPavimentoButtons = [btnTerra, btnCalcada, btnConcreto, btnAsfalto];

    allTipoPavimentoButtons.forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Botão Terra
const btnTerra = document.getElementById('btnTerra');
if (btnTerra) {
    btnTerra.addEventListener('click', () => {
        const textoTerra = document.getElementById('textoTerra');
        const textoCalcada = document.getElementById('textoCalcada');
        const textoConcreto = document.getElementById('textoConcreto');
        const linhaAntesValaRecortada = document.getElementById('linhaAntesValaRecortada');
        const btnValaRecortada = document.getElementById('btnValaRecortada');

        if (selectedTipoPavimento === 'btnTerra') {
            btnTerra.classList.remove('ativo');
            if (textoTerra) textoTerra.style.display = 'none';
            enableTipoPavimento();
            selectedTipoPavimento = null;
        } else {
            if (selectedTipoPavimento) {
                document.getElementById(selectedTipoPavimento).classList.remove('ativo');
            }
            if (textoCalcada) textoCalcada.style.display = 'none';
            if (textoConcreto) textoConcreto.style.display = 'none';
            if (linhaAntesValaRecortada) linhaAntesValaRecortada.style.display = 'none';
            if (btnValaRecortada) btnValaRecortada.style.display = 'none';

            btnTerra.classList.add('ativo');
            if (textoTerra) textoTerra.style.display = 'block';
            disableTipoPavimento('btnTerra');
            selectedTipoPavimento = 'btnTerra';
        }
    });
}

// Botão Calçada
const btnCalcada = document.getElementById('btnCalcada');
if (btnCalcada) {
    btnCalcada.addEventListener('click', () => {
        const textoTerra = document.getElementById('textoTerra');
        const textoCalcada = document.getElementById('textoCalcada');
        const textoConcreto = document.getElementById('textoConcreto');
        const linhaAntesValaRecortada = document.getElementById('linhaAntesValaRecortada');
        const btnValaRecortada = document.getElementById('btnValaRecortada');

        if (selectedTipoPavimento === 'btnCalcada') {
            btnCalcada.classList.remove('ativo');
            if (textoCalcada) textoCalcada.style.display = 'none';
            enableTipoPavimento();
            selectedTipoPavimento = null;
        } else {
            if (selectedTipoPavimento) {
                document.getElementById(selectedTipoPavimento).classList.remove('ativo');
            }
            if (textoTerra) textoTerra.style.display = 'none';
            if (textoConcreto) textoConcreto.style.display = 'none';
            if (linhaAntesValaRecortada) linhaAntesValaRecortada.style.display = 'none';
            if (btnValaRecortada) btnValaRecortada.style.display = 'none';

            btnCalcada.classList.add('ativo');
            if (textoCalcada) textoCalcada.style.display = 'block';
            disableTipoPavimento('btnCalcada');
            selectedTipoPavimento = 'btnCalcada';
        }
    });
}

// Botão Concreto
const btnConcreto = document.getElementById('btnConcreto');
if (btnConcreto) {
    btnConcreto.addEventListener('click', () => {
        const textoTerra = document.getElementById('textoTerra');
        const textoCalcada = document.getElementById('textoCalcada');
        const textoConcreto = document.getElementById('textoConcreto');
        const linhaAntesValaRecortada = document.getElementById('linhaAntesValaRecortada');
        const btnValaRecortada = document.getElementById('btnValaRecortada');

        if (selectedTipoPavimento === 'btnConcreto') {
            btnConcreto.classList.remove('ativo');
            if (textoConcreto) textoConcreto.style.display = 'none';
            enableTipoPavimento();
            selectedTipoPavimento = null;
        } else {
            if (selectedTipoPavimento) {
                document.getElementById(selectedTipoPavimento).classList.remove('ativo');
            }
            if (textoTerra) textoTerra.style.display = 'none';
            if (textoCalcada) textoCalcada.style.display = 'none';
            if (linhaAntesValaRecortada) linhaAntesValaRecortada.style.display = 'none';
            if (btnValaRecortada) btnValaRecortada.style.display = 'none';

            btnConcreto.classList.add('ativo');
            if (textoConcreto) textoConcreto.style.display = 'block';
            disableTipoPavimento('btnConcreto');
            selectedTipoPavimento = 'btnConcreto';
        }
    });
}

// Botão Asfalto
const btnAsfalto = document.getElementById('btnAsfalto');
if (btnAsfalto) {
    btnAsfalto.addEventListener('click', () => {
        const textoTerra = document.getElementById('textoTerra');
        const textoCalcada = document.getElementById('textoCalcada');
        const textoConcreto = document.getElementById('textoConcreto');
        const linhaAntesValaRecortada = document.getElementById('linhaAntesValaRecortada');
        const textoPerguntaValaRecortada = document.getElementById('textoPerguntaValaRecortada');
        const botoesSimNaoValaRecortada = document.getElementById('botoesSimNaoValaRecortada');

        if (selectedTipoPavimento === 'btnAsfalto') {
            btnAsfalto.classList.remove('ativo');
            if (linhaAntesValaRecortada) linhaAntesValaRecortada.style.display = 'none';
            if (textoPerguntaValaRecortada) textoPerguntaValaRecortada.style.display = 'none';
            if (botoesSimNaoValaRecortada) botoesSimNaoValaRecortada.classList.remove('ativo');
            enableTipoPavimento();
            selectedTipoPavimento = null;
        } else {
            if (selectedTipoPavimento) {
                document.getElementById(selectedTipoPavimento).classList.remove('ativo');
            }
            if (textoTerra) textoTerra.style.display = 'none';
            if (textoCalcada) textoCalcada.style.display = 'none';
            if (textoConcreto) textoConcreto.style.display = 'none';

            btnAsfalto.classList.add('ativo');
            if (linhaAntesValaRecortada) linhaAntesValaRecortada.style.display = 'block';
            if (textoPerguntaValaRecortada) textoPerguntaValaRecortada.style.display = 'block';
            if (botoesSimNaoValaRecortada) botoesSimNaoValaRecortada.classList.add('ativo');
            disableTipoPavimento('btnAsfalto');
            selectedTipoPavimento = 'btnAsfalto';
        }
    });
}

// Estado e funções para Sim/Não da Vala Recortada
let selectedSimNaoValaRecortada = null;

function disableSimNaoValaRecortada(buttonId) {
    const btnSimValaRecortada = document.getElementById('btnSimValaRecortada');
    const btnNaoValaRecortada = document.getElementById('btnNaoValaRecortada');

    if (buttonId === 'btnSimValaRecortada' && btnNaoValaRecortada) {
        btnNaoValaRecortada.classList.add('desabilitado');
        btnNaoValaRecortada.setAttribute('disabled', 'true');
        btnNaoValaRecortada.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoValaRecortada' && btnSimValaRecortada) {
        btnSimValaRecortada.classList.add('desabilitado');
        btnSimValaRecortada.setAttribute('disabled', 'true');
        btnSimValaRecortada.setAttribute('aria-disabled', 'true');
    }
}

function enableSimNaoValaRecortada() {
    const btnSimValaRecortada = document.getElementById('btnSimValaRecortada');
    const btnNaoValaRecortada = document.getElementById('btnNaoValaRecortada');
    [btnSimValaRecortada, btnNaoValaRecortada].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Botão Vala Recortada
const btnValaRecortada = document.getElementById('btnValaRecortada');
if (btnValaRecortada) {
    btnValaRecortada.addEventListener('click', () => {
        const linhaAntesSimNaoValaRecortada = document.getElementById('linhaAntesSimNaoValaRecortada');
        const botoesSimNaoValaRecortada = document.getElementById('botoesSimNaoValaRecortada');
        const textoSimValaRecortada = document.getElementById('textoSimValaRecortada');
        const textoNaoValaRecortada = document.getElementById('textoNaoValaRecortada');
        const btnSimValaRecortada = document.getElementById('btnSimValaRecortada');
        const btnNaoValaRecortada = document.getElementById('btnNaoValaRecortada');

        // Toggle: se já está ativo, fecha tudo
        if (botoesSimNaoValaRecortada && botoesSimNaoValaRecortada.classList.contains('ativo')) {
            if (linhaAntesSimNaoValaRecortada) linhaAntesSimNaoValaRecortada.style.display = 'none';
            if (botoesSimNaoValaRecortada) botoesSimNaoValaRecortada.classList.remove('ativo');
            if (textoSimValaRecortada) textoSimValaRecortada.style.display = 'none';
            if (textoNaoValaRecortada) textoNaoValaRecortada.style.display = 'none';

            // Resetar seleção
            if (btnSimValaRecortada) btnSimValaRecortada.classList.remove('ativo');
            if (btnNaoValaRecortada) btnNaoValaRecortada.classList.remove('ativo');
            enableSimNaoValaRecortada();
            selectedSimNaoValaRecortada = null;
        } else {
            // Abre os botões Sim/Não
            if (linhaAntesSimNaoValaRecortada) linhaAntesSimNaoValaRecortada.style.display = 'block';
            if (botoesSimNaoValaRecortada) botoesSimNaoValaRecortada.classList.add('ativo');
        }
    });
}

// Botão Sim Vala Recortada
const btnSimValaRecortada = document.getElementById('btnSimValaRecortada');
if (btnSimValaRecortada) {
    btnSimValaRecortada.addEventListener('click', () => {
        const textoSimValaRecortada = document.getElementById('textoSimValaRecortada');
        const textoNaoValaRecortada = document.getElementById('textoNaoValaRecortada');

        if (selectedSimNaoValaRecortada === 'btnSimValaRecortada') {
            btnSimValaRecortada.classList.remove('ativo');
            if (textoSimValaRecortada) textoSimValaRecortada.style.display = 'none';
            enableSimNaoValaRecortada();
            selectedSimNaoValaRecortada = null;
        } else {
            if (selectedSimNaoValaRecortada) {
                document.getElementById(selectedSimNaoValaRecortada).classList.remove('ativo');
                if (textoNaoValaRecortada) textoNaoValaRecortada.style.display = 'none';
            }
            btnSimValaRecortada.classList.add('ativo');
            if (textoSimValaRecortada) textoSimValaRecortada.style.display = 'block';
            if (textoNaoValaRecortada) textoNaoValaRecortada.style.display = 'none';
            disableSimNaoValaRecortada('btnSimValaRecortada');
            selectedSimNaoValaRecortada = 'btnSimValaRecortada';
        }
    });
}

// Botão Não Vala Recortada
const btnNaoValaRecortada = document.getElementById('btnNaoValaRecortada');
if (btnNaoValaRecortada) {
    btnNaoValaRecortada.addEventListener('click', () => {
        const textoSimValaRecortada = document.getElementById('textoSimValaRecortada');
        const textoNaoValaRecortada = document.getElementById('textoNaoValaRecortada');

        if (selectedSimNaoValaRecortada === 'btnNaoValaRecortada') {
            btnNaoValaRecortada.classList.remove('ativo');
            if (textoNaoValaRecortada) textoNaoValaRecortada.style.display = 'none';
            enableSimNaoValaRecortada();
            selectedSimNaoValaRecortada = null;
        } else {
            if (selectedSimNaoValaRecortada) {
                document.getElementById(selectedSimNaoValaRecortada).classList.remove('ativo');
                if (textoSimValaRecortada) textoSimValaRecortada.style.display = 'none';
            }
            btnNaoValaRecortada.classList.add('ativo');
            if (textoNaoValaRecortada) textoNaoValaRecortada.style.display = 'block';
            if (textoSimValaRecortada) textoSimValaRecortada.style.display = 'none';
            disableSimNaoValaRecortada('btnNaoValaRecortada');
            selectedSimNaoValaRecortada = 'btnNaoValaRecortada';
        }
    });
}
