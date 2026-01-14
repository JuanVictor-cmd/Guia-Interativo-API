// Função genérica para alternar subníveis (expansão do acordeão)
function toggleNivel(botaoId, nivelId, linhaId = null) {
    const botao = document.getElementById(botaoId);
    const nivel = document.getElementById(nivelId);
    const linha = linhaId ? document.getElementById(linhaId) : null;

    if (botao && nivel) {

        // Função para desabilitar ou habilitar os outros botões de fluxo principal
        function disableOtherFlows(currentButtonId, shouldDisable) {
            // IDs dos botões dos fluxos principais de corte
            const flowButtons = ['btnCorteLISC', 'btnCorteCavaleteConsolidado', 'btnCorteRamalRede'];
            flowButtons.forEach(id => {
                if (id !== currentButtonId) {
                    const otherButton = document.getElementById(id);
                    if (otherButton) {
                        otherButton.classList.toggle('desabilitado', shouldDisable);
                    }
                }
            });
        }

        // NOVO: Função para desabilitar ou habilitar os outros botões de decisão final
        function disableOtherDecisions(currentButtonId, shouldDisable) {
            // IDs dos botões de decisão final
            const decisionButtons = ['btnLocalEscavado', 'btnAlteracaoCadastro', 'btnIrregularidade'];
            decisionButtons.forEach(id => {
                if (id !== currentButtonId) {
                    const otherButton = document.getElementById(id);
                    if (otherButton) {
                        otherButton.classList.toggle('desabilitado', shouldDisable);
                    }
                }
            });
        }


        botao.addEventListener('click', (event) => {

            const isFlowButton = ['btnCorteLISC', 'btnCorteCavaleteConsolidado', 'btnCorteRamalRede'].includes(botaoId);
            // NOVO: Verifica se é um botão de Decisão Final
            const isDecisionButton = ['btnLocalEscavado', 'btnAlteracaoCadastro', 'btnIrregularidade', 'btnValaRecordada', 'btnValaMaior1m'].includes(botaoId);


            // 1. Lógica de Bloqueio: Verifica se é um botão de fluxo OU decisão e se possui a classe 'desabilitado'
            if ((isFlowButton || isDecisionButton) && botao.classList.contains('desabilitado')) {
                event.preventDefault();
                //window.alert("Para continuar, clique novamente no botão para encerrar o procedimento atual e iniciar o próximo.");
                return;
            }

            // Verifica se é o botão principal ('Corte')
            const isInitialButton = (botaoId === 'btnCorte');
            // Verifica se a ação inicial (ocultar texto) já foi realizada
            const initialActionDone = botao.getAttribute('data-initial-action-done') === 'true';

            if (isInitialButton) {
                const instrucaoInicial = document.getElementById('instrucaoInicial');
                // 🎯 NOVO: Obter o nível de decisões finais
                const nivelDecisoesFinais = document.getElementById('nivelDecisoesFinais');

                if (!initialActionDone) {
                    // REGRAS ANTERIORES DO CHAT: Remover o texto 'Ao executar esta Ordem de Serviço...'
                    if (instrucaoInicial) {
                        instrucaoInicial.style.display = 'none'; // A instrução some por completo.
                    }
                    botao.setAttribute('data-initial-action-done', 'true');
                    nivel.classList.add('ativo');

                    // 🎯 CORREÇÃO: Ativa o nível das decisões finais ao clicar no botão "Corte" pela primeira vez
                    if (nivelDecisoesFinais) {
                        nivelDecisoesFinais.classList.add('ativo');
                    }
                    // ------------------------------------------------------------------------------------------

                } else {
                    // LÓGICA DOS CLIQUES SUBSEQUENTES (TOGGLE NORMAL)
                    nivel.classList.toggle('ativo');

                    // Se fechar, limpa os subníveis, mas MANTÉM o texto inicial OCULTO
                    if (!nivel.classList.contains('ativo')) {
                        botao.setAttribute('data-initial-action-done', 'false'); // Reseta a flag

                        // Força a limpeza de todos os subníveis ao fechar o botão principal
                        disableOtherFlows('btnCorte', false);

                        const nivelFluxosCorte = document.getElementById('nivelFluxosCorte');
                        if (nivelFluxosCorte) nivelFluxosCorte.classList.remove('ativo');

                        // NOVO: Garante que os botões de decisão final sejam reabilitados ao fechar o fluxo
                        // Reutiliza a variável ou declara novamente para o escopo
                        const nivelDecisoesFinais = document.getElementById('nivelDecisoesFinais');
                        if (nivelDecisoesFinais) nivelDecisoesFinais.classList.remove('ativo');

                        // Chama a função de limpeza completa (opcional, mas seguro)
                        limparTodosSubniveis();
                    }
                }

            } else {
                // LÓGICA PADRÃO PARA OS OUTROS BOTÕES (Toggle)

                nivel.classList.toggle('ativo');

                if (linha) {
                    linha.classList.toggle('oculta');
                }

                // 2. Lógica de Bloqueio/Desbloqueio de Fluxo
                if (isFlowButton) {
                    const isNowActive = nivel.classList.contains('ativo');
                    disableOtherFlows(botaoId, isNowActive);
                }

                // NOVO: Lógica de Bloqueio/Desbloqueio de Decisão Final
                // O botão de decisão só deve desabilitar os IRMÃOS (Alteração Cadastro/Irregularidade) se não for o "btnValaRecordada" ou "btnValaMaior1m"
                if (isDecisionButton && ['btnLocalEscavado', 'btnAlteracaoCadastro', 'btnIrregularidade'].includes(botaoId)) {
                    const isNowActive = nivel.classList.contains('ativo');
                    disableOtherDecisions(botaoId, isNowActive);

                    // NOVO: Garante a limpeza do subfluxo de decisão ao fechar o botão principal de decisão
                    if (!isNowActive) {
                        limparSubfluxoDecisao(botaoId);
                    }
                }
            }
        });
    }
}

