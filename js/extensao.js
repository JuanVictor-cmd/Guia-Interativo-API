// Função para resetar Serviços Posteriores (declarada primeiro para estar disponível)
function resetServicosPosteriores() {
    const containerReaterroCompactacaoSN = document.getElementById('containerReaterroCompactacaoSN');
    const textoDesdobroReaterro = document.getElementById('textoDesdobroReaterro');
    const textoPavimentoEscavado = document.getElementById('textoPavimentoEscavado');
    const containerPavimentoOpcoes = document.getElementById('containerPavimentoOpcoes');
    const textoFinalizarServico = document.getElementById('textoFinalizarServico');
    const textoDesdobroConcreto = document.getElementById('textoDesdobroConcreto');
    const nivelAsfaltoQuestionamento = document.getElementById('nivelAsfaltoQuestionamento');
    const textoPerguntaReaterro = document.getElementById('textoPerguntaReaterro');
    const textoPerguntaVala = document.getElementById('textoPerguntaVala');

    if (containerReaterroCompactacaoSN) containerReaterroCompactacaoSN.classList.remove('ativo');
    if (textoDesdobroReaterro) textoDesdobroReaterro.classList.remove('ativo');
    if (textoPavimentoEscavado) textoPavimentoEscavado.style.display = 'none';
    if (containerPavimentoOpcoes) containerPavimentoOpcoes.classList.remove('ativo');
    if (textoFinalizarServico) textoFinalizarServico.classList.remove('ativo');
    if (textoDesdobroConcreto) textoDesdobroConcreto.classList.remove('ativo');
    if (nivelAsfaltoQuestionamento) nivelAsfaltoQuestionamento.classList.remove('ativo');
    if (textoPerguntaReaterro) textoPerguntaReaterro.style.display = 'none';
    if (textoPerguntaVala) textoPerguntaVala.style.display = 'none';

    // Itens internos do Asfalto
    const containerAsfaltoSN = document.getElementById('containerAsfaltoSN');
    const textoDesdobroAsfalto = document.getElementById('textoDesdobroAsfalto');

    if (containerAsfaltoSN) containerAsfaltoSN.classList.remove('ativo');
    if (textoDesdobroAsfalto) textoDesdobroAsfalto.classList.remove('ativo');

    document.querySelectorAll('.linha-fluxo-posterior').forEach(linha => linha.classList.remove('ativo'));
    document.querySelectorAll('.linha-fluxo-posterior')
        .forEach(linha => {
            linha.classList.remove('ativo');
            linha.classList.add('oculta');
        });

    // Reabilita todos os botões de Pavimento para o caso de ter clicado em um deles
    const btnTerra = document.getElementById('btnTerra');
    const btnConcreto = document.getElementById('btnConcreto');
    const btnAsfalto = document.getElementById('btnAsfalto');

    [btnTerra, btnConcreto, btnAsfalto].forEach(btn => {
        if (btn) {
            btn.classList.remove('desabilitado');
            btn.disabled = false;
        }
    });
}

