import { useState } from "react";

type Quote = { text: string; author: string };

const QUOTES: Quote[] = [
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Do or do not. There is no try.", author: "Yoda" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
];

function randomQuote(current?: Quote): Quote {
  let q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  if (current && QUOTES.length > 1 && q.text === current.text) {
    q = QUOTES[(QUOTES.indexOf(q) + 1) % QUOTES.length];
  }
  return q;
}

export default function App() {
  const [quote, setQuote] = useState<Quote>(() => randomQuote());

  const tweetHref =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(`${quote.text} — ${quote.author}`);

  return (
    <main>
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">— {quote.author}</p>
        <div className="row">
          <a id="tweet-quote" href={tweetHref} target="_blank" rel="noreferrer">
            Tweet
          </a>
          <button id="new-quote" onClick={() => setQuote(randomQuote(quote))}>
            New Quote
          </button>
        </div>
      </div>
    </main>
  );
}
