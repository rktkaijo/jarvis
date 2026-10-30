// Module voix — interface stable : listen() et speak(text)
window.JarvisVoice = {
  available: false,
  async listen() { return null; },   // Étape voix : reconnaissance vocale
  speak(text) {}                     // Étape voix : synthèse vocale
};
