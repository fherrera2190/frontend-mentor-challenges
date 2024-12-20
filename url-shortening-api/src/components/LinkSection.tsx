import "./LinkSection.css";

export const LinkSection = () => {
  return (
    <section className="form-section">
      <form className="link-form">
        <input type="text" placeholder="Shorten a link here..." />
        <button className="btn-rectangle">Shorten It!</button>
      </form>

      <div className="link-list">
        <div className="link-item">
          <p className="link-original">
            http://www.frontendmentor.io/challenges
          </p>
          <hr />
          <div className="link-shortened">
            <a href="#">www.short.ly/short-link</a>
            <button className="btn-rectangle">Copy</button>
          </div>
        </div>
        <div className="link-item">
          <p className="link-original">
            http://www.frontendmentor.io/challenges
          </p>
          <hr />
          <div className="link-shortened">
            <a href="#">www.short.ly/short-link</a>
            <button className="btn-rectangle">Copy</button>
          </div>
        </div>
        <div className="link-item">
          <p className="link-original">
            http://www.frontendmentor.io/challenges
          </p>
          <hr />
          <div className="link-shortened">
            <a href="#">www.short.ly/short-link</a>
            <button className="btn-rectangle">Copy</button>
          </div>
        </div>
      </div>
    </section>
  );
};
