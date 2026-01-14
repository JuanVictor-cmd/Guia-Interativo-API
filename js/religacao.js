// ======================================
// ELEMENTOS DO DOM
// ======================================

const btnReligacao = document.getElementById('btnReligacao');
const instrucaoInicial = document.getElementById('instrucaoInicial');
const textoPerguntaTipoReligacao = document.getElementById('textoPerguntaTipoReligacao');
const containerOpcoesReligacao = document.getElementById('containerOpcoesReligacao');
const btnReligacaoCavalete = document.getElementById('btnReligacaoCavalete');
const btnReligacaoRamalRede = document.getElementById('btnReligacaoRamalRede');
const hrReligacaoCavalete = document.getElementById('hrReligacaoCavalete');
const hrReligacaoRamalRede = document.getElementById('hrReligacaoRamalRede');

// Subtipo - Cavalete
const containerOpcoesReligacaoCavalete = document.getElementById('containerOpcoesReligacaoCavalete');
const btnReligacaoLISC = document.getElementById('btnReligacaoLISC');
const btnReligacaoAlgema = document.getElementById('btnReligacaoAlgema');
const btnReligacaoHostiaObstrutor = document.getElementById('btnReligacaoHostiaObstrutor');

// LISC - Procedimento
const containerProcedimentoLISC = document.getElementById('containerProcedimentoLISC');
const btnProcedimentoLISC = document.getElementById('btnProcedimentoLISC');
const textoProcedimentoLISC = document.getElementById('textoProcedimentoLISC');
const hrPadraoFotosLISC = document.getElementById('hrPadraoFotosLISC');
const btnPadraoFotosLISC = document.getElementById('btnPadraoFotosLISC');
const containerFotosLISC = document.getElementById('containerFotosLISC');
const btnFotoFachadaLISC = document.getElementById('btnFotoFachadaLISC');
const textoFotoFachadaLISC = document.getElementById('textoFotoFachadaLISC');
const imagensFotoFachadaLISC = document.getElementById('imagensFotoFachadaLISC');
const btnFotoChassiLacreLeitumaLISC = document.getElementById('btnFotoChassiLacreLeitumaLISC');
const textoFotoChassiLacreLeitumaLISC = document.getElementById('textoFotoChassiLacreLeitumaLISC');
const imagensFotoChassiLacreLeitumaLISC = document.getElementById('imagensFotoChassiLacreLeitumaLISC');
const btnFotoExecucaoLISC = document.getElementById('btnFotoExecucaoLISC');
const textoFotoExecucaoLISC = document.getElementById('textoFotoExecucaoLISC');
const imagensFotoExecucaoLISC = document.getElementById('imagensFotoExecucaoLISC');

// Algema - Procedimento
const containerProcedimentoAlgema = document.getElementById('containerProcedimentoAlgema');
const btnProcedimentoAlgema = document.getElementById('btnProcedimentoAlgema');
const textoProcedimentoAlgema = document.getElementById('textoProcedimentoAlgema');
const hrPadraoFotosAlgema = document.getElementById('hrPadraoFotosAlgema');
const btnPadraoFotosAlgema = document.getElementById('btnPadraoFotosAlgema');
const containerFotosAlgema = document.getElementById('containerFotosAlgema');
const btnFotoFachadaAlgema = document.getElementById('btnFotoFachadaAlgema');
const textoFotoFachadaAlgema = document.getElementById('textoFotoFachadaAlgema');
const imagensFotoFachadaAlgema = document.getElementById('imagensFotoFachadaAlgema');
const btnFotoChassiLacreLeitumaAlgema = document.getElementById('btnFotoChassiLacreLeitumaAlgema');
const textoFotoChassiLacreLeitumaAlgema = document.getElementById('textoFotoChassiLacreLeitumaAlgema');
const imagensFotoChassiLacreLeitumaAlgema = document.getElementById('imagensFotoChassiLacreLeitumaAlgema');
const btnFotoExecucaoAlgema = document.getElementById('btnFotoExecucaoAlgema');
const textoFotoExecucaoAlgema = document.getElementById('textoFotoExecucaoAlgema');
const imagensFotoExecucaoAlgema = document.getElementById('imagensFotoExecucaoAlgema');

// Subtipo - Ramal/Rede
const containerOpcoesReligacaoRamalRede = document.getElementById('containerOpcoesReligacaoRamalRede');
const btnReligacaoRamal = document.getElementById('btnReligacaoRamal');
const btnReligacaoRede = document.getElementById('btnReligacaoRede');

// Ramal - Procedimento
const containerProcedimentoRamal = document.getElementById('containerProcedimentoRamal');
const btnProcedimentoRamal = document.getElementById('btnProcedimentoRamal');
const textoProcedimentoRamal = document.getElementById('textoProcedimentoRamal');
const hrPadraoFotosRamal = document.getElementById('hrPadraoFotosRamal');
const btnPadraoFotosRamal = document.getElementById('btnPadraoFotosRamal');
const containerFotosRamal = document.getElementById('containerFotosRamal');
const btnFotoFachadaRamal = document.getElementById('btnFotoFachadaRamal');
const textoFotoFachadaRamal = document.getElementById('textoFotoFachadaRamal');
const imagensFotoFachadaRamal = document.getElementById('imagensFotoFachadaRamal');
const btnFotoChassiLacreLeitumaRamal = document.getElementById('btnFotoChassiLacreLeitumaRamal');
const textoFotoChassiLacreLeitumaRamal = document.getElementById('textoFotoChassiLacreLeitumaRamal');
const imagensFotoChassiLacreLeitumaRamal = document.getElementById('imagensFotoChassiLacreLeitumaRamal');
const btnFotoExecucaoRamal = document.getElementById('btnFotoExecucaoRamal');
const textoFotoExecucaoRamal = document.getElementById('textoFotoExecucaoRamal');
const imagensFotoExecucaoRamal = document.getElementById('imagensFotoExecucaoRamal');

// Rede - Procedimento
const containerProcedimentoRede = document.getElementById('containerProcedimentoRede');
const btnProcedimentoRede = document.getElementById('btnProcedimentoRede');
const textoProcedimentoRede = document.getElementById('textoProcedimentoRede');
const hrPadraoFotosRede = document.getElementById('hrPadraoFotosRede');
const btnPadraoFotosRede = document.getElementById('btnPadraoFotosRede');
const containerFotosRede = document.getElementById('containerFotosRede');
const btnFotoFachadaRede = document.getElementById('btnFotoFachadaRede');
const textoFotoFachadaRede = document.getElementById('textoFotoFachadaRede');
const imagensFotoFachadaRede = document.getElementById('imagensFotoFachadaRede');
const btnFotoChassiLacreLeitumaRede = document.getElementById('btnFotoChassiLacreLeitumaRede');
const textoFotoChassiLacreLeitumaRede = document.getElementById('textoFotoChassiLacreLeitumaRede');
const imagensFotoChassiLacreLeitumaRede = document.getElementById('imagensFotoChassiLacreLeitumaRede');
const btnFotoExecucaoRede = document.getElementById('btnFotoExecucaoRede');
const textoFotoExecucaoRede = document.getElementById('textoFotoExecucaoRede');
const imagensFotoExecucaoRede = document.getElementById('imagensFotoExecucaoRede');
const btnFotoFinalizacaoRede = document.getElementById('btnFotoFinalizacaoRede');
const textoFotoFinalizacaoRede = document.getElementById('textoFotoFinalizacaoRede');
const imagensFotoFinalizacaoRede = document.getElementById('imagensFotoFinalizacaoRede');

// Conferência de Viabilidade - Cavalete
const hrConferenciaViabilidadeCavalete = document.getElementById('hrConferenciaViabilidadeCavalete');
const btnConferenciaViabilidadeCavalete = document.getElementById('btnConferenciaViabilidadeCavalete');
const textoConferenciaViabilidadeCavalete = document.getElementById('textoConferenciaViabilidadeCavalete');
const textoOrientacoesEXOCCavalete = document.getElementById('textoOrientacoesEXOCCavalete');

// Conferência de Viabilidade - Ramal/Rede
const hrConferenciaViabilidadeRamalRede = document.getElementById('hrConferenciaViabilidadeRamalRede');
const btnConferenciaViabilidadeRamalRede = document.getElementById('btnConferenciaViabilidadeRamalRede');
const textoConferenciaViabilidadeRamalRede = document.getElementById('textoConferenciaViabilidadeRamalRede');
const textoOrientacoesEXOCRamalRede = document.getElementById('textoOrientacoesEXOCRamalRede');

// Serviços Posteriores Ramal
const hrServicosPosterioresRamal = document.getElementById('hrServicosPosterioresRamal');
const hrOpcoesPavimentoRamal = document.getElementById('hrOpcoesPavimentoRamal');
const btnServicosPosterioresRamal = document.getElementById('btnServicosPosterioresRamal');

// Pergunta de Escavação Ramal
const textoPerguntaEscavacaoRamal = document.getElementById('textoPerguntaEscavacaoRamal');
const containerEscavacaoRamalSN = document.getElementById('containerEscavacaoRamalSN');
const btnEscavacaoRamalSim = document.getElementById('btnEscavacaoRamalSim');
const btnEscavacaoRamalNao = document.getElementById('btnEscavacaoRamalNao');
const textoPerguntaLocalEscavacaoRamal = document.getElementById('textoPerguntaLocalEscavacaoRamal');
const containerLocalEscavacaoRamal = document.getElementById('containerLocalEscavacaoRamal');
const btnEscavacaoCalcadaRamal = document.getElementById('btnEscavacaoCalcadaRamal');
const btnEscavacaoRuaRamal = document.getElementById('btnEscavacaoRuaRamal');
const textoPerguntaPavimentoCalcadaRamal = document.getElementById('textoPerguntaPavimentoCalcadaRamal');
const containerPavimentoCalcadaRamal = document.getElementById('containerPavimentoCalcadaRamal');
const btnPavimentoConcreteRamal = document.getElementById('btnPavimentoConcreteRamal');
const btnPavimentoCeramicaRamal = document.getElementById('btnPavimentoCeramicaRamal');
const btnPavimentoPedraRamal = document.getElementById('btnPavimentoPedraRamal');
const textoRepavimentacaoSimpleseRamal = document.getElementById('textoRepavimentacaoSimpleseRamal');
const textoRepavimentacaoEspecialRamal = document.getElementById('textoRepavimentacaoEspecialRamal');
const textoRepavimentacaoBlocoRamal = document.getElementById('textoRepavimentacaoBlocoRamal');
const textoPerguntaPavimentoRuaRamal = document.getElementById('textoPerguntaPavimentoRuaRamal');
const containerPavimentoRuaRamal = document.getElementById('containerPavimentoRuaRamal');
const btnPavimentoTerraRamal = document.getElementById('btnPavimentoTerraRamal');
const btnPavimentoConcreteRuaRamal = document.getElementById('btnPavimentoConcreteRuaRamal');
const btnPavimentoAsfaltoRamal = document.getElementById('btnPavimentoAsfaltoRamal');
const textoPerguntaRecorteRamal = document.getElementById('textoPerguntaRecorteRamal');
const containerRecorteRamal = document.getElementById('containerRecorteRamal');
const btnRecorteRamalSim = document.getElementById('btnRecorteRamalSim');
const btnRecorteRamalNao = document.getElementById('btnRecorteRamalNao');
const hrRepavimentacaoAsfaltoRamal = document.getElementById('hrRepavimentacaoAsfaltoRamal');
const textoRepavimentacaoAsfaltoRamal = document.getElementById('textoRepavimentacaoAsfaltoRamal');
const textoReaterroValaRamal = document.getElementById('textoReaterroValaRamal');
const textoReaterroRamal = document.getElementById('textoReaterroRamal');
const textoEncerramentoRamal = document.getElementById('textoEncerramentoRamal');

// Serviços Posteriores Rede
const hrServicosPosterioresRede = document.getElementById('hrServicosPosterioresRede');
const hrOpcoesPavimentoRede = document.getElementById('hrOpcoesPavimentoRede');
const btnServicosPosterioresRede = document.getElementById('btnServicosPosterioresRede');

// Pergunta de Escavação Rede
const textoPerguntaEscavacaoRede = document.getElementById('textoPerguntaEscavacaoRede');
const containerEscavacaoSN = document.getElementById('containerEscavacaoSN');
const btnEscavacaoSim = document.getElementById('btnEscavacaoSim');
const btnEscavacaoNao = document.getElementById('btnEscavacaoNao');
const textoPerguntaLocalEscavacaoRede = document.getElementById('textoPerguntaLocalEscavacaoRede');
const containerLocalEscavacaoRede = document.getElementById('containerLocalEscavacaoRede');
const btnEscavacaoCalcadaRede = document.getElementById('btnEscavacaoCalcadaRede');
const btnEscavacaoRuaRede = document.getElementById('btnEscavacaoRuaRede');
const textoPerguntaPavimentoCalcadaRede = document.getElementById('textoPerguntaPavimentoCalcadaRede');
const containerPavimentoCalcadaRede = document.getElementById('containerPavimentoCalcadaRede');
const btnPavimentoConcreteRede = document.getElementById('btnPavimentoConcreteRede');
const btnPavimentoCeramicaRede = document.getElementById('btnPavimentoCeramicaRede');
const btnPavimentoPedraRede = document.getElementById('btnPavimentoPedraRede');
const textoRepavimentacaoSimpleseRede = document.getElementById('textoRepavimentacaoSimpleseRede');
const textoRepavimentacaoEspecialRede = document.getElementById('textoRepavimentacaoEspecialRede');
const textoRepavimentacaoBlocoRede = document.getElementById('textoRepavimentacaoBlocoRede');
const textoPerguntaPavimentoRuaRede = document.getElementById('textoPerguntaPavimentoRuaRede');
const containerPavimentoRuaRede = document.getElementById('containerPavimentoRuaRede');
const btnPavimentoTerraRede = document.getElementById('btnPavimentoTerraRede');
const btnPavimentoConcreteRuaRede = document.getElementById('btnPavimentoConcreteRuaRede');
const btnPavimentoAsfaltoRede = document.getElementById('btnPavimentoAsfaltoRede');
const textoPerguntaRecorteRede = document.getElementById('textoPerguntaRecorteRede');
const containerRecorteRede = document.getElementById('containerRecorteRede');
const btnRecorteRedeSim = document.getElementById('btnRecorteRedeSim');
const btnRecorteRedeNao = document.getElementById('btnRecorteRedeNao');
const hrRepavimentacaoAsfaltoRede = document.getElementById('hrRepavimentacaoAsfaltoRede');
const textoRepavimentacaoAsfaltoRede = document.getElementById('textoRepavimentacaoAsfaltoRede');
const textoReaterroValaRede = document.getElementById('textoReaterroValaRede');
const textoReaterroRede = document.getElementById('textoReaterroRede');
const textoEncerramentoRede = document.getElementById('textoEncerramentoRede');

