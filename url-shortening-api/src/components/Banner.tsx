import "./Banner.css";
export const Banner = () => {
  return (
    <section className="banner-container">
      <article className="banner">
        <img src="./images/illustration-working.svg" alt="banner" />
      </article>
      <article className="banner-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn">Get Started</button>
      </article>
    </section>
  );
};