// Função para alternar **apenas** o texto de instrução (para sub-botões de procedimento ou foto)
function toggleTexto(botaoId, textoId) {
    const botao = document.getElementById(botaoId);
    const texto = document.getElementById(textoId);

    if (botao && texto) {
        botao.addEventListener('click', () => {
            texto.classList.toggle('ativo');
        });
    }
}

// NOVO: Função para alternar opções (Sim/Não, Calçada/Rua, etc.) com lógica de desabilitar/habilitar outros botões do mesmo grupo
function toggleOpcaoExclusiva(
    // ID do botão clicado (Sim ou Não, Calçada, Rua, etc.)
    botaoId,
    // IDs dos botões que formam o grupo exclusivo (Sim, Não, ou Calçada, Rua, etc.)
    botoesExclusivos,
    // ID do Nível/Texto que deve ser ativado/desativado
    nivelOuTextoId,
    // (Opcional) IDs de outros botões de NÍVEL SUPERIOR que devem ser desabilitados/habilitados ao ATIVAR o fluxo SIM/NÃO (apenas para o primeiro nível de decisão)
    outrosBotoesParaDesabilitar = []
) {
    const botao = document.getElementById(botaoId);
    const nivelOuTexto = document.getElementById(nivelOuTextoId);

    if (botao && nivelOuTexto) {
        botao.addEventListener('click', () => {
            const isNowActive = nivelOuTexto.classList.toggle('ativo');

            // 1. Lógica de desabilitar/habilitar o par exclusivo/grupo
            botoesExclusivos.forEach(id => {
                if (id !== botaoId) {
                    const otherButton = document.getElementById(id);
                    if (otherButton) {
                        otherButton.classList.toggle('desabilitado', isNowActive);
                    }
                }
            });

            // 2. Lógica de desabilitar/habilitar os botões de NÍVEL SUPERIOR (Se houver)
            if (outrosBotoesParaDesabilitar.length > 0) {
                outrosBotoesParaDesabilitar.forEach(id => {
                    // O botão principal da decisão clicada deve ser DESABILITADO (ex: Local Escavado)
                    const parentId = botaoId.includes('Escavado') || botaoId.includes('Pavimento') || botaoId.includes('Vala') || botaoId.includes('Material') ? 'btnLocalEscavado' : (botaoId.includes('Cadastro') ? 'btnAlteracaoCadastro' : 'btnIrregularidade');

                    if (id !== parentId) { // Desabilita os botões de decisão irmãos (Alteração Cadastro, Irregularidade)
                        const otherButton = document.getElementById(id);
                        if (otherButton) {
                            otherButton.classList.toggle('desabilitado', isNowActive);
                        }
                    }

                    // Desabilita o botão pai para impedir o fechamento/reabertura acidental e garantir que o fluxo seja fechado apenas pela opção oposta
                    if (id === parentId) {
                        const parentButton = document.getElementById(parentId);
                        if (parentButton) {
                            parentButton.classList.toggle('desabilitado', isNowActive);
                        }
                    }
                });
            }

            // 3. Lógica de Limpeza de Subfluxo ao Desativar (Apenas se estiver desativando)
            if (!isNowActive) {
                // Força o fechamento de todos os subníveis dentro do fluxo (útil para o NÃO)
                limparSubfluxoInterno(nivelOuTextoId);
            }
        });
    }
}


