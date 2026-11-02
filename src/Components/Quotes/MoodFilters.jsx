import { moods } from "../../Lib/temp";

const MoodFilters = () => (
  <section className="mood-filters" aria-label="Filter quotes by mood">
    <div className="mood-filters__list">
      {moods.map((mood) => (
        <button
          key={mood}
          className="mood-filters__button"
          type="button"
        >
          {mood}
        </button>
      ))}
    </div>
  </section>
);

export default MoodFilters;
