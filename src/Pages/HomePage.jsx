import ContentContainer from "../Components/Layouts/ContentContainer";

const HomePage = () => {
  return (
    <ContentContainer>
      <section className="featured-quote">
        <p className="featured-quote__label">Quote of the day</p>
        <blockquote className="featured-quote__content">"The secret of getting ahead is getting started"</blockquote>
        <p className="featured-quote__author">Mark Twain</p>
      </section>
    </ContentContainer>
  );
};

export default HomePage;
