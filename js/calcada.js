// ======================================
// ELEMENTOS DO DOM
// ======================================

const btnCalcada = document.getElementById('btnCalcada');
const instrucaoInicial = document.getElementById('instrucaoInicial');
const textoPerguntaPavimento = document.getElementById('textoPerguntaPavimento');
const containerOpcoesPavimento = document.getElementById('containerOpcoesPavimento');
const btnConcretoSimples = document.getElementById('btnConcretoSimples');
const btnCeramicaRevestimentos = document.getElementById('btnCeramicaRevestimentos');
const btnPedrasPortuguesas = document.getElementById('btnPedrasPortuguesas');
const btnProcedimentoConcreto = document.getElementById('btnProcedimentoConcreto');
const btnProcedimentoCeramica = document.getElementById('btnProcedimentoCeramica');
const btnProcedimentoPedras = document.getElementById('btnProcedimentoPedras');

// Conteúdo Concreto
const textoConcreto = document.getElementById('textoConcreto');
const textoPerguntaLocalizacaoConcreto = document.getElementById('textoPerguntaLocalizacaoConcreto');
const containerLocalizacaoConcreto = document.getElementById('containerLocalizacaoConcreto');
const btnCavalete = document.getElementById('btnCavalete');
const btnCaixaPiso = document.getElementById('btnCaixaPiso');
const btnValaComum = document.getElementById('btnValaComum');
const textoCavalete = document.getElementById('textoCavalete');
const textoCaixaPiso = document.getElementById('textoCaixaPiso');
const textoValaComum = document.getElementById('textoValaComum');

// Conteúdo Cerâmica
const textoCeramica = document.getElementById('textoCeramica');
const textoPerguntaPisoCeramica = document.getElementById('textoPerguntaPisoCeramica');
const botoesSimNaoCeramica = document.getElementById('botoesSimNaoCeramica');
const btnSimCeramica = document.getElementById('btnSimCeramica');
const btnNaoCeramica = document.getElementById('btnNaoCeramica');
const textoSimCeramica = document.getElementById('textoSimCeramica');
const textoPerguntaSimilarCeramica = document.getElementById('textoPerguntaSimilarCeramica');
const botoesSimNaoCeramicaSimilar = document.getElementById('botoesSimNaoCeramicaSimilar');
const btnSimCeramicaSimilar = document.getElementById('btnSimCeramicaSimilar');
const btnNaoCeramicaSimilar = document.getElementById('btnNaoCeramicaSimilar');
const textoSimCeramicaSimilar = document.getElementById('textoSimCeramicaSimilar');
const textoPerguntaSimilarCeramicaVisita = document.getElementById('textoPerguntaSimilarCeramicaVisita');
const botoesSimNaoCeramicaSimilarVisita = document.getElementById('botoesSimNaoCeramicaSimilarVisita');
const btnSimCeramicaSimilarVisita = document.getElementById('btnSimCeramicaSimilarVisita');
const btnNaoCeramicaSimilarVisita = document.getElementById('btnNaoCeramicaSimilarVisita');
const textoSimCeramicaSimilarVisita = document.getElementById('textoSimCeramicaSimilarVisita');
const textoPerguntaRepavimentacaoSimplesVisita = document.getElementById('textoPerguntaRepavimentacaoSimplesVisita');
const botoesSimNaoRepavimentacaoSimplesVisita = document.getElementById('botoesSimNaoRepavimentacaoSimplesVisita');
const btnSimRepavimentacaoSimplesVisita = document.getElementById('btnSimRepavimentacaoSimplesVisita');
const btnNaoRepavimentacaoSimplesVisita = document.getElementById('btnNaoRepavimentacaoSimplesVisita');
const textoSimRepavimentacaoSimplesVisita = document.getElementById('textoSimRepavimentacaoSimplesVisita');
const textoNaoRepavimentacaoSimplesVisita = document.getElementById('textoNaoRepavimentacaoSimplesVisita');
const opcoesVisitaCeramicaSimilar = document.getElementById('opcoesVisitaCeramicaSimilar');
const btnPrimeiraVisitaSimilar = document.getElementById('btnPrimeiraVisitaSimilar');
const btnSegundaVisitaSimilar = document.getElementById('btnSegundaVisitaSimilar');
const textoPrimeiraVisitaSimilar = document.getElementById('textoPrimeiraVisitaSimilar');

// Conteúdo Pedras
const textoPedras = document.getElementById('textoPedras');

// Botões comuns para todas as opções
const botoesComuns = document.getElementById('botoesComuns');
const btnConferenciaViabilidade = document.getElementById('btnConferenciaViabilidade');
const btnAfericaoRepavimentacao = document.getElementById('btnAfericaoRepavimentacao');
const btnPreenchimentoFormulario = document.getElementById('btnPreenchimentoFormulario');
const btnPadraoFotos = document.getElementById('btnPadraoFotos');

// Padrão de Fotos
const textoPadraoFotos = document.getElementById('textoPadraoFotos');
const containerFotos = document.getElementById('containerFotos');
const btnFachadaLocal = document.getElementById('btnFachadaLocal');
const btnFotoAntes = document.getElementById('btnFotoAntes');
const btnFotoAfericao = document.getElementById('btnFotoAfericao');
const btnConclusaoServico = document.getElementById('btnConclusaoServico');
const textoFachadaLocal = document.getElementById('textoFachadaLocal');
const imagensFachadaLocal = document.getElementById('imagensFachadaLocal');
const textoFotoAntes = document.getElementById('textoFotoAntes');
const imagensFotoAntes = document.getElementById('imagensFotoAntes');
const textoFotoAfericao = document.getElementById('textoFotoAfericao');
const imagensFotoAfericao = document.getElementById('imagensFotoAfericao');
const textoConclusaoServico = document.getElementById('textoConclusaoServico');
const imagensConclusaoServico = document.getElementById('imagensConclusaoServico');

function esconderPadraoFotos() {
    if (textoPadraoFotos) textoPadraoFotos.style.display = 'none';
    if (containerFotos) containerFotos.style.display = 'none';
}

// Conferência de Viabilidade
const textoPerguntaViabilidade = document.getElementById('textoPerguntaViabilidade');
const botoesSimNaoViabilidade = document.getElementById('botoesSimNaoViabilidade');
const btnSimViabilidade = document.getElementById('btnSimViabilidade');
const btnNaoViabilidade = document.getElementById('btnNaoViabilidade');
const textoNaoViabilidade = document.getElementById('textoNaoViabilidade');
const textoSimViabilidade = document.getElementById('textoSimViabilidade');

// Aferição da Repavimentação
const textoObservacoesAfericao = document.getElementById('textoObservacoesAfericao');
const textoPerguntaFormatoVala = document.getElementById('textoPerguntaFormatoVala');
const containerFormatoVala = document.getElementById('containerFormatoVala');
const btnQuadrado = document.getElementById('btnQuadrado');
const btnSemFormato = document.getElementById('btnSemFormato');
const textoQuadrado = document.getElementById('textoQuadrado');
const textoSemFormato = document.getElementById('textoSemFormato');

