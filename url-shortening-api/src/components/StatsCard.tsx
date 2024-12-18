interface Props {
  card: { img: string; title: string; text: string };
}

export const StatsCard = ({ card }: Props) => {
  return (
    <div className="stats-card">
      <figure>
        <img src={card.img} alt={card.title} />
      </figure>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </div>
  );
};
