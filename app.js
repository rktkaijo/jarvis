(function () {
  const $ = (id) => document.getElementById(id);
  const list = $("messages"), form = $("composer"), input = $("input");
  const history = [];
  window.currentLang = localStorage.getItem("jp_lang") || JARVIS_CONFIG.defaultLang;

  const time = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  function add(role, text) {
    const el = document.createElement("div");
    el.className = "msg " + role;
    el.textContent = text;
    const s = document.createElement("small"); s.textContent = time(); el.appendChild(s);
    list.appendChild(el); list.scrollTop = list.scrollHeight;
    history.push({ role, text });
    return el;
  }

  function applyLang() {
    $("langBtn").textContent = currentLang.toUpperCase();
    input.placeholder = t("placeholder");
    $("status").textContent = t("online");
    document.documentElement.lang = currentLang;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim(); if (!text) return;
    input.value = ""; add("user", text);
    const typing = document.createElement("div");
    typing.className = "msg bot typing"; typing.textContent = "•••";
    list.appendChild(typing); list.scrollTop = list.scrollHeight;
    const answer = await JarvisAI.reply(text, history);
    typing.remove(); add("bot", answer); JarvisVoice.speak(answer);
  });

  $("langBtn").onclick = () => {
    currentLang = currentLang === "fr" ? "mg" : "fr";
    localStorage.setItem("jp_lang", currentLang); applyLang();
  };
  $("micBtn").onclick = () => add("bot", t("voiceSoon"));

  applyLang();
  add("bot", t("welcome"));
})();
