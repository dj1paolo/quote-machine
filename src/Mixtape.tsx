import { useEffect, useRef, useState } from "react";
import "./Mixtape.css";

type QA = { quote: string; author: string; audio?: string; background?: string };

// Deterministic list so FCC sees text+author change on each click
const QUOTES: QA[] = [
  {
    quote: "Let the beat take you where the words can't.",
    author: "1Paolo",
    audio: "/mixtape1.mp3",
    background: "/mixtape-img1.jpg",
  },
  {
    quote:
      "Turn the music up, forget the drama, and dance like nobody's judging.",
    author: "Unknown",
    audio: "/mixtape2.mp3",
    background: "/mixtape-img2.jpg",
  },
  {
    quote:
      "Let the rhythm guide you, the bass move you, and the night never end.",
    author: "Paolo Q.",
    audio: "/mixtape3.mp3",
    background: "/mixtape-img3.jpg",
  },
];

export default function Mixtape() {
  // FCC needs quote/author present on load → start at 0
  const [i, setI] = useState<number>(0);
  // Opening overlay shown initially (does not remove #quote-box from DOM)
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const current = QUOTES[i];
  const text = current.quote.trim();
  const author = current.author.trim();

  // Change ONLY when button is clicked (deterministic → always changes)
  const next = () => setI((n) => (n + 1) % QUOTES.length);

  

  // Play audio when quote changes (optional, doesn’t affect tests)
  useEffect(() => {
    if (!current.audio || !audioRef.current) return;
    const el = audioRef.current;
    el.src = current.audio;
    el.currentTime = 0;
    el.play().catch(() => {});
  }, [i, current.audio]);

  // FCC-style tweet URL
  const tweetText = `"${text}" - ${author}`;
  const tweetHref =
    "https://twitter.com/intent/tweet" +
    `?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(tweetText)}`;

  return (
    <div
      className="mixtape-page"
      style={{
        backgroundImage: current.background ? `url(${current.background})` : undefined,
      }}
    >
      <div className="scrim" />

      {/* FCC checks THIS exact element is centered */}
      <div id="quote-box" className="card">
        <p id="text" className="quote">{text}</p>
        <p id="author" className="author">{author}</p>

        <div className="actions">
          <button id="new-quote" className="btn" onClick={next}>
            New Vibe
          </button>
          <a
            id="tweet-quote"
            className="btn-outline"
            href={tweetHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>

      {/* Optional IG watermark/button – doesn't affect tests */}
      <a
        href="https://www.instagram.com/dj1paolo/"
        target="_blank"
        rel="noreferrer"
        className="watermark"
      >
        @dj1paolo
      </a>

      <audio ref={audioRef} preload="auto" />

      {/* Opening overlay (fixed on top; quote-box still exists underneath) */}
      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-card">
            <h1 className="overlay-title">Mixtape</h1>
            <p className="overlay-subtitle">Start a vibe — get in your feels.</p>
            <button className="btn overlay-btn" onClick={() => setShowOverlay(false)}>
              Start the Vibe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