// Esconde pergunta e botões de escavação por padrão
if (textoPerguntaEscavacaoRamal) textoPerguntaEscavacaoRamal.style.display = 'none';
if (containerEscavacaoRamalSN) containerEscavacaoRamalSN.style.display = 'none';
if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'none';
if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'none';
if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'none';
if (textoPerguntaEscavacaoRede) textoPerguntaEscavacaoRede.style.display = 'none';
if (containerEscavacaoSN) containerEscavacaoSN.style.display = 'none';
if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'none';
if (containerLocalEscavacaoRede) containerLocalEscavacaoRede.style.display = 'none';
if (textoEncerramentoRede) textoEncerramentoRede.style.display = 'none';

// Hóstia/Obstrutor - Procedimento
const containerProcedimentoHostiaObstrutor = document.getElementById('containerProcedimentoHostiaObstrutor');
const btnProcedimentoHostiaObstrutor = document.getElementById('btnProcedimentoHostiaObstrutor');
const textoProcedimentoHostiaObstrutor = document.getElementById('textoProcedimentoHostiaObstrutor');
const hrPadraoFotosHostiaObstrutor = document.getElementById('hrPadraoFotosHostiaObstrutor');
const btnPadraoFotosHostiaObstrutor = document.getElementById('btnPadraoFotosHostiaObstrutor');
const containerFotosHostiaObstrutor = document.getElementById('containerFotosHostiaObstrutor');
const btnFotoFachadaHostiaObstrutor = document.getElementById('btnFotoFachadaHostiaObstrutor');
const textoFotoFachadaHostiaObstrutor = document.getElementById('textoFotoFachadaHostiaObstrutor');
const imagensFotoFachadaHostiaObstrutor = document.getElementById('imagensFotoFachadaHostiaObstrutor');
const btnFotoChassiLacreLeitumaHostiaObstrutor = document.getElementById('btnFotoChassiLacreLeitumaHostiaObstrutor');
const textoFotoChassiLacreLeitumaHostiaObstrutor = document.getElementById('textoFotoChassiLacreLeitumaHostiaObstrutor');
const imagensFotoChassiLacreLeitumaHostiaObstrutor = document.getElementById('imagensFotoChassiLacreLeitumaHostiaObstrutor');
const btnFotoExecucaoHostiaObstrutor = document.getElementById('btnFotoExecucaoHostiaObstrutor');
const textoFotoExecucaoHostiaObstrutor = document.getElementById('textoFotoExecucaoHostiaObstrutor');
const imagensFotoExecucaoHostiaObstrutor = document.getElementById('imagensFotoExecucaoHostiaObstrutor');

// ======================================
// VARIÁVEIS DE ESTADO
// ======================================

let religacaoAberto = false;
let tipoReligacaoSelecionado = null;
let conferenciaViabilidadeCavaleteAberto = false;
let conferenciaViabilidadeRamalRedeAberto = false;

// ======================================
// EVENT LISTENER: btnReligacao
// ======================================

if (btnReligacao) {
    btnReligacao.addEventListener('click', () => {
        if (!religacaoAberto) {
            // Abrir: Esconde instrução inicial e mostra opções de tipo
            if (instrucaoInicial) {
                instrucaoInicial.style.display = 'none';
            }
            if (textoPerguntaTipoReligacao) {
                textoPerguntaTipoReligacao.style.display = 'block';
            }
            if (containerOpcoesReligacao) {
                containerOpcoesReligacao.style.display = 'flex';
            }
            religacaoAberto = true;
        } else {
            // Fechar: Esconde as opções e mostra instrução inicial
            if (textoPerguntaTipoReligacao) {
                textoPerguntaTipoReligacao.style.display = 'none';
            }
            if (containerOpcoesReligacao) {
                containerOpcoesReligacao.style.display = 'none';
                if (hrReligacaoCavalete) {
                    hrReligacaoCavalete.style.display = 'none';
                }
                if (containerOpcoesReligacaoCavalete) {
                    containerOpcoesReligacaoCavalete.style.display = 'none';
                }
                if (hrReligacaoRamalRede) {
                    hrReligacaoRamalRede.style.display = 'none';
                }
                if (containerOpcoesReligacaoRamalRede) {
                    containerOpcoesReligacaoRamalRede.style.display = 'none';
                }
            }
            if (instrucaoInicial) {
                instrucaoInicial.style.display = 'block';
            }
            resetarTipoReligacao();
            resetarSubtipoReligacao();
            religacaoAberto = false;
        }
    });
}

// ======================================
// FUNÇÕES DE CONTROLE
// ======================================

function resetarTipoReligacao() {
    if (btnReligacaoCavalete) {
        btnReligacaoCavalete.classList.remove('desabilitado');
    }
    if (btnReligacaoRamalRede) {
        btnReligacaoRamalRede.classList.remove('desabilitado');
    }
    tipoReligacaoSelecionado = null;
}

// ======================================
// EVENT LISTENERS: Botões de Tipo de Religação
// ======================================

if (btnReligacaoCavalete) {
    btnReligacaoCavalete.addEventListener('click', () => {
        // Se o botão está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoCavalete.classList.contains('desabilitado') && tipoReligacaoSelecionado !== 'cavalete') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (tipoReligacaoSelecionado === 'cavalete') {
            if (hrReligacaoCavalete) {
                hrReligacaoCavalete.style.display = 'none';
            }
            if (containerOpcoesReligacaoCavalete) {
                containerOpcoesReligacaoCavalete.style.display = 'none';
            }
            resetarSubtipoReligacao();
            resetarTipoReligacao();
            return;
        }

        // Selecionar Cavalete: desabilita Ramal/Rede
        tipoReligacaoSelecionado = 'cavalete';
        if (btnReligacaoRamalRede) {
            btnReligacaoRamalRede.classList.add('desabilitado');
            if (hrReligacaoCavalete) {
                hrReligacaoCavalete.style.display = 'block';
            }
            if (containerOpcoesReligacaoCavalete) {
                containerOpcoesReligacaoCavalete.style.display = 'flex';
            }
            // Mostra botão Conferência de Viabilidade
            if (hrConferenciaViabilidadeCavalete) {
                hrConferenciaViabilidadeCavalete.style.display = 'block';
            }
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'block';
            }
            if (hrReligacaoRamalRede) {
                hrReligacaoRamalRede.style.display = 'none';
            }
            if (containerOpcoesReligacaoRamalRede) {
                containerOpcoesReligacaoRamalRede.style.display = 'none';
            }
            resetarSubtipoReligacao();
        }
    });
}

if (btnReligacaoRamalRede) {
    btnReligacaoRamalRede.addEventListener('click', () => {
        // Se o botão está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoRamalRede.classList.contains('desabilitado') && tipoReligacaoSelecionado !== 'ramalRede') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (tipoReligacaoSelecionado === 'ramalRede') {
            if (hrReligacaoRamalRede) {
                hrReligacaoRamalRede.style.display = 'none';
            }
            if (containerOpcoesReligacaoRamalRede) {
                containerOpcoesReligacaoRamalRede.style.display = 'none';
            }
            resetarSubtipoReligacao();
            resetarTipoReligacao();
            return;
        }

        // Selecionar Ramal/Rede: desabilita Cavalete
        tipoReligacaoSelecionado = 'ramalRede';
        if (btnReligacaoCavalete) {
            btnReligacaoCavalete.classList.add('desabilitado');
            if (hrReligacaoRamalRede) {
                hrReligacaoRamalRede.style.display = 'block';
            }
            if (containerOpcoesReligacaoRamalRede) {
                containerOpcoesReligacaoRamalRede.style.display = 'flex';
            }
            // Mostra botão Conferência de Viabilidade
            if (hrConferenciaViabilidadeRamalRede) {
                hrConferenciaViabilidadeRamalRede.style.display = 'block';
            }
            if (btnConferenciaViabilidadeRamalRede) {
                btnConferenciaViabilidadeRamalRede.style.display = 'block';
            }
            // Garante que ambos os botões apareçam ao abrir
            if (btnReligacaoRamal) {
                btnReligacaoRamal.style.display = 'block';
                btnReligacaoRamal.classList.remove('desabilitado');
            }
            if (btnReligacaoRede) {
                btnReligacaoRede.style.display = 'block';
                btnReligacaoRede.classList.remove('desabilitado');
            }
            if (hrReligacaoCavalete) {
                hrReligacaoCavalete.style.display = 'none';
            }
            if (containerOpcoesReligacaoCavalete) {
                containerOpcoesReligacaoCavalete.style.display = 'none';
            }
            resetarSubtipoReligacao();
        }
    });
}

let subtipoReligacaoCavaleteSelected = null;
let subtipoReligacaoRamalRedeSelected = null;
let procedimentoLISCAberto = false;
let procedimentoAlgemaAberto = false;
let procedimentoHostiaObstrutorAberto = false;
let padraoFotosLISCAberto = false;
let padraoFotosAlgemaAberto = false;
let padraoFotosHostiaObstrutorAberto = false;
let padraoFotosRamalAberto = false;
let padraoFotosRedeAberto = false;
let fotoLISCSelected = null;
let fotoAlgemaSelected = null;
let fotoHostiaObstrutorSelected = null;
let fotoRamalSelected = null;
let fotoRedeSelected = null;
let fotoHostiaObstrutorFachadaAberta = false;
let fotoHostiaObstrutorChassiAberta = false;
let fotoHostiaObstrutorExecucaoAberta = false;
let procedimentoRamalAberto = false;
let procedimentoRedeAberto = false;
let escavacaoRamalSelected = null;
let escavacaoRedeSelected = null;
let localEscavacaoRamalSelected = null;
let localEscavacaoRedeSelected = null;
let pavimentoCalcadaRamalSelected = null;
let pavimentoCalcadaRedeSelected = null;
let pavimentoCalcadaRamalAberto = false;
let pavimentoCalcadaRedeAberto = false;
let pavimentoRuaRamalSelected = null;
let pavimentoRuaRedeSelected = null;
let pavimentoRuaRamalAberto = false;
let pavimentoRuaRedeAberto = false;
let recorteRamalSelected = null;
let recorteRedeSelected = null;
let recorteRamalAberto = false;
let recorteRedeAberto = false;

