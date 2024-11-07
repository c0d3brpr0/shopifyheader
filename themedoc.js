document.addEventListener("DOMContentLoaded", function() {
  // Criação do fundo overlay escuro
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // fundo escuro com opacidade
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";
  
  // Criação da popup
  const popup = document.createElement("div");
  popup.style.width = "90%";
  popup.style.maxWidth = "400px";
  popup.style.padding = "20px";
  popup.style.backgroundColor = "#ffffff";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
  popup.style.textAlign = "center";
  popup.style.fontFamily = "'Arial', sans-serif";

  // Estilo moderno e minimalista do texto e botão
  const message = document.createElement("h2");
  message.innerText = "Bem-vindo!";
  message.style.color = "#333333";
  message.style.fontSize = "24px";
  message.style.marginBottom = "20px";
  
  const button = document.createElement("button");
  button.innerText = "ENTRAR";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.color = "#ffffff";
  button.style.backgroundColor = "#333333";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.cursor = "pointer";
  button.style.transition = "0.3s ease";

  // Efeito de hover no botão
  button.addEventListener("mouseenter", function() {
    button.style.backgroundColor = "#555555";
  });
  button.addEventListener("mouseleave", function() {
    button.style.backgroundColor = "#333333";
  });

  // Fechar a popup ao clicar no botão
  button.addEventListener("click", function() {
    document.body.removeChild(overlay);
  });

  // Adiciona o texto e botão à popup
  popup.appendChild(message);
  popup.appendChild(button);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
});