// NOVO: Função para limpeza de subfluxos internos aninhados
function limparSubfluxoInterno(nivelId) {
    const nivel = document.getElementById(nivelId);
    if (nivel) {
        // Encontra todos os 'subnivel' e 'instrucao-texto.subnivel' aninhados e remove a classe 'ativo'
        const subniveis = nivel.querySelectorAll('.subnivel.ativo');
        subniveis.forEach(sub => sub.classList.remove('ativo'));

        const textos = nivel.querySelectorAll('.instrucao-texto.subnivel.ativo');
        textos.forEach(texto => texto.classList.remove('ativo'));

        // Encontra todos os botões que estão desabilitados e os habilita
        const botoesDesabilitados = nivel.querySelectorAll('.button.desabilitado');
        botoesDesabilitados.forEach(btn => btn.classList.remove('desabilitado'));
    }
}


// NOVO: Função de Limpeza ao fechar o botão principal de Decisão Final
function limparSubfluxoDecisao(botaoId) {
    switch (botaoId) {
        case 'btnLocalEscavado':
            // Reabilita os botões SIM/NÃO
            document.getElementById('btnEscavadoSim')?.classList.remove('desabilitado');
            document.getElementById('btnEscavadoNao')?.classList.remove('desabilitado');

            // Força a limpeza do subfluxo NÃO
            document.getElementById('textoEscavadoNao')?.classList.remove('ativo');

            // Força a limpeza do subfluxo SIM e seus aninhamentos
            limparSubfluxoInterno('nivelEscavadoSimOpcoes');
            break;
        case 'btnAlteracaoCadastro':
            // Fecha as opções SIM/NÃO e reabilita
            document.getElementById('textoCadastroSim')?.classList.remove('ativo');
            document.getElementById('textoCadastroNao')?.classList.remove('ativo');
            document.getElementById('btnCadastroSim')?.classList.remove('desabilitado');
            document.getElementById('btnCadastroNao')?.classList.remove('desabilitado');
            break;
        case 'btnIrregularidade':
            // Fecha as opções SIM/NÃO e reabilita
            document.getElementById('textoIrregularidadeSim')?.classList.remove('ativo');
            document.getElementById('textoIrregularidadeNao')?.classList.remove('ativo');
            document.getElementById('btnIrregularidadeSim')?.classList.remove('desabilitado');
            document.getElementById('btnIrregularidadeNao')?.classList.remove('desabilitado');
            break;
    }
}


