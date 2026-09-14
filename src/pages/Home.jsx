import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="Barakah">
      <div className="BarakahContent">
        <h3>Find your Favourite product here</h3>

        <Link to="/products">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;