// Limpeza seletiva: não solicita remoção de cookies, senhas, cache ou histórico.
function limparPreenchimentoAutomatico() {
  if (!chrome.browsingData ||
      typeof chrome.browsingData.removeFormData !== "function") {
    console.error("[TI Autofill] Esta versão do navegador não oferece removeFormData().");
    return;
  }

  chrome.browsingData.removeFormData({}, function () {
    if (chrome.runtime.lastError) {
      console.error("[TI Autofill] Falha na limpeza:", chrome.runtime.lastError.message);
      return;
    }
    console.log("[TI Autofill] Dados de preenchimento automático removidos.");
  });
}

// Executa ao iniciar o navegador. Não executa continuamente.
chrome.runtime.onStartup.addListener(limparPreenchimentoAutomatico);

