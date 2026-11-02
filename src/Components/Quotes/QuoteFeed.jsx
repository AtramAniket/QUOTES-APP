import QuoteCard from "./QuoteCard";
import { quotes } from "../../Lib/temp";

const QuoteFeed = () => {
  return (
    <section className="quote-feed">
      <h2 className="quote-feed__heading">Recently Discovered</h2>

      <div className="quote-feed__grid">
        {quotes?.map((quote) => (
          <QuoteCard key={quote.id} quote={quote.quote} author={quote.author} />
        ))}
      </div>
    </section>
  );
};

export default QuoteFeed;
