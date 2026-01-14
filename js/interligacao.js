// Função genérica para alternar a visibilidade de um nível de interligação
function toggleNivelInterligacao(botaoId, nivelId) {
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
                // 3. Mostra a linha de decisão e os serviços posteriores apenas para btnInterligacao
                if (botaoId === 'btnInterligacao') {
                    if (linhaDecisao) linhaDecisao.style.display = 'block';
                    if (nivelDecisoesFinais) nivelDecisoesFinais.classList.add('ativo');
                }
            } else {
                // 4. Após a primeira vez, funciona como um toggle normal de abre/fecha
                nivel.classList.toggle('ativo');
                // Toggle também da linha e serviços posteriores apenas para btnInterligacao
                if (botaoId === 'btnInterligacao') {
                    if (linhaDecisao) {
                        linhaDecisao.style.display = nivel.classList.contains('ativo') ? 'block' : 'none';
                    }
                    if (nivelDecisoesFinais) {
                        nivelDecisoesFinais.classList.toggle('ativo');
                    }
                }
            }
        });
    }
}

// Inicializa o fluxo principal
toggleNivelInterligacao('btnInterligacao', 'nivelInterligacao');

// Inicializa o botão Procedimento
toggleNivelInterligacao('btnProcedimento', 'nivelProcedimento');

// Inicializa o botão Verificação
toggleNivelInterligacao('btnVerificacao', 'nivelVerificacao');

// Inicializa o botão Formulário
toggleNivelInterligacao('btnFormulario', 'nivelFormulario');

// Inicializa o botão Padrão de Fotos
toggleNivelInterligacao('btnPadraoFotos', 'nivelPadraoFotos');

// Inicializa o botão Serviços Posteriores
toggleNivelInterligacao('btnServicosPosteriores', 'nivelServicosPosteriores');

// Controla a exibição da linha dos Serviços Posteriores
const btnServicosPosteriores = document.getElementById('btnServicosPosteriores');
const nivelServicosPosteriores = document.getElementById('nivelServicosPosteriores');
const linhaServicosPosteriores = document.getElementById('linhaServicosPosteriores');