// Função de Limpeza para ser chamada ao fechar o nível principal
function limparTodosSubniveis() {
    // Níveis Corte LISC, Cavalete, Ramal/Rede
    const fluxosIds = ['nivelCorteLISC', 'nivelCorteCavaleteConteudo', 'nivelCorteRamalRedeConteudo'];
    fluxosIds.forEach(id => document.getElementById(id)?.classList.remove('ativo'));

    // Níveis de Decisão Final
    const nivelDecisoesFinais = document.getElementById('nivelDecisoesFinais');
    if (nivelDecisoesFinais) nivelDecisoesFinais.classList.remove('ativo');

    // Força a limpeza e reabilitação dos botões de Decisão Final
    const decisionButtons = ['btnLocalEscavado', 'btnAlteracaoCadastro', 'btnIrregularidade'];
    decisionButtons.forEach(id => {
        document.getElementById(id)?.classList.remove('desabilitado');
        limparSubfluxoDecisao(id); // Limpa o subfluxo de cada decisão
    });

    // Garante que todos os textos de procedimento/foto aninhados sejam fechados
    const textos = document.querySelectorAll('.instrucao-texto.subnivel');
    textos.forEach(texto => texto.classList.remove('ativo'));

    // Garante que botões de fluxo principal sejam reabilitados
    const flowButtons = ['btnCorteLISC', 'btnCorteCavaleteConsolidado', 'btnCorteRamalRede'];
    flowButtons.forEach(id => document.getElementById(id)?.classList.remove('desabilitado'));
}


// --- INICIALIZAÇÃO DO FLUXO PRINCIPAL DE CORTE ---

// 1. Botão "Corte" (Botão Principal) - Abre a seção de fluxos principais
toggleNivel('btnCorte', 'nivelCorte');

// 2. Botões dos Fluxos Principais
toggleNivel('btnCorteLISC', 'nivelCorteLISC');
toggleNivel('btnCorteCavaleteConsolidado', 'nivelCorteCavaleteConteudo');
toggleNivel('btnCorteRamalRede', 'nivelCorteRamalRedeConteudo');

// Lógica de Procedimento e Padrão de Fotos (Mantida)
// Corte LISC
const btnProcedimentoCorte = document.getElementById('btnProcedimentoCorte');
const nivelProcedimentoCorteConteudo = document.getElementById('nivelProcedimentoCorteConteudo');
const textoProcedimentoCorte = document.getElementById('textoProcedimentoCorte');
if (btnProcedimentoCorte) {
    btnProcedimentoCorte.addEventListener('click', () => {
        nivelProcedimentoCorteConteudo?.classList.toggle('ativo');
        textoProcedimentoCorte?.classList.toggle('ativo');
    });
}
toggleTexto('btnPadraoFotosCorteLISC', 'textoPadraoFotosCorte');
toggleNivel('btnPadraoFotosCorteLISC', 'nivelPadraoFotosCorte');
// Fotos LISC
toggleTexto('btnFachadaCorte', 'textoFachadaCorte');
toggleTexto('btnChassiLeituraCorte', 'textoChassiLeituraCorte');
toggleTexto('btnExecucaoCorte', 'textoExecucaoCorte');
toggleTexto('btnEntregaComunicado', 'textoEntregaComunicado');

// Corte Cavalete
const btnProcedimentoCavaleteConsolidado = document.getElementById('btnProcedimentoCavaleteConsolidado');
const nivelProcedimentoCavaleteConteudo = document.getElementById('nivelProcedimentoCavaleteConteudo');
const textoProcedimentoCavaleteConsolidado = document.getElementById('textoProcedimentoCavaleteConsolidado');
if (btnProcedimentoCavaleteConsolidado) {
    btnProcedimentoCavaleteConsolidado.addEventListener('click', () => {
        nivelProcedimentoCavaleteConteudo?.classList.toggle('ativo');
        textoProcedimentoCavaleteConsolidado?.classList.toggle('ativo');
    });
}
toggleTexto('btnPadraoFotosCavaleteConsolidado', 'textoPadraoFotosCavaleteConsolidado');
toggleNivel('btnPadraoFotosCavaleteConsolidado', 'nivelPadraoFotosCavaleteConteudo');
// Fotos Cavalete
toggleTexto('btnFachadaCavaleteConsolidado', 'textoFachadaCavaleteConsolidado');
toggleTexto('btnChassiLeituraCavaleteConsolidado', 'textoChassiLeituraCavaleteConsolidado');
toggleTexto('btnExecucaoCavaleteConsolidado', 'textoExecucaoCavaleteConsolidado');
toggleTexto('btnEntregaComunicadoCavaleteConsolidado', 'textoEntregaComunicadoCavaleteConsolidado');

