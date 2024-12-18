import { NavBar } from "../../components/NavBar";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="container bellefair-regular">
        <div className="home-text">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p className="barlow-regular-italic">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={`explore-link`}>
          <a>Explore</a>
        </div>
      </main>
    </>
  );
};
