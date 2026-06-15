import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <h1>Protect. Glow.</h1>

        <h2>Premium SPF 50+ Protection</h2>

        <p>
          Advanced sun protection powered by skin-loving ingredients.
          Stay protected, hydrated and radiant every day.
        </p>

        <button>Shop Now</button>
      </div>

      {/* ADD THIS SECTION BELOW THE HERO */}

      <section className="products-preview">
        <h2>Best Sellers</h2>

        <div className="cards">
          <div className="card">
            <h3>SPF 50+ Cream</h3>
            <p>Maximum UV Protection</p>
          </div>

          <div className="card">
            <h3>Sun Serum</h3>
            <p>Brightening Formula</p>
          </div>

          <div className="card">
            <h3>Hydrating Gel</h3>
            <p>Cooling & Refreshing</p>
          </div>
        </div>
      </section>
    </>
  );



  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>PROTECT. GLOW.</h1>

      <h2>Premium SPF 50+ Protection</h2>

      <p>
        Advanced sun protection powered by skin-loving ingredients.
        Stay protected, hydrated and radiant every day.
      </p>

      <button
        className="shop-btn"
        onClick={() => navigate("/http://localhost:3000/menu")}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Home;