// Corte Ramal / Rede
const btnProcedimentoCorteRamalRedeConsolidado = document.getElementById('btnProcedimentoCorteRamalRedeConsolidado');
const nivelProcedimentoCorteRamalRedeConteudo = document.getElementById('nivelProcedimentoCorteRamalRedeConteudo');
const textoProcedimentoCorteRamalRedeConsolidado = document.getElementById('textoProcedimentoCorteRamalRedeConsolidado');
if (btnProcedimentoCorteRamalRedeConsolidado) {
    btnProcedimentoCorteRamalRedeConsolidado.addEventListener('click', () => {
        nivelProcedimentoCorteRamalRedeConteudo?.classList.toggle('ativo');
        textoProcedimentoCorteRamalRedeConsolidado?.classList.toggle('ativo');
    });
}
toggleTexto('btnPadraoFotosRamalRede', 'textoPadraoFotosRamalRede');
toggleNivel('btnPadraoFotosRamalRede', 'nivelPadraoFotosRamalRedeConteudo');
// Fotos Ramal/Rede
toggleTexto('btnFachadaLocalEscavadoRamalRede', 'textoFachadaLocalEscavadoRamalRede');
toggleTexto('btnChassiLacreLeituraRamalRede', 'textoChassiLacreLeituraRamalRede');
toggleTexto('btnExecucaoCorteRamalRede', 'textoExecucaoCorteRamalRede');
toggleTexto('btnEntregaComunicadoRamalRede', 'textoEntregaComunicadoRamalRede');


// =============================================
// NOVO: LÓGICA DE DECISÕES PÓS-CORTE
// =============================================

// 17. Botão principal "Local Foi Escavado?"
toggleNivel('btnLocalEscavado', 'nivelLocalEscavadoConteudo');

// --- 17.1 Fluxo Local Escavado: SIM/NÃO com Toggle ---
const btnEscavadoNao = document.getElementById('btnEscavadoNao');
const btnEscavadoSim = document.getElementById('btnEscavadoSim');
const textoEscavadoNao = document.getElementById('textoEscavadoNao');
const nivelEscavadoSimOpcoes = document.getElementById('nivelEscavadoSimOpcoes');

if (btnEscavadoNao && btnEscavadoSim) {
    // Estados para rastrear se cada botão está selecionado
    let naoSelecionado = false;
    let simSelecionado = false;

    // CLIQUE EM NÃO
    btnEscavadoNao.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (naoSelecionado) {
            // TOGGLE OFF: Deselecionar NÃO
            naoSelecionado = false;
            textoEscavadoNao.classList.remove('ativo');
            btnEscavadoSim.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar NÃO
            naoSelecionado = true;
            simSelecionado = false;

            textoEscavadoNao.classList.add('ativo');
            nivelEscavadoSimOpcoes.classList.remove('ativo');
            btnEscavadoSim.classList.add('desabilitado');
        }
    });

    // CLIQUE EM SIM
    btnEscavadoSim.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (simSelecionado) {
            // TOGGLE OFF: Deselecionar SIM
            simSelecionado = false;
            nivelEscavadoSimOpcoes.classList.remove('ativo');
            btnEscavadoNao.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar SIM
            simSelecionado = true;
            naoSelecionado = false;

            nivelEscavadoSimOpcoes.classList.add('ativo');
            textoEscavadoNao.classList.remove('ativo');
            btnEscavadoNao.classList.add('desabilitado');
        }
    });
}

// --- 17.2 Fluxo Calçada/Rua (Após SIM em Local Escavado) ---

const btnPavimentoCalcada = document.getElementById('btnPavimentoCalcada');
const btnPavimentoRua = document.getElementById('btnPavimentoRua');
const nivelPavimentoCalcada = document.getElementById('nivelPavimentoCalcada');
const nivelPavimentoRua = document.getElementById('nivelPavimentoRua');
const textoPavimentoCalcada = document.getElementById('textoPavimentoCalcada');