// Preenchimento do Formulário
const textoAvisoFormulario = document.getElementById('textoAvisoFormulario');
const textoInfoFormulario = document.getElementById('textoInfoFormulario');

// ======================================
// FUNÇÃO AUXILIAR: MOSTRAR LINHA
// ======================================

function mostrarLinha(linha) {
    if (linha) {
        linha.classList.remove('oculta');
    }
}

// ======================================
// VARIÁVEIS DE ESTADO
// ======================================

let calcadaAberto = false;

// Estado para rastrear Conferência de Viabilidade
let conferenciaViabilidade = {
    aberto: false,
    selecionado: null // 'sim', 'nao', ou null
};

// Estado para rastrear Aferição da Repavimentação
let afericaoRepavimentacao = {
    aberto: false,
    formatoSelecionado: null // 'quadrado', 'semFormato', ou null
};

// Estado para rastrear Preenchimento do Formulário
let preenchimentoFormulario = {
    aberto: false
};

// Estado para rastrear procedimentos de pavimento
let procedimentoConcreto = {
    aberto: false,
    selecionado: null
};

let procedimentoCeramica = {
    aberto: false,
    selecionado: null
};

let ceramicaSimilar = {
    selecionado: null,
    visita: null
};

let ceramicaSimilarVisita = {
    selecionado: null
};

let repavimentacaoSimplesVisita = {
    selecionado: null
};

let procedimentoPedras = {
    aberto: false,
    selecionado: null
};

// ======================================
// EVENT LISTENER: btnCalcada
// ======================================

btnCalcada.addEventListener('click', () => {
    if (!calcadaAberto) {
        // Abrir: Esconde instrução inicial permanentemente
        if (instrucaoInicial) {
            instrucaoInicial.style.display = 'none';
        }

        // Garantir que todas as opções reapareçam ao abrir novamente
        resetOpcoesPavimento();

        // Mostra a pergunta e as opções de pavimento
        if (textoPerguntaPavimento) {
            textoPerguntaPavimento.style.display = 'block';
        }
        if (containerOpcoesPavimento) {
            containerOpcoesPavimento.style.display = 'flex';
        }

        calcadaAberto = true;
    } else {
        // Fechar: Esconde a pergunta e as opções
        if (textoPerguntaPavimento) {
            textoPerguntaPavimento.style.display = 'none';
        }
        if (containerOpcoesPavimento) {
            containerOpcoesPavimento.style.display = 'none';
        }
        // Resetar opções e esconder botões de procedimento ao fechar
        resetOpcoesPavimento();

        // Esconder todo o conteúdo dos procedimentos
        ocultarConteudoConcreto();
        ocultarConteudoCeramica();
        ocultarConteudoPedras();

        calcadaAberto = false;
    }
});

// ======================================
// MANIPULAÇÃO DAS OPÇÕES DE PAVIMENTO (HTML fixo)
// ======================================

function esconderProcedimentos() {
    if (btnProcedimentoConcreto) btnProcedimentoConcreto.style.display = 'none';
    if (btnProcedimentoCeramica) btnProcedimentoCeramica.style.display = 'none';
    if (btnProcedimentoPedras) btnProcedimentoPedras.style.display = 'none';
    if (botoesComuns) botoesComuns.style.display = 'none';
}

function resetOpcoesPavimento() {
    // Esconde todos os procedimentos, botões comuns e mostra as 3 opções
    esconderProcedimentos();

    // Esconder todo o conteúdo dos procedimentos
    ocultarConteudoConcreto();
    ocultarConteudoCeramica();
    ocultarConteudoPedras();

    if (btnConcretoSimples) btnConcretoSimples.style.display = '';
    if (btnCeramicaRevestimentos) btnCeramicaRevestimentos.style.display = '';
    if (btnPedrasPortuguesas) btnPedrasPortuguesas.style.display = '';
}

function toggleProcedimento(opcao) {
    // Mapeia opção => botões correspondentes
    const mapa = {
        concreto: { opcao: btnConcretoSimples, proc: btnProcedimentoConcreto },
        ceramica: { opcao: btnCeramicaRevestimentos, proc: btnProcedimentoCeramica },
        pedras: { opcao: btnPedrasPortuguesas, proc: btnProcedimentoPedras },
    };

    const alvo = mapa[opcao];
    if (!alvo || !alvo.opcao || !alvo.proc) return;

    const procVisivel = alvo.proc.style.display !== 'none';

    if (procVisivel) {
        // Se já está visível, voltar às 3 opções
        resetOpcoesPavimento();
        return;
    }

    // Esconder outras opções e mostrar somente a escolhida
    [btnConcretoSimples, btnCeramicaRevestimentos, btnPedrasPortuguesas].forEach((btn) => {
        if (!btn) return;
        btn.style.display = btn === alvo.opcao ? '' : 'none';
    });

    // Esconder outros procedimentos e mostrar apenas o da opção
    esconderProcedimentos();
    alvo.proc.style.display = '';

    // Mostrar botões comuns
    if (botoesComuns) botoesComuns.style.display = 'flex';
}

// Listeners das opções
if (btnConcretoSimples) {
    btnConcretoSimples.addEventListener('click', () => toggleProcedimento('concreto'));
}
if (btnCeramicaRevestimentos) {
    btnCeramicaRevestimentos.addEventListener('click', () => toggleProcedimento('ceramica'));
}
if (btnPedrasPortuguesas) {
    btnPedrasPortuguesas.addEventListener('click', () => toggleProcedimento('pedras'));
}

// ======================================
// PROCEDIMENTO CONCRETO - Exibição/Ocultação
// ======================================

function ocultarConteudoConcreto() {
    if (textoConcreto) textoConcreto.style.display = 'none';
    if (textoPerguntaLocalizacaoConcreto) textoPerguntaLocalizacaoConcreto.style.display = 'none';
    if (containerLocalizacaoConcreto) containerLocalizacaoConcreto.style.display = 'none';
    resetarLocalizacaoConcreto();
    procedimentoConcreto.aberto = false;
    procedimentoConcreto.selecionado = null;
}

function exibirConteudoConcreto() {
    if (textoConcreto) textoConcreto.style.display = 'block';
    if (textoPerguntaLocalizacaoConcreto) textoPerguntaLocalizacaoConcreto.style.display = 'block';
    if (containerLocalizacaoConcreto) containerLocalizacaoConcreto.style.display = 'flex';
    procedimentoConcreto.aberto = true;
}

if (btnProcedimentoConcreto) {
    btnProcedimentoConcreto.addEventListener('click', () => {
        if (btnProcedimentoConcreto.classList.contains('desabilitado')) return;
        if (procedimentoConcreto.aberto) {
            ocultarConteudoConcreto();
        } else {
            exibirConteudoConcreto();
        }
    });
}

// ======================================
// BOTÕES DE LOCALIZAÇÃO (Cavalete, Caixa Piso, Vala Comum)
// ======================================

