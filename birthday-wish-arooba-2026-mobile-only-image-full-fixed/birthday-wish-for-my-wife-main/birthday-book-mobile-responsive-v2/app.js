
const REASONS = [
  {
    text: "February 6th — the day you said yes, and my whole life changed forever. That moment is engraved in my heart for eternity.",
    secretNote: "I still remember every second of that day — my hands shaking, your smile, and the second you said yes. It's the moment I became the luckiest man alive.",
    polaroidCaption: "The day you became my fiancée",
    quote: "On February 6th, you didn't just say yes to me — you said yes to forever.",
    chapter: "Chapter I ✦ February 6th, Where It All Began",
    image: "ch01-engagement-day.jpg"
  },
  {
    text: "From that day on, every step forward has been part of a journey I never want to end — one milestone, one memory, one 'us' at a time.",
    secretNote: "I couldn't stop looking at my phone, waiting for your texts, replaying our engagement day over and over. You turned an ordinary life into a love story that keeps writing itself.",
    polaroidCaption: "Our journey, moving forward together",
    quote: "Since that day, every ordinary moment feels like a new chapter of us.",
    chapter: "Chapter II ✦ The Journey Begins",
    image: "ch02-journey-begins.jpg"
  },
  {
    text: "Happy Birthday, my Arooba. September 26th is the day the whole world should celebrate — the day someone as wonderful as you was born.",
    secretNote: "Every year that passes makes me fall for you more. Watching you grow into the beautiful soul you are is my greatest joy — and my favourite part of our journey, from that first September 26th to this one.",
    polaroidCaption: "September 26th — the day my favourite person was born",
    quote: "Today is a celebration of the best thing that ever happened to me — you.",
    chapter: "Chapter III ✦ A Birthday Wish From My Heart",
    image: "ch03-birthday.jpg"
  },
  {
    text: "Your simplicity and your dimples — I love them both so much. There's nothing filmy about you, and that's exactly why I fell for you.",
    secretNote: "You don't try to be anything you're not, and that's what makes you so beautiful. Every time you smile and those dimples show up, my whole day gets better.",
    polaroidCaption: "Simple, sweet, and those dimples",
    quote: "In all the world, there is no heart for me like yours.",
    chapter: "Chapter IV ✦ Simple & Dimple",
    image: "ch04-dimples.jpg"
  },
  {
    text: "You call me 'mera balu' — and I love it more than any other name anyone has ever called me.",
    secretNote: "Every time you say 'mera balu', it feels like home. It's silly and it's soft and it's ours, and I never want it to change.",
    polaroidCaption: "Mera balu, always yours",
    quote: "One little name from you means more than the whole world.",
    chapter: "Chapter V ✦ Mera Balu",
    image: "ch05-mera-balu.jpg"
  },
  {
    text: "The way you care for me — checking if I've eaten, if I've slept, if I'm okay — nobody has ever loved me this carefully.",
    secretNote: "Your care isn't loud, but it's constant. It's in every 'did you eat', every reminder, every little worry you carry for me. It's one of the purest forms of love I know.",
    polaroidCaption: "Your quiet, constant care",
    quote: "You love with an open and boundless heart.",
    chapter: "Chapter VI ✦ You Take Care Of Me",
    image: "ch06-care.jpg"
  },
  {
    text: "You love me like a child sometimes — patient, gentle, and endlessly forgiving, even when I don't deserve it.",
    secretNote: "There's a softness in how you treat me, like I'm someone worth being gentle with no matter what. It makes me want to be someone worth all that patience.",
    polaroidCaption: "Gentle with me, always",
    quote: "In you, I found my greatest strength.",
    chapter: "Chapter VII ✦ You Love Me Like A Child",
    image: "ch07-gentle.jpg"
  },
  {
    text: "You treat me like the most lucky person in the world — and honestly, being loved by you, I really am.",
    secretNote: "Every day you remind me, in small ways, how much I mean to you. It's a feeling I never want to lose — being someone's whole good luck.",
    polaroidCaption: "The luckiest person because of you",
    quote: "You make the simplest days unforgettable.",
    chapter: "Chapter VIII ✦ Most Lucky Person In The World",
    image: "ch08-lucky.jpg"
  },
  {
    text: "Your love is real, and you are loyal to me — no games, no doubts, just you, choosing me, again and again.",
    secretNote: "In a world full of people who say things they don't mean, your loyalty is the safest place I know. I never have to wonder — I just know.",
    polaroidCaption: "Real love, real loyalty",
    quote: "Waking up to you is my favourite miracle.",
    chapter: "Chapter IX ✦ Real Love, Real Loyalty",
    image: "ch09-loyalty.jpg"
  },
  {
    text: "You are the best person in my life — not just my favourite person, but the best one I have ever known.",
    secretNote: "You have an aura of comfort and warmth that pulls everyone in. Just being near you feels like a warm embrace, and I never take that for granted.",
    polaroidCaption: "The best person I know",
    quote: "You make every dark corner feel warm.",
    chapter: "Chapter X ✦ The Best Person In My Life",
    image: "ch10-best-person.jpg"
  },
  {
    text: "The way you hold my hand like you never want to let go, just like you did the moment we got engaged on February 6th.",
    secretNote: "When your fingers intertwine with mine, all my worries vanish. February 6th was the first promise; every day since has been keeping it.",
    polaroidCaption: "Fingers laced forever since Feb 6",
    quote: "Holding your hand is holding my whole world.",
    chapter: "Chapter XI ✦ Hand In Hand",
    image: "ch11-hand-in-hand.jpg"
  },
  {
    text: "I love you so much, my Arooby ki bachi. From February 6th to forever — being with you already feels like coming home, and soon it will be, forever, as my wife.",
    secretNote: "No matter where we are in the world, as long as I'm with you, I am home. Happy birthday, my love, and happy anniversary to the day our story began. I love you so much, my Arooby ki bachi — forever and always.",
    polaroidCaption: "Coming home to you",
    quote: "With you, I have found my forever sanctuary.",
    chapter: "Chapter XII ✦ Forever & Always",
    image: "ch12-forever.jpg"
  }
];