function resetarSubtipoReligacao() {
    // Reset Cavalete - Remove desabilitado e garante visibilidade
    if (btnReligacaoLISC) {
        btnReligacaoLISC.classList.remove('desabilitado');
        btnReligacaoLISC.style.display = 'block';
    }
    if (btnReligacaoAlgema) {
        btnReligacaoAlgema.classList.remove('desabilitado');
        btnReligacaoAlgema.style.display = 'block';
    }
    if (btnReligacaoHostiaObstrutor) {
        btnReligacaoHostiaObstrutor.classList.remove('desabilitado');
        btnReligacaoHostiaObstrutor.style.display = 'block';
    }
    subtipoReligacaoCavaleteSelected = null;

    // Reset Container Procedimento LISC (esconder o container inteiro)
    if (containerProcedimentoLISC) {
        containerProcedimentoLISC.style.display = 'none';
    }

    // Reset Procedimento LISC
    procedimentoLISCAberto = false;
    if (textoProcedimentoLISC) {
        textoProcedimentoLISC.style.display = 'none';
    }
    if (hrPadraoFotosLISC) {
        hrPadraoFotosLISC.style.display = 'none';
    }
    if (btnPadraoFotosLISC) {
        btnPadraoFotosLISC.style.display = 'none';
    }

    // Reset Fotos LISC
    padraoFotosLISCAberto = false;
    fotoLISCSelected = null;
    if (containerFotosLISC) {
        containerFotosLISC.style.display = 'none';
    }
    if (btnFotoFachadaLISC) btnFotoFachadaLISC.classList.remove('desabilitado');
    if (textoFotoFachadaLISC) textoFotoFachadaLISC.style.display = 'none';
    if (imagensFotoFachadaLISC) imagensFotoFachadaLISC.style.display = 'none';
    if (btnFotoChassiLacreLeitumaLISC) btnFotoChassiLacreLeitumaLISC.classList.remove('desabilitado');
    if (textoFotoChassiLacreLeitumaLISC) textoFotoChassiLacreLeitumaLISC.style.display = 'none';
    if (imagensFotoChassiLacreLeitumaLISC) imagensFotoChassiLacreLeitumaLISC.style.display = 'none';
    if (btnFotoExecucaoLISC) btnFotoExecucaoLISC.classList.remove('desabilitado');
    if (textoFotoExecucaoLISC) textoFotoExecucaoLISC.style.display = 'none';
    if (imagensFotoExecucaoLISC) imagensFotoExecucaoLISC.style.display = 'none';

    // Reset Container Procedimento Algema
    if (containerProcedimentoAlgema) {
        containerProcedimentoAlgema.style.display = 'none';
    }
    procedimentoAlgemaAberto = false;
    if (textoProcedimentoAlgema) {
        textoProcedimentoAlgema.style.display = 'none';
    }
    if (hrPadraoFotosAlgema) {
        hrPadraoFotosAlgema.style.display = 'none';
    }
    if (btnPadraoFotosAlgema) {
        btnPadraoFotosAlgema.style.display = 'none';
    }

    // Reset Fotos Algema
    padraoFotosAlgemaAberto = false;
    fotoAlgemaSelected = null;
    if (containerFotosAlgema) {
        containerFotosAlgema.style.display = 'none';
    }
    if (btnFotoFachadaAlgema) btnFotoFachadaAlgema.classList.remove('desabilitado');
    if (textoFotoFachadaAlgema) textoFotoFachadaAlgema.style.display = 'none';
    if (imagensFotoFachadaAlgema) imagensFotoFachadaAlgema.style.display = 'none';
    if (btnFotoChassiLacreLeitumaAlgema) btnFotoChassiLacreLeitumaAlgema.classList.remove('desabilitado');
    if (textoFotoChassiLacreLeitumaAlgema) textoFotoChassiLacreLeitumaAlgema.style.display = 'none';
    if (imagensFotoChassiLacreLeitumaAlgema) imagensFotoChassiLacreLeitumaAlgema.style.display = 'none';
    if (btnFotoExecucaoAlgema) btnFotoExecucaoAlgema.classList.remove('desabilitado');
    if (textoFotoExecucaoAlgema) textoFotoExecucaoAlgema.style.display = 'none';
    if (imagensFotoExecucaoAlgema) imagensFotoExecucaoAlgema.style.display = 'none';

    // Reset Ramal/Rede
    if (btnReligacaoRamal) btnReligacaoRamal.classList.remove('desabilitado');
    if (btnReligacaoRede) btnReligacaoRede.classList.remove('desabilitado');
    subtipoReligacaoRamalRedeSelected = null;

    // Reset Container Procedimento Hóstia/Obstrutor
    if (containerProcedimentoHostiaObstrutor) {
        containerProcedimentoHostiaObstrutor.style.display = 'none';
    }
    procedimentoHostiaObstrutorAberto = false;
    if (textoProcedimentoHostiaObstrutor) {
        textoProcedimentoHostiaObstrutor.style.display = 'none';
    }
    if (hrPadraoFotosHostiaObstrutor) {
        hrPadraoFotosHostiaObstrutor.style.display = 'none';
    }
    if (btnPadraoFotosHostiaObstrutor) {
        btnPadraoFotosHostiaObstrutor.style.display = 'none';
    }

    // Reset Fotos Hóstia/Obstrutor
    padraoFotosHostiaObstrutorAberto = false;
    fotoHostiaObstrutorSelected = null;
    if (containerFotosHostiaObstrutor) {
        containerFotosHostiaObstrutor.style.display = 'none';
    }
    if (btnFotoFachadaHostiaObstrutor) btnFotoFachadaHostiaObstrutor.classList.remove('desabilitado');
    if (textoFotoFachadaHostiaObstrutor) textoFotoFachadaHostiaObstrutor.style.display = 'none';
    if (imagensFotoFachadaHostiaObstrutor) imagensFotoFachadaHostiaObstrutor.style.display = 'none';
    if (btnFotoChassiLacreLeitumaHostiaObstrutor) btnFotoChassiLacreLeitumaHostiaObstrutor.classList.remove('desabilitado');
    if (textoFotoChassiLacreLeitumaHostiaObstrutor) textoFotoChassiLacreLeitumaHostiaObstrutor.style.display = 'none';
    if (imagensFotoChassiLacreLeitumaHostiaObstrutor) imagensFotoChassiLacreLeitumaHostiaObstrutor.style.display = 'none';
    if (btnFotoExecucaoHostiaObstrutor) btnFotoExecucaoHostiaObstrutor.classList.remove('desabilitado');
    if (textoFotoExecucaoHostiaObstrutor) textoFotoExecucaoHostiaObstrutor.style.display = 'none';
    if (imagensFotoExecucaoHostiaObstrutor) imagensFotoExecucaoHostiaObstrutor.style.display = 'none';

    // Reset Container Procedimento Ramal
    if (containerProcedimentoRamal) {
        containerProcedimentoRamal.style.display = 'none';
    }
    procedimentoRamalAberto = false;
    if (textoProcedimentoRamal) {
        textoProcedimentoRamal.style.display = 'none';
    }
    if (hrPadraoFotosRamal) {
        hrPadraoFotosRamal.style.display = 'none';
    }
    if (btnPadraoFotosRamal) {
        btnPadraoFotosRamal.style.display = 'none';
    }
    if (hrServicosPosterioresRamal) {
        hrServicosPosterioresRamal.style.display = 'none';
    }
    if (btnServicosPosterioresRamal) {
        btnServicosPosterioresRamal.style.display = 'none';
    }

    // Reset Fotos Ramal
    padraoFotosRamalAberto = false;
    if (textoPerguntaEscavacaoRamal) {
        textoPerguntaEscavacaoRamal.style.display = 'none';
    }
    if (containerEscavacaoRamalSN) {
        containerEscavacaoRamalSN.style.display = 'none';
    }
    if (btnEscavacaoRamalSim) {
        btnEscavacaoRamalSim.classList.remove('desabilitado');
    }
    if (btnEscavacaoRamalNao) {
        btnEscavacaoRamalNao.classList.remove('desabilitado');
    }
    if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'none';
    if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'none';
    if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'none';
    localEscavacaoRamalSelected = null;
    escavacaoRamalSelected = null;
    fotoRamalSelected = null;
    if (containerFotosRamal) {
        containerFotosRamal.style.display = 'none';
    }
    if (btnFotoFachadaRamal) btnFotoFachadaRamal.classList.remove('desabilitado');
    if (textoFotoFachadaRamal) textoFotoFachadaRamal.style.display = 'none';
    if (imagensFotoFachadaRamal) imagensFotoFachadaRamal.style.display = 'none';
    if (btnFotoChassiLacreLeitumaRamal) btnFotoChassiLacreLeitumaRamal.classList.remove('desabilitado');
    if (textoFotoChassiLacreLeitumaRamal) textoFotoChassiLacreLeitumaRamal.style.display = 'none';
    if (imagensFotoChassiLacreLeitumaRamal) imagensFotoChassiLacreLeitumaRamal.style.display = 'none';
    if (btnFotoExecucaoRamal) btnFotoExecucaoRamal.classList.remove('desabilitado');
    if (textoFotoExecucaoRamal) textoFotoExecucaoRamal.style.display = 'none';
    if (imagensFotoExecucaoRamal) imagensFotoExecucaoRamal.style.display = 'none';

    // Reset Container Procedimento Rede
    if (containerProcedimentoRede) {
        containerProcedimentoRede.style.display = 'none';
    }
    procedimentoRedeAberto = false;
    if (textoProcedimentoRede) {
        textoProcedimentoRede.style.display = 'none';
    }
    if (hrPadraoFotosRede) {
        hrPadraoFotosRede.style.display = 'none';
    }
    if (btnPadraoFotosRede) {
        btnPadraoFotosRede.style.display = 'none';
    }
    if (hrServicosPosterioresRede) {
        hrServicosPosterioresRede.style.display = 'none';
    }
    if (btnServicosPosterioresRede) {
        // Reset Pergunta de Escavação Rede
        btnServicosPosterioresRede.style.display = 'none';
    }

    // Reset Fotos Rede
    padraoFotosRedeAberto = false;
    fotoRedeSelected = null;
    if (containerFotosRede) {
        containerFotosRede.style.display = 'none';
    }
    if (btnFotoFachadaRede) btnFotoFachadaRede.classList.remove('desabilitado');
    if (textoFotoFachadaRede) textoFotoFachadaRede.style.display = 'none';
    if (imagensFotoFachadaRede) imagensFotoFachadaRede.style.display = 'none';
    if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.remove('desabilitado');
    if (textoFotoChassiLacreLeitumaRede) textoFotoChassiLacreLeitumaRede.style.display = 'none';
    if (imagensFotoChassiLacreLeitumaRede) imagensFotoChassiLacreLeitumaRede.style.display = 'none';
    if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.remove('desabilitado');
    if (textoFotoExecucaoRede) textoFotoExecucaoRede.style.display = 'none';
    if (imagensFotoExecucaoRede) imagensFotoExecucaoRede.style.display = 'none';

    // Reset Serviços Posteriores
    if (hrServicosPosterioresRamal) {
        hrServicosPosterioresRamal.style.display = 'none';
    }
    if (btnServicosPosterioresRamal) {
        btnServicosPosterioresRamal.style.display = 'none';
    }
    if (hrServicosPosterioresRede) {
        hrServicosPosterioresRede.style.display = 'none';
    }
    if (btnServicosPosterioresRede) {
        btnServicosPosterioresRede.style.display = 'none';
    }

    // Reset Pergunta de Escavação Rede
    if (textoPerguntaEscavacaoRede) {
        textoPerguntaEscavacaoRede.style.display = 'none';
    }
    if (containerEscavacaoSN) {
        containerEscavacaoSN.style.display = 'none';
    }
    if (btnEscavacaoSim) {
        btnEscavacaoSim.classList.remove('desabilitado');
    }
    if (btnEscavacaoNao) {
        btnEscavacaoNao.classList.remove('desabilitado');
    }
    escavacaoRedeSelected = null;
}

// ======================================
// EVENT LISTENERS: Subtipos - Cavalete (LISC, Algema, Hóstia/Obstrutor)
// ======================================

if (btnReligacaoLISC) {
    btnReligacaoLISC.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoLISC.classList.contains('desabilitado') && subtipoReligacaoCavaleteSelected !== 'lisc') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (subtipoReligacaoCavaleteSelected === 'lisc') {
            if (btnReligacaoAlgema) {
                btnReligacaoAlgema.classList.remove('desabilitado');
                btnReligacaoAlgema.style.display = 'block';
            }
            if (btnReligacaoHostiaObstrutor) {
                btnReligacaoHostiaObstrutor.classList.remove('desabilitado');
                btnReligacaoHostiaObstrutor.style.display = 'block';
            }
            if (containerProcedimentoLISC) containerProcedimentoLISC.style.display = 'none';
            subtipoReligacaoCavaleteSelected = null;
            return;
        }

        // Selecionar LISC: desabilita e oculta outros botões, mostra procedimento
        subtipoReligacaoCavaleteSelected = 'lisc';
        if (btnReligacaoAlgema) {
            btnReligacaoAlgema.classList.add('desabilitado');
            btnReligacaoAlgema.style.display = 'none';
        }
        if (btnReligacaoHostiaObstrutor) {
            btnReligacaoHostiaObstrutor.classList.add('desabilitado');
            btnReligacaoHostiaObstrutor.style.display = 'none';
        }
        if (containerProcedimentoLISC) containerProcedimentoLISC.style.display = 'flex';
    });
}

if (btnReligacaoAlgema) {
    btnReligacaoAlgema.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoAlgema.classList.contains('desabilitado') && subtipoReligacaoCavaleteSelected !== 'algema') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (subtipoReligacaoCavaleteSelected === 'algema') {
            if (btnReligacaoLISC) {
                btnReligacaoLISC.classList.remove('desabilitado');
                btnReligacaoLISC.style.display = 'block';
            }
            if (btnReligacaoHostiaObstrutor) {
                btnReligacaoHostiaObstrutor.classList.remove('desabilitado');
                btnReligacaoHostiaObstrutor.style.display = 'block';
            }
            if (containerProcedimentoAlgema) containerProcedimentoAlgema.style.display = 'none';
            subtipoReligacaoCavaleteSelected = null;
            return;
        }

        // Selecionar Algema: desabilita e oculta outros botões, mostra procedimento
        subtipoReligacaoCavaleteSelected = 'algema';
        if (btnReligacaoLISC) {
            btnReligacaoLISC.classList.add('desabilitado');
            btnReligacaoLISC.style.display = 'none';
        }
        if (btnReligacaoHostiaObstrutor) {
            btnReligacaoHostiaObstrutor.classList.add('desabilitado');
            btnReligacaoHostiaObstrutor.style.display = 'none';
        }
        if (containerProcedimentoAlgema) containerProcedimentoAlgema.style.display = 'flex';
    });
}

if (btnReligacaoHostiaObstrutor) {
    btnReligacaoHostiaObstrutor.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoHostiaObstrutor.classList.contains('desabilitado') && subtipoReligacaoCavaleteSelected !== 'hostia') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (subtipoReligacaoCavaleteSelected === 'hostia') {
            if (btnReligacaoLISC) {
                btnReligacaoLISC.classList.remove('desabilitado');
                btnReligacaoLISC.style.display = 'block';
            }
            if (btnReligacaoAlgema) {
                btnReligacaoAlgema.classList.remove('desabilitado');
                btnReligacaoAlgema.style.display = 'block';
            }
            if (containerProcedimentoHostiaObstrutor) containerProcedimentoHostiaObstrutor.style.display = 'none';
            subtipoReligacaoCavaleteSelected = null;
            return;
        }

        // Selecionar Hóstia/Obstrutor: desabilita e oculta outros botões, mostra procedimento
        subtipoReligacaoCavaleteSelected = 'hostia';
        if (btnReligacaoLISC) {
            btnReligacaoLISC.classList.add('desabilitado');
            btnReligacaoLISC.style.display = 'none';
        }
        if (btnReligacaoAlgema) {
            btnReligacaoAlgema.classList.add('desabilitado');
            btnReligacaoAlgema.style.display = 'none';
        }
        if (containerProcedimentoHostiaObstrutor) containerProcedimentoHostiaObstrutor.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENERS: Subtipos - Ramal/Rede (Ramal, Rede)
// ======================================

if (btnReligacaoRamal) {
    btnReligacaoRamal.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoRamal.classList.contains('desabilitado') && subtipoReligacaoRamalRedeSelected !== 'ramal') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (subtipoReligacaoRamalRedeSelected === 'ramal') {
            if (btnReligacaoRede) {
                btnReligacaoRede.classList.remove('desabilitado');
                btnReligacaoRede.style.display = 'block';
            }
            if (containerProcedimentoRamal) containerProcedimentoRamal.style.display = 'none';
            resetarSubtipoReligacao();
            subtipoReligacaoRamalRedeSelected = null;
            return;
        }

        // Selecionar Ramal: esconde Rede
        resetarSubtipoReligacao();
        subtipoReligacaoRamalRedeSelected = 'ramal';
        if (btnReligacaoRede) {
            btnReligacaoRede.classList.add('desabilitado');
            btnReligacaoRede.style.display = 'none';
        }
        if (containerProcedimentoRamal) containerProcedimentoRamal.style.display = 'flex';
    });
}

if (btnReligacaoRede) {
    btnReligacaoRede.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnReligacaoRede.classList.contains('desabilitado') && subtipoReligacaoRamalRedeSelected !== 'rede') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (subtipoReligacaoRamalRedeSelected === 'rede') {
            if (btnReligacaoRamal) {
                btnReligacaoRamal.classList.remove('desabilitado');
                btnReligacaoRamal.style.display = 'block';
            }
            if (containerProcedimentoRede) containerProcedimentoRede.style.display = 'none';
            resetarSubtipoReligacao();
            subtipoReligacaoRamalRedeSelected = null;
            return;
        }

        // Selecionar Rede: esconde Ramal
        resetarSubtipoReligacao();
        subtipoReligacaoRamalRedeSelected = 'rede';
        if (btnReligacaoRamal) {
            btnReligacaoRamal.classList.add('desabilitado');
            btnReligacaoRamal.style.display = 'none';
        }
        if (containerProcedimentoRede) containerProcedimentoRede.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Procedimento LISC
// ======================================

if (btnProcedimentoLISC) {
    btnProcedimentoLISC.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnProcedimentoLISC.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder o texto do procedimento
        procedimentoLISCAberto = !procedimentoLISCAberto;

        if (procedimentoLISCAberto) {
            // Mostrar texto e padrão de fotos
            if (textoProcedimentoLISC) {
                textoProcedimentoLISC.style.display = 'block';
            }
            if (hrPadraoFotosLISC) {
                hrPadraoFotosLISC.style.display = 'block';
            }
            if (btnPadraoFotosLISC) {
                btnPadraoFotosLISC.style.display = 'block';
            }
            // Ocultar botão e conteúdo de Conferência de Viabilidade
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'none';
            }
            if (textoConferenciaViabilidadeCavalete) {
                textoConferenciaViabilidadeCavalete.style.display = 'none';
            }
            if (textoOrientacoesEXOCCavalete) {
                textoOrientacoesEXOCCavalete.style.display = 'none';
            }
            conferenciaViabilidadeCavaleteAberto = false;
        } else {
            // Esconder texto e padrão de fotos
            if (textoProcedimentoLISC) {
                textoProcedimentoLISC.style.display = 'none';
            }
            if (hrPadraoFotosLISC) {
                hrPadraoFotosLISC.style.display = 'none';
            }
            if (btnPadraoFotosLISC) {
                btnPadraoFotosLISC.style.display = 'none';
            }
            // Mostrar botão Conferência de Viabilidade novamente
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'block';
            }
        }
    });
}

// ======================================
// EVENT LISTENER: Procedimento Algema
// ======================================

