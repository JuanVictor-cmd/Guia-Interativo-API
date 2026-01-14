function iniciarTimer() {
  const el = document.getElementById("timer");
  if (!el) return;

  const interval = setInterval(() => {
    const expiresAt = localStorage.getItem("expires_at");

    if (!expiresAt) {
      clearInterval(interval);
      window.location.href = "/bloqueado.html";
      return;
    }

    const remaining = Math.floor((expiresAt - Date.now()) / 1000);

    if (remaining <= 0) {
      clearInterval(interval);
      localStorage.removeItem("expires_at");
      window.location.href = "/bloqueado.html";
      return;
    }

    const min = Math.floor(remaining / 60);
    const sec = remaining % 60;

    el.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
  }, 1000);
}

iniciarTimer();
