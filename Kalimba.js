// Notes for a 17-key kalimba (C major scale)
// Arranged from left (shortest) to right (shortest) with longest in center
const notes = [
  { note: `D\n:\n2`, frequency: 1975.53 }, // Left side (short)
  { note: `B\n.\n7`, frequency: 1760.0 },
  { note: `G\n.\n5`, frequency: 1567.98 },
  { note: `E\n.\n3`, frequency: 1396.91 },
  { note: `C\n.\n1`, frequency: 1318.51 },
  { note: `A\n^\n6`, frequency: 1174.66 },
  { note: `F \n^\n4`, frequency: 1046.5 },
  { note: `D\n^\n2`, frequency: 987.77 },
  { note: `C\n^\n1`, frequency: 523.25 }, // Center (longest)
  { note: `E\n^\n3`, frequency: 587.33 },
  { note: `G\n^\n5`, frequency: 659.25 },
  { note: `B\n^\n7`, frequency: 698.46 },
  { note: `D\n.\n2`, frequency: 783.99 },
  { note: `F\n.\n4`, frequency: 880.0 },
  { note: `A\n.\n6`, frequency: 987.77 },
  { note: `C\n:\n1`, frequency: 1046.5 },
  { note: `E\n:\n3`, frequency: 1174.66 }, // Right side (short)
];

// Create audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create tines with authentic kalimba layout
const tinesContainer = document.getElementById("tines");

// Calculate tine heights (longest in center, shorter toward ends)
const baseHeight = 160;
const tineCount = notes.length;
const centerIndex = Math.floor(tineCount / 2);

notes.forEach((noteObj, index) => {
  const distanceFromCenter = Math.abs(index - centerIndex);
  const height = baseHeight - distanceFromCenter * 10; // Adjust 10 to change height difference

  const tine = document.createElement("div");
  tine.className = "tine";
  tine.style.height = `${height}px`;

  const label = document.createElement("div");
  label.className = "note-label";
  label.textContent = noteObj.note;
  tine.appendChild(label);

  tine.addEventListener("mousedown", () => {
    playNote(noteObj.frequency);
    tine.classList.add("active");
    setTimeout(() => tine.classList.remove("active"), 100);
  });

  tine.addEventListener("touchstart", (e) => {
    e.preventDefault();
    playNote(noteObj.frequency);
    tine.classList.add("active");
    setTimeout(() => tine.classList.remove("active"), 100);
  });

  tinesContainer.appendChild(tine);
});

// Function to play a note with kalimba-like sound
function playNote(frequency) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;

  gainNode.gain.value = 0.5;
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 2
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 2);
}

// Enable keyboard controls (mapped left-to-right on keyboard)
document.addEventListener("keydown", (e) => {
  const keyIndex = "qwertyuiopasdfghj".indexOf(e.key.toLowerCase());
  if (keyIndex >= 0 && keyIndex < notes.length) {
    playNote(notes[keyIndex].frequency);
    // Visual feedback
    const tine = document.querySelectorAll(".tine")[keyIndex];
    tine.classList.add("active");
    setTimeout(() => tine.classList.remove("active"), 100);
  }
});