function desabilitarAfericaoEPreenchimento(desabilitar) {
    const alvo = [btnAfericaoRepavimentacao, btnPreenchimentoFormulario];
    alvo.forEach((btn) => {
        if (!btn) return;
        if (desabilitar) {
            btn.classList.add('desabilitado');
        } else {
            btn.classList.remove('desabilitado');
        }
    });
}

function resetarLocalizacaoConcreto() {
    [btnCavalete, btnCaixaPiso, btnValaComum].forEach((btn) => {
        if (btn) {
            btn.classList.remove('desabilitado');
            btn.removeAttribute('disabled');
            btn.removeAttribute('aria-disabled');
        }
    });
    if (textoCavalete) textoCavalete.style.display = 'none';
    if (textoCaixaPiso) textoCaixaPiso.style.display = 'none';
    if (textoValaComum) textoValaComum.style.display = 'none';
    [btnConferenciaViabilidade, btnPreenchimentoFormulario, btnPadraoFotos, btnAfericaoRepavimentacao].forEach((btn) => {
        if (btn) btn.classList.remove('desabilitado');
    });
    procedimentoConcreto.selecionado = null;
}

function desabilitarLocalizacaoConcretoExceto(selecionadoId) {
    [btnCavalete, btnCaixaPiso, btnValaComum].forEach((btn) => {
        if (!btn || btn.id === selecionadoId) return;
        btn.classList.add('desabilitado');
        btn.setAttribute('disabled', 'true');
        btn.setAttribute('aria-disabled', 'true');
    });
}

