// Module IA — interface stable : JarvisAI.reply(text, history) -> Promise<string>
window.JarvisAI = {
  async reply(text, history) {
    // Étape 2 : remplacer par un appel réel à l'API IA (JARVIS_CONFIG.ai)
    await new Promise(r => setTimeout(r, 700));
    return t("fallback");
  }
};