if (btnPavimentoCalcada && btnPavimentoRua) {
    let calcadaSelecionada = false;
    let ruaSelecionada = false;

    // CLIQUE EM CALÇADA
    btnPavimentoCalcada.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (calcadaSelecionada) {
            // TOGGLE OFF: Deselecionar Calçada
            calcadaSelecionada = false;
            if (nivelPavimentoCalcada) nivelPavimentoCalcada.classList.remove('ativo');
            if (textoPavimentoCalcada) textoPavimentoCalcada.classList.remove('ativo');
            btnPavimentoRua.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar Calçada
            calcadaSelecionada = true;
            ruaSelecionada = false;

            if (nivelPavimentoCalcada) nivelPavimentoCalcada.classList.add('ativo');
            if (textoPavimentoCalcada) textoPavimentoCalcada.classList.add('ativo');
            if (nivelPavimentoRua) nivelPavimentoRua.classList.remove('ativo');
            btnPavimentoRua.classList.add('desabilitado');
        }
    });

    // CLIQUE EM RUA
    btnPavimentoRua.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (ruaSelecionada) {
            // TOGGLE OFF: Deselecionar Rua
            ruaSelecionada = false;
            if (nivelPavimentoRua) nivelPavimentoRua.classList.remove('ativo');
            btnPavimentoCalcada.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar Rua
            ruaSelecionada = true;
            calcadaSelecionada = false;

            if (nivelPavimentoRua) nivelPavimentoRua.classList.add('ativo');
            if (nivelPavimentoCalcada) nivelPavimentoCalcada.classList.remove('ativo');
            if (textoPavimentoCalcada) textoPavimentoCalcada.classList.remove('ativo');
            btnPavimentoCalcada.classList.add('desabilitado');
        }
    });
}

// --- 17.3 Fluxo Vala Foi Recordada? (Após Rua) com Toggle ---

toggleNivel('btnValaRecordada', 'nivelValaRecordadaConteudo');

const btnValaRecordadaSim = document.getElementById('btnValaRecordadaSim');
const btnValaRecordadaNao = document.getElementById('btnValaRecordadaNao');
const textoValaRecordadaNao = document.getElementById('textoValaRecordadaNao');
const nivelValaRecordadaSimOpcoes = document.getElementById('nivelValaRecordadaSimOpcoes');

if (btnValaRecordadaSim && btnValaRecordadaNao) {
    // Estados para rastrear se cada botão está selecionado
    let valaSimSelecionado = false;
    let valaNaoSelecionado = false;

    // CLIQUE EM NÃO
    btnValaRecordadaNao.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (valaNaoSelecionado) {
            // TOGGLE OFF: Deselecionar NÃO
            valaNaoSelecionado = false;
            textoValaRecordadaNao.classList.remove('ativo');
            btnValaRecordadaSim.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar NÃO
            valaNaoSelecionado = true;
            valaSimSelecionado = false;

            textoValaRecordadaNao.classList.add('ativo');
            nivelValaRecordadaSimOpcoes.classList.remove('ativo');
            btnValaRecordadaSim.classList.add('desabilitado');
        }
    });

    // CLIQUE EM SIM
    btnValaRecordadaSim.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (valaSimSelecionado) {
            // TOGGLE OFF: Deselecionar SIM
            valaSimSelecionado = false;
            nivelValaRecordadaSimOpcoes.classList.remove('ativo');
            btnValaRecordadaNao.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar SIM
            valaSimSelecionado = true;
            valaNaoSelecionado = false;

            nivelValaRecordadaSimOpcoes.classList.add('ativo');
            textoValaRecordadaNao.classList.remove('ativo');
            btnValaRecordadaNao.classList.add('desabilitado');
        }
    });
}

// --- 17.4 Fluxo Terra/Concreto/Asfalto (Após SIM em Vala Recordada) com Toggle ---

const btnMaterialTerra = document.getElementById('btnMaterialTerra');
const btnMaterialConcreto = document.getElementById('btnMaterialConcreto');
const btnMaterialAsfalto = document.getElementById('btnMaterialAsfalto');
const textoMaterialTerra = document.getElementById('textoMaterialTerra');
const textoMaterialConcreto = document.getElementById('textoMaterialConcreto');
const nivelMaterialAsfalto = document.getElementById('nivelMaterialAsfalto');