const currentNum = document.getElementById('currentNum');
const totalNum = document.getElementById('totalNum');
const wishBadge = document.getElementById('wishBadge');
const chapterText = document.getElementById('chapterText');
const memoryImage = document.getElementById('memoryImage');
const photoCaption = document.getElementById('photoCaption');
const quoteText = document.getElementById('quoteText');
const mainText = document.getElementById('mainText');
const noteToggle = document.getElementById('noteToggle');
const secretNoteBox = document.getElementById('secretNoteBox');
const secretNoteText = document.getElementById('secretNoteText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBars = document.getElementById('progressBars');
const musicBtn = document.getElementById('musicBtn');
const musicText = musicBtn.querySelector('.music-text');
const storyCard = document.getElementById('storyCard');

let index = 0;
let noteOpen = false;
let soundEnabled = localStorage.getItem('arooba_music') === 'true';
let audioCtx = null;
let melodyLoop = null;
let melodyStep = 0;

function buildProgress() {
  progressBars.innerHTML = '';
  REASONS.forEach((_, i) => {
    const seg = document.createElement('div');
    seg.className = 'progress-seg';
    if (i < index) seg.classList.add('done');
    if (i === index) seg.classList.add('active');
    progressBars.appendChild(seg);
  });
}

function render() {
  const item = REASONS[index];
  currentNum.textContent = index + 1;
  totalNum.textContent = REASONS.length;
  wishBadge.textContent = `Wish #${index + 1}`;
  chapterText.textContent = item.chapter;
  photoCaption.textContent = item.polaroidCaption;
  quoteText.textContent = `“${item.quote}”`;
  mainText.textContent = item.text;
  secretNoteText.textContent = item.secretNote;
  memoryImage.src = item.image;
  memoryImage.alt = item.polaroidCaption;
  noteOpen = false;
  noteToggle.setAttribute('aria-expanded', 'false');
  noteToggle.textContent = 'Tap to read a secret note 💌';
  secretNoteBox.hidden = true;
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === REASONS.length - 1 ? 'Start Again ↺' : 'Next →';
  document.body.classList.toggle('final-slide', index === REASONS.length - 1);
  buildProgress();
  const nextIndex = (index + 1) % REASONS.length;
  const preload = new Image();
  preload.src = REASONS[nextIndex].image;
}

function nextSlide() {
  if (index >= REASONS.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  render();
}

function prevSlide() {
  if (index > 0) {
    index -= 1;
    render();
  }
}

noteToggle.addEventListener('click', () => {
  noteOpen = !noteOpen;
  secretNoteBox.hidden = !noteOpen;
  noteToggle.setAttribute('aria-expanded', String(noteOpen));
  noteToggle.textContent = noteOpen ? 'Hide the secret note ✨' : 'Tap to read a secret note 💌';
});
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let touchStartX = 0;
let touchEndX = 0;
storyCard.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
}, {passive: true});
storyCard.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) < 45) return;
  if (diff < 0) nextSlide();
  else prevSlide();
}, {passive: true});

// music
const NOTE_MAP = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  Bb4: 466.16, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
};
const MELODY = [
  ['G4', 0.26], ['G4', 0.26], ['A4', 0.5], ['G4', 0.5], ['C5', 0.5], ['B4', 0.95],
  ['G4', 0.26], ['G4', 0.26], ['A4', 0.5], ['G4', 0.5], ['D5', 0.5], ['C5', 0.95],
  ['G4', 0.26], ['G4', 0.26], ['G5', 0.5], ['E5', 0.5], ['C5', 0.5], ['B4', 0.5], ['A4', 0.95],
  ['F5', 0.26], ['F5', 0.26], ['E5', 0.5], ['C5', 0.5], ['D5', 0.5], ['C5', 1.05]
];
function initAudio() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}
function playTone(freq, dur) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.08, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + dur + 0.05);
}
function scheduleMelody() {
  if (!soundEnabled) return;
  const [note, dur] = MELODY[melodyStep];
  playTone(NOTE_MAP[note], dur);
  melodyStep = (melodyStep + 1) % MELODY.length;
  clearTimeout(melodyLoop);
  melodyLoop = setTimeout(scheduleMelody, dur * 1000 + 60);
}
function updateMusicUI() {
  musicBtn.setAttribute('aria-pressed', String(soundEnabled));
  musicText.textContent = soundEnabled ? 'Music On' : 'Music Off';
}
function toggleMusic() {
  soundEnabled = !soundEnabled;
  localStorage.setItem('arooba_music', String(soundEnabled));
  if (soundEnabled) {
    initAudio();
    melodyStep = 0;
    scheduleMelody();
  } else {
    clearTimeout(melodyLoop);
  }
  updateMusicUI();
}
musicBtn.addEventListener('click', toggleMusic);

render();
updateMusicUI();

if (soundEnabled) {
  initAudio();
  scheduleMelody();
}