function selecionarLocalizacaoConcreto(id) {
    if (procedimentoConcreto.selecionado === id) {
        resetarLocalizacaoConcreto();
        return;
    }

    resetarLocalizacaoConcreto();
    procedimentoConcreto.selecionado = id;
    desabilitarLocalizacaoConcretoExceto(id);

    if (id === 'btnCavalete') {
        if (textoCavalete) textoCavalete.style.display = 'block';
        // Cavalete: desabilita Aferição e Preenchimento, mantém Viabilidade e Padrão de Fotos habilitados
        [btnAfericaoRepavimentacao, btnPreenchimentoFormulario].forEach((btn) => {
            if (btn) btn.classList.add('desabilitado');
        });
        if (btnConferenciaViabilidade) btnConferenciaViabilidade.classList.remove('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
    } else {
        // Caixa Piso e Vala Comum: desabilita Viabilidade e Preenchimento, mantém Aferição habilitada
        if (id === 'btnCaixaPiso' && textoCaixaPiso) {
            textoCaixaPiso.style.display = 'block';
        }
        if (id === 'btnValaComum' && textoValaComum) {
            textoValaComum.style.display = 'block';
        }
        [btnConferenciaViabilidade, btnPreenchimentoFormulario, btnPadraoFotos].forEach((btn) => {
            if (btn) btn.classList.add('desabilitado');
        });
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
    }
}

if (btnCavalete) {
    btnCavalete.addEventListener('click', () => {
        if (btnCavalete.classList.contains('desabilitado') && procedimentoConcreto.selecionado !== 'btnCavalete') {
            return;
        }
        selecionarLocalizacaoConcreto('btnCavalete');
    });
}

if (btnCaixaPiso) {
    btnCaixaPiso.addEventListener('click', () => {
        if (btnCaixaPiso.classList.contains('desabilitado') && procedimentoConcreto.selecionado !== 'btnCaixaPiso') {
            return;
        }
        selecionarLocalizacaoConcreto('btnCaixaPiso');
    });
}

if (btnValaComum) {
    btnValaComum.addEventListener('click', () => {
        if (btnValaComum.classList.contains('desabilitado') && procedimentoConcreto.selecionado !== 'btnValaComum') {
            return;
        }
        selecionarLocalizacaoConcreto('btnValaComum');
    });
}

// ======================================
// PROCEDIMENTO CERÂMICA - Exibição/Ocultação
// ======================================

function ocultarConteudoCeramica() {
    if (textoCeramica) textoCeramica.style.display = 'none';
    if (textoPerguntaPisoCeramica) textoPerguntaPisoCeramica.style.display = 'none';
    if (botoesSimNaoCeramica) botoesSimNaoCeramica.style.display = 'none';
    if (textoSimCeramica) textoSimCeramica.style.display = 'none';
    if (textoPerguntaSimilarCeramica) textoPerguntaSimilarCeramica.style.display = 'none';
    if (botoesSimNaoCeramicaSimilar) botoesSimNaoCeramicaSimilar.style.display = 'none';
    if (textoSimCeramicaSimilar) textoSimCeramicaSimilar.style.display = 'none';
    if (opcoesVisitaCeramicaSimilar) opcoesVisitaCeramicaSimilar.style.display = 'none';
    resetarSimNaoCeramicaSimilar();
    procedimentoCeramica.aberto = false;
    procedimentoCeramica.selecionado = null;
    ceramicaSimilar.selecionado = null;
}

function exibirConteudoCeramica() {
    if (textoCeramica) textoCeramica.style.display = 'block';
    if (textoPerguntaPisoCeramica) textoPerguntaPisoCeramica.style.display = 'block';
    if (botoesSimNaoCeramica) botoesSimNaoCeramica.style.display = 'flex';
    procedimentoCeramica.aberto = true;
}

if (btnProcedimentoCeramica) {
    btnProcedimentoCeramica.addEventListener('click', () => {
        if (btnProcedimentoCeramica.classList.contains('desabilitado')) return;
        if (procedimentoCeramica.aberto) {
            ocultarConteudoCeramica();
        } else {
            exibirConteudoCeramica();
        }
    });
}

// ======================================
// BOTÕES SIM/NÃO CERÂMICA
// ======================================

function resetarSimNaoCeramica() {
    [btnSimCeramica, btnNaoCeramica].forEach((btn) => {
        if (btn) {
            btn.classList.remove('desabilitado');
        }
    });
    if (textoSimCeramica) textoSimCeramica.style.display = 'none';
    if (textoPerguntaSimilarCeramica) textoPerguntaSimilarCeramica.style.display = 'none';
    if (botoesSimNaoCeramicaSimilar) botoesSimNaoCeramicaSimilar.style.display = 'none';
    if (textoSimCeramicaSimilar) textoSimCeramicaSimilar.style.display = 'none';
    if (opcoesVisitaCeramicaSimilar) opcoesVisitaCeramicaSimilar.style.display = 'none';
    resetarSimNaoCeramicaSimilar();
    procedimentoCeramica.selecionado = null;
    ceramicaSimilar.selecionado = null;
}

function resetarSimNaoCeramicaSimilar() {
    [btnSimCeramicaSimilar, btnNaoCeramicaSimilar].forEach((btn) => {
        if (btn) {
            btn.classList.remove('desabilitado');
        }
    });
    ceramicaSimilar.selecionado = null;
    ceramicaSimilar.visita = null;
    ceramicaSimilarVisita.selecionado = null;
    repavimentacaoSimplesVisita.selecionado = null;
    if (textoSimCeramicaSimilar) textoSimCeramicaSimilar.style.display = 'none';
    if (opcoesVisitaCeramicaSimilar) opcoesVisitaCeramicaSimilar.style.display = 'none';
    if (textoPrimeiraVisitaSimilar) textoPrimeiraVisitaSimilar.style.display = 'none';
    if (textoPerguntaSimilarCeramicaVisita) textoPerguntaSimilarCeramicaVisita.style.display = 'none';
    if (botoesSimNaoCeramicaSimilarVisita) botoesSimNaoCeramicaSimilarVisita.style.display = 'none';
    if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
    if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
    if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
    if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
    if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
    if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.remove('desabilitado');
    if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.remove('desabilitado');
    if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
    if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
    if (btnPrimeiraVisitaSimilar) {
        btnPrimeiraVisitaSimilar.classList.remove('desabilitado');
        btnPrimeiraVisitaSimilar.removeAttribute('disabled');
        btnPrimeiraVisitaSimilar.removeAttribute('aria-disabled');
    }
    if (btnSegundaVisitaSimilar) {
        btnSegundaVisitaSimilar.classList.remove('desabilitado');
        btnSegundaVisitaSimilar.removeAttribute('disabled');
        btnSegundaVisitaSimilar.removeAttribute('aria-disabled');
    }
}

if (btnSimCeramica) {
    btnSimCeramica.addEventListener('click', () => {
        // Se o botão está desabilitado por outro fluxo, não faz nada
        if (btnSimCeramica.classList.contains('desabilitado') && procedimentoCeramica.selecionado !== 'sim') {
            return;
        }

        // Toggle: se já estava selecionado, reseta e reabilita o Não
        if (procedimentoCeramica.selecionado === 'sim') {
            resetarSimNaoCeramica();
            // Reabilitar Aferição, Preenchimento e Padrão de Fotos
            if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
            if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.remove('desabilitado');
            if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
            return;
        }

        // Selecionar Sim: desabilita apenas o Não, mostra texto amarelo
        resetarSimNaoCeramica();
        procedimentoCeramica.selecionado = 'sim';
        if (btnNaoCeramica) btnNaoCeramica.classList.add('desabilitado');
        if (textoSimCeramica) textoSimCeramica.style.display = 'block';
        // Desabilitar Aferição, Preenchimento e Padrão de Fotos
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.add('desabilitado');
        if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.add('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.add('desabilitado');
    });
}

if (btnNaoCeramica) {
    btnNaoCeramica.addEventListener('click', () => {
        // Se o botão está desabilitado por outro fluxo, não faz nada
        if (btnNaoCeramica.classList.contains('desabilitado') && procedimentoCeramica.selecionado !== 'nao') {
            return;
        }

        // Toggle: se já estava selecionado, reseta e reabilita o Sim
        if (procedimentoCeramica.selecionado === 'nao') {
            resetarSimNaoCeramica();
            return;
        }

        // Selecionar Não: desabilita apenas o Sim, mostra pergunta de piso similar
        resetarSimNaoCeramica();
        procedimentoCeramica.selecionado = 'nao';
        if (btnSimCeramica) btnSimCeramica.classList.add('desabilitado');
        if (textoPerguntaSimilarCeramica) textoPerguntaSimilarCeramica.style.display = 'block';
        if (botoesSimNaoCeramicaSimilar) botoesSimNaoCeramicaSimilar.style.display = 'flex';
        // Reabilitar Aferição, Preenchimento e Padrão de Fotos
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
        if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.remove('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
    });
}

// ======================================
// BOTÕES SIM/NÃO CERÂMICA (PISO SIMILAR)
// ======================================

if (btnSimCeramicaSimilar) {
    btnSimCeramicaSimilar.addEventListener('click', () => {
        // Se está desabilitado por outro fluxo, ignora
        if (btnSimCeramicaSimilar.classList.contains('desabilitado') && ceramicaSimilar.selecionado !== 'sim') {
            return;
        }

        // Toggle: se já estava selecionado, reseta tudo
        if (ceramicaSimilar.selecionado === 'sim') {
            resetarSimNaoCeramicaSimilar();
            // Reabilitar Aferição, Preenchimento e Padrão de Fotos
            if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
            if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.remove('desabilitado');
            if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
            return;
        }

        // Selecionar Sim: desabilita apenas o Não, mostra texto verde
        resetarSimNaoCeramicaSimilar();
        ceramicaSimilar.selecionado = 'sim';
        if (btnNaoCeramicaSimilar) btnNaoCeramicaSimilar.classList.add('desabilitado');
        if (textoSimCeramicaSimilar) textoSimCeramicaSimilar.style.display = 'block';
        // Desabilitar Aferição, Preenchimento e Padrão de Fotos
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.add('desabilitado');
        if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.add('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.add('desabilitado');
    });
}

if (btnNaoCeramicaSimilar) {
    btnNaoCeramicaSimilar.addEventListener('click', () => {
        // Se está desabilitado por outro fluxo, ignora
        if (btnNaoCeramicaSimilar.classList.contains('desabilitado') && ceramicaSimilar.selecionado !== 'nao') {
            return;
        }

        // Toggle: se já estava selecionado, reseta tudo
        if (ceramicaSimilar.selecionado === 'nao') {
            resetarSimNaoCeramicaSimilar();
            return;
        }

        // Selecionar Não: desabilita apenas o Sim, mostra opções de visita
        resetarSimNaoCeramicaSimilar();
        ceramicaSimilar.selecionado = 'nao';
        if (btnSimCeramicaSimilar) btnSimCeramicaSimilar.classList.add('desabilitado');
        if (opcoesVisitaCeramicaSimilar) opcoesVisitaCeramicaSimilar.style.display = 'flex';
        if (btnPrimeiraVisitaSimilar) btnPrimeiraVisitaSimilar.classList.remove('desabilitado');
        if (btnSegundaVisitaSimilar) btnSegundaVisitaSimilar.classList.remove('desabilitado');
        // Reabilitar Aferição, Preenchimento e Padrão de Fotos
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
        if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.remove('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
    });
}

// Botões de visita (piso similar)
if (btnPrimeiraVisitaSimilar) {
    btnPrimeiraVisitaSimilar.addEventListener('click', () => {
        if (btnPrimeiraVisitaSimilar.classList.contains('desabilitado') && ceramicaSimilar.visita !== 'primeira') {
            return;
        }

        // Toggle da 1ª visita: ativa/desativa e libera/bloqueia a 2ª visita
        if (ceramicaSimilar.visita === 'primeira') {
            ceramicaSimilar.visita = null;
            ceramicaSimilarVisita.selecionado = null;
            repavimentacaoSimplesVisita.selecionado = null;
            if (btnSegundaVisitaSimilar) {
                btnSegundaVisitaSimilar.classList.remove('desabilitado');
                btnSegundaVisitaSimilar.removeAttribute('disabled');
                btnSegundaVisitaSimilar.removeAttribute('aria-disabled');
            }
            if (textoPrimeiraVisitaSimilar) textoPrimeiraVisitaSimilar.style.display = 'none';
            if (textoPerguntaSimilarCeramicaVisita) textoPerguntaSimilarCeramicaVisita.style.display = 'none';
            if (botoesSimNaoCeramicaSimilarVisita) botoesSimNaoCeramicaSimilarVisita.style.display = 'none';
            if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
            if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
            if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
            if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
            if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
            if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.remove('desabilitado');
            if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.remove('desabilitado');
            if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            return;
        }

        ceramicaSimilar.visita = 'primeira';
        ceramicaSimilarVisita.selecionado = null;
        repavimentacaoSimplesVisita.selecionado = null;
        if (opcoesVisitaCeramicaSimilar) opcoesVisitaCeramicaSimilar.style.display = 'flex';
        if (btnSegundaVisitaSimilar) {
            btnSegundaVisitaSimilar.classList.add('desabilitado');
            btnSegundaVisitaSimilar.setAttribute('disabled', 'true');
            btnSegundaVisitaSimilar.setAttribute('aria-disabled', 'true');
        }
        if (textoPrimeiraVisitaSimilar) textoPrimeiraVisitaSimilar.style.display = 'block';
        if (textoPerguntaSimilarCeramica) textoPerguntaSimilarCeramica.style.display = 'none';
        if (botoesSimNaoCeramicaSimilar) botoesSimNaoCeramicaSimilar.style.display = 'none';
        if (textoSimCeramicaSimilar) textoSimCeramicaSimilar.style.display = 'none';
        if (textoPerguntaSimilarCeramicaVisita) textoPerguntaSimilarCeramicaVisita.style.display = 'none';
        if (botoesSimNaoCeramicaSimilarVisita) botoesSimNaoCeramicaSimilarVisita.style.display = 'none';
        if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
        if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
        if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
        if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
        if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
        if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.remove('desabilitado');
        if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.remove('desabilitado');
        if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
        if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
    });
}

if (btnSegundaVisitaSimilar) {
    btnSegundaVisitaSimilar.addEventListener('click', () => {
        if (btnSegundaVisitaSimilar.classList.contains('desabilitado') && ceramicaSimilar.visita !== 'segunda') {
            return;
        }

        // Toggle da 2ª visita: ativa/desativa e libera/bloqueia a 1ª visita
        if (ceramicaSimilar.visita === 'segunda') {
            ceramicaSimilar.visita = null;
            ceramicaSimilarVisita.selecionado = null;
            repavimentacaoSimplesVisita.selecionado = null;
            if (btnPrimeiraVisitaSimilar) {
                btnPrimeiraVisitaSimilar.classList.remove('desabilitado');
                btnPrimeiraVisitaSimilar.removeAttribute('disabled');
                btnPrimeiraVisitaSimilar.removeAttribute('aria-disabled');
            }
            if (textoPerguntaSimilarCeramica) textoPerguntaSimilarCeramica.style.display = 'none';
            if (botoesSimNaoCeramicaSimilar) botoesSimNaoCeramicaSimilar.style.display = 'none';
            if (textoPerguntaSimilarCeramicaVisita) textoPerguntaSimilarCeramicaVisita.style.display = 'none';
            if (botoesSimNaoCeramicaSimilarVisita) botoesSimNaoCeramicaSimilarVisita.style.display = 'none';
            if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
            if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
            if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
            if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
            if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
            if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.remove('desabilitado');
            if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.remove('desabilitado');
            if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            return;
        }

        ceramicaSimilar.visita = 'segunda';
        ceramicaSimilarVisita.selecionado = null;
        repavimentacaoSimplesVisita.selecionado = null;
        if (opcoesVisitaCeramicaSimilar) opcoesVisitaCeramicaSimilar.style.display = 'flex';
        if (btnPrimeiraVisitaSimilar) {
            btnPrimeiraVisitaSimilar.classList.add('desabilitado');
            btnPrimeiraVisitaSimilar.setAttribute('disabled', 'true');
            btnPrimeiraVisitaSimilar.setAttribute('aria-disabled', 'true');
        }
        if (textoPrimeiraVisitaSimilar) textoPrimeiraVisitaSimilar.style.display = 'none';
        if (textoPerguntaSimilarCeramicaVisita) textoPerguntaSimilarCeramicaVisita.style.display = 'block';
        if (botoesSimNaoCeramicaSimilarVisita) botoesSimNaoCeramicaSimilarVisita.style.display = 'flex';
        if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
        if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
        if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
        if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.remove('desabilitado');
        if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.remove('desabilitado');
        if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
        if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
    });
}

// Botões Sim/Não da 2ª visita (piso similar)
if (btnSimCeramicaSimilarVisita) {
    btnSimCeramicaSimilarVisita.addEventListener('click', () => {
        if (btnSimCeramicaSimilarVisita.classList.contains('desabilitado') && ceramicaSimilarVisita.selecionado !== 'sim') {
            return;
        }

        if (ceramicaSimilarVisita.selecionado === 'sim') {
            ceramicaSimilarVisita.selecionado = null;
            if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.remove('desabilitado');
            if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
            if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
            if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
            repavimentacaoSimplesVisita.selecionado = null;
            if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            // Reabilitar Aferição, Preenchimento e Padrão de Fotos
            if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
            if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.remove('desabilitado');
            if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
            return;
        }

        ceramicaSimilarVisita.selecionado = 'sim';
        repavimentacaoSimplesVisita.selecionado = null;
        if (btnNaoCeramicaSimilarVisita) btnNaoCeramicaSimilarVisita.classList.add('desabilitado');
        if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'block';
        if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
        if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
        if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
        if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
        // Desabilitar Aferição, Preenchimento e Padrão de Fotos
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.add('desabilitado');
        if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.add('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.add('desabilitado');
    });
}

if (btnNaoCeramicaSimilarVisita) {
    btnNaoCeramicaSimilarVisita.addEventListener('click', () => {
        if (btnNaoCeramicaSimilarVisita.classList.contains('desabilitado') && ceramicaSimilarVisita.selecionado !== 'nao') {
            return;
        }

        if (ceramicaSimilarVisita.selecionado === 'nao') {
            ceramicaSimilarVisita.selecionado = null;
            if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.remove('desabilitado');
            if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'none';
            if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'none';
            repavimentacaoSimplesVisita.selecionado = null;
            if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            return;
        }

        ceramicaSimilarVisita.selecionado = 'nao';
        repavimentacaoSimplesVisita.selecionado = null;
        if (btnSimCeramicaSimilarVisita) btnSimCeramicaSimilarVisita.classList.add('desabilitado');
        if (textoSimCeramicaSimilarVisita) textoSimCeramicaSimilarVisita.style.display = 'none';
        if (textoPerguntaRepavimentacaoSimplesVisita) textoPerguntaRepavimentacaoSimplesVisita.style.display = 'block';
        if (botoesSimNaoRepavimentacaoSimplesVisita) botoesSimNaoRepavimentacaoSimplesVisita.style.display = 'flex';
        if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
        if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
        // Reabilitar Aferição, Preenchimento e Padrão de Fotos
        if (btnAfericaoRepavimentacao) btnAfericaoRepavimentacao.classList.remove('desabilitado');
        if (btnPreenchimentoFormulario) btnPreenchimentoFormulario.classList.remove('desabilitado');
        if (btnPadraoFotos) btnPadraoFotos.classList.remove('desabilitado');
    });
}

// Botões Sim/Não repavimentação simples após 2ª visita
if (btnSimRepavimentacaoSimplesVisita) {
    btnSimRepavimentacaoSimplesVisita.addEventListener('click', () => {
        if (btnSimRepavimentacaoSimplesVisita.classList.contains('desabilitado') && repavimentacaoSimplesVisita.selecionado !== 'sim') {
            return;
        }

        if (repavimentacaoSimplesVisita.selecionado === 'sim') {
            repavimentacaoSimplesVisita.selecionado = null;
            if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
            if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
            return;
        }

        repavimentacaoSimplesVisita.selecionado = 'sim';
        if (btnNaoRepavimentacaoSimplesVisita) btnNaoRepavimentacaoSimplesVisita.classList.add('desabilitado');
        if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'block';
        if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
    });
}

if (btnNaoRepavimentacaoSimplesVisita) {
    btnNaoRepavimentacaoSimplesVisita.addEventListener('click', () => {
        if (btnNaoRepavimentacaoSimplesVisita.classList.contains('desabilitado') && repavimentacaoSimplesVisita.selecionado !== 'nao') {
            return;
        }

        if (repavimentacaoSimplesVisita.selecionado === 'nao') {
            repavimentacaoSimplesVisita.selecionado = null;
            if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.remove('desabilitado');
            if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
            if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'none';
            return;
        }

        repavimentacaoSimplesVisita.selecionado = 'nao';
        if (btnSimRepavimentacaoSimplesVisita) btnSimRepavimentacaoSimplesVisita.classList.add('desabilitado');
        if (textoSimRepavimentacaoSimplesVisita) textoSimRepavimentacaoSimplesVisita.style.display = 'none';
        if (textoNaoRepavimentacaoSimplesVisita) textoNaoRepavimentacaoSimplesVisita.style.display = 'block';
    });
}

// ======================================
// EVENT LISTENER: btnProcedimentoPedras
// ======================================

if (btnProcedimentoPedras) {
    btnProcedimentoPedras.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnProcedimentoPedras.classList.contains('desabilitado')) {
            return;
        }

        procedimentoPedras.aberto = !procedimentoPedras.aberto;

        if (procedimentoPedras.aberto) {
            // Mostrar texto do procedimento
            if (textoPedras) textoPedras.style.display = 'block';
        } else {
            // Esconder texto do procedimento
            ocultarConteudoPedras();
        }
    });
}

function ocultarConteudoPedras() {
    if (textoPedras) textoPedras.style.display = 'none';
    procedimentoPedras.aberto = false;
}

// ======================================
// CONFERÊNCIA DE VIABILIDADE
// ======================================

function desabilitarTodosBotoes() {
    // Desabilita todos exceto btnCalcada e o botão de pavimento selecionado
    const botoes = [
        btnProcedimentoConcreto, btnProcedimentoCeramica, btnProcedimentoPedras,
        btnCavalete, btnCaixaPiso, btnValaComum,
        btnSimCeramica, btnNaoCeramica,
        btnAfericaoRepavimentacao, btnPreenchimentoFormulario, btnPadraoFotos
    ];

    botoes.forEach((btn) => {
        if (btn && btn.style.display !== 'none') {
            btn.classList.add('desabilitado');
        }
    });
}

function habilitarTodosBotoes() {
    const botoes = [
        btnProcedimentoConcreto, btnProcedimentoCeramica, btnProcedimentoPedras,
        btnCavalete, btnCaixaPiso, btnValaComum,
        btnSimCeramica, btnNaoCeramica,
        btnConferenciaViabilidade, btnAfericaoRepavimentacao, btnPreenchimentoFormulario, btnPadraoFotos,
        btnFachadaLocal, btnFotoAntes, btnFotoAfericao, btnConclusaoServico
    ];

    botoes.forEach((btn) => {
        if (btn) {
            btn.classList.remove('desabilitado');
            btn.removeAttribute('disabled');
            btn.removeAttribute('aria-disabled');
        }
    });
}

function ocultarConteudoViabilidade() {
    if (textoPerguntaViabilidade) textoPerguntaViabilidade.style.display = 'none';
    if (botoesSimNaoViabilidade) botoesSimNaoViabilidade.style.display = 'none';
    if (textoNaoViabilidade) textoNaoViabilidade.style.display = 'none';
    if (textoSimViabilidade) textoSimViabilidade.style.display = 'none';
    conferenciaViabilidade.aberto = false;
    conferenciaViabilidade.selecionado = null;
    habilitarTodosBotoes();
    if (textoCavalete) textoCavalete.style.display = 'none';
    if (textoCaixaPiso) textoCaixaPiso.style.display = 'none';
    if (textoValaComum) textoValaComum.style.display = 'none';
    // Resetar seleção de localização para permitir nova seleção
    procedimentoConcreto.selecionado = null;
}

function exibirPerguntaViabilidade() {
    if (textoPerguntaViabilidade) textoPerguntaViabilidade.style.display = 'block';
    if (botoesSimNaoViabilidade) botoesSimNaoViabilidade.style.display = 'flex';
    conferenciaViabilidade.aberto = true;
}

if (btnConferenciaViabilidade) {
    btnConferenciaViabilidade.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnConferenciaViabilidade.classList.contains('desabilitado')) {
            return;
        }

        if (conferenciaViabilidade.aberto) {
            ocultarConteudoViabilidade();
        } else {
            const excecoes = ['btnCalcada', 'btnConferenciaViabilidade'];
            if (procedimentoConcreto.selecionado === 'btnCavalete') {
                excecoes.push('btnCavalete');
            }
            desabilitarBotoesExceto(excecoes);
            exibirPerguntaViabilidade();
        }
    });
}