// Função genérica para alternar subníveis (expansão do acordeão)
function toggleNivel(botaoId, nivelId, linhaId = null) {
    const botao = document.getElementById(botaoId);
    const nivel = document.getElementById(nivelId);
    const linha = linhaId ? document.getElementById(linhaId) : null;

    if (botao && nivel) {
        botao.addEventListener('click', () => {

            // VERIFICA SE É O BOTÃO INICIAL
            const isInitialButton = (botaoId === 'btnExtensao');
            // Verifica se a ação inicial (ocultar texto) já foi realizada
            const initialActionDone = botao.getAttribute('data-initial-action-done') === 'true';

            if (isInitialButton) {
                // CORREÇÃO: ID da instrução inicial
                const instrucaoInicial = document.getElementById('instrucaoInicialExtensao');

                if (!initialActionDone) {
                    // --- LÓGICA DO PRIMEIRO CLIQUE (OCULTAR TEXTO E EXPANDIR) ---
                    if (instrucaoInicial) {
                        instrucaoInicial.style.display = 'none';
                    }
                    botao.setAttribute('data-initial-action-done', 'true');

                    // Apenas ativa o nível que contém os dois botões
                    nivel.classList.add('ativo');

                } else {
                    // --- LÓGICA DOS CLIQUES SUBSEQUENTES (TOGGLE NORMAL) ---
                    nivel.classList.toggle('ativo');

                    // Se Extensao for fechado, fechar os níveis internos e resetar TUDO
                    const nivelProcedimentoConteudo = document.getElementById('nivelProcedimentoConteudo');
                    const textoProcedimento = document.getElementById('textoProcedimento');
                    const textoAfericao = document.getElementById('textoAfericao');
                    const btnAfericao = document.getElementById('btnAfericao');
                    const btnProcedimento = document.getElementById('btnProcedimento');

                    // Itens de Aferição
                    const textoTrenaFita = document.getElementById('textoTrenaFita');
                    const textoFachadaLocalizacao = document.getElementById('textoFachadaLocalizacao');
                    const btnTrenaFita = document.getElementById('btnTrenaFita');
                    const btnFachadaLocalizacao = document.getElementById('btnFachadaLocalizacao');

                    // Itens de Padrão de Fotos
                    const btnPadraoFotos = document.getElementById('btnPadraoFotos');
                    const nivelPadraoFotosConteudo = document.getElementById('nivelPadraoFotosConteudo');

                    // Itens de Serviços Posteriores (NOVO)
                    const nivelServicosPosterioresConteudo = document.getElementById('nivelServicosPosterioresConteudo');

                    if (!nivel.classList.contains('ativo')) {
                        if (nivelProcedimentoConteudo) nivelProcedimentoConteudo.classList.remove('ativo');
                        if (textoProcedimento) textoProcedimento.classList.remove('ativo');
                        if (textoAfericao) textoAfericao.classList.remove('ativo');

                        // Reseta o estado dos botões principais
                        if (btnAfericao) {
                            btnAfericao.classList.remove('desabilitado');
                            btnAfericao.disabled = false;
                        }
                        if (btnProcedimento) {
                            btnProcedimento.classList.remove('desabilitado');
                            btnProcedimento.disabled = false;
                        }

                        // Reseta o estado dos sub-botões de Aferição
                        if (textoTrenaFita) textoTrenaFita.classList.remove('ativo');
                        if (textoFachadaLocalizacao) textoFachadaLocalizacao.classList.remove('ativo');
                        if (btnTrenaFita) {
                            btnTrenaFita.classList.remove('desabilitado');
                            btnTrenaFita.disabled = false;
                        }
                        if (btnFachadaLocalizacao) {
                            btnFachadaLocalizacao.classList.remove('desabilitado');
                            btnFachadaLocalizacao.disabled = false;
                        }

                        // Reseta o estado de Padrão de Fotos e seus sub-elementos
                        if (nivelPadraoFotosConteudo) nivelPadraoFotosConteudo.classList.remove('ativo');
                        if (btnPadraoFotos) {
                            btnPadraoFotos.classList.remove('desabilitado');
                            btnPadraoFotos.disabled = false;
                        }

                        // Reseta o estado dos sub-botões de Padrão de Fotos
                        const padraoFotosSubButtons = [
                            document.getElementById('btnLocalDemarcado'),
                            document.getElementById('btnAberturaVala'),
                            document.getElementById('btnAssentamentoTubulacao'),
                            document.getElementById('btnComprovacaoTecnica'),
                            document.getElementById('btnReaterro'),
                        ];

                        padraoFotosSubButtons.forEach(btn => {
                            if (btn) {
                                btn.classList.remove('desabilitado');
                                btn.disabled = false;
                            }
                        });

                        // Reseta os textos dos sub-botões de Padrão de Fotos
                        const padraoFotosSubTexts = [
                            document.getElementById('textoLocalDemarcado'),
                            document.getElementById('textoAberturaVala'),
                            document.getElementById('textoAssentamentoTubulacao'),
                            document.getElementById('textoComprovacaoTecnica'),
                            document.getElementById('textoReaterro'),
                        ];
                        padraoFotosSubTexts.forEach(text => {
                            if (text) text.classList.remove('ativo');
                        });

                        // NOVO: Reseta o estado de Serviços Posteriores
                        if (nivelServicosPosterioresConteudo) nivelServicosPosterioresConteudo.classList.remove('ativo');
                        // Se existir a função de reset (declarada no NOVO bloco abaixo)
                        if (typeof resetServicosPosteriores === 'function') {
                            resetServicosPosteriores();
                        }
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


// --- Lógica Específica: Procedimento e Aferição ---
function setupProcedimentoAfericaoLogic() {
    const btnProcedimento = document.getElementById('btnProcedimento');
    const btnAfericao = document.getElementById('btnAfericao');
    const textoProcedimento = document.getElementById('textoProcedimento');
    const nivelProcedimentoConteudo = document.getElementById('nivelProcedimentoConteudo');
    const textoAfericao = document.getElementById('textoAfericao');

    if (btnProcedimento && btnAfericao && textoProcedimento && nivelProcedimentoConteudo) {

        // LÓGICA PARA PROCEDIMENTO
        btnProcedimento.addEventListener('click', () => {

            // 1. Toggle o container e o texto de Procedimento (expandir/recolher)
            const isExpanded = nivelProcedimentoConteudo.classList.toggle('ativo');
            textoProcedimento.classList.toggle('ativo');

            // 2. Controlar o estado do botão Aferição e seu texto
            if (isExpanded) {
                // Se Procedimento expandiu: Desabilitar Aferição e fechar seu texto (se aberto)
                btnAfericao.classList.add('desabilitado');
                btnAfericao.disabled = true;

                if (textoAfericao && textoAfericao.classList.contains('ativo')) {
                    textoAfericao.classList.remove('ativo');
                    // Garantir que ao fechar o Afericao, o conteúdo de Padrao de Fotos também feche
                    const nivelPadraoFotosConteudo = document.getElementById('nivelPadraoFotosConteudo');
                    if (nivelPadraoFotosConteudo) nivelPadraoFotosConteudo.classList.remove('ativo');
                }
            } else {
                // Se Procedimento recolheu: Habilitar Aferição
                btnAfericao.classList.remove('desabilitado');
                btnAfericao.disabled = false;
            }
        });

        // LÓGICA PARA AFERIÇÃO (Toggle simples, só se não estiver desabilitado)
        btnAfericao.addEventListener('click', (e) => {
            if (btnAfericao.disabled) {
                e.preventDefault(); // Impede o clique se estiver desabilitado
                return;
            }

            // Alterna o texto
            const isExpanded = textoAfericao.classList.toggle('ativo');

            // Desabilitar Procedimento quando Aferição expandir
            if (isExpanded) {
                // Se Aferição expandiu: Desabilitar Procedimento
                btnProcedimento.classList.add('desabilitado');
                btnProcedimento.disabled = true;

                // Fechar Procedimento se estiver aberto
                if (nivelProcedimentoConteudo.classList.contains('ativo')) {
                    nivelProcedimentoConteudo.classList.remove('ativo');
                    textoProcedimento.classList.remove('ativo');
                }
            } else {
                // Se Aferição recolheu: Habilitar Procedimento
                btnProcedimento.classList.remove('desabilitado');
                btnProcedimento.disabled = false;
            }
        });
    }
}


// --- Lógica Específica: Subníveis de Aferição (Trena/Fita, Fachada, Padrão de Fotos) ---
function setupAfericaoSubnivels() {
    const btnTrenaFita = document.getElementById('btnTrenaFita');
    const textoTrenaFita = document.getElementById('textoTrenaFita');
    const btnFachadaLocalizacao = document.getElementById('btnFachadaLocalizacao');
    const textoFachadaLocalizacao = document.getElementById('textoFachadaLocalizacao');
    const btnPadraoFotos = document.getElementById('btnPadraoFotos');
    const nivelPadraoFotosConteudo = document.getElementById('nivelPadraoFotosConteudo');

    if (btnTrenaFita && btnFachadaLocalizacao && btnPadraoFotos) {

        // LÓGICA PARA TRENA E FITA
        btnTrenaFita.addEventListener('click', (e) => {
            if (btnTrenaFita.disabled) { e.preventDefault(); return; }

            const isExpanded = textoTrenaFita.classList.toggle('ativo');

            if (isExpanded) {
                // Se Trena/Fita expandiu: Desabilitar Fachada e Padrão de Fotos
                btnFachadaLocalizacao.classList.add('desabilitado');
                btnFachadaLocalizacao.disabled = true;
                btnPadraoFotos.classList.add('desabilitado');
                btnPadraoFotos.disabled = true;

                // Fechar textos de Fachada e Padrão de Fotos se abertos
                if (textoFachadaLocalizacao.classList.contains('ativo')) {
                    textoFachadaLocalizacao.classList.remove('ativo');
                }
                if (nivelPadraoFotosConteudo.classList.contains('ativo')) {
                    nivelPadraoFotosConteudo.classList.remove('ativo');
                }
            } else {
                // Se Trena/Fita recolheu: Habilitar Fachada e Padrão de Fotos
                btnFachadaLocalizacao.classList.remove('desabilitado');
                btnFachadaLocalizacao.disabled = false;
                btnPadraoFotos.classList.remove('desabilitado');
                btnPadraoFotos.disabled = false;
            }
        });

        // LÓGICA PARA FACHADA E LOCALIZAÇÃO
        btnFachadaLocalizacao.addEventListener('click', (e) => {
            if (btnFachadaLocalizacao.disabled) { e.preventDefault(); return; }

            const isExpanded = textoFachadaLocalizacao.classList.toggle('ativo');

            if (isExpanded) {
                // Se Fachada expandiu: Desabilitar Trena/Fita e Padrão de Fotos
                btnTrenaFita.classList.add('desabilitado');
                btnTrenaFita.disabled = true;
                btnPadraoFotos.classList.add('desabilitado');
                btnPadraoFotos.disabled = true;

                // Fechar textos de Trena/Fita e Padrão de Fotos se abertos
                if (textoTrenaFita.classList.contains('ativo')) {
                    textoTrenaFita.classList.remove('ativo');
                }
                if (nivelPadraoFotosConteudo.classList.contains('ativo')) {
                    nivelPadraoFotosConteudo.classList.remove('ativo');
                }
            } else {
                // Se Fachada recolheu: Habilitar Trena/Fita e Padrão de Fotos
                btnTrenaFita.classList.remove('desabilitado');
                btnTrenaFita.disabled = false;
                btnPadraoFotos.classList.remove('desabilitado');
                btnPadraoFotos.disabled = false;
            }
        });

        // LÓGICA PARA PADRÃO DE FOTOS
        btnPadraoFotos.addEventListener('click', (e) => {
            if (btnPadraoFotos.disabled) { e.preventDefault(); return; }

            const isExpanded = nivelPadraoFotosConteudo.classList.toggle('ativo');

            if (isExpanded) {
                // Se Padrão de Fotos expandiu: Desabilitar Trena/Fita e Fachada
                btnTrenaFita.classList.add('desabilitado');
                btnTrenaFita.disabled = true;
                btnFachadaLocalizacao.classList.add('desabilitado');
                btnFachadaLocalizacao.disabled = true;

                // Fechar textos de Trena/Fita e Fachada se abertos
                if (textoTrenaFita.classList.contains('ativo')) {
                    textoTrenaFita.classList.remove('ativo');
                }
                if (textoFachadaLocalizacao.classList.contains('ativo')) {
                    textoFachadaLocalizacao.classList.remove('ativo');
                }
            } else {
                // Se Padrão de Fotos recolheu: Habilitar Trena/Fita e Fachada
                btnTrenaFita.classList.remove('desabilitado');
                btnTrenaFita.disabled = false;
                btnFachadaLocalizacao.classList.remove('desabilitado');
                btnFachadaLocalizacao.disabled = false;

                // Limpa o estado dos sub-botões internos de Padrão de Fotos ao fechar
                const padraoFotosSubButtons = [
                    document.getElementById('btnLocalDemarcado'),
                    document.getElementById('btnAberturaVala'),
                    document.getElementById('btnAssentamentoTubulacao'),
                    document.getElementById('btnComprovacaoTecnica'),
                    document.getElementById('btnReaterro'),
                ];

                const padraoFotosSubTexts = [
                    document.getElementById('textoLocalDemarcado'),
                    document.getElementById('textoAberturaVala'),
                    document.getElementById('textoAssentamentoTubulacao'),
                    document.getElementById('textoComprovacaoTecnica'),
                    document.getElementById('textoReaterro'),
                ];

                padraoFotosSubButtons.forEach(btn => {
                    if (btn) {
                        btn.classList.remove('desabilitado');
                        btn.disabled = false;
                    }
                });
                padraoFotosSubTexts.forEach(text => {
                    if (text) text.classList.remove('ativo');
                });
            }
        });
    }
}


// --- NOVA Lógica Específica: Subníveis de Padrão de Fotos (Acordeão Vertical) ---
function setupPadraoFotosSubnivels() {
    // Array com IDs dos botões e seus respectivos textos de conteúdo
    const subNivels = [
        { btnId: 'btnLocalDemarcado', textId: 'textoLocalDemarcado' },
        { btnId: 'btnAberturaVala', textId: 'textoAberturaVala' },
        { btnId: 'btnAssentamentoTubulacao', textId: 'textoAssentamentoTubulacao' },
        { btnId: 'btnComprovacaoTecnica', textId: 'textoComprovacaoTecnica' },
        { btnId: 'btnReaterro', textId: 'textoReaterro' }
    ];

    subNivels.forEach((current, currentIndex) => {
        const currentBtn = document.getElementById(current.btnId);
        const currentText = document.getElementById(current.textId);

        if (currentBtn && currentText) {
            currentBtn.addEventListener('click', (e) => {
                if (currentBtn.disabled) { e.preventDefault(); return; }

                const isExpanded = currentText.classList.toggle('ativo');

                // Pega todos os outros botões da lista para desabilitar/habilitar
                const otherButtons = subNivels.filter((_, index) => index !== currentIndex)
                    .map(item => document.getElementById(item.btnId));
                // Pega todos os outros textos da lista para fechar
                const otherTexts = subNivels.filter((_, index) => index !== currentIndex)
                    .map(item => document.getElementById(item.textId));

                if (isExpanded) {
                    // Se o botão atual expandiu: Desabilitar todos os outros e fechar seus textos
                    otherButtons.forEach(btn => {
                        if (btn) {
                            btn.classList.add('desabilitado');
                            btn.disabled = true;
                        }
                    });
                    otherTexts.forEach(text => {
                        if (text && text.classList.contains('ativo')) {
                            text.classList.remove('ativo');
                        }
                    });
                } else {
                    // Se o botão atual recolheu: Habilitar todos os outros
                    otherButtons.forEach(btn => {
                        if (btn) {
                            btn.classList.remove('desabilitado');
                            btn.disabled = false;
                        }
                    });
                }
            });
        }
    });
}


// --- NOVO: Lógica Específica para Serviços Posteriores ---

function toggleSimNao(btnAtual, btnOposto, onAtivar, onReset) {
    if (!btnAtual || !btnOposto) return;

    btnAtual.addEventListener('click', () => {
        const isAtivo = btnAtual.classList.contains('ativo');

        if (isAtivo) {
            // SEGUNDO CLIQUE → RESET
            btnAtual.classList.remove('ativo');
            btnOposto.classList.remove('desabilitado');
            btnOposto.disabled = false;

            if (typeof onReset === 'function') onReset();
            return;
        }

        // PRIMEIRO CLIQUE
        btnAtual.classList.add('ativo');
        btnOposto.classList.add('desabilitado');
        btnOposto.disabled = true;

        if (typeof onAtivar === 'function') onAtivar();
    });
}



function setupServicosPosterioresLogic() {
    const btnServicosPosteriores = document.getElementById('btnServicosPosteriores');
    const nivelServicosPosterioresConteudo = document.getElementById('nivelServicosPosterioresConteudo');
    const containerReaterroCompactacaoSN = document.getElementById('containerReaterroCompactacaoSN');
    const textoDesdobroReaterro = document.getElementById('textoDesdobroReaterro');
    const textoPavimentoEscavado = document.getElementById('textoPavimentoEscavado');
    const containerPavimentoOpcoes = document.getElementById('containerPavimentoOpcoes');

    // Elementos de Pavimento
    const btnTerra = document.getElementById('btnTerra');
    const btnConcreto = document.getElementById('btnConcreto');
    const btnAsfalto = document.getElementById('btnAsfalto');
    const textoFinalizarServico = document.getElementById('textoFinalizarServico');
    const textoDesdobroConcreto = document.getElementById('textoDesdobroConcreto');

    // Elementos de Asfalto
    const nivelAsfaltoQuestionamento = document.getElementById('nivelAsfaltoQuestionamento');
    const containerAsfaltoSN = document.getElementById('containerAsfaltoSN');
    const textoDesdobroAsfalto = document.getElementById('textoDesdobroAsfalto');
    const textoDesdobroReaterroAsfalto = document.getElementById('textoDesdobroReaterroAsfalto');

    // LÓGICA DO BOTÃO PRINCIPAL (Serviços Posteriores)
    if (btnServicosPosteriores) {
        btnServicosPosteriores.addEventListener('click', () => {
            const textoPerguntaReaterro = document.getElementById('textoPerguntaReaterro');

            nivelServicosPosterioresConteudo.classList.toggle('ativo');

            // Mostrar ou ocultar texto e botões
            if (nivelServicosPosterioresConteudo.classList.contains('ativo')) {
                if (textoPerguntaReaterro) textoPerguntaReaterro.style.display = 'block';
                containerReaterroCompactacaoSN.classList.add('ativo');
            } else {
                if (textoPerguntaReaterro) textoPerguntaReaterro.style.display = 'none';
                containerReaterroCompactacaoSN.classList.remove('ativo');
                resetServicosPosteriores();
            }
        });
    }

    // Removido - btnReaterroCompactacao agora é texto que aparece automaticamente


    // LÓGICA DE SIM/NÃO (Reaterro e Compactação)

    if (btnReaterroSim) {
        btnReaterroSim.addEventListener('click', () => {
            if (btnReaterroSim.classList.contains('ativo')) {
                // Se já estava ativo, desativa tudo
                btnReaterroSim.classList.remove('ativo');
                btnReaterroNao.classList.remove('ativo');
                textoDesdobroReaterro.classList.remove('ativo');
                textoPavimentoEscavado.style.display = 'none';
                containerPavimentoOpcoes.classList.remove('ativo');
            } else {
                // Ativa o botão Sim e mostra texto + container
                btnReaterroSim.classList.add('ativo');
                btnReaterroNao.classList.remove('ativo');
                textoDesdobroReaterro.classList.remove('ativo');
                textoPavimentoEscavado.style.display = 'block';
                containerPavimentoOpcoes.classList.add('ativo');
            }
        });
    }

    if (btnReaterroNao) {
        btnReaterroNao.addEventListener('click', () => {
            if (btnReaterroNao.classList.contains('ativo')) {
                // Se já estava ativo, desativa
                btnReaterroNao.classList.remove('ativo');
                textoDesdobroReaterro.classList.remove('ativo');
            } else {
                // Ativa o botão Não e oculta pavimento
                btnReaterroNao.classList.add('ativo');
                btnReaterroSim.classList.remove('ativo');
                textoDesdobroReaterro.classList.add('ativo');
                textoPavimentoEscavado.style.display = 'none';
                containerPavimentoOpcoes.classList.remove('ativo');
            }
        });
    }



    // LÓGICA DO PAVIMENTO ESCAVADO - agora é controlado pelo btnReaterroSim
    // (não há mais botão btnPavimentoEscavado, apenas texto)

    // LÓGICA DAS OPÇÕES DE PAVIMENTO ESCAVADO

    // TERRA: Finalizar o serviço (texto verde)
    if (btnTerra) {
        btnTerra.addEventListener('click', () => {

            const isAtivo = btnTerra.classList.contains('ativo');

            if (isAtivo) {
                // SEGUNDO CLIQUE → RESET
                btnTerra.classList.remove('ativo');
                textoFinalizarServico.classList.remove('ativo');

                [btnConcreto, btnAsfalto].forEach(btn => {
                    btn.classList.remove('desabilitado');
                    btn.disabled = false;
                });

                return;
            }

            // PRIMEIRO CLIQUE
            btnTerra.classList.add('ativo');

            textoDesdobroConcreto.classList.remove('ativo');
            nivelAsfaltoQuestionamento.classList.remove('ativo');
            textoFinalizarServico.classList.add('ativo');

            [btnConcreto, btnAsfalto].forEach(btn => {
                btn.classList.add('desabilitado');
                btn.disabled = true;
            });
        });
    }


    // CONCRETO: Abrir desdobro Repavimentação Concreto (texto vermelho)
    if (btnConcreto) {
        btnConcreto.addEventListener('click', () => {

            const isAtivo = btnConcreto.classList.contains('ativo');

            if (isAtivo) {
                btnConcreto.classList.remove('ativo');
                textoDesdobroConcreto.classList.remove('ativo');

                [btnTerra, btnAsfalto].forEach(btn => {
                    btn.classList.remove('desabilitado');
                    btn.disabled = false;
                });

                return;
            }

            btnConcreto.classList.add('ativo');

            textoFinalizarServico.classList.remove('ativo');
            nivelAsfaltoQuestionamento.classList.remove('ativo');
            textoDesdobroConcreto.classList.add('ativo');

            [btnTerra, btnAsfalto].forEach(btn => {
                btn.classList.add('desabilitado');
                btn.disabled = true;
            });
        });
    }


    // ASFALTO: Abrir Validação de Asfalto
    if (btnAsfalto) {
        btnAsfalto.addEventListener('click', () => {
            const textoPerguntaVala = document.getElementById('textoPerguntaVala');
            const containerAsfaltoSN = document.getElementById('containerAsfaltoSN');
            const isAtivo = btnAsfalto.classList.contains('ativo');

            if (isAtivo) {
                btnAsfalto.classList.remove('ativo');
                nivelAsfaltoQuestionamento.classList.remove('ativo');
                if (textoPerguntaVala) textoPerguntaVala.style.display = 'none';
                if (containerAsfaltoSN) containerAsfaltoSN.classList.remove('ativo');

                [btnTerra, btnConcreto].forEach(btn => {
                    btn.classList.remove('desabilitado');
                    btn.disabled = false;
                });

                return;
            }

            btnAsfalto.classList.add('ativo');

            textoFinalizarServico.classList.remove('ativo');
            textoDesdobroConcreto.classList.remove('ativo');
            nivelAsfaltoQuestionamento.classList.add('ativo');
            if (textoPerguntaVala) textoPerguntaVala.style.display = 'block';
            if (containerAsfaltoSN) containerAsfaltoSN.classList.add('ativo');

            [btnTerra, btnConcreto].forEach(btn => {
                btn.classList.add('desabilitado');
                btn.disabled = true;
            });
        });
    }

    // Removido - btnValaRecortada agora é texto que aparece automaticamente

    // LÓGICA DE SIM/NÃO (Vala Recortada/Asfalto)
    const btnAsfaltoSim = document.getElementById('btnAsfaltoSim');
    const btnAsfaltoNao = document.getElementById('btnAsfaltoNao');

    // SIM (Asfalto): Abrir desdobro Repavimentação Asfalto (texto vermelho)
    toggleSimNao(
        btnAsfaltoSim,
        btnAsfaltoNao,
        () => {
            textoDesdobroAsfalto.classList.add('ativo');
            textoDesdobroReaterroAsfalto.classList.remove('ativo');
        },
        () => {
            textoDesdobroAsfalto.classList.remove('ativo');
        }
    );

    toggleSimNao(
        btnAsfaltoNao,
        btnAsfaltoSim,
        () => {
            textoDesdobroReaterroAsfalto.classList.add('ativo');
            textoDesdobroAsfalto.classList.remove('ativo');
        },
        () => {
            textoDesdobroReaterroAsfalto.classList.remove('ativo');
        }
    );

}

// --- INICIALIZAÇÃO E LÓGICA DO LINK CONSOLIDADOS ---
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Inicializa o fluxo principal do acordeão ---

    // Inicializa o primeiro nível (Extensão)
    toggleNivel('btnExtensao', 'nivelExtensao');

    // Inicializa a lógica de Procedimento/Aferição
    setupProcedimentoAfericaoLogic();

    // Inicializa a lógica dos subníveis de Aferição (Trena/Fita, Fachada, Padrão de Fotos)
    setupAfericaoSubnivels();

    // Inicializa a lógica dos subníveis de Padrão de Fotos
    setupPadraoFotosSubnivels();

    // NOVO: Inicializa a lógica de Serviços Posteriores
    setupServicosPosterioresLogic();

    // --- 2. Lógica do Link de Abertura Forçada (Seção 2) ---

    const linkAfericao = document.querySelector('.link-fechar-abrir-secao');
    const btnProcedimento = document.getElementById('btnProcedimento');
    const btnAfericao = document.getElementById('btnAfericao');
    const textoAfericao = document.getElementById('textoAfericao');
    const nivelExtensao = document.getElementById('nivelExtensao');
    const nivelProcedimentoConteudo = document.getElementById('nivelProcedimentoConteudo');
    const textoProcedimento = document.getElementById('textoProcedimento');

    if (linkAfericao && btnAfericao && textoAfericao && nivelExtensao) {
        linkAfericao.addEventListener('click', function (event) {
            event.preventDefault();

            // 1. --- Fechar Tudo Opcional (Elementos Internos) ---
            if (nivelProcedimentoConteudo) nivelProcedimentoConteudo.classList.remove('ativo');
            if (textoProcedimento) textoProcedimento.classList.remove('ativo');

            const subNiveisAfericao = [
                document.getElementById('textoTrenaFita'),
                document.getElementById('textoFachadaLocalizacao'),
                document.getElementById('nivelPadraoFotosConteudo')
            ];
            subNiveisAfericao.forEach(el => {
                if (el) el.classList.remove('ativo');
            });

            const padraoFotosSubTexts = document.querySelectorAll('#nivelPadraoFotosConteudo .instrucao-texto.subnivel');
            padraoFotosSubTexts.forEach(el => el.classList.remove('ativo'));

            // NOVO: Resetar Serviços Posteriores
            const nivelServicosPosterioresConteudo = document.getElementById('nivelServicosPosterioresConteudo');
            if (nivelServicosPosterioresConteudo) nivelServicosPosterioresConteudo.classList.remove('ativo');
            resetServicosPosteriores();


            // 2. --- Habilitar/Desabilitar Botões e Abrir Camadas ---

            const todosBotoesEtapa = document.querySelectorAll('button.etapa');
            todosBotoesEtapa.forEach(function (btn) {
                btn.classList.remove('desabilitado');
                btn.disabled = false;
            });

            nivelExtensao.classList.add('ativo');

            // 3. --- Abrir o Conteúdo Alvo (Aferição) e Ajustar Botões ---

            textoAfericao.classList.add('ativo');

            const parentContent = document.getElementById('textoComprovacaoTecnica');
            if (parentContent) {
                parentContent.classList.add('ativo');
            }

            if (btnProcedimento) {
                btnProcedimento.classList.add('desabilitado');
                btnProcedimento.disabled = true;
            }

            // 4. --- Rolar Suavemente ---
            if (btnAfericao) {
                btnAfericao.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

function mostrarLinha(botaoId, linhaId, containerId = null) {
    const botao = document.getElementById(botaoId);
    const linha = document.getElementById(linhaId);
    const container = containerId ? document.getElementById(containerId) : null;

    if (!botao || !linha) return;

    botao.addEventListener('click', () => {

        // Se existir container, ele manda no estado da linha
        const deveMostrar = container
            ? container.classList.contains('ativo')
            : !linha.classList.contains('ativo');

        if (deveMostrar) {
            linha.classList.add('ativo');
            linha.classList.remove('oculta');
        } else {
            linha.classList.remove('ativo');
            linha.classList.add('oculta');
        }
    });
}

// Removido: mostrarLinha('btnPavimentoEscavado', 'linhaPavimento');
// O btnPavimentoEscavado foi substituído por textoPavimentoEscavado (texto sem botão)