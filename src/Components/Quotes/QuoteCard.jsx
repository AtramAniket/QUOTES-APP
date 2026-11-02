const QuoteCard = ({ quote, author }) => {
  return (
    <article className="quote-card">
      <blockquote className="quote-card__text">"{quote}"</blockquote>
      <p className="quote-card__author">{author}</p>
      <div className="quote-card__actions">
        <button className="quote-card__action" type="button">Save</button>
        <button className="quote-card__action" type="button">Share</button>
      </div>
    </article>
  );
};

export default QuoteCard;