if (btnMaterialTerra && btnMaterialConcreto && btnMaterialAsfalto) {
    // Estados para rastrear qual material está selecionado
    let terraSelecionada = false;
    let concretoSelecionado = false;
    let asfaltoSelecionado = false;

    // CLIQUE EM TERRA
    btnMaterialTerra.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (terraSelecionada) {
            // TOGGLE OFF: Deselecionar Terra
            terraSelecionada = false;
            textoMaterialTerra.classList.remove('ativo');
            btnMaterialConcreto.classList.remove('desabilitado');
            btnMaterialAsfalto.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar Terra
            terraSelecionada = true;
            concretoSelecionado = false;
            asfaltoSelecionado = false;

            textoMaterialTerra.classList.add('ativo');
            textoMaterialConcreto.classList.remove('ativo');
            if (nivelMaterialAsfalto) nivelMaterialAsfalto.classList.remove('ativo');
            btnMaterialConcreto.classList.add('desabilitado');
            btnMaterialAsfalto.classList.add('desabilitado');
        }
    });

    // CLIQUE EM CONCRETO
    btnMaterialConcreto.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (concretoSelecionado) {
            // TOGGLE OFF: Deselecionar Concreto
            concretoSelecionado = false;
            textoMaterialConcreto.classList.remove('ativo');
            btnMaterialTerra.classList.remove('desabilitado');
            btnMaterialAsfalto.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar Concreto
            concretoSelecionado = true;
            terraSelecionada = false;
            asfaltoSelecionado = false;

            textoMaterialConcreto.classList.add('ativo');
            textoMaterialTerra.classList.remove('ativo');
            if (nivelMaterialAsfalto) nivelMaterialAsfalto.classList.remove('ativo');
            btnMaterialTerra.classList.add('desabilitado');
            btnMaterialAsfalto.classList.add('desabilitado');
        }
    });

    // CLIQUE EM ASFALTO
    btnMaterialAsfalto.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (asfaltoSelecionado) {
            // TOGGLE OFF: Deselecionar Asfalto
            asfaltoSelecionado = false;
            if (nivelMaterialAsfalto) nivelMaterialAsfalto.classList.remove('ativo');
            btnMaterialTerra.classList.remove('desabilitado');
            btnMaterialConcreto.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar Asfalto
            asfaltoSelecionado = true;
            terraSelecionada = false;
            concretoSelecionado = false;

            if (nivelMaterialAsfalto) nivelMaterialAsfalto.classList.add('ativo');
            textoMaterialTerra.classList.remove('ativo');
            textoMaterialConcreto.classList.remove('ativo');
            btnMaterialTerra.classList.add('desabilitado');
            btnMaterialConcreto.classList.add('desabilitado');
        }
    });
}

// --- 17.5 Fluxo Vala Maior que 1m²? (Após Asfalto) com Toggle ---

toggleNivel('btnValaMaior1m', 'nivelValaMaior1mConteudo');

const btnValaMaior1mSim = document.getElementById('btnValaMaior1mSim');
const btnValaMaior1mNao = document.getElementById('btnValaMaior1mNao');
const textoValaMaior1mSim = document.getElementById('textoValaMaior1mSim');
const textoValaMaior1mNao = document.getElementById('textoValaMaior1mNao');

if (btnValaMaior1mSim && btnValaMaior1mNao) {
    // Estados para rastrear qual botão está selecionado
    let valaMaiorSimSelecionado = false;
    let valaMaiorNaoSelecionado = false;

    // CLIQUE EM SIM
    btnValaMaior1mSim.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (valaMaiorSimSelecionado) {
            // TOGGLE OFF: Deselecionar SIM
            valaMaiorSimSelecionado = false;
            textoValaMaior1mSim.classList.remove('ativo');
            btnValaMaior1mNao.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar SIM
            valaMaiorSimSelecionado = true;
            valaMaiorNaoSelecionado = false;

            textoValaMaior1mSim.classList.add('ativo');
            textoValaMaior1mNao.classList.remove('ativo');
            btnValaMaior1mNao.classList.add('desabilitado');
        }
    });

    // CLIQUE EM NÃO
    btnValaMaior1mNao.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) {
            event.preventDefault();
            return;
        }

        if (valaMaiorNaoSelecionado) {
            // TOGGLE OFF: Deselecionar NÃO
            valaMaiorNaoSelecionado = false;
            textoValaMaior1mNao.classList.remove('ativo');
            btnValaMaior1mSim.classList.remove('desabilitado');
        } else {
            // TOGGLE ON: Selecionar NÃO
            valaMaiorNaoSelecionado = true;
            valaMaiorSimSelecionado = false;

            textoValaMaior1mNao.classList.add('ativo');
            textoValaMaior1mSim.classList.remove('ativo');
            btnValaMaior1mSim.classList.add('desabilitado');
        }
    });
}

