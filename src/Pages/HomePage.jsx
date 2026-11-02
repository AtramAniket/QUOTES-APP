import QuoteFeed from "../Components/Quotes/QuoteFeed"
import ContentContainer from "../Components/Layouts/ContentContainer";
import MoodFilters from "../Components/Quotes/MoodFilters";

const HomePage = () => {
  return (
    <ContentContainer>
      <section className="featured-quote">
        <p className="featured-quote__label">Quote of the day</p>
        <blockquote className="featured-quote__text">"The secret of getting ahead is getting started"</blockquote>
        <p className="featured-quote__author">Mark Twain</p>
      </section>

      <QuoteFeed />
    </ContentContainer>
  );
};

export default HomePage;
