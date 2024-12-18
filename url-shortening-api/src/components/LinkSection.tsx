import "./LinkSection.css";

export const LinkSection = () => {
  return (
    <section className="form-section">
      <form className="link-form">
        <input type="text" placeholder="Shorten a link here..." />
        <button className="btn-rectangle">Shorten It!</button>
      </form>
    </section>
  );
};