// =============================================
// LÓGICA DE DECISÕES PÓS-CORTE - INDEPENDENTES
// =============================================

// 18. Botão principal "Cliente Solicitou Alteração de Cadastro?"
toggleNivel('btnAlteracaoCadastro', 'nivelAlteracaoCadastroConteudo');

const btnCadastroSim = document.getElementById('btnCadastroSim');
const btnCadastroNao = document.getElementById('btnCadastroNao');
const textoCadastroSim = document.getElementById('textoCadastroSim');
const textoCadastroNao = document.getElementById('textoCadastroNao');

if (btnCadastroSim && btnCadastroNao) {
    // CLIQUE EM SIM (toggle)
    btnCadastroSim.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) { event.preventDefault(); return; }

        const ativo = textoCadastroSim.classList.contains('ativo');
        if (ativo) {
            // TOGGLE OFF
            textoCadastroSim.classList.remove('ativo');
            btnCadastroNao.classList.remove('desabilitado');
        } else {
            // TOGGLE ON
            textoCadastroSim.classList.add('ativo');
            textoCadastroNao.classList.remove('ativo');
            btnCadastroNao.classList.add('desabilitado');
        }
    });

    // CLIQUE EM NÃO (toggle)
    btnCadastroNao.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) { event.preventDefault(); return; }

        const ativo = textoCadastroNao.classList.contains('ativo');
        if (ativo) {
            // TOGGLE OFF
            textoCadastroNao.classList.remove('ativo');
            btnCadastroSim.classList.remove('desabilitado');
        } else {
            // TOGGLE ON
            textoCadastroNao.classList.add('ativo');
            textoCadastroSim.classList.remove('ativo');
            btnCadastroSim.classList.add('desabilitado');
        }
    });
}

// 19. Botão principal "Suspeitas de Irregularidade?"
toggleNivel('btnIrregularidade', 'nivelIrregularidadeConteudo');

const btnIrregularidadeSim = document.getElementById('btnIrregularidadeSim');
const btnIrregularidadeNao = document.getElementById('btnIrregularidadeNao');
const textoIrregularidadeSim = document.getElementById('textoIrregularidadeSim');
const textoIrregularidadeNao = document.getElementById('textoIrregularidadeNao');

if (btnIrregularidadeSim && btnIrregularidadeNao) {
    // CLIQUE EM SIM (toggle)
    btnIrregularidadeSim.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) { event.preventDefault(); return; }

        const ativo = textoIrregularidadeSim.classList.contains('ativo');
        if (ativo) {
            // TOGGLE OFF
            textoIrregularidadeSim.classList.remove('ativo');
            btnIrregularidadeNao.classList.remove('desabilitado');
        } else {
            // TOGGLE ON
            textoIrregularidadeSim.classList.add('ativo');
            textoIrregularidadeNao.classList.remove('ativo');
            btnIrregularidadeNao.classList.add('desabilitado');
        }
    });

    // CLIQUE EM NÃO (toggle)
    btnIrregularidadeNao.addEventListener('click', function (event) {
        if (this.classList.contains('desabilitado')) { event.preventDefault(); return; }

        const ativo = textoIrregularidadeNao.classList.contains('ativo');
        if (ativo) {
            // TOGGLE OFF
            textoIrregularidadeNao.classList.remove('ativo');
            btnIrregularidadeSim.classList.remove('desabilitado');
        } else {
            // TOGGLE ON
            textoIrregularidadeNao.classList.add('ativo');
            textoIrregularidadeSim.classList.remove('ativo');
            btnIrregularidadeSim.classList.add('desabilitado');
        }
    });
}