// Botões Sim/Não Viabilidade
function resetarSimNaoViabilidade() {
    [btnSimViabilidade, btnNaoViabilidade].forEach((btn) => {
        if (btn) {
            btn.classList.remove('desabilitado');
        }
    });
    if (textoNaoViabilidade) textoNaoViabilidade.style.display = 'none';
    if (textoSimViabilidade) textoSimViabilidade.style.display = 'none';
    conferenciaViabilidade.selecionado = null;
}

if (btnSimViabilidade) {
    btnSimViabilidade.addEventListener('click', () => {
        // Se Sim está desabilitado, não fazer nada
        if (btnSimViabilidade.classList.contains('desabilitado')) {
            return;
        }

        // Se já estava selecionado, deselecionar (habilitar Não novamente)
        if (conferenciaViabilidade.selecionado === 'sim') {
            resetarSimNaoViabilidade();
        } else {
            // Selecionar Sim: desabilita Não, mostra texto
            resetarSimNaoViabilidade();
            if (btnNaoViabilidade) btnNaoViabilidade.classList.add('desabilitado');
            if (textoSimViabilidade) textoSimViabilidade.style.display = 'block';
            conferenciaViabilidade.selecionado = 'sim';
        }
    });
}

if (btnNaoViabilidade) {
    btnNaoViabilidade.addEventListener('click', () => {
        // Se Não está desabilitado, não fazer nada
        if (btnNaoViabilidade.classList.contains('desabilitado')) {
            return;
        }

        // Se já estava selecionado, deselecionar (habilitar Sim novamente)
        if (conferenciaViabilidade.selecionado === 'nao') {
            resetarSimNaoViabilidade();
        } else {
            // Selecionar Não: desabilita Sim, mostra texto
            resetarSimNaoViabilidade();
            if (btnSimViabilidade) btnSimViabilidade.classList.add('desabilitado');
            if (textoNaoViabilidade) textoNaoViabilidade.style.display = 'block';
            conferenciaViabilidade.selecionado = 'nao';
        }
    });
}

