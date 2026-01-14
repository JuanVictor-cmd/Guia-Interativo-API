// 1. Captura do Token (URL ou LocalStorage)
const params = new URLSearchParams(window.location.search);
let token = params.get("token");

if (!token) {
    token = localStorage.getItem("auth_token");
} else {
    localStorage.setItem("auth_token", token);
}

const DEV_MODE = location.hostname === "127.0.0.1" || location.hostname === "localhost";

// Função para mostrar o conteúdo da página
function liberarPagina() {
    document.body.classList.add("acesso-liberado");
}

// 2. Proteção contra o botão "Voltar" (BFCache)
window.addEventListener("pageshow", function (event) {
    // Se a página for carregada do cache (botão voltar), força validar de novo
    if (event.persisted) {
        validarAcesso();
    }
});

// Função para validar em segundo plano
async function validarEmBackground(tokenAtivo) {
    try {
        const response = await fetch(
            `https://api-guia-6ms9.onrender.com/validate?token=${tokenAtivo}`,
            { cache: "no-store" }
        );

        if (!response.ok) {
            localStorage.clear();
            window.location.replace("/bloqueado.html");
        }
    } catch (err) {
        console.warn("API offline, mantendo acesso local.");
    }
}

async function validarAcesso() {
    // Bloqueio preventivo básico
    if (!DEV_MODE && !token) {
        window.location.replace("/bloqueado.html");
        return;
    }

    // Modo de Desenvolvimento
    if (DEV_MODE) {
        if (!localStorage.getItem("expires_at")) {
            localStorage.setItem("expires_at", Date.now() + 5 * 60 * 1000);
        }
        liberarPagina();
        return;
    }

    const storedExpiresAt = localStorage.getItem("expires_at");

    // --- CHECAGEM DE EXPIRAÇÃO ---
    if (storedExpiresAt && Date.now() < Number(storedExpiresAt)) {
        console.log("Acesso garantido via cache local");
        liberarPagina(); // Mostra o conteúdo
        validarEmBackground(token); // Checa na API por trás
        return;
    }

    // Caso o tempo já tenha passado no localStorage
    if (storedExpiresAt && Date.now() >= Number(storedExpiresAt)) {
        localStorage.clear();
        window.location.replace("/bloqueado.html");
        return;
    }

    // Caso não tenha expiração salva (Primeiro acesso)
    try {
        const response = await fetch(
            `https://api-guia-6ms9.onrender.com/validate?token=${token}`,
            { cache: "no-store" }
        );

        if (!response.ok) throw new Error("Invalido");

        const data = await response.json();
        localStorage.setItem("expires_at", Date.now() + (data.remaining * 1000));

        liberarPagina(); // Só libera após confirmar com a API

    } catch (err) {
        localStorage.clear();
        window.location.replace("/bloqueado.html");
    }
}

// Executa a validação ao carregar
validarAcesso();