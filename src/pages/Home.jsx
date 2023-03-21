import { Link } from "react-router-dom";
import "../styles/home.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="hero">
        <div className="hero-text">
          <p className="big-text">So, you want to travel to</p>
          <h1>Space</h1>
          <p className="small-text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination">
          <button className="main-btn">Explore</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