// ======================================
// EVENT LISTENER: btnAfericaoRepavimentacao
// ======================================

if (btnAfericaoRepavimentacao) {
    btnAfericaoRepavimentacao.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnAfericaoRepavimentacao.classList.contains('desabilitado')) {
            return;
        }

        afericaoRepavimentacao.aberto = !afericaoRepavimentacao.aberto;

        if (afericaoRepavimentacao.aberto) {
            // Mostrar conteúdo
            if (textoObservacoesAfericao) textoObservacoesAfericao.style.display = 'block';
            if (textoPerguntaFormatoVala) textoPerguntaFormatoVala.style.display = 'block';
            if (containerFormatoVala) containerFormatoVala.style.display = 'flex';

            // Desabilitar outros botões, mantendo a localização selecionada ativa
            const excecoes = ['btnCalcada', 'btnAfericaoRepavimentacao'];
            if (procedimentoConcreto.selecionado) {
                excecoes.push(procedimentoConcreto.selecionado);
            }
            desabilitarBotoesExceto(excecoes);
        } else {
            // Esconder tudo e resetar
            ocultarConteudoAfericao();

            // Habilitar botões novamente
            habilitarTodosBotoes();
            // Esconder textos de localização
            if (textoCavalete) textoCavalete.style.display = 'none';
            if (textoCaixaPiso) textoCaixaPiso.style.display = 'none';
            if (textoValaComum) textoValaComum.style.display = 'none';
            // Resetar seleção de localização para permitir nova seleção
            procedimentoConcreto.selecionado = null;
        }
    });
}