if (btnProcedimentoAlgema) {
    btnProcedimentoAlgema.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnProcedimentoAlgema.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder o texto do procedimento
        procedimentoAlgemaAberto = !procedimentoAlgemaAberto;

        if (procedimentoAlgemaAberto) {
            // Mostrar texto e padrão de fotos
            if (textoProcedimentoAlgema) {
                textoProcedimentoAlgema.style.display = 'block';
            }
            if (hrPadraoFotosAlgema) {
                hrPadraoFotosAlgema.style.display = 'block';
            }
            if (btnPadraoFotosAlgema) {
                btnPadraoFotosAlgema.style.display = 'block';
            }
            // Ocultar botão e conteúdo de Conferência de Viabilidade
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'none';
            }
            if (textoConferenciaViabilidadeCavalete) {
                textoConferenciaViabilidadeCavalete.style.display = 'none';
            }
            if (textoOrientacoesEXOCCavalete) {
                textoOrientacoesEXOCCavalete.style.display = 'none';
            }
            conferenciaViabilidadeCavaleteAberto = false;
        } else {
            // Esconder texto e padrão de fotos
            if (textoProcedimentoAlgema) {
                textoProcedimentoAlgema.style.display = 'none';
            }
            if (hrPadraoFotosAlgema) {
                hrPadraoFotosAlgema.style.display = 'none';
            }
            if (btnPadraoFotosAlgema) {
                btnPadraoFotosAlgema.style.display = 'none';
            }
            // Mostrar botão Conferência de Viabilidade novamente
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'block';
            }
        }
    });
}

// ======================================
// EVENT LISTENER: Padrão de Fotos Algema
// ======================================

if (btnPadraoFotosAlgema) {
    btnPadraoFotosAlgema.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnPadraoFotosAlgema.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder container de fotos
        padraoFotosAlgemaAberto = !padraoFotosAlgemaAberto;

        if (padraoFotosAlgemaAberto) {
            // Mostrar container de fotos
            if (containerFotosAlgema) {
                containerFotosAlgema.style.display = 'flex';
            }
        } else {
            // Esconder container de fotos e resetar seleção
            if (containerFotosAlgema) {
                containerFotosAlgema.style.display = 'none';
            }
            fotoAlgemaSelected = null;
            if (btnFotoFachadaAlgema) btnFotoFachadaAlgema.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaAlgema) btnFotoChassiLacreLeitumaAlgema.classList.remove('desabilitado');
            if (btnFotoExecucaoAlgema) btnFotoExecucaoAlgema.classList.remove('desabilitado');
        }
    });
}

// ======================================
// EVENT LISTENERS: Fotos Algema
// ======================================

if (btnFotoFachadaAlgema) {
    btnFotoFachadaAlgema.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoFachadaAlgema.classList.contains('desabilitado') && fotoAlgemaSelected !== 'fachada') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoAlgemaSelected === 'fachada') {
            if (btnFotoChassiLacreLeitumaAlgema) btnFotoChassiLacreLeitumaAlgema.classList.remove('desabilitado');
            if (btnFotoExecucaoAlgema) btnFotoExecucaoAlgema.classList.remove('desabilitado');
            if (textoFotoFachadaAlgema) textoFotoFachadaAlgema.style.display = 'none';
            if (imagensFotoFachadaAlgema) imagensFotoFachadaAlgema.style.display = 'none';
            fotoAlgemaSelected = null;
            return;
        }

        // Selecionar Fachada: desabilita outros e mostra conteúdo
        fotoAlgemaSelected = 'fachada';
        if (btnFotoChassiLacreLeitumaAlgema) btnFotoChassiLacreLeitumaAlgema.classList.add('desabilitado');
        if (btnFotoExecucaoAlgema) btnFotoExecucaoAlgema.classList.add('desabilitado');
        if (textoFotoFachadaAlgema) textoFotoFachadaAlgema.style.display = 'block';
        if (imagensFotoFachadaAlgema) imagensFotoFachadaAlgema.style.display = 'flex';
    });
}

if (btnFotoChassiLacreLeitumaAlgema) {
    btnFotoChassiLacreLeitumaAlgema.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoChassiLacreLeitumaAlgema.classList.contains('desabilitado') && fotoAlgemaSelected !== 'chassiLacreLeitura') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoAlgemaSelected === 'chassiLacreLeitura') {
            if (btnFotoFachadaAlgema) btnFotoFachadaAlgema.classList.remove('desabilitado');
            if (btnFotoExecucaoAlgema) btnFotoExecucaoAlgema.classList.remove('desabilitado');
            if (textoFotoChassiLacreLeitumaAlgema) textoFotoChassiLacreLeitumaAlgema.style.display = 'none';
            if (imagensFotoChassiLacreLeitumaAlgema) imagensFotoChassiLacreLeitumaAlgema.style.display = 'none';
            fotoAlgemaSelected = null;
            return;
        }

        // Selecionar Chassi, Lacre e Leitura: desabilita outros e mostra conteúdo
        fotoAlgemaSelected = 'chassiLacreLeitura';
        if (btnFotoFachadaAlgema) btnFotoFachadaAlgema.classList.add('desabilitado');
        if (btnFotoExecucaoAlgema) btnFotoExecucaoAlgema.classList.add('desabilitado');
        if (textoFotoChassiLacreLeitumaAlgema) textoFotoChassiLacreLeitumaAlgema.style.display = 'block';
        if (imagensFotoChassiLacreLeitumaAlgema) imagensFotoChassiLacreLeitumaAlgema.style.display = 'flex';
    });
}

if (btnFotoExecucaoAlgema) {
    btnFotoExecucaoAlgema.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoExecucaoAlgema.classList.contains('desabilitado') && fotoAlgemaSelected !== 'execucao') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoAlgemaSelected === 'execucao') {
            if (btnFotoFachadaAlgema) btnFotoFachadaAlgema.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaAlgema) btnFotoChassiLacreLeitumaAlgema.classList.remove('desabilitado');
            if (textoFotoExecucaoAlgema) textoFotoExecucaoAlgema.style.display = 'none';
            if (imagensFotoExecucaoAlgema) imagensFotoExecucaoAlgema.style.display = 'none';
            fotoAlgemaSelected = null;
            return;
        }

        // Selecionar Execução: desabilita outros e mostra conteúdo
        fotoAlgemaSelected = 'execucao';
        if (btnFotoFachadaAlgema) btnFotoFachadaAlgema.classList.add('desabilitado');
        if (btnFotoChassiLacreLeitumaAlgema) btnFotoChassiLacreLeitumaAlgema.classList.add('desabilitado');
        if (textoFotoExecucaoAlgema) textoFotoExecucaoAlgema.style.display = 'block';
        if (imagensFotoExecucaoAlgema) imagensFotoExecucaoAlgema.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Padrão de Fotos LISC
// ======================================

if (btnPadraoFotosLISC) {
    btnPadraoFotosLISC.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnPadraoFotosLISC.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder container de fotos
        padraoFotosLISCAberto = !padraoFotosLISCAberto;

        if (padraoFotosLISCAberto) {
            // Mostrar container de fotos
            if (containerFotosLISC) {
                containerFotosLISC.style.display = 'flex';
            }
        } else {
            // Esconder container de fotos e resetar seleção
            if (containerFotosLISC) {
                containerFotosLISC.style.display = 'none';
            }
            fotoLISCSelected = null;
            if (btnFotoFachadaLISC) btnFotoFachadaLISC.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaLISC) btnFotoChassiLacreLeitumaLISC.classList.remove('desabilitado');
            if (btnFotoExecucaoLISC) btnFotoExecucaoLISC.classList.remove('desabilitado');
        }
    });
}

// ======================================
// EVENT LISTENERS: Fotos LISC
// ======================================

if (btnFotoFachadaLISC) {
    btnFotoFachadaLISC.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoFachadaLISC.classList.contains('desabilitado') && fotoLISCSelected !== 'fachada') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoLISCSelected === 'fachada') {
            if (btnFotoChassiLacreLeitumaLISC) btnFotoChassiLacreLeitumaLISC.classList.remove('desabilitado');
            if (btnFotoExecucaoLISC) btnFotoExecucaoLISC.classList.remove('desabilitado');
            if (textoFotoFachadaLISC) textoFotoFachadaLISC.style.display = 'none';
            if (imagensFotoFachadaLISC) imagensFotoFachadaLISC.style.display = 'none';
            fotoLISCSelected = null;
            return;
        }

        // Selecionar Fachada: desabilita outros e mostra conteúdo
        fotoLISCSelected = 'fachada';
        if (btnFotoChassiLacreLeitumaLISC) btnFotoChassiLacreLeitumaLISC.classList.add('desabilitado');
        if (btnFotoExecucaoLISC) btnFotoExecucaoLISC.classList.add('desabilitado');
        if (textoFotoFachadaLISC) textoFotoFachadaLISC.style.display = 'block';
        if (imagensFotoFachadaLISC) imagensFotoFachadaLISC.style.display = 'flex';
    });
}

if (btnFotoChassiLacreLeitumaLISC) {
    btnFotoChassiLacreLeitumaLISC.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoChassiLacreLeitumaLISC.classList.contains('desabilitado') && fotoLISCSelected !== 'chassiLacreLeitura') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoLISCSelected === 'chassiLacreLeitura') {
            if (btnFotoFachadaLISC) btnFotoFachadaLISC.classList.remove('desabilitado');
            if (btnFotoExecucaoLISC) btnFotoExecucaoLISC.classList.remove('desabilitado');
            if (textoFotoChassiLacreLeitumaLISC) textoFotoChassiLacreLeitumaLISC.style.display = 'none';
            if (imagensFotoChassiLacreLeitumaLISC) imagensFotoChassiLacreLeitumaLISC.style.display = 'none';
            fotoLISCSelected = null;
            return;
        }

        // Selecionar Chassi, Lacre e Leitura: desabilita outros e mostra conteúdo
        fotoLISCSelected = 'chassiLacreLeitura';
        if (btnFotoFachadaLISC) btnFotoFachadaLISC.classList.add('desabilitado');
        if (btnFotoExecucaoLISC) btnFotoExecucaoLISC.classList.add('desabilitado');
        if (textoFotoChassiLacreLeitumaLISC) textoFotoChassiLacreLeitumaLISC.style.display = 'block';
        if (imagensFotoChassiLacreLeitumaLISC) imagensFotoChassiLacreLeitumaLISC.style.display = 'flex';
    });
}

if (btnFotoExecucaoLISC) {
    btnFotoExecucaoLISC.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoExecucaoLISC.classList.contains('desabilitado') && fotoLISCSelected !== 'execucao') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoLISCSelected === 'execucao') {
            if (btnFotoFachadaLISC) btnFotoFachadaLISC.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaLISC) btnFotoChassiLacreLeitumaLISC.classList.remove('desabilitado');
            if (textoFotoExecucaoLISC) textoFotoExecucaoLISC.style.display = 'none';
            if (imagensFotoExecucaoLISC) imagensFotoExecucaoLISC.style.display = 'none';
            fotoLISCSelected = null;
            return;
        }

        // Selecionar Execução: desabilita outros e mostra conteúdo
        fotoLISCSelected = 'execucao';
        if (btnFotoFachadaLISC) btnFotoFachadaLISC.classList.add('desabilitado');
        if (btnFotoChassiLacreLeitumaLISC) btnFotoChassiLacreLeitumaLISC.classList.add('desabilitado');
        if (textoFotoExecucaoLISC) textoFotoExecucaoLISC.style.display = 'block';
        if (imagensFotoExecucaoLISC) imagensFotoExecucaoLISC.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Procedimento Hóstia/Obstrutor
// ======================================

if (btnProcedimentoHostiaObstrutor) {
    btnProcedimentoHostiaObstrutor.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnProcedimentoHostiaObstrutor.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder o texto do procedimento
        procedimentoHostiaObstrutorAberto = !procedimentoHostiaObstrutorAberto;

        if (procedimentoHostiaObstrutorAberto) {
            // Mostrar texto e padrão de fotos
            if (textoProcedimentoHostiaObstrutor) {
                textoProcedimentoHostiaObstrutor.style.display = 'block';
            }
            if (hrPadraoFotosHostiaObstrutor) {
                hrPadraoFotosHostiaObstrutor.style.display = 'block';
            }
            if (btnPadraoFotosHostiaObstrutor) {
                btnPadraoFotosHostiaObstrutor.style.display = 'block';
            }
            // Ocultar botão e conteúdo de Conferência de Viabilidade
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'none';
            }
            if (textoConferenciaViabilidadeCavalete) {
                textoConferenciaViabilidadeCavalete.style.display = 'none';
            }
            if (textoOrientacoesEXOCCavalete) {
                textoOrientacoesEXOCCavalete.style.display = 'none';
            }
            conferenciaViabilidadeCavaleteAberto = false;
        } else {
            // Esconder texto e padrão de fotos
            if (textoProcedimentoHostiaObstrutor) {
                textoProcedimentoHostiaObstrutor.style.display = 'none';
            }
            if (hrPadraoFotosHostiaObstrutor) {
                hrPadraoFotosHostiaObstrutor.style.display = 'none';
            }
            if (btnPadraoFotosHostiaObstrutor) {
                btnPadraoFotosHostiaObstrutor.style.display = 'none';
            }
            // Mostrar botão Conferência de Viabilidade novamente
            if (btnConferenciaViabilidadeCavalete) {
                btnConferenciaViabilidadeCavalete.style.display = 'block';
            }
        }
    });
}

// ======================================
// EVENT LISTENER: Padrão de Fotos Hóstia/Obstrutor
// ======================================

if (btnPadraoFotosHostiaObstrutor) {
    btnPadraoFotosHostiaObstrutor.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnPadraoFotosHostiaObstrutor.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder container de fotos
        padraoFotosHostiaObstrutorAberto = !padraoFotosHostiaObstrutorAberto;

        if (padraoFotosHostiaObstrutorAberto) {
            // Mostrar container de fotos
            if (containerFotosHostiaObstrutor) {
                containerFotosHostiaObstrutor.style.display = 'flex';
            }
        } else {
            // Esconder container de fotos e resetar seleção
            if (containerFotosHostiaObstrutor) {
                containerFotosHostiaObstrutor.style.display = 'none';
            }
            fotoHostiaObstrutorSelected = null;
            if (btnFotoFachadaHostiaObstrutor) btnFotoFachadaHostiaObstrutor.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaHostiaObstrutor) btnFotoChassiLacreLeitumaHostiaObstrutor.classList.remove('desabilitado');
            if (btnFotoExecucaoHostiaObstrutor) btnFotoExecucaoHostiaObstrutor.classList.remove('desabilitado');
        }
    });
}

// ======================================
// EVENT LISTENERS: Fotos Hóstia/Obstrutor
// ======================================

