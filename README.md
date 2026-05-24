# 🎙️ Chatterbox – Real-Time Two-Way Voice Interpreter

> **Break the language barrier instantly.** Speak in your language — your partner hears it in theirs. No app to download, no login, no cost.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?logo=pwa)](https://sudarshanchakraindia.github.io/ume2meu/)
[![Languages](https://img.shields.io/badge/Languages-80%2B-green)](https://sudarshanchakraindia.github.io/ume2meu/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🤝 **Face to Face** | Two people, one screen — each speaks their own language |
| 📞 **Remote Call** | P2P WebRTC link via 6-character room code — no server needed |
| 🌊 **Live Streaming Translation** | See partial translations appear as you speak (800ms debounce) |
| 🌐 **80+ Languages** | Hindi, English, Spanish, French, Japanese, Arabic, and more |
| 🔁 **Translation Fallback** | MyMemory → LibreTranslate (3 mirrors) → graceful error |
| ⌨️ **Text Input Mode** | Full fallback for Firefox/Safari where mic API is unavailable |
| 💾 **Persistent Storage** | Language preferences + history survive page refresh |
| ♿ **Accessible** | Full ARIA labels, roles, modal semantics for screen readers |
| 📲 **PWA Installable** | Works offline, installable to home screen on any device |
| 🔍 **Auto-Detect Language** | 🆕 Tap 🔍 to auto-identify spoken language from speech |
| 🔇 **Offline TTS Voice Caching** | 🆕 Pre-load voices for offline/fast TTS in Settings ⚙️ |
| 🔗 **Shared Transcript Links** | 🆕 Generate a shareable URL from conversation history |
| 🔑 **Custom API Keys** | 🆕 Use your own DeepL or Google Translate key in Settings ⚙️ |
| 📄 **PDF Export** | 🆕 Export formatted conversation transcript as PDF |

---

## 🚀 Getting Started

**Live App:** [sudarshanchakraindia.github.io/ume2meu](https://sudarshanchakraindia.github.io/ume2meu/)

**Install as PWA:**
1. Open the app in Chrome/Edge
2. Click the install banner or the ⊕ icon in the address bar
3. Use it like a native app — works offline after first load

**Run Locally:**
```bash
git clone https://github.com/sudarshanchakraindia/ume2meu.git
cd ume2meu
npx serve . # or: python3 -m http.server 8080
# open http://localhost:8080
```

---

## 🤝 Face to Face Mode

1. Open the app on **one shared device**
2. Person A taps the 🎙️ button (top half) and speaks
3. The live translation streams in real time (⚡ indicator)
4. When done, the final translation is spoken aloud for Person B
5. Person B taps their mic (bottom half — already rotated 180°) to respond

**Auto-detect language:** Tap the 🔍 button next to the mic to enable auto language detection. The app will identify what language is being spoken and switch automatically.

---

## 📞 Remote Call (WebRTC P2P)

**Person A (host):**
1. Switch to the 📞 Remote Call tab
2. Tap **🔑 Create Room** — a 6-character code appears
3. Share that code with Person B (copy on tap)

**Person B (guest):**
1. Switch to 📞 Remote Call tab
2. Enter the code in the "Or Join Existing Room" field
3. Tap **🔗 Join Room**

Once connected, both people speak in their own languages. Translations are sent over a direct peer-to-peer data channel — no audio is transmitted, only text.

---

## 🌊 Live Streaming Translation

While you speak, Chatterbox shows a live ⚡ preview of the translation in the other person's panel — updating every 800ms as your speech is recognised. When you finish speaking, the final accurate translation replaces the preview and is spoken aloud.

---

## ⚙️ Settings

Tap **⚙️** in the header to access:

- **DeepL API Key** — paste your free or paid DeepL key for higher quality translations
- **Google Translate API Key** — use your Google Cloud key as a translation provider
- **Cache TTS Voices Offline** — pre-load voice data so TTS works faster offline

API keys are stored only on your device (localStorage). The free fallback chain always remains active.

---

## 🔗 Share Transcripts

Open 📜 History → tap **🔗** to generate a shareable URL encoding the last 20 conversation entries. Anyone with the link can open it in Chatterbox to view the transcript.

---

## 📄 Export as PDF

Open 📜 History → tap **📄** to open a print-ready formatted transcript in a new tab, then use your browser's Print → Save as PDF.

---

## 🌐 Browser Support

| Browser | Mic / STT | Text Mode | WebRTC | PWA Install |
|---|---|---|---|---|
| Chrome (desktop/Android) | ✅ | ✅ | ✅ | ✅ |
| Edge | ✅ | ✅ | ✅ | ✅ |
| Safari (iOS 16+) | ⚠️ Limited | ✅ | ✅ | ✅ (Add to Home) |
| Firefox | ❌ (no STT) | ✅ | ✅ | ✅ |
| Samsung Internet | ✅ | ✅ | ✅ | ✅ |

**Safari iOS 16+ mic fix:** The app now requests `getUserMedia` before initialising SpeechRecognition to comply with Safari's stricter media permission model.

**Firefox:** No Web Speech API — text input fallback activates automatically.

**Desktop mic fix:** Microphone is requested immediately on tap (no async delay), fixing the "mic not working" issue on desktop browsers.

---

## 🔤 Translation API

Chatterbox uses a free fallback chain — no API key required:

1. **DeepL** (if custom key set in ⚙️ Settings)
2. **Google Translate** (if custom key set in ⚙️ Settings)
3. **MyMemory** — 1,000 words/day per IP, fastest free option
4. **LibreTranslate** (argosopentech.com) — open-source fallback
5. **LibreTranslate** (terraprint.co) — secondary mirror
6. **Graceful error** — shows original text if all fail

All requests have an 8-second per-call timeout and a 12-second hard watchdog.

---

## 📁 Project Structure

```
ume2meu/
├── index.html       # Single-file PWA (HTML + CSS + JS, ~79 KB)
├── manifest.json    # PWA manifest (name, icons, display)
├── icons/
│   ├── icon-192.png # PWA icon (192×192)
│   └── icon-512.png # PWA icon (512×512)
└── README.md
```

---

## 🗺️ Roadmap

- [x] PWA installable (manifest + icons)
- [x] Translation fallback chain (MyMemory → LibreTranslate)
- [x] STT text fallback (Firefox/Safari)
- [x] WebRTC peer-to-peer room linking
- [x] localStorage persistence (languages + history)
- [x] Translation watchdog timeout
- [x] Full accessibility (ARIA labels, roles, dialogs)
- [x] Live streaming translation (real-time partial preview)
- [x] Language auto-detection (detect spoken language automatically)
- [x] Offline TTS voice caching
- [x] Shared transcript link generation
- [x] Custom API key support (DeepL / Google Translate)
- [x] Conversation export as formatted PDF

---

## 📄 License

MIT © [sudarshanchakraindia](https://github.com/sudarshanchakraindia)