if (btnServicosPosteriores && nivelServicosPosteriores && linhaServicosPosteriores) {
    btnServicosPosteriores.addEventListener('click', () => {
        const textoPerguntaReaterro = document.getElementById('textoPerguntaReaterro');
        const botoesSimNaoReaterro = document.getElementById('botoesSimNaoReaterro');

        setTimeout(() => {
            if (nivelServicosPosteriores.classList.contains('ativo')) {
                linhaServicosPosteriores.style.display = 'block';
                if (textoPerguntaReaterro) textoPerguntaReaterro.style.display = 'block';
                if (botoesSimNaoReaterro) botoesSimNaoReaterro.classList.add('ativo');
            } else {
                linhaServicosPosteriores.style.display = 'none';
                if (textoPerguntaReaterro) textoPerguntaReaterro.style.display = 'none';
                if (botoesSimNaoReaterro) botoesSimNaoReaterro.classList.remove('ativo');
            }
        }, 0);
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
    const btnLocalDemarcado = document.getElementById('btnLocalDemarcado');
    const btnAberturaVala = document.getElementById('btnAberturaVala');
    const btnInterligacaoTubulacao = document.getElementById('btnInterligacaoTubulacao');
    const btnReaterro = document.getElementById('btnReaterro');
    const allPadraoFotosButtons = [btnLocalDemarcado, btnAberturaVala, btnInterligacaoTubulacao, btnReaterro];

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
    const btnLocalDemarcado = document.getElementById('btnLocalDemarcado');
    const btnAberturaVala = document.getElementById('btnAberturaVala');
    const btnInterligacaoTubulacao = document.getElementById('btnInterligacaoTubulacao');
    const btnReaterro = document.getElementById('btnReaterro');
    const allPadraoFotosButtons = [btnLocalDemarcado, btnAberturaVala, btnInterligacaoTubulacao, btnReaterro];

    allPadraoFotosButtons.forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Botão Local Demarcado
const btnLocalDemarcado = document.getElementById('btnLocalDemarcado');
if (btnLocalDemarcado) {
    btnLocalDemarcado.addEventListener('click', () => {
        const texto = document.getElementById('textoLocalDemarcado');
        const img = document.getElementById('imgLocalDemarcado');

        if (selectedPadraoFotosButton === 'btnLocalDemarcado') {
            // Clicou novamente, desativa o estado
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            // Primeira vez clicando
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnLocalDemarcado');
            selectedPadraoFotosButton = 'btnLocalDemarcado';
        }
    });
}

// Botão Abertura da Vala
const btnAberturaVala = document.getElementById('btnAberturaVala');
if (btnAberturaVala) {
    btnAberturaVala.addEventListener('click', () => {
        const texto = document.getElementById('textoAberturaVala');
        const img = document.getElementById('imgAberturaVala');

        if (selectedPadraoFotosButton === 'btnAberturaVala') {
            // Clicou novamente, desativa o estado
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            // Primeira vez clicando
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnAberturaVala');
            selectedPadraoFotosButton = 'btnAberturaVala';
        }
    });
}

// Botão Interligação da Tubulação
const btnInterligacaoTubulacao = document.getElementById('btnInterligacaoTubulacao');
if (btnInterligacaoTubulacao) {
    btnInterligacaoTubulacao.addEventListener('click', () => {
        const texto = document.getElementById('textoInterligacaoTubulacao');
        const img = document.getElementById('imgInterligacaoTubulacao');

        if (selectedPadraoFotosButton === 'btnInterligacaoTubulacao') {
            // Clicou novamente, desativa o estado
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            // Primeira vez clicando
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnInterligacaoTubulacao');
            selectedPadraoFotosButton = 'btnInterligacaoTubulacao';
        }
    });
}

// Botão Reaterro
const btnReaterro = document.getElementById('btnReaterro');
if (btnReaterro) {
    btnReaterro.addEventListener('click', () => {
        const texto = document.getElementById('textoReaterro');
        const img = document.getElementById('imgReaterro');

        if (selectedPadraoFotosButton === 'btnReaterro') {
            // Clicou novamente, desativa o estado
            if (texto) texto.style.display = 'none';
            if (img) img.style.display = 'none';
            enablePadraoFotosButtons();
            selectedPadraoFotosButton = null;
        } else {
            // Primeira vez clicando
            if (texto) texto.style.display = 'block';
            if (img) img.style.display = 'block';
            disablePadraoFotosButtons('btnReaterro');
            selectedPadraoFotosButton = 'btnReaterro';
        }
    });
}

// Controla a exibição da linha do Formulário
const btnFormulario = document.getElementById('btnFormulario');
const nivelFormulario = document.getElementById('nivelFormulario');
const linhaFormulario = document.getElementById('linhaFormulario');
const linhaAposInfoRede = document.getElementById('linhaAposInfoRede');

if (btnFormulario && nivelFormulario && linhaFormulario) {
    btnFormulario.addEventListener('click', () => {
        setTimeout(() => {
            if (nivelFormulario.classList.contains('ativo')) {
                linhaFormulario.style.display = 'block';
                if (linhaAposInfoRede) linhaAposInfoRede.style.display = 'block';
            } else {
                linhaFormulario.style.display = 'none';
                if (linhaAposInfoRede) linhaAposInfoRede.style.display = 'none';
            }
        }, 0);
    });
}

// Estado para saber qual botão de informação está selecionado
let selectedInfoButton = null;

function disableInfoButtons(buttonId) {
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

function enableInfoButtons() {
    const btnInfoRede = document.getElementById('btnInfoRede');
    const btnInfoRepavimentacao = document.getElementById('btnInfoRepavimentacao');
    [btnInfoRede, btnInfoRepavimentacao].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Ações para os botões de informação
const btnInfoRede = document.getElementById('btnInfoRede');
if (btnInfoRede) {
    btnInfoRede.addEventListener('click', () => {
        const textoInfoRede = document.getElementById('textoInfoRede');

        if (selectedInfoButton === 'btnInfoRede') {
            // Clicou novamente em InfoRede, desativa o estado
            if (textoInfoRede) textoInfoRede.style.display = 'none';
            enableInfoButtons();
            selectedInfoButton = null;
        } else {
            // Primeira vez clicando em InfoRede
            if (textoInfoRede) textoInfoRede.style.display = 'block';
            disableInfoButtons('btnInfoRede');
            selectedInfoButton = 'btnInfoRede';
        }
    });
}

const btnInfoRepavimentacao = document.getElementById('btnInfoRepavimentacao');
if (btnInfoRepavimentacao) {
    btnInfoRepavimentacao.addEventListener('click', () => {
        const textoInfoRepavimentacao = document.getElementById('textoInfoRepavimentacao');
        const linhaAntesSimNaoRepav = document.getElementById('linhaAntesSimNaoRepav');
        const botoesSimNaoRepav = document.getElementById('botoesSimNaoRepav');

        if (selectedInfoButton === 'btnInfoRepavimentacao') {
            // Clicou novamente, desativa o estado
            if (textoInfoRepavimentacao) textoInfoRepavimentacao.style.display = 'none';
            if (linhaAntesSimNaoRepav) linhaAntesSimNaoRepav.style.display = 'none';
            if (botoesSimNaoRepav) botoesSimNaoRepav.classList.remove('ativo');

            // Oculta os textos de resposta
            const textoNaoRepav = document.getElementById('textoNaoRepav');
            const textoSimRepav = document.getElementById('textoSimRepav');
            if (textoNaoRepav) textoNaoRepav.style.display = 'none';
            if (textoSimRepav) textoSimRepav.style.display = 'none';

            // Reabilita os botões Sim/Não
            enableSimNaoRepav();
            selectedSimNaoRepav = null;

            enableInfoButtons();
            selectedInfoButton = null;
        } else {
            // Primeira vez clicando
            if (textoInfoRepavimentacao) textoInfoRepavimentacao.style.display = 'block';
            if (linhaAntesSimNaoRepav) linhaAntesSimNaoRepav.style.display = 'block';
            if (botoesSimNaoRepav) botoesSimNaoRepav.classList.add('ativo');
            disableInfoButtons('btnInfoRepavimentacao');
            selectedInfoButton = 'btnInfoRepavimentacao';
        }
    });
}

// Estado e funções para Sim/Não da Repavimentação
let selectedSimNaoRepav = null;

function disableSimNaoRepav(buttonId) {
    const btnSimRepav = document.getElementById('btnSimRepav');
    const btnNaoRepav = document.getElementById('btnNaoRepav');

    if (buttonId === 'btnSimRepav' && btnNaoRepav) {
        btnNaoRepav.classList.add('desabilitado');
        btnNaoRepav.setAttribute('disabled', 'true');
        btnNaoRepav.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoRepav' && btnSimRepav) {
        btnSimRepav.classList.add('desabilitado');
        btnSimRepav.setAttribute('disabled', 'true');
        btnSimRepav.setAttribute('aria-disabled', 'true');
    }
}

function enableSimNaoRepav() {
    const btnSimRepav = document.getElementById('btnSimRepav');
    const btnNaoRepav = document.getElementById('btnNaoRepav');
    [btnSimRepav, btnNaoRepav].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Botão Sim da Repavimentação
const btnSimRepav = document.getElementById('btnSimRepav');
if (btnSimRepav) {
    btnSimRepav.addEventListener('click', () => {
        const textoSimRepav = document.getElementById('textoSimRepav');
        const textoNaoRepav = document.getElementById('textoNaoRepav');

        if (selectedSimNaoRepav === 'btnSimRepav') {
            // Clicou novamente em Sim, desativa o estado
            if (textoSimRepav) textoSimRepav.style.display = 'none';
            enableSimNaoRepav();
            selectedSimNaoRepav = null;
        } else {
            // Primeira vez clicando em Sim
            if (textoSimRepav) textoSimRepav.style.display = 'block';
            if (textoNaoRepav) textoNaoRepav.style.display = 'none';
            disableSimNaoRepav('btnSimRepav');
            selectedSimNaoRepav = 'btnSimRepav';
        }
    });
}

// Botão Não da Repavimentação
const btnNaoRepav = document.getElementById('btnNaoRepav');
if (btnNaoRepav) {
    btnNaoRepav.addEventListener('click', () => {
        const textoNaoRepav = document.getElementById('textoNaoRepav');
        const textoSimRepav = document.getElementById('textoSimRepav');

        if (selectedSimNaoRepav === 'btnNaoRepav') {
            // Clicou novamente em Não, desativa o estado
            if (textoNaoRepav) textoNaoRepav.style.display = 'none';
            enableSimNaoRepav();
            selectedSimNaoRepav = null;
        } else {
            // Primeira vez clicando em Não
            if (textoNaoRepav) textoNaoRepav.style.display = 'block';
            if (textoSimRepav) textoSimRepav.style.display = 'none';
            disableSimNaoRepav('btnNaoRepav');
            selectedSimNaoRepav = 'btnNaoRepav';
        }
    });
}

// Removido - btnReaterroCompactacao agora é texto que aparece automaticamente

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

// Botão Sim do Reaterro
const btnSimReaterro = document.getElementById('btnSimReaterro');
if (btnSimReaterro) {
    btnSimReaterro.addEventListener('click', () => {
        const textoNaoReaterro = document.getElementById('textoNaoReaterro');
        const linhaAntesTipoReaterro = document.getElementById('linhaAntesTipoReaterro');
        const opcoesTipoReaterro = document.getElementById('opcoesTipoReaterro');

        if (selectedSimNaoReaterro === 'btnSimReaterro') {
            // Clicou novamente em Sim, desativa o estado
            if (linhaAntesTipoReaterro) linhaAntesTipoReaterro.style.display = 'none';
            if (opcoesTipoReaterro) opcoesTipoReaterro.classList.remove('ativo');
            enableSimNaoReaterro();
            selectedSimNaoReaterro = null;
            enableAllTipoReaterroButtons();
            selectedTipoReaterroButton = null;
        } else {
            // Primeira vez clicando em Sim
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'none';
            if (linhaAntesTipoReaterro) linhaAntesTipoReaterro.style.display = 'block';
            if (opcoesTipoReaterro) opcoesTipoReaterro.classList.add('ativo');
            disableSimNaoReaterro('btnSimReaterro');
            selectedSimNaoReaterro = 'btnSimReaterro';
        }
    });
}

// Botão Não do Reaterro
const btnNaoReaterro = document.getElementById('btnNaoReaterro');
if (btnNaoReaterro) {
    btnNaoReaterro.addEventListener('click', () => {
        const textoNaoReaterro = document.getElementById('textoNaoReaterro');
        const linhaAntesTipoReaterro = document.getElementById('linhaAntesTipoReaterro');
        const opcoesTipoReaterro = document.getElementById('opcoesTipoReaterro');

        if (selectedSimNaoReaterro === 'btnNaoReaterro') {
            // Clicou novamente em Não, desativa o estado
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'none';
            enableSimNaoReaterro();
            selectedSimNaoReaterro = null;
        } else {
            // Primeira vez clicando em Não
            if (textoNaoReaterro) textoNaoReaterro.style.display = 'block';
            if (linhaAntesTipoReaterro) linhaAntesTipoReaterro.style.display = 'none';
            if (opcoesTipoReaterro) opcoesTipoReaterro.classList.remove('ativo');
            disableSimNaoReaterro('btnNaoReaterro');
            selectedSimNaoReaterro = 'btnNaoReaterro';
        }
    });
}

// Estado para saber qual botão de tipo de reaterro está selecionado
let selectedTipoReaterroButton = null;

function disableOtherTipoReaterroButtons(buttonId) {
    const btnTerra = document.getElementById('btnTerra');
    const btnConcreto = document.getElementById('btnConcreto');
    const btnAsfalto = document.getElementById('btnAsfalto');
    const allTipoReaterroButtons = [btnTerra, btnConcreto, btnAsfalto];

    allTipoReaterroButtons.forEach(el => {
        if (!el) return;
        if (el.id !== buttonId) {
            el.classList.add('desabilitado');
            el.setAttribute('disabled', 'true');
            el.setAttribute('aria-disabled', 'true');
        } else {
            el.classList.remove('desabilitado');
            el.removeAttribute('disabled');
            el.removeAttribute('aria-disabled');
        }
    });
}

function enableAllTipoReaterroButtons() {
    const btnTerra = document.getElementById('btnTerra');
    const btnConcreto = document.getElementById('btnConcreto');
    const btnAsfalto = document.getElementById('btnAsfalto');
    const allTipoReaterroButtons = [btnTerra, btnConcreto, btnAsfalto];

    allTipoReaterroButtons.forEach(el => {
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
        const textoConcreto = document.getElementById('textoConcreto');
        const btnValaRecortada = document.getElementById('btnValaRecortada');

        if (selectedTipoReaterroButton === 'btnTerra') {
            enableAllTipoReaterroButtons();
            selectedTipoReaterroButton = null;
            btnTerra.classList.remove('ativo');
            // Ocultar texto verde
            if (textoTerra) textoTerra.style.display = 'none';
        } else {
            disableOtherTipoReaterroButtons('btnTerra');
            selectedTipoReaterroButton = 'btnTerra';
            btnTerra.classList.add('ativo');
            // Mostrar texto verde para Terra
            if (textoTerra) textoTerra.style.display = 'block';
            // Ocultar outros elementos
            if (textoConcreto) textoConcreto.style.display = 'none';
            if (btnValaRecortada) btnValaRecortada.style.display = 'none';
        }
    });
}

// Botão Concreto
const btnConcreto = document.getElementById('btnConcreto');
if (btnConcreto) {
    btnConcreto.addEventListener('click', () => {
        const textoTerra = document.getElementById('textoTerra');
        const textoConcreto = document.getElementById('textoConcreto');
        const btnValaRecortada = document.getElementById('btnValaRecortada');

        if (selectedTipoReaterroButton === 'btnConcreto') {
            enableAllTipoReaterroButtons();
            selectedTipoReaterroButton = null;
            btnConcreto.classList.remove('ativo');
            // Ocultar texto vermelho
            if (textoConcreto) textoConcreto.style.display = 'none';
        } else {
            disableOtherTipoReaterroButtons('btnConcreto');
            selectedTipoReaterroButton = 'btnConcreto';
            btnConcreto.classList.add('ativo');
            // Mostrar texto vermelho para Concreto
            if (textoConcreto) textoConcreto.style.display = 'block';
            // Ocultar outros elementos
            if (textoTerra) textoTerra.style.display = 'none';
            if (btnValaRecortada) btnValaRecortada.style.display = 'none';
        }
    });
}

// Botão Asfalto
const btnAsfalto = document.getElementById('btnAsfalto');
if (btnAsfalto) {
    btnAsfalto.addEventListener('click', () => {
        const textoTerra = document.getElementById('textoTerra');
        const textoConcreto = document.getElementById('textoConcreto');
        const textoPerguntaVala = document.getElementById('textoPerguntaVala');
        const botoesSimNaoVala = document.getElementById('botoesSimNaoVala');

        if (selectedTipoReaterroButton === 'btnAsfalto') {
            enableAllTipoReaterroButtons();
            selectedTipoReaterroButton = null;
            btnAsfalto.classList.remove('ativo');
            // Ocultar texto e botões
            if (textoPerguntaVala) textoPerguntaVala.style.display = 'none';
            if (botoesSimNaoVala) botoesSimNaoVala.classList.remove('ativo');
        } else {
            disableOtherTipoReaterroButtons('btnAsfalto');
            selectedTipoReaterroButton = 'btnAsfalto';
            btnAsfalto.classList.add('ativo');
            // Mostrar texto e botões para Asfalto
            if (textoPerguntaVala) textoPerguntaVala.style.display = 'block';
            if (botoesSimNaoVala) botoesSimNaoVala.classList.add('ativo');
            // Ocultar outros elementos
            if (textoTerra) textoTerra.style.display = 'none';
            if (textoConcreto) textoConcreto.style.display = 'none';
        }
    });
}

// Estado e funções para Sim/Não da Vala Recortada
let selectedSimNaoVala = null;

function disableSimNaoVala(buttonId) {
    const btnSimVala = document.getElementById('btnSimVala');
    const btnNaoVala = document.getElementById('btnNaoVala');

    if (buttonId === 'btnSimVala' && btnNaoVala) {
        btnNaoVala.classList.add('desabilitado');
        btnNaoVala.setAttribute('disabled', 'true');
        btnNaoVala.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNaoVala' && btnSimVala) {
        btnSimVala.classList.add('desabilitado');
        btnSimVala.setAttribute('disabled', 'true');
        btnSimVala.setAttribute('aria-disabled', 'true');
    }
}

function enableSimNaoVala() {
    const btnSimVala = document.getElementById('btnSimVala');
    const btnNaoVala = document.getElementById('btnNaoVala');
    [btnSimVala, btnNaoVala].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Removido - btnValaRecortada agora é texto que aparece automaticamente

// Botão Sim da Vala Recortada
const btnSimVala = document.getElementById('btnSimVala');
if (btnSimVala) {
    btnSimVala.addEventListener('click', () => {
        const textoNaoVala = document.getElementById('textoNaoVala');
        const textoSimVala = document.getElementById('textoSimVala');

        if (selectedSimNaoVala === 'btnSimVala') {
            // Clicou novamente em Sim, desativa o estado
            if (textoSimVala) textoSimVala.style.display = 'none';
            enableSimNaoVala();
            selectedSimNaoVala = null;
        } else {
            // Primeira vez clicando em Sim
            if (textoSimVala) textoSimVala.style.display = 'block';
            if (textoNaoVala) textoNaoVala.style.display = 'none';
            disableSimNaoVala('btnSimVala');
            selectedSimNaoVala = 'btnSimVala';
        }
    });
}

// Botão Não da Vala Recortada
const btnNaoVala = document.getElementById('btnNaoVala');
if (btnNaoVala) {
    btnNaoVala.addEventListener('click', () => {
        const textoNaoVala = document.getElementById('textoNaoVala');
        const textoSimVala = document.getElementById('textoSimVala');

        if (selectedSimNaoVala === 'btnNaoVala') {
            // Clicou novamente em Não, desativa o estado
            if (textoNaoVala) textoNaoVala.style.display = 'none';
            enableSimNaoVala();
            selectedSimNaoVala = null;
        } else {
            // Primeira vez clicando em Não
            if (textoNaoVala) textoNaoVala.style.display = 'block';
            if (textoSimVala) textoSimVala.style.display = 'none';
            disableSimNaoVala('btnNaoVala');
            selectedSimNaoVala = 'btnNaoVala';
        }
    });
}

// Toggle para os botões Sim/Não
// Remover event listener do btnInterligou (elemento não existe mais)
// const btnInterligou = document.getElementById('btnInterligou');
// if (btnInterligou) {
//     btnInterligou.addEventListener('click', () => {
//         const container = document.getElementById('botoesSimNao');
//         const linha = document.getElementById('linhaAntesSimNao');
//         const isOpening = !container.classList.contains('ativo');

//         container.classList.toggle('ativo');
//         if (linha) linha.style.display = container.classList.contains('ativo') ? 'block' : 'none';

//         // Se está fechando, limpa todos os elementos abertos internamente
//         if (!isOpening) {
//             enableSimNao();
//             selectedSimNao = null;

//             const textoSucesso = document.getElementById('textoSucesso');
//             if (textoSucesso) textoSucesso.style.display = 'none';

//             const btnServicoExecutado = document.getElementById('btnServicoExecutado');
//             if (btnServicoExecutado) btnServicoExecutado.style.display = 'none';

//             const linhaAntesServico = document.getElementById('linhaAntesServico');
//             if (linhaAntesServico) linhaAntesServico.style.display = 'none';

//             const opcoes = document.getElementById('opcoesServico');
//             if (opcoes) opcoes.classList.remove('ativo');

//             const textoSondagem = document.getElementById('textoSondagem');
//             if (textoSondagem) textoSondagem.style.display = 'none';

//             const textoOutros = document.getElementById('textoOutros');
//             if (textoOutros) textoOutros.style.display = 'none';
//         }

//         // Força o scroll suave para os botões aparecerem centralizados
//         if (container.classList.contains('ativo')) {
//             container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//         }
//     });
// }

// Estado para saber qual botão Sim/Não está selecionado
let selectedSimNao = null;

function disableSimNao(buttonId) {
    const btnSim = document.getElementById('btnSim');
    const btnNao = document.getElementById('btnNao');

    if (buttonId === 'btnSim' && btnNao) {
        btnNao.classList.add('desabilitado');
        btnNao.setAttribute('disabled', 'true');
        btnNao.setAttribute('aria-disabled', 'true');
    } else if (buttonId === 'btnNao' && btnSim) {
        btnSim.classList.add('desabilitado');
        btnSim.setAttribute('disabled', 'true');
        btnSim.setAttribute('aria-disabled', 'true');
    }
}

function enableSimNao() {
    const btnSim = document.getElementById('btnSim');
    const btnNao = document.getElementById('btnNao');
    [btnSim, btnNao].forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

const btnSim = document.getElementById('btnSim');
if (btnSim) {
    btnSim.addEventListener('click', () => {
        const textoSucesso = document.getElementById('textoSucesso');
        const btnFormulario = document.getElementById('btnFormulario');

        if (selectedSimNao === 'btnSim') {
            // Clicou novamente em Sim, desativa o estado
            textoSucesso.style.display = 'none';
            enableSimNao();
            selectedSimNao = null;

            // Desabilita o botão Formulário
            if (btnFormulario) {
                btnFormulario.classList.add('desabilitado');
                btnFormulario.setAttribute('disabled', 'true');
                btnFormulario.setAttribute('aria-disabled', 'true');
            }
        } else {
            // Primeira vez clicando em Sim
            textoSucesso.style.display = 'block';
            disableSimNao('btnSim');
            selectedSimNao = 'btnSim';

            // Habilita o botão Formulário
            if (btnFormulario) {
                btnFormulario.classList.remove('desabilitado');
                btnFormulario.removeAttribute('disabled');
                btnFormulario.removeAttribute('aria-disabled');
            }
        }
    });
}

const btnNao = document.getElementById('btnNao');
if (btnNao) {
    btnNao.addEventListener('click', () => {
        const textoServico = document.getElementById('textoServicoExecutado');
        const linha = document.getElementById('linhaAntesServico');
        const opcoes = document.getElementById('opcoesServico');

        if (selectedSimNao === 'btnNao') {
            // Clicou novamente em Não, desativa o estado e recolhe tudo
            if (textoServico) textoServico.style.display = 'none';
            if (linha) linha.style.display = 'none';

            // Recolhe todos os serviços abertos
            if (opcoes) opcoes.classList.remove('ativo');

            const textoSondagem = document.getElementById('textoSondagem');
            if (textoSondagem) textoSondagem.style.display = 'none';

            const textoOutros = document.getElementById('textoOutros');
            if (textoOutros) textoOutros.style.display = 'none';

            enableSimNao();
            selectedSimNao = null;
        } else {
            // Primeira vez clicando em Não
            if (textoServico) textoServico.style.display = 'block';
            if (linha) linha.style.display = 'block';
            if (opcoes) opcoes.classList.add('ativo');
            disableSimNao('btnNao');
            selectedSimNao = 'btnNao';
        }
    });
}

// As opções de serviço agora são abertas diretamente ao clicar em "Não".

// Estado para saber qual botão de serviço está selecionado
let selectedServiceButton = null;

function disableOtherServiceButtons(buttonId) {
    const btnSondagem = document.getElementById('btnSondagem');
    const btnFuracao = document.getElementById('btnFuracao');
    const btnBomba = document.getElementById('btnBomba');
    const allServiceButtons = [btnSondagem, btnFuracao, btnBomba];

    allServiceButtons.forEach(el => {
        if (!el) return;
        if (el.id !== buttonId) {
            el.classList.add('desabilitado');
            el.setAttribute('disabled', 'true');
            el.setAttribute('aria-disabled', 'true');
        } else {
            el.classList.remove('desabilitado');
            el.removeAttribute('disabled');
            el.removeAttribute('aria-disabled');
        }
    });
}

function enableAllServiceButtons() {
    const btnSondagem = document.getElementById('btnSondagem');
    const btnFuracao = document.getElementById('btnFuracao');
    const btnBomba = document.getElementById('btnBomba');
    const allServiceButtons = [btnSondagem, btnFuracao, btnBomba];

    allServiceButtons.forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Ações para os botões de serviço
const btnSondagem = document.getElementById('btnSondagem');
if (btnSondagem) {
    btnSondagem.addEventListener('click', () => {
        const texto = document.getElementById('textoSondagem');

        if (selectedServiceButton === 'btnSondagem') {
            // Clicou novamente em Sondagem, desativa o estado
            texto.style.display = 'none';
            enableAllServiceButtons();
            selectedServiceButton = null;
        } else {
            // Primeira vez clicando em Sondagem
            texto.style.display = 'block';
            document.getElementById('textoOutros').style.display = 'none';
            disableOtherServiceButtons('btnSondagem');
            selectedServiceButton = 'btnSondagem';
        }
    });
}

const btnFuracao = document.getElementById('btnFuracao');
if (btnFuracao) {
    btnFuracao.addEventListener('click', () => {
        const texto = document.getElementById('textoOutros');

        if (selectedServiceButton === 'btnFuracao') {
            // Clicou novamente em Furação, desativa o estado
            texto.style.display = 'none';
            enableAllServiceButtons();
            selectedServiceButton = null;
        } else {
            // Primeira vez clicando em Furação
            texto.style.display = 'block';
            document.getElementById('textoSondagem').style.display = 'none';
            disableOtherServiceButtons('btnFuracao');
            selectedServiceButton = 'btnFuracao';
        }
    });
}

const btnBomba = document.getElementById('btnBomba');
if (btnBomba) {
    btnBomba.addEventListener('click', () => {
        const texto = document.getElementById('textoOutros');

        if (selectedServiceButton === 'btnBomba') {
            // Clicou novamente em Bomba, desativa o estado
            texto.style.display = 'none';
            enableAllServiceButtons();
            selectedServiceButton = null;
        } else {
            // Primeira vez clicando em Bomba
            texto.style.display = 'block';
            document.getElementById('textoSondagem').style.display = 'none';
            disableOtherServiceButtons('btnBomba');
            selectedServiceButton = 'btnBomba';
        }
    });
}

// Caso queira adicionar funcionalidades aos botões internos futuramente:
// Exemplo: toggleTexto('btnProcedimento', 'textoProcedimentoInterligacao');

// --- LÓGICA: desabilitar / habilitar botões de etapa ---
function disableOtherButtons(activeButtonId) {
    const btnProc = document.getElementById('btnProcedimento');
    const btnVer = document.getElementById('btnVerificacao');
    const btnForm = document.getElementById('btnFormulario');
    const btnFotos = document.getElementById('btnPadraoFotos');
    const allButtons = [btnProc, btnVer, btnForm, btnFotos];

    allButtons.forEach(el => {
        if (!el) return;
        if (el.id !== activeButtonId) {
            el.classList.add('desabilitado');
            el.setAttribute('disabled', 'true');
            el.setAttribute('aria-disabled', 'true');
        } else {
            el.classList.remove('desabilitado');
            el.removeAttribute('disabled');
            el.removeAttribute('aria-disabled');
        }
    });
}

function enableAllButtons() {
    const btnProc = document.getElementById('btnProcedimento');
    const btnVer = document.getElementById('btnVerificacao');
    const btnForm = document.getElementById('btnFormulario');
    const btnFotos = document.getElementById('btnPadraoFotos');
    const allButtons = [btnProc, btnVer, btnForm, btnFotos];

    allButtons.forEach(el => {
        if (!el) return;
        el.classList.remove('desabilitado');
        el.removeAttribute('disabled');
        el.removeAttribute('aria-disabled');
    });
}

// Ao clicar em Procedimento: desabilita os demais botões de etapa
const btnProcedimento = document.getElementById('btnProcedimento');
if (btnProcedimento) {
    btnProcedimento.addEventListener('click', () => {
        const nivel = document.getElementById('nivelProcedimento');
        setTimeout(() => {
            const isActive = nivel && nivel.classList.contains('ativo');
            if (isActive) {
                disableOtherButtons('btnProcedimento');
            } else {
                enableAllButtons();
            }
        }, 0);
    });
}

// Ao clicar em Verificação: desabilita os demais botões de etapa
const btnVerificacao = document.getElementById('btnVerificacao');
if (btnVerificacao) {
    btnVerificacao.addEventListener('click', () => {
        const nivel = document.getElementById('nivelVerificacao');
        const textoPerguntaInterligacao = document.getElementById('textoPerguntaInterligacao');
        const botoesSimNao = document.getElementById('botoesSimNao');

        setTimeout(() => {
            const isActive = nivel && nivel.classList.contains('ativo');
            if (isActive) {
                disableOtherButtons('btnVerificacao');
                if (textoPerguntaInterligacao) textoPerguntaInterligacao.style.display = 'block';
                if (botoesSimNao) botoesSimNao.classList.add('ativo');
            } else {
                enableAllButtons();
                if (textoPerguntaInterligacao) textoPerguntaInterligacao.style.display = 'none';
                if (botoesSimNao) botoesSimNao.classList.remove('ativo');
            }
        }, 0);
    });
}

// Ao clicar em Formulário: desabilita os demais botões de etapa
if (btnFormulario) {
    btnFormulario.addEventListener('click', () => {
        const nivel = document.getElementById('nivelFormulario');
        setTimeout(() => {
            const isActive = nivel && nivel.classList.contains('ativo');
            if (isActive) {
                disableOtherButtons('btnFormulario');
            } else {
                enableAllButtons();
            }
        }, 0);
    });
}

// Ao reabrir o fluxo principal (btnInterligacao) resetar todos os botões
const btnInterligacao = document.getElementById('btnInterligacao');
if (btnInterligacao) {
    btnInterligacao.addEventListener('click', () => {
        const nivel = document.getElementById('nivelInterligacao');
        setTimeout(() => {
            const isActive = nivel && nivel.classList.contains('ativo');
            if (isActive) {
                enableAllButtons();
                enableSimNao();
                selectedSimNao = null;
                // Reset visual e estados de subníveis relacionados
                const opcoes = document.getElementById('opcoesServico');
                if (opcoes) opcoes.classList.remove('ativo');
                const textoSucesso = document.getElementById('textoSucesso');
                if (textoSucesso) textoSucesso.style.display = 'none';
                const btnServico = document.getElementById('btnServicoExecutado');
                if (btnServico) btnServico.style.display = 'none';
                const linha = document.getElementById('linhaAntesServico');
                if (linha) linha.style.display = 'none';
            }
        }, 0);
    });
}