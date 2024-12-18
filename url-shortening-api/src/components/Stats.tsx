import "./Stats.css";
import { StatsCard } from "./StatsCard";
const cardsStats = [
  {
    img: "./images/icon-brand-recognition.svg",
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    img: "./images/icon-detailed-records.svg",
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    img: "./images/icon-fully-customizable.svg",
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
export const Stats = () => {
  return (
    <section className="stats">
      <article className="stats-title">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </article>
      <article className="stats-cards">
        {cardsStats.map((card) => (
          <StatsCard key={card.title} card={card} />
        ))}
      </article>
    </section>
  );
};
