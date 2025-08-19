export default function App() {
  return (
    <div id="quote-box">
      <p id="text">Hello world</p>
      <p id="author">— You</p>
      <div className="row">
        <a
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/intent/tweet"
        >
          Tweet
        </a>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}
