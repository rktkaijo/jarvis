# JARVIS PRIME — Étape 1

Interface de discussion sombre et futuriste (HTML/CSS/JS) empaquetée pour Android avec Capacitor.

## Structure
- `www/index.html`, `www/style.css` — interface
- `www/js/config.js` — réglages (langue, IA, voix)
- `www/js/i18n.js` — textes français / malagasy
- `www/js/ai.js` — module IA (à brancher étape 2)
- `www/js/voice.js` — module voix (à brancher)
- `www/js/app.js` — logique du chat

## Obtenir l'APK — méthode la plus simple (sans rien installer)
1. Crée un compte sur github.com, puis un nouveau dépôt.
2. Clique « uploading an existing file » et glisse tout le contenu de ce ZIP (y compris le dossier `.github`).
3. Ouvre l'onglet **Actions** : la compilation « Build APK » démarre (~5 min).
4. Ouvre le build terminé → section **Artifacts** → télécharge `jarvis-prime-apk`.
5. Décompresse, copie `app-debug.apk` sur le téléphone et installe-le (autorise « sources inconnues »).

## Méthode sur PC (Android Studio)
```
npm install
npx cap add android
npx cap sync android
npx cap open android
```
Puis dans Android Studio : Build → Build APK(s).
