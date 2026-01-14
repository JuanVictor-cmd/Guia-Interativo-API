document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os itens da legenda que servirão como toggle
    const filterToggles = document.querySelectorAll('.filtro-toggle');
    // 2. Seleciona todos os botões de serviço
    const menuButtons = document.querySelectorAll('.menu-button');
    // 3. Variável para rastrear o filtro ativo
    let activeCategory = null;

    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Pega a categoria do item da legenda clicado (ex: 'comercial')
            const selectedCategory = toggle.getAttribute('data-category');

            if (selectedCategory === activeCategory) {
                // Caso 1: Clicou na categoria ATIVA -> Desliga o filtro (Mostra todos)
                activeCategory = null;
                // Remove a classe 'active' de todos os itens da legenda
                filterToggles.forEach(t => t.classList.remove('active'));
            } else {
                // Caso 2: Clicou em uma categoria INATIVA -> Ativa o filtro (Mostra a categoria)
                activeCategory = selectedCategory;
                // Atualiza a classe 'active' para indicar a categoria selecionada
                filterToggles.forEach(t => {
                    t.classList.remove('active');
                    if (t === toggle) {
                        t.classList.add('active');
                    }
                });
            }

            // Itera sobre os botões do menu para aplicar o filtro
            menuButtons.forEach(button => {
                // Se não houver filtro ativo (activeCategory é null) OU
                // Se o botão tem a classe da categoria ativa
                if (activeCategory === null || button.classList.contains(activeCategory)) {
                    button.style.display = 'flex'; // Mostra o botão
                } else {
                    button.style.display = 'none'; // Esconde o botão
                }
            });
        });
    });
});