if (btnFotoFachadaHostiaObstrutor) {
    btnFotoFachadaHostiaObstrutor.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoFachadaHostiaObstrutor.classList.contains('desabilitado') && fotoHostiaObstrutorSelected !== 'fachada') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoHostiaObstrutorSelected === 'fachada') {
            if (btnFotoChassiLacreLeitumaHostiaObstrutor) btnFotoChassiLacreLeitumaHostiaObstrutor.classList.remove('desabilitado');
            if (btnFotoExecucaoHostiaObstrutor) btnFotoExecucaoHostiaObstrutor.classList.remove('desabilitado');
            if (textoFotoFachadaHostiaObstrutor) textoFotoFachadaHostiaObstrutor.style.display = 'none';
            if (imagensFotoFachadaHostiaObstrutor) imagensFotoFachadaHostiaObstrutor.style.display = 'none';
            fotoHostiaObstrutorSelected = null;
            return;
        }

        // Selecionar Fachada: desabilita outros e mostra conteúdo
        fotoHostiaObstrutorSelected = 'fachada';
        if (btnFotoChassiLacreLeitumaHostiaObstrutor) btnFotoChassiLacreLeitumaHostiaObstrutor.classList.add('desabilitado');
        if (btnFotoExecucaoHostiaObstrutor) btnFotoExecucaoHostiaObstrutor.classList.add('desabilitado');
        if (textoFotoFachadaHostiaObstrutor) textoFotoFachadaHostiaObstrutor.style.display = 'block';
        if (imagensFotoFachadaHostiaObstrutor) imagensFotoFachadaHostiaObstrutor.style.display = 'flex';
    });
}

if (btnFotoChassiLacreLeitumaHostiaObstrutor) {
    btnFotoChassiLacreLeitumaHostiaObstrutor.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoChassiLacreLeitumaHostiaObstrutor.classList.contains('desabilitado') && fotoHostiaObstrutorSelected !== 'chassiLacreLeitura') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoHostiaObstrutorSelected === 'chassiLacreLeitura') {
            if (btnFotoFachadaHostiaObstrutor) btnFotoFachadaHostiaObstrutor.classList.remove('desabilitado');
            if (btnFotoExecucaoHostiaObstrutor) btnFotoExecucaoHostiaObstrutor.classList.remove('desabilitado');
            if (textoFotoChassiLacreLeitumaHostiaObstrutor) textoFotoChassiLacreLeitumaHostiaObstrutor.style.display = 'none';
            if (imagensFotoChassiLacreLeitumaHostiaObstrutor) imagensFotoChassiLacreLeitumaHostiaObstrutor.style.display = 'none';
            fotoHostiaObstrutorSelected = null;
            return;
        }

        // Selecionar Chassi, Lacre e Leitura: desabilita outros e mostra conteúdo
        fotoHostiaObstrutorSelected = 'chassiLacreLeitura';
        if (btnFotoFachadaHostiaObstrutor) btnFotoFachadaHostiaObstrutor.classList.add('desabilitado');
        if (btnFotoExecucaoHostiaObstrutor) btnFotoExecucaoHostiaObstrutor.classList.add('desabilitado');
        if (textoFotoChassiLacreLeitumaHostiaObstrutor) textoFotoChassiLacreLeitumaHostiaObstrutor.style.display = 'block';
        if (imagensFotoChassiLacreLeitumaHostiaObstrutor) imagensFotoChassiLacreLeitumaHostiaObstrutor.style.display = 'flex';
    });
}

if (btnFotoExecucaoHostiaObstrutor) {
    btnFotoExecucaoHostiaObstrutor.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoExecucaoHostiaObstrutor.classList.contains('desabilitado') && fotoHostiaObstrutorSelected !== 'execucao') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoHostiaObstrutorSelected === 'execucao') {
            if (btnFotoFachadaHostiaObstrutor) btnFotoFachadaHostiaObstrutor.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaHostiaObstrutor) btnFotoChassiLacreLeitumaHostiaObstrutor.classList.remove('desabilitado');
            if (textoFotoExecucaoHostiaObstrutor) textoFotoExecucaoHostiaObstrutor.style.display = 'none';
            if (imagensFotoExecucaoHostiaObstrutor) imagensFotoExecucaoHostiaObstrutor.style.display = 'none';
            fotoHostiaObstrutorSelected = null;
            return;
        }

        // Selecionar Execução: desabilita outros e mostra conteúdo
        fotoHostiaObstrutorSelected = 'execucao';
        if (btnFotoFachadaHostiaObstrutor) btnFotoFachadaHostiaObstrutor.classList.add('desabilitado');
        if (btnFotoChassiLacreLeitumaHostiaObstrutor) btnFotoChassiLacreLeitumaHostiaObstrutor.classList.add('desabilitado');
        if (textoFotoExecucaoHostiaObstrutor) textoFotoExecucaoHostiaObstrutor.style.display = 'block';
        if (imagensFotoExecucaoHostiaObstrutor) imagensFotoExecucaoHostiaObstrutor.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Procedimento Ramal
// ======================================

if (btnProcedimentoRamal) {
    btnProcedimentoRamal.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnProcedimentoRamal.classList.contains('desabilitado')) {
            return;
        }

        procedimentoRamalAberto = !procedimentoRamalAberto;

        if (procedimentoRamalAberto) {
            if (textoProcedimentoRamal) {
                textoProcedimentoRamal.style.display = 'block';
            }
            if (hrPadraoFotosRamal) {
                hrPadraoFotosRamal.style.display = 'block';
            }
            if (btnPadraoFotosRamal) {
                btnPadraoFotosRamal.style.display = 'block';
            }
            if (hrServicosPosterioresRamal) {
                hrServicosPosterioresRamal.style.display = 'block';
            }
            if (btnServicosPosterioresRamal) {
                btnServicosPosterioresRamal.style.display = 'block';
            }
            // Ocultar botão e conteúdo de Conferência de Viabilidade
            if (btnConferenciaViabilidadeRamalRede) {
                btnConferenciaViabilidadeRamalRede.style.display = 'none';
            }
            if (textoConferenciaViabilidadeRamalRede) {
                textoConferenciaViabilidadeRamalRede.style.display = 'none';
            }
            if (textoOrientacoesEXOCRamalRede) {
                textoOrientacoesEXOCRamalRede.style.display = 'none';
            }
            conferenciaViabilidadeRamalRedeAberto = false;
        } else {
            if (textoProcedimentoRamal) {
                textoProcedimentoRamal.style.display = 'none';
            }
            if (hrPadraoFotosRamal) {
                hrPadraoFotosRamal.style.display = 'none';
            }
            if (btnPadraoFotosRamal) {
                btnPadraoFotosRamal.style.display = 'none';
            }
            if (hrServicosPosterioresRamal) {
                hrServicosPosterioresRamal.style.display = 'none';
            }
            if (btnServicosPosterioresRamal) {
                btnServicosPosterioresRamal.style.display = 'none';
            }
            if (textoPerguntaEscavacaoRamal) {
                textoPerguntaEscavacaoRamal.style.display = 'none';
            }
            if (containerEscavacaoRamalSN) {
                containerEscavacaoRamalSN.style.display = 'none';
            }
            resetEscavacaoRamal();
            // Mostrar botão Conferência de Viabilidade novamente
            if (btnConferenciaViabilidadeRamalRede) {
                btnConferenciaViabilidadeRamalRede.style.display = 'block';
            }
        }
    });
}

// ======================================
// EVENT LISTENER: Padrão de Fotos Ramal
// ======================================

if (btnPadraoFotosRamal) {
    btnPadraoFotosRamal.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnPadraoFotosRamal.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder container de fotos
        padraoFotosRamalAberto = !padraoFotosRamalAberto;

        if (padraoFotosRamalAberto) {
            // Mostrar container de fotos
            if (containerFotosRamal) {
                containerFotosRamal.style.display = 'flex';
            }
        } else {
            // Esconder container de fotos e resetar seleção
            if (containerFotosRamal) {
                containerFotosRamal.style.display = 'none';
            }
            fotoRamalSelected = null;
            if (btnFotoFachadaRamal) btnFotoFachadaRamal.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaRamal) btnFotoChassiLacreLeitumaRamal.classList.remove('desabilitado');
            if (btnFotoExecucaoRamal) btnFotoExecucaoRamal.classList.remove('desabilitado');
        }
    });
}

// ======================================
// EVENT LISTENERS: Fotos Ramal
// ======================================

if (btnFotoFachadaRamal) {
    btnFotoFachadaRamal.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoFachadaRamal.classList.contains('desabilitado') && fotoRamalSelected !== 'fachada') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRamalSelected === 'fachada') {
            if (btnFotoChassiLacreLeitumaRamal) btnFotoChassiLacreLeitumaRamal.classList.remove('desabilitado');
            if (btnFotoExecucaoRamal) btnFotoExecucaoRamal.classList.remove('desabilitado');
            if (textoFotoFachadaRamal) textoFotoFachadaRamal.style.display = 'none';
            if (imagensFotoFachadaRamal) imagensFotoFachadaRamal.style.display = 'none';
            fotoRamalSelected = null;
            return;
        }

        // Selecionar Fachada: desabilita outros e mostra conteúdo
        fotoRamalSelected = 'fachada';
        if (btnFotoChassiLacreLeitumaRamal) btnFotoChassiLacreLeitumaRamal.classList.add('desabilitado');
        if (btnFotoExecucaoRamal) btnFotoExecucaoRamal.classList.add('desabilitado');
        if (textoFotoFachadaRamal) textoFotoFachadaRamal.style.display = 'block';
        if (imagensFotoFachadaRamal) imagensFotoFachadaRamal.style.display = 'flex';
    });
}

if (btnFotoChassiLacreLeitumaRamal) {
    btnFotoChassiLacreLeitumaRamal.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoChassiLacreLeitumaRamal.classList.contains('desabilitado') && fotoRamalSelected !== 'chassiLacreLeitura') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRamalSelected === 'chassiLacreLeitura') {
            if (btnFotoFachadaRamal) btnFotoFachadaRamal.classList.remove('desabilitado');
            if (btnFotoExecucaoRamal) btnFotoExecucaoRamal.classList.remove('desabilitado');
            if (textoFotoChassiLacreLeitumaRamal) textoFotoChassiLacreLeitumaRamal.style.display = 'none';
            if (imagensFotoChassiLacreLeitumaRamal) imagensFotoChassiLacreLeitumaRamal.style.display = 'none';
            fotoRamalSelected = null;
            return;
        }

        // Selecionar Chassi, Lacre e Leitura: desabilita outros e mostra conteúdo
        fotoRamalSelected = 'chassiLacreLeitura';
        if (btnFotoFachadaRamal) btnFotoFachadaRamal.classList.add('desabilitado');
        if (btnFotoExecucaoRamal) btnFotoExecucaoRamal.classList.add('desabilitado');
        if (textoFotoChassiLacreLeitumaRamal) textoFotoChassiLacreLeitumaRamal.style.display = 'block';
        if (imagensFotoChassiLacreLeitumaRamal) imagensFotoChassiLacreLeitumaRamal.style.display = 'flex';
    });
}

if (btnFotoExecucaoRamal) {
    btnFotoExecucaoRamal.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoExecucaoRamal.classList.contains('desabilitado') && fotoRamalSelected !== 'execucao') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRamalSelected === 'execucao') {
            if (btnFotoFachadaRamal) btnFotoFachadaRamal.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaRamal) btnFotoChassiLacreLeitumaRamal.classList.remove('desabilitado');
            if (textoFotoExecucaoRamal) textoFotoExecucaoRamal.style.display = 'none';
            if (imagensFotoExecucaoRamal) imagensFotoExecucaoRamal.style.display = 'none';
            fotoRamalSelected = null;
            return;
        }

        // Selecionar Execução: desabilita outros e mostra conteúdo
        fotoRamalSelected = 'execucao';
        if (btnFotoFachadaRamal) btnFotoFachadaRamal.classList.add('desabilitado');
        if (btnFotoChassiLacreLeitumaRamal) btnFotoChassiLacreLeitumaRamal.classList.add('desabilitado');
        if (textoFotoExecucaoRamal) textoFotoExecucaoRamal.style.display = 'block';
        if (imagensFotoExecucaoRamal) imagensFotoExecucaoRamal.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Procedimento Rede
// ======================================

if (btnProcedimentoRede) {
    btnProcedimentoRede.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnProcedimentoRede.classList.contains('desabilitado')) {
            return;
        }

        procedimentoRedeAberto = !procedimentoRedeAberto;

        if (procedimentoRedeAberto) {
            if (textoProcedimentoRede) {
                textoProcedimentoRede.style.display = 'block';
            }
            if (hrPadraoFotosRede) {
                hrPadraoFotosRede.style.display = 'block';
            }
            if (btnPadraoFotosRede) {
                btnPadraoFotosRede.style.display = 'block';
            }
            if (hrServicosPosterioresRede) {
                hrServicosPosterioresRede.style.display = 'block';
            }
            if (btnServicosPosterioresRede) {
                btnServicosPosterioresRede.style.display = 'block';
            }
            // Ocultar botão e conteúdo de Conferência de Viabilidade
            if (btnConferenciaViabilidadeRamalRede) {
                btnConferenciaViabilidadeRamalRede.style.display = 'none';
            }
            if (textoConferenciaViabilidadeRamalRede) {
                textoConferenciaViabilidadeRamalRede.style.display = 'none';
            }
            if (textoOrientacoesEXOCRamalRede) {
                textoOrientacoesEXOCRamalRede.style.display = 'none';
            }
            conferenciaViabilidadeRamalRedeAberto = false;
        } else {
            if (textoProcedimentoRede) {
                textoProcedimentoRede.style.display = 'none';
            }
            if (hrPadraoFotosRede) {
                hrPadraoFotosRede.style.display = 'none';
            }
            if (btnPadraoFotosRede) {
                btnPadraoFotosRede.style.display = 'none';
            }
            if (hrServicosPosterioresRede) {
                hrServicosPosterioresRede.style.display = 'none';
            }
            if (btnServicosPosterioresRede) {
                btnServicosPosterioresRede.style.display = 'none';
            }
            if (textoPerguntaEscavacaoRede) {
                textoPerguntaEscavacaoRede.style.display = 'none';
            }
            if (containerEscavacaoSN) {
                containerEscavacaoSN.style.display = 'none';
            }
            resetEscavacaoRede();
            // Mostrar botão Conferência de Viabilidade novamente
            if (btnConferenciaViabilidadeRamalRede) {
                btnConferenciaViabilidadeRamalRede.style.display = 'block';
            }
        }
    });
}

// ======================================
// EVENT LISTENER: Padrão de Fotos Rede
// ======================================

if (btnPadraoFotosRede) {
    btnPadraoFotosRede.addEventListener('click', () => {
        // Se o botão está desabilitado, não fazer nada
        if (btnPadraoFotosRede.classList.contains('desabilitado')) {
            return;
        }

        // Toggle: mostrar/esconder container de fotos
        padraoFotosRedeAberto = !padraoFotosRedeAberto;

        if (padraoFotosRedeAberto) {
            // Mostrar container de fotos
            if (containerFotosRede) {
                containerFotosRede.style.display = 'flex';
            }
        } else {
            // Esconder container de fotos e resetar seleção
            if (containerFotosRede) {
                containerFotosRede.style.display = 'none';
            }
            fotoRedeSelected = null;
            if (btnFotoFachadaRede) btnFotoFachadaRede.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.remove('desabilitado');
            if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.remove('desabilitado');
        }
    });
}