// Função para ocultar conteúdo de Aferição
function ocultarConteudoAfericao() {
    if (textoObservacoesAfericao) textoObservacoesAfericao.style.display = 'none';
    if (textoPerguntaFormatoVala) textoPerguntaFormatoVala.style.display = 'none';
    if (containerFormatoVala) containerFormatoVala.style.display = 'none';
    resetarFormatoVala();
    afericaoRepavimentacao.aberto = false;
}

// Função para resetar botões de formato
function resetarFormatoVala() {
    if (btnQuadrado) btnQuadrado.classList.remove('desabilitado');
    if (btnSemFormato) btnSemFormato.classList.remove('desabilitado');
    if (textoQuadrado) textoQuadrado.style.display = 'none';
    if (textoSemFormato) textoSemFormato.style.display = 'none';
    afericaoRepavimentacao.formatoSelecionado = null;
}

// ======================================
// EVENT LISTENER: btnQuadrado
// ======================================

if (btnQuadrado) {
    btnQuadrado.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnQuadrado.classList.contains('desabilitado')) {
            return;
        }

        // Se já estava selecionado, deselecionar (habilitar Sem Formato novamente)
        if (afericaoRepavimentacao.formatoSelecionado === 'quadrado') {
            resetarFormatoVala();
        } else {
            // Selecionar Quadrado: desabilita Sem Formato, mostra texto
            resetarFormatoVala();
            if (btnSemFormato) btnSemFormato.classList.add('desabilitado');
            if (textoQuadrado) textoQuadrado.style.display = 'block';
            afericaoRepavimentacao.formatoSelecionado = 'quadrado';
        }
    });
}

// ======================================
// EVENT LISTENER: btnSemFormato
// ======================================

if (btnSemFormato) {
    btnSemFormato.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnSemFormato.classList.contains('desabilitado')) {
            return;
        }

        // Se já estava selecionado, deselecionar (habilitar Quadrado novamente)
        if (afericaoRepavimentacao.formatoSelecionado === 'semFormato') {
            resetarFormatoVala();
        } else {
            // Selecionar Sem Formato: desabilita Quadrado, mostra texto
            resetarFormatoVala();
            if (btnQuadrado) btnQuadrado.classList.add('desabilitado');
            if (textoSemFormato) textoSemFormato.style.display = 'block';
            afericaoRepavimentacao.formatoSelecionado = 'semFormato';
        }
    });
}

// ======================================
// EVENT LISTENER: btnPreenchimentoFormulario
// ======================================

if (btnPreenchimentoFormulario) {
    btnPreenchimentoFormulario.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnPreenchimentoFormulario.classList.contains('desabilitado')) {
            return;
        }

        preenchimentoFormulario.aberto = !preenchimentoFormulario.aberto;

        if (preenchimentoFormulario.aberto) {
            // Mostrar conteúdo
            if (textoAvisoFormulario) textoAvisoFormulario.style.display = 'block';
            if (textoInfoFormulario) textoInfoFormulario.style.display = 'block';

            // Desabilitar outros botões
            desabilitarBotoesExceto(['btnCalcada', 'btnPreenchimentoFormulario']);
        } else {
            // Esconder conteúdo
            if (textoAvisoFormulario) textoAvisoFormulario.style.display = 'none';
            if (textoInfoFormulario) textoInfoFormulario.style.display = 'none';

            // Habilitar botões novamente
            habilitarTodosBotoes();
            preenchimentoFormulario.aberto = false;
        }
    });
}

// ======================================
// FUNÇÃO: desabilitarBotoesExceto
// ======================================

