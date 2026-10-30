// Traductions FR / Malagasy (à compléter à l'étape langues)
window.I18N = {
  fr: { placeholder: "Parle à JARVIS…", online: "● En ligne", welcome: "Bonjour, je suis JARVIS PRIME. Comment puis-je t'aider ?", fallback: "Message reçu. Mon module IA sera activé à la prochaine étape.", voiceSoon: "La voix arrive à la prochaine étape." },
  mg: { placeholder: "Miresaka amin'i JARVIS…", online: "● Mifandray", welcome: "Manao ahoana, izaho no JARVIS PRIME. Inona no azoko anampiana anao?", fallback: "Voaray ny hafatra. Ho alefa amin'ny dingana manaraka ny IA.", voiceSoon: "Ho avy amin'ny dingana manaraka ny feo." }
};
window.t = (key) => (I18N[window.currentLang] || I18N.fr)[key] || key;