// ======================================
// EVENT LISTENERS: Fotos Rede
// ======================================

if (btnFotoFachadaRede) {
    btnFotoFachadaRede.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoFachadaRede.classList.contains('desabilitado') && fotoRedeSelected !== 'fachada') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRedeSelected === 'fachada') {
            if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.remove('desabilitado');
            if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.remove('desabilitado');
            if (textoFotoFachadaRede) textoFotoFachadaRede.style.display = 'none';
            if (imagensFotoFachadaRede) imagensFotoFachadaRede.style.display = 'none';
            fotoRedeSelected = null;
            return;
        }

        // Selecionar Fachada: desabilita outros e mostra conteúdo
        fotoRedeSelected = 'fachada';
        if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.add('desabilitado');
        if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.add('desabilitado');
        if (textoFotoFachadaRede) textoFotoFachadaRede.style.display = 'block';
        if (imagensFotoFachadaRede) imagensFotoFachadaRede.style.display = 'flex';
    });
}

if (btnFotoChassiLacreLeitumaRede) {
    btnFotoChassiLacreLeitumaRede.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoChassiLacreLeitumaRede.classList.contains('desabilitado') && fotoRedeSelected !== 'chassiLacreLeitura') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRedeSelected === 'chassiLacreLeitura') {
            if (btnFotoFachadaRede) btnFotoFachadaRede.classList.remove('desabilitado');
            if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.remove('desabilitado');
            if (textoFotoChassiLacreLeitumaRede) textoFotoChassiLacreLeitumaRede.style.display = 'none';
            if (imagensFotoChassiLacreLeitumaRede) imagensFotoChassiLacreLeitumaRede.style.display = 'none';
            fotoRedeSelected = null;
            return;
        }

        // Selecionar Chassi, Lacre e Leitura: desabilita outros e mostra conteúdo
        fotoRedeSelected = 'chassiLacreLeitura';
        if (btnFotoFachadaRede) btnFotoFachadaRede.classList.add('desabilitado');
        if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.add('desabilitado');
        if (textoFotoChassiLacreLeitumaRede) textoFotoChassiLacreLeitumaRede.style.display = 'block';
        if (imagensFotoChassiLacreLeitumaRede) imagensFotoChassiLacreLeitumaRede.style.display = 'flex';
    });
}

if (btnFotoExecucaoRede) {
    btnFotoExecucaoRede.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoExecucaoRede.classList.contains('desabilitado') && fotoRedeSelected !== 'execucao') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRedeSelected === 'execucao') {
            if (btnFotoFachadaRede) btnFotoFachadaRede.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.remove('desabilitado');
            if (btnFotoFinalizacaoRede) btnFotoFinalizacaoRede.classList.remove('desabilitado');
            if (textoFotoExecucaoRede) textoFotoExecucaoRede.style.display = 'none';
            if (imagensFotoExecucaoRede) imagensFotoExecucaoRede.style.display = 'none';
            fotoRedeSelected = null;
            return;
        }

        // Selecionar Execução: desabilita outros e mostra conteúdo
        fotoRedeSelected = 'execucao';
        if (btnFotoFachadaRede) btnFotoFachadaRede.classList.add('desabilitado');
        if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.add('desabilitado');
        if (btnFotoFinalizacaoRede) btnFotoFinalizacaoRede.classList.add('desabilitado');
        if (textoFotoExecucaoRede) textoFotoExecucaoRede.style.display = 'block';
        if (imagensFotoExecucaoRede) imagensFotoExecucaoRede.style.display = 'flex';
    });
}

