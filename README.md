# ume2meu — Chatterbox 🎙️

> **Real-time, two-way live interpreter. No human middleman.**
> Break the language barrier — speak in your native tongue, hear the response in theirs.

[![PWA](https://img.shields.io/badge/PWA-installable-blueviolet)](https://sudarshanchakraindia.github.io/ume2meu/)
[![Languages](https://img.shields.io/badge/languages-40%2B-cyan)](https://sudarshanchakraindia.github.io/ume2meu/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🤝 **Face-to-Face mode** | Two people, one screen. Each speaks their language, hears a translated TTS response |
| 📞 **Remote Call mode** | Two devices connected peer-to-peer via WebRTC — no acoustic relay, no server |
| 🌐 **40+ languages** | Hindi, English, Spanish, French, Arabic, Chinese, Japanese, and many more |
| 🔁 **Fallback chain** | MyMemory → LibreTranslate mirrors → graceful error notice |
| ⌨️ **Text mode** | Full functionality on Firefox & Safari via text input when mic API is unavailable |
| 📲 **Installable PWA** | Add to home screen on iOS, Android, or desktop Chrome |
| 📜 **Persistent history** | Conversations saved to localStorage — survives page refresh |
| ♿ **Accessible** | Full aria labels, roles, and keyboard navigation |

---

## 🚀 Getting Started

### Use it instantly (no install needed)
Open in **Google Chrome** or **Microsoft Edge**:
```
https://sudarshanchakraindia.github.io/ume2meu/
```

### Install as a PWA
1. Open the URL above in Chrome on Android or desktop
2. Tap the **"Install Chatterbox"** banner or use the browser menu → *Install app*
3. The app launches standalone — no browser chrome, feels native

### Run locally
```bash
git clone https://github.com/sudarshanchakraindia/ume2meu.git
cd ume2meu
# Serve with any static server, e.g.:
npx serve .
# or
python3 -m http.server 8080
```
Then open `http://localhost:8080` in Chrome.

---

## 🤝 Face-to-Face Mode

Place the phone flat between two people.

1. **Person A** taps their mic → speaks in their language
2. Translation plays aloud on **Person B's** side automatically
3. **Person B** taps their mic → responds in their language
4. Translation plays back on **Person A's** side

Use the **⇄ swap** button to flip both languages instantly. Tap 🌐 to change either language.

---

## 📞 Remote Call Mode (WebRTC P2P)

No server. Direct device-to-device via PeerJS/WebRTC.

1. **Person A** opens the app → taps **Generate Room Code** → shares the 6-character code
2. **Person B** opens the app → enters the code → taps **Connect to Room**
3. Once the ⚡ WebRTC badge appears, speak normally
4. Translations are sent directly over the data channel and played on the other device

> **Fallback**: If no peer is connected yet, the app falls back to the acoustic relay (TTS plays through your mic so the phone call picks it up).

---

## 🌐 Browser Support

| Browser | Voice (STT) | Text mode | WebRTC |
|---|---|---|---|
| Chrome / Edge | ✅ Full | ✅ | ✅ |
| Firefox | ❌ (STT not supported) | ✅ | ✅ |
| Safari iOS 16+ | ⚠️ Partial | ✅ | ✅ |
| Samsung Internet | ✅ | ✅ | ✅ |

> For best experience, use **Google Chrome** or **Microsoft Edge**.

---

## 🔧 Translation API

The app uses a **free, no-key fallback chain**:

1. **MyMemory** (`api.mymemory.translated.net`) — 1,000 words/day free per IP
2. **LibreTranslate** mirrors — tried in sequence if MyMemory quota is hit
3. **Graceful degradation** — shows original text with a clear notice if all fail

Each request has an **8-second per-fetch timeout** and a **12-second total watchdog** to prevent the mic from freezing on network drops.

---

## 📁 Project Structure

```
ume2meu/
├── index.html       # Complete single-file PWA (HTML + CSS + JS)
├── manifest.json    # PWA web app manifest
├── icons/
│   ├── icon-192.png # PWA icon (192×192)
│   └── icon-512.png # PWA icon (512×512)
└── README.md
```

---

## 🗺️ Roadmap

- [x] Face-to-face two-person interpreter
- [x] Remote call mode (acoustic relay)
- [x] PWA installability (manifest + icons)
- [x] Translation fallback chain (MyMemory → LibreTranslate)
- [x] Firefox/Safari text-input fallback
- [x] WebRTC peer-to-peer (replace acoustic relay)
- [x] localStorage persistence (languages + history)
- [x] Translation watchdog timeout
- [x] Full accessibility (aria labels, roles)
- [ ] Streaming translation (sentence-by-sentence, lower latency)
- [ ] Language auto-detection
- [ ] Offline TTS voices
- [ ] Shared transcript link generation
- [ ] Custom translation API key support

---

## 📄 License

MIT © [sudarshanchakraindia](https://github.com/sudarshanchakraindia)
