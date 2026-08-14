// Web Audio Engine for Code Comic & CodeUtsava 10.0
// Procedural Lo-Fi Synthesizer & Comic Sound Effects

let audioCtx = null;

export const getAudioContext = () => {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
};

// Sound Effects
export const playSound = (type = "blip") => {
  try {
    const ctx = getAudioContext();
    if (!ctx || ctx.state === "suspended") return;
    const now = ctx.currentTime;

    switch (type) {
      case "blip": {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
        break;
      }

      case "pop": {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.07);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.07);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.07);
        break;
      }

      case "pageTurn": {
        // Noise buffer for realistic comic paper swish
        const bufferSize = ctx.sampleRate * 0.12;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.exponentialRampToValueAtTime(2400, now + 0.12);
        filter.Q.value = 3;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.12);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start(now);
        break;
      }

      case "keyClack": {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(180 + Math.random() * 120, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
        break;
      }

      case "compileSuccess": {
        // Joyful 3-chord major arpeggio
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0.07, now + i * 0.08);
          gain.gain.linearRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.25);
        });
        break;
      }

      case "bugAlert": {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(160, now + 0.1);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.warn("Audio effect error:", err);
  }
};

// Tracks Metadata
export const COMIC_TRACKS = [
  {
    id: "lofi-compiler",
    title: "01. lo-fi compiler beats (code & chill)",
    artist: "DJ Bit & The NITR Sheep",
    mood: "Chill Coding Chords",
    bpm: 85,
    coverColor: "#FF9820",
    chords: [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [293.66, 349.23, 440.00, 523.25], // Dm7
      [196.00, 246.94, 293.66, 349.23], // G7
    ]
  },
  {
    id: "midnight-hack",
    title: "02. 36-hour midnight coffee rush",
    artist: "Byte the Dino",
    mood: "Upbeat Synth Wave",
    bpm: 115,
    coverColor: "#FF528F",
    chords: [
      [220.00, 329.63, 440.00, 554.37], // A major add9
      [174.61, 261.63, 349.23, 440.00], // F major
      [196.00, 293.66, 392.00, 493.88], // G major
      [164.81, 246.94, 329.63, 415.30], // E major
    ]
  },
  {
    id: "nit-raipur-anthem",
    title: "03. victory at nit raipur clock tower",
    artist: "TCP All-Stars ft. Justine",
    mood: "Pop Comic Triumph",
    bpm: 95,
    coverColor: "#2958FF",
    chords: [
      [261.63, 329.63, 392.00, 523.25], // C
      [349.23, 440.00, 523.25, 698.46], // F
      [392.00, 493.88, 587.33, 783.99], // G
      [220.00, 261.63, 329.63, 440.00], // Am
    ]
  }
];