if (btnFotoFinalizacaoRede) {
    btnFotoFinalizacaoRede.addEventListener('click', () => {
        // Se está desabilitado e não é o selecionado, não fazer nada
        if (btnFotoFinalizacaoRede.classList.contains('desabilitado') && fotoRedeSelected !== 'finalizacao') {
            return;
        }

        // Toggle: se já estava selecionado, deselecionar
        if (fotoRedeSelected === 'finalizacao') {
            if (btnFotoFachadaRede) btnFotoFachadaRede.classList.remove('desabilitado');
            if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.remove('desabilitado');
            if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.remove('desabilitado');
            if (textoFotoFinalizacaoRede) textoFotoFinalizacaoRede.style.display = 'none';
            if (imagensFotoFinalizacaoRede) imagensFotoFinalizacaoRede.style.display = 'none';
            fotoRedeSelected = null;
            return;
        }

        // Selecionar Finalização: desabilita outros e mostra conteúdo
        fotoRedeSelected = 'finalizacao';
        if (btnFotoFachadaRede) btnFotoFachadaRede.classList.add('desabilitado');
        if (btnFotoChassiLacreLeitumaRede) btnFotoChassiLacreLeitumaRede.classList.add('desabilitado');
        if (btnFotoExecucaoRede) btnFotoExecucaoRede.classList.add('desabilitado');
        if (textoFotoFinalizacaoRede) textoFotoFinalizacaoRede.style.display = 'block';
        if (imagensFotoFinalizacaoRede) imagensFotoFinalizacaoRede.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Serviços Posteriores Ramal/Rede + Escavação Sim/Não
// ======================================

const resetEscavacaoRamal = () => {
    escavacaoRamalSelected = null;
    localEscavacaoRamalSelected = null;
    pavimentoCalcadaRamalAberto = false;
    if (hrOpcoesPavimentoRamal) hrOpcoesPavimentoRamal.style.display = 'none';
    if (btnEscavacaoRamalSim) btnEscavacaoRamalSim.classList.remove('desabilitado');
    if (btnEscavacaoRamalNao) btnEscavacaoRamalNao.classList.remove('desabilitado');
    if (btnEscavacaoCalcadaRamal) btnEscavacaoCalcadaRamal.classList.remove('desabilitado');
    if (btnEscavacaoRuaRamal) btnEscavacaoRuaRamal.classList.remove('desabilitado');
    if (textoPerguntaEscavacaoRamal) textoPerguntaEscavacaoRamal.style.display = 'none';
    if (containerEscavacaoRamalSN) containerEscavacaoRamalSN.style.display = 'none';
    if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'none';
    if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'none';
    if (textoPerguntaPavimentoCalcadaRamal) textoPerguntaPavimentoCalcadaRamal.style.display = 'none';
    if (containerPavimentoCalcadaRamal) containerPavimentoCalcadaRamal.style.display = 'none';
    if (textoRepavimentacaoSimpleseRamal) textoRepavimentacaoSimpleseRamal.style.display = 'none';
    if (textoRepavimentacaoEspecialRamal) textoRepavimentacaoEspecialRamal.style.display = 'none';
    if (textoRepavimentacaoBlocoRamal) textoRepavimentacaoBlocoRamal.style.display = 'none';
    if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'none';
};

const toggleEscavacaoRamal = (opcao) => {
    if (escavacaoRamalSelected === opcao) {
        resetEscavacaoRamal();
        return;
    }

    escavacaoRamalSelected = opcao;
    if (btnEscavacaoRamalSim) btnEscavacaoRamalSim.classList.toggle('desabilitado', opcao === 'nao');
    if (btnEscavacaoRamalNao) btnEscavacaoRamalNao.classList.toggle('desabilitado', opcao === 'sim');

    if (opcao === 'sim') {
        if (hrOpcoesPavimentoRamal) hrOpcoesPavimentoRamal.style.display = 'block';
        if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'none';
        if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'block';
        if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'flex';
    } else {
        if (hrOpcoesPavimentoRamal) hrOpcoesPavimentoRamal.style.display = 'none';
        if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'none';
        if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'none';
        if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'block';
    }
};

const resetEscavacaoRede = () => {
    escavacaoRedeSelected = null;
    localEscavacaoRedeSelected = null;
    pavimentoCalcadaRedeAberto = false;
    if (hrOpcoesPavimentoRede) hrOpcoesPavimentoRede.style.display = 'none';
    if (btnEscavacaoSim) btnEscavacaoSim.classList.remove('desabilitado');
    if (btnEscavacaoNao) btnEscavacaoNao.classList.remove('desabilitado');
    if (btnEscavacaoCalcadaRede) btnEscavacaoCalcadaRede.classList.remove('desabilitado');
    if (btnEscavacaoRuaRede) btnEscavacaoRuaRede.classList.remove('desabilitado');
    if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'none';
    if (containerLocalEscavacaoRede) containerLocalEscavacaoRede.style.display = 'none';
    if (textoPerguntaPavimentoCalcadaRede) textoPerguntaPavimentoCalcadaRede.style.display = 'none';
    if (containerPavimentoCalcadaRede) containerPavimentoCalcadaRede.style.display = 'none';
    if (textoRepavimentacaoSimpleseRede) textoRepavimentacaoSimpleseRede.style.display = 'none';
    if (textoRepavimentacaoEspecialRede) textoRepavimentacaoEspecialRede.style.display = 'none';
    if (textoRepavimentacaoBlocoRede) textoRepavimentacaoBlocoRede.style.display = 'none';
    if (textoEncerramentoRede) textoEncerramentoRede.style.display = 'none';
    localEscavacaoRedeSelected = null;
};

const toggleEscavacaoRede = (opcao) => {
    if (escavacaoRedeSelected === opcao) {
        resetEscavacaoRede();
        return;
    }

    escavacaoRedeSelected = opcao;
    if (btnEscavacaoSim) btnEscavacaoSim.classList.toggle('desabilitado', opcao === 'nao');
    if (btnEscavacaoNao) btnEscavacaoNao.classList.toggle('desabilitado', opcao === 'sim');

    if (opcao === 'sim') {
        if (hrOpcoesPavimentoRede) hrOpcoesPavimentoRede.style.display = 'block';
        if (textoEncerramentoRede) textoEncerramentoRede.style.display = 'none';
        if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'block';
        if (containerLocalEscavacaoRede) containerLocalEscavacaoRede.style.display = 'flex';
    } else {
        if (hrOpcoesPavimentoRede) hrOpcoesPavimentoRede.style.display = 'none';
        if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'none';
        if (containerLocalEscavacaoRede) containerLocalEscavacaoRede.style.display = 'none';
        if (textoEncerramentoRede) textoEncerramentoRede.style.display = 'block';
    }
};

if (btnServicosPosterioresRamal) {
    btnServicosPosterioresRamal.addEventListener('click', () => {
        // Toggle: se já está visível, recolhe e reseta; senão, exibe
        const estaVisivel = containerEscavacaoRamalSN && containerEscavacaoRamalSN.style.display === 'flex';

        resetEscavacaoRamal();

        if (estaVisivel) {
            if (textoPerguntaEscavacaoRamal) textoPerguntaEscavacaoRamal.style.display = 'none';
            if (containerEscavacaoRamalSN) containerEscavacaoRamalSN.style.display = 'none';
            return;
        }

        if (textoPerguntaEscavacaoRamal) textoPerguntaEscavacaoRamal.style.display = 'block';
        if (containerEscavacaoRamalSN) containerEscavacaoRamalSN.style.display = 'flex';
    });
}

if (btnServicosPosterioresRede) {
    btnServicosPosterioresRede.addEventListener('click', () => {
        // Toggle: se já está visível, recolhe e reseta; senão, exibe
        const estaVisivel = containerEscavacaoSN && containerEscavacaoSN.style.display === 'flex';

        resetEscavacaoRede();

        if (estaVisivel) {
            if (textoPerguntaEscavacaoRede) textoPerguntaEscavacaoRede.style.display = 'none';
            if (containerEscavacaoSN) containerEscavacaoSN.style.display = 'none';
            return;
        }

        if (textoPerguntaEscavacaoRede) textoPerguntaEscavacaoRede.style.display = 'block';
        if (containerEscavacaoSN) containerEscavacaoSN.style.display = 'flex';
    });
}

// ======================================
// EVENT LISTENER: Botões Sim/Não Escavação
// ======================================

if (btnEscavacaoRamalSim) {
    btnEscavacaoRamalSim.addEventListener('click', () => {
        toggleEscavacaoRamal('sim');
    });
}

if (btnEscavacaoRamalNao) {
    btnEscavacaoRamalNao.addEventListener('click', () => {
        toggleEscavacaoRamal('nao');
    });
}

if (btnEscavacaoSim) {
    btnEscavacaoSim.addEventListener('click', () => {
        toggleEscavacaoRede('sim');
    });
}

if (btnEscavacaoNao) {
    btnEscavacaoNao.addEventListener('click', () => {
        toggleEscavacaoRede('nao');
    });
}

// ======================================
// EVENT LISTENER: Botões Calçada/Rua
// ======================================

// ======================================
// FUNÇÕES: Reset e Toggle Local Escavação
// ======================================

const toggleLocalEscavacaoRamal = (local) => {
    if (localEscavacaoRamalSelected === local) {
        // Desabilitado - voltar ao estado padrão
        localEscavacaoRamalSelected = null;
        if (btnEscavacaoCalcadaRamal) btnEscavacaoCalcadaRamal.classList.remove('desabilitado');
        if (btnEscavacaoRuaRamal) btnEscavacaoRuaRamal.classList.remove('desabilitado');
        return;
    }

    // Novo local selecionado
    localEscavacaoRamalSelected = local;
    if (local === 'calcada') {
        if (btnEscavacaoCalcadaRamal) btnEscavacaoCalcadaRamal.classList.remove('desabilitado');
        if (btnEscavacaoRuaRamal) btnEscavacaoRuaRamal.classList.add('desabilitado');
    } else {
        if (btnEscavacaoCalcadaRamal) btnEscavacaoCalcadaRamal.classList.add('desabilitado');
        if (btnEscavacaoRuaRamal) btnEscavacaoRuaRamal.classList.remove('desabilitado');
    }
};

const toggleLocalEscavacaoRede = (local) => {
    if (localEscavacaoRedeSelected === local) {
        // Desabilitado - voltar ao estado padrão
        localEscavacaoRedeSelected = null;
        if (btnEscavacaoCalcadaRede) btnEscavacaoCalcadaRede.classList.remove('desabilitado');
        if (btnEscavacaoRuaRede) btnEscavacaoRuaRede.classList.remove('desabilitado');
        return;
    }

    // Novo local selecionado
    localEscavacaoRedeSelected = local;
    if (local === 'calcada') {
        if (btnEscavacaoCalcadaRede) btnEscavacaoCalcadaRede.classList.remove('desabilitado');
        if (btnEscavacaoRuaRede) btnEscavacaoRuaRede.classList.add('desabilitado');
    } else {
        if (btnEscavacaoCalcadaRede) btnEscavacaoCalcadaRede.classList.add('desabilitado');
        if (btnEscavacaoRuaRede) btnEscavacaoRuaRede.classList.remove('desabilitado');
    }
};

if (btnEscavacaoCalcadaRamal) {
    btnEscavacaoCalcadaRamal.addEventListener('click', () => {
        // Aplicar toggle de desabilitar
        toggleLocalEscavacaoRamal('calcada');

        // Toggle: se já está aberto, recolhe; senão, abre
        if (pavimentoCalcadaRamalAberto) {
            // Recolher conteúdo de pavimento
            resetPavimentoCalcadaRamal();
            pavimentoCalcadaRamalAberto = false;
            // Manter container local visível
            if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'block';
            if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'flex';
            return;
        }

        // Abrir conteúdo de pavimento
        pavimentoCalcadaRamalAberto = true;
        if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'none';
        if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'none';

        if (textoPerguntaPavimentoCalcadaRamal) textoPerguntaPavimentoCalcadaRamal.style.display = 'block';
        if (containerPavimentoCalcadaRamal) containerPavimentoCalcadaRamal.style.display = 'flex';
    });
}

if (btnEscavacaoRuaRamal) {
    btnEscavacaoRuaRamal.addEventListener('click', () => {
        // Aplicar toggle de desabilitar
        toggleLocalEscavacaoRamal('rua');
        // Limpar conteúdo de pavimento calçada se estava aberto
        resetPavimentoCalcadaRamal();
        pavimentoCalcadaRamalAberto = false;

        // Toggle: se já está aberto, recolhe; senão, abre
        if (pavimentoRuaRamalAberto) {
            // Recolher conteúdo de pavimento rua
            resetPavimentoRuaRamal();
            pavimentoRuaRamalAberto = false;
            // Manter container local visível
            if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'block';
            if (containerLocalEscavacaoRamal) containerLocalEscavacaoRamal.style.display = 'flex';
            return;
        }

        // Abrir conteúdo de pavimento rua
        pavimentoRuaRamalAberto = true;
        if (textoPerguntaLocalEscavacaoRamal) textoPerguntaLocalEscavacaoRamal.style.display = 'none';
        if (textoEncerramentoRamal) textoEncerramentoRamal.style.display = 'none';

        if (textoPerguntaPavimentoRuaRamal) textoPerguntaPavimentoRuaRamal.style.display = 'block';
        if (containerPavimentoRuaRamal) containerPavimentoRuaRamal.style.display = 'flex';
    });
}

if (btnEscavacaoCalcadaRede) {
    btnEscavacaoCalcadaRede.addEventListener('click', () => {
        // Aplicar toggle de desabilitar
        toggleLocalEscavacaoRede('calcada');

        // Toggle: se já está aberto, recolhe; senão, abre
        if (pavimentoCalcadaRedeAberto) {
            // Recolher conteúdo de pavimento
            resetPavimentoCalcadaRede();
            pavimentoCalcadaRedeAberto = false;
            // Manter container local visível
            if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'block';
            if (containerLocalEscavacaoRede) containerLocalEscavacaoRede.style.display = 'flex';
            return;
        }

        // Abrir conteúdo de pavimento
        pavimentoCalcadaRedeAberto = true;
        if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'none';
        if (textoEncerramentoRede) textoEncerramentoRede.style.display = 'none';

        if (textoPerguntaPavimentoCalcadaRede) textoPerguntaPavimentoCalcadaRede.style.display = 'block';
        if (containerPavimentoCalcadaRede) containerPavimentoCalcadaRede.style.display = 'flex';
    });
}

if (btnEscavacaoRuaRede) {
    btnEscavacaoRuaRede.addEventListener('click', () => {
        // Aplicar toggle de desabilitar
        toggleLocalEscavacaoRede('rua');
        // Limpar conteúdo de pavimento calçada se estava aberto
        resetPavimentoCalcadaRede();
        pavimentoCalcadaRedeAberto = false;

        // Toggle: se já está aberto, recolhe; senão, abre
        if (pavimentoRuaRedeAberto) {
            // Recolher conteúdo de pavimento rua
            resetPavimentoRuaRede();
            pavimentoRuaRedeAberto = false;
            // Manter container local visível
            if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'block';
            if (containerLocalEscavacaoRede) containerLocalEscavacaoRede.style.display = 'flex';
            return;
        }

        // Abrir conteúdo de pavimento rua
        pavimentoRuaRedeAberto = true;
        if (textoPerguntaLocalEscavacaoRede) textoPerguntaLocalEscavacaoRede.style.display = 'none';
        if (textoEncerramentoRede) textoEncerramentoRede.style.display = 'none';

        if (textoPerguntaPavimentoRuaRede) textoPerguntaPavimentoRuaRede.style.display = 'block';
        if (containerPavimentoRuaRede) containerPavimentoRuaRede.style.display = 'flex';
    });
}

// ======================================
// FUNÇÕES: Reset e Toggle Pavimento Calçada
// ======================================

const resetPavimentoCalcadaRamal = () => {
    pavimentoCalcadaRamalSelected = null;
    pavimentoCalcadaRamalAberto = false;
    if (btnPavimentoConcreteRamal) btnPavimentoConcreteRamal.classList.remove('desabilitado');
    if (btnPavimentoCeramicaRamal) btnPavimentoCeramicaRamal.classList.remove('desabilitado');
    if (btnPavimentoPedraRamal) btnPavimentoPedraRamal.classList.remove('desabilitado');
    if (textoPerguntaPavimentoCalcadaRamal) textoPerguntaPavimentoCalcadaRamal.style.display = 'none';
    if (containerPavimentoCalcadaRamal) containerPavimentoCalcadaRamal.style.display = 'none';
    if (textoRepavimentacaoSimpleseRamal) textoRepavimentacaoSimpleseRamal.style.display = 'none';
    if (textoRepavimentacaoEspecialRamal) textoRepavimentacaoEspecialRamal.style.display = 'none';
    if (textoRepavimentacaoBlocoRamal) textoRepavimentacaoBlocoRamal.style.display = 'none';
};

const togglePavimentoCalcadaRamal = (opcao) => {
    if (pavimentoCalcadaRamalSelected === opcao) {
        // Mesmo botão clicado novamente: desabilitar e ocultar resultado
        pavimentoCalcadaRamalSelected = null;
        if (btnPavimentoConcreteRamal) btnPavimentoConcreteRamal.classList.remove('desabilitado');
        if (btnPavimentoCeramicaRamal) btnPavimentoCeramicaRamal.classList.remove('desabilitado');
        if (btnPavimentoPedraRamal) btnPavimentoPedraRamal.classList.remove('desabilitado');
        if (textoRepavimentacaoSimpleseRamal) textoRepavimentacaoSimpleseRamal.style.display = 'none';
        if (textoRepavimentacaoEspecialRamal) textoRepavimentacaoEspecialRamal.style.display = 'none';
        if (textoRepavimentacaoBlocoRamal) textoRepavimentacaoBlocoRamal.style.display = 'none';
        return;
    }

    pavimentoCalcadaRamalSelected = opcao;

    // Desabilitar outros botões
    if (opcao === 'concreto') {
        if (btnPavimentoConcreteRamal) btnPavimentoConcreteRamal.classList.remove('desabilitado');
        if (btnPavimentoCeramicaRamal) btnPavimentoCeramicaRamal.classList.add('desabilitado');
        if (btnPavimentoPedraRamal) btnPavimentoPedraRamal.classList.add('desabilitado');
        if (textoRepavimentacaoSimpleseRamal) textoRepavimentacaoSimpleseRamal.style.display = 'block';
        if (textoRepavimentacaoEspecialRamal) textoRepavimentacaoEspecialRamal.style.display = 'none';
        if (textoRepavimentacaoBlocoRamal) textoRepavimentacaoBlocoRamal.style.display = 'none';
    } else if (opcao === 'ceramica') {
        if (btnPavimentoConcreteRamal) btnPavimentoConcreteRamal.classList.add('desabilitado');
        if (btnPavimentoCeramicaRamal) btnPavimentoCeramicaRamal.classList.remove('desabilitado');
        if (btnPavimentoPedraRamal) btnPavimentoPedraRamal.classList.add('desabilitado');
        if (textoRepavimentacaoSimpleseRamal) textoRepavimentacaoSimpleseRamal.style.display = 'none';
        if (textoRepavimentacaoEspecialRamal) textoRepavimentacaoEspecialRamal.style.display = 'block';
        if (textoRepavimentacaoBlocoRamal) textoRepavimentacaoBlocoRamal.style.display = 'none';
    } else if (opcao === 'pedra') {
        if (btnPavimentoConcreteRamal) btnPavimentoConcreteRamal.classList.add('desabilitado');
        if (btnPavimentoCeramicaRamal) btnPavimentoCeramicaRamal.classList.add('desabilitado');
        if (btnPavimentoPedraRamal) btnPavimentoPedraRamal.classList.remove('desabilitado');
        if (textoRepavimentacaoSimpleseRamal) textoRepavimentacaoSimpleseRamal.style.display = 'none';
        if (textoRepavimentacaoEspecialRamal) textoRepavimentacaoEspecialRamal.style.display = 'none';
        if (textoRepavimentacaoBlocoRamal) textoRepavimentacaoBlocoRamal.style.display = 'block';
    }
};

const resetPavimentoCalcadaRede = () => {
    pavimentoCalcadaRedeSelected = null;
    pavimentoCalcadaRedeAberto = false;
    if (btnPavimentoConcreteRede) btnPavimentoConcreteRede.classList.remove('desabilitado');
    if (btnPavimentoCeramicaRede) btnPavimentoCeramicaRede.classList.remove('desabilitado');
    if (btnPavimentoPedraRede) btnPavimentoPedraRede.classList.remove('desabilitado');
    if (textoPerguntaPavimentoCalcadaRede) textoPerguntaPavimentoCalcadaRede.style.display = 'none';
    if (containerPavimentoCalcadaRede) containerPavimentoCalcadaRede.style.display = 'none';
    if (textoRepavimentacaoSimpleseRede) textoRepavimentacaoSimpleseRede.style.display = 'none';
    if (textoRepavimentacaoEspecialRede) textoRepavimentacaoEspecialRede.style.display = 'none';
    if (textoRepavimentacaoBlocoRede) textoRepavimentacaoBlocoRede.style.display = 'none';
};

// ======================================
// FUNÇÕES: Reset e Toggle Pavimento Rua
// ======================================

const resetPavimentoRuaRamal = () => {
    pavimentoRuaRamalSelected = null;
    pavimentoRuaRamalAberto = false;
    if (btnPavimentoTerraRamal) btnPavimentoTerraRamal.classList.remove('desabilitado');
    if (btnPavimentoConcreteRuaRamal) btnPavimentoConcreteRuaRamal.classList.remove('desabilitado');
    if (btnPavimentoAsfaltoRamal) btnPavimentoAsfaltoRamal.classList.remove('desabilitado');
    if (textoPerguntaPavimentoRuaRamal) textoPerguntaPavimentoRuaRamal.style.display = 'none';
    if (containerPavimentoRuaRamal) containerPavimentoRuaRamal.style.display = 'none';
    if (textoReaterroRamal) textoReaterroRamal.style.display = 'none';
};

const togglePavimentoRuaRamal = (opcao) => {
    if (pavimentoRuaRamalSelected === opcao) {
        pavimentoRuaRamalSelected = null;
        if (btnPavimentoTerraRamal) btnPavimentoTerraRamal.classList.remove('desabilitado');
        if (btnPavimentoConcreteRuaRamal) btnPavimentoConcreteRuaRamal.classList.remove('desabilitado');
        if (btnPavimentoAsfaltoRamal) btnPavimentoAsfaltoRamal.classList.remove('desabilitado');
        if (textoReaterroRamal) textoReaterroRamal.style.display = 'none';
        resetRecorteRamal();
        return;
    }

    // Novo pavimento selecionado
    pavimentoRuaRamalSelected = opcao;
    if (opcao === 'terra') {
        if (btnPavimentoTerraRamal) btnPavimentoTerraRamal.classList.remove('desabilitado');
        if (btnPavimentoConcreteRuaRamal) btnPavimentoConcreteRuaRamal.classList.add('desabilitado');
        if (btnPavimentoAsfaltoRamal) btnPavimentoAsfaltoRamal.classList.add('desabilitado');
        if (textoReaterroRamal) textoReaterroRamal.style.display = 'block';
        resetRecorteRamal();
    } else if (opcao === 'concreto') {
        if (btnPavimentoTerraRamal) btnPavimentoTerraRamal.classList.add('desabilitado');
        if (btnPavimentoConcreteRuaRamal) btnPavimentoConcreteRuaRamal.classList.remove('desabilitado');
        if (btnPavimentoAsfaltoRamal) btnPavimentoAsfaltoRamal.classList.add('desabilitado');
        if (textoReaterroRamal) textoReaterroRamal.style.display = 'none';
        if (textoPerguntaRecorteRamal) textoPerguntaRecorteRamal.style.display = 'block';
        if (containerRecorteRamal) containerRecorteRamal.style.display = 'flex';
        recorteRamalAberto = true;
    } else if (opcao === 'asfalto') {
        if (btnPavimentoTerraRamal) btnPavimentoTerraRamal.classList.add('desabilitado');
        if (btnPavimentoConcreteRuaRamal) btnPavimentoConcreteRuaRamal.classList.add('desabilitado');
        if (btnPavimentoAsfaltoRamal) btnPavimentoAsfaltoRamal.classList.remove('desabilitado');
        if (textoReaterroRamal) textoReaterroRamal.style.display = 'none';
        if (textoPerguntaRecorteRamal) textoPerguntaRecorteRamal.style.display = 'block';
        if (containerRecorteRamal) containerRecorteRamal.style.display = 'flex';
        recorteRamalAberto = true;
    }
};

const resetPavimentoRuaRede = () => {
    pavimentoRuaRedeSelected = null;
    pavimentoRuaRedeAberto = false;
    if (btnPavimentoTerraRede) btnPavimentoTerraRede.classList.remove('desabilitado');
    if (btnPavimentoConcreteRuaRede) btnPavimentoConcreteRuaRede.classList.remove('desabilitado');
    if (btnPavimentoAsfaltoRede) btnPavimentoAsfaltoRede.classList.remove('desabilitado');
    if (textoPerguntaPavimentoRuaRede) textoPerguntaPavimentoRuaRede.style.display = 'none';
    if (containerPavimentoRuaRede) containerPavimentoRuaRede.style.display = 'none';
    if (textoReaterroRede) textoReaterroRede.style.display = 'none';
};

const togglePavimentoRuaRede = (opcao) => {
    if (pavimentoRuaRedeSelected === opcao) {
        pavimentoRuaRedeSelected = null;
        if (btnPavimentoTerraRede) btnPavimentoTerraRede.classList.remove('desabilitado');
        if (btnPavimentoConcreteRuaRede) btnPavimentoConcreteRuaRede.classList.remove('desabilitado');
        if (btnPavimentoAsfaltoRede) btnPavimentoAsfaltoRede.classList.remove('desabilitado');
        if (textoReaterroRede) textoReaterroRede.style.display = 'none';
        resetRecorteRede();
        return;
    }

    // Novo pavimento selecionado
    pavimentoRuaRedeSelected = opcao;
    if (opcao === 'terra') {
        if (btnPavimentoTerraRede) btnPavimentoTerraRede.classList.remove('desabilitado');
        if (btnPavimentoConcreteRuaRede) btnPavimentoConcreteRuaRede.classList.add('desabilitado');
        if (btnPavimentoAsfaltoRede) btnPavimentoAsfaltoRede.classList.add('desabilitado');
        if (textoReaterroRede) textoReaterroRede.style.display = 'block';
        resetRecorteRede();
    } else if (opcao === 'concreto') {
        if (btnPavimentoTerraRede) btnPavimentoTerraRede.classList.add('desabilitado');
        if (btnPavimentoConcreteRuaRede) btnPavimentoConcreteRuaRede.classList.remove('desabilitado');
        if (btnPavimentoAsfaltoRede) btnPavimentoAsfaltoRede.classList.add('desabilitado');
        if (textoReaterroRede) textoReaterroRede.style.display = 'none';
        if (textoPerguntaRecorteRede) textoPerguntaRecorteRede.style.display = 'block';
        if (containerRecorteRede) containerRecorteRede.style.display = 'flex';
        recorteRedeAberto = true;
    } else if (opcao === 'asfalto') {
        if (btnPavimentoTerraRede) btnPavimentoTerraRede.classList.add('desabilitado');
        if (btnPavimentoConcreteRuaRede) btnPavimentoConcreteRuaRede.classList.add('desabilitado');
        if (btnPavimentoAsfaltoRede) btnPavimentoAsfaltoRede.classList.remove('desabilitado');
        if (textoReaterroRede) textoReaterroRede.style.display = 'none';
        if (textoPerguntaRecorteRede) textoPerguntaRecorteRede.style.display = 'block';
        if (containerRecorteRede) containerRecorteRede.style.display = 'flex';
        recorteRedeAberto = true;
    }
};

const togglePavimentoCalcadaRede = (opcao) => {
    if (pavimentoCalcadaRedeSelected === opcao) {
        // Mesmo botão clicado novamente: desabilitar e ocultar resultado
        pavimentoCalcadaRedeSelected = null;
        if (btnPavimentoConcreteRede) btnPavimentoConcreteRede.classList.remove('desabilitado');
        if (btnPavimentoCeramicaRede) btnPavimentoCeramicaRede.classList.remove('desabilitado');
        if (btnPavimentoPedraRede) btnPavimentoPedraRede.classList.remove('desabilitado');
        if (textoRepavimentacaoSimpleseRede) textoRepavimentacaoSimpleseRede.style.display = 'none';
        if (textoRepavimentacaoEspecialRede) textoRepavimentacaoEspecialRede.style.display = 'none';
        if (textoRepavimentacaoBlocoRede) textoRepavimentacaoBlocoRede.style.display = 'none';
        return;
    }

    pavimentoCalcadaRedeSelected = opcao;

    // Desabilitar outros botões
    if (opcao === 'concreto') {
        if (btnPavimentoConcreteRede) btnPavimentoConcreteRede.classList.remove('desabilitado');
        if (btnPavimentoCeramicaRede) btnPavimentoCeramicaRede.classList.add('desabilitado');
        if (btnPavimentoPedraRede) btnPavimentoPedraRede.classList.add('desabilitado');
        if (textoRepavimentacaoSimpleseRede) textoRepavimentacaoSimpleseRede.style.display = 'block';
        if (textoRepavimentacaoEspecialRede) textoRepavimentacaoEspecialRede.style.display = 'none';
        if (textoRepavimentacaoBlocoRede) textoRepavimentacaoBlocoRede.style.display = 'none';
    } else if (opcao === 'ceramica') {
        if (btnPavimentoConcreteRede) btnPavimentoConcreteRede.classList.add('desabilitado');
        if (btnPavimentoCeramicaRede) btnPavimentoCeramicaRede.classList.remove('desabilitado');
        if (btnPavimentoPedraRede) btnPavimentoPedraRede.classList.add('desabilitado');
        if (textoRepavimentacaoSimpleseRede) textoRepavimentacaoSimpleseRede.style.display = 'none';
        if (textoRepavimentacaoEspecialRede) textoRepavimentacaoEspecialRede.style.display = 'block';
        if (textoRepavimentacaoBlocoRede) textoRepavimentacaoBlocoRede.style.display = 'none';
    } else if (opcao === 'pedra') {
        if (btnPavimentoConcreteRede) btnPavimentoConcreteRede.classList.add('desabilitado');
        if (btnPavimentoCeramicaRede) btnPavimentoCeramicaRede.classList.add('desabilitado');
        if (btnPavimentoPedraRede) btnPavimentoPedraRede.classList.remove('desabilitado');
        if (textoRepavimentacaoSimpleseRede) textoRepavimentacaoSimpleseRede.style.display = 'none';
        if (textoRepavimentacaoEspecialRede) textoRepavimentacaoEspecialRede.style.display = 'none';
        if (textoRepavimentacaoBlocoRede) textoRepavimentacaoBlocoRede.style.display = 'block';
    }
};

// ======================================
// FUNÇÕES: Reset e Toggle Recorte (Asfalto/Concreto)
// ======================================

const resetRecorteRamal = () => {
    recorteRamalSelected = null;
    recorteRamalAberto = false;
    if (btnRecorteRamalSim) btnRecorteRamalSim.classList.remove('desabilitado');
    if (btnRecorteRamalNao) btnRecorteRamalNao.classList.remove('desabilitado');
    if (textoPerguntaRecorteRamal) textoPerguntaRecorteRamal.style.display = 'none';
    if (containerRecorteRamal) containerRecorteRamal.style.display = 'none';
    if (hrRepavimentacaoAsfaltoRamal) hrRepavimentacaoAsfaltoRamal.style.display = 'none';
    if (textoRepavimentacaoAsfaltoRamal) textoRepavimentacaoAsfaltoRamal.style.display = 'none';
    if (textoReaterroValaRamal) textoReaterroValaRamal.style.display = 'none';
};

const toggleRecorteRamal = (opcao) => {
    if (recorteRamalSelected === opcao) {
        recorteRamalSelected = null;
        if (btnRecorteRamalSim) btnRecorteRamalSim.classList.remove('desabilitado');
        if (btnRecorteRamalNao) btnRecorteRamalNao.classList.remove('desabilitado');
        if (hrRepavimentacaoAsfaltoRamal) hrRepavimentacaoAsfaltoRamal.style.display = 'none';
        if (textoRepavimentacaoAsfaltoRamal) textoRepavimentacaoAsfaltoRamal.style.display = 'none';
        if (textoReaterroValaRamal) textoReaterroValaRamal.style.display = 'none';
        return;
    }

    recorteRamalSelected = opcao;
    if (opcao === 'sim') {
        if (btnRecorteRamalSim) btnRecorteRamalSim.classList.remove('desabilitado');
        if (btnRecorteRamalNao) btnRecorteRamalNao.classList.add('desabilitado');
        if (hrRepavimentacaoAsfaltoRamal) hrRepavimentacaoAsfaltoRamal.style.display = 'block';
        if (textoRepavimentacaoAsfaltoRamal) textoRepavimentacaoAsfaltoRamal.style.display = 'block';
        if (textoReaterroValaRamal) textoReaterroValaRamal.style.display = 'none';
    } else if (opcao === 'nao') {
        if (btnRecorteRamalSim) btnRecorteRamalSim.classList.add('desabilitado');
        if (btnRecorteRamalNao) btnRecorteRamalNao.classList.remove('desabilitado');
        if (hrRepavimentacaoAsfaltoRamal) hrRepavimentacaoAsfaltoRamal.style.display = 'none';
        if (textoRepavimentacaoAsfaltoRamal) textoRepavimentacaoAsfaltoRamal.style.display = 'none';
        if (textoReaterroValaRamal) textoReaterroValaRamal.style.display = 'block';
    }
};

const resetRecorteRede = () => {
    recorteRedeSelected = null;
    recorteRedeAberto = false;
    if (btnRecorteRedeSim) btnRecorteRedeSim.classList.remove('desabilitado');
    if (btnRecorteRedeNao) btnRecorteRedeNao.classList.remove('desabilitado');
    if (textoPerguntaRecorteRede) textoPerguntaRecorteRede.style.display = 'none';
    if (containerRecorteRede) containerRecorteRede.style.display = 'none';
    if (hrRepavimentacaoAsfaltoRede) hrRepavimentacaoAsfaltoRede.style.display = 'none';
    if (textoRepavimentacaoAsfaltoRede) textoRepavimentacaoAsfaltoRede.style.display = 'none';
    if (textoReaterroValaRede) textoReaterroValaRede.style.display = 'none';
};

const toggleRecorteRede = (opcao) => {
    if (recorteRedeSelected === opcao) {
        recorteRedeSelected = null;
        if (btnRecorteRedeSim) btnRecorteRedeSim.classList.remove('desabilitado');
        if (btnRecorteRedeNao) btnRecorteRedeNao.classList.remove('desabilitado');
        if (hrRepavimentacaoAsfaltoRede) hrRepavimentacaoAsfaltoRede.style.display = 'none';
        if (textoRepavimentacaoAsfaltoRede) textoRepavimentacaoAsfaltoRede.style.display = 'none';
        if (textoReaterroValaRede) textoReaterroValaRede.style.display = 'none';
        return;
    }

    recorteRedeSelected = opcao;
    if (opcao === 'sim') {
        if (btnRecorteRedeSim) btnRecorteRedeSim.classList.remove('desabilitado');
        if (btnRecorteRedeNao) btnRecorteRedeNao.classList.add('desabilitado');
        if (hrRepavimentacaoAsfaltoRede) hrRepavimentacaoAsfaltoRede.style.display = 'block';
        if (textoRepavimentacaoAsfaltoRede) textoRepavimentacaoAsfaltoRede.style.display = 'block';
        if (textoReaterroValaRede) textoReaterroValaRede.style.display = 'none';
    } else if (opcao === 'nao') {
        if (btnRecorteRedeSim) btnRecorteRedeSim.classList.add('desabilitado');
        if (btnRecorteRedeNao) btnRecorteRedeNao.classList.remove('desabilitado');
        if (hrRepavimentacaoAsfaltoRede) hrRepavimentacaoAsfaltoRede.style.display = 'none';
        if (textoRepavimentacaoAsfaltoRede) textoRepavimentacaoAsfaltoRede.style.display = 'none';
        if (textoReaterroValaRede) textoReaterroValaRede.style.display = 'block';
    }
};

// ======================================
// EVENT LISTENER: Botões Pavimento Calçada
// ======================================

if (btnPavimentoConcreteRamal) {
    btnPavimentoConcreteRamal.addEventListener('click', () => {
        togglePavimentoCalcadaRamal('concreto');
    });
}

if (btnPavimentoCeramicaRamal) {
    btnPavimentoCeramicaRamal.addEventListener('click', () => {
        togglePavimentoCalcadaRamal('ceramica');
    });
}

if (btnPavimentoPedraRamal) {
    btnPavimentoPedraRamal.addEventListener('click', () => {
        togglePavimentoCalcadaRamal('pedra');
    });
}

if (btnPavimentoConcreteRede) {
    btnPavimentoConcreteRede.addEventListener('click', () => {
        togglePavimentoCalcadaRede('concreto');
    });
}

if (btnPavimentoCeramicaRede) {
    btnPavimentoCeramicaRede.addEventListener('click', () => {
        togglePavimentoCalcadaRede('ceramica');
    });
}

if (btnPavimentoPedraRede) {
    btnPavimentoPedraRede.addEventListener('click', () => {
        togglePavimentoCalcadaRede('pedra');
    });
}

// ======================================
// EVENT LISTENER: Botões Pavimento Rua
// ======================================

if (btnPavimentoTerraRamal) {
    btnPavimentoTerraRamal.addEventListener('click', () => {
        togglePavimentoRuaRamal('terra');
    });
}

if (btnPavimentoConcreteRuaRamal) {
    btnPavimentoConcreteRuaRamal.addEventListener('click', () => {
        togglePavimentoRuaRamal('concreto');
    });
}

if (btnPavimentoAsfaltoRamal) {
    btnPavimentoAsfaltoRamal.addEventListener('click', () => {
        togglePavimentoRuaRamal('asfalto');
    });
}

if (btnPavimentoTerraRede) {
    btnPavimentoTerraRede.addEventListener('click', () => {
        togglePavimentoRuaRede('terra');
    });
}

if (btnPavimentoConcreteRuaRede) {
    btnPavimentoConcreteRuaRede.addEventListener('click', () => {
        togglePavimentoRuaRede('concreto');
    });
}

if (btnPavimentoAsfaltoRede) {
    btnPavimentoAsfaltoRede.addEventListener('click', () => {
        togglePavimentoRuaRede('asfalto');
    });
}

// ======================================
// EVENT LISTENER: Botões Recorte
// ======================================

if (btnRecorteRamalSim) {
    btnRecorteRamalSim.addEventListener('click', () => {
        toggleRecorteRamal('sim');
    });
}

if (btnRecorteRamalNao) {
    btnRecorteRamalNao.addEventListener('click', () => {
        toggleRecorteRamal('nao');
    });
}

if (btnRecorteRedeSim) {
    btnRecorteRedeSim.addEventListener('click', () => {
        toggleRecorteRede('sim');
    });
}

if (btnRecorteRedeNao) {
    btnRecorteRedeNao.addEventListener('click', () => {
        toggleRecorteRede('nao');
    });
}

// ======================================
// EVENT LISTENER: Conferência de Viabilidade - Cavalete
// ======================================

if (btnConferenciaViabilidadeCavalete) {
    btnConferenciaViabilidadeCavalete.addEventListener('click', () => {
        // Toggle: se já estava aberto, fechar
        if (conferenciaViabilidadeCavaleteAberto) {
            if (textoConferenciaViabilidadeCavalete) textoConferenciaViabilidadeCavalete.style.display = 'none';
            if (textoOrientacoesEXOCCavalete) textoOrientacoesEXOCCavalete.style.display = 'none';
            conferenciaViabilidadeCavaleteAberto = false;
            return;
        }

        // Abrir: mostra textos
        if (textoConferenciaViabilidadeCavalete) textoConferenciaViabilidadeCavalete.style.display = 'block';
        if (textoOrientacoesEXOCCavalete) textoOrientacoesEXOCCavalete.style.display = 'block';
        conferenciaViabilidadeCavaleteAberto = true;
    });
}

// ======================================
// EVENT LISTENER: Conferência de Viabilidade - Ramal/Rede
// ======================================

if (btnConferenciaViabilidadeRamalRede) {
    btnConferenciaViabilidadeRamalRede.addEventListener('click', () => {
        // Toggle: se já estava aberto, fechar
        if (conferenciaViabilidadeRamalRedeAberto) {
            if (textoConferenciaViabilidadeRamalRede) textoConferenciaViabilidadeRamalRede.style.display = 'none';
            if (textoOrientacoesEXOCRamalRede) textoOrientacoesEXOCRamalRede.style.display = 'none';
            conferenciaViabilidadeRamalRedeAberto = false;
            return;
        }

        // Abrir: mostra textos
        if (textoConferenciaViabilidadeRamalRede) textoConferenciaViabilidadeRamalRede.style.display = 'block';
        if (textoOrientacoesEXOCRamalRede) textoOrientacoesEXOCRamalRede.style.display = 'block';
        conferenciaViabilidadeRamalRedeAberto = true;
    });
}