function desabilitarBotoesExceto(excecoes) {
    // Detectar qual botão de pavimento está visível
    const pavimentoVisivel = [];
    if (btnConcretoSimples && btnConcretoSimples.style.display !== 'none') {
        pavimentoVisivel.push('btnConcretoSimples');
    }
    if (btnCeramicaRevestimentos && btnCeramicaRevestimentos.style.display !== 'none') {
        pavimentoVisivel.push('btnCeramicaRevestimentos');
    }
    if (btnPedrasPortuguesas && btnPedrasPortuguesas.style.display !== 'none') {
        pavimentoVisivel.push('btnPedrasPortuguesas');
    }

    // Adicionar o botão de pavimento visível às exceções
    const excecoesCompletas = [...excecoes, ...pavimentoVisivel];

    // Array com todos os botões que podem ser desabilitados
    const todosBotoes = [
        { id: 'btnCalcada', elemento: btnCalcada },
        { id: 'btnConcretoSimples', elemento: btnConcretoSimples },
        { id: 'btnCeramicaRevestimentos', elemento: btnCeramicaRevestimentos },
        { id: 'btnPedrasPortuguesas', elemento: btnPedrasPortuguesas },
        { id: 'btnProcedimentoConcreto', elemento: btnProcedimentoConcreto },
        { id: 'btnProcedimentoCeramica', elemento: btnProcedimentoCeramica },
        { id: 'btnProcedimentoPedras', elemento: btnProcedimentoPedras },
        { id: 'btnCavalete', elemento: btnCavalete },
        { id: 'btnCaixaPiso', elemento: btnCaixaPiso },
        { id: 'btnValaComum', elemento: btnValaComum },
        { id: 'btnSimCeramica', elemento: btnSimCeramica },
        { id: 'btnNaoCeramica', elemento: btnNaoCeramica },
        { id: 'btnConferenciaViabilidade', elemento: btnConferenciaViabilidade },
        { id: 'btnAfericaoRepavimentacao', elemento: btnAfericaoRepavimentacao },
        { id: 'btnPreenchimentoFormulario', elemento: btnPreenchimentoFormulario },
        { id: 'btnPadraoFotos', elemento: btnPadraoFotos },
        { id: 'btnFachadaLocal', elemento: btnFachadaLocal },
        { id: 'btnFotoAntes', elemento: btnFotoAntes },
        { id: 'btnFotoAfericao', elemento: btnFotoAfericao },
        { id: 'btnConclusaoServico', elemento: btnConclusaoServico }
    ];

    todosBotoes.forEach((botaoObj) => {
        // Se não está na lista de exceções completas, desabilita
        if (!excecoesCompletas.includes(botaoObj.id)) {
            if (botaoObj.elemento && botaoObj.elemento.style.display !== 'none') {
                botaoObj.elemento.classList.add('desabilitado');
            }
        }
    });
}

// ======================================
// PADRÃO DE FOTOS
// ======================================
// PADRÃO DE FOTOS
// ======================================

if (btnPadraoFotos) {
    btnPadraoFotos.addEventListener('click', () => {
        if (btnPadraoFotos.classList.contains('desabilitado')) {
            esconderPadraoFotos();
            return;
        }
        // Toggle: mostrar/esconder o padrão de fotos
        if (textoPadraoFotos.style.display === 'block') {
            textoPadraoFotos.style.display = 'none';
            containerFotos.style.display = 'none';
        } else {
            textoPadraoFotos.style.display = 'block';
            containerFotos.style.display = 'flex';
        }
    });
}

// Event listeners para os botões de fotos
if (btnFachadaLocal) {
    btnFachadaLocal.addEventListener('click', () => {
        // Se está desabilitado, não faz nada
        if (btnFachadaLocal.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder texto e imagens
        if (textoFachadaLocal.style.display === 'block') {
            textoFachadaLocal.style.display = 'none';
            imagensFachadaLocal.style.display = 'none';
            // Reabilitar os outros botões de fotos
            if (btnFotoAntes) btnFotoAntes.classList.remove('desabilitado');
            if (btnFotoAfericao) btnFotoAfericao.classList.remove('desabilitado');
            if (btnConclusaoServico) btnConclusaoServico.classList.remove('desabilitado');
        } else {
            textoFachadaLocal.style.display = 'block';
            imagensFachadaLocal.style.display = 'flex';
            // Desabilitar os outros botões de fotos
            if (btnFotoAntes) btnFotoAntes.classList.add('desabilitado');
            if (btnFotoAfericao) btnFotoAfericao.classList.add('desabilitado');
            if (btnConclusaoServico) btnConclusaoServico.classList.add('desabilitado');
        }
    });
}

if (btnFotoAntes) {
    btnFotoAntes.addEventListener('click', () => {
        // Se está desabilitado, não faz nada
        if (btnFotoAntes.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder texto e imagens
        if (textoFotoAntes.style.display === 'block') {
            textoFotoAntes.style.display = 'none';
            imagensFotoAntes.style.display = 'none';
            // Reabilitar os outros botões de fotos
            if (btnFachadaLocal) btnFachadaLocal.classList.remove('desabilitado');
            if (btnFotoAfericao) btnFotoAfericao.classList.remove('desabilitado');
            if (btnConclusaoServico) btnConclusaoServico.classList.remove('desabilitado');
        } else {
            textoFotoAntes.style.display = 'block';
            imagensFotoAntes.style.display = 'flex';
            // Desabilitar os outros botões de fotos
            if (btnFachadaLocal) btnFachadaLocal.classList.add('desabilitado');
            if (btnFotoAfericao) btnFotoAfericao.classList.add('desabilitado');
            if (btnConclusaoServico) btnConclusaoServico.classList.add('desabilitado');
        }
    });
}

if (btnFotoAfericao) {
    btnFotoAfericao.addEventListener('click', () => {
        // Se está desabilitado, não faz nada
        if (btnFotoAfericao.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder texto e imagens
        if (textoFotoAfericao.style.display === 'block') {
            textoFotoAfericao.style.display = 'none';
            imagensFotoAfericao.style.display = 'none';
            // Reabilitar os outros botões de fotos
            if (btnFachadaLocal) btnFachadaLocal.classList.remove('desabilitado');
            if (btnFotoAntes) btnFotoAntes.classList.remove('desabilitado');
            if (btnConclusaoServico) btnConclusaoServico.classList.remove('desabilitado');
        } else {
            textoFotoAfericao.style.display = 'block';
            imagensFotoAfericao.style.display = 'flex';
            // Desabilitar os outros botões de fotos
            if (btnFachadaLocal) btnFachadaLocal.classList.add('desabilitado');
            if (btnFotoAntes) btnFotoAntes.classList.add('desabilitado');
            if (btnConclusaoServico) btnConclusaoServico.classList.add('desabilitado');
        }
    });
}

if (btnConclusaoServico) {
    btnConclusaoServico.addEventListener('click', () => {
        // Se está desabilitado, não faz nada
        if (btnConclusaoServico.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder texto e imagens
        if (textoConclusaoServico.style.display === 'block') {
            textoConclusaoServico.style.display = 'none';
            imagensConclusaoServico.style.display = 'none';
            // Reabilitar os outros botões de fotos
            if (btnFachadaLocal) btnFachadaLocal.classList.remove('desabilitado');
            if (btnFotoAntes) btnFotoAntes.classList.remove('desabilitado');
            if (btnFotoAfericao) btnFotoAfericao.classList.remove('desabilitado');
        } else {
            textoConclusaoServico.style.display = 'block';
            imagensConclusaoServico.style.display = 'flex';
            // Desabilitar os outros botões de fotos
            if (btnFachadaLocal) btnFachadaLocal.classList.add('desabilitado');
            if (btnFotoAntes) btnFotoAntes.classList.add('desabilitado');
            if (btnFotoAfericao) btnFotoAfericao.classList.add('desabilitado');
        }
    });